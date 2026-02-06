const fs = require('fs');
const path = require('path');

// Color mapping from old to new
const colorMap = {
  '#f1f0e2': '#F3F2EE',  // Background
  '#464A39': '#1F7A5A',  // Dark green → Deep teal
  '#C2CBB2': '#7ED0AB',  // Sage green → Medium mint
  '#1BB3D1': '#A6AEFB',  // Bright blue → Light purple
};

// Additional text color updates
const textColorMap = {
  'text-[#464A39]': 'text-[#1F7A5A]',  // Keep teal for headings
  // Update some text to charcoal for better readability
  'opacity-70': 'opacity-70', // Keep opacity patterns
};

function updateColorsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;

    // Replace each color
    for (const [oldColor, newColor] of Object.entries(colorMap)) {
      const regex = new RegExp(oldColor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      if (content.match(regex)) {
        content = content.replace(regex, newColor);
        updated = true;
      }
    }

    // Write back if updated
    if (updated) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Updated: ${path.basename(filePath)}`);
      return true;
    }
    return false;
  } catch (err) {
    console.error(`✗ Error processing ${filePath}:`, err.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let totalUpdated = 0;

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && file !== 'node_modules' && file !== '.git') {
      totalUpdated += processDirectory(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (updateColorsInFile(fullPath)) {
        totalUpdated++;
      }
    }
  }

  return totalUpdated;
}

// Start processing
const componentsDir = path.join(__dirname, 'src', 'app', 'components');
console.log('Starting color palette update...\n');
const updated = processDirectory(componentsDir);
console.log(`\n✓ Complete! Updated ${updated} files.`);
