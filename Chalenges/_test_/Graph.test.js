const Graph = require('../graph/Graph');

describe('Graph implementation', () => {
  it('should make an empty graph', () => {
    const graph = new Graph();
    expect(graph.graph).toEqual({});
    expect(graph.size).toBe(0);
  });

  it('should add a node to the graph', () => {
    const graph = new Graph();
    graph.addNode('App');
    
    expect(graph.graph).toEqual({ 0: { value: 'App', edge: [{ edge: null, weight: null }] } });
    expect(graph.size).toBe(1);
  });
  
});
