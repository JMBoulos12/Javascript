



/**
  #Introduction
  You work for a music streaming company.

  You've been tasked with creating a playlist feature for your music player application.

  #Instructions
  Write a prototype of the music player application.

  For the prototype, each song will simply be represented by a number. Given a range of numbers (the song IDs), create a singly linked list.

  Given a singly linked list, you should be able to reverse the list to play the songs in the opposite order.

  #Note
  The linked list is a fundamental data structure in computer science, often used in the implementation of other data structures.

  The simplest kind of linked list is a singly linked list. 
  That means that each element (or "node") contains data, along with something that points to the next node in the list.

  If you want to dig deeper into linked lists, check out this article that explains it using nice drawings.
  
  02-May-2023
*/


export class Element {
  next = null;
  constructor(value) {
    this.value = value;
  }
}
export class List {
  #head = null;
  #length = 0;
  constructor(values = []) {
    values.forEach(value => this.add(new Element(value)));
  }
  /**
   * This makes any instance of List an iterable and makes the toArray method obsolete. If you want to cast the list to
   * an array, you just spread it into an array:
   * 
   * const list = new List([1, 2, 3]);
   * const array = [...list];
   * console.log(array) --> [3, 2, 1]
   */
  *[Symbol.iterator]() {
    for (let node = this.#head; node; node = node.next) {
      yield node.value;
    }
  }
  add(element) {
    [element.next, this.#head] = [this.#head, element];
    this.#length++;
  }
  get length() {
    return this.#length;
  }
  get head() {
    return this.#head;
  }
  toArray() {
    return [...this];
  }
  reverse() {
    return new List(this.toArray());
  }
}
