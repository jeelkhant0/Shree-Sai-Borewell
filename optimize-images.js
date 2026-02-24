const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = [
    'public/logossb.PNG',
    'public/shreesailogo.PNG',
    'public/photo-output.PNG',
    'public/brand-icon.png'
];

async function processImages() {
    for (const file of images) {
        if (fs.existsSync(file)) {
            const ext = path.extname(file);
            const name = path.basename(file, ext);
            const outFile = path.join(path.dirname(file), `${name}.webp`);

            console.log(`Optimizing ${file} -> ${outFile}`);
            try {
                await sharp(file)
                    .resize({ width: 1024, withoutEnlargement: true }) // Resize if huge
                    .webp({ quality: 80 })
                    .toFile(outFile);
                console.log(`Successfully optimized ${file}`);
            } catch (error) {
                console.error(`Error optimizing ${file}:`, error);
            }
        } else {
            console.log(`File not found: ${file}`);
        }
    }
}

processImages();
