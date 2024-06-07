import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                  <Row>
                    <Col size={12} sm={9} className="px-1">
                     <h5> <FaPhoneAlt className="contact-icon"/> Phone Number: +1-(334)-610-9987 </h5>
                    </Col>
                    <Col size={12} sm={10} className="px-1">
                      <h5><FaEnvelope className="contact-icon"/>
                        Email Address: murali.sajith45@gmail.com </h5>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <h5><FaMapMarkerAlt className="contact-icon"/>
                        Location: Auburn, Alabama </h5>
                    </Col>
                  </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
