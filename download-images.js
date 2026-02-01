import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Создаём папку public/images если её нет
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Список всех изображений с CDN
const images = [
  {
    url: 'https://cdn.poehali.dev/projects/c5c43c1d-169c-4cb6-88ec-4d80150cf71e/files/461eac34-49bc-48b0-8603-4ba3e1196d18.jpg',
    name: 'building.jpg'
  },
  {
    url: 'https://cdn.poehali.dev/projects/c5c43c1d-169c-4cb6-88ec-4d80150cf71e/files/a2273e3c-daa5-4c8c-8696-3ba2d513bb59.jpg',
    name: 'land.jpg'
  },
  {
    url: 'https://cdn.poehali.dev/projects/c5c43c1d-169c-4cb6-88ec-4d80150cf71e/files/55b0a3d9-7603-46ed-afca-1a7684f33d9b.jpg',
    name: 'networks.jpg'
  },
  {
    url: 'https://cdn.poehali.dev/projects/c5c43c1d-169c-4cb6-88ec-4d80150cf71e/files/7660d241-9780-4cf1-94b2-96e172310ffe.jpg',
    name: 'car.jpg'
  },
  {
    url: 'https://cdn.poehali.dev/projects/c5c43c1d-169c-4cb6-88ec-4d80150cf71e/files/5b23c802-2102-4fe2-be6e-4ef36deefca9.jpg',
    name: 'valuation.jpg'
  },
  {
    url: 'https://cdn.poehali.dev/projects/c5c43c1d-169c-4cb6-88ec-4d80150cf71e/files/d0df9a51-b992-4516-a60d-b993d41c5a93.jpg',
    name: 'traces.jpg'
  },
  {
    url: 'https://cdn.poehali.dev/projects/c5c43c1d-169c-4cb6-88ec-4d80150cf71e/files/b965c3ee-46f4-4661-8891-1a9fdf4433e0.jpg',
    name: 'clothing.jpg'
  },
  {
    url: 'https://cdn.poehali.dev/projects/c5c43c1d-169c-4cb6-88ec-4d80150cf71e/files/fb7703d0-6eec-465c-8ffc-e56feb7ed5db.jpg',
    name: 'furniture.jpg'
  },
  {
    url: 'https://cdn.poehali.dev/projects/c5c43c1d-169c-4cb6-88ec-4d80150cf71e/files/1de857ae-ca13-430c-adc5-35efe9fbb3fe.jpg',
    name: 'electronics.jpg'
  },
  {
    url: 'https://cdn.poehali.dev/projects/c5c43c1d-169c-4cb6-88ec-4d80150cf71e/files/4a8b6dfc-0058-4cf2-9313-0173a6b5a910.jpg',
    name: 'handwriting.jpg'
  },
  {
    url: 'https://cdn.poehali.dev/projects/c5c43c1d-169c-4cb6-88ec-4d80150cf71e/files/179288d7-f4e6-4bea-89a8-22e15d1ada3a.jpg',
    name: 'documents.jpg'
  },
  {
    url: 'https://cdn.poehali.dev/projects/c5c43c1d-169c-4cb6-88ec-4d80150cf71e/files/8cddc8b5-32cb-4901-b849-88b8b44d6f34.jpg',
    name: 'accounting.jpg'
  },
  {
    url: 'https://cdn.poehali.dev/files/1ce7a63e-3ba1-4c2a-990d-6b82c5ae3d99.png',
    name: 'logo.png'
  }
];

// Функция скачивания файла
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Не удалось скачать ${url}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✅ Скачано: ${path.basename(filepath)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

// Скачиваем все изображения
async function downloadAll() {
  console.log('🚀 Начинаю скачивание изображений...\n');
  
  for (const img of images) {
    try {
      const filepath = path.join(imagesDir, img.name);
      await downloadImage(img.url, filepath);
    } catch (error) {
      console.error(`❌ Ошибка при скачивании ${img.name}:`, error.message);
    }
  }
  
  console.log('\n✨ Готово! Все изображения в папке public/images/');
  console.log('📝 Теперь запустите: npm run build');
}

downloadAll();
