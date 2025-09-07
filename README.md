# 🛍️ ShopEasy - MERN E-Commerce Application

ShopEasy is a **modern full-stack e-commerce platform** built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  
It provides a seamless shopping experience with user authentication, product listing, cart management, and a responsive UI.

---

## ✨ Features

- 🔑 **User Authentication** (Signup, Login, Logout)
- 📦 **Product Management** (listing, details, stock updates)
- 🛒 **Shopping Cart** with add/remove functionality
- 🔔 **Toast Notifications** for user actions
- 📱 **Responsive Design** with mobile-friendly navbar & sidebar

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ React.js (with React Router)
- 🎨 Tailwind CSS
- 🔔 React-Toastify (for notifications)
- 🔄 Axios (API calls)
- 🎭 React Icons (icons library)

### Backend
- 🌐 Node.js + Express.js
- 🗄️ MongoDB with Mongoose
- 🔐 JWT Authentication
- 🌱 Seeder script to populate initial product data

---

## 📂 Folder Structure

```
frontend/
│── public/
│── src/
│   ├── assets/          # Images, logos
│   ├── components/      # Reusable UI components (Navbar, Loader, etc.)
│   ├── context/         # AuthContext
│   ├── pages/           # Main pages (Home, Products, Cart, Login, Signup)
│   ├── utils/           # API configuration
│   ├── App.js           # Main routes
│   └── index.js         # Entry point
│
backend/
│── models/              # Mongoose Schemas
│── routes/              # API routes
│── controllers/         # Controller logic
│── seed.js              # Seeder script for DB
│── server.js            # Express app entry
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/shopeasy.git
cd shopeasy
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

- Create a `.env` file inside `backend/`:
```env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
```

- Run Seeder Script (to insert 25+ products):
```bash
node seeder.js
node scripts/updateImages.js
```

- Start Backend:
```bash
npm run dev
```

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
```

- Start Frontend:
```bash
npm start
```

---

## 📦 Available Scripts

**Backend**
- `npm run dev` → Start backend server (with nodemon)
- `node seeder.js` → Populate DB with sample products

**Frontend**
- `npm start` → Run React app
- `npm run build` → Build for production

---



## 👨‍💻 Author
**Ayush Rai**  
🚀 Full Stack Developer | React | Node.js | MongoDB  
📧 Email: ayushrai803@gmail.com
🌐 Portfolio: [https://ayushrai-jan-2004.netlify.app/](#)  
💼 LinkedIn: [https://linkedin.com/in/ayush-rai-7109202b6](#)  
🌐 Live Link: [https://fastidious-pasca-b2c0e7.netlify.app/](#)
