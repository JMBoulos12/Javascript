



/**
  #Instructions
  Implement an evaluator for a very simple subset of Forth.

  Forth is a stack-based programming language. Implement a very basic evaluator for a small subset of Forth.

  Your evaluator has to support the following words:

  * +, -, *, / (integer arithmetic)
  * DUP, DROP, SWAP, OVER (stack manipulation)
  
  Your evaluator also has to support defining new words using the customary syntax: : word-name definition ;.

  To keep things simple the only data type you need to support is signed integers of at least 16 bits size.

  You should use the following rules for the syntax: 
  a number is a sequence of one or more (ASCII) digits, a word is a sequence of one or more letters, digits, symbols or punctuation that is not a number. 
  (Forth probably uses slightly different rules, but this is close enough.)

  Words are case-insensitive.
  
  27-April-2023
*/


export class Forth {
    constructor() {
        this.queue = []
        this.stack = []
        this.defines = []
        this['+'] = () => this.op(2, (a, b) => [a + b])
        this['-'] = () => this.op(2, (a, b) => [a - b])
        this['*'] = () => this.op(2, (a, b) => [a * b])
        this['/'] = () => this.op(2, (a, b) => {
                if (b === 0) throw new Error('Division by zero')
                return [Math.floor(a / b)]
            })
        this['dup'] = () => this.op(1, a => [a, a])
        this['drop'] = () => this.op(1, a => undefined)
        this['swap'] = () => this.op(2, (a, b) => [b, a])
        this['over'] = () => this.op(2, (a, b) => [a, b, a])
    }
    op(no, fn) {
        if (this.stack.length < no) throw new Error('Stack empty')
        return fn(...this.stack.splice(-no))
    }
    evaluate(command) {
        if (/^:.*;$/.test(command)) {
            this.define(command)
        } else {
            this.run(command)
        }
    }
    define(command) {
        const params = command.split(' ')
                .slice(1, -1)
                .map(v => isNaN(v) ? v.toLowerCase() : Number(v)),
            newOp = params.shift()
        if(!isNaN(newOp)) throw new Error('Invalid definition')
        const result = params.map(p => this.defines.includes(p) ? this[p]()[0] : p)
        this[newOp] = () => result
        this.defines.push(newOp)
    }
    run(command) {
        this.queue = command.split(' ')
                .map(v => isNaN(v) ? v.toLowerCase() : Number(v))
        while(this.queue.length > 0) {
            const v = this.queue.shift()
            if(isNaN(v)) {
                if(!this[v]) throw new Error('Unknown command')
                const result = this[v]()
                if (result) this.queue.unshift(...result)
            } else {
                this.stack.push(v)
            }
        }
    }
}
