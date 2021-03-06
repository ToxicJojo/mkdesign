import mergeObjects from '../../../util/merge-objects'

const mutations = {
  setEditorState(state, editorState) {
    state.currentKeyboard = editorState.currentKeyboard
    state.history = editorState.history
    state.newestWizard = editorState.newestWizard
    state.mode = editorState.mode
  },
  setKeyboard (state, keyboard) {
    state.currentKeyboard = keyboard
  },
  reset (state) {
    state.currentKeyboard = null
    state.history = []
    state.newestWizard = 'layout'
    state.mode = {
      type: 'none',
      data: {
      },
    }
  },
  setBoardColor (state, color) {
    state.currentKeyboard.boardColor = color
  },
  setFont (state, font) {
    mergeObjects(state.currentKeyboard.defaultKeyConfig.font, font)
  },
  setKeycapColor (state, color) {
    state.currentKeyboard.defaultKeyConfig.color = color
  },
  setFontColor (state, color) {
    state.currentKeyboard.defaultKeyConfig.font.fontColor = color
  },
  setLegendPlacement (state, placement) {
    state.currentKeyboard.defaultKeyConfig.legendPlacement = placement
  },
  updateKey (state, data) {
    state.currentKeyboard.blocks.forEach((block, blockIndex) => {
      if (block.name === data.blockName) {
        block.rows.forEach((row, rowIndex) => {
          if (row.index === data.rowIndex) {
            row.keys.forEach((key, keyIndex) => {
              if (key.id === data.keyId) {
                /*for (const name in data.keyData) {
                  if (data.keyData.hasOwnProperty(name)) {
                    state.currentKeyboard.blocks[blockIndex].rows[rowIndex].keys[keyIndex][name] = data.keyData[name]
                  }
                }*/
                mergeObjects(state.currentKeyboard.blocks[blockIndex].rows[rowIndex].keys[keyIndex], data.keyData)
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
          mergeObjects(state.currentKeyboard.blocks[blockIndex].rows[rowIndex].keys[keyIndex], data.keyData)
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
  },
  setMode (state, mode) {
    state.mode = mode
  },
}

export default mutations
