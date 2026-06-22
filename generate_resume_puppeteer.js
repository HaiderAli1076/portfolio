import fs from 'fs';
import puppeteer from 'puppeteer-core';

// Paths where chrome/edge might be
const paths = [
  'C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe',
  'C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe',
  'C:\\\\Program Files\\\\Microsoft\\\\Edge\\\\Application\\\\msedge.exe',
  'C:\\\\Program Files (x86)\\\\Microsoft\\\\Edge\\\\Application\\\\msedge.exe'
];

let executablePath = null;
for (const p of paths) {
  if (fs.existsSync(p)) {
    executablePath = p;
    break;
  }
}

if (!executablePath) {
  console.error("Could not find Chrome or Edge executable.");
  process.exit(1);
}

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      color: #000;
      background: #FFF;
      line-height: 1.4;
      padding: 40px 60px;
      margin: 0;
      font-size: 10pt;
    }
    h1 {
      font-size: 22pt;
      margin: 0 0 5px 0;
      text-transform: uppercase;
      font-weight: bold;
      text-align: center;
    }
    .contact-info {
      font-size: 10pt;
      margin-bottom: 15px;
      text-align: center;
    }
    .contact-info a {
      color: #000;
      text-decoration: none;
    }
    h2 {
      font-size: 12pt;
      text-transform: uppercase;
      border-bottom: 1px solid #000;
      padding-bottom: 2px;
      margin-top: 15px;
      margin-bottom: 8px;
    }
    p {
      margin: 0 0 8px 0;
      text-align: justify;
    }
    .item-title {
      font-weight: bold;
      display: inline;
    }
    .item-desc {
      display: inline;
    }
    .item-block {
      margin-bottom: 8px;
    }
    ul {
      margin: 4px 0 8px 0;
      padding-left: 20px;
    }
    li {
      margin-bottom: 3px;
    }
  </style>
</head>
<body>

  <h1>HAIDER ALI</h1>
  <div class="contact-info">
    0328-1450285 | <a href="mailto:haiderali1076912@gmail.com">haiderali1076912@gmail.com</a> | Pakistan<br/>
    GitHub: <a href="https://github.com/HaiderAli1076">https://github.com/HaiderAli1076</a> | 
    LinkedIn: <a href="https://linkedin.com/in/haider-ali-5022b53b3">linkedin.com/in/haider-ali-5022b53b3</a>
  </div>

  <h2>Professional Summary</h2>
  <p>Junior Full-Stack Developer with hands-on experience building AI-powered web applications and SaaS platforms. Skilled in Python, JavaScript/TypeScript, SQL databases, API integration, authentication, cloud deployment, and modern web technologies. Passionate about software engineering, artificial intelligence, machine learning, and continuous learning.</p>

  <h2>Technical Skills</h2>
  <p>Python, JavaScript, TypeScript, C, C++, C#, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, React, Next.js, Tailwind CSS, PostgreSQL, SQLite, Prisma ORM, REST APIs, Git, GitHub, Docker, Vercel, NextAuth, Stripe, Redis, BullMQ, OpenAI API, Gemini API, Groq API</p>

  <h2>Projects</h2>
  <div class="item-block">
    <div class="item-title">TubeRanker</div> — <div class="item-desc">Full-stack AI-powered YouTube growth platform using Next.js, PostgreSQL, Prisma, Redis, BullMQ, Stripe, and AI APIs. Features include AI content generation, SEO audits, competitor tracking, analytics dashboards, subscription billing, and background job processing. Live: tube-ranker.vercel.app</div>
  </div>
  <div class="item-block">
    <div class="item-title">AeroSky</div> — <div class="item-desc">Weather dashboard using Python, Flask, SQLite, and HTTPX with forecasting, caching, retry mechanisms, favorites storage, and responsive UI. Live: HaiderAli1076.pythonanywhere.com</div>
  </div>
  <div class="item-block">
    <div class="item-title">Doctor AI (In Development)</div> — <div class="item-desc">AI-powered healthcare assistant featuring conversational AI, symptom analysis, secure user management, and medical information retrieval.</div>
  </div>

  <h2>Internships</h2>
  <div class="item-block">
    <div class="item-title">Software Development Intern</div> — <div class="item-desc">Ranksool, 2025</div><br/>
    <div class="item-title">Software Development Intern</div> — <div class="item-desc">Career Institute, 2025</div>
  </div>

  <h2>Certifications & Training</h2>
  <div class="item-block">
    <div class="item-title">Artificial Intelligence & Machine Learning Course</div> — <div class="item-desc">Career Institute, 2025</div><br/>
    <div class="item-title">E-Hunarmand Program</div> — <div class="item-desc">Government Program, 2025</div>
  </div>

  <h2>Education</h2>
  <div class="item-block">
    <div class="item-title">BS Computer Science (BSCS)</div> — <div class="item-desc">University of Agriculture, Faisalabad (2022 - Present)</div>
  </div>

  <h2>Career Objective</h2>
  <p>Seeking an internship or junior software engineering role where I can contribute to real-world projects, strengthen my technical skills, and grow as a Full-Stack Developer.</p>

</body>
</html>
`;

(async () => {
  try {
    const browser = await puppeteer.launch({
      executablePath,
      headless: true
    });
    const page = await browser.newPage();
    
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    
    // Save as PDF
    await page.pdf({
      path: 'public/resume.pdf',
      format: 'A4',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });
    
    // Take screenshot
    await page.setViewport({ width: 800, height: 1120 });
    await page.screenshot({ path: 'C:\\\\Users\\\\User\\\\.gemini\\\\antigravity\\\\brain\\\\e8bded32-cce5-4306-8d58-1c774239a08c\\\\resume_screenshot.png', fullPage: true });

    await browser.close();
    
    // Validate
    const header = fs.readFileSync('public/resume.pdf').subarray(0, 5).toString();
    if (header === '%PDF-') {
      console.log('VALIDATION SUCCESS: File is a valid PDF.');
    } else {
      console.log('VALIDATION FAILED: Not a valid PDF.');
    }

  } catch (err) {
    console.error("Error generating PDF:", err);
  }
})();
