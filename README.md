# REDWANE AIT OUKAZZAMANE - Portfolio Website

A modern, responsive portfolio website showcasing my projects and professional experience as a Fullstack Engineer.

![Portfolio Preview](/public/projects/preview.png)

## 🚀 Live Demo

Visit [oukazzamane.com](https://oukazzamane.com) to see the live website.

## ✨ Features

- Modern and responsive design
- Dark/Light mode
- Animated sections
- Project showcase
- Detailed work experience
- Skills and technologies
- Education and certifications
- Languages proficiency
- Contact information
- Interactive contact form

## 🛠️ Built With

- **Frontend**: Next.js, React, TypeScript, TailwindCSS
- **Styling**: TailwindCSS, Framer Motion for animations
- **Email**: EmailJS for contact form
- **Deployment**: Vercel

## 📁 Project Structure

```
/
├── public/           # Static assets
│   ├── lotties/      # Animation files
│   ├── projects/     # Project images
│   └── ...
├── src/
│   ├── app/          # App router
│   ├── components/   # UI components
│   ├── containers/   # Page sections
│   ├── lib/
│   │   ├── content/  # Portfolio content
│   │   ├── hooks/    # Custom hooks
│   │   ├── types/    # TypeScript types
│   │   └── utils/    # Utility functions
│   └── styles/       # Global styles
└── ...
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/REDWANE-AIT-OUKAZZAMANE/portfolio-website-main
   cd portfolio-website-main
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Customization

To customize this portfolio with your own information:

1. Update the content files in `src/lib/content/`
2. Replace project images in `public/projects/`
3. Update profile image at `public/Me.png`
4. Customize colors and styling in `tailwind.config.js`

## 📬 Setting Up the Contact Form

The portfolio includes a contact form that uses EmailJS to send emails directly from the client side:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `from_name` (sender's name)
   - `reply_to` (sender's email)
   - `message` (message content)
4. Update the EmailJS configuration in `src/lib/utils/emailjs-init.ts` with your:
   - `SERVICE_ID` - Your EmailJS service ID
   - `TEMPLATE_ID` - Your EmailJS template ID
   - `PUBLIC_KEY` - Your EmailJS public key

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Contact

Feel free to reach out if you have any questions or just want to connect!

- Email: redwane.aitoukazzamane@gmail.com
- LinkedIn: [Redwane Ait Oukazzamane](https://www.linkedin.com/in/redwane-ait-oukazzamane-b293a526a/)
- GitHub: [REDWANE-AIT-OUKAZZAMANE](https://github.com/REDWANE-AIT-OUKAZZAMANE)
- Website: [oukazzamane.com](https://oukazzamane.com)

---

Designed & Built by REDWANE AIT OUKAZZAMANE 
