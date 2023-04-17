



/**
  #Instructions:
  Implement basic list operations.

  In functional languages list operations like length, map, and reduce are very common. Implement a series of basic list operations, without using existing functions.

  The precise number and names of the operations to be implemented will be track dependent to avoid conflicts with existing names, but the general operations you will implement include:

  * append (given two lists, add all items in the second list to the end of the first list);
  * concatenate (given a series of lists, combine all items in all lists into one flattened list);
  * filter (given a predicate and a list, return the list of all items for which predicate(item) is True);
  * length (given a list, return the total number of items within it);
  * map (given a function and a list, return the list of the results of applying function(item) on all items);
  * foldl (given a function, a list, and initial accumulator, fold (reduce) each item into the accumulator from the left using function(accumulator, item));
  * foldr (given a function, a list, and an initial accumulator, fold (reduce) each item into the accumulator from the right using function(item, accumulator));
  * reverse (given a list, return a list with all the original items, but in reversed order);
  
  Using core language features to build and deconstruct arrays via destructuring, and using the array literal [] are allowed, 
  but no functions from the Array.prototype should be used. 
  
  17-April-2023
*/


const Null = {
    values: [],
    append: other => other,
    concat: others => others,
    filter: _ => Null,
    length: () => 0,
    map: _ => Null,
    foldl: (_, init) => init,
    foldr: (_, init) => init,
    push: val => new Cons(val, Null),
    reverse: () => Null 
}
class Cons {
    static fromArray(array) {
        const [head, ...rest] = array
        return head ? new Cons(head, Cons.fromArray(rest)) : Null
    }
    constructor(val, rest) {
        this.val = val
        this.rest = rest
    }
    get values() {
        return [this.val, ...this.rest.values]
    }
    append(other) {
        return new Cons(this.val, this.rest.append(other))
    }
    concat(others) {
        return others.foldl((acc, val) => acc.append(val), this)
    }
    filter(pred) {
        let filteredRest = this.rest.filter(pred)
        return pred(this.val) ? new Cons(this.val, filteredRest) : filteredRest
    }
    length() {
        return 1 + this.rest.length()
    }
    map(fn) {
        return new Cons(fn(this.val), this.rest.map(fn))
    }
    foldl(fn, init) {
        return this.rest.foldl(fn, fn(init, this.val))
    }
    foldr(fn, init) {
        return fn(this.rest.foldr(fn, init), this.val)
    }
    push(val) {
        return new Cons(this.val, this.rest.push(val))
    }
    reverse() {
        return this.rest.reverse().push(this.val)
    }
}
export class List {
    constructor(values = []) {
        return Cons.fromArray(values)
    }
}
