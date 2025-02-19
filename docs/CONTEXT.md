# Developer Portfolio - Master Context Document

## 📌 Project Overview
This project is a **developer portfolio website** built with **Vite + React**, designed to showcase projects, blogs, skills, and social links. The website will be deployed on **Netlify** with **GitHub integration** and use **Sanity.io** as a content management system.

## 🚀 Tech Stack
- **Frontend**: Vite + React
- **Styling**: Tailwind CSS
- **Navigation**: react-router-dom
- **Animations**: Framer Motion, Tailwind utilities
- **Content Management**: Sanity.io
- **Deployment**: Netlify (GitHub Integration)
- **SEO & Performance**: React Helmet, Lazy Loading, Open Graph metadata

---

## 📂 Project Structure
```
📁 root-directory/
├── 📁 src/
│   ├── 📁 components/   # Reusable UI components
│   ├── 📁 pages/        # Page components (Home, Projects, Blog, etc.)
│   ├── 📁 hooks/        # Custom hooks (if needed)
│   ├── 📁 assets/       # Images, fonts, etc.
│   ├── 📁 styles/       # Tailwind & global styles
│   ├── App.jsx         # Main React component
│   ├── main.jsx        # Entry point
├── 📁 sanity/          # Sanity configuration & schemas
├── 📁 public/          # Static assets
├── .env               # Environment variables (Sanity API keys)
├── package.json       # Dependencies & scripts
└── README.md          # Project documentation
```

---

## 📜 Features & Implementation

### ✅ 1. Home Page (`/`)
- **Hero Section** with an intro, call-to-action, and social links.
- **Featured Projects** section showcasing key projects.
- **Smooth animations** using Framer Motion.
- **Dark mode support** (optional, using Tailwind `dark:` classes).

### ✅ 2. Projects Page (`/projects`)
- Dynamic list of projects fetched from **Sanity.io**.
- Each project card includes title, description, tech stack, and links.
- **Filtering by category** (optional feature).
- Individual project details page (`/projects/:id`).

### ✅ 3. Blog Page (`/blog`)
- List of blog posts fetched from **Sanity.io**.
- **Slug-based dynamic routing** for blog posts (`/blog/:slug`).
- **Markdown support** for rich content.
- **SEO-friendly meta tags** for each post.

### ✅ 4. About Page (`/about`)
- Developer bio and experience.
- Skills & technologies used.
- Social media links.

### ✅ 5. Contact Page (`/contact`)
- **Contact form** with form submission handling (Netlify Forms or third-party service like Formspree/Supabase).
- Email & social media links.
- Responsive design for mobile.

---

## 🎨 Styling & Animations
- Tailwind CSS for utility-first styling.
- Framer Motion for **page transitions, fade-ins, hover effects, and button interactions**.
- Responsive & accessible design.

---

## 📡 CMS - Sanity.io Setup
### **Schemas**
#### 1️⃣ Project Schema (`project.js`)
```javascript
export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'image', type: 'image', title: 'Project Image' },
    { name: 'tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'github', type: 'url', title: 'GitHub Link' },
    { name: 'live', type: 'url', title: 'Live Demo' }
  ]
};
```

#### 2️⃣ Blog Schema (`blog.js`)
```javascript
export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'content', type: 'array', of: [{ type: 'block' }] },
    { name: 'publishedAt', type: 'datetime', title: 'Published At' }
  ]
};
```

---

## 📈 SEO & Performance
- **React Helmet** for managing meta tags dynamically.
- **Lazy loading** images for improved performance.
- **Open Graph meta tags** for social media preview.

---

## 🚀 Deployment & CI/CD
- **Netlify** for hosting with GitHub integration.
- **GitHub Actions** (optional) for automated deployments.
- **Google Analytics** for tracking visitor activity.

---

## 🛠️ Next Steps
1. **Set up Vite + React + TailwindCSS** ✅
2. **Implement routing with react-router-dom** ✅
3. **Design UI components & layouts** ✅
4. **Integrate Sanity.io & fetch content** ⏳
5. **Implement SEO & performance optimizations** ⏳
6. **Deploy on Netlify & test CI/CD** ⏳

---

## 📌 Notes & Considerations
- Dark mode can be toggled using Tailwind’s `dark:` classes.
- Image optimizations can be handled via **Lazy Loading**.
- Open Graph tags should be dynamically generated per page.
- Blog pages should have **structured data** for better SEO ranking.

---

## 📧 Contact & Contributions
If you have suggestions or improvements, feel free to open an issue or a pull request.

📍 **Author**: Abdurrahman Rabiu
🌐 **Website**: [Your Portfolio URL]
🐙 **GitHub**: [Your GitHub URL]
🔗 **LinkedIn**: [Your LinkedIn URL]

