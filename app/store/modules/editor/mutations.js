const mutations = {
  setKeyboard (state, keyboard) {
    state.currentKeyboard = keyboard
  },
  setBoardColor (state, color) {
    state.currentKeyboard.boardColor = color
  },
  setFont (state, font) {
    state.currentKeyboard.font = font
  },
  addToHistory (state, historyObject) {
    state.history.push(historyObject)
  },
}

export default mutations
