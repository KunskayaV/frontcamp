export class Observable {
  constructor() {
    this.subscribers = {};
  }

  subscribe(event, callback) {
     let subscribers;
     if (subscribers = this.subscribers[event]) {
       let index = subscribers.length;
       while(index--) {
           if(subscribers[index] == callback) {
               return false;
           }
       }

       subscribers.push(callback);
     } else {
       this.subscribers[event] = [callback];
     }

     return true;
  }

  unsubscribe(event, callback) {
     let subscribers;
     if (subscribers = this.subscribers[event]) {
      let index = subscribers.length;
       while(index--) {
           if(subscribers[index] == callback) {
               subscribers.splice(index, 1);
               return true;
           }
       }
     }

     return false;
  }

  notifyObservers(event, ...data) {
    console.log(event, data);
     let subscribers;
     if (subscribers = this.subscribers[event]) {
      let index = subscribers.length;
       while(index--) {
          subscribers[index](...data)
       }
       return true;

     }

     return false;
  }
}
