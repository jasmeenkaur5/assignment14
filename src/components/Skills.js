import React from "react";
import Card from "../stories/Card/Card.tsx"
import HeroImg from "../stories/HeroImg/HeroImg.tsx"

function Skills() {
  const skillsData = [
    {
      title: "Front End",
      content: "JavaScript, React, HTML, CSS, SASS",
      imageUrl: "https://www.audero.it/blog/wp-content/uploads/2014/09/front-end-stack.png", // Update or remove imageUrl as necessary
      backgroundColor: "#f8f9fa" // Light grey background
    },
    {
      title: "Back End",
      content: "Node.js, Express, MongoDB, SQL",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi1DqWzSwY8ozQ8xh03KYdsWf_M8aMIhJo83Xh9LJCiQ&s",
      backgroundColor: "#f8f9fa"
    },
    {
      title: "Deployment",
      content: "Docker, Jenkins, GitHub Actions",
      imageUrl: "https://www.docker.com/wp-content/uploads/2023/08/logo-dont-stretch.svg",
      backgroundColor: "#f8f9fa"
    },
    {
      title: "Tools & Libraries",
      content: "Git, Webpack, Babel",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj3SwUQsNYfpadPwcTaOgwEW27zhOQujoTtFRfBpKsQw&s",
      backgroundColor: "#f8f9fa"
    }
  ];

  return (
    <div>
       <HeroImg
        backgroundImage="https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Skills"
        titleColor="#FFFFFF" 
        parallaxEffect={true} 
      />
  
    <div className="skills">
     
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px' }}>
        {skillsData.map((skill, index) => (
          <Card
            key={index}
            title={skill.title}
            content={skill.content}
            imageUrl={skill.imageUrl}
            alignText="center"
            hoverEffect={true}
            backgroundColor={skill.backgroundColor}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Skills;
