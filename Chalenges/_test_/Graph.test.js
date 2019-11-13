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
    
    expect(graph.graph).toEqual({ 0: { value: 'App', neighbor: [] } });
    expect(graph.size).toBe(1);
  });

  it('should add one edge', () => {
    const graph = new Graph();
    graph.addNode('App');
    graph.addNode('DisplayTracks');
    graph.addEdge(graph.graph[0], graph.graph[1], 'Artist name, track title');
    expect(graph.graph[0].value).toBe('App');
    expect(graph.graph[0].neighbor).toEqual([{ neighbor: [], value: 'DisplayTracks' }, 'Artist name, track title']);
  });

  it('should make a small graph', () => {
    const graph = new Graph();
    graph.addNode('App');
    graph.addNode('DisplayTracks');
    graph.addNode('AlbumDisplay');
    graph.addEdge(graph.graph[0], graph.graph[1], 'Artist name, track title');
    graph.addEdge(graph.graph[0], graph.graph[2], 'Artist id, Artist name');
    graph.addEdge(graph.graph[2], graph.graph[1], 'Artist name, track title');
    expect(graph.graph[0].neighbor).toEqual([{ neighbor: [], value: 'DisplayTracks' }, 'Artist name, track title', { neighbor: [{ neighbor: [], value: 'DisplayTracks'}, 'Artist name, track title'], value: 'AlbumDisplay' }, 'Artist id, Artist name']);

  });

  it('should get the size of the graph', () => {
    const graph = new Graph();
    graph.addNode('App');
    graph.addNode('DisplayTracks');
    graph.addNode('AlbumDisplay');
    const shouldBeSize = graph.getSize();
    expect(shouldBeSize).toBe(3);
  });

  it('should return the graph', () => {
    const graph = new Graph();
    graph.addNode('App');
    graph.addNode('DisplayTracks');
    graph.addNode('AlbumDisplay');
    graph.addEdge(graph.graph[0], graph.graph[1], 'Artist name, track title');
    graph.addEdge(graph.graph[0], graph.graph[2], 'Artist id, Artist name');
    graph.addEdge(graph.graph[2], graph.graph[1], 'Artist name, track title');
    const shouldBeGraph = graph.getNodes();
    expect(shouldBeGraph).toEqual({ 0: { neighbor: [{ neighbor: [], value: 'DisplayTracks'}, 'Artist name, track title', { neighbor: [{ neighbor: [], value: 'DisplayTracks'}, 'Artist name, track title'], value: 'AlbumDisplay' }, 'Artist id, Artist name'], value: 'App' }, 1: { neighbor: [], value: 'DisplayTracks'}, 2: { neighbor: [{ neighbor: [], value: 'DisplayTracks'}, 'Artist name, track title'], value: 'AlbumDisplay' } });
  });

  it('should return the neighbors of a node', () => {
    const graph = new Graph();
    graph.addNode('App');
    graph.addNode('DisplayTracks');
    graph.addNode('AlbumDisplay');
    graph.addEdge(graph.graph[0], graph.graph[1], 'Artist name, track title');
    graph.addEdge(graph.graph[0], graph.graph[2], 'Artist id, Artist name');
    const shouldBeNeighbors = graph.getNeighbors(graph.graph[0]);
    expect(shouldBeNeighbors).toEqual([{ neighbor: [], value: 'DisplayTracks' }, 'Artist name, track title', { neighbor: [], value: 'AlbumDisplay' }, 'Artist id, Artist name']);
  });

  it('should return a breadth first array of values', () => {
    const graph = new Graph();
    graph.addNode('App');
    graph.addNode('DisplayTracks');
    graph.addNode('AlbumDisplay');
    graph.addNode('Tracks');
    graph.addNode('Albums');
    graph.addEdge(graph.graph[0], graph.graph[1], 'Artist name, track title');
    graph.addEdge(graph.graph[0], graph.graph[2], 'Artist id, Artist name');
    graph.addEdge(graph.graph[1], graph.graph[3], 'stuff');
    graph.addEdge(graph.graph[2], graph.graph[4], 'stuff');
    const breadth = graph.breadthFirst();

    expect(breadth).toEqual(['App', 'DisplayTracks', 'AlbumDisplay', 'Tracks', 'Albums']);
  });

});
