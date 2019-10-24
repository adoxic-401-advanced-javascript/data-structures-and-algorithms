//Solution, use node fs to read and rename files.
//1 put all files in a folder.

//2 require fs with async.
//2.5 setup fs mock in jest

//3 use readdir to read and save file names into an fileName array.
//test

//4 loop through fileName to make the path to readFile.
//test

//5 get the last modified with stat and pull mdate.
//test

//6 take mdate, current index of fileName, and contents of the of readFile put into a string to creat newName string
//test

//7 use newName and rename to rename the file.
//test