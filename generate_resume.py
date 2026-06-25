import sys
import subprocess
import os

def install_packages():
    try:
        import reportlab
        import fitz
    except ImportError:
        print("Installing reportlab and pymupdf...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "reportlab", "pymupdf", "--quiet"])

install_packages()

from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_JUSTIFY, TA_LEFT, TA_CENTER
from reportlab.lib import colors
import fitz

pdf_path = "public/resume.pdf"

def generate_pdf():
    doc = SimpleDocTemplate(pdf_path, pagesize=letter,
                            rightMargin=50, leftMargin=50,
                            topMargin=40, bottomMargin=40)

    styles = getSampleStyleSheet()

    style_name = ParagraphStyle(
        'Name',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=20,
        alignment=TA_CENTER,
        spaceAfter=6
    )

    style_contact = ParagraphStyle(
        'Contact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        alignment=TA_CENTER,
        spaceAfter=14
    )

    style_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=12,
        spaceBefore=14,
        spaceAfter=4,
        textColor=colors.black
    )

    style_body = ParagraphStyle(
        'BodyText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        alignment=TA_JUSTIFY,
        spaceAfter=6,
        leading=14
    )

    style_item = ParagraphStyle(
        'Item',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        spaceAfter=6,
        leading=14
    )

    Story = []

    Story.append(Paragraph("HAIDER ALI", style_name))
    Story.append(Paragraph("0328-1450285 | haiderali1076912@gmail.com | Pakistan", style_contact))
    Story.append(Paragraph("GitHub: https://github.com/HaiderAli1076 | LinkedIn: linkedin.com/in/haider-ali-5022b53b3", style_contact))

    def add_heading(text):
        Story.append(Paragraph(text.upper(), style_heading))
        Story.append(HRFlowable(width="100%", thickness=1, color=colors.black, spaceBefore=0, spaceAfter=8))

    add_heading("Professional Summary")
    Story.append(Paragraph("Junior Full-Stack Developer with hands-on experience building AI-powered web applications and SaaS platforms. Skilled in Python, JavaScript/TypeScript, SQL databases, API integration, authentication, cloud deployment, and modern web technologies. Passionate about software engineering, artificial intelligence, machine learning, and continuous learning.", style_body))

    add_heading("Technical Skills")
    Story.append(Paragraph("Python, JavaScript, TypeScript, C, C++, C#, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, React, Next.js, Tailwind CSS, PostgreSQL, SQLite, Prisma ORM, REST APIs, Git, GitHub, Docker, Vercel, NextAuth, Stripe, Redis, BullMQ, OpenAI API, Gemini API, Groq API", style_body))

    add_heading("Projects")
    Story.append(Paragraph("<b>TubeRanker</b> — Full-stack AI-powered YouTube growth platform using Next.js, PostgreSQL, Prisma, Redis, BullMQ, Stripe, and AI APIs. Features include AI content generation, SEO audits, competitor tracking, analytics dashboards, subscription billing, and background job processing. Live: tube-ranker.vercel.app", style_item))
    Story.append(Paragraph("<b>AeroSky</b> — Weather dashboard using Python, Flask, SQLite, and HTTPX with forecasting, caching, retry mechanisms, favorites storage, and responsive UI. Live: HaiderAli1076.pythonanywhere.com", style_item))
    Story.append(Paragraph("<b>Doctor AI (In Development)</b> — AI-powered healthcare assistant featuring conversational AI, symptom analysis, secure user management, and medical information retrieval.", style_item))

    add_heading("Internships")
    Story.append(Paragraph("<b>Software Development Intern</b> — Ranksool, 2025", style_item))
    Story.append(Paragraph("<b>Software Development Intern</b> — Career Institute, 2025", style_item))

    add_heading("Certifications & Training")
    Story.append(Paragraph("<b>Artificial Intelligence & Machine Learning Course</b> — Career Institute, 2025", style_item))
    Story.append(Paragraph("<b>E-Hunarmand Program</b> — Government Program, 2025", style_item))

    add_heading("Education")
    Story.append(Paragraph("<b>BS Computer Science (BSCS)</b> — University of Agriculture, Faisalabad (2024 - Present)", style_item))

    add_heading("Career Objective")
    Story.append(Paragraph("Seeking an internship or junior software engineering role where I can contribute to real-world projects, strengthen my technical skills, and grow as a Full-Stack Developer.", style_body))

    doc.build(Story)
    print("Resume generated successfully at public/resume.pdf")

def check_pdf():
    with open(pdf_path, 'rb') as f:
        header = f.read(5)
        print(f"File magic bytes: {header}")
        if header == b'%PDF-':
            print("VALIDATION SUCCESS: File is a valid PDF.")
        else:
            print("VALIDATION FAILED: File is not a valid PDF.")

def convert_to_image():
    screenshot_path = r"C:\Users\User\.gemini\antigravity\brain\e8bded32-cce5-4306-8d58-1c774239a08c\resume_screenshot.png"
    doc = fitz.open(pdf_path)
    page = doc.load_page(0)
    pix = page.get_pixmap(dpi=150)
    pix.save(screenshot_path)
    print(f"Screenshot saved to {screenshot_path}")

generate_pdf()
check_pdf()
convert_to_image()
