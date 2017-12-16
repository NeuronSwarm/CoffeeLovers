
export default class NodeManager {
  constructor(session, user){
    this.session = session;
    this.user = user;
  }

  static getConfig(){
    return { headers: { my_cookie: localStorage.getItem("session") }}
  }
  getSession(){
    return this.session;
  }

  getUser(){
    return this.user;
  }

}