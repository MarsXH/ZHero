/* eslint-disable */
import ZBtn from './btn'

const components = [ZBtn]

export default function(Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}
