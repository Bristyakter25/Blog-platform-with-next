'use client';
import { useState } from 'react';

export default function AskAI() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!prompt.trim()) return; // prevent empty requests
    setLoading(true);
    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResponse(data.reply || data.error);
    } catch (err) {
      setResponse('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mb-36 mt-10 shadow-sky-300 mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
        Ask AI Anything
      </h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type your question or prompt here..."
        rows={5}
        className="w-full rounded-lg border border-gray-300 p-4 text-gray-800 text-lg resize-y
                   focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-600
                   transition duration-300 ease-in-out shadow-sm"
      />
      <button
        onClick={handleAsk}
        disabled={loading || !prompt.trim()}
        className={`mt-5 w-full py-3 rounded-lg font-semibold text-white
          transition-colors duration-300
          ${loading || !prompt.trim() 
            ? 'bg-blue-300 cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg'}`}
      >
        {loading ? 'Thinking...' : 'Ask AI'}
      </button>

      {response && (
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-inner border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">AI Response:</h3>
          <pre className="whitespace-pre-wrap font-mono text-gray-900 text-lg leading-relaxed">
            {response}
          </pre>
        </div>
      )}
    </div>
  );
}
