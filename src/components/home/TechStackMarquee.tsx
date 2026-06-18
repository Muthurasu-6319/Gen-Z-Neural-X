"use client";

const techLogos = [
  { name: "React", url: "https://cdn.simpleicons.org/react/000000" },
  { name: "Next.js", url: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "Node.js", url: "https://cdn.simpleicons.org/nodedotjs/000000" },
  { name: "TypeScript", url: "https://cdn.simpleicons.org/typescript/000000" },
  { name: "Python", url: "https://cdn.simpleicons.org/python/000000" },
  { name: "AWS", url: "https://cdn.simpleicons.org/amazonaws/000000" },
  { name: "Docker", url: "https://cdn.simpleicons.org/docker/000000" },
  { name: "MongoDB", url: "https://cdn.simpleicons.org/mongodb/000000" },
  { name: "Firebase", url: "https://cdn.simpleicons.org/firebase/000000" },
  { name: "Tailwind CSS", url: "https://cdn.simpleicons.org/tailwindcss/000000" },
];

export default function TechStackMarquee() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "60px 0 40px 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p style={{ color: "rgba(0,0,0,0.4)", fontSize: "13px", marginBottom: "32px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>
          Powered By Industry Leading Tech
        </p>
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            overflow: "hidden",
            position: "relative",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <style>
            {`
              @keyframes scroll-tech {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .tech-track-dark {
                display: flex;
                width: max-content;
                animation: scroll-tech 35s linear infinite;
              }
              .tech-track-dark:hover {
                animation-play-state: paused;
              }
              .tech-logo-dark {
                width: 150px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-shrink: 0;
                padding: 0 20px;
              }
              .tech-logo-dark img {
                height: 36px;
                width: auto;
                object-fit: contain;
                opacity: 0.35;
                transition: all 0.4s ease;
              }
              .tech-logo-dark img:hover {
                opacity: 0.9;
                transform: scale(1.1);
              }
            `}
          </style>
          <div className="tech-track-dark">
            {[...techLogos, ...techLogos].map((tech, index) => (
              <div key={index} className="tech-logo-dark" title={tech.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={tech.url} alt={tech.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
