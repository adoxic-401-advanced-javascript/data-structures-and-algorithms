const leftJoin = (hashMap1, hashMap2) => {
  for(let i = 0; i < hashMap2.buckets.length; i++) {
    const bucket = hashMap2.buckets[i];
    if(bucket !== undefined) {
      
      if(hashMap1.contains(bucket[0])) {
        console.log('is getting into if');
        const firstContent = hashMap1.get(bucket[0]);
        const secondContent = bucket[1];
        const newContent = firstContent.concat(' ', secondContent);
        hashMap1.add(bucket[0], newContent);
      }
    }
  }
  return hashMap1;
};

module.exports = leftJoin;
