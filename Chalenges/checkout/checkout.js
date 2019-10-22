function sortByDay(arr) {
  const storage = {};
  for(let i = 0; i < arr.length; i++) {
    const object = arr[i];
    const newDay = new Date(object.timestamp);

    const UTC = newDay.toUTCString().replace(',', '').substr(0, 15);
    const timeArr = UTC.split(' ');
    const day = timeArr[1];
    const month = timeArr[2];
    timeArr[2] = day;
    timeArr[1] = month;
    const timeString = timeArr.join(' ');
    
    if(!storage[timeString])  {
      storage[timeString] = object.price;
    } else {
      storage[timeString] += object.price;
    }
  }
  return storage;
}

module.exports = sortByDay;