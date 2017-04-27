import * as firebase from 'firebase'

class Database {
  constructor(database, instancesName) {
    // Set the configuration for your app
    // TODO: Replace with your project's config object
    const config = {
      apiKey: database.apiKey,
      authDomain: database.authDomain,
      databaseURL: database.databaseURL,
      projectId: database.projectId,
      storageBucket: database.storageBucket,
      messagingSenderId: database.messagingSenderId,
    }
    const randomString = new Date().getTime()
    const otherApp = firebase.initializeApp(config, instancesName + randomString)

    // Get a reference to the database service
    this.db = otherApp.database()
  }

  saveGroup(name, description, token, provider) {
    try {
      this.db.ref(`${provider}/${token}`).set({
        name,
        description,
        token,
        provider,
      })
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  getList(provider) {
    return this.db.ref(`/${provider}`).once('value')
  }

}

export default Database
