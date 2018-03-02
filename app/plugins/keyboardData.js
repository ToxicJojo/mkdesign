import keyboard75percent from '../data/keyboard-75-percent.json'
import keyboard60percent from '../data/keyboard-60-percent.json'

const keyboardDataPlugin = {
  install (Vue) {
    
    const keyboards = [keyboard60percent, keyboard75percent, keyboard75percent]

    Vue.prototype.$keyboards = keyboards
  }
}

export default keyboardDataPlugin
