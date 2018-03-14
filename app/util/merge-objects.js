const mergeObjects = (target, source) => {
  //const targetCopy = JSON.parse(JSON.stringify(target))
  Object.keys(source).forEach((key) => {
    if (source[key] !== null && source.hasOwnProperty(key)) {
      if (typeof(source[key]) === 'object') {
        //targetCopy[key] = mergeObjects(targetCopy[key], source[key])
        mergeObjects(target[key], source[key])
      } else {
        //targetCopy[key] = source[key]
        target[key] = source[key]
      }
    }
  })
  //return targetCopy
}

export default mergeObjects
