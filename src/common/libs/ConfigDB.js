import firebase from 'firebase'

const database = process.env.DATABASE

const config = {
  apiKey: database.apiKey,
  authDomain: database.authDomain,
  databaseURL: database.databaseURL,
  projectId: database.projectId,
  storageBucket: database.storageBucket,
  messagingSenderId: database.messagingSenderId,
}
const randomString = new Date().getTime()
const otherApp = firebase.initializeApp(config, `NotifyApp${randomString}`)

// Get a reference to the database service
const Database = otherApp.database()

console.log('create config')

export default Database
