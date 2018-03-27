import * as firebase from 'firebase'
import replaceProperties from '../../util/replace-properties'

const loadEditorState = async (id) => {
  const db = firebase.database()

  const snapshot = await db.ref(`editorStates/${id}`).once('value')
  const editorState = snapshot.val()
  replaceProperties(editorState)

  return editorState
}

export default loadEditorState
