import Link from 'next/link';
import Image from 'next/image';

export default function Home() {

  const projects = [
    {
      title: "AI-Powered Job Fit Checker",
      type: "AI/ML & Full-Stack",
      typeClass: "bg-portfolio-accent2-light text-portfolio-accent2",
      desc: "An advanced full stack, AI powered system that analyzes resumes against target job descriptions. Instead of relying on rigid, outdated keyword-matching algorithms, Jobfitcheck leverages a high-speed Agentic AI Architecture to perform deep semantic analysis, identify concrete skill gaps, and provide actionable resume optimization feedback.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "LangGraph", "Groq Cloud API"],
      image: "/jobfit.webp", 
      demoUrl: "https://jobfitcheck.vercel.app/",
      githubUrl: "https://github.com/FatimaMansoorAhmed/Jobfitchecker.git"
    },
    {
      title: "Pro Document QA (RAG-Powered)",
      type: "AI & ML",
      typeClass: "bg-portfolio-type-ml-bg text-portfolio-type-ml-text",
      desc: "A modular, production-grade Retrieval-Augmented Generation (RAG) application that allows users to upload PDF documents and have natural language conversations with their contents. This app uses local embeddings for zero vector-generation costs and leverages high-performance LLMs via Groq to deliver near-instant responses with accurate source citations.",
      tags: ["Modular Architecture", "UI Streamlit", "LangChain", "Hugging Face"],
      image: "/ProDoc.webp",
      demoUrl: "https://documentragapp.streamlit.app/",
      githubUrl: "https://github.com/FatimaMansoorAhmed/RAG_QA_APP.git"
    },
    {
      title: "Talent Match",
      type: "Frontend Backend",
      typeClass: "bg-portfolio-accent-light text-portfolio-accent",
      desc: "Developed a fullstack web application to manage job postings and user interactions. Utilized Firebase services for authentication, database management.",
      tags: ["React.js", "Firebase", "Tailwind CSS", "Authentication", "Cloudinary"],
      image: "/talentMatchh.webp",
      demoUrl: "https://job-portal-final-cgnk-3cbdj629s-fatimamansoorahmeds-projects.vercel.app/",
      githubUrl: "https://github.com/FatimaMansoorAhmed/Job_Portal_Final.git"
    },
    {
      title: "Expense Tracker",
      type: "Full Stack",
      typeClass: "bg-portfolio-accent-light text-portfolio-accent",
      desc: "Developed a fullstack web application to manage Expenses and daily spendigs. Utilized MongoDB for database management and Rect for Frontend",
      tags: ["React", "Express", "MongoDB"],
      image: "/ExpenseTrack.webp",
      demoUrl: "https://expense-tracker-4rss-11uhi9u4p-fatimamansoorahmeds-projects.vercel.app/",
      githubUrl: "https://github.com/FatimaMansoorAhmed/ExpenseTracker.git"
    },
    {
      title: "Customer Churn Prediction Model",
      type: "ML",
      typeClass: "bg-portfolio-accent-light text-portfolio-accent",
      desc: "This project focuses on building a predictive machine learning model to identify customers who are highly likely to discontinue using a company’s service (churn). By accurately predicting churn, businesses can proactively implement targeted retention strategies, reduce customer acquisition costs, and maximize customer lifetime value",
      tags: ["Jupyter Notebook", "Scikit-Learn", "Pandas"],
      image: "/MLModel.webp",
      githubUrl: "https://github.com/FatimaMansoorAhmed/Customer_Churn_Prediction_System.git"
    },
    {
      title: "Savoury Hub",
      type: "Frontend HTML CSS JS",
      typeClass: "bg-portfolio-accent-light text-portfolio-accent",
      desc: "Developed an interactive restaurant website Utilized JavaScript and jQuery to implement interface responsiveness.",
      tags: ["web-based", "HTML", "CSS", "JS"],
      image: "/Food.webp",
      demoUrl: "https://earnest-pudding-f4a9d9.netlify.app/",
      githubUrl: "https://github.com/FatimaMansoorAhmed/Savoury_Website.git"
    },
    {
      title: "Weather Update",
      type: "React JS",
      typeClass: "bg-portfolio-accent-light text-portfolio-accent",
      desc: "Developed a real-time weather information system using React and external API services",
      tags: ["web-based", "React Js", "API Integration"],
      image: "/Weather1.webp",
      demoUrl: "https://weather-app-bice-nine-35.vercel.app/",
      githubUrl: "https://github.com/FatimaMansoorAhmed/Weather_App.git"
    }
  ];

  const experience = [
    {
      role: "Deeplearning/Machine Learning Intern",
      company: "NextGen, Karachi",
      period: "Nov 2025 — Dec 2025",
      desc: "Developed and fine tuned ML models for document classification. Worked on data engineering to build automated preprocessing pipelines, reducing manual effort.",
      isLast: false
    }
  ];

  const courses = [
    { title: "Artificial Intelligence & Expert Systems", topics: "Deep Learning, Neural Networks, Agent Architectures" },
    { title: "Database Management Systems", topics: "SQL, Query Optimization, Normalization" },
    { title: "Software Quality Engineering", topics: "Unit Testing, Test-Driven Development, Code Reviews, SQA Metrics" },
    { title: "Natural Language Processing", topics: "Tokenization, Stemming & Lemmatization, POS Tagging, Named Entity Recognition, TF-IDF, Word Embeddings, Sentiment Analysis, Language Models, Text Classification" },
    { title: "Information & Network Security", topics: "Cryptography, Symmetric & Asymmetric Encryption, Firewalls & IDS, Authentication & Authorization, Common Attacks (SQL Injection, XSS), Network Protocols Security, Hashing Algorithms, Public Key Infrastructure, Risk Assessment" },
    { title: "Web Engineering", topics: "HTML/CSS, JavaScript, REST APIs, Frontend Frameworks, Web Security" },
    { title: "Internet of Things", topics: "Sensors & Actuators, MQTT Protocol, Arduino/Raspberry Pi" },
    { title: "Operating Systems", topics: "Process Management, Memory Management, File Systems, Scheduling, Deadlocks, Virtualization" },
    { title: "Project Management", topics: "Agile & Scrum, Gantt Charts, Risk Management, Stakeholder Analysis" },
    { title: "Object-Oriented Programming", topics: "Classes & Objects, Inheritance, Polymorphism, Encapsulation, Abstraction" }
  ];

  const certifications = [
    { icon: "CG", name: "Frontend Development Program", issuer: "CodeGirls Pakistan" },
    { icon: "Aspire", name: "Aspire Leaders Program", issuer: "Aspire Institute" },
    { icon: "CNA", name: "Internet of Things", issuer: "Cisco Networking Academy" },
    { icon: "CNA", name: "Introduction to Python Programming", issuer: "Cisco Networking Academy" }
  ];

  const coreCompetencies = [
    {
      area: "Languages & Frameworks",
      type: "Core Tech",
      typeClass: "bg-portfolio-accent-light text-portfolio-accent",
      tags: ["Python", "REACT.JS", "Next.JS", "Express.js", "JavaScript", "TypeScript", "C++", "SQL", "JAVA", "Tailwind CSS"]
    },
    {
      area: "Artificial Intelligence & ML",
      type: "Specialization",
      typeClass: "bg-portfolio-accent2-light text-portfolio-accent2",
      tags: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "OpenCV", "LangChain", "Pandas / NumPy", "LLM Fine-tuning / RAG"]
    },
    {
      area: "Full-Stack & Systems Engineering",
      type: "Architecture",
      typeClass: "bg-portfolio-type-ml-bg text-portfolio-type-ml-text",
      tags: ["React.Js", "Node.Js", "React Native", "FastAPI", "MongoDB"]
    },
    {
      area: "Infrastructure & Cloud DevOps",
      type: "Environments",
      typeClass: "bg-portfolio-accent-light text-portfolio-accent",
      tags: ["Git", "Docker", "AWS", "Linux", "Figma", "Arduino", "Vercel", "Jupyter", "Postman", "Cloudinary", "Firebase"]
    }
  ];

  const interests = [
    "Generative AI", "Open Source", "Research Papers", "UI Design",
    "Competitive Coding", "Design"
  ];

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-portfolio-bg">
      
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-portfolio-bg/92 backdrop-blur-md border-b border-portfolio-border px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between py-3 sm:h-14 gap-2 sm:gap-0">
        <Link href="#" className="font-serif text-[1.15rem] text-portfolio-text tracking-wide font-medium">
          Fatima Mansoor
        </Link>
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1 list-none m-0 p-0">
          <li><Link href="#skills" className="text-[12px] sm:text-[13px] font-semibold text-portfolio-muted hover:text-portfolio-text transition-colors tracking-wider">Skills</Link></li>
          <li><Link href="#projects" className="text-[12px] sm:text-[13px] font-semibold text-portfolio-muted hover:text-portfolio-text transition-colors tracking-wider">Projects</Link></li>
          <li><Link href="#experience" className="text-[12px] sm:text-[13px] font-semibold text-portfolio-muted hover:text-portfolio-text transition-colors tracking-wider">Experience</Link></li>
          <li><Link href="#contact" className="text-[12px] sm:text-[13px] font-semibold text-portfolio-muted hover:text-portfolio-text transition-colors tracking-wider">Contact</Link></li>
          <li><Link href="https://github.com/FatimaMansoorAhmed" target="_blank" className="text-[12px] sm:text-[13px] font-semibold text-portfolio-muted hover:text-portfolio-text transition-colors tracking-wider">GitHub</Link></li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <header className="max-w-[860px] mx-auto pt-12 sm:pt-20 pb-8 px-4 sm:px-8 grid grid-cols-1 gap-8 items-start">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-portfolio-accent-light text-portfolio-accent text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wider">
            <span className="w-1.5 h-1.5 bg-portfolio-accent rounded-full animate-pulse-dot"></span> 
            Open to opportunities
          </div>
          
          <div className="mb-5">
            <p className="font-serif text-[1.2rem] sm:text-[1.4rem] italic text-portfolio-muted mb-1">
              Hello, my name is
            </p>
            <h1 className="font-serif text-[clamp(2.2rem,5vw,3.4rem)] leading-[1.1] text-portfolio-accent2 font-normal tracking-tight mb-2 sm:h-[60px]">
              <span className="inline-block animate-name-loop">
                Fatima Mansoor
              </span>
            </h1>
            <h2 className="font-sans text-[clamp(1.0rem,2.5vw,1.3rem)] font-semibold text-portfolio-text mt-2 tracking-wide uppercase leading-snug">
              Software Engineer & AI/ML Specialist
            </h2>
          </div>

