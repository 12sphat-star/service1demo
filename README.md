# Service Demo - AI Concierge

A modern React website featuring an AI-powered chat concierge widget built with Gemini API integration.

## Features

- 💬 AI-powered chatbot using Google Gemini API
- 🎨 Beautiful responsive design with Tailwind CSS
- 📱 Mobile-friendly interface
- ⚡ Real-time chat functionality
- 🎯 Context-aware responses for service businesses

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Google Gemini API key

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

3. Add your Gemini API key:
```
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

### Running the Project

Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   └── AIConcierge.tsx    # Main chat widget component
├── App.tsx                 # Main application component
├── main.tsx               # Entry point
├── index.css              # Global styles
└── geminiService.ts       # Gemini API integration
```

## Configuration

Edit the `businessType` and `city` variables in [src/App.tsx](src/App.tsx#L6) to customize the chatbot for your business:

```typescript
const [businessType] = useState('Your Business Type');
const [city] = useState('Your City');
```

## Gemini API Integration

The [geminiService.ts](src/geminiService.ts) file handles all communication with the Gemini API. The AI assistant is configured with a system prompt that makes it context-aware of your business type and location.

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Google Gemini API** - AI responses
- **Vite** - Build tool

## License

MIT
