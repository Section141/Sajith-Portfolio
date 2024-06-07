import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <center><Col size={12} sm={6} className="text-center text-sm-end">
        <center><p>Portfolio by Sajith Muralidhar</p></center> 
          </Col></center>
        </Row>
      </Container>
    </footer>
  )
}
