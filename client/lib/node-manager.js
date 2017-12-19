
export default class NodeManager {
  constructor(session, user){
    this.session = session;
    this.user = user;
  }

  static baseURL(){
    
  }
  static getConfig(){
    return { headers: { my_cookie: localStorage.getItem("session") }}
  }
  static loggedIn(){
    return localStorage.getItem("session") ? true: false
  }
  getSession(){
    return this.session;
  }

  getUser(){
    return this.user;
  }


}