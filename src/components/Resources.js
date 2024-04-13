import React from 'react';
import HeroImg from '../stories/HeroImg/HeroImg.tsx';  
import Card from '../stories/CardWithLink/Card.tsx';  

function Resources() {
  const resources = [
    {
      title: "React Documentation",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxvuNhR2-wx9X9zblwtTmeBdkfwV75HA8bpJ_Vpz_ow&s",
      summary: "Comprehensive guide to React, covering all the basics and advanced topics for building React applications.",
      link: "https://legacy.reactjs.org/docs/getting-started.html"
    },
  
    {
      title: "Docker Documentation",
      imageUrl: "https://raw.githubusercontent.com/docker-library/docs/c350af05d3fac7b5c3f6327ac82fe4d990d8729c/docker/logo.png",
      summary: "Essential resource for developers looking to containerize their applications, ensuring consistency across multiple deployments and environments.",
      link: "https://docs.docker.com/"
    },
    {
      title: "Styled Components Documentation",
      imageUrl: "https://www.styled-components.com/atom.png",
      summary: "Documentation for Styled Components, focusing on enhancing CSS for styling React application components.",
      link: "https://styled-components.com/docs"
    },
    {
      title: "W3Schools",
      imageUrl: "https://store-images.s-microsoft.com/image/apps.20300.14599852896494176.6a23f863-5fc1-443c-9578-78937fdfd4ae.9f7112f3-f5ac-46a9-96bc-82ff3a7eb262?h=464",
      summary: "Educational website providing tutorials and references on web development topics such as HTML, CSS, JavaScript, PHP, SQL, and more.",
      link: "https://www.w3schools.com/"
    }
  ];
  
    return (
      <div className="resources">
        <HeroImg
 backgroundImage="https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Useful Resources"
          titleColor="#FFFFFF" 
          parallaxEffect={true} 
        />
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px' }}>
          {resources.map((resource, index) => (
            <Card
              key={index}
              title={resource.title}
              content={resource.summary}
              imageUrl={resource.imageUrl}
              alignText="center"
              hoverEffect={true}
              backgroundColor="#f0f0f0"
              link={resource.link}
            />
          ))}
        </div>
      </div>
    );
}

export default Resources;
