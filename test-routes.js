import fs from 'node:fs'
import path from 'node:path'

const projectRoot = 'd:/projects/Treviora company offical webiste'

console.log('====================================================')
console.log('TREVIORA INDUSTRY — PRODUCTION VERIFICATION TEST SUITE')
console.log('====================================================\n')

let passedTests = 0
let failedTests = 0

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`)
    passedTests++
  } else {
    console.error(`[FAIL] ${message}`)
    failedTests++
  }
}

// TEST 1: Check public images exist
console.log('--- TEST GROUP 1: Asset Integrity ---')
const expectedImages = [
  'about-studio.webp',
  'athila-designer.jpeg',
  'brand-ambassador.jpeg',
  'chairman.jpeg',
  'chief-executive-officer.jpeg',
  'company-logo.jpeg',
  'hero-collaboration.webp',
  'managing-director.jpeg',
  'service-ai.webp',
  'service-design.webp',
  'service-iot.webp',
  'service-mobile-apps.webp',
  'service-ppt.webp',
  'service-video.webp',
  'service-web-development.webp',
  'treviora-symbol.png',
  'video-editor.jpeg',
]

const publicImagesDir = path.join(projectRoot, 'public', 'images')
expectedImages.forEach((img) => {
  const filePath = path.join(publicImagesDir, img)
  const exists = fs.existsSync(filePath)
  const stats = exists ? fs.statSync(filePath) : null
  assert(exists && stats.size > 0, `Image asset exists & valid: public/images/${img} (${stats ? stats.size : 0} bytes)`)
})

// TEST 2: Netlify SPA Redirects
console.log('\n--- TEST GROUP 2: Hosting & Routing Config ---')
const netlifyPath = path.join(projectRoot, 'netlify.toml')
assert(fs.existsSync(netlifyPath), 'netlify.toml exists')
const netlifyContent = fs.readFileSync(netlifyPath, 'utf8')
assert(netlifyContent.includes('from = "/*"') && netlifyContent.includes('to = "/index.html"') && netlifyContent.includes('status = 200'), 'SPA redirect rule /* -> /index.html (200) present in netlify.toml')

// TEST 3: Code Safety Checks (React Virtual DOM Integrity)
console.log('\n--- TEST GROUP 3: React Virtual DOM & Animation Safety ---')
const appJsx = fs.readFileSync(path.join(projectRoot, 'src', 'App.jsx'), 'utf8')
assert(!appJsx.includes('.innerHTML ='), 'CRITICAL: No destructive innerHTML DOM splitting in App.jsx')
assert(!appJsx.includes('.textContent.split'), 'No textContent string-splitting mutating React DOM')
assert(appJsx.includes('<ScrollProgressBar />'), 'Scroll progress indicator component rendered in App.jsx')
assert(appJsx.includes('<TechParticlesCanvas />'), 'TechParticlesCanvas component integrated')
assert(appJsx.includes('<WordReveal'), 'React-safe WordReveal component implemented and used')
assert(appJsx.includes('HeroScrollShowcase'), 'HeroScrollShowcase ScrollTrigger component present in JSX')
assert(appJsx.includes('story-visual-card'), 'Story visual card present in About page')
assert(appJsx.includes('company-metrics-bar'), 'Company impact metrics counter bar present in JSX')
assert(appJsx.includes('CursorSpotlight'), 'Desktop CursorSpotlight component integrated')
assert(appJsx.includes('MobileBottomDock'), 'Mobile Flipkart/Amazon style bottom dock integrated')
assert(appJsx.includes('TechEcosystemMarquee'), 'Enterprise Tech Ecosystem Marquee present in JSX')
assert(appJsx.includes('mobile-swipe-hint'), 'Mobile swipe hint cues present in JSX')
assert(appJsx.includes('pricing-guarantees-grid'), 'Pricing guarantees & SLA commitments present in JSX')
assert(appJsx.includes('service-roadmap-section'), 'Service delivery roadmap section present in JSX')
assert(appJsx.includes('team-principles-section'), 'Team leadership principles present in JSX')
assert(appJsx.includes('projects-showcase-grid'), 'Projects case studies grid present in JSX')
assert(appJsx.includes('service-detail-section'), 'Rich service category detail section present in JSX')
assert(appJsx.includes('page-hero-grid'), 'PageHero dynamic 2-column visual grid present in JSX')
assert(appJsx.includes('page-hero-card'), 'PageHero visual cards with images present in JSX')
assert(appJsx.includes('MobileAmazonExperience'), 'Amazon/Flipkart mobile app experience component present in JSX')
assert(appJsx.includes("gsap.registerPlugin(ScrollTrigger, useGSAP)"), 'GSAP plugins registered correctly')
assert(appJsx.includes("prefers-reduced-motion: reduce"), 'Accessibility: prefers-reduced-motion handled')

// TEST 4: Stylesheet Integrity
console.log('\n--- TEST GROUP 4: Stylesheet Optimization ---')
const stylesCss = fs.readFileSync(path.join(projectRoot, 'src', 'styles.css'), 'utf8')
assert(stylesCss.includes('.scroll-progress-bar'), 'CSS contains .scroll-progress-bar styling')
assert(stylesCss.includes('.ambient-canvas-wrapper'), 'CSS contains .ambient-canvas-wrapper styling')
assert(stylesCss.includes('.value-card-glow'), 'CSS contains .value-card-glow styling')
assert(stylesCss.includes('.company-metrics-bar'), 'CSS contains .company-metrics-bar styling')
assert(stylesCss.includes('.hero-scroll-showcase'), 'CSS contains .hero-scroll-showcase styling')
assert(stylesCss.includes('.story-visual-card'), 'CSS contains .story-visual-card styling')
assert(stylesCss.includes('.tilt-card-glare'), 'CSS contains .tilt-card-glare specular sheen styling')
assert(stylesCss.includes('.cursor-spotlight'), 'CSS contains .cursor-spotlight styling')
assert(stylesCss.includes('.mobile-bottom-dock'), 'CSS contains .mobile-bottom-dock styling')
assert(stylesCss.includes('.projects-showcase-grid'), 'CSS contains .projects-showcase-grid styling')
assert(stylesCss.includes('.service-detail-section'), 'CSS contains .service-detail-section styling')
assert(stylesCss.includes('.tech-ecosystem-section'), 'CSS contains .tech-ecosystem-section styling')
assert(stylesCss.includes('.service-roadmap-grid'), 'CSS contains .service-roadmap-grid styling')
assert(stylesCss.includes('.pricing-guarantees-grid'), 'CSS contains .pricing-guarantees-grid styling')
assert(stylesCss.includes('.team-principles-grid'), 'CSS contains .team-principles-grid styling')
assert(stylesCss.includes('.mobile-swipe-hint'), 'CSS contains .mobile-swipe-hint styling')
assert(stylesCss.includes('.page-hero-grid'), 'CSS contains .page-hero-grid styling')
assert(stylesCss.includes('.page-hero-card'), 'CSS contains .page-hero-card styling')
assert(stylesCss.includes('.page-hero-badge'), 'CSS contains .page-hero-badge styling')
assert(stylesCss.includes('.mobile-amazon-experience'), 'CSS contains .mobile-amazon-experience styling')
assert(stylesCss.includes('.amazon-quick-strip'), 'CSS contains .amazon-quick-strip styling')
assert(stylesCss.includes('.amazon-banner-rail'), 'CSS contains .amazon-banner-rail styling')
assert(stylesCss.includes('.amazon-deal-tiles'), 'CSS contains .amazon-deal-tiles styling')
assert(stylesCss.includes('--cyan: #13b9f5;'), 'CSS variables defined properly')

// Check brace matching in CSS
let openBraces = (stylesCss.match(/\{/g) || []).length
let closeBraces = (stylesCss.match(/\}/g) || []).length
assert(openBraces === closeBraces, `CSS braces balanced (Open: ${openBraces}, Close: ${closeBraces})`)

// TEST 5: Production Build Output
console.log('\n--- TEST GROUP 5: Production Build Verification ---')
const distIndex = path.join(projectRoot, 'dist', 'index.html')
assert(fs.existsSync(distIndex), 'dist/index.html exists')
const distAssets = fs.readdirSync(path.join(projectRoot, 'dist', 'assets'))
const jsBundle = distAssets.find(f => f.endsWith('.js'))
const cssBundle = distAssets.find(f => f.endsWith('.css'))
assert(Boolean(jsBundle), `Production JS bundle exists: ${jsBundle}`)
assert(Boolean(cssBundle), `Production CSS bundle exists: ${cssBundle}`)

// Summary
console.log('\n====================================================')
console.log(`TOTAL TESTS: ${passedTests + failedTests} | PASSED: ${passedTests} | FAILED: ${failedTests}`)
console.log('====================================================')

if (failedTests > 0) {
  process.exit(1)
}

