class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (!this.isEmpty()) {
      return this.items.pop();
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    }
  }

  size() {
    return this.items.length;
  }
}

// Creating a stack
const myStack = new Stack();

// Pushing elements onto the stack
myStack.push(1);
myStack.push(2);
myStack.push(3);

// Peeking at the top element
const topElement = myStack.peek();
console.log("Top element:", topElement);

// Popping elements from the stack
const poppedItem = myStack.pop();
console.log("Popped item:", poppedItem);

// Checking the size of the stack
const stackSize = myStack.size();
console.log("Stack size:", stackSize);
