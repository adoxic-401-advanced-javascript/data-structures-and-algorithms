function sortByDay(arr) {
  const storage = {};
  for(let i = 0; i < arr.length; i++) {
    const object = arr[i];
    const newDay = new Date(object.timestamp);

    const timeString = newDay.toUTCString().replace(',', '').substr(0, 15);
    
    
    if(!storage[timeString])  {
      storage[timeString] = object.price;
    } else {
      storage[timeString] += object.price;
    }
  }
  return storage;
}

module.exports = sortByDay;