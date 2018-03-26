import * as firebase from 'firebase'

const saveEditorState = async (editorState) => {
  const db = firebase.database()

  const editorStateRef = db.ref('editorStates/').push()
  await editorStateRef.set(editorState)

  return editorStateRef.key
}

export default saveEditorState
