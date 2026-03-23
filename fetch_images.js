const fs = require('fs');
const https = require('https');

const stadiums = [
  { id: 'toronto', search: 'BMO Field' },
  { id: 'boston', search: 'Gillette Stadium' },
  { id: 'nynj', search: 'MetLife Stadium' },
  { id: 'philly', search: 'Lincoln Financial Field' },
  { id: 'miami', search: 'Hard Rock Stadium' },
  { id: 'vancouver', search: 'BC Place' },
  { id: 'mexicocity', search: 'Estadio Azteca' },
  { id: 'la', search: 'SoFi Stadium' },
  { id: 'seattle', search: 'Lumen Field' },
  { id: 'dallas', search: 'AT&T Stadium' },
  { id: 'atlanta', search: 'Mercedes-Benz Stadium' },
  { id: 'houston', search: 'NRG Stadium' },
  { id: 'kansascity', search: 'Arrowhead Stadium' },
  { id: 'sfbay', search: 'Levi\\'s Stadium' },
  { id: 'guadalajara', search: 'Estadio Akron' },
  { id: 'monterrey', search: 'Estadio BBVA' }
];

async function fetchImage(title) {
  return new Promise((resolve, reject) => {
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=1000`;
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          const pageId = Object.keys(pages)[0];
          if (pages[pageId].thumbnail) {
            resolve(pages[pageId].thumbnail.source);
          } else {
            resolve(null);
          }
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

async function run() {
  const results = {};
  for (const s of stadiums) {
    const img = await fetchImage(s.search);
    if (img) {
      results[s.id] = img;
      console.log(`Found image for ${s.search}: ${img}`);
    } else {
      console.log(`No image for ${s.search}`);
    }
  }
  
  let content = fs.readFileSync('src/data/stadiums.ts', 'utf8');
  for (const [id, img] of Object.entries(results)) {
    const regex = new RegExp(`id: '${id}',[\\s\\S]*?image: '([^']+)'`, 'g');
    content = content.replace(regex, (match, p1) => {
      return match.replace(p1, img);
    });
    
    // Also update the first image in the gallery
    const galleryRegex = new RegExp(`id: '${id}',[\\s\\S]*?gallery: \\[\n\\s+'([^']+)'`, 'g');
    content = content.replace(galleryRegex, (match, p1) => {
      return match.replace(p1, img);
    });
  }
  
  fs.writeFileSync('src/data/stadiums.ts', content);
  console.log('Updated stadiums.ts');
}

run();
