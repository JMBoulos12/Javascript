



/*
  In this example, you will learn to write a JavaScript program that will implement a queue.
  
  A queue is a data structure that follows the First In First Out (FIFO) principle.

  The first element added to the queue is the first one to be removed. 
  This is like being in a queue to get a movie ticket. The first one in the queue gets the ticket first.
  
  Output  :
  Queue after adding items: 
  { '0': 8, '1': 6, '2': 4, '3': 2 }
  Queue after deleting the first item:
  { '1': 6, '2': 4, '3': 2 }
  First item of the queue = 6
  After clearing the queue: 
  {}
  
  In the above program, the queue data structure is implemented using the object. The Queue class is created to implement the queue data structure. The class includes methods like enqueue(), dequeue(), peek(), isEmpty(), size(), and clear().

  A Queue object is created using a new operator and various methods are accessed through the object.

  * Initially, this.items is an empty object which is treated as a queue.
  * The enqueue() method adds elements to the queue.
  * The dequeue() method removes the first element from the queue.
  * The peek() method returns the first element from the queue.
  * The size() method shows the total number of elements in the queue.
  * The isEmpty() method returns a boolean checking if queue is empty or not.
  * The clear() method clears and resets the queue.

  27-March-2023
*/


// program to implement queue data structure
class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }

    //adds a new element
    enqueue(element) {
        this.items[this.tailIndex] = element;
        this.tailIndex++;
    }

    //removes an element from head of the queue
    dequeue() {
        let removedElement = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return removedElement;
    }

    //shows the head element of the  queue
    peek() {
        let peekElement = this.items[this.headIndex];
        return peekElement;
    }

    //shows the number of items in queue
    size() {
        return this.tailIndex - this.headIndex;
    }

    //checks if queue is empty or not
    isEmpty() {
        if (this.tailIndex - this.headIndex == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    //empty the queue
    clear() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
}
let queue = new Queue();

// add items to queue
queue.enqueue(8);
queue.enqueue(6);
queue.enqueue(4);
queue.enqueue(2);

console.log("Queue after adding items: ");
console.log(queue.items);

// remove the first item
queue.dequeue();

console.log("Queue after deleting the first item:");
console.log(queue.items);

// show the first item
console.log("First item of the queue = " + queue.peek());

// empty the queue
queue.clear();

console.log("After clearing the queue: ");
console.log(queue.items);
