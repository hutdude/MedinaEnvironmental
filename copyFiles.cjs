const fs = require('fs'); // For basic file system operations
const path = require('path'); // For handling file paths
const fsExtra = require('fs-extra'); // For enhanced file system operations (optional)

// Define source and destination paths
const sourceDir = path.join(__dirname, './dist'); // Replace 'source' with your source directory
const destinationDir = path.join(__dirname, '../RemoteFolders/react-app'); // Replace 'destination' with your destination directory


var jsHash = ''
var cssHash = ''

const sourceDirCodes = path.join(__dirname, './dist/assets')
const jsFilePattern = /^index-([\w-]+)\.js$/;
const cssFilePattern = /^index-([\w-]+)\.css$/;

fs.readdir(sourceDirCodes, (err, files) => {
  if (err) {
    return console.error('Unable to scan directory: ' + err);
  }
  
  // Loop through the files and find the matching file
  files.forEach(file => {
    const matchJS = file.match(jsFilePattern);
    if (matchJS) {
      // Extract the code part from the matched filename
      jsHash = matchJS[1];
      console.log('jsHash:', jsHash);
    }
    const matchCSS = file.match(cssFilePattern);
    if (matchCSS) {
      // Extract the code part from the matched filename
      cssHash = matchCSS[1];
      console.log('cssHash:', cssHash);
    }
  });
});

// Define the path to the text file
const textFilePath = path.join(__dirname, '../RemoteFolders/reactKeys.txt');

// Read the file
fs.readFile(textFilePath, 'utf8', (err, data) => {
  if (err) {
    return console.error('Unable to read file:', err);
  }
  // Replace the 8-character codes with new random codes
  const updatedData = "jsPath=/react-app/assets/index-" + jsHash + ".js \ncssPath=/react-app/assets/index-" + cssHash + ".css";
  
  // Write the updated content back to the file
  fs.writeFile(textFilePath, updatedData, 'utf8', (err) => {
    if (err) {
      return console.error('Unable to write file:', err);
    }
    console.log('File updated successfully');
  });
});

// Function to empty the destination directory
const emptyDirectory = async (directory) => {
    try {
      await fsExtra.emptyDir(directory);
      console.log(`Emptied directory: ${directory}`);
    } catch (err) {
      console.error(`Error emptying directory: ${directory}`, err);
    }
  };

// Function to copy files using fs-extra
const copyFiles = async (source, destination) => {
  try {
    await fsExtra.copy(source, destination);
    console.log('Files copied successfully');
  } catch (err) {
    console.error('Error copying files:', err);
  }
};

// Main function to empty the destination and then copy files
const main = async () => {
    try {
      await emptyDirectory(destinationDir);
      await copyFiles(sourceDir, destinationDir);
    } catch (err) {
      console.error('Error during operation:', err);
    }
  };
  
  // Execute the main function
  main();