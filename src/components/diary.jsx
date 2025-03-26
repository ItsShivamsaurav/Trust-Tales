import React from "react";
import { Calendar, Clock, Edit3, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

function Dairy() {
  const [entries, setEntries] = useState([]);
  const axiosGetData = async () => {
    try {
      const response = await Axios.get(
        "http://localhost:3000/user/diary/public"
      );
      console.log(response);
      setEntries(response.data);
    } catch (err) {
      alert("Can't find data");
    }
  };

  useEffect(() => {
    axiosGetData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-gray-800">Tales</h1>
          </div>
          <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-md">
            <Edit3 className="w-4 h-4" />
            <Link
              to="/diaryentry"
              className="font-medium text-white hover:text-purple-500"
            >
              New Entry
            </Link>
          </button>
        </div>

        <div className="space-y-6">
          {entries.map((entry) => (
            <div
              key={entry._id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-600">{entry.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500">{entry.time}</span>
                </div>
              </div>

              <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                {entry.title}
                <Sparkles className="w-5 h-5 text-yellow-400" />
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4">
                {entry.content}
              </p>

              <div className="flex items-center justify-between">
                <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                  {entry.mood}
                </span>
                <button className="text-purple-600 hover:text-purple-800 transition-colors duration-200">
                  Read more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dairy;
