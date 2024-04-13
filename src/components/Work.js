import React from 'react';
import Card from '../stories/Card/Card.tsx'; 
import HeroImg from "../stories/HeroImg/HeroImg.tsx"
function Work() {
  const projects = [
    {
      title: "Dockerized Web Application",
      description: "Developed a multi-container Docker application simulating a production environment, which improved deployment efficiency and scalability.",
      imageUrl: "https://avatars.githubusercontent.com/u/5429470?s=280&v=4",
      techList: ["Docker", "Node.js", "MongoDB"]
    },
    {
      title: "Interactive UI Components",
      description: "Built interactive UI components using Storybook to enhance modular development and simplify testing processes.",
      imageUrl: "https://avatars.githubusercontent.com/u/22632046?s=280&v=4",
      techList: ["React", "Storybook", "CSS"]
    },
    {
      title: "Single Page Application with React",
      description: "Created a responsive SPA using React, showcasing component-based architecture and state management techniques.",
      imageUrl: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      techList: ["React", "Redux", "CSS"]
    },
    {
      title: "Website Deployment and Testing",
      description: "Learned the complete cycle of deploying and testing a web application, covering continuous integration and delivery concepts.",
      imageUrl: "https://t3.ftcdn.net/jpg/02/77/59/36/360_F_277593616_ilc033ahmZztcXfPQozK51LuFKMBxLIV.jpg",
      techList: ["Docker", "Github"]
    }
  ];
  

  return (
    <div>
       <HeroImg
                backgroundImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Work"
                titleColor="#FFFFFF" 
                parallaxEffect={true} 
            />
    <div className="work">
  
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          content={project.description}
          imageUrl={project.imageUrl}
          alignText="left"
          hoverEffect={true}
          backgroundColor="#f9f9f9"
        >
          <a href={project.link} style={{ textDecoration: 'none', color: 'blue' }}>View Project</a>
          <ul>
            {project.techList.map((tech, techIndex) => (
              <li key={techIndex}>{tech}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
    </div>
  );
}

export default Work;
