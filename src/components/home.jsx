import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Write it on your heart that every day is the best day in the year.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
];

function Home() {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="flex justify-center"></div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Your Whisper, the Pages Await
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your personal space for reflection, growth, and self-discovery.
          Capture your thoughts, feelings, and memories in a beautiful digital
          diary.
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto transform transition-all duration-500 hover:shadow-xl">
          <Sparkles className="h-6 w-6 text-purple-500 mx-auto mb-4" />
          <p className="text-lg text-gray-700 italic mb-4">"{quote.text}"</p>
          <p className="text-gray-500">— {quote.author}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            to="/signup"
            className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg text-lg font-medium"
          >
            Start Your Journey
          </Link>
          <Link
            to="/signin"
            className="px-8 py-3 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-colors shadow-md hover:shadow-lg text-lg font-medium"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
