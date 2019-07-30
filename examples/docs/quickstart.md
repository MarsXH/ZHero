## 快速上手

本节将介绍如何在项目中使用 ZHero。

### 引入 ZHero

你可以引入整个 ZHero，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 ZHero。

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import ZHeroUI from 'zhero-ui';
import App from './App.vue';

Vue.use(ZHeroUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 ZHero 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入

如果你只希望引入部分组件，比如 Button，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import { Btn } from 'zhero-ui';
import App from './App.vue';

Vue.component(Btn.name, Btn);
/* 或写为
 * Vue.use(Btn)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

完整组件列表和引入方式

```javascript
import Vue from 'vue';
import {
  Btn,
} from 'zhero-ui';

Vue.use(Btn);
```

### 开始使用

至此，一个基于 Vue 和 ZHero 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。
