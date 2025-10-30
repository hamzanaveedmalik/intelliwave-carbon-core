import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');
const optimizedDir = path.join(publicDir, 'optimized');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
}

const images = [
    {
        input: path.join(publicDir, 'tenantos.png'),
        output: path.join(optimizedDir, 'tenantos.webp'),
        width: 800,
        quality: 80
    },
    {
        input: path.join(publicDir, 'snag-demo.png'),
        output: path.join(optimizedDir, 'snag-demo.webp'),
        width: 600,
        quality: 80
    },
    {
        input: path.join(publicDir, 'holographic.png'),
        output: path.join(optimizedDir, 'holographic.webp'),
        width: 600,
        quality: 80
    }
];

async function optimizeImages() {
    console.log('Starting image optimization...');

    for (const image of images) {
        try {
            console.log(`Optimizing ${path.basename(image.input)}...`);

            await sharp(image.input)
                .resize(image.width, null, {
                    withoutEnlargement: true,
                    fit: 'inside'
                })
                .webp({ quality: image.quality })
                .toFile(image.output);

            const originalSize = fs.statSync(image.input).size;
            const optimizedSize = fs.statSync(image.output).size;
            const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);

            console.log(`✓ ${path.basename(image.input)}: ${(originalSize / 1024).toFixed(1)}KB → ${(optimizedSize / 1024).toFixed(1)}KB (${savings}% savings)`);
        } catch (error) {
            console.error(`Error optimizing ${image.input}:`, error.message);
        }
    }

    console.log('Image optimization complete!');
}

optimizeImages().catch(console.error);
