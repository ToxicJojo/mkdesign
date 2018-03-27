const REPLACEMENT_VALUE = 'null'

const replaceProperties = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === REPLACEMENT_VALUE) {
      obj[key] = null
    } else if (typeof(obj[key]) === 'object') {
      replaceProperties(obj[key])
    }
  })
}

export default replaceProperties
