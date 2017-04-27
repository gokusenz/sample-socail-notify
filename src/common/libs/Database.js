import database from './ConfigDB'

class Database {
  constructor() {
    this.db = database
  }

  saveGroup(name, token, description, provider) {
    try {
      this.db.ref(`${provider}/${token}`).set({
        name,
        token,
        description,
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
