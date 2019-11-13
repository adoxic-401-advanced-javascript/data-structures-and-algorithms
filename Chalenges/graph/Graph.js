class Node {
  constructor(value) {
    this.value = value;
    this.neighbor = [];
  }
}

class Graph {
  constructor() {
    this.size = 0;
    this.graph = {};
  }

  addNode(value) {
    this.graph[this.size] = new Node(value);
    this.size += 1;
  }

  addEdge(node, node2, weight) {

    node.neighbor[node.neighbor.length] = node2;
    if(weight) node.neighbor[node.neighbor.length] = weight;
  }

  getNodes() {
    return this.graph;
  }

  getSize() {
    return this.size;
  }

  getNeighbors(node) {
    return node.neighbor;
  }

  breadthFirst() {
    const queue = [];
    let base = this.graph[0];
    queue.push(base);
    const breadthArr = [];

    while(queue.length !== 0) {
      for(let i = 0; i < queue.length; i++) {
        const current = queue.shift();
        if(current.value !== null) {
          breadthArr.push(current.value);
          console.log(breadthArr);
        }

        while(current.neighbor.length !== 0) {
          console.log('is getting to next while');
          const neighborEl = current.neighbor.shift();
          current.neighbor.shift();
          if(neighborEl) queue.push(neighborEl);
        }
      }
      
    }
    return breadthArr;
  }
}

module.exports = Graph;
