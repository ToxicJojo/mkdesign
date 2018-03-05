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
  setFontColor (state, color) {
    state.currentKeyboard.fontColor = color
  },
  updateKey (state, data) {
    state.currentKeyboard.blocks.forEach((block, blockIndex) => {
      if (block.name === data.block) {
        block.rows.forEach((row, rowIndex) => {
          if (row.index === data.row) {
            row.keys.forEach((key, keyIndex) => {
              if (key.id === data.key) {
                for (const name in data.keyData) {
                  if (data.keyData.hasOwnProperty(name)) {
                    state.currentKeyboard.blocks[blockIndex].rows[rowIndex].keys[keyIndex][name] = data.keyData[name]
                  }
                }
              }
            })
          }
        })
      }
    })
  },
  updateAllKeys (state, data) {
    state.currentKeyboard.blocks.forEach((block, blockIndex) => {
      block.rows.forEach((row, rowIndex) => {
        row.keys.forEach((key, keyIndex) => {
          for (const name in data) {
            if (data.hasOwnProperty(name)) {
              state.currentKeyboard.blocks[blockIndex].rows[rowIndex].keys[keyIndex][name] = data[name]
            }
          }
        })
      })
    })
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
