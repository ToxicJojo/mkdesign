import keyboard40percent from '../data/keyboard-40-percent.json'
import keyboard60percent from '../data/keyboard-60-percent.json'
import keyboardTenkeyless from '../data/keyboard-tenkeyless.json'
import keyboardFull from '../data/keyboard-full.json'

const keyboardDataPlugin = {
  install (Vue) {
    const keyboards = [keyboard40percent, keyboard60percent, keyboardTenkeyless, keyboardFull]

    Vue.prototype.$keyboards = keyboards
  }
}

export default keyboardDataPlugin
