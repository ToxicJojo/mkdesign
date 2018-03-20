import keyboardTenkeyless from '../data/keyboard-tenkeyless.json'
import keyboard60percent from '../data/keyboard-60-percent.json'
import keyboard40percent from '../data/keyboard-40-percent.json'

const keyboardDataPlugin = {
  install (Vue) {
    
    const keyboards = [keyboard40percent, keyboard60percent, keyboardTenkeyless]

    Vue.prototype.$keyboards = keyboards
  }
}

export default keyboardDataPlugin
