export default function About() {
  const features = [
    {
      title: "Our Vision",
      description:
        "To create a safer digital world by empowering organizations with world-class cybersecurity expertise and cutting-edge defensive technologies.",
      icon: "🛡️",
    },
    {
      title: "Our Mission",
      description:
        "Delivering comprehensive security solutions through penetration testing, threat hunting, and hands-on training that builds resilient cyber defenses.",
      icon: "🎯",
    },
    {
      title: "Who We Are",
      description:
        "Elite security researchers, ethical hackers, and cyber defense experts committed to protecting critical infrastructure and digital assets.",
      icon: "🔒",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">byteoverwrite</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Pushing boundaries and redefining what's possible in software development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
