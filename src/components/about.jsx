import { Heart, Users, Shield, Sparkles, BookOpen, Star } from "lucide-react";

function About() {
  const features = [
    {
      icon: <Heart className="h-8 w-8 text-purple-500" />,
      title: "Personal Growth",
      description:
        "Track your journey of self-discovery and emotional well-being",
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-500" />,
      title: "Private & Secure",
      description:
        "Your thoughts are protected with industry-standard encryption",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-purple-500" />,
      title: "Beautiful Interface",
      description: "An elegant and intuitive design that inspires writing",
    },
  ];

  const teamMembers = [
    {
      name: "Adssd Dnjnc",
      role: "Founder & Designer",
      image: "",
    },
    {
      name: "Hdabsda Dacn",
      role: "Lead Developer",
      image: "",
    },
    {
      name: "Sddsaak Hcccjicj",
      role: "Content Strategist",
      image: "",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            MyDiary was born from a simple idea: everyone deserves a beautiful,
            private space to reflect, grow, and capture life's precious moments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're a passionate group of individuals dedicated to helping you
            document your journey through life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {member.name}
              </h3>
              <p className="text-purple-600">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
          <p className="text-xl text-gray-700 italic mb-4">
            "We believe that every person's story matters, and we're here to
            help you tell yours."
          </p>
          <p className="text-gray-500">— The MyDiary Team</p>
        </div>
      </div>
    </div>
  );
}

export default About;
