import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Sparkles,
  Save,
  ArrowLeft,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useUser } from "./context";

function DiaryEntry() {
  const [entry, setEntry] = useState({
    title: "",
    salutation: "",
    content: "",
    mood: "",
    date: new Date().toISOString().split("T")[0],
  });

  const { profile } = useUser();

  const [isPrivate, setIsPrivate] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const axiosPostData = async () => {
    const payload = {
      title: entry.title,
      salutation: entry.salutation,
      content: entry.content,
      mood: entry.mood,
      date: new Date().toISOString().split("T")[0],
      email: profile.email,
      isPrivate,
    };
    try {
      const response = await Axios.post(
        "http://localhost:3000/user/diary/",
        payload
      );
      if (response.status === 200) {
        setShowSuccess(true);
        setErrorMessage("");
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (error) {
      setErrorMessage("Oops! Something went wrong. Please try again. 😢");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  const handleContentChange = (e) => {
    const content = e.target.value;
    setCharCount(content.length);
    setEntry((prev) => ({ ...prev, content }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosPostData();
  };

  const moods = [
    "Joyful",
    "Peaceful",
    "Grateful",
    "Inspired",
    "Reflective",
    "Calm",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <button className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <Link
              to="/diary"
              className="font-medium text-purple-600 hover:text-purple-500"
            >
              Back To Entries
            </Link>
          </button>
          <div className="flex items-center gap-2 text-gray-500">
            <Clock className="w-4 h-4" />
            <span>{new Date().toLocaleTimeString()}</span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-purple-500" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              New Tales
            </h1>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-purple-500" />
                <label htmlFor="date" className="text-gray-700 font-medium">
                  Date
                </label>
              </div>
              <input
                type="date"
                id="date"
                value={entry.date}
                onChange={(e) =>
                  setEntry((prev) => ({ ...prev, date: e.target.value }))
                }
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-purple-400 focus:ring focus:ring-purple-100 transition-all duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="title"
                className="block text-gray-700 font-medium mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={entry.title}
                onChange={(e) =>
                  setEntry((prev) => ({ ...prev, title: e.target.value }))
                }
                placeholder="Give your entry a meaningful title..."
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-purple-400 focus:ring focus:ring-purple-100 transition-all duration-200"
              />
            </div>
            <div>
              <label
                htmlFor="salutations"
                className="block text-gray-700 font-medium mb-2"
              >
                Salutation
              </label>
              <input
                type="text"
                id="salutation"
                value={entry.salutation}
                onChange={(e) =>
                  setEntry((prev) => ({ ...prev, salutation: e.target.value }))
                }
                placeholder="Dear Diary..."
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-purple-400 focus:ring focus:ring-purple-100 transition-all duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="content"
                className="block text-gray-700 font-medium mb-2"
              >
                Your Thoughts
              </label>
              <div className="relative">
                <textarea
                  id="content"
                  value={entry.content}
                  onChange={handleContentChange}
                  placeholder="Write your heart out..."
                  className="w-full h-64 px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-400 focus:ring focus:ring-purple-100 transition-all duration-200 resize-none"
                />
                <div className="absolute bottom-3 right-3 text-sm text-gray-400">
                  {charCount} characters
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={!isPrivate}
                  onChange={(e) => setIsPrivate(!e.target.checked)}
                  className="w-4 h-4 border-gray-300 rounded cursor-pointer focus:ring-2 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Public</span>
              </label>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-3">
                How are you feeling?
              </label>
              <div className="flex flex-wrap gap-2">
                {moods.map((mood) => (
                  <button
                    key={mood}
                    type="button"
                    onClick={() => setEntry((prev) => ({ ...prev, mood }))}
                    className={`flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-200 ${
                      entry.mood === mood
                        ? "bg-purple-100 text-purple-700 border-purple-200"
                        : "bg-gray-50 text-gray-600 hover:bg-purple-50 hover:text-purple-600"
                    }`}
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        entry.mood === mood ? "fill-purple-700" : ""
                      }`}
                    />
                    {mood}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full md:w-auto flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <Save className="w-5 h-5" />
                <span>Save Entry</span>
              </button>
            </div>
            {showSuccess && (
              <div className="mt-4 mb-4 px-4 py-2 text-green-700 bg-green-100 border border-green-400 rounded-lg">
                Your tales is posted successfully! 🎉
              </div>
            )}

            {errorMessage && (
              <div className="mt-4 mb-4 px-4 py-2 text-red-700 bg-red-100 border border-red-400 rounded-lg">
                {errorMessage}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default DiaryEntry;
