#!/usr/bin/env python3
import os
import re

# UPDATED Color mapping with warmer cream background
COLOR_MAP = {
    '#f1f0e2': '#F0EBE3',  # Background beige → warmer cream
    '#F3F2EE': '#F0EBE3',  # Update any instances of the old cream to the warmer cream
    '#464A39': '#1F7A5A',  # Dark green → deep teal  
    '#C2CBB2': '#7ED0AB',  # Sage green → medium mint
    '#1BB3D1': '#A6AEFB',  # Bright blue → light purple
}

def update_file(filepath):
    """Update colors in a single file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Replace all colors (case insensitive)
        for old_color, new_color in COLOR_MAP.items():
            # Use case-insensitive replacement
            content = re.sub(re.escape(old_color), new_color, content, flags=re.IGNORECASE)
        
        # Only write if changes were made
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    """Process all TypeScript/TSX files in components directory"""
    components_dir = '/app/src/app/components'
    updated_files = []
    
    for root, dirs, files in os.walk(components_dir):
        # Skip ui and figma subdirectories
        if 'ui' in root or 'figma' in root:
            continue
            
        for file in files:
            if file.endswith(('.tsx', '.ts')) and not file.startswith('.'):
                filepath = os.path.join(root, file)
                if update_file(filepath):
                    updated_files.append(file)
                    print(f"✓ Updated: {file}")
    
    print(f"\n✓ Complete! Updated {len(updated_files)} files.")

if __name__ == '__main__':
    main()
