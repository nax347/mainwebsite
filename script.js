/**
 * truecatspr - Haupt-Script
 * Enthält: Übersetzungen (Update: Komplette Rechtstexte & Kontakt-Erweiterung), Theme-Management und Hintergrund-Animation
 */

const translations = {
    'en': {
        // Navigation
        'nav-home': 'Home', 'nav-services': 'Packages', 'nav-how': 'How it works', 'nav-about': 'About Us', 'nav-contact': 'Contact',
        'nav-imprint': 'Imprint', 'nav-privacy': 'Privacy',
        
        // Launch Card (Home Alternative)
        'launch-title': 'Launching 2027',
        'launch-sub': 'Editorial & Digital PR Agency for the Independent Music Sector.',

        // Home
        'hero-headline': 'Your music deserves more than algorithmic noise.',
        'hero-sub': 'Editorial & Digital PR, Press Relations and Strategic Music Promotion.',
        'btn-packages': 'Our Packages (from 99€)',
        'btn-submit': 'Submit Material for Review',
        'problem-title': 'The Challenge',
        'problem-text': 'Daily releases flood the market. Many artists lack the professional editorial background or the time to maintain a consistent digital presence. Standard ads are not enough to build lasting fan loyalty.',
        'solution-title': 'Our Solution',
        'solution-text': 'We translate your raw material into professional EPKs, compelling press releases, and strategic playlist pitching. Combined with visual storytelling for social media, we create a 360° PR presence.',
        'comp-1-title': 'Editorial & Text-PR',
        'comp-1-text': 'Creation of professional EPKs, engaging bios, and media-ready press releases for blogs and magazines.',
        'comp-2-title': 'Playlist & Streaming',
        'comp-2-text': 'Targeted pitching to genre-specific streaming curators and editorial playlist boards.',
        'comp-3-title': 'Online Media & Blogs',
        'comp-3-text': 'Targeted press outreach to independent music blogs, online magazines, and digital tastemakers.',
        'comp-4-title': 'Visual Storytelling',
        'comp-4-text': 'Converting your audio stems and studio takes into high-performing short-form video assets for Reels and TikTok.',
        
        // Services
        'serv-headline': 'Transparent Fixed-Price Packages',
        'serv-sub': 'End the weekly content panic. We translate your raw artistic output into a structured, compelling, and professional multi-channel campaign.',
        'pkg-1-title': 'EPK Creation & Social Foundation',
        'pkg-1-price': '99.00 €',
        'pkg-1-features': '• Professional digital Electronic Press Kit (EPK) setup based on strict editorial guidelines.\n• Complete cleanup and re-structuring of your artist bio and online footprint.\n• Essential copy-writing and asset formatting for your independent outreach.',
        'pkg-2-title': 'Single Campaign',
        'pkg-2-price': '350.00 €',
        'pkg-2-features': '• Complete pre-release content architecture mapped precisely to your release date.\n• **Asset Processing:** We slice your raw files into engaging, high-retention short-form assets for TikTok and Reels.\n• Professional press release writing and targeted distribution.\n• Full pre-loading of your social media planners for a stress-free release week.',
        'pkg-3-title': 'EP Campaign',
        'pkg-3-price': '750.00 €',
        'pkg-3-features': '• Multi-track promotion spanning 4 to 5 release phases to keep momentum high.\n• **Direct Editorial Pitching:** Intensive manual outreach to music blogs, webzines, and digital tastemakers.\n• Deep asset restructuring: Studio BTS, track-by-track insights, and multi-format video snippets.\n• Sustained social planner management and direct playlist curator pitching support.',
        'pkg-4-title': 'Album Campaign',
        'pkg-4-price': '1,500.00 €',
        'pkg-4-features': '• Full-scale rollout covering 6–8 pre-release singles plus the album drop.\n• **Maximum Substance:** Continuous stream of rich material—lyric videos, commentaries, studio BTS, and artist statements.\n• Long-term architecture ensuring your social channels remain saturated over the entire campaign cycle.\n• Heavy press outreach and maximum artistic visibility.',
        'serv-addon-title': 'The Philosophy: From Chaos to Campaign',
        'serv-addon-text': 'Most independent artists fail not because of their music, but because of the exhausting weekly content panic. \n\nHow we fix it: You drop your raw assets into our pipeline once. We process them into a professional narrative, build your schedule, and execute the PR. You keep creative control; we handle the heavy lifting.',
        
        // How it works
        'how-headline': 'How It Works',
        'how-sub': 'From your first message to a targeted campaign. Here is how we evaluate and execute your promotion.',
        'step-1-title': '1. Initial Contact',
        'step-1-text': 'You reach out to us with your material (EPK, links, or audio).',
        'step-2-title': '2. Editorial Review',
        'step-2-text': 'We review your music. If it fits, you get an offer; if not, you get constructive feedback.',
        'step-3-title': '3. Material Checklist',
        'step-3-text': 'Once agreed, you receive a checklist. We start as soon as all assets are complete.',
        'step-4-title': '4. Execution',
        'step-4-text': 'We roll out your campaign: PR, video content, and strategic pitching.',
        
        // About
        'about-headline': 'About Us',
        'about-sub': 'Independent music needs a voice, a strategy, and professional execution.',
        'mission-title': 'Our Mission',
        'mission-text': 'We bridge the gap for independent artists. We combine classical editorial PR with modern digital content-recycling to build authentic traction.',
        'team-markus-title': 'Markus Tobias Buchwalder',
        'team-markus-sub': 'Managing Director & Operations',
        'team-markus-text': 'Markus steers day-to-day campaign work, content snipping, and direct artist guidance.',
        'team-holger-title': 'Holger Gechter',
        'team-holger-sub': 'Co-Founder & Administration',
        'team-holger-text': 'Holger oversees the administrative and legal frameworks to guarantee reliability.',
        'philo-title': 'The Two-Layer Principle',
        'philo-text': 'Creative PR execution meets seasoned commercial oversight.',

        // Contact Form
        'contact-headline': 'Contact & Submission',
        'contact-sub': 'Ready to end the content panic? Send us your project details.',
        'contact-alt-email': 'Alternatively, you can send files or direct inquiries via email to:',
        'form-artist': 'Artist / Band Name *',
        'form-email': 'E-Mail Address *',
        'form-package': 'Interested Package / Inquiry Type',
        'form-links': 'Links (Drive, SoundCloud, etc.)',
        'form-msg': 'Your Message / Project Details *',
        'form-newsletter': 'I would like to receive updates from truecatspr.',
        'form-submit': 'Send Inquiry & Submit Material',

        // Legal / Imprint (Full Version)
        'imprint-headline': 'Imprint',
        'imprint-sub': 'Legal Notice / Angaben gemäß § 5 TMG',
        'imprint-content': 'Markus Tobias Buchwalder\nOsningstraße 2\n49082 Osnabrück\nGermany\n\nContact:\nE-Mail: info@truecatspr.com\n\nResponsible for content / Verantwortlich für den Inhalt (gem. § 18 Abs. 2 MStV):\nMarkus Tobias Buchwalder\n(Address as above)\n\nDisclaimer:\nDespite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.',
        
        // Privacy Policy (Full Version)
        'privacy-headline': 'Privacy Policy',
        'privacy-sub': 'Information on data protection according to GDPR (DSGVO)',
        'privacy-section-1': '1. An overview of data protection\nGeneral information: The following gives a simple overview of what happens to your personal information when you visit this website. Personal information is any data with which you could be personally identified.',
        'privacy-section-2': '2. Hosting and Content Delivery Networks (CDN)\nGitHub Pages: This website is hosted by GitHub Pages (GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA). When you visit our website, GitHub logs technical connection data (server logs), including your IP address. For details, please see GitHub\'s privacy statement.',
        'privacy-section-3': '3. General information and mandatory information\nResponsible party for data processing on this website is:\nMarkus Tobias Buchwalder\nOsningstraße 2\n49082 Osnabrück, Germany\nE-Mail: info@truecatspr.com',
        'privacy-section-4': '4. Data collection on this website\nContact Form & Formspree: Your details from the inquiry form will be stored for the purpose of processing the request. We use Formspree as a processor. Data is processed based on your consent (Art. 6 Abs. 1 lit. a GDPR).\nNewsletter (Brevo): For sending newsletters, we use Brevo. You can revoke your consent at any time via the unsubscribe link.',
        'privacy-section-5': '5. Your rights\nYou have the right at any time to request free information about your stored personal data, its origin, recipients, and the purpose of its data processing. You also have the right to request the correction or deletion of this data.',

        'footer-desc': 'Editorial & Digital PR Agency for the Independent Music Sector.',
        'footer-rights': 'All rights reserved.'
    },
    'de': {
        // Navigation
        'nav-home': 'Home', 'nav-services': 'Leistungen & Pakete', 'nav-how': "So funktioniert's", 'nav-about': 'Über uns', 'nav-contact': 'Kontakt & Einreichung',
        'nav-imprint': 'Impressum', 'nav-privacy': 'Datenschutz',

        // Launch Card (Home Alternative)
        'launch-title': 'Startet 2027',
        'launch-sub': 'Redaktionelle & digitale Musik-PR Agentur im Independent-Sektor.',

        // Home
        'hero-headline': 'Deine Musik verdient mehr als algorithmisches Rauschen.',
        'hero-sub': 'Redaktionelle & digitale PR, Pressetexte und zielgerichtete Musik-Promotion.',
        'btn-packages': 'Unsere Pakete (ab 99€)',
        'btn-submit': 'Material zur Vorprüfung einreichen',
        'problem-title': 'Die Herausforderung',
        'problem-text': 'Tägliche Releases fluten den Markt. Vielen Künstlern fehlt der professionelle redaktionelle Background oder die Zeit für eine konstante digitale Präsenz.',
        'solution-title': 'Unsere Lösung',
        'solution-text': 'Wir übersetzen dein Rohmaterial in professionelle EPKs, packende Pressetexte und strategisches Playlist-Pitching. Ergänzt durch visuelles Storytelling schaffen wir eine 360° PR-Präsenz.',
        'comp-1-title': 'Redaktion & Text-PR',
        'comp-1-text': 'Erstellung von Profi-EPKs, packenden Bios und medienfertigen Pressetexten für Blogs, Magazine und Online-Medien.',
        'comp-2-title': 'Playlist & Streaming',
        'comp-2-text': 'Gezieltes Pitching bei genre-spezifischen Kuratoren und Redaktionsteams der großen Streaming-Plattformen.',
        'comp-3-title': 'Online Medien & Blogs',
        'comp-3-text': 'Gezielte Pressearbeit für unabhängige Musikblogs, Online-Magazine und digitale Tastemaker.',
        'comp-4-title': 'Visuelles Storytelling',
        'comp-4-text': 'Wir verwandeln Audio-Stems und Studio-Szenen in performante Video-Assets für Instagram Reels, TikTok und Shorts.',

        // Leistungen
        'serv-headline': 'Transparente Festpreis-Pakete',
        'serv-sub': 'Schluss mit der wöchentlichen Content-Panik. Wir übersetzen deinen kreativen Output in eine strukturierte, packende und professionelle Kampagne.',
        'pkg-1-title': 'EPK Erstellung & Social Basis',
        'pkg-1-price': '99,00 €',
        'pkg-1-features': '• Professionelles digitales Electronic Press Kit (EPK) nach redaktionellen Richtlinien.\n• Bereinigung und Neustrukturierung deiner Artist Bio und deines digitalen Fußabdrucks.\n• Wichtiges Copywriting und Asset-Formatierung für deine eigene Pressearbeit.',
        'pkg-2-title': 'Single Kampagne',
        'pkg-2-price': '350,00 €',
        'pkg-2-features': '• Komplette Content-Architektur, exakt auf das Release-Datum deiner Single abgestimmt.\n• **Asset-Verarbeitung:** Wir schneiden deine Files in performante Short-Form-Videos für TikTok und Instagram Reels.\n• Professioneller Pressetext und gezielte Bemusterung unabhängiger Medien.\n• Volle Bestückung deiner Social-Media-Planer für eine stressfreie Release-Woche.',
        'pkg-3-title': 'EP Kampagne',
        'pkg-3-price': '750,00 €',
        'pkg-3-features': '• Multi-Track-Promotion über 4 bis 5 Release-Phasen für konstantes Momentum.\n• **Direktes Editorial Pitching:** Intensive manuelle Bemusterung von Musikblogs, Webzines und Tastemakern.\n• Tiefgehende Asset-Strukturierung: Studio-BTS, Track-by-Track-Insights und Multi-Format-Videos.\n• Kontinuierliches Planer-Management und Support beim Playlist-Pitching.',
        'pkg-4-title': 'Album Kampagne',
        'pkg-4-price': '1.500,00 €',
        'pkg-4-features': '• Umfassender Rollout für 6–8 Singles plus das komplette Album.\n• **Maximum an Substanz:** Kontinuierlicher Strom an Material – Lyric-Videos, Kommentare, Studio-Einblicke und Artist Statements.\n• Langfristige Architektur für gesättigte Social-Kanäle über den gesamten Kampagnenzyklus.\n• Intensive Pressearbeit und maximale künstlerische Sichtbarkeit.',
        'serv-addon-title': 'Die Philosophie: Vom Chaos zur Kampagne',
        'serv-addon-text': 'Die meisten Indie-Artists scheitern nicht an der Musik, sondern an der erschöpfenden wöchentlichen Content-Panik.\n\nUnsere Lösung: Du lieferst uns einmalig dein Rohmaterial. Wir verarbeiten es zu einer professionellen Story, erstellen den Zeitplan und übernehmen die PR. Du behältst die Kontrolle; wir erledigen die Arbeit.',

        // So funktioniert es
        'how-headline': 'So funktioniert es',
        'how-sub': 'Vom Erstkontakt bis zur fertigen Kampagne. So bewerten und planen wir deine Promotion.',
        'step-1-title': '1. Kontakt & Einreichung',
        'step-1-text': 'Du kontaktierst uns mit deinem Material (EPK, Links oder Audio).',
        'step-2-title': '2. Prüfung & Angebot',
        'step-2-text': 'Wir prüfen deine Musik. Passt es zusammen, erhältst du ein Angebot; falls nicht, gibt es konstruktives Feedback.',
        'step-3-title': '3. Checkliste',
        'step-3-text': 'Nach Zusage erhältst du eine Checkliste. Sobald alles da ist, legen wir los.',
        'step-4-title': '4. Umsetzung',
        'step-4-text': 'Wir rollen deine Kampagne aus: PR, Video-Content und strategisches Pitching.',

        // Über uns
        'about-headline': 'Über uns',
        'about-sub': 'Unabhängige Musik braucht eine Stimme, eine Strategie und professionelle Umsetzung.',
        'mission-title': 'Unsere Mission',
        'mission-text': 'Wir schließen die Lücke für Indie-Artists. Wir kombinieren klassische PR mit modernem Content-Recycling für echte Reichweite.',
        'team-markus-title': 'Markus Tobias Buchwalder',
        'team-markus-sub': 'Geschäftsführung & Operations',
        'team-markus-text': 'Markus leitet das Tagesgeschäft, Content-Snipping und die direkte Künstlerbetreuung.',
        'team-holger-title': 'Holger Gechter',
        'team-holger-sub': 'Mitgründer & Administration',
        'team-holger-text': 'Holger verantwortet den administrativen und rechtlichen Rahmen für absolute Zuverlässigkeit.',
        'philo-title': 'Das Zwei-Ebenen-Prinzip',
        'philo-text': 'Kreative PR-Execution trifft auf erfahrene kaufmännische Aufsicht.',

        // Kontaktformular
        'contact-headline': 'Kontakt & Einreichung',
        'contact-sub': 'Bereit für professionelle PR? Schick uns deine Projektdetails.',
        'contact-alt-email': 'Alternativ kannst du Dateien oder direkte Anfragen per E-Mail senden an:',
        'form-artist': 'Artist / Bandname *',
        'form-email': 'E-Mail Adresse *',
        'form-package': 'Interesse an Paket / Anfrage-Typ',
        'form-links': 'Links (Drive, SoundCloud, etc.)',
        'form-msg': 'Deine Nachricht / Projektdetails *',
        'form-newsletter': 'Ich möchte Updates von truecatspr erhalten.',
        'form-submit': 'Anfrage senden & Material einreichen',

        // Legal / Impressum (Vollversion)
        'imprint-headline': 'Impressum',
        'imprint-sub': 'Angaben gemäß § 5 TMG',
        'imprint-content': 'Markus Tobias Buchwalder\nOsningstraße 2\n49082 Osnabrück\nDeutschland\n\nKontakt:\nE-Mail: info@truecatspr.com\n\nVerantwortlich für den Inhalt (gem. § 18 Abs. 2 MStV):\nMarkus Tobias Buchwalder\n(Anschrift wie oben)\n\nHaftungshinweis:\nTrotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.',
        
        // Datenschutz (Vollversion)
        'privacy-headline': 'Datenschutzerklärung',
        'privacy-sub': 'Informationen zum Datenschutz gemäß DSGVO',
        'privacy-section-1': '1. Datenschutz auf einen Blick\nAllgemeine Hinweise: Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.',
        'privacy-section-2': '2. Hosting und Content Delivery Networks (CDN)\nGitHub Pages: Diese Website wird bei GitHub Pages (GitHub, Inc.) gehostet. GitHub erfasst technische Verbindungsdaten (Server-Logs), inklusive Ihrer IP-Adresse. Details finden Sie in der Datenschutzerklärung von GitHub.',
        'privacy-section-3': '3. Allgemeine Hinweise und Pflichtinformationen\nVerantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:\nMarkus Tobias Buchwalder\nOsningstraße 2\n49082 Osnabrück, Deutschland\nE-Mail: info@truecatspr.com',
        'privacy-section-4': '4. Datenerfassung auf dieser Website\nKontaktformular & Formspree: Ihre Angaben aus dem Anfrageformular werden zwecks Bearbeitung der Anfrage gespeichert. Wir nutzen Formspree als Auftragsverarbeiter. Die Verarbeitung erfolgt auf Basis Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).\nNewsletter (Brevo): Für den Versand nutzen wir Brevo. Sie können Ihre Einwilligung jederzeit über den Abmeldelink widerrufen.',
        'privacy-section-5': '5. Ihre Rechte\nSie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht auf Berichtigung oder Löschung dieser Daten.',

        'footer-desc': 'Redaktionelle & digitale Musik-PR Agentur im Independent-Sektor.',
        'footer-rights': 'Alle Rechte vorbehalten.'
    }
};

