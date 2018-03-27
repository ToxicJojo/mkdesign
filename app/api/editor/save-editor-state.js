import * as firebase from 'firebase'
import replaceNullProperties from '../../util/replace-null-properties'

const saveEditorState = async (editorState) => {
  const db = firebase.database()

  const editorStateCopy = JSON.parse(JSON.stringify(editorState))

  replaceNullProperties(editorStateCopy)

  const editorStateRef = db.ref('editorStates/').push()
  await editorStateRef.set(editorStateCopy)

  return editorStateRef.key
}

export default saveEditorState
