// Simple syntax check for the page.tsx file
const fs = require('fs');

try {
  const content = fs.readFileSync('./app/page.tsx', 'utf8');
  
  // Count opening and closing motion.div tags
  const openingMotionDivs = (content.match(/<motion\.div/g) || []).length;
  const closingMotionDivs = (content.match(/<\/motion\.div>/g) || []).length;
  
  console.log(`Opening motion.div tags: ${openingMotionDivs}`);
  console.log(`Closing motion.div tags: ${closingMotionDivs}`);
  
  if (openingMotionDivs !== closingMotionDivs) {
    console.log(`MISMATCH: ${openingMotionDivs - closingMotionDivs} more opening tags than closing tags`);
  } else {
    console.log('Motion div tags are balanced');
  }
  
} catch (error) {
  console.error('Error reading file:', error.message);
}
