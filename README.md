# 🎉 Random Facts Timeline

This project is a fun and interactive application that displays random historical facts when you click a button. The facts are presented in a dynamic timeline where you can navigate, delete specific facts, and even restart the application! 🕰️✨

## 🚀 Features

- **🔀 Display Random Facts:**
  - A magic button 🖱️ that, when clicked, shows a random fact.
  - The fact is displayed on the main screen and added to the interactive timeline.

- **🗂️ Interactive Timeline:**
  - A marker highlights the current and previous facts.
  - Navigate through the facts with intuitive controls 🔄.

- **🛠️ Fact Management:**
  - Option to delete a specific fact 🗑️.
  - Button to reset the app, clearing all displayed facts 🔃.

## 🌟 Demo

👉 [Application Link](https://metyis-frontend-challenge.vercel.app/)

## 🛠️ Technologies Used

- **React** with **Context API** for global state management ⚛️.
- **TypeScript** for enhanced security and productivity 💻.
- **Next.js** for an optimized development and rendering experience ⚡.
- **Material UI** and **JSS** for modern and responsive styling 🎨.

## ❓ How It Works

The project uses the public API [`numbersapi.com`](http://numbersapi.com) to fetch random historical facts. However, this API does not support HTTPS requests, which requires the use of a proxy to avoid CORS (Cross-Origin Resource Sharing) issues.

### 🌐 CORS Proxy

We use the public service [CORS Anywhere](https://cors-anywhere.herokuapp.com) to bypass this limitation. Before using the application, you need to temporarily activate access to the service by following these steps:

1. Go to [https://cors-anywhere.herokuapp.com/corsdemo](https://cors-anywhere.herokuapp.com/corsdemo) 🌐.
2. Click the button **"Request temporary access to the demo server"** ✅.
3. After activating the service, you can use the application normally 🥳.

⚠️ **Warning:** This is a free public service with usage limitations. For production, it is recommended to:
- Set up your own proxy for greater reliability 🔒.
- Use an alternative API that supports HTTPS directly 🌟.

## 📖 Installation and Running Locally

1. Clone this repository:  
   ```bash
   git clone https://github.com/your-username/repository-name.git

2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm run dev
4. Access the application at: [http://localhost:3000](http://localhost:3000) 🚀.

## 💡 Future Improvements

- 🚀 Implement a private proxy for greater reliability.
- 🔍 Explore alternative APIs with HTTPS support.
- ✅ Add automated tests to ensure application quality.

---

📝 This project was developed as part of a technical test for a position at Metyis. Any questions or suggestions are welcome! 🎉
