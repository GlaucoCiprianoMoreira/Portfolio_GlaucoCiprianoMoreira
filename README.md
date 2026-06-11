# Portfolio — Glauco Cipriano Moreira

Visual portfolio inspired by a physical folder / Windows Explorer file browser.

## ✨ Tech Stack

- **React 18** + **Vite**
- **TailwindCSS 3**
- **Framer Motion** — smooth tab transitions and modal animations
- **React Icons** — Feather icon set

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

---

## 📁 Project Structure

```
src/
├── App.jsx                     ← Root: tab state + Folder shell
├── main.jsx                    ← React entry point
├── index.css                   ← Tailwind base + global styles
│
├── components/
│   ├── Folder/                 ← Yellow folder shell + content area
│   ├── Tabs/                   ← Tab marker row at the top
│   ├── ProjectCard/            ← Single project card
│   ├── ExperienceCard/         ← Single experience entry
│   ├── CertificateCard/        ← Clickable certificate card
│   ├── SkillBlock/             ← Skill category block (About page)
│   └── ContactFooter/          ← Dark bar with contact links
│
├── pages/
│   ├── About.jsx               ← Hero + skills + soft skills
│   ├── Projects.jsx            ← Projects grid
│   ├── Experiences.jsx         ← Experiences list
│   ├── Certificates.jsx        ← Certificate grid + PDF modal
│   └── CV.jsx                  ← Minimal CV download page
│
└── data/
    ├── profile.js              ← Your personal info, links, skills
    ├── projects.js             ← Projects list
    ├── experiences.js          ← Experiences list
    └── certificates.js         ← Certificates list
```

---

## ✏️ How to Customize

### Update personal info
Edit `src/data/profile.js` — name, university, specialties, contact links, CV path.

### Add a project
Open `src/data/projects.js` and add a new object to the array:

```js
{
  id: 'my-new-project',
  emoji: '🚀',
  image: null,            // or '/assets/images/my-project.png'
  title: 'My New Project',
  description: 'Short description here.',
  stack: ['Python', 'FastAPI'],
  github: 'https://github.com/you/repo',
  demo: null,
}
```

### Add an experience
Edit `src/data/experiences.js` similarly.

### Add a certificate
Edit `src/data/certificates.js`. To enable PDF preview, place the file at
`public/assets/certificates/my-cert.pdf` and set `pdfPath: '/assets/certificates/my-cert.pdf'`.

### Add a CV
Place your PDF at `public/assets/cv/curriculo-glauco.pdf` (matches the default in `profile.js`).

---

## 🗂 Adding a new Tab

1. Create a new page in `src/pages/MyPage.jsx`
2. Add an entry to the `TABS` array in `src/App.jsx`:

```js
{ id: 'my-page', icon: '🌟', label: 'My Page', Component: MyPage }
```

That's it — the tab and routing are handled automatically.

---

## 🎨 Color Reference

| Name            | Value     | Usage                        |
|-----------------|-----------|------------------------------|
| `folder-bg`     | `#1E1E1E` | Page background              |
| `folder-black`  | `#121212` | Header, badges, footer       |
| `folder-yellow` | `#F4C542` | Folder body, active tab      |
| `folder-yellowDark` | `#D9AA1E` | Skill titles, links      |
| `folder-border` | `#B8901A` | Folder border, tab border    |
| `folder-content`| `#F5F5F5` | White content area           |
