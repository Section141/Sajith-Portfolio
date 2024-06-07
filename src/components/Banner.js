import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(50);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Software Engineer", "Cloud Practioner" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const resume = () => {
    window.open('https://drive.google.com/file/d/1PnUJ_tdfygetB3GzgdOqrtxkC8G-1D4h/view?usp=drive_link', '_blank', 'noopener,noreferrer');
};

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Hello there or is it hello world?</span>
                <h1>{`Hello! I'm Sajith, A`}<br /> <span className="txt-rotate" dataPeriod="100" data-rotate='[ "Web Developer", "Software Engineer", "Cloud Practioner" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I'm a passionate Software Engineer who recently graduated with a Master's in Computer Science and Software Engineering from Auburn University. I have a strong foundation in various programming languages and technologies, including Python, JavaScript, React, AWS, and more. My journey in tech is fueled by continuous learning and a drive to solve real-world problems through innovative solutions. Let's connect and create something amazing together!</p>
                  <button onClick={resume}> More about me!(My Resume) <ArrowRightCircle size={30} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
