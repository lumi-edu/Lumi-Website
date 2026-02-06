const fs = require('fs');
const path = require('path');

// Color mapping with COOL-TONED CREAM background
const colorReplacements = [
  { old: /#f1f0e2/gi, new: '#F2F0ED' },  // Old beige → cool cream
  { old: /#F3F2EE/g, new: '#F2F0ED' },  // Update to cool cream
  { old: /#F0EBE3/g, new: '#F2F0ED' },  // Update warm cream to cool cream  
  { old: /#464A39/g, new: '#1F7A5A' },  // Dark green → deep teal
  { old: /#C2CBB2/g, new: '#7ED0AB' },  // Sage green → medium mint
  { old: /#1BB3D1/g, new: '#A6AEFB' },  // Bright blue → light purple
];

function updateColors(content) {
  let updated = content;
  colorReplacements.forEach(({old, new: newColor}) => {
    updated = updated.replace(old, newColor);
  });
  return updated;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const updated = updateColors(content);
    
    if (content !== updated) {
      fs.writeFileSync(filePath, updated, 'utf8');
      return true;
    }
    return false;
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
    return false;
  }
}

function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip ui and figma directories
      if (file !== 'ui' && file !== 'figma' && file !== 'node_modules') {
        walkDir(filePath, callback);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      callback(filePath, file);
    }
  });
}

// Main execution
const componentsDir = path.join(__dirname, 'src', 'app', 'components');
let updatedCount = 0;

console.log('Starting batch color update with COOL-TONED CREAM palette...\n');

walkDir(componentsDir, (filePath, fileName) => {
  if (processFile(filePath)) {
    console.log(`✓ ${fileName}`);
    updatedCount++;
  }
});

console.log(`\n✅ Complete! Updated ${updatedCount} files with new color palette.`);
console.log('\nColor Palette Applied:');
console.log('  Background: #F2F0ED (cool cream)');
console.log('  Primary: #1F7A5A (deep teal)');
console.log('  Secondary: #7ED0AB (medium mint)');
console.log('  Accent: #A6AEFB (light purple)');
console.log('  Text: #2E2E2E (charcoal)');