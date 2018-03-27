const downloadFile = (fileType, fileData, fileName) => {
  const dataStr = `data:${fileType};${fileData}`
  const downloadAnchorNode = document.createElement('a')
  downloadAnchorNode.setAttribute('href',     dataStr)
  downloadAnchorNode.setAttribute('download',fileName)
  downloadAnchorNode.click()
  downloadAnchorNode.remove()
}

export default downloadFile
