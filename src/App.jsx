import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const EMAIL = 'treviora2707@gmail.com'
const PHONE = '+91 90259 10642'

const socialLinks = [
  ['Instagram', 'https://www.instagram.com/trevioraindustry?igsi=MWIxbGJybmQ1OGoxeQ=='],
  ['LinkedIn', 'https://www.linkedin.com/in/treviora-industry-b5b8a0426?utm_source=share_via&utm_content=profile&utm_medium=member_android'],
  ['YouTube', 'https://youtube.com/@trevioraindustry?si=TZCme8M5qcD67GES'],
  ['X', 'https://x.com/TrevioraCo'],
  ['Facebook', 'https://www.facebook.com/share/1DhXFFKRH5/'],
]

const navItems = [
  ['Home', '/'],
  ['About', '/about'],
  ['Pricing & Offers', '/pricing'],
  ['Profile', '/profile'],
  ['Projects', '/projects'],
  ['Contact', '/contact'],
]

const services = [
  { slug: 'web', number: '01', icon: 'WEB', title: 'Web Development', description: 'Professional websites & web apps', pageTitle: 'Web Development', subtitle: 'Professional Websites & Web Applications', image: '/images/service-web-development.webp', imageAlt: 'Developer working at a laptop in a bright workspace' },
  { slug: 'mobile', number: '02', icon: 'APP', title: 'Mobile Apps', description: 'Android & cross-platform apps', pageTitle: 'Mobile Applications', subtitle: 'Android & Cross Platform Apps', image: '/images/service-mobile-apps.webp', imageAlt: 'Smartphone beside a laptop, representing mobile experiences' },
  { slug: 'ai', number: '03', icon: 'AI', title: 'AI Solutions', description: 'Machine learning & smart systems', pageTitle: 'Artificial Intelligence', subtitle: 'Machine Learning & AI Solutions', image: '/images/service-ai.webp', imageAlt: 'Abstract visualization of artificial intelligence and digital data' },
  { slug: 'iot', number: '04', icon: 'IoT', title: 'IoT Projects', description: 'Smart devices & automation', pageTitle: 'IoT Project Development', subtitle: 'Embedded & Smart Systems', image: '/images/service-iot.webp', imageAlt: 'Close-up of a circuit board and connected technology' },
  { slug: 'ppt', number: '05', icon: 'PPT', title: 'PPT Design', description: 'Professional presentations', pageTitle: 'Professional Presentation Designs', subtitle: 'Corporate & Presentation Designs', image: '/images/service-ppt.webp', imageAlt: 'Executive presentation and corporate keynote slides' },
  { slug: 'graphics', number: '06', icon: 'DES', title: 'Graphics Design', description: 'Branding & creative design', pageTitle: 'Graphics & Branding Design', subtitle: 'Creative Branding & Visual Design', image: '/images/service-design.webp', imageAlt: 'Creative graphic design work on a tablet' },
  { slug: 'video', number: '07', icon: 'VID', title: 'Video Editing', description: 'Professional video production', pageTitle: 'Professional Video Production', subtitle: 'Professional Video Editing & Production', image: '/images/service-video.webp', imageAlt: 'Video editing workstation with editing software' },
]

const heroSlides = [
  {
    image: '/images/hero-collaboration.webp',
    alt: 'Creative team collaborating around laptops',
    tag: '01 / COLLABORATION',
    title: 'Modern Digital Engineering',
  },
  {
    image: '/images/service-ai.webp',
    alt: 'Abstract visualization of artificial intelligence and digital data',
    tag: '02 / ARTIFICIAL INTELLIGENCE',
    title: 'Next-Gen Smart Systems',
  },
  {
    image: '/images/about-studio.webp',
    alt: 'Modern creative studio workspace',
    tag: '03 / INNOVATION LAB',
    title: 'Future-Ready Cloud & Design',
  },
  {
    image: '/images/service-iot.webp',
    alt: 'Close-up of a circuit board and connected technology',
    tag: '04 / IOT & AUTOMATION',
    title: 'Connected Smart Hardware',
  },
]

