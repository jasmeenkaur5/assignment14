import Card from "../stories/Card/Card.tsx";
import Text from "../stories/Text/Text.tsx";
import HeroImg from "../stories/HeroImg/HeroImg.tsx"
function BasicInfo() {
    return (
      <div className="basic-info">
    <HeroImg
                backgroundImage="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Welcome to My Portfolio"
                titleColor="#FFFFFF" 
                parallaxEffect={true} 
            />
    <div className="container">
        <div className="student-details">
            <Text text="Name: Jasmeen Kaur"></Text>
            <Text text="Instructor Name: JP Lapointe"></Text>
            <Text text="Course: Business Systems Build and Testing"></Text>
        </div>
        <div className="portfolio-card">
            <Card
                title="Showcase Your Coursework with a Portfolio Website"
                content="Building a portfolio website is an excellent way to showcase the projects and coursework you have completed throughout your academic program. It not only demonstrates your learning and skills but also provides a professional platform to exhibit your achievements to potential employers and peers. A well-designed portfolio can be a critical tool in your career development, helping you stand out in competitive job markets by highlighting your technical abilities, design sensibility, and project management skills."
                alignText="justify"
                hoverEffect={true}
                backgroundColor="#f0f0f0"
            />
        </div>
    </div>
</div>

    );
  }
  
  export default BasicInfo;