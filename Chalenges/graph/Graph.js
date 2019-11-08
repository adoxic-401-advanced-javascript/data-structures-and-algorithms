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
}

module.exports = Graph;