/* --- 1. SPRACH-LOGIK --- */

function changeLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    
    // Aktiven Status der Buttons umschalten
    const btnEn = document.getElementById('lang-en');
    const btnDe = document.getElementById('lang-de');
    if(btnEn) btnEn.classList.toggle('active', lang === 'en');
    if(btnDe) btnDe.classList.toggle('active', lang === 'de');
    
    // Alle Elemente mit data-i18n Attribut übersetzen
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerText = translations[lang][key];
            }
        }
    });
}

const lEn = document.getElementById('lang-en');
const lDe = document.getElementById('lang-de');
if(lEn) lEn.addEventListener('click', () => changeLanguage('en'));
if(lDe) lDe.addEventListener('click', () => changeLanguage('de'));


/* --- 2. THEME-LOGIK (DARK/LIGHT) --- */

const themeToggle = document.getElementById('theme-toggle');
const themeText = document.getElementById('theme-text');

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    if (themeText) {
        themeText.textContent = (theme === 'light') ? 'DARK MODE' : 'LIGHT MODE';
    }

    if (typeof initVisualizer === 'function') {
        initVisualizer();
    }
}

if(themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        setTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
}


/* --- 3. INITIALISIERUNG --- */

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    changeLanguage(savedLang);

    const savedTheme = localStorage.getItem('theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (systemPrefersLight) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
    
    initVisualizer();
    animate();
});


/* --- 4. VISUALIZER (CANVAS ANIMATION) --- */

const canvas = document.getElementById('bg-visualizer');
let ctx, width, height, lines = [];

function initVisualizer() {
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    
    lines = [];
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    
    const colorGold = isLight ? 'rgba(212, 150, 42, 0.15)' : 'rgba(237, 175, 66, 0.05)';
    const colorMuted = isLight ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.03)';

    for (let i = 0; i < 4; i++) {
        lines.push({
            y: height / 2,
            amplitude: 50 + Math.random() * 50,
            speed: 0.005 + Math.random() * 0.01,
            offset: Math.random() * 100,
            color: i % 2 === 0 ? colorGold : colorMuted
        });
    }
}

function animate() {
    if (!canvas) return;
    ctx.clearRect(0, 0, width, height);
    
    lines.forEach(line => {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = line.color;
        
        for (let x = 0; x < width; x += 1) {
            const y = line.y + Math.sin(x * 0.0015 + line.offset) * line.amplitude;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        
        ctx.stroke();
        line.offset += line.speed;
    });
    
    requestAnimationFrame(animate);
}

window.addEventListener('resize', initVisualizer);