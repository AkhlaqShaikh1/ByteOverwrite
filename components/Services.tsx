export default function Services() {
  const services = [
    {
      title: "Penetration Testing",
      description:
        "Comprehensive security assessments simulating real-world attacks to identify vulnerabilities in your infrastructure, applications, and networks.",
      icon: "🎯",
    },
    {
      title: "Security Audits",
      description:
        "In-depth analysis of your security posture, compliance frameworks, and risk assessment to ensure robust protection.",
      icon: "🔍",
    },
    {
      title: "Threat Intelligence",
      description:
        "Proactive monitoring and analysis of emerging threats, zero-day vulnerabilities, and advanced persistent threats (APTs).",
      icon: "🧠",
    },
    {
      title: "Security Training",
      description:
        "Hands-on cybersecurity training, CTF competitions, and certification programs to build elite security teams.",
      icon: "🎓",
    },
    {
      title: "Incident Response",
      description:
        "Rapid response to security breaches with forensics analysis, containment strategies, and recovery planning.",
      icon: "🚨",
    },
    {
      title: "Red Team Operations",
      description:
        "Advanced adversary simulation exercises testing your organization's detection and response capabilities.",
      icon: "⚔️",
    },
  ];

  return (
    <section id="services" className="relative py-24 grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 border-l-4 border-transparent hover:border-purple-light"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-light/20 to-purple-dark/20 blur-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
