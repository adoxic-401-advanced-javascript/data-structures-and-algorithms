const leftJoin = (hashMap1, hashMap2) => {
  for(let i = 0; i < hashMap2.buckets.length; i++) {
    const bucket = hashMap2.buckets[i];
    const hash = hashMap2.hash(bucket[0]);
    if(hashMap1.contains(hash)) {
      const firstContent = hashMap1.get(bucket[0]);
      const secondContent = bucket[1];
      firstContent.concat(' ', secondContent);
      hashMap1.set(bucket[0], firstContent);
    }
  }
  return hashMap1;
};

module.exports = leftJoin;
