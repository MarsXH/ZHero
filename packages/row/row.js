export default {
  name: 'ElRow',
  componentName: 'ElRow',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: Number, // 栅格间隔
    type: String, // 布局模式，可选 flex，现代浏览器下有效
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    }
  },
  computed: {
    style() {
      const ret = {};
      if (this.gutter) {
        // 当有间隔时，为了设置两边margin相等使其居中
        ret.marginLeft = `-${this.gutter / 2}px`;
        ret.marginRight = ret.marginLeft;
      }
      return ret;
    }
  },
  render(h) {
    return h(this.tag, {
      class: [
        'z-row',
        this.justify !== 'start' ? `is-justify-${this.justify}` : '',
        this.align !== 'top' ? `is-align-${this.align}` : '',
        { 'z-row--flex': this.type === 'flex' }
      ],
      style: this.style
    }, this.$slots.default);
  }
};
