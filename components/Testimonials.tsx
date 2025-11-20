"use client";

export default function Testimonials() {
  const testimonials = [
    {
      name: "James Mitchell",
      role: "CISO, Global Financial Corp",
      content:
        "byteoverwrite's penetration testing revealed critical vulnerabilities we never knew existed. Their expertise significantly strengthened our security posture.",
      avatar: "👨‍💼",
    },
    {
      name: "Dr. Sarah Chen",
      role: "Head of Security, HealthSecure",
      content:
        "The red team exercise was eye-opening. Their tactical approach and detailed reporting helped us build a robust incident response program.",
      avatar: "👩‍⚕️",
    },
    {
      name: "Marcus Thompson",
      role: "VP Engineering, DataTech Solutions",
      content:
        "Outstanding security training program. Our team went from basic awareness to certified security professionals in just 6 months.",
      avatar: "👨‍💻",
    },
    {
      name: "Rachel Anderson",
      role: "Director of Compliance, SecureBank",
      content:
        "byteoverwrite's comprehensive audit ensured our compliance with industry standards and significantly reduced our risk exposure.",
      avatar: "👩‍💼",
    },
    {
      name: "Ahmed Hassan",
      role: "Security Lead, CloudInfra Inc",
      content:
        "Their threat intelligence platform transformed how we detect and respond to emerging threats. Absolutely game-changing technology.",
      avatar: "👨‍🔬",
    },
  ];

  return (
    <section className="relative py-24 grid-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </div>

        {/* Scrolling testimonials */}
        <div className="relative">
          <div className="flex gap-6 animate-marquee">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-96 glass p-8 rounded-2xl"
              >
                <div className="flex items-center mb-4">
                  <div className="text-5xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
