const http = require('http');
const fs = require('fs/promises');
const path = require('path');
const readline = require('readline');

const PORT = 3001;
const server = http.createServer();
server.listen(PORT, () => console.log('ready'));

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', async folderNames => {
  const splittedLine = folderNames.split(' ');
  const componentPath = path.join(__dirname, ...splittedLine);
  const baseName = splittedLine.at(-1);
  const lowCaseName = baseName[0].toLowerCase() + baseName.slice(1);
  try {
    await fs.mkdir(componentPath);
    await fs.writeFile(
      `${componentPath}/${baseName}.jsx`,
      `const ${baseName} = () => {};\n\nexport default ${baseName};`
    );
    console.log('haha');
    await fs.writeFile(`${componentPath}/${lowCaseName}.module.css`, '');
    await fs.writeFile(
      `${componentPath}/index.js`,
      `export {default} from './${baseName}';`
    );
    console.log(`Component ${baseName} successfully created`);
  } catch (error) {
    console.log(error);
  }
});
