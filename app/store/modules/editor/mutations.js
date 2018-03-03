const mutations = {
  setKeyboard (state, keyboard) {
    state.currentKeyboard = keyboard
  },
  addToHistory (state, historyObject) {
    state.history.push(historyObject)
  },
}

export default mutations
