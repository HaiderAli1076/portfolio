# Haider Ali - Personal Portfolio

A modern, responsive, AI-powered developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion. 

### 🚀 Quick Demo
**Live on Vercel:** [https://portfolio-haider-chi.vercel.app](https://portfolio-haider-chi.vercel.app)

**Live on GitHub Pages:** [https://HaiderAli1076.github.io/portfolio/](https://HaiderAli1076.github.io/portfolio/)

---

## 🛠️ Built With
* **Framework:** React + Vite
* **Styling:** Tailwind CSS (v4)
* **Animations:** Framer Motion
* **Icons:** Lucide React
* **Deployment:** Vercel & GitHub Pages

## 💻 Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/HaiderAli1076/portfolio.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   *The app will be available at [http://localhost:5173/](http://localhost:5173/)*

4. Build for production:
   ```bash
   npm run build
   ```

## 📄 Automated Resume Generation
The PDF resume is generated using a headless browser (Puppeteer) with a custom HTML template. To rebuild it:
```bash
node generate_resume_puppeteer.js
```
