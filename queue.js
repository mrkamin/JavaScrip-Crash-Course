// Create a priority queue using a closure pattern
function createPriorityQueue() {
    const queue = []; // Initialize an empty array to store the queue elements
  
    // Define the enqueue function to add elements with priorities to the queue
    function enqueue(element, priority) {
      let el = element; // Store the element
      let pr = priority; // Store the priority
      const item = { el, pr }; // Create an object to hold both element and priority
      
      let added = false; // Initialize a flag to track if the item has been added
  
      // Iterate through the existing queue to find the correct position for the item
      for (let i = 0; i < queue.length; i++) {
        if (priority < queue[i].pr) { // Check if the item's priority is less than the current element's priority
          queue.splice(i, 0, item); // Insert the item at the correct position in the queue
          added = true; // Set the added flag to true
          break; // Exit the loop since the item has been added
        }
      }
      
      // If the item hasn't been added yet, push it to the end of the queue (lowest priority)
      if (!added) {
        queue.push(item);
      }
    }
     
    // Define the dequeue function to remove and return the element with the highest priority
    function dequeue() {
      if (isEmpty()) {
        return null; // If the queue is empty, return null
      }
      return queue.shift().el; // Remove and return the element with the highest priority
    }
  
    // Define the isEmpty function to check if the queue is empty
    function isEmpty() {
      return queue.length === 0; // Return true if the queue is empty, otherwise return false
    }
  
    // Return an object containing the enqueue, dequeue, and isEmpty functions
    return {
      enqueue,
      dequeue,
      isEmpty,
    };
  }
  
  // Create a priority queue instance
  const priorityQueue = createPriorityQueue();
  
  // Enqueue elements with priorities
  priorityQueue.enqueue("Task 1", 3);
  priorityQueue.enqueue("Task 2", 2);
  priorityQueue.enqueue("Task 3", 1);
  priorityQueue.enqueue("Task 4", 4);
  
  // Dequeue elements and display the results
  console.log(priorityQueue.dequeue()); // Output: "Task 3" (highest priority)
  console.log(priorityQueue.dequeue()); // Output: "Task 2"
  console.log(priorityQueue.isEmpty());  // Output: false
  console.log(priorityQueue.dequeue()); // Output: "Task 1"
  console.log(priorityQueue.isEmpty());  // Output: false
  console.log(priorityQueue.dequeue()); // Output: "Task 4"
  console.log(priorityQueue.isEmpty());  // Output: true
  
  
  
  
  
  function createQueue() {
    const queue = [];
  
    // Enqueue: Add an element to the back of the queue
    function enqueue(element) {
      queue.push(element);
    }
  
    // Dequeue: Remove and return the element from the front of the queue
    function dequeue() {
      if (isEmpty()) {
        return "Queue is empty";
      }
      return queue.shift();
    }
  
    // Peek: Get the element at the front of the queue without removing it
    function peek() {
      if (isEmpty()) {
        return "Queue is empty";
      }
      return queue[0];
    }
  
    // Check if the queue is empty
    function isEmpty() {
      return queue.length === 0;
    }
  
    // Get the size of the queue
    function size() {
      return queue.length;
    }
  
    return {
      enqueue,
      dequeue,
      peek,
      isEmpty,
      size,
      queue,
    };
  }
  
  // Create a new queue
  const numberQueue = createQueue();
  
  // Enqueue some numbers
  numberQueue.enqueue(10);
  numberQueue.enqueue(20);
  numberQueue.enqueue(30);
  numberQueue.enqueue(40);
  
  // Display the queue and its size
  console.log("Queue:", numberQueue.queue); // Output: Queue: [10, 20, 30, 40]
  console.log("Queue Size:", numberQueue.size()); // Output: Queue Size: 4
  
  // Dequeue and display the elements
  console.log("Dequeued:", numberQueue.dequeue()); // Output: Dequeued: 10
  console.log("Dequeued:", numberQueue.dequeue()); // Output: Dequeued: 20
  
  // Peek at the front element
  console.log("Front of the Queue:", numberQueue.peek()); // Output: Front of the Queue: 30
  