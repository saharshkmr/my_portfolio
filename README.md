# React Client-Server Application

A modern web application built with React for the frontend and Node.js/Express for the backend.

## Project Structure

```
my_portfolio/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/               # React source code
│   └── package.json       # Frontend dependencies
└── server/                # Node.js/Express backend
    ├── index.js           # Server entry point
    └── package.json       # Backend dependencies
```

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or yarn

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd my_portfolio
```

### 2. Install Dependencies

#### Client
```bash
cd client
npm install
```

#### Server
```bash
cd ../server
npm install
```

### 3. Start the Application

#### Start the server (in a new terminal)
```bash
cd server
npm start
```

The server will start on http://localhost:5000

#### Start the React development server (in a new terminal)
```bash
cd client
npm start
```

The React app will open in your default browser at http://localhost:3000

## Available Scripts

### Client
- `npm start` - Start the development server
- `npm test` - Run tests
- `npm run build` - Build for production
- `npm run eject` - Eject from Create React App

### Server
- `npm start` - Start the development server
- `node index.js` - Alternative way to start the server

## Environment Variables

Create a `.env` file in the root directory to set environment variables.

Example:
```
PORT=5000
NODE_ENV=development
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details