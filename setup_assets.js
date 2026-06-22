import fs from 'fs';
import { execSync } from 'child_process';

const CWD = process.cwd();

// Install sharp if not present
try {
  console.log("Installing sharp for WebP conversion...");
  execSync('npm install sharp', { stdio: 'inherit' });
} catch (e) {
  console.error("Failed to install sharp", e);
}

// Dynamically import sharp to avoid issues
import('sharp').then((sharpModule) => {
  const sharp = sharpModule.default;

  const conversions = [
    { in: 'C:\\\\Users\\\\User\\\\.gemini\\\\antigravity\\\\brain\\\\e8bded32-cce5-4306-8d58-1c774239a08c\\\\tuberanker_mockup_1782111534015.png', out: 'public/projects/tuberanker.webp' },
    { in: 'C:\\\\Users\\\\User\\\\.gemini\\\\antigravity\\\\brain\\\\e8bded32-cce5-4306-8d58-1c774239a08c\\\\aerosky_1782111625769.png', out: 'public/projects/aerosky.webp' },
    { in: 'C:\\\\Users\\\\User\\\\.gemini\\\\antigravity\\\\brain\\\\e8bded32-cce5-4306-8d58-1c774239a08c\\\\doctor_ai_1782111647497.png', out: 'public/projects/doctor-ai.webp' }
  ];

  fs.mkdirSync('public/projects', { recursive: true });
  fs.mkdirSync('public/images', { recursive: true });

  const run = async () => {
    for (const item of conversions) {
      if (fs.existsSync(item.in)) {
        await sharp(item.in).webp().toFile(item.out);
        console.log(`Converted ${item.in} to ${item.out}`);
      } else {
        console.error(`File not found: ${item.in}`);
      }
    }
    
    // Copy haider.jpg
    const haiderSrc = 'C:\\\\Users\\\\User\\\\.gemini\\\\antigravity\\\\brain\\\\e8bded32-cce5-4306-8d58-1c774239a08c\\\\haider.jpg';
    if (fs.existsSync(haiderSrc)) {
      fs.copyFileSync(haiderSrc, 'public/images/haider.jpg');
      console.log('Copied haider.jpg');
    } else {
      console.error('haider.jpg not found');
    }
  
    // Generate simple valid PDF for resume.pdf
    const pdfStr = '%PDF-1.4\\n1 0 obj\\n<< /Type /Catalog /Pages 2 0 R >>\\nendobj\\n2 0 obj\\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\\nendobj\\n3 0 obj\\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> >> >> >>\\nendobj\\n4 0 obj\\n<< /Length 44 >>\\nstream\\nBT\\n/F1 24 Tf\\n100 700 Td\\n(Haider Ali Resume) Tj\\nET\\nendstream\\nendobj\\nxref\\n0 5\\n0000000000 65535 f \\n0000000009 00000 n \\n0000000058 00000 n \\n0000000115 00000 n \\n0000000289 00000 n \\ntrailer\\n<< /Size 5 /Root 1 0 R >>\\nstartxref\\n382\\n%%EOF';
    fs.writeFileSync('public/resume.pdf', Buffer.from(pdfStr, 'utf-8'));
    console.log('Created resume.pdf');

    // Print sizes
    console.log("\\n--- File Sizes ---");
    const checkSize = (path) => {
      try {
        const stats = fs.statSync(path);
        console.log(`${path}: ${(stats.size / 1024).toFixed(2)} KB`);
      } catch (e) {
        console.log(`${path}: MISSING`);
      }
    };
    checkSize('public/images/haider.jpg');
    checkSize('public/projects/tuberanker.webp');
    checkSize('public/projects/aerosky.webp');
    checkSize('public/projects/doctor-ai.webp');
    checkSize('public/resume.pdf');
  };
  
  run();
});
