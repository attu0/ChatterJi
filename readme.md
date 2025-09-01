# ChatterJi 🤖

A modern chat application built with React and Node.js that integrates with Ollama AI for intelligent conversations. Create multiple chat threads, manage conversation history, and enjoy a sleek ChatGPT-like interface.

## ✨ Features

- **Multi-threaded Conversations**: Create and manage multiple chat threads
- **AI-Powered Responses**: Integration with Ollama's Llama 3.1 model
- **Real-time Typing Effect**: Smooth word-by-word response rendering
- **Persistent Storage**: MongoDB integration for chat history
- **Responsive Design**: Modern, dark-themed UI
- **Markdown Support**: Code highlighting and rich text formatting
- **Thread Management**: Create, switch between, and delete conversations

## 🛠️ Tech Stack

### Frontend
- **React 19** with Vite
- **CSS3** for styling
- **React Markdown** with syntax highlighting
- **UUID** for unique thread identification
- **React Spinners** for loading states

### Backend
- **Node.js** with Express
- **MongoDB** with Mongoose
- **Ollama** for AI responses
- **CORS** enabled for cross-origin requests

## 📋 Prerequisites

Before running this project, ensure you have:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/) database
- [Ollama](https://ollama.ai/) installed with Llama 3.1 model

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd ChatterJi
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
MONGODB_URI=your_mongodb_connection_string
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```

### 4. Ollama Setup
Install and run Ollama with the Llama 3.1 model:
```bash
# Install Ollama (follow official instructions)
ollama pull llama3.1:8b
ollama serve
```

## 🏃‍♂️ Running the Application

### Start the Backend Server
```bash
cd backend
npm start
```
The server will run on `http://localhost:8080`

### Start the Frontend Development Server
```bash
cd frontend
npm run dev
```
The frontend will run on `http://localhost:5173`

## 📁 Project Structure

```
ChatterJi/
├── backend/
│   ├── models/
│   │   └── Thread.js          # MongoDB schema for chat threads
│   ├── routes/
│   │   └── chat.js            # API routes for chat operations
│   ├── utils/
│   │   └── ollama.js          # Ollama integration utility
│   ├── server.js              # Express server setup
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── App.jsx        # Main application component
│   │   │   ├── Sidebar.jsx    # Thread management sidebar
│   │   │   ├── ChatWindow.jsx # Main chat interface
│   │   │   └── Chat.jsx       # Chat message display
│   │   ├── context/
│   │   │   └── MyContext.jsx  # React context for state management
│   │   └── styles/            # CSS files
│   ├── public/
│   │   └── assets/
│   └── package.json
└── README.md
```

## 🔌 API Endpoints

### Chat Operations
- `POST /api/chat` - Send message and get AI response
- `GET /api/thread` - Get all chat threads
- `GET /api/thread/:threadId` - Get specific thread messages
- `DELETE /api/thread/:threadId` - Delete a chat thread

## 🎨 Key Components

### [`App.jsx`](frontend/src/App.jsx)
Main application component that provides context and renders the layout.

### [`Sidebar.jsx`](frontend/src/Sidebar.jsx)
- Thread management interface
- Create new conversations
- Switch between existing threads
- Delete conversations

### [`ChatWindow.jsx`](frontend/src/ChatWindow.jsx)
- Main chat interface
- Message input handling
- Loading states
- User profile dropdown

### [`Chat.jsx`](frontend/src/Chat.jsx)
- Message display with markdown support
- Typing animation effect
- Code syntax highlighting

## 🔧 Configuration

### Ollama Model
The application uses Llama 3.1:8b model. You can change this in [`backend/utils/ollama.js`](backend/utils/ollama.js):

```javascript
model: "llama3.1:8b"  // Change to your preferred model
```

### Database Schema
Thread data is stored using the [`Thread`](backend/models/Thread.js) model with the following structure:
- `threadId`: Unique identifier
- `title`: Thread title (first message)
- `messages`: Array of user/assistant messages
- `createdAt` / `updatedAt`: Timestamps

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with ❤️ by ApnaCollege
- Powered by Ollama AI
- Inspired by modern chat interfaces

---

**Made with 💙 by ApnaCollege**