const people = [
  {
    slug: 'chairman', route: '/chairman', name: 'THIRUVEL.K', title: 'Founder & Executive Chairman', role: 'Founder • Chairman • Chief Technology Officer', image: '/images/chairman.jpeg', note: "Leads the company's technological vision, innovation strategy and engineering excellence.",
    intro: 'Thiruvel.K is the visionary Founder, Chairman and Chief Technology Officer of TREVIORA. He leads the company with a passion for innovation, technology strategy, and digital transformation. His leadership drives TREVIORA to create world-class technology products that inspire innovation and create meaningful impact in the digital world.',
    stats: [['4+', 'Core Skills'], ['100%', 'Dedication'], ['100%', 'Innovation']],
    aboutTitle: 'About the Chairman',
    paragraphs: [
      { text: 'Thiruvel.K is the Founder, Chairman and Chief Technology Officer of TREVIORA. He is responsible for leading innovation, technology strategy and digital transformation across all company initiatives.' },
      { text: 'His expertise spans App Development, Web Development, AI Model Building, and Graphics Designing. He combines technical excellence with creative vision to build intelligent digital products.', emphasis: ['App Development', 'Web Development', 'AI Model Building', 'Graphics Designing'] },
      { text: 'His vision is to build world-class technology products that inspire innovation, empower businesses, and create meaningful impact in the digital ecosystem. Under his leadership, TREVIORA continues to push boundaries and deliver cutting-edge solutions.' },
    ],
    skills: [
      { name: 'App Development', description: 'Expert in building powerful, secure and user-friendly mobile applications for Android and cross-platform environments. Using modern technologies to ensure high performance, scalability and exceptional user experience.', tags: ['Android', 'Cross-Platform', 'UI/UX'] },
      { name: 'Web Development', description: 'Creating modern, responsive and high-performance websites using the latest web technologies. Delivering secure, scalable and user-friendly digital experiences that help businesses grow and succeed online.', tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'] },
      { name: 'AI Model Building', description: 'Developing intelligent AI models using Machine Learning, Deep Learning, and Natural Language Processing. Building smart solutions that automate processes, analyze data, and solve real-world problems with advanced analytics.', tags: ['Machine Learning', 'Deep Learning', 'NLP'] },
      { name: 'Graphics Designing', description: 'Creating stunning visual designs including logos, posters, social media creatives, brand identities, and marketing materials. Combining creativity with strategy to build memorable and impactful visual experiences.', tags: ['Logo Design', 'Brand Identity', 'Poster Design'] },
    ],
    proficiency: [['App Development', '95%'], ['Web Development', '98%'], ['AI Model Building', '90%'], ['Graphics Designing', '92%']],
    vision: [
      'As the Founder and Chairman of TREVIORA, Thiruvel.K believes that innovation, collaboration and customer-focused solutions are the foundation of sustainable growth.',
      'His vision is to create intelligent digital products that combine creativity, modern engineering and artificial intelligence to solve real-world challenges. He is committed to building a culture of continuous learning, technical excellence, and creative thinking.',
      'Under his leadership, TREVIORA is transforming ideas into powerful digital experiences that empower businesses, inspire innovation, and shape the future of technology.',
    ],
  },
  {
    slug: 'ceo', route: '/ceo', name: 'PAGOLU SAI REVANTH', title: 'Chief Executive Officer (CEO)', role: 'Executive Leadership', image: '/images/chief-executive-officer.jpeg', note: "Drives the company's business strategy, innovation and digital growth.",
    intro: "Pagolu Sai Revanth serves as the Chief Executive Officer of TREVIORA, driving the company's business strategy, innovation and digital growth. With a passion for technology and creative problem-solving, he leads the team to deliver world-class digital solutions that empower businesses and transform ideas into reality.",
    stats: [['4+', 'Core Skills'], ['100%', 'Commitment'], ['100%', 'Creativity']],
    aboutTitle: 'About the CEO',
    paragraphs: [
      { text: 'Pagolu Sai Revanth is passionate about building modern digital experiences through creativity, technology and strategic leadership. As the CEO, he oversees all business operations, drives innovation, and ensures every project delivers exceptional value.' },
      { text: 'His expertise spans UI/UX Design, Finance Management, Graphics Designing, and Digital Marketing. He combines creative vision with business acumen to build products that are both beautiful and profitable.', emphasis: ['UI/UX Design', 'Finance Management', 'Graphics Designing', 'Digital Marketing'] },
      { text: 'His leadership philosophy emphasizes continuous innovation, collaboration, creative thinking and delivering high-quality technology solutions for clients worldwide. Under his guidance, TREVIORA continues to grow and evolve as a leading technology company.' },
    ],
    skills: [
      { name: 'UI/UX Design', description: 'Expert in creating intuitive, user-centered digital experiences. Designing wireframes, prototypes, and high-fidelity interfaces using Figma and modern design tools. Ensuring every product is visually stunning, easy to use, and accessible to all users.', tags: ['Figma', 'Wireframing', 'Prototyping', 'User Research'] },
      { name: 'Finance Management', description: "Skilled in financial planning, budgeting, cost analysis, and resource allocation. Ensuring the company's financial health through strategic investment, revenue optimization, and risk management. Driving sustainable growth and profitability.", tags: ['Budgeting', 'Financial Planning', 'Cost Analysis', 'Revenue Strategy'] },
      { name: 'Graphics Designing', description: 'Creating visually compelling designs that capture attention and communicate effectively. Designing logos, brand identities, marketing materials, and digital assets that strengthen brand presence and drive engagement across all platforms.', tags: ['Logo Design', 'Brand Identity', 'Social Media', 'Marketing Materials'] },
      { name: 'Digital Marketing', description: 'Expert in creating and executing effective digital marketing strategies. Managing social media campaigns, SEO optimization, content marketing, and paid advertising to increase brand visibility, drive traffic, and generate leads.', tags: ['SEO', 'Social Media', 'Content Marketing', 'Paid Ads'] },
    ],
    proficiency: [['UI/UX Design', '95%'], ['Finance Management', '90%'], ['Graphics Designing', '93%'], ['Digital Marketing', '92%']],
    vision: [
      'As the Chief Executive Officer of TREVIORA, Pagolu Sai Revanth believes that innovation, collaboration and customer-focused solutions are the foundation of sustainable growth.',
      'His vision is to create intelligent digital products that combine creativity, modern engineering and artificial intelligence to solve real-world challenges. He is committed to building a culture of continuous learning, technical excellence, and creative thinking.',
      'Under his leadership, TREVIORA is transforming ideas into powerful digital experiences that empower businesses, inspire innovation, and shape the future of technology.',
    ],
  },
  {
    slug: 'md', route: '/md', name: 'MOHAMED BOUVASH.S', title: 'Managing Director (MD)', role: 'Executive Leadership', image: '/images/managing-director.jpeg', note: 'Oversees business operations, strategic execution and organizational growth.',
    intro: "S. Mohamed Bouvash serves as the Managing Director of TREVIORA, leading operational excellence, strategic execution and business growth. With a passion for creative technology and innovative problem-solving, he drives the company's vision forward by delivering exceptional digital solutions that exceed client expectations.",
    stats: [['5+', 'Core Skills'], ['100%', 'Creativity'], ['100%', 'Innovation']],
    aboutTitle: 'About the Managing Director',
    paragraphs: [
      { text: "S. Mohamed Bouvash plays a vital role in driving TREVIORA's business strategy, operational excellence and digital transformation. As the Managing Director, he oversees daily operations, ensures project quality, and fosters a culture of innovation and creativity." },
      { text: 'His expertise spans Video Editing, Content Writing, Web Development, and AI Model Development. With a 100% Creativity mindset, he brings innovative ideas to every project.', emphasis: ['Video Editing', 'Content Writing', 'Web Development', 'AI Model Development', '100% Creativity'] },
      { text: 'He believes collaboration, continuous learning and creativity are the keys to building world-class technology solutions. His leadership ensures that every TREVIORA project delivers exceptional quality, innovation and customer satisfaction.' },
    ],
    skills: [
      { name: 'Video Editing', description: 'Expert in professional video editing, cinematic productions, motion graphics, promotional videos, YouTube content, advertisements and creative visual storytelling. Using industry-standard tools to deliver high-quality video content that captivates audiences.', tags: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'CapCut'] },
      { name: 'Content Writing', description: 'Skilled in creating engaging, informative and SEO-optimized content for websites, blogs, social media, marketing campaigns and business communications. Crafting compelling narratives that connect with audiences and drive engagement.', tags: ['SEO Writing', 'Blog Posts', 'Copywriting', 'Script Writing'] },
      { name: 'Web Development', description: 'Creating modern, responsive and high-performance websites using the latest web technologies. Building secure, scalable and user-friendly digital experiences that help businesses establish a strong online presence and achieve their goals.', tags: ['HTML5', 'CSS3', 'JavaScript', 'React'] },
      { name: 'AI Model Development', description: 'Developing intelligent AI models using Machine Learning, Deep Learning, and Natural Language Processing. Building smart solutions that automate processes, analyze data, and solve real-world problems with advanced analytics and predictive capabilities.', tags: ['Machine Learning', 'Deep Learning', 'NLP', 'Python'] },
    ],
    proficiency: [['Video Editing', '95%'], ['Content Writing', '92%'], ['Web Development', '90%'], ['AI Model Development', '88%'], ['Creativity', '100%']],
    vision: [
      'As the Managing Director of TREVIORA, S. Mohamed Bouvash is committed to building a culture of innovation, teamwork and operational excellence.',
      'His vision is to transform ideas into powerful digital products through modern technology, creative design and customer-focused solutions. With his 100% Creativity, he continuously pushes boundaries to deliver exceptional value.',
      "Under his leadership, TREVIORA is growing as a globally recognized technology company, delivering innovative solutions that empower businesses and inspire change.",
    ],
  },
  {
    slug: 'kavya', route: '/board1', name: 'KAVYA.V.M', title: 'Board of Director', role: 'Board of Directors', image: '/images/brand-ambassador.jpeg', note: 'Contributes to strategic planning, digital innovation and collaborative decision-making.',
    intro: "V. M. Kavya serves as a Board of Director at TREVIORA, contributing to strategic planning, creative innovation and collaborative decision-making across technology projects. She is passionate about designing modern digital experiences and supporting the company's long-term vision through innovation, teamwork and continuous learning.",
    stats: [['4+', 'Core Skills'], ['100%', 'Dedication'], ['100%', 'Creativity']],
    aboutTitle: 'About the Director',
    paragraphs: [
      { text: 'V. M. Kavya plays an important role in TREVIORA by supporting strategic initiatives, creative product development and team collaboration. She brings a unique blend of technical expertise and creative vision to every project.' },
      { text: "Her expertise spans Video Editing, AI Model Building, Web Development, and Strategic Planning. She combines creative storytelling with technical innovation to deliver impactful solutions.", emphasis: ['Video Editing', 'AI Model Building', 'Web Development', 'Strategic Planning'] },
      { text: 'She believes that creativity, effective communication and collaboration are the key foundations for building innovative technology solutions. Her strategic mindset helps TREVIORA navigate complex challenges and seize new opportunities.' },
    ],
    skills: [
      { name: 'Video Editing', description: 'Expert in professional video editing, cinematic storytelling, motion graphics, and creative visual production. Transforming raw footage into compelling narratives that engage audiences and deliver powerful messages across all platforms.', tags: ['Premiere Pro', 'After Effects', 'Motion Graphics', 'CapCut'] },
      { name: 'AI Model Building', description: 'Skilled in developing intelligent AI models using Machine Learning, Deep Learning, and Natural Language Processing. Building smart solutions that automate processes, analyze data, and solve real-world problems with advanced analytics.', tags: ['Machine Learning', 'Deep Learning', 'NLP', 'Python'] },
      { name: 'Web Development', description: 'Creating modern, responsive and high-performance websites using the latest web technologies. Building secure, scalable and user-friendly digital experiences that help businesses establish a strong online presence and achieve their goals.', tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'] },
      { name: 'Strategist', description: 'Expert in strategic planning, business analysis, and decision-making. Developing innovative strategies that drive growth, optimize operations, and position TREVIORA for long-term success in the competitive technology landscape.', tags: ['Strategic Planning', 'Business Analysis', 'Decision Making', 'Growth Strategy'] },
    ],
    proficiency: [['Video Editing', '94%'], ['AI Model Building', '90%'], ['Web Development', '92%'], ['Strategic Planning', '96%']],
    vision: [
      'As a Board of Director at TREVIORA, V. M. Kavya believes that innovation, creativity and collaboration are the foundation of every successful organization.',
      "Her vision is to contribute towards building intelligent digital products, enhancing user experiences and supporting TREVIORA's mission of delivering modern technology solutions with quality, integrity and continuous innovation.",
      'With her strategic mindset and creative expertise, she helps guide TREVIORA towards sustainable growth and technological excellence, ensuring the company remains at the forefront of innovation.',
    ],
  },
  {
    slug: 'athila', route: '/board2', name: 'ATHILA BANU.A', title: 'Board of Director', role: 'Board of Directors', image: '/images/athila-designer.jpeg', note: 'Contributes to creative innovation, digital product strategy and visual design.',
    intro: 'A. Athila Banu serves as a Board of Director at TREVIORA, contributing to creative innovation, digital product strategy and visual communication. She specializes in design, web development, invention, and quality assurance, ensuring every TREVIORA project meets the highest standards of excellence.',
    stats: [['4+', 'Core Skills'], ['100%', 'Quality Focus'], ['100%', 'Creativity']],
    aboutTitle: 'About the Director',
    paragraphs: [
      { text: "A. Athila Banu is a Board of Director at TREVIORA, bringing creativity, innovation and strategic thinking to the organization's digital initiatives. She is passionate about design excellence, technical innovation, and maintaining the highest quality standards." },
      { text: 'Her expertise spans Design, Web Development, Invention, and Quality Control. She combines artistic vision with technical precision to deliver visually stunning and highly functional digital products.', emphasis: ['Design', 'Web Development', 'Invention', 'Quality Control'] },
      { text: 'She believes that creativity, continuous learning and teamwork are essential for building future-ready digital products. Her commitment to quality ensures that every TREVIORA project exceeds client expectations.' },
    ],
    skills: [
      { name: 'Designer', description: 'Expert in creating visually stunning designs that capture attention and communicate effectively. Designing logos, brand identities, social media creatives, marketing materials, and UI/UX interfaces that strengthen brand presence and engage audiences.', tags: ['Figma', 'Photoshop', 'Illustrator', 'Canva'] },
      { name: 'Web Developer', description: 'Skilled in creating modern, responsive and high-performance websites using the latest web technologies. Building secure, scalable and user-friendly digital experiences that help businesses establish a strong online presence and achieve their goals.', tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'] },
      { name: 'Inventor', description: 'Innovative thinker with a passion for creating new solutions and exploring cutting-edge technologies. Developing creative concepts, unique product ideas, and innovative approaches to solve complex problems and drive technological advancement.', tags: ['Innovation', 'Problem Solving', 'Creative Thinking', 'Prototyping'] },
      { name: 'Quality Control Incharge', description: 'Expert in ensuring every project meets the highest standards of quality, precision and excellence. Implementing rigorous quality assurance processes, testing procedures, and performance benchmarks to deliver flawless digital products.', tags: ['QA Testing', 'Performance', 'Bug Tracking', 'Standards'] },
    ],
    proficiency: [['Design', '98%'], ['Web Development', '93%'], ['Invention', '95%'], ['Quality Control', '97%']],
    vision: [
      'As a Board of Director at TREVIORA, A. Athila Banu believes that creativity, design thinking and innovation are the foundation of successful digital products.',
      'Her vision is to strengthen TREVIORA through modern design, innovative solutions and unwavering quality standards. She is committed to delivering products that are not only visually stunning but also technically superior.',
      'With her passion for invention and dedication to quality, she helps guide TREVIORA towards continuous innovation and excellence, ensuring the company remains a leader in the technology industry.',
    ],
  },
  {
    slug: 'shahidh', route: '/board3', name: 'MOHAMED SHAHIDH.S', title: 'Board of Director', role: 'Board of Directors', image: '/images/video-editor.jpeg', note: 'Contributes to creative technology, software development and AI-driven innovation.',
    intro: 'Mohamed Shahidh S serves as a Board Member at TREVIORA, contributing to creative technology, software development and AI-driven innovation. His expertise in graphic design, video editing, website design, and software architecture helps deliver visually stunning and technically robust digital solutions.',
    stats: [['4+', 'Core Skills'], ['100%', 'Creativity'], ['100%', 'Innovation']],
    aboutTitle: 'About the Director',
    paragraphs: [
      { text: 'Mohamed Shahidh S is a creative and technical visionary at TREVIORA, bringing innovation, design thinking and engineering excellence to every project. He is passionate about creating digital experiences that are both beautiful and functional.' },
      { text: 'His expertise spans Graphic Design, Video Editing, Website Design, and Software Architecture. He combines artistic creativity with technical precision to deliver world-class digital products.', emphasis: ['Graphic Design', 'Video Editing', 'Website Design', 'Software Architecture'] },
      { text: 'He believes that innovation, collaboration and continuous learning are the keys to building future-ready technology solutions. His commitment to excellence ensures every TREVIORA project exceeds expectations.' },
    ],
    skills: [
      { name: 'Graphic Designer', description: 'Expert in creating visually compelling designs that capture attention and communicate effectively. Designing logos, brand identities, social media creatives, posters, marketing materials, and digital assets that strengthen brand presence and drive engagement.', tags: ['Photoshop', 'Illustrator', 'Figma', 'Canva'] },
      { name: 'Video Editor', description: 'Skilled in professional video editing, cinematic productions, motion graphics, promotional videos, YouTube content, advertisements and creative visual storytelling. Using industry-standard tools to deliver high-quality video content that captivates audiences.', tags: ['Premiere Pro', 'After Effects', 'Motion Graphics', 'CapCut'] },
      { name: 'Website Designer', description: 'Expert in designing modern, responsive and user-friendly websites that combine aesthetics with functionality. Creating intuitive interfaces, seamless user experiences, and visually stunning layouts that help businesses establish a strong online presence.', tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX'] },
      { name: 'Software Architect', description: 'Expert in designing scalable, secure and high-performance software systems. Creating architectural frameworks, defining technical standards, and ensuring robust system design that supports long-term growth and innovation.', tags: ['System Design', 'Architecture', 'Scalability', 'Security'] },
    ],
    proficiency: [['Graphic Design', '97%'], ['Video Editing', '95%'], ['Website Design', '94%'], ['Software Architecture', '92%']],
    vision: [
      'As a Board Member at TREVIORA, Mohamed Shahidh S believes that creativity, technology and collaboration are essential for building innovative digital products.',
      "His vision is to strengthen TREVIORA through advanced design, modern development practices and creative media production. He is committed to delivering solutions that are visually stunning, technically superior and user-centric.",
      "With his passion for design and technical excellence, he helps guide TREVIORA towards continuous innovation and growth, contributing to the company's success as a leading technology innovator.",
    ],
  },
]

const plans = [
  { name: 'Basic', price: '₹4,999', unit: '/project', homepageFeatures: ['Website Design (5 pages)', 'Mobile Responsive', 'Contact Form', 'Basic SEO', '1 Revision'], features: ['Website Design (5 pages)', 'Mobile Responsive', 'Contact Form', 'Basic SEO', '1 Revision', 'CMS Integration', 'E-commerce', 'Priority Support'] },
  { name: 'Standard', price: '₹9,999', unit: '/project', featured: true, homepageFeatures: ['Website Design (10 pages)', 'CMS Integration', 'E-commerce Ready', 'Advanced SEO', '3 Revisions', '1 Month Support'], features: ['Website Design (10 pages)', 'CMS Integration', 'E-commerce Ready', 'Advanced SEO', 'Blog Integration', '3 Revisions', '1 Month Support'] },
  { name: 'Premium', price: '₹19,999', unit: '/project', homepageFeatures: ['Full Website (Unlimited pages)', 'Custom Features', 'API Integration', 'Priority Support', 'Unlimited Revisions', '3 Months Support'], features: ['Full Website (Unlimited pages)', 'Custom Features', 'API Integration', 'Payment Gateway', 'Advanced Security', 'Unlimited Revisions', '3 Months Support', 'Priority Support'] },
]

const projectCategories = [
  ['web', 'Web Development', 'Professional Websites & Web Applications'],
  ['mobile', 'Mobile Applications', 'Android & Cross Platform Apps'],
  ['ai', 'AI Models', 'Artificial Intelligence Solutions'],
  ['iot', 'IoT Projects', 'Embedded & Smart Systems'],
  ['ppt', 'PPT Designs', 'Corporate & Presentation Designs'],
  ['video', 'Video Editing', 'Professional Video Production'],
  ['graphics', 'Graphics Design', 'Creative Branding & Visual Design'],
]

const servicePricing = [
  ['Website Development', '₹4,999', '5-10 Days'],
  ['Mobile App Development', '₹5,999', '2-4 Weeks'],
  ['AI Model Development', '₹4,999', '3-5 Weeks'],
  ['IoT Project', '₹6,999', '2-4 Weeks'],
  ['PPT Design', '₹499', '2-3 Days'],
  ['Graphics Design', '₹99', '1-2 Days'],
  ['Video Editing', '₹599', '2-5 Days'],
]

/* ── React-Safe Word-by-Word Text Reveal ── */
function WordReveal({ text, className = '' }) {
  if (!text) return null
  const words = text.split(' ')

  return (
    <span className={className}>
      {words.map((word, index) => (
        <span className="text-reveal-line" key={index}>
          <span className="text-reveal-word">
            {word}
          </span>
          {index < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </span>
  )
}

/* ── Scroll To Top On Navigation ── */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

/* ── Top Scroll Progress Bar ── */
function ScrollProgressBar() {
  const barRef = useRef(null)

  useGSAP(() => {
    if (!barRef.current) return
    gsap.fromTo(barRef.current, { scaleX: 0 }, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.2,
      },
    })
  })

  return <div className="scroll-progress-bar" ref={barRef} aria-hidden="true" />
}

/* ── Desktop Cursor Spotlight Glow ── */
function CursorSpotlight() {
  const spotlightRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const el = spotlightRef.current
    if (!el) return

    const onPointerMove = (e) => {
      gsap.to(el, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.45,
        ease: 'power2.out',
      })
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [])

  return <div ref={spotlightRef} className="cursor-spotlight" aria-hidden="true" />
}

/* ── Mobile Flipkart/Amazon Style Bottom Quick Dock ── */
function MobileBottomDock() {
  const location = useLocation()
  const dockItems = [
    {
      label: 'Home',
      path: '/',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      label: 'Services',
      path: '/services',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      label: 'Pricing',
      path: '/pricing',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <line x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
      ),
    },
    {
      label: 'Team',
      path: '/profile',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      label: 'Contact',
      path: '/contact',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
  ]

  return (
    <nav className="mobile-bottom-dock" aria-label="Mobile quick navigation">
      {dockItems.map((item) => {
        const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path))
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`dock-item ${isActive ? 'is-active' : ''}`}
            aria-label={item.label}
          >
            <span className="dock-icon">{item.icon}</span>
            <span className="dock-label">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}

/* ── Interactive Canvas Particle Constellation with Cursor Attraction ── */
function TechParticlesCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let particles = []
    const mouse = { x: -1000, y: -1000, active: false }

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const initParticles = () => {
      const count = width < 768 ? 22 : 48
      particles = []
      const colors = ['#13b9f5', '#3867dc', '#7547ff', '#8ca8ff', '#ffffff']

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.8 + 0.8,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.6 + 0.25,
          pulseSpeed: Math.random() * 0.02 + 0.008,
          pulseVal: Math.random() * Math.PI,
        })
      }
    }

    setSize()
    initParticles()

    const handleResize = () => {
      setSize()
      initParticles()
    }
    window.addEventListener('resize', handleResize)

    const handlePointerMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
    }

    const handlePointerLeave = () => {
      mouse.active = false
      mouse.x = -1000
      mouse.y = -1000
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerleave', handlePointerLeave, { passive: true })

    const render = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render)
        return
      }

      ctx.clearRect(0, 0, width, height)

      // Draw particle constellation connections
      const maxDist = width < 768 ? 90 : 125
      const maxDistSq = maxDist * maxDist

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distSq = dx * dx + dy * dy
          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq)
            const alpha = (1 - dist / maxDist) * 0.16
            ctx.strokeStyle = `rgba(19, 185, 245, ${alpha})`
            ctx.lineWidth = 0.85
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw interactive lines to pointer if nearby
      if (mouse.active && !isReducedMotion) {
        const mouseRadius = 135
        const mouseRadiusSq = mouseRadius * mouseRadius
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i]
          const mdx = mouse.x - p.x
          const mdy = mouse.y - p.y
          const mDistSq = mdx * mdx + mdy * mdy
          if (mDistSq < mouseRadiusSq) {
            const dist = Math.sqrt(mDistSq)
            const mAlpha = (1 - dist / mouseRadius) * 0.35
            ctx.strokeStyle = `rgba(19, 185, 245, ${mAlpha})`
            ctx.lineWidth = 1.1
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()

            // Gentle repulsion away from pointer
            p.x -= (mdx / dist) * 0.4
            p.y -= (mdy / dist) * 0.4
          }
        }
      }

      // Draw and move particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        if (!isReducedMotion) {
          p.x += p.vx
          p.y += p.vy
          p.pulseVal += p.pulseSpeed

          if (p.x < 0) p.x = width
          else if (p.x > width) p.x = 0
          if (p.y < 0) p.y = height
          else if (p.y > height) p.y = 0
        }

        const currentAlpha = isReducedMotion ? p.alpha : p.alpha * (0.75 + Math.sin(p.pulseVal) * 0.25)

        ctx.fillStyle = p.color
        ctx.globalAlpha = currentAlpha
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1

      if (!isReducedMotion) {
        animationFrameId = requestAnimationFrame(render)
      }
    }

    if (isReducedMotion) {
      render()
    } else {
      animationFrameId = requestAnimationFrame(render)
    }

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onMotionChange = (e) => {
      isReducedMotion = e.matches
      if (isReducedMotion) {
        cancelAnimationFrame(animationFrameId)
        render()
      } else {
        animationFrameId = requestAnimationFrame(render)
      }
    }
    motionQuery.addEventListener('change', onMotionChange)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
      motionQuery.removeEventListener('change', onMotionChange)
    }
  }, [])

  return (
    <div className="ambient-canvas-wrapper" aria-hidden="true">
      <div className="ambient-glow-layer" />
      <canvas ref={canvasRef} />
    </div>
  )
}

