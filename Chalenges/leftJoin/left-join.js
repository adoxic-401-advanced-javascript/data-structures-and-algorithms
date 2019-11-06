const leftJoin = (hashMap1, hashMap2) => {
  const joinArr = [];
  for(let i = 0; i < hashMap1.buckets.length; i++) {
    const bucket = hashMap1.buckets[i];
    if(bucket !== undefined) {
      const newContent = [];
      console.log('how??', bucket);
      if(hashMap2.contains(bucket[0])) {
        const firstContent = bucket[1];
        const secondContent = hashMap2.get(bucket[0]);
        newContent[0] = bucket[0];
        newContent[1] = firstContent;
        newContent[2] = secondContent;
        joinArr[joinArr.length] = newContent;
      } else {
        const firstContent = bucket[1];
        const secondContent = null;
        newContent[0] = bucket[0];
        newContent[1] = firstContent;
        newContent[2] = secondContent;
        joinArr[joinArr.length] = newContent;
      }
    }
  }
  return joinArr;
};

module.exports = leftJoin;
