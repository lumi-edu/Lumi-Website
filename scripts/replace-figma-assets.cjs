const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '../src/app');

const mappings = {
  'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png': "../assets/lumilogo.png",
  'figma:asset/53923c95d7ada26d1c087283760beb15c309363e.png': "../assets/lumihomepage.png",
};

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (/\.tsx?$/.test(entry.name)) {
      let content = fs.readFileSync(full, 'utf8');
      let orig = content;
      for (const [from, to] of Object.entries(mappings)) {
        content = content.split(from).join(to);
      }
      if (content !== orig) {
        fs.writeFileSync(full, content, 'utf8');
        console.log('Updated', path.relative(root, full));
      }
    }
  }
}

walk(root);
console.log('Done');
