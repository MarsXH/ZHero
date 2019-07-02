
exports.wrapCustomClass = function (render) {
  return function (...args) {
    console.log(render(...args))
    let obj = render(...args)
    .replace('<code v-pre class="', '<code class="hljs ')
    .replace('<code>', '<code class="hljs">')
    console.log(obj)
    return obj
  }
}
