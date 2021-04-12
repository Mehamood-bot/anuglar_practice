// in real we can use to reach to server
export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      // promise a two method rsolve and reject, to deal response to reslove or to reject
      (resolve, reject) => {
        //after 8ms change staus automatically
        setTimeout(() => {
          //resolve if there is state change give response in delay 0f 800 as we mentioned
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
