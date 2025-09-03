# AniPortal

AniPortal is a web application that provides detailed information about anime.  
Built with **Next.js**, **MongoDB**, and **NextAuth**, it offers users a clean and modern interface to browse anime details.

---

## 🚀 Features
- 📖 Browse anime details (title, synopsis, genres, etc.)
- 🔍 Search anime by name
- ⭐ Admin authentication with NextAuth
- 💾 Data stored in MongoDB using Mongoose
- ⚡ Fast performance powered by Next.js 14

---

## 📦 Installation

1. Clone the repository:

    ```bash
     git clone https://github.com/yourusername/aniportal.git
     cd aniportal
    ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory:

   ```env
   MONGODB_URI=your-mongodb-connection-string
   NEXTAUTH_SECRET=your-secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.
