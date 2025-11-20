export default function Projects() {
  const projects = [
    {
      title: "Cyber Range Platform",
      description:
        "Advanced training environment simulating real-world networks for hands-on cybersecurity practice and red team/blue team exercises.",
      tech: ["Docker", "Kubernetes", "Python", "React"],
      image: "🏰",
    },
    {
      title: "CTF Challenge Platform",
      description:
        "Comprehensive Capture The Flag platform hosting security competitions with dynamic challenges and real-time scoring.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
      image: "🚩",
    },
    {
      title: "Threat Intelligence Hub",
      description:
        "Centralized threat intelligence aggregation system analyzing IoCs, malware signatures, and APT campaigns.",
      tech: ["Python", "Elasticsearch", "Kibana", "MISP"],
      image: "🕵️",
    },
    {
      title: "Vulnerability Scanner",
      description:
        "Automated vulnerability assessment tool for web applications, APIs, and network infrastructure scanning.",
      tech: ["Python", "Nmap", "OWASP ZAP", "Metasploit"],
      image: "🔎",
    },
    {
      title: "Security Operations Center",
      description:
        "SIEM-integrated SOC dashboard for real-time threat monitoring, incident tracking, and response orchestration.",
      tech: ["Splunk", "ELK Stack", "Python", "React"],
      image: "🖥️",
    },
    {
      title: "Malware Analysis Lab",
      description:
        "Isolated sandbox environment for dynamic malware analysis, behavioral detection, and reverse engineering.",
      tech: ["Cuckoo", "YARA", "IDA Pro", "Volatility"],
      image: "🦠",
    },
  ];

  return (
    <section id="projects" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing our latest work and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-purple-dark to-purple-light flex items-center justify-center text-8xl">
                {project.image}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <button className="text-purple-light font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  View Project
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
