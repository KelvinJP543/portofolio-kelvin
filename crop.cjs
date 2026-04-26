const Jimp = require('jimp');

async function createFavicon() {
  try {
    const image = await Jimp.read('d:\\portofolio-kelvin\\src\\assets\\foto-profil.jpg');
    // resize to 32x32 bridging the shortest dimension
    image.cover(32, 32); 
    
    // Create a circular mask
    const mask = new Jimp(32, 32, 0x00000000);
    const radius = 16;
    const center = 16;
    for (let y = 0; y < 32; y++) {
      for (let x = 0; x < 32; x++) {
        const dx = x - center + 0.5;
        const dy = y - center + 0.5;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Anti-aliasing soft edge for radius 16
        if (distance <= radius - 1) {
          mask.setPixelColor(0xFFFFFFFF, x, y);
        } else if (distance <= radius) {
          // simple anti-aliasing blending
          const alpha = Math.floor((radius - distance) * 255);
          mask.setPixelColor((0xFFFFFF00 | alpha) >>> 0, x, y);
        }
      }
    }
    
    image.mask(mask, 0, 0);
    await image.writeAsync('d:\\portofolio-kelvin\\public\\favicon.png');
    console.log('Favicon generated successfully.');
  } catch (err) {
    console.error(err);
  }
}

createFavicon();
