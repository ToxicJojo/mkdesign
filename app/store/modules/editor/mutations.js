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
  changeHistory (state, historyObject) {
    state.history[historyObject.index] = historyObject
    // A quick hack so the history refreshes
    state.history.push({})
    state.history.pop()
  },
  setNewestWizard (state, wizardName) {
    state.newestWizard = wizardName
  }
}

export default mutations
