const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
const MarkdownItContainer = require('markdown-it-container')
// const MarkdownItCheckBox = require('markdown-it-task-checkbox')
// const MarkdownItDec = require('markdown-it-decorate')
const utils = require('./build/utils')


const vueMarkdown = {
  raw: true,
  preprocess: (MarkdownIt, source) => {
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">'
    }
    // ```html``` 给这种样式加个class hljs
    MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(
      MarkdownIt.renderer.rules.fence
    )
    // ```code``` 给这种样式加个class code_inline
    const codeInline = MarkdownIt.renderer.rules.code_inline
    MarkdownIt.renderer.rules.code_inline = function (...args) {
      args[0][args[1]].attrJoin('class', 'code_inline')
      return codeInline(...args)
    }
    return source
  },
  use: [
    [
      MarkdownItContainer,
      'demo',
      {
        // 用于校验包含demo的代码块
        validate: params => params.trim().match(/^demo\s*(.*)$/),
        render: function (tokens, index) {
          let { nesting, info } = tokens[index]
          if (nesting === 1) {
            // 1.获取代码块的描述内容
            let content = info.trim().match(/^demo\s+(.*)$/) || []
            let description = content.length > 1 ? content[1] : ""
            var md = require("markdown-it")()
            if (description) {
              description = md.render(description)
            }
            // 2.获取代码块内的html和js代码
            let code = tokens[index + 1].content
            // 3.代码块包裹
            return `<demo-block>
                      <div class="source" slot="source">${code}</div>
                      ${description}
                      <div slot="highlight">`
          }
          return '</div></demo-block>\n'
        }
      }
    ]
    // [
    //   MarkdownItCheckBox,
    //   {
    //     disabled: true
    //   }
    // ],
    // [MarkdownItDec]
  ]
}
module.exports = {
  publicPath: './',
  // 修改 src 为 examples
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('examples'))
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options(vueMarkdown)
  }
}