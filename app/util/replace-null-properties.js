const REPLACEMENT_VALUE = 'null'

const replaceNullProperties = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === null) {
      obj[key] = REPLACEMENT_VALUE
    } else if (typeof(obj[key]) === 'object') {
      replaceNullProperties(obj[key])
    }
  })
}

export default replaceNullProperties
