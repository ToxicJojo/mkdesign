const mutations = {
  setKeyboard (state, keyboard) {
    state.currentKeyboard = keyboard
  },
  setBoardColor (state, color) {
    state.currentKeyboard.boardColor = color
  },
  addToHistory (state, historyObject) {
    state.history.push(historyObject)
  },
}

export default mutations
