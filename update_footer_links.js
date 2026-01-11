import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// All pages including the new terms.html itself
const pages = [
    'index.html', 'setup.html', 'creation.html', 'mvp.html',
    'defense.html', 'github.html', 'vercel.html', 'qa.html', 'ending.html', 'terms.html'
];

pages.forEach(file => {
    const filePath = path.join(__dirname, file);
    try {
        let content = fs.readFileSync(filePath, 'utf8');

        // We want to append the link to the footer paragraph.
        // Current footer: <p>© 2026 niji-blog | Let's Vibe! 🌈</p>
        // Target footer: <p>© 2026 niji-blog | Let's Vibe! 🌈 | <a href="/terms.html" style="color: inherit; text-decoration: underline;">利用規約・プライバシーポリシー</a></p>

        const footerRegex = /(<p>© 2026 niji-blog \| Let's Vibe! 🌈)(.*)(<\/p>)/i;

        if (content.match(footerRegex)) {
            // Check if link already exists to avoid duplication
            if (!content.includes('terms.html')) {
                content = content.replace(footerRegex, '$1 | <a href="/terms.html" style="color: inherit; font-size: 0.8rem;">利用規約・プライバシーポリシー</a>$3');
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Updated footer in ${file}`);
            } else {
                console.log(`Footer already updated in ${file}`);
            }
        } else {
            // If regex doesn't match exactly, try a simpler replace for the p tag content
            // Or log warning
            console.warn(`Could not find standard footer in ${file}`);
        }

    } catch (e) {
        console.error(`Error processing ${file}: ${e.message}`);
    }
});