/* ── Route Transition Overlay ── */
function RouteTransitionOverlay() {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    const timer = window.setTimeout(() => setVisible(false), 340)
    return () => window.clearTimeout(timer)
  }, [pathname])

  return <div className={`page-transition-overlay ${visible ? 'is-visible' : ''}`} aria-hidden="true" />
}

/* ── Header ── */
function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="TREVIORA Home">
          <span className="brand-mark"><img src="/images/treviora-symbol.png" alt="" /></span>
          <span className="brand-wordmark"><strong>TREVIORA</strong><small>INDUSTRY</small></span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span />
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {navItems.map(([label, path]) => (
            <NavLink key={path} to={path} end={path === '/'}>
              {label}
            </NavLink>
          ))}
          <Link className="nav-contact" to="/contact">Let&apos;s Talk <span aria-hidden="true">↗</span></Link>
        </nav>
      </div>
    </header>
  )
}

/* ── Social Links ── */
function SocialLinks() {
  const iconPaths = {
    Instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" /></>,
    LinkedIn: <><path d="M5 9v10M5 5v.01M10 19v-6a4 4 0 0 1 8 0v6M10 10v9" /><circle cx="5" cy="5" r="1.4" fill="currentColor" stroke="none" /></>,
    YouTube: <><path d="M22 12s0-3.4-.44-5.03a2.6 2.6 0 0 0-1.83-1.83C18.1 4.7 12 4.7 12 4.7s-6.1 0-7.73.44a2.6 2.6 0 0 0-1.83 1.83C2 8.6 2 12 2 12s0 3.4.44 5.03a2.6 2.6 0 0 0 1.83 1.83c1.63.44 7.73.44 7.73.44s6.1 0 7.73-.44a2.6 2.6 0 0 0 1.83-1.83C22 15.4 22 12 22 12Z" /><path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" /></>,
    X: <path d="M5 4h4.2l9.8 16h-4.2L5 4Zm14 0-5.5 6.6M5 20l5.6-6.7" />,
    Facebook: <path d="M14 21v-8h3l.5-3H14V8.2c0-.9.3-1.5 1.6-1.5h2V4a25 25 0 0 0-2.8-.15c-2.8 0-4.7 1.7-4.7 4.8V10H7v3h3v8z" />,
  }
  return (
    <div className="footer-socials">
      {socialLinks.map(([name, url]) => (
        <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={`TREVIORA on ${name}`}>
          <svg viewBox="0 0 24 24" aria-hidden="true">{iconPaths[name]}</svg>
        </a>
      ))}
    </div>
  )
}

/* ── Footer ── */
function Footer() {
  const footerServices = [['Web Development', '/web'], ['Mobile Apps', '/mobile'], ['AI Solutions', '/ai'], ['IoT Projects', '/iot']]
  return (
    <footer className="site-footer">
      <div className="footer-social-block wrap">
        <h3>Connect With TREVIORA</h3>
        <SocialLinks />
      </div>
      <div className="footer-main wrap">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <span className="brand-mark"><img src="/images/treviora-symbol.png" alt="" /></span>
            <span className="brand-wordmark"><strong>TREVIORA</strong><small>INDUSTRY</small></span>
          </Link>
          <p>Engineering Tomorrow. Empowering Innovation through advanced digital technologies.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <div className="footer-links">
            {navItems.map(([label, path]) => <Link key={path} to={path}>{label}</Link>)}
          </div>
        </div>
        <div>
          <h3>Services</h3>
          <div className="footer-links">
            {footerServices.map(([label, path]) => <Link key={path} to={path}>{label}</Link>)}
          </div>
        </div>
        <div>
          <h3>Contact</h3>
          <div className="footer-links">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={`tel:${PHONE.replaceAll(' ', '')}`}>{PHONE}</a>
            <span>Tamil Nadu, India</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom wrap">
        <span>© {new Date().getFullYear()} TREVIORA INDUSTRY. All Rights Reserved.</span>
        <span>Innovative • Design • Intelligence • Future</span>
      </div>
    </footer>
  )
}

/* ── Reusable Eyebrow & Section Heading ── */
function Eyebrow({ children }) {
  return <p className="eyebrow"><span className="eyebrow-mark" />{children}</p>
}

function SectionHeading({ eyebrow, title, text, align = 'left' }) {
  return (
    <div className={`section-heading ${align === 'center' ? 'align-center' : ''}`} data-reveal>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>
        {typeof title === 'string' ? <WordReveal text={title} /> : title}
      </h2>
      {text && <p>{text}</p>}
    </div>
  )
}

