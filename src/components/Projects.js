import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/vr.jpg";
import projImg2 from "../assets/img/bookstore.png";
import projImg3 from "../assets/img/notes.png";
import projImg4 from "../assets/img/pthread.png";
import projImg5 from "../assets/img/music.png";
import projImg6 from "../assets/img/plate.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Empathy Builder",
      description: "Worked on a VR project in Unity to simulate rheumatoid arthritis, showcasing symptoms and daily challenges through interactive scenes.",
      imgUrl: projImg1,
    },
    {
      title: "Online Bookstore Management System",
      description: "Enhanced online bookstore by developing a MySQL database and dynamic web interface, improving query speed and data accessibility.",
      imgUrl: projImg2,
    },
    {
      title: "Notes App - Web Application",
      description: "Developed a responsive note management web app using React, HTML, and CSS. Engineered an intuitive UI with React Hooks for optimized state management, enhancing the user experience.",
      imgUrl: projImg3,
    },
    {
      title: "Pthread Based Batch Scheduling System",
      description: "Developed three scheduling policies and evaluated algorithms. Developed a batch scheduling architecture in C using the Pthread library, and measured workload and performance metrics.",
      imgUrl: projImg4,
    },
    {
      title: "Music Genre Classification",
      description: "Developed a music genre classification model using the GTZAN dataset. Employed SVM, RF, Logistic Regression, and Decision Trees, significantly enhancing accuracy.",
      imgUrl: projImg5,
    },
    {
      title: "Advanced Vehicle Re-Identification",
      description: "Enhanced surveillance capabilities by analyzing images for license plate data. Used Gabor Filter, OCR, and Vision Assistant techniques to improve character recognition accuracy.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Welcome to my project showcase! Here you'll find some of my projects, where I've applied my skills in full stack development, VR, and machine learning.(There are more details regarding my projects in my resume. Hover over any card to know brief summary about them.)</p>

                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
</Nav> */ // for future use when I add new projects 
} 
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
