class Graph {
  constructor() {
    this.adjecencyMatrix = {};
  }

  // Check if property not exists create array on that property in adjecency matrix.
  addVertex(vertex) {
    if (!this.adjecencyMatrix[vertex]) {
      this.adjecencyMatrix[vertex] = [];
      return true;
    }
    return false;
  }

  // Adds the vertices to both vertex in the object.
  addEdge(vertex1, vertex2) {
    if (this.adjecencyMatrix[vertex1] && this.adjecencyMatrix[vertex2]) {
      this.adjecencyMatrix[vertex1].push(vertex2);
      this.adjecencyMatrix[vertex2].push(vertex1);
      return true;
    }
    return false;
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjecencyMatrix[vertex1] && this.adjecencyMatrix[vertex2]) {
      this.adjecencyMatrix[vertex1] = this.adjecencyMatrix[vertex1].filter(
        (res) => res !== vertex2
      );
      this.adjecencyMatrix[vertex2] = this.adjecencyMatrix[vertex2].filter(
        (res) => res !== vertex1
      );
      return true;
    }
    return false;
  }

  removeVertex(vertex) {
    if (this.adjecencyList[vertex]) {
      while (this.adjecencyList[vertex].length) {
        let temp = this.adjecencyList[vertex].pop();
        this.removeEdges(vertex, temp);
      }
      delete this.adjecencyList[vertex];
      return this;
    }
    return undefined;
  }
}

const myGraph = new Graph();
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addEdge("A", "C");
myGraph.addEdge("A", "B");
console.log(myGraph);
console.log(myGraph.removeVertex("A"))