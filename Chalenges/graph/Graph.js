class Node {
  constructor(value) {
    this.value = value;
    this.edge = [{ edge: null, weight: null }];
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

  addEdge(node, name, weight) {
    node.edge.edge = this.graph[name];
    if(weight) node.edge.weight = weight;
  }
}

module.exports = Graph;