/* ── Service Cards with 3D Tilt ── */
function ServiceCards({ limit }) {
  const list = limit ? services.slice(0, limit) : services
  return (
    <>
      <div className="mobile-swipe-hint" aria-hidden="true">
        <span>⇄ Swipe to explore services</span>
      </div>
      <div className="service-grid">
        {list.map((service, index) => (
          <Link
            className="service-card tilt-card"
            key={service.number}
            to={`/${service.slug}`}
            data-direction={index % 2 === 0 ? 'left' : 'right'}
            aria-label={`${service.title}: ${service.subtitle}`}
          >
            <div className="tilt-card-glare" />
            <div className="service-image">
              <img src={service.image} alt={service.imageAlt} loading="lazy" width="1000" height="650" />
            </div>
            <div className="service-card-content">
              <div className="service-card-top">
                <span className="service-icon">{service.icon}</span>
                <span className="service-number">{service.number}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

/* ── Team Cards with 3D Tilt ── */
function TeamCards({ limit, boardOnly = false }) {
  const list = boardOnly ? people.slice(3) : limit ? people.slice(0, limit) : people
  return (
    <>
      <div className="mobile-swipe-hint" aria-hidden="true">
        <span>⇄ Swipe to view profiles</span>
      </div>
      <div className="team-grid">
        {list.map((person, index) => (
          <Link
            className="team-card tilt-card"
            key={person.slug}
            to={person.route}
            aria-label={`View ${person.name} profile`}
          >
            <div className="tilt-card-glare" />
            <div className={`team-image team-image-${index}`}>
              <img src={person.image} alt={person.name} loading="lazy" />
              <span className="team-index">VIEW PROFILE <span aria-hidden="true">↗</span></span>
            </div>
            <div className="team-copy">
              <h3>{person.name}</h3>
              <p className="team-title">{person.title}</p>
              <p className="team-note">{person.note}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

/* ── Hero ScrollTrigger Dynamic Showcase ── */
function HeroScrollShowcase() {
  const showcaseRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Continuous auto-cycle timer so images transition even when idle
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % heroSlides.length
        const slides = gsap.utils.toArray('.hero-scroll-slide', showcaseRef.current)
        slides.forEach((slide, idx) => {
          if (idx === next) {
            gsap.to(slide, { yPercent: 0, autoAlpha: 1, scale: 1, duration: 0.85, ease: 'power2.out' })
          } else if (idx < next) {
            gsap.to(slide, { yPercent: -45, autoAlpha: 0, scale: 1.05, duration: 0.85, ease: 'power2.out' })
          } else {
            gsap.to(slide, { yPercent: 45, autoAlpha: 0, scale: 0.95, duration: 0.85, ease: 'power2.out' })
          }
        })
        return next
      })
    }, 4500)

    return () => clearInterval(timer)
  }, [])

  useGSAP(() => {
    const slides = gsap.utils.toArray('.hero-scroll-slide', showcaseRef.current)
    if (!slides.length) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion) {
      gsap.set(slides[0], { autoAlpha: 1, yPercent: 0, scale: 1 })
      if (slides.length > 1) {
        gsap.set(slides.slice(1), { autoAlpha: 0, yPercent: 0, scale: 1 })
      }
      return
    }

    // Initial state: slide 0 visible, subsequent slides positioned below
    gsap.set(slides[0], { autoAlpha: 1, yPercent: 0, scale: 1 })
    if (slides.length > 1) {
      gsap.set(slides.slice(1), { autoAlpha: 0, yPercent: 45, scale: 0.95 })
    }

    // ScrollTrigger Scrub: As user scrolls down, current image moves out and next comes down into place!
    const heroEl = document.querySelector('.hero')
    if (!heroEl) return

    const scrubTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroEl,
        start: 'top 10%',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const step = self.progress * (slides.length - 1)
          const currentActive = Math.min(Math.round(step), slides.length - 1)
          setActiveIndex(currentActive)
        },
      },
    })

    const count = slides.length
    for (let i = 0; i < count - 1; i++) {
      const current = slides[i]
      const next = slides[i + 1]
      const timePos = i * 2

      scrubTl
        .to(current, {
          yPercent: -45,
          autoAlpha: 0,
          scale: 1.05,
          ease: 'power1.inOut',
          duration: 1.2,
        }, timePos)
        .fromTo(next, {
          yPercent: 45,
          autoAlpha: 0,
          scale: 0.95,
        }, {
          yPercent: 0,
          autoAlpha: 1,
          scale: 1,
          ease: 'power2.out',
          duration: 1.2,
        }, timePos + 0.25)
    }
  }, { scope: showcaseRef })

  const goToSlide = (targetIndex) => {
    setActiveIndex(targetIndex)
    const slides = gsap.utils.toArray('.hero-scroll-slide', showcaseRef.current)
    slides.forEach((slide, idx) => {
      if (idx === targetIndex) {
        gsap.to(slide, { yPercent: 0, autoAlpha: 1, scale: 1, duration: 0.6, ease: 'power2.out' })
      } else if (idx < targetIndex) {
        gsap.to(slide, { yPercent: -45, autoAlpha: 0, scale: 1.05, duration: 0.6, ease: 'power2.out' })
      } else {
        gsap.to(slide, { yPercent: 45, autoAlpha: 0, scale: 0.95, duration: 0.6, ease: 'power2.out' })
      }
    })
  }

  return (
    <div className="hero-scroll-showcase" ref={showcaseRef}>
      {heroSlides.map((slide, index) => (
        <div
          key={slide.image}
          className={`hero-scroll-slide ${index === activeIndex ? 'is-active' : ''}`}
          data-hero-slide-index={index}
          aria-hidden={index !== activeIndex}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            fetchPriority={index === 0 ? 'high' : undefined}
            loading={index === 0 ? 'eager' : 'lazy'}
            width="1500"
            height="1100"
          />
          <div className="hero-slide-overlay">
            <span className="hero-slide-tag">{slide.tag}</span>
            <strong className="hero-slide-title">{slide.title}</strong>
          </div>
        </div>
      ))}

      <div className="hero-scroll-controls" aria-label="Hero showcase scroll controls">
        <div className="hero-scroll-cue">
          <span className="scroll-cue-dot" />
          <span>SCROLL TO MOVE IMAGES ↓</span>
        </div>
        <div className="hero-slide-dots" role="group" aria-label="Choose hero image">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              className={index === activeIndex ? 'active' : ''}
              onClick={() => goToSlide(index)}
              aria-label={`Show ${slide.title}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Enterprise Tech Ecosystem Marquee ── */
function TechEcosystemMarquee() {
  const techStack = [
    { name: 'React 19', role: 'Modern UI Engine', tag: 'Frontend' },
    { name: 'Vite 6', role: 'High-Speed Bundler', tag: 'Build' },
    { name: 'Python 3', role: 'AI & Data Processing', tag: 'Intelligence' },
    { name: 'PyTorch', role: 'Neural Deep Learning', tag: 'AI/ML' },
    { name: 'Node.js', role: 'Microservice APIs', tag: 'Backend' },
    { name: 'ESP32 IoT', role: 'Smart Connected Sensors', tag: 'Embedded' },
    { name: 'Docker', role: 'Containerized Services', tag: 'DevOps' },
    { name: 'AWS Cloud', role: 'Scalable Infrastructure', tag: 'Cloud' },
    { name: 'Figma', role: 'Design Systems', tag: 'UI/UX' },
    { name: 'Adobe Premiere', role: '4K Cinematic Motion', tag: 'Media' },
  ]

  return (
    <section className="tech-ecosystem-section" aria-label="Enterprise Technology Ecosystem">
      <div className="wrap">
        <div className="tech-ecosystem-header">
          <span className="tech-ecosystem-pill">⚡ ENTERPRISE STACK</span>
          <p>Powering Next-Generation Digital Architecture</p>
        </div>
      </div>
      <div className="tech-marquee-wrapper">
        <div className="tech-marquee-track">
          {[...techStack, ...techStack].map((tech, idx) => (
            <div className="tech-marquee-pill" key={`${tech.name}-${idx}`}>
              <span className="tech-pill-dot" />
              <strong>{tech.name}</strong>
              <small>{tech.role}</small>
              <span className="tech-pill-tag">{tech.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Mobile Amazon App Experience Component (Active on Mobile Viewports) ── */
function MobileAmazonExperience() {
  const quickCategories = [
    { name: 'Web Dev', icon: '💻', slug: 'web', color: '#13b9f5' },
    { name: 'Mobile', icon: '📱', slug: 'mobile', color: '#a855f7' },
    { name: 'AI Models', icon: '🧠', slug: 'ai', color: '#10b981' },
    { name: 'IoT Systems', icon: '🌐', slug: 'iot', color: '#f59e0b' },
    { name: 'PPT Decks', icon: '📊', slug: 'ppt', color: '#ec4899' },
    { name: 'Graphics', icon: '🎨', slug: 'graphics', color: '#8b5cf6' },
    { name: 'Video 4K', icon: '🎬', slug: 'video', color: '#ef4444' },
    { name: 'Deals Live', icon: '⚡', slug: 'pricing', color: '#eab308' },
  ]

  const promoCards = [
    {
      title: 'Flat ₹500 Off On Web & Mobile',
      subtitle: 'Complete Single-Page Architecture with GSAP & Vite',
      badge1: 'Up to 50% off',
      badge2: '100% IP Transfer',
      tag: '🔥 GREAT TECH FESTIVAL',
      link: '/pricing',
      bgGradient: 'linear-gradient(135deg, #ea580c 0%, #c2410c 50%, #9a3412 100%)',
      image: '/images/service-web-development.webp',
    },
    {
      title: 'Next-Gen AI Systems & Telemetry',
      subtitle: 'Custom Python & PyTorch Predictive Models',
      badge1: 'New Release',
      badge2: 'Real-Time API',
      tag: '🧠 SMART AUTOMATION',
      link: '/ai',
      bgGradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #075985 100%)',
      image: '/images/service-ai.webp',
    },
    {
      title: 'Executive PPT & Investor Keynotes',
      subtitle: 'High-Impact Presentation Decks & Charts',
      badge1: 'Fast 48-hr Sprint',
      badge2: 'Slide Master',
      tag: '📊 CORPORATE KEYNOTES',
      link: '/ppt',
      bgGradient: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #5b21b6 100%)',
      image: '/images/service-ppt.webp',
    },
  ]

  const [activePromo, setActivePromo] = useState(0)

  return (
    <section className="mobile-amazon-experience" aria-label="Mobile Navigation Experience">
      {/* 1. Amazon Top Quick Category Strip */}
      <div className="amazon-quick-strip">
        {quickCategories.map((cat) => (
          <Link to={`/${cat.slug}`} className="amazon-quick-item" key={cat.name}>
            <div className="amazon-quick-icon" style={{ borderColor: cat.color, background: `${cat.color}22` }}>
              <span>{cat.icon}</span>
            </div>
            <span className="amazon-quick-label">{cat.name}</span>
          </Link>
        ))}
      </div>

      {/* 2. Amazon Location / Status Bar */}
      <div className="amazon-delivery-bar">
        <span className="delivery-pin">📍</span>
        <div className="delivery-text">
          <small>Delivering Worldwide</small>
          <strong>TREVIORA Global Tech Dispatch • 24/7 Live</strong>
        </div>
        <Link to="/contact" className="amazon-prime-pill">Connect ↗</Link>
      </div>

      {/* 3. Amazon Signature Promotional Banner Rail */}
      <div className="amazon-banner-section">
        <div className="amazon-banner-rail">
          {promoCards.map((card, idx) => (
            <Link
              to={card.link}
              key={card.title}
              className={`amazon-promo-card ${idx === activePromo ? 'is-active' : ''}`}
              style={{ background: card.bgGradient }}
            >
              <div className="amazon-card-header">
                <span className="amazon-festival-tag">{card.tag}</span>
                <h3>{card.title}</h3>
                <p>{card.subtitle}</p>
              </div>

              <div className="amazon-card-badges">
                <span className="amazon-discount-circle">{card.badge1}</span>
                <span className="amazon-discount-circle secondary">{card.badge2}</span>
              </div>

              <div className="amazon-card-image-wrap">
                <img src={card.image} alt={card.title} loading="lazy" />
              </div>

              <div className="amazon-card-bank-bar">
                <span>⚡ 100% NDA & Verified Quality</span>
                <strong>Explore Offer ↗</strong>
              </div>
            </Link>
          ))}
        </div>

        <div className="amazon-carousel-dots">
          <span className="amazon-pause-indicator">⏸</span>
          {promoCards.map((_, idx) => (
            <span key={idx} className={`amazon-dot ${idx === activePromo ? 'active' : ''}`} />
          ))}
        </div>
      </div>

      {/* 4. Amazon Quick Dual Deal Tiles */}
      <div className="amazon-deal-tiles">
        <Link to="/pricing" className="amazon-tile-card">
          <span className="tile-tag">FOR YOU • SPONSORED</span>
          <h4>Academic & Starter Pack</h4>
          <p>Projects starting from ₹3,499</p>
          <span className="tile-link">View Offers ↗</span>
        </Link>
        <Link to="/contact" className="amazon-tile-card">
          <span className="tile-tag">GREAT DEALS • LIVE</span>
          <h4>Direct Founder Call</h4>
          <p>Consult CTO & MD in &lt; 2 hrs</p>
          <span className="tile-link">Call Now ↗</span>
        </Link>
      </div>
    </section>
  )
}

/* ── Home Page ── */
function Home() {
  const capabilities = [
    { label: 'Web Development', desc: 'React, Vite, Fullstack', icon: 'WEB' },
    { label: 'Mobile Apps', desc: 'Cross-Platform Android', icon: 'APP' },
    { label: 'AI Solutions', desc: 'Machine Learning Models', icon: 'AI' },
    { label: 'IoT Embedded', desc: 'Smart Connected Systems', icon: 'IOT' },
    { label: 'Design & Media', desc: 'Branding, PPT, Video', icon: 'DES' },
  ]

  return (
    <>
      <main>
        {/* Amazon Mobile Experience (Only on mobile <= 768px) */}
        <div className="wrap mobile-only-wrap">
          <MobileAmazonExperience />
        </div>

        <section className="hero">
          <div className="hero-grid wrap">
            <div className="hero-copy">
              <Eyebrow>Welcome to TREVIORA</Eyebrow>
              <h1>
                <WordReveal text="Building Tomorrow" />
                <br />
                <span className="hero-accent">
                  <WordReveal text="Through Innovation" />
                </span>
              </h1>
              <p className="hero-tagline">Innovative • Design • Intelligence • Future</p>
              <p className="hero-intro">TREVIORA creates websites, mobile apps, AI solutions, and creative designs. We turn your ideas into digital reality.</p>
              <div className="hero-actions">
                <Link className="button button-primary" to="/pricing">View Pricing <span>↗</span></Link>
                <Link className="button button-outline" to="/contact">Contact Us</Link>
              </div>
            </div>
            <div className="hero-art">
              <div className="hero-photo">
                <HeroScrollShowcase />
              </div>

              {/* Floating High-Tech Badges with Mouse Parallax */}
              <div className="hero-float-card hero-float-card-top" aria-hidden="true">
                <div className="float-icon">⚡</div>
                <div>
                  <strong>Next-Gen AI Systems</strong>
                  <small>Smart automation & models</small>
                </div>
              </div>
              <div className="hero-float-card hero-float-card-side" aria-hidden="true">
                <div className="float-icon">🚀</div>
                <div>
                  <strong>100% Innovation</strong>
                  <small>Scalable modern tech</small>
                </div>
              </div>
              <div className="hero-team-card" aria-hidden="true">
                <div className="team-avatar-stack">
                  <img src="/images/chairman.jpeg" alt="" />
                  <img src="/images/chief-executive-officer.jpeg" alt="" />
                  <img src="/images/managing-director.jpeg" alt="" />
                </div>
                <div>
                  <strong>Leadership Team</strong>
                  <small>Visionary engineering</small>
                </div>
              </div>
            </div>
          </div>

          <div className="wrap">
            <div className="hero-capabilities" aria-label="Core Capabilities">
              {capabilities.map((item) => (
                <div className="capability-item" key={item.label}>
                  <span className="capability-icon">{item.icon}</span>
                  <div className="capability-copy">
                    <strong>{item.label}</strong>
                    <small>{item.desc}</small>
                  </div>
                </div>
              ))}
            </div>

            <div className="company-metrics-bar" data-reveal aria-label="TREVIORA Impact Numbers">
              <div className="metric-box">
                <strong data-count="7" data-suffix="+">7+</strong>
                <span>Core Domains</span>
              </div>
              <div className="metric-box">
                <strong data-count="100" data-suffix="%">100%</strong>
                <span>Client Dedication</span>
              </div>
              <div className="metric-box">
                <strong data-count="6" data-suffix="+">6+</strong>
                <span>Leadership Experts</span>
              </div>
              <div className="metric-box">
                <strong data-count="100" data-suffix="%">100%</strong>
                <span>Innovation Driven</span>
              </div>
            </div>
          </div>
        </section>

        <TechEcosystemMarquee />

        <section className="services-section section-pad">
          <div className="wrap">
            <SectionHeading eyebrow="Our Services" title="What We Offer" text="Complete digital solutions engineered for your business growth" />
            <ServiceCards />
          </div>
        </section>

        <section className="values-section section-pad">
          <div className="wrap">
            <SectionHeading eyebrow="Why Choose Us" title="Why Choose TREVIORA?" text="Excellence, innovation, and value built into every digital product" />
            <div className="values-grid">
              {[
                ['💡', 'Innovation', 'Creative solutions using modern engineering and future-ready frameworks'],
                ['⚡', 'Modern Technology', 'Cutting-edge web, mobile, AI, and IoT tech stacks'],
                ['🎯', 'Quality Focus', 'Rigorous testing and high standards in every project deliverable'],
                ['💰', 'Affordable Pricing', 'Transparent, cost-effective pricing with maximum return on investment']
              ].map(([icon, title, text]) => (
                <article className="value-card" key={title}>
                  <span className="value-emoji">{icon}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pricing-section section-pad wrap">
          <SectionHeading eyebrow="Pricing & Offers" title="Affordable Plans" text="Choose the perfect plan tailored to your business scale" />
          <PricingCards homepage />
          <Offers />
          <div className="source-home-cta" data-reveal>
            <div>
              <h2>Ready to Start Your Project?</h2>
              <p>Get a free consultation and customized quote from our leadership team today.</p>
            </div>
            <Link className="button button-primary" to="/contact">Contact Us <span>↗</span></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

/* ── Page Hero with Dynamic 2-Column Visual Architecture ── */
function PageHero({
  eyebrow,
  title,
  text,
  image,
  badge = 'TREVIORA CERTIFIED',
  badgeIcon = '⚡',
  subBadge,
  actions,
}) {
  return (
    <section className={`page-hero ${image ? 'page-hero-has-image' : ''}`}>
      <div className="wrap page-hero-grid">
        <div className="page-hero-inner" data-reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1>
            {typeof title === 'string' ? <WordReveal text={title} /> : title}
          </h1>
          {text && <p>{text}</p>}
          {actions && (
            <div className="page-hero-actions">
              {actions}
            </div>
          )}
        </div>

        {image && (
          <div className="page-hero-visual" data-reveal>
            <div className="page-hero-card tilt-card">
              <div className="tilt-card-glare" />
              <div className="page-hero-image-frame">
                <img
                  src={image}
                  alt={typeof title === 'string' ? title : 'TREVIORA Technology'}
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="page-hero-badge">
                <span className="page-hero-badge-icon">{badgeIcon}</span>
                <div>
                  <strong>{badge}</strong>
                  {subBadge && <small>{subBadge}</small>}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

/* ── About Page ── */
function About() {
  const values = [
    ['💡', 'Innovation', 'We embrace creativity and future-focused thinking.'],
    ['⭐', 'Excellence', 'We aim for quality in every project we undertake.'],
    ['🤝', 'Integrity', 'We believe in honesty, trust, and responsibility.'],
    ['📚', 'Continuous Learning', 'Technology evolves, and so do we.'],
    ['🎯', 'Customer Commitment', 'Every client deserves our best effort.'],
    ['🚀', 'Future Ready', 'Building intelligent solutions for tomorrow.'],
  ]

  return (
    <>
      <PageHero
        eyebrow="Welcome to TREVIORA"
        title={<><WordReveal text="About" /><br /><span className="hero-accent"><WordReveal text="TREVIORA" /></span></>}
        text="Engineering the Future with Innovation and Technology"
        image="/images/about-studio.webp"
        badge="TREVIORA TECHNOLOGY LAB"
        badgeIcon="⚡"
        subBadge="Next-Gen Engineering & Digital Architecture"
        actions={
          <>
            <Link className="button button-primary" to="/contact">Get In Touch <span>↗</span></Link>
            <Link className="button button-outline" to="/projects">View Projects</Link>
          </>
        }
      />
      <main>
        <section className="about-story section-pad wrap">
          <div className="story-aside" data-reveal>
            <Eyebrow>Who We Are</Eyebrow>
            <div className="story-visual-card tilt-card">
              <div className="tilt-card-glare" />
              <div className="story-visual-image">
                <img
                  src="/images/about-studio.webp"
                  alt="TREVIORA Technology Studio & Innovation Lab"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>
              <div className="story-visual-caption">
                <div className="story-caption-icon">⚡</div>
                <div>
                  <strong>TREVIORA Technology Lab</strong>
                  <small>Next-Gen Engineering & Digital Architecture</small>
                </div>
              </div>
            </div>
          </div>
          <div className="story-main" data-reveal>
            <h2>Innovative Technology Company</h2>
            <p>TREVIORA is an emerging technology company driven by innovation, creativity, and engineering excellence.</p>
            <p>We specialize in Website Development, Mobile Application Development, Artificial Intelligence, IoT Solutions, Professional Presentation (PPT) Design, Creative Poster Design, and Professional Video Editing.</p>
            <p>Our vision is to transform ideas into intelligent digital solutions that create real-world impact through technology, quality, and continuous innovation.</p>
            <p>Every great company starts with a vision. TREVIORA was founded with the ambition of creating innovative technology solutions that combine creativity, intelligence, and modern engineering.</p>
            <p>As a growing startup, we are committed to continuous learning, exploring new technologies, and delivering high-quality digital experiences.</p>
          </div>
        </section>

        <section className="about-pillars section-pad">
          <div className="wrap values-grid">
            <article className="value-card" data-reveal>
              <span>01</span>
              <h3>Our Vision</h3>
              <p>To become a trusted global technology company creating intelligent digital solutions for the future.</p>
            </article>
            <article className="value-card" data-reveal>
              <span>02</span>
              <h3>Our Mission</h3>
              <p>To deliver reliable, scalable, and innovative technology solutions while maintaining creativity, quality, and customer satisfaction.</p>
            </article>
          </div>

          <div className="wrap" style={{ marginTop: '32px' }}>
            <div className="about-pillars-grid" data-reveal>
              {[
                ['🎯', 'Our Mission & Story', 'Creative Digital Engineering'],
                ['👥', 'Meet the Leadership', 'Visionary Founders & CTO'],
                ['🌐', 'Global Standards', 'Enterprise Grade Delivery'],
                ['✉️', 'Direct Founder Touch', 'Zero Intermediaries'],
              ].map(([icon, title, desc]) => (
                <div className="glass-pillar-card tilt-card" key={title}>
                  <div className="tilt-card-glare" />
                  <span className="glass-pillar-icon">{icon}</span>
                  <div>
                    <strong>{title}</strong>
                    <small>{desc}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="wrap">
            <div className="company-metrics-bar" data-reveal aria-label="TREVIORA Impact Numbers">
              <div className="metric-box">
                <strong data-count="7" data-suffix="+">7+</strong>
                <span>Core Services</span>
              </div>
              <div className="metric-box">
                <strong data-count="100" data-suffix="%">100%</strong>
                <span>Innovation & Dedication</span>
              </div>
              <div className="metric-box">
                <strong data-count="100" data-suffix="%">100%</strong>
                <span>Client Satisfaction</span>
              </div>
              <div className="metric-box">
                <strong data-count="24" data-suffix="/7">24/7</strong>
                <span>Technical Support</span>
              </div>
            </div>
          </div>
        </section>

        <section className="values-section section-pad">
          <div className="wrap">
            <SectionHeading eyebrow="Our Values" title="What Guides Us" text="The core principles that shape our culture and engineering mindset" />
            <div className="values-grid">
              {values.map(([icon, title, text]) => (
                <article className="value-card" key={title} data-reveal>
                  <span className="value-emoji">{icon}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-cta wrap">
          <h2>Let&apos;s Build Something Extraordinary Together</h2>
          <p>Innovation begins with a single idea. TREVIORA is ready to transform your vision into modern digital solutions.</p>
          <Link className="button button-primary" to="/contact">Contact Us <span>↗</span></Link>
        </section>
      </main>
      <Footer />
    </>
  )
}

/* ── Team Page ── */
function Team() {
  return (
    <>
      <PageHero
        eyebrow="Executive Leadership"
        title="Leadership Team"
        text="Meet the visionary leaders of TREVIORA who drive innovation, technology, engineering excellence and the future of intelligent digital solutions."
        image="/images/hero-collaboration.webp"
        badge="COLLABORATIVE LEADERSHIP"
        badgeIcon="👥"
        subBadge="Executive Founders & Strategic Advisory Board"
        actions={
          <>
            <Link className="button button-primary" to="/contact">Schedule Meeting <span>↗</span></Link>
            <Link className="button button-outline" to="/about">About Treviora</Link>
          </>
        }
      />
      <main>
        <section className="team-page section-pad wrap">
          <div className="profile-group">
            <div className="profile-group-heading">
              <Eyebrow>Executive Leadership</Eyebrow>
              <h2>Leadership Team</h2>
            </div>
            <TeamCards limit={3} />
          </div>
          <div className="profile-group">
            <div className="profile-group-heading">
              <Eyebrow>Board of Directors</Eyebrow>
              <h2>Board Members</h2>
            </div>
            <TeamCards boardOnly />
          </div>

          <div className="team-principles-section" data-reveal style={{ marginTop: '48px' }}>
            <SectionHeading eyebrow="Culture" title="Core Leadership Principles" text="The engineering principles that guide our technical decisions and execution" />
            <div className="team-principles-grid">
              {[
                ['01', 'Direct Founder Touch', 'Zero intermediate layers. You consult and communicate directly with active software engineers.'],
                ['02', 'Engineering Rigor', 'Every codebase is built with production standards, clean architecture, and thorough unit testing.'],
                ['03', 'Radical Transparency', 'Clear scope breakdowns, milestone-driven billing, and real-time sprint visibility.'],
                ['04', 'Future-Ready Scalability', 'We build modern architectures designed to grow with your business without tech debt.'],
              ].map(([num, title, desc]) => (
                <div className="team-principle-card tilt-card" key={num}>
                  <div className="tilt-card-glare" />
                  <span className="principle-num">{num}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

/* ── Service Directory Page ── */
function ServiceDirectory() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="What We Offer"
        text="Complete digital solutions engineered for your business success"
        image="/images/service-ai.webp"
        badge="7+ SPECIALIZED TECH DISCIPLINES"
        badgeIcon="🚀"
        subBadge="Web, Mobile, AI, IoT, & Creative Production"
        actions={
          <>
            <Link className="button button-primary" to="/pricing">Explore Pricing <span>↗</span></Link>
            <Link className="button button-outline" to="/contact">Discuss Architecture</Link>
          </>
        }
      />
      <main>
        <section className="services-page section-pad wrap">
          <SectionHeading eyebrow="Comprehensive Offerings" title="Specialized Service Categories" text="Explore our end-to-end capabilities across software, intelligent systems, hardware, and creative design" />
          <ServiceCards />

          <section className="tech-architecture-section" data-reveal>
            <SectionHeading eyebrow="Technology Stacks" title="Engineering Ecosystem" text="Modern frameworks and platforms powering TREVIORA solutions" />
            <div className="tech-architecture-grid">
              {[
                ['💻', 'Web Frontend', 'React, Vite, Next.js, Modern CSS, WebGL'],
                ['⚡', 'Backend Systems', 'Node.js, Express, REST APIs, Microservices'],
                ['🧠', 'Artificial Intelligence', 'Python, PyTorch, TensorFlow, NLP Models'],
                ['🌐', 'IoT & Embedded', 'ESP32, Arduino, MQTT, Cloud Telemetry'],
                ['🎨', 'Creative & Media', 'Figma, Adobe Suite, Premiere Pro, DaVinci'],
              ].map(([icon, title, desc]) => (
                <div className="tech-arch-card tilt-card" key={title}>
                  <div className="tilt-card-glare" />
                  <span className="tech-arch-icon">{icon}</span>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="source-home-cta" data-reveal style={{ marginTop: '70px' }}>
            <div>
              <h2>Have a Custom Project in Mind?</h2>
              <p>Consult with our leadership team for a tailored technology stack and delivery timeline.</p>
            </div>
            <Link className="button button-primary" to="/contact">Get in Touch <span>↗</span></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

/* ── Service Category Details (Rich Visual Experience) ── */
function ServiceCategory({ slug }) {
  const service = services.find((item) => item.slug === slug)
  if (!service) return <NotFound />

  const serviceSpecs = {
    web: [
      ['⚡', 'High-Speed Architecture', 'Ultra-fast Vite and React SPA rendering with sub-second page loads.'],
      ['📱', 'Responsive & Mobile First', 'Flawless responsive behavior across desktop, tablet, and mobile.'],
      ['🔒', 'Secure & Scalable', 'Modern API endpoints, clean structure, and bank-grade security.'],
      ['🚀', 'SEO & Performance', 'Optimized semantic markup, rich metadata, and performance tuning.'],
    ],
    mobile: [
      ['📱', 'Android & Cross-Platform', 'Native performance using modern cross-platform mobile frameworks.'],
      ['⚡', 'Smooth 60 FPS UX', 'Fluid gesture-driven animations and intuitive touch interactions.'],
      ['🔄', 'Offline First Sync', 'Robust local database persistence with background cloud synchronization.'],
      ['🔔', 'Push Notifications', 'Real-time alert delivery and background message processing.'],
    ],
    ai: [
      ['🧠', 'Intelligent Models', 'Deep learning and machine learning algorithms tailored to business needs.'],
      ['📊', 'Predictive Analytics', 'Transform raw enterprise telemetry into actionable predictive insights.'],
      ['💬', 'NLP & Smart Agents', 'Intelligent conversational interfaces and custom language models.'],
      ['⚙️', 'Automated Workflows', 'End-to-end cognitive automation reducing manual operational latency.'],
    ],
    iot: [
      ['🌐', 'Hardware Interfacing', 'Microcontroller integration with ESP32, STM32, and Arduino.'],
      ['📡', 'Real-Time Telemetry', 'MQTT and WebSocket streaming of sensor data to cloud dashboards.'],
      ['⚡', 'Industrial Automation', 'Reliable relay control and sensor monitoring for harsh environments.'],
      ['🔒', 'Encrypted Telemetry', 'Secure device-to-cloud payload encryption and authentication.'],
    ],
    ppt: [
      ['🎨', 'Executive Pitch Decks', 'Investor-ready presentations designed to command attention.'],
      ['📊', 'Data Visualization', 'Complex statistics turned into compelling charts and infographics.'],
      ['✨', 'Dynamic Transitions', 'Subtle motion design and modern typography hierarchy.'],
      ['💼', 'Brand Cohesion', '100% adherence to corporate visual identity and typography standards.'],
    ],
    graphics: [
      ['🎨', 'Brand Identity Systems', 'Memorable logos, color palettes, and comprehensive brand books.'],
      ['📐', 'Vector Iconography', 'Pixel-perfect digital assets for web, mobile, and print applications.'],
      ['📱', 'Social Media Creatives', 'High-converting social graphics, promotional banners, and ads.'],
      ['🚀', 'Marketing Collateral', 'Brochures, posters, business cards, and packaging mockups.'],
    ],
    video: [
      ['🎬', 'Cinematic 4K Editing', 'High-definition color grading, pacing, and multi-cam cutting.'],
      ['✨', 'Motion Graphics', 'Sleek animated title cards, kinetic typography, and visual effects.'],
      ['🔊', 'Audio Mastering', 'Crisp voice cleanup, sound design, and background score mixing.'],
      ['📱', 'Social Reels & Shorts', 'Engaging vertical formats optimized for Instagram, YouTube, and TikTok.'],
    ],
  }[slug] || [
    ['⚡', 'Custom Engineering', 'Bespoke solutions crafted to your technical requirements.'],
    ['🎯', 'Quality Standards', 'Rigorous testing and peer review on every deliverable.'],
    ['🚀', 'Rapid Turnaround', 'Efficient delivery with proactive milestone updates.'],
    ['🤝', 'Dedicated Support', 'Direct engineer communication from concept to deployment.'],
  ]

  const featureChecklist = {
    web: ['Custom React Architecture', 'Mobile Touch Optimization', 'Fast API Integration', 'Production Deployment'],
    mobile: ['Cross-Platform Codebase', 'Material & Cupertino UX', 'App Store / Play Store Prep', 'Real-time Database'],
    ai: ['Custom Model Architecture', 'Python & PyTorch Stack', 'API Inference Endpoints', 'Data Pipeline Processing'],
    iot: ['Sensor & Relay Firmware', 'MQTT Cloud Telemetry', 'Live Web Dashboard', 'Circuit Schematics'],
    ppt: ['Investor Pitch Decks', 'Corporate Keynotes', 'Infographic Design', 'Custom Slide Master'],
    graphics: ['Vector Logo Design', 'Brand Guidelines', 'Social Media Assets', 'Print Ready CMYK Files'],
    video: ['4K Video Editing', 'Color Correction', 'Sound Design & SFX', 'Motion Graphic Titles'],
  }[slug] || ['Custom Solution Design', 'Iterative Milestones', 'Dedicated Project Manager', 'Deployment Assistance']

  return (
    <>
      <PageHero
        eyebrow={`Service 0${services.findIndex(s => s.slug === slug) + 1} / ${service.title}`}
        title={service.pageTitle}
        text={service.subtitle}
        image={service.image}
        badge={`VERIFIED ${service.title.toUpperCase()} ARCHITECTURE`}
        badgeIcon={service.icon}
        subBadge="Enterprise Grade Delivery & 100% Quality Tested"
        actions={
          <>
            <Link className="button button-primary" to="/contact">Get Consultation <span>↗</span></Link>
            <Link className="button button-outline" to="/pricing">View Plans</Link>
          </>
        }
      />
      <main>
        <section className="service-detail-section wrap">
          <div className="service-detail-grid">
            <div className="service-detail-copy" data-reveal>
              <Eyebrow>Overview & Capabilities</Eyebrow>
              <h2>State-of-the-Art {service.title} Solutions</h2>
              <p>
                At TREVIORA INDUSTRY, our {service.title.toLowerCase()} service combines cutting-edge engineering, creative design, and robust architecture to deliver high-performance solutions tailored to your business objectives.
              </p>
              <p>
                Every project is crafted with modern standards, rigorous testing, and direct founder-level engineering oversight for maximum reliability.
              </p>

              <div className="service-feature-checklist">
                {featureChecklist.map((feat) => (
                  <div className="service-check-item" key={feat}>
                    <span>✓</span>
                    <strong>{feat}</strong>
                  </div>
                ))}
              </div>

              <div className="service-detail-actions">
                <Link className="button button-primary" to="/contact">Get Consultation <span>↗</span></Link>
                <Link className="button button-outline" to="/pricing">View Pricing</Link>
              </div>
            </div>

            <div className="service-detail-visual tilt-card" data-reveal>
              <div className="tilt-card-glare" />
              <div className="service-visual-frame">
                <img
                  src={service.image}
                  alt={`${service.title} - ${service.subtitle}`}
                  loading="lazy"
                  width="1000"
                  height="750"
                />
              </div>
              <div className="service-detail-badge">
                <div className="service-badge-icon">⚡</div>
                <div>
                  <strong>Enterprise Grade Deliverable</strong>
                  <small>100% Quality Tested & Supported</small>
                </div>
              </div>
            </div>
          </div>

          <div className="service-specs-block" data-reveal>
            <SectionHeading eyebrow="Specifications" title="Technical Architecture" text="Key engineering capabilities that set our solutions apart" />
            <div className="service-specs-grid">
              {serviceSpecs.map(([icon, title, desc]) => (
                <article className="service-spec-card tilt-card" key={title}>
                  <div className="tilt-card-glare" />
                  <span className="spec-icon">{icon}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="service-roadmap-section" data-reveal>
            <SectionHeading eyebrow="Methodology" title="End-to-End Delivery Roadmap" text="Our structured engineering lifecycle ensuring excellence and on-time delivery" />
            <div className="service-roadmap-grid">
              {[
                ['01', 'Architectural Blueprint', 'Detailed requirement scoping, technical schematics, and UI/UX wireframes.'],
                ['02', 'Agile Engineering Sprint', 'Rapid iterative development with weekly milestones and transparent progress.'],
                ['03', 'Rigorous Automated QA', 'Performance benchmarking, security testing, and cross-device responsiveness.'],
                ['04', 'Production Handover', 'Seamless cloud deployment, comprehensive documentation, and 30-day support.'],
              ].map(([num, stepTitle, stepDesc]) => (
                <div className="service-roadmap-step tilt-card" key={num}>
                  <div className="tilt-card-glare" />
                  <span className="roadmap-step-badge">{num}</span>
                  <h4>{stepTitle}</h4>
                  <p>{stepDesc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="source-home-cta" data-reveal style={{ marginTop: '60px' }}>
            <div>
              <h2>Ready to Start Your {service.title} Project?</h2>
              <p>Discuss your specifications directly with our leadership team for a tailored quote.</p>
            </div>
            <Link className="button button-primary" to="/contact">Contact Our Team <span>↗</span></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

/* ── Projects Page with Rich Case Studies ── */
function Projects() {
  const recentProjects = [
    {
      title: 'Enterprise AI Telemetry Engine',
      category: 'Artificial Intelligence',
      description: 'Neural pattern recognition and real-time smart analytics platform built for high-throughput data processing.',
      image: '/images/service-ai.webp',
      tags: ['Python', 'TensorFlow', 'FastAPI', 'Neural Net'],
      slug: 'ai',
    },
    {
      title: 'Next-Gen Reactive Cloud Web Portal',
      category: 'Web Development',
      description: 'Ultra-fast single page web architecture with interactive GSAP animations and sub-second load times.',
      image: '/images/service-web-development.webp',
      tags: ['React', 'Vite', 'Node.js', 'Tailwind'],
      slug: 'web',
    },
    {
      title: 'Cross-Platform Mobile Fleet Suite',
      category: 'Mobile Applications',
      description: 'Intuitive mobile application for Android with real-time telemetry sync, push alerts, and offline caching.',
      image: '/images/service-mobile-apps.webp',
      tags: ['Android', 'React Native', 'Firebase'],
      slug: 'mobile',
    },
    {
      title: 'Smart Industrial IoT Controller',
      category: 'IoT Projects',
      description: 'Embedded microcontroller architecture with sensor monitoring, cloud telemetry, and industrial relay triggers.',
      image: '/images/service-iot.webp',
      tags: ['ESP32', 'MQTT', 'Embedded C', 'Hardware'],
      slug: 'iot',
    },
    {
      title: 'Executive Pitch Deck & Keynote Master',
      category: 'Presentation Design',
      description: 'Corporate investor pitch deck, interactive financial infographics, and custom slide master design.',
      image: '/images/service-ppt.webp',
      tags: ['Pitch Deck', 'Keynote', 'Infographics', 'PowerPoint'],
      slug: 'ppt',
    },
    {
      title: 'Corporate Brand & Vector Design System',
      category: 'Graphics Design',
      description: 'Modern visual design system including vector iconography, logo identity, and promotional marketing creatives.',
      image: '/images/service-design.webp',
      tags: ['Branding', 'Figma', 'UI/UX', 'Vector'],
      slug: 'graphics',
    },
    {
      title: 'Cinematic Commercial Reel & Motion',
      category: 'Video Editing',
      description: '4K commercial video production with color grading, dynamic motion graphics, and audio mastering.',
      image: '/images/service-video.webp',
      tags: ['Premiere Pro', 'After Effects', 'Color Grade'],
      slug: 'video',
    },
  ]

  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title="TREVIORA PROJECTS"
        text="Discover our portfolio of innovative solutions, AI systems, software applications and digital creative works."
        image="/images/service-web-development.webp"
        badge="PRODUCTION CASE STUDIES"
        badgeIcon="📁"
        subBadge="High-Performance Systems Built For Scale"
        actions={
          <>
            <Link className="button button-primary" to="/contact">Start Your Project <span>↗</span></Link>
            <Link className="button button-outline" to="/pricing">Pricing Plans</Link>
          </>
        }
      />
      <main>
        <section className="projects-section section-pad wrap">
          <SectionHeading eyebrow="Categories" title="Project Categories" text="Explore our work across diverse technology domains" />
          <div className="project-category-grid">
            {projectCategories.map(([slug, title, description], index) => (
              <Link className="project-category-card tilt-card" to={`/${slug}`} key={slug}>
                <div className="tilt-card-glare" />
                <span className="project-category-index">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>

          <section className="recent-projects" data-reveal style={{ marginTop: '60px' }}>
            <SectionHeading eyebrow="Showcase" title="Featured Case Studies" text="Explore our live deployments and showcased applications across technology domains" />
            <div className="mobile-swipe-hint" aria-hidden="true">
              <span>⇄ Swipe to explore case studies</span>
            </div>
            <div className="projects-showcase-grid">
              {recentProjects.map((project) => (
                <Link to={`/${project.slug}`} className="project-showcase-card tilt-card" key={project.title}>
                  <div className="tilt-card-glare" />
                  <div className="project-card-image">
                    <img src={project.image} alt={project.title} loading="lazy" width="800" height="530" />
                  </div>
                  <div className="project-card-body">
                    <span className="project-card-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span className="project-tag" key={tag}>{tag}</span>
                      ))}
                    </div>
                    <span className="project-card-link">Explore Service ↗</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="projects-admin" data-reveal style={{ marginTop: '50px' }}>
            <div>
              <h2>🔒 Admin Access</h2>
              <p style={{ marginTop: '6px' }}>
                <a href="https://trevioraindustry.netlify.app/projects" target="_blank" rel="noreferrer">
                  Enter password to manage projects portal ↗
                </a>
              </p>
            </div>
            <div>
              <h3>Add / Edit Project</h3>
              <p>Project Name · Description · Category · Project Link · Status</p>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  )
}

/* ── Team Member Details ── */
function TeamMember({ profileSlug }) {
  const { slug } = useParams()
  const currentSlug = profileSlug || slug
  const person = people.find((member) => member.slug === currentSlug || member.route.slice(1) === currentSlug)
  if (!person) return <NotFound />

  const renderParagraph = ({ text, emphasis = [] }) => {
    if (!emphasis.length) return text
    const pattern = new RegExp(`(${emphasis.map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g')
    return text.split(pattern).map((part, index) => emphasis.includes(part) ? <strong key={index}>{part}</strong> : part)
  }

  return (
    <>
      <main className="profile-detail">
        <section className="profile-detail-hero section-pad wrap">
          <div className="profile-detail-copy" data-reveal>
            <Eyebrow>{person.role}</Eyebrow>
            <h1>
              <WordReveal text={person.name} />
            </h1>
            <h3>{person.title}</h3>
            <p>{person.intro}</p>
            <div className="profile-stats">
              {person.stats.map(([value, label]) => (
                <div key={label}>
                  <strong data-count={String(value).replace(/[^0-9.]/g, '') || '0'} data-suffix={String(value).replace(/[0-9.]/g, '') || ''}>
                    {value}
                  </strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="profile-detail-image" data-reveal>
            <img src={person.image} alt={`${person.name} - ${person.title}`} />
          </div>
        </section>

        <section className="profile-about section-pad">
          <div className="wrap">
            <SectionHeading eyebrow="About" title={person.aboutTitle} />
            <div className="profile-prose">
              {person.paragraphs.map((paragraph, index) => (
                <p key={index}>{renderParagraph(paragraph)}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="profile-skills section-pad wrap">
          <SectionHeading eyebrow="Core Skills" title="Professional Expertise" text="The skills that drive TREVIORA's engineering excellence" />
          <div className="profile-skill-grid">
            {person.skills.map((skill) => (
              <article className="profile-skill-card tilt-card" key={skill.name}>
                <div className="tilt-card-glare" />
                <span className="service-icon">{skill.name}</span>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
                <div>
                  {skill.tags.map((tag) => (
                    <span className="skill-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="profile-proficiency section-pad">
          <div className="wrap">
            <SectionHeading eyebrow="Skill Levels" title="Technical Proficiency" text="Demonstrated domain expertise and technical capabilities" />
            <div className="proficiency-grid">
              {person.proficiency.map(([skill, percent]) => (
                <div className="proficiency-item" key={skill}>
                  <div>
                    <span>{skill}</span>
                    <strong data-count={percent.replace('%', '')} data-suffix="%">{percent}</strong>
                  </div>
                  <div className="proficiency-track">
                    <span data-width={percent} style={{ width: '0%' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="profile-vision section-pad wrap">
          <SectionHeading eyebrow="Vision" title="Leadership Vision" />
          <div className="profile-prose">
            {person.vision.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="profile-cta wrap">
          <h2>Build the Future With TREVIORA</h2>
          <p>Join us in creating innovative technology solutions that make a meaningful difference.</p>
          <Link className="button button-primary" to="/contact">Contact Us <span>↗</span></Link>
        </section>
      </main>
      <Footer />
    </>
  )
}

/* ── Pricing Cards with 3D Tilt ── */
function PricingCards({ homepage = false }) {
  return (
    <div className="pricing-grid">
      {plans.map((plan) => (
        <article className={`price-card tilt-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
          <div className="tilt-card-glare" />
          {plan.featured && <span className="popular-label">{homepage ? 'POPULAR' : '⭐ MOST POPULAR'}</span>}
          <h3>{plan.name}</h3>
          <p className="plan-price">{plan.price}<span>{plan.unit}</span></p>
          {!homepage && <p className="plan-intro">One-time payment</p>}
          <ul>
            {(homepage ? plan.homepageFeatures : plan.features).map((feature) => (
              <li key={feature}><span>✓</span>{feature}</li>
            ))}
          </ul>
          <Link className={plan.featured ? 'button button-primary' : 'button button-outline'} to="/contact">
            {homepage ? 'Get Started' : `Choose ${plan.name}`}
          </Link>
        </article>
      ))}
    </div>
  )
}

/* ── Offers ── */
function Offers() {
  const offers = [
    ['🎉', '20% OFF', 'On all website development projects for new clients', 'Use Code: TREVIORA20'],
    ['🚀', 'FREE Logo', 'Free logo design with every Premium website package', 'Limited Period'],
    ['📱', 'FREE Mobile App', 'Get a basic mobile app free with every AI/IoT project', 'Bundle Deal'],
    ['🎨', '3 in 1 Combo', 'Website + Logo + Poster design at special combo price', 'Save 30%'],
  ]
  return (
    <div className="offers-section">
      <SectionHeading eyebrow="Special Offers" title="Limited Time Deals" text="Take advantage of our exclusive seasonal bundles" />
      <div className="offer-grid">
        {offers.map(([icon, title, text, badge]) => (
          <article className="offer-card tilt-card" key={title}>
            <div className="tilt-card-glare" />
            <span className="offer-emoji">{icon}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <span className="offer-badge">{badge}</span>
          </article>
        ))}
      </div>
    </div>
  )
}

/* ── Pricing Table ── */
function PricingTable() {
  return (
    <div className="service-pricing-table" data-reveal>
      <div className="pricing-table-row pricing-table-head">
        <strong>Service</strong>
        <strong>Starting Price</strong>
        <strong>Timeline</strong>
      </div>
      {servicePricing.map(([service, price, timeline]) => (
        <div className="pricing-table-row" key={service}>
          <span>{service}</span>
          <span>{price}</span>
          <span>{timeline}</span>
        </div>
      ))}
    </div>
  )
}

/* ── Pricing Page ── */
function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="💰 Pricing & Offers"
        title="Affordable Plans"
        text="Choose the perfect plan tailored to your business needs and project scope"
        image="/images/hero-collaboration.webp"
        badge="TRANSPARENT VALUE COMMITMENT"
        badgeIcon="💎"
        subBadge="100% Milestone Billing & Full IP Ownership"
        actions={
          <>
            <Link className="button button-primary" to="/contact">Get Custom Quote <span>↗</span></Link>
            <Link className="button button-outline" to="/services">All Services</Link>
          </>
        }
      />
      <main>
        <section className="pricing-section section-pad wrap">
          <PricingCards />
          <PricingTable />
          <Offers />

          <div className="pricing-guarantees-grid" data-reveal>
            {[
              ['🔒', '100% IP Ownership', 'Full source code ownership, intellectual property rights, and repository access transferred upon completion.'],
              ['📊', 'Milestone-Based Billing', 'Pay in structured installments tied strictly to verified sprint deliverables and approval.'],
              ['⚡', 'Direct Founder Review', 'Every architecture, codebase, and deliverable is directly audited by our CTO and leadership.'],
              ['🤝', '30-Day Launch Warranty', 'Complimentary post-deployment bug resolution and technical assistance to guarantee smooth operation.'],
            ].map(([icon, title, desc]) => (
              <div className="pricing-guarantee-card tilt-card" key={title}>
                <div className="tilt-card-glare" />
                <span className="guarantee-icon">{icon}</span>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>

          <div className="source-home-cta" data-reveal>
            <div>
              <h2>Need a Custom Quote?</h2>
              <p>Contact us for personalized pricing tailored to your specific technical requirements.</p>
            </div>
            <Link className="button button-primary" to="/contact">Get a Quote <span>↗</span></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

/* ── Contact Page ── */
function Contact() {
  const contacts = [
    ['Chairman (General Support)', 'Thiruvel.K', '+91 90259 10642', 'https://wa.me/919025910642'],
    ['CEO (General Support)', 'Pagolu Sai Revanth', '+91 91508 91080', 'https://wa.me/919150891080'],
    ['MD (Project Enquiries)', 'Mohamed Bouvash', '+91 74188 69487', 'https://wa.me/917418869487'],
  ]
  const [isSending, setIsSending] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  useEffect(() => {
    const loadEmailJs = () => {
      if (window.emailjs) {
        window.emailjs.init({ publicKey: 'x7fUSlpttypV_J2ts' })
        return
      }

      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
      script.async = true
      script.onload = () => {
        if (window.emailjs) {
          window.emailjs.init({ publicKey: 'x7fUSlpttypV_J2ts' })
        }
      }
      document.body.appendChild(script)
    }

    loadEmailJs()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!window.emailjs) {
      setStatusMessage('Email service is unavailable right now. Please reach us via direct phone or WhatsApp.')
      return
    }

    const form = event.currentTarget
    setIsSending(true)
    setStatusMessage('')

    window.emailjs.sendForm('service_odvg8we', 'template_2bynm4c', form)
      .then(() => {
        setStatusMessage('Thank you for contacting TREVIORA. We will get back to you shortly.')
        form.reset()
      })
      .catch(() => {
        setStatusMessage('Failed to send the message. Please contact us via phone or WhatsApp.')
      })
      .finally(() => {
        setIsSending(false)
      })
  }

  return (
    <>
      <PageHero
        eyebrow="📞 Contact TREVIORA"
        title={<><WordReveal text="Let's Build" /><br /><span className="hero-accent"><WordReveal text="The Future Together" /></span></>}
        text="Engineering Tomorrow. Empowering Innovation."
        image="/images/about-studio.webp"
        badge="GLOBAL RESPONSE CENTER"
        badgeIcon="⚡"
        subBadge="Direct Founder Consultation • < 2 Hr SLA"
        actions={
          <>
            <a className="button button-primary" href="https://wa.me/919025910642" target="_blank" rel="noreferrer">WhatsApp Direct <span>↗</span></a>
            <a className="button button-outline" href="tel:+919025910642">Call Leadership</a>
          </>
        }
      />
      <main>
        <section className="contact-section section-pad wrap original-contact">
          <div className="contact-details">
            <Eyebrow>Contact Information</Eyebrow>
            <h2>Get In Touch</h2>
            <p style={{ color: 'var(--muted)', margin: '14px 0 24px' }}>
              Have questions or want to discuss a new project? Reach out directly to our leadership team.
            </p>
            {contacts.map(([role, name, phone, whatsapp]) => (
              <article className="leader-contact" key={role}>
                <h3>{role}</h3>
                <p>{name}</p>
                <a className="contact-line" href={`tel:${phone.replaceAll(' ', '')}`}>
                  <span>Phone</span>
                  {phone}
                  <b>↗</b>
                </a>
                <a className="whatsapp-link" href={whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp Direct <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}

            <div className="contact-support-card" data-reveal>
              <div className="contact-support-inner">
                <div className="contact-support-image">
                  <img src="/images/about-studio.webp" alt="TREVIORA Technology Studio" loading="lazy" width="600" height="400" />
                </div>
                <div className="contact-support-content">
                  <h4>TREVIORA Rapid Response</h4>
                  <p>Direct communication with our engineering leadership.</p>
                  <div className="support-commitments">
                    <span>Average response time: &lt; 2 hours</span>
                    <span>Direct founder consultation</span>
                    <span>100% NDA & IP confidentiality</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-message">
            <Eyebrow>Direct Message</Eyebrow>
            <h2>Send Us a Message</h2>
            <p style={{ color: 'var(--muted)', marginTop: '8px' }}>
              Have an idea or project requirement in mind? Fill out the form below.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Full Name
                <input type="text" name="from_name" placeholder="Your Full Name" required />
              </label>
              <label>
                Email Address
                <input type="email" name="from_email" placeholder="Your Email Address" required />
              </label>
              <label>
                Subject
                <input type="text" name="subject" placeholder="Project subject..." required />
              </label>
              <label>
                Message
                <textarea name="message" rows="5" placeholder="Tell us about your project..." required />
              </label>
              <button className="button button-primary" type="submit" disabled={isSending}>
                {isSending ? 'Sending...' : 'Send Message'} <span aria-hidden="true">↗</span>
              </button>
              {statusMessage && <p className="contact-status" role="status" aria-live="polite">{statusMessage}</p>}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

/* ── Not Found ── */
function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404 Error"
        title={<><WordReveal text="A Little Off" /><br /><span className="hero-accent"><WordReveal text="The Map." /></span></>}
        text="The requested page could not be found. Let’s get you back to the home base."
        image="/images/about-studio.webp"
        badge="NAVIGATION BASE"
        badgeIcon="🧭"
        subBadge="Safe Route Recovery"
      />
      <main className="not-found wrap">
        <Link className="button button-primary" to="/">Back to Home <span>↗</span></Link>
      </main>
      <Footer />
    </>
  )
}

/* ── Main App Component with GSAP Animations ── */
export default function App() {
  const location = useLocation()
  const appRef = useRef(null)

  useGSAP(() => {
    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      // 1. Hero Staged Sequence Timeline (Coordinated Entrance)
      const heroElement = document.querySelector('.hero')
      if (heroElement) {
        const heroEyebrow = heroElement.querySelector('.eyebrow')
        const heroWords = heroElement.querySelectorAll('.hero-copy h1 .text-reveal-word')
        const heroCopyChildren = gsap.utils.toArray('.hero-tagline, .hero-intro, .hero-actions', heroElement)
        const heroArt = heroElement.querySelectorAll('.hero-art')
        const heroCaps = gsap.utils.toArray('.hero-capabilities .capability-item', heroElement)

        const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        if (heroEyebrow) {
          heroTl.fromTo(heroEyebrow, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.5 })
        }
        if (heroWords.length) {
          heroTl.fromTo(heroWords, {
            yPercent: 110,
            autoAlpha: 0,
          }, {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.045,
          }, '-=0.25')
        }
        if (heroCopyChildren.length) {
          heroTl.fromTo(heroCopyChildren, { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.12 }, '-=0.3')
        }
        if (heroArt.length) {
          heroTl.fromTo(heroArt, { autoAlpha: 0, scale: 0.94 }, { autoAlpha: 1, scale: 1, duration: 0.85 }, '-=0.55')
        }
        if (heroCaps.length) {
          heroTl.fromTo(heroCaps, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08 }, '-=0.35')
        }
      }

      // 2. Section Headings & Page Hero Text Reveals (ScrollTrigger per section)
      const sectionContainers = new Set()
      gsap.utils.toArray('.text-reveal-word', appRef.current).forEach((word) => {
        if (!word.closest('.hero')) {
          const container = word.closest('.section-heading, .page-hero-inner, .profile-detail-copy') || word.parentElement
          if (container) sectionContainers.add(container)
        }
      })

      sectionContainers.forEach((container) => {
        const words = container.querySelectorAll('.text-reveal-word')
        const subtext = container.querySelectorAll('p, h3')

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: 'top 88%',
            once: true,
          },
        })

        tl.fromTo(words, {
          yPercent: 110,
          autoAlpha: 0,
        }, {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.75,
          stagger: 0.04,
          ease: 'power3.out',
        })

        if (subtext.length) {
          tl.fromTo(subtext, {
            autoAlpha: 0,
            y: 16,
          }, {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
          }, '-=0.35')
        }
      })

      // 3. Hero Multi-Plane Dynamic ScrollTrigger Motion (Moving Hero Image System)
      if (heroElement) {
        const photoCard = heroElement.querySelector('.hero-photo')
        const floatTop = heroElement.querySelector('.hero-float-card-top')
        const floatSide = heroElement.querySelector('.hero-float-card-side')
        const teamCard = heroElement.querySelector('.hero-team-card')
        const heroCopyEl = heroElement.querySelector('.hero-copy')

        if (heroCopyEl) {
          gsap.to(heroCopyEl, {
            y: -50,
            ease: 'none',
            scrollTrigger: {
              trigger: heroElement,
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
          })
        }

        if (photoCard) {
          gsap.to(photoCard, {
            y: 95,
            scale: 1.05,
            rotateX: 6,
            rotateY: -4,
            ease: 'none',
            scrollTrigger: {
              trigger: heroElement,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.2,
            },
          })
        }

        if (floatTop) {
          gsap.to(floatTop, {
            y: -110,
            x: 28,
            rotateZ: -4,
            ease: 'none',
            scrollTrigger: {
              trigger: heroElement,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.8,
            },
          })
        }

        if (floatSide) {
          gsap.to(floatSide, {
            y: 75,
            x: -28,
            rotateZ: 3,
            ease: 'none',
            scrollTrigger: {
              trigger: heroElement,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.4,
            },
          })
        }

        if (teamCard) {
          gsap.to(teamCard, {
            y: -60,
            x: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: heroElement,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.0,
            },
          })
        }
      }

      // PageHero Visual Cards ScrollTrigger Parallax on all other pages
      gsap.utils.toArray('.page-hero-card', appRef.current).forEach((card) => {
        const parentHero = card.closest('.page-hero')
        if (parentHero) {
          gsap.to(card, {
            y: 55,
            scale: 1.04,
            ease: 'none',
            scrollTrigger: {
              trigger: parentHero,
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
          })
        }
      })

      // 4. Hero Desktop Mouse-Follow Parallax
      if (heroElement && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        const floatBadges = gsap.utils.toArray('.hero-float-card, .hero-team-card')
        const photoCard = document.querySelector('.hero-photo')

        const onHeroMove = (e) => {
          const rect = heroElement.getBoundingClientRect()
          const xPct = (e.clientX - rect.left) / rect.width - 0.5
          const yPct = (e.clientY - rect.top) / rect.height - 0.5

          gsap.to(floatBadges, {
            x: xPct * 26,
            y: yPct * 20,
            duration: 0.7,
            ease: 'power1.out',
            stagger: 0.04,
          })

          if (photoCard) {
            gsap.to(photoCard, {
              rotateY: xPct * 5,
              rotateX: -yPct * 5,
              transformPerspective: 1200,
              duration: 0.75,
              ease: 'power1.out',
            })
          }
        }

        const onHeroLeave = () => {
          gsap.to(floatBadges, { x: 0, y: 0, duration: 0.8, ease: 'power2.out' })
          if (photoCard) {
            gsap.to(photoCard, { rotateX: 0, rotateY: 0, duration: 0.8, ease: 'power2.out' })
          }
        }

        heroElement.addEventListener('pointermove', onHeroMove)
        heroElement.addEventListener('pointerleave', onHeroLeave)
      }

      // 5. Restrained Interactive 3D Card Tilt on Hover
      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        const tiltCards = gsap.utils.toArray('.tilt-card', appRef.current)
        tiltCards.forEach((card) => {
          let rect = card.getBoundingClientRect()
          const updateRect = () => { rect = card.getBoundingClientRect() }

          const onCardMove = (e) => {
            const mouseX = e.clientX - rect.left
            const mouseY = e.clientY - rect.top
            const xNorm = (mouseX / rect.width - 0.5) * 2 // -1 to 1
            const yNorm = (mouseY / rect.height - 0.5) * 2 // -1 to 1

            // Subtle restrained tilt (max 6.5 degrees)
            const rotX = -yNorm * 6.5
            const rotY = xNorm * 6.5

            gsap.to(card, {
              rotateX: rotX,
              rotateY: rotY,
              transformPerspective: 1000,
              duration: 0.25,
              ease: 'power1.out',
            })

            card.style.setProperty('--mouse-x', `${(mouseX / rect.width) * 100}%`)
            card.style.setProperty('--mouse-y', `${(mouseY / rect.height) * 100}%`)
          }

          const onCardLeave = () => {
            gsap.to(card, {
              rotateX: 0,
              rotateY: 0,
              duration: 0.55,
              ease: 'power2.out',
            })
          }

          card.addEventListener('pointerenter', updateRect)
          card.addEventListener('pointermove', onCardMove)
          card.addEventListener('pointerleave', onCardLeave)
        })
      }

      // 6. General Reveal for Content Blocks
      gsap.utils.toArray('[data-reveal]', appRef.current).forEach((el, index) => {
        gsap.fromTo(el, { autoAlpha: 0, y: 24 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          delay: (index % 3) * 0.06,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
      })

      // 7. Directional Staggered Service Cards Entrance with Image Scale
      const serviceCards = gsap.utils.toArray('.service-card', appRef.current)
      if (serviceCards.length) {
        serviceCards.forEach((card, i) => {
          const dir = card.dataset.direction === 'left' ? -25 : 25
          gsap.fromTo(card, { autoAlpha: 0, y: 35, x: dir }, {
            autoAlpha: 1,
            y: 0,
            x: 0,
            duration: 0.8,
            delay: (i % 3) * 0.1,
            ease: 'power2.out',
            scrollTrigger: { trigger: card, start: 'top 88%', once: true },
          })

          const img = card.querySelector('img')
          if (img) {
            gsap.fromTo(img, { scale: 1.15 }, {
              scale: 1,
              duration: 1.1,
              ease: 'power2.out',
              scrollTrigger: { trigger: card, start: 'top 88%', once: true },
            })
          }
        })
      }

      // 8. Team Cards — Cinematic Zoom Entrance with Image Reveal
      const teamCards = gsap.utils.toArray('.team-card', appRef.current)
      if (teamCards.length) {
        teamCards.forEach((card, i) => {
          gsap.fromTo(card, { autoAlpha: 0, y: 30, scale: 0.94 }, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: (i % 3) * 0.12,
            ease: 'power2.out',
            scrollTrigger: { trigger: card, start: 'top 88%', once: true },
          })

          const img = card.querySelector('img')
          if (img) {
            gsap.fromTo(img, { scale: 1.14 }, {
              scale: 1,
              duration: 1.1,
              ease: 'power2.out',
              scrollTrigger: { trigger: card, start: 'top 88%', once: true },
            })
          }
        })
      }

      // 9. Profile Detail, Story Visual, Service Detail & Project Image Reveals
      const visualImages = gsap.utils.toArray(
        '.profile-detail-image img, .story-visual-image img, .service-visual-frame img, .project-card-image img, .contact-support-image img',
        appRef.current
      )
      visualImages.forEach((img) => {
        gsap.fromTo(img, { scale: 1.15, autoAlpha: 0.6 }, {
          scale: 1,
          autoAlpha: 1,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: img.parentElement, start: 'top 85%', once: true },
        })
      })

      // 10. Value Cards — Sequential Tech Glow on Viewport Enter
      gsap.utils.toArray('.value-card', appRef.current).forEach((card) => {
        ScrollTrigger.create({
          trigger: card,
          start: 'top 80%',
          end: 'bottom 20%',
          onEnter: () => card.classList.add('value-card-glow'),
          onLeaveBack: () => card.classList.remove('value-card-glow'),
        })
      })

      // 10. Pricing Cards — Staggered Fan In Effect
      const priceCards = gsap.utils.toArray('.price-card', appRef.current)
      if (priceCards.length) {
        const midIndex = (priceCards.length - 1) / 2
        priceCards.forEach((card, index) => {
          const rotateStart = (index - midIndex) * 2.5
          gsap.fromTo(card, { autoAlpha: 0, y: 30, rotateZ: rotateStart, transformOrigin: 'center bottom' }, {
            autoAlpha: 1,
            y: 0,
            rotateZ: 0,
            duration: 0.75,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: { trigger: card, start: 'top 88%', once: true },
          })
        })
      }

      // 11. Interactive Number Counters
      gsap.utils.toArray('[data-count]', appRef.current).forEach((counter) => {
        const value = Number(counter.dataset.count) || 0
        const suffix = counter.dataset.suffix || ''
        const prefix = counter.dataset.prefix || ''
        gsap.fromTo(counter, { innerText: 0 }, {
          innerText: value,
          duration: 1.5,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: { trigger: counter, start: 'top 92%', once: true },
          onUpdate: function () {
            counter.textContent = `${prefix}${Math.round(this.targets()[0].innerText)}${suffix}`
          },
        })
      })

      // 12. Technical Proficiency Bars (Scrubbed Fill Synchronized with Scroll)
      gsap.utils.toArray('.proficiency-track span', appRef.current).forEach((bar) => {
        const targetWidth = bar.dataset.width || '90%'
        gsap.fromTo(bar, { width: '0%' }, {
          width: targetWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: bar.parentElement,
            start: 'top 92%',
            end: 'top 60%',
            scrub: 0.8,
          },
        })
      })

      // 13. Subtle Ambient Bobbing on Floating Badges (Only on non-clickable badges)
      const heroBadges = gsap.utils.toArray('.hero-float-card, .hero-team-card', appRef.current)
      if (heroBadges.length) {
        gsap.to(heroBadges, {
          y: -8,
          duration: 3,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          stagger: 0.4,
        })
      }

      // 14. Contact Form & Details Directional Slide
      const contactForm = gsap.utils.toArray('.contact-message', appRef.current)
      const contactDetails = gsap.utils.toArray('.contact-details', appRef.current)
      if (contactForm.length) {
        gsap.fromTo(contactForm, { autoAlpha: 0, x: 35 }, {
          autoAlpha: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: contactForm[0], start: 'top 86%', once: true },
        })
      }
      if (contactDetails.length) {
        gsap.fromTo(contactDetails, { autoAlpha: 0, x: -35 }, {
          autoAlpha: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: contactDetails[0], start: 'top 86%', once: true },
        })
      }

      // 15. Footer Smooth Entrance
      const siteFooter = gsap.utils.toArray('.site-footer', appRef.current)
      if (siteFooter.length) {
        gsap.fromTo(siteFooter, { autoAlpha: 0.7, y: 20 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: siteFooter[0], start: 'top 98%', once: true },
        })
      }

      // 16. Magnetic CTA Buttons on Desktop Fine Pointer
      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        const magneticBtns = gsap.utils.toArray('.button-primary, .nav-contact', appRef.current)
        magneticBtns.forEach((btn) => {
          const onMove = (e) => {
            const rect = btn.getBoundingClientRect()
            const x = e.clientX - (rect.left + rect.width / 2)
            const y = e.clientY - (rect.top + rect.height / 2)
            gsap.to(btn, { x: x * 0.25, y: y * 0.25, duration: 0.3, ease: 'power2.out' })
          }
          const onLeave = () => {
            gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })
          }
          btn.addEventListener('pointermove', onMove)
          btn.addEventListener('pointerleave', onLeave)
        })
      }

      ScrollTrigger.refresh()
    })

    media.add('(prefers-reduced-motion: reduce)', () => {
      // Immediate visibility without motion for reduced-motion users
      gsap.set('.text-reveal-word, .hero-copy > *, .hero-art, .service-card, .team-card, .price-card, [data-reveal], .site-footer, .contact-message, .contact-details', {
        autoAlpha: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
      })
      gsap.utils.toArray('.proficiency-track span', appRef.current).forEach((bar) => {
        bar.style.width = bar.dataset.width || '90%'
      })
      gsap.utils.toArray('[data-count]', appRef.current).forEach((counter) => {
        const value = counter.dataset.count || '0'
        const suffix = counter.dataset.suffix || ''
        const prefix = counter.dataset.prefix || ''
        counter.textContent = `${prefix}${value}${suffix}`
      })
    })

    return () => media.revert()
  }, { scope: appRef, dependencies: [location.pathname], revertOnUpdate: true })

  // Synchronize document title with active route
  useEffect(() => {
    const path = location.pathname
    const memberSlug = path.startsWith('/team/') ? path.split('/')[2] : ''
    const member = people.find((person) => person.slug === memberSlug || person.route === path)
    const service = services.find((item) => `/${item.slug}` === path)

    const pageTitle = member ? member.name : service ? service.pageTitle : ({
      '/': 'Home',
      '/about': 'About TREVIORA',
      '/services': 'Our Services',
      '/pricing': 'Pricing & Offers',
      '/profile': 'Leadership Team',
      '/team': 'Leadership Team',
      '/projects': 'TREVIORA PROJECTS',
      '/contact': 'Contact TREVIORA',
    })[path] ?? 'Page Not Found'

    document.title = `${pageTitle} | TREVIORA INDUSTRY`
  }, [location.pathname])

  return (
    <div ref={appRef} className="app-shell">
      <CursorSpotlight />
      <TechParticlesCanvas />
      <ScrollProgressBar />
      <RouteTransitionOverlay />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/profile" element={<Team />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:slug" element={<TeamMember />} />
        {people.map((person) => (
          <Route key={person.route} path={person.route} element={<TeamMember profileSlug={person.slug} />} />
        ))}
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<ServiceDirectory />} />
        {services.map((service) => (
          <Route key={service.slug} path={`/${service.slug}`} element={<ServiceCategory slug={service.slug} />} />
        ))}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <MobileBottomDock />
    </div>
  )
}
