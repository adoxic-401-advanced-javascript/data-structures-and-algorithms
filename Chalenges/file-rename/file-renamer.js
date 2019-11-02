//Solution, use node fs to read and rename files.
//1 put all files in a folder.
const fs = require('fs').promises;

//2 require fs with async.
//2.5 setup fs mock in jest

//3 use readdir to read and save file names into an fileName array.
//test
async function fileNameGetter(path) {
  return await fs.readdir(path, 'utf8');
}
  
//4 loop through fileName to make the path to readFile.
//test
async function fileLooper(path) {
  const arr = await fileNameGetter(path);
  const fileContent = [];
  Promise.all(arr.forEach(async file => {
    const content = await fs.readFile(`${path}/${file}`);
    const stats = await fs.stats(`${path}/${file}`);
    const fileString = file.replace('.txt', '');
    const milli = stats.mtimeMs;
    const modDate = new Date(milli).toISOString();
    //5 get the last modified with stat and pull mdate.
    //test
    //6 take mdate, current index of fileName, and contents of the of readFile put into a string to creat newName string
    //test
    const newFileName = `${content}-${fileString}-${modDate}`;
    fileContent.push(newFileName);
    await fs.rename(`${path}/${file}`, `${path}/${content}-${fileString}-${modDate}`);
    
  }));
  
  
  return await fileContent;
}



module.exports = { fileNameGetter, fileLooper };