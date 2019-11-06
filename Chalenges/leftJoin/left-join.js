const leftJoin = (hashMap1, hashMap2) => {
  for(let i = 0; i < hashMap1.buckets.length; i++) {
    const bucket = hashMap1.buckets[i];
    if(bucket !== undefined) {
      
      if(hashMap2.contains(bucket[0])) {
        
        const firstContent = bucket[1];
        const secondContent = hashMap2.get(bucket[0]);
        const newContent = firstContent.concat(' ', secondContent);
        hashMap1.add(bucket[0], newContent);
      } else {
        const firstContent = bucket[1];
        const secondContent = 'null';
        const newContent = firstContent.concat(' ', secondContent);
        hashMap1.add(bucket[0], newContent);
      }
    }
  }
  return hashMap1;
};

module.exports = leftJoin;
