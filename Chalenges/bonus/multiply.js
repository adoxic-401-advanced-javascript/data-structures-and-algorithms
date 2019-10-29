function multiply(num, mun) {
  return multiMotif(num, mun, 0);
}

function multiMotif(num, mun, acc) {
  if(mun > 0) acc = acc + num;
  mun = mun -1;
  if(mun > 0) acc = multiMotif(num, mun, acc);
  return acc;
}

module.exports = multiply;