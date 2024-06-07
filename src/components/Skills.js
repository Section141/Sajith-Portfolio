import python from "../assets/img/python.svg";
import js from "../assets/img/javascript.svg";
import cpro from "../assets/img/cpro.svg";
import linux from "../assets/img/linux.svg";
import java from "../assets/img/java.svg";
import html from "../assets/img/html.svg";
import react from "../assets/img/react.svg";
import aws from "../assets/img/aws.svg";
import mysql from "../assets/img/mysql.svg";
import git from "../assets/img/git.svg";
import teamwork from "../assets/img/teamwork.svg";
import adapt from "../assets/img/adaptation.svg";
import continuous from "../assets/img/continuous.svg";
import problem from "../assets/img/problem.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import skillsColor from "../assets/img/skills-color.jpg"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Welcome to the skills section! Here, you'll find a comprehensive overview of the technical expertise and tools I bring to the table.<br></br> I specialize in a variety of programming languages, modern frameworks, and cloud technologies. I'm passionate about learning and creating innovative solutions.</p>
                        <Carousel responsive={responsive} keyBoardControl={true} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={python} alt="Python" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="JavaScript" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={cpro} alt="C Programming" />
                                <h5>C Programming</h5>
                            </div>
                            <div className="item">
                                <img src={linux} alt="Linux Programming" />
                                <h5>Linux Programming</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Java Programming" />
                                <h5>Java </h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="HTML" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="React" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={aws} alt="AWS" />
                                <h5>Amazon Web Services</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="MySQL" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Git" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={teamwork} alt="Team Player" />
                                <h5>Teamwork</h5>
                            </div>
                            <div className="item">
                                <img src={adapt} alt="Adaptability" />
                                <h5>Adaptability</h5>
                            </div>
                            <div className="item">
                                <img src={continuous} alt="Continuous Learner " />
                                <h5>Continuous Learner</h5>
                            </div>
                            <div className="item">
                                <img src={problem} alt="Problem Solver" />
                                <h5>Problem Solving</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={skillsColor} alt="Image" />
    </section>
  )
}
