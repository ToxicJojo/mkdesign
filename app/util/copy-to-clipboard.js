const copyToClipboard = (text) => {
  // Create a textarea to copy the text from
  const textArea = document.createElement('textarea')
  textArea.value = text
  document.body.appendChild(textArea)

  textArea.focus()
  textArea.select()

  document.execCommand('copy')
  document.body.removeChild(textArea)
}

export default copyToClipboard
