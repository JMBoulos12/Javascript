



/**
  #Instructions
  Implement a RESTful API for tracking IOUs.

  Four roommates have a habit of borrowing money from each other frequently, and have trouble remembering who owes whom, and how much.

  Your task is to implement a simple RESTful API that receives IOUs as POST requests, and can deliver specified summary information via GET requests.

  #API Specification
  #User object
  {
    "name": "Adam",
    "owes": {
      "Bob": 12.0,
      "Chuck": 4.0,
      "Dan": 9.5
    },
    "owed_by": {
      "Bob": 6.5,
      "Dan": 2.75
    },
    "balance": "<(total owed by other users) - (total owed to other users)>" 
   
  06-May-2023
*/



// Dictionary map for the value dict map
function objectMap(obj, fn) {
  return Object.fromEntries(
    Object.entries(obj).map(
      ([k, v], i) => [k, fn(v, k, i)]
    )
  );
}
class User {
  constructor(name, owes = {}, owed_by = {}) {
    this.name = name
    this.records = {}
    for (let key in owes) {
      this.borrow(key, owes[key]);
    }
    for (let key in owed_by) {
      this.loan(key, owed_by[key]);
    }
  }
  borrow(name, amount) {
    this.records[name] = (this.records[name] || 0) - amount;
  }
  loan(name, amount) {
    this.records[name] = (this.records[name] || 0) + amount;
  }
  owes() {
    return objectMap(
      Object.fromEntries(Object.entries(this.records).filter(([k, v]) => v < 0)),
      value => -value
    );
  }
  owed_by() {
    return Object.fromEntries(Object.entries(this.records).filter(([k, v]) => v > 0))
  }
  balance() {
    // dict values dict array dict to array
    return Object.values(this.records)
      // Sum
      .reduce((partialSum, value) => partialSum + value, 0);
  }
  toJson() {
    return {
      "name": this.name,
      "owes": this.owes(),
      "owed_by": this.owed_by(),
      "balance": this.balance()
    }
  }
}
export class RestAPI {
  static GET_SPECIFIC_USERS_PREFIX = "/users?users=";
  constructor(database) {
    this.users = Object.assign({},
      ...database["users"]
        .map(user =>
          ({ [user["name"]]: new User(user["name"], user["owes"], user["owed_by"]) })));
  }
  get(url) {
    if (url === "/users") {
      return {
        // dict values dict array dict to array
        users: Object.values(this.users).map(user => user.toJson())
      }
    }
    const userNames = url.substring(RestAPI.GET_SPECIFIC_USERS_PREFIX.length).split(",");
    return {
      users: userNames.map(userName => this.users[userName].toJson())
    }
  }
  post(url, payload) {
    if (url === "/add") {
      const user = new User(payload.user);
      this.users[payload.user] = user;
      return user.toJson();
    } else if (url === "/iou") {
      const lender = this.users[payload["lender"]];
      const borrower = this.users[payload["borrower"]];
      const amount = payload["amount"];
      lender.loan(borrower.name, amount);
      borrower.borrow(lender.name, amount);
      if (payload["lender"] > payload["borrower"]) {
        return { "users": [borrower.toJson(), lender.toJson()] };
      }
      return { "users": [lender.toJson(), borrower.toJson()] };
    }
  }
}
