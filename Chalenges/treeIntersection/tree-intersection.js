function treeIntersect(tree1, tree2) {
  let i = 0;
  const save = {};
  const intersectArr = [];
  firstTree(tree1, save);
  console.log(save);
  intersect(tree2, intersectArr, save, i);
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
function intersectMotif(current, intersect, save, i) {
  if(current && save[current.value]) {
    intersect[i] = current.value;
    i++;
  } 
  if(current.left) intersect = intersectMotif(current.left, intersect, save, i);
  if(current.right) intersect = intersectMotif(current.right, intersect, save, i);

}
function intersect(tree2, intersect, save, i) {
  const start = tree2.root;
  intersectMotif(start, intersect, save, i);
}

module.exports = treeIntersect;
