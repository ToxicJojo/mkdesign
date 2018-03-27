const mergeObjects = (target, source) => {
  Object.keys(source).forEach((key) => {
    if (source[key] !== null && source.hasOwnProperty(key)) {
      if (typeof(source[key]) === 'object') {
        mergeObjects(target[key], source[key])
      } else {
        target[key] = source[key]
      }
    }
  })
}

export default mergeObjects
