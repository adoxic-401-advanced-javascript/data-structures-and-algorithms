function treeIntersect(tree1, tree2) {
  const save = {};
  const intersectArr = [];
  firstTree(tree1, save);
  intersect(tree2, intersectArr, save);
  return intersectArr;
}
function firstTreeMotif(current, save) {
  if(current && !save[current.value]) save[current.value] = current.value;
  if(current.left) save = firstTreeMotif(current.left, save);
  if(current.right) save = firstTreeMotif(current.right, save);
  return save;
}
function firstTree(tree1, save) {
  const start = tree1.root;
  firstTreeMotif(start, save);
}
function intersectMotif(current, intersect, save) {
  const i = intersect.length;

  if(current && save[current.value]) {
    intersect[i] = current.value;
    
  } 
  if(current.left) intersect = intersectMotif(current.left, intersect, save);
  if(current.right) intersect = intersectMotif(current.right, intersect, save);
  return intersect;
}
function intersect(tree2, intersect, save) {
  const start = tree2.root;
  intersectMotif(start, intersect, save);
}

module.exports = treeIntersect;
