import variables from '!!sass-variable-loader!../sass/variables/_size.scss'

const keycapSizePlugin = {
  install (Vue) {
    
    const charArray = variables.keycapSize.split('')

    const numberChars = charArray.filter((c) => {
      const numberChar = Number(c)
      return !isNaN(numberChar)
    })

    const keycapSize = numberChars.join('')

    Vue.prototype.$keycapSize = keycapSize
  }
}

export default keycapSizePlugin
