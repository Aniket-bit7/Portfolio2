import { OrbitingCircles } from "./OrbitingCircles.jsx";

export function Frameworks() {
  const skills = [
    "prisma",
    "express",
    "mysql",
    "HTML5",
    "css3",
    "c++",
    "github",
    "javascript",
    "react",
    "mongodb",
    "excel",
    "neon",
    "vercel",
    "ros2",
    "robotics",
    "redux",
    "oauth",
    "vite",
    "python",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`/src/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`/src/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);