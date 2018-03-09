const removeNullProperties = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === null) {
      delete obj[key]
    } else if (typeof(obj[key]) === 'object') {
      removeNullProperties(obj[key])
    }
  })
}

export default removeNullProperties
