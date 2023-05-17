
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import logoDesktop from "./assets/logo__magic-pay.png";
import Creadit from './assets/credit-card.jpg'
import './Hero.scss';


const Hero = ({onClick}) => {
  return (
    <>
    <Card className="text-center text-light hero">
      <Container>
        <Row>
          <Col lg className="text-lg-end mt-5">
            <Image className="d-none d-lg-inline-block" src={logoDesktop} alt="logo" />
          </Col>

          <Col lg className="text-lg-start my-5">
            <p>Pague suas contas pelo nosso APP</p>
            <Button variant="outline-light" onClick={onClick}>Abra sua conta</Button>
          </Col>
        </Row>
      </Container>
    </Card>
   

    </>
  )
}

export default Hero;