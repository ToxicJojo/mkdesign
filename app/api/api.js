import * as firebase from 'firebase'

import editor from './editor'
import config from './firebase-config.json'

const initialize = () => {
  firebase.initializeApp(config)
}

export default {
  initialize,
  editor,
}
