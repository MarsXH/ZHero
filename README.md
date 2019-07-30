# ZHero

> This is an UI framework for Vue.

## npm 安装
```
npm install zhero-ui
```

# 快速上手
将介绍如何使用 ZHero。

## 引入 ZHero
你可以引入整个 ZHero，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 ZHero。

#### 完整引入
在 main.js 中写入以下内容：
```
import Vue from 'vue';
import App from './App.vue';
import ZHeroUI from 'zhero-ui';
import 'zhero-ui/lib/zhero-ui.css';

Vue.use(ZHeroUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
以上代码便完成了 ZHero 的引入。

#### 按需引入
借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：
```
npm install babel-plugin-component -D
```
然后，将 .babelrc 修改为：
```
{
  "plugins": [
    [
      "component",
      {
        "libraryName": "zhero-ui",
        "libDir": "packages",
      }
    ]
  ]
}
```
接下来，如果你只希望引入部分组件，比如 Button ，那么需要在 main.js 中写入以下内容：
```
import Vue from 'vue';
import App from './App.vue';
import { Btn } from 'zhero-ui';
import 'zhero-ui/lib/zhero-ui.css';

Vue.use(Btn);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
完整组件列表和引入方式
```
import Vue from 'vue';
import {
  Btn
} from 'zhero-ui';

Vue.use(Btn);
```
