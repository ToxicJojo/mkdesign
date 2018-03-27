import * as firebase from 'firebase'
import replaceNullProperties from '../../util/replace-null-properties'

const saveEditorState = async (editorState) => {
  const db = firebase.database()

  const editorStateCopy = JSON.parse(JSON.stringify(editorState))

  // Replaces the value of null properties with a string 'null'.
  // This is needed because firebase won`t save properties with a null value
  // We need these null values though for Vues reactivity
  replaceNullProperties(editorStateCopy)

  const editorStateRef = db.ref('editorStates/').push()
  await editorStateRef.set(editorStateCopy)

  return editorStateRef.key
}

export default saveEditorState
