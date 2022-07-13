import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import github from "../assets/img/github.svg";
import twitter from "../assets/img/twitter.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={github} alt="Icon" /></a>
              <a href="#"><img src={twitter} alt="Icon" /></a>
            </div>
            <p>Copyright {getCurrentYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

const getCurrentYear = () => {
  return new Date().getFullYear();
};