<p className="text-[14px] sm:text-[15px] font-medium text-slate-700 max-w-[480px] leading-relaxed mb-8">
            I am a Software Engineer specializing in Agentic AI architectures and robust full stack development. Experienced in building high-throughput pipelines, fine tuning machine learning models, and deploying production ready web applications from data arrays to scalable APIs.
          </p>

          {/* THREE STAT CARDS - MOBILE OPTIMIZED */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 max-w-[580px]">
            {[
              { num: "12+", label: "Projects" },
              { num: "5", label: "Certifications" },
              { num: "FullStack AI/ML", label: "Focus" }
              
            ].map((stat, idx) => (
              <div key={idx} className="bg-portfolio-surface border border-portfolio-border rounded-portfolio-sm p-2 sm:p-3 text-center shadow-[0_2px_8px_rgba(0,0,0,0.02)] min-w-0">
                <div className="font-sans text-[15px] sm:text-xl font-bold text-portfolio-text mb-0.5 truncate">
                  {stat.num}
                </div>
                <div className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-portfolio-muted truncate">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="#projects" className="bg-portfolio-text text-white px-5 py-2.5 rounded-portfolio-sm text-[13px] font-semibold tracking-wide hover:opacity-90 transition-opacity text-center flex-1 sm:flex-none">
              View Projects
            </Link>
            <a 
              href="/resume.pdf" 
              download="Fatima_Mansoor_Resume.pdf"
              className="bg-transparent text-portfolio-text border-2 border-portfolio-text px-5 py-2.5 rounded-portfolio-sm text-[13px] font-semibold tracking-wide hover:bg-portfolio-text hover:text-white transition-all flex items-center justify-center gap-2 flex-1 sm:flex-none"
            >
              <span></span> Download CV
            </a>
          </div>
        </div>
      </header>

      {/* MAIN LAYOUT RESPONSIVE GRID GRID */}
      <main className="max-w-[860px] mx-auto pb-16 px-4 sm:px-8 grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8 items-start">
        
        {/* LEFT COLUMN */}
        <div className="space-y-10 w-full min-w-0">
          
          {/* SKILLS AS FEATURED CARDS */}
          <section id="skills" className="scroll-mt-20">
            <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-portfolio-muted mb-4 pb-2 border-b-4 border-portfolio-border">
              Technical Core Competencies
            </div>
            <div className="space-y-4">
              {coreCompetencies.map((comp, idx) => (
                <div key={idx} className="bg-portfolio-surface border border-portfolio-border rounded-portfolio-lg p-4 sm:p-5 transition-all relative overflow-hidden group hover:border-[#c5d8f0] hover:shadow-[0_4px_16px_rgba(45,90,142,0.06)] before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-portfolio-accent2 before:scale-y-0 before:origin-bottom before:transition-transform group-hover:before:scale-y-100">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="font-semibold text-[14px] text-portfolio-text">{comp.area}</h3>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap w-fit ${comp.typeClass}`}>
                      {comp.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {comp.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs px-2.5 py-1 rounded-full border border-portfolio-border text-portfolio-text bg-portfolio-bg font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FEATURED PROJECTS */}
          <section id="projects" className="scroll-mt-20">
            <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-portfolio-muted mb-4 pb-2 border-b-4 border-portfolio-border">
              Featured Projects
            </div>
            <div className="space-y-4">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-portfolio-surface border border-portfolio-border rounded-portfolio-lg p-4 sm:p-5 transition-all relative overflow-hidden group hover:border-[#c5d8f0] hover:shadow-[0_4px_16px_rgba(45,90,142,0.06)] before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-portfolio-accent before:scale-y-0 before:origin-bottom before:transition-transform group-hover:before:scale-y-100">
                  
                  {/* Image Render Layer */}
                  <div className="w-full h-40 sm:h-44 bg-portfolio-bg rounded-portfolio-sm mb-4 border border-portfolio-border overflow-hidden relative flex items-center justify-center text-portfolio-muted/40 font-medium">
                    {project.image ? (
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill
                        className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={idx < 2}
                      />
                    ) : (
                      <span>🖼️ [{project.title} Interface Mockup Preview]</span>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-[14px] text-portfolio-text">{project.title}</h3>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap w-fit shrink-0 ${project.typeClass}`}>
                      {project.type}
                    </span>
                  </div>
                  <p className="text-[13px] text-slate-700 font-medium leading-relaxed mb-4">{project.desc}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1 border-t border-portfolio-border/50 sm:border-none">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[11px] font-semibold bg-portfolio-tag-bg text-portfolio-tag-text px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4 text-xs font-semibold whitespace-nowrap sm:ml-auto">
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-portfolio-accent hover:underline flex items-center gap-1">
                          Live Demo ↗
                        </a>
                      )}
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-portfolio-muted hover:text-portfolio-text flex items-center gap-1">
                        Code ⌥
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </section>

          {/* EXPERIENCE TIMELINE */}
          <section id="experience" className="scroll-mt-20">
            <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-portfolio-muted mb-4 pb-2 border-b-2 border-portfolio-border">
              Experience
            </div>
            <div className="space-y-0">
              {experience.map((exp, idx) => (
                <div key={idx} className="grid grid-cols-[auto_1fr] gap-x-3 sm:gap-x-4 pb-6 last:pb-0 group">
                  <div className="flex flex-col items-center pt-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-portfolio-accent shrink-0"></div>
                    {!exp.isLast && <div className="w-[1px] flex-1 bg-portfolio-border mt-1 min-h-[20px]"></div>}
                  </div>
                  <div className={`pb-2 ${!exp.isLast ? 'border-b border-portfolio-border' : ''}`}>
                    <h3 className="font-semibold text-[14px] text-portfolio-text mb-0.5">{exp.role}</h3>
                    <div className="text-[13px] text-portfolio-accent font-semibold mb-0.5">{exp.company}</div>
                    <div className="text-xs text-portfolio-muted font-semibold mb-1.5">{exp.period}</div>
                    <p className="text-[13px] text-portfolio-muted font-medium leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* RELEVANT COURSEWORK */}
          <section id="courses" className="scroll-mt-20">
            <div className="bg-portfolio-surface border border-portfolio-border rounded-portfolio-lg p-4 sm:p-5">
              <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-portfolio-muted mb-4">
                Relevant Coursework
              </div>
              <div className="space-y-4">
                {courses.map((course, idx) => (
                  <div key={idx} className="border-b border-portfolio-border last:border-b-0 pb-3 last:pb-0">
                    <h3 className="font-sans text-[14px] font-bold text-portfolio-text mb-1">
                      {course.title}
                    </h3>
                    <p className="text-[12px] text-portfolio-muted font-medium leading-relaxed">
                      {course.topics}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN (SIDEBAR) */}
        <aside className="space-y-6 w-full min-w-0">
          
          {/* EDUCATION */}
          <div className="bg-portfolio-surface border border-portfolio-border rounded-portfolio-lg p-4 sm:p-5">
            <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-portfolio-muted mb-4">
              Education
            </div>
            <div className="space-y-3">
              <div className="pb-3 border-b border-portfolio-border last:border-none last:pb-0">
                <h4 className="text-[13px] font-semibold text-portfolio-text mb-0.5">BE Software Engineering</h4>
                <div className="text-[13px] text-portfolio-accent font-semibold mb-0.5">Muhammad Ali Jinnah University</div>
                <div className="text-xs text-portfolio-muted font-medium">2022 — 2026</div>
                <span className="inline-block mt-1 text-[11px] bg-portfolio-edu-bg text-portfolio-edu-text px-2 py-0.5 rounded-full font-semibold">
                  completed ✦
                </span>
              </div>
              <div className="last:border-none last:pb-0">
                <h4 className="text-[13px] font-semibold text-portfolio-text mb-0.5">FSc Pre-Engineering</h4>
                <div className="text-xs text-portfolio-muted font-medium">2020 — 2022</div>
              </div>
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div className="bg-portfolio-surface border border-portfolio-border rounded-portfolio-lg p-4 sm:p-5">
            <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-portfolio-muted mb-2">
              Certifications
            </div>
            <div className="divide-y divide-portfolio-border">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-2.5 py-3 first:pt-0 last:pb-0">
                  <div className="w-8 h-8 rounded-portfolio-sm bg-portfolio-accent-light flex items-center justify-center shrink-0 text-[11px] font-bold text-portfolio-accent font-sans">
                    {cert.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[13px] font-semibold text-portfolio-text mb-0.5 leading-tight truncate">{cert.name}</h4>
                    <span className="text-xs text-portfolio-muted font-medium block truncate">{cert.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* INTERESTS */}
          <div className="bg-portfolio-surface border border-portfolio-border rounded-portfolio-lg p-4 sm:p-5">
            <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-portfolio-muted mb-3">
              Interests
            </div>
            <div className="flex flex-wrap gap-1.5">
              {interests.map((interest, idx) => (
                <span key={idx} className="text-xs px-3 py-1 rounded-full border border-portfolio-border text-portfolio-muted font-medium">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* CONTACT INFO WITH WORD TRUNCATION FIXES */}
          <div id="contact" className="bg-portfolio-surface border border-portfolio-border rounded-portfolio-lg p-4 sm:p-5 scroll-mt-20">
            <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-portfolio-muted mb-3">
              Contact
            </div>
            <div className="flex flex-col min-w-0 w-full">
              {[
                { icon: "✉", label: "fatimamansoor.fm30@gmail.com", url: "mailto:fatimamansoor.fm30@gmail.com" },
                { icon: "in", label: "linkedin.com/in/fatima-mansoor-73b7492ba", url: "https://www.linkedin.com/in/fatima-mansoor-73b7492ba" },
                { icon: "⌥", label: "github.com/FatimaMansoorAhmed", url: "https://github.com/FatimaMansoorAhmed" },
                { icon: "#", label: "03330259507", url: "" },
                { icon: "◎", label: "Karachi, Pakistan", url: "https://maps.google.com" }
              ].map((link, idx) => {
                const isClickable = link.url !== "";
                const content = (
                  <>
                    <span className="text-[14px] w-4 text-center font-sans shrink-0 text-portfolio-text">{link.icon}</span> 
                    <span className="truncate flex-1 min-w-0" title={link.label}>
                      {link.label}
                    </span>
                  </>
                );

                return isClickable ? (
                  <a 
                    key={idx} 
                    href={link.url}
                    target={link.url.startsWith('mailto:') ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[13px] text-portfolio-muted font-semibold py-2.5 border-b border-portfolio-border last:border-b-0 hover:text-portfolio-accent transition-colors min-w-0 w-full hover:underline"
                  >
                    {content}
                  </a>
                ) : (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2 text-[13px] text-portfolio-muted font-semibold py-2.5 border-b border-portfolio-border last:border-b-0 min-w-0 w-full"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
      </main>

      {/* FOOTER */}
      <footer className="max-w-[860px] mx-auto border-t-2 border-portfolio-border py-6 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
        <span className="font-serif text-[1rem] text-portfolio-muted font-medium">Fatima Mansoor</span>
        <span className="text-xs text-portfolio-muted font-semibold">BE Software Engineering · Class of 2026</span>
      </footer>
    </div>
  );
}