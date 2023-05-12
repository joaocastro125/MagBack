import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col  from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import IconText from'./IconText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import logo from "./assets/MAGbank.png"




import aplestore from './assets/applestore.png'
import googleplay from './assets/googleplay.png'
import { faFacebookSquare, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

import '../components/Footer.scss'




const Footer = () => {
  return (
    
  <footer className="footer">
     <Container>
      <Row className="text-center py-5" xs={12} lg={6}>
      <Col className="text-lg-left">
         <Image src={logo} className="py-2"/>
      </Col>
      
      <Col xs={12} lg={6} >
        <Image src={aplestore} className="" />
        <Image src={googleplay} className="ms-3 my-3 my-lg-0"/>
      </Col>
      <Col className="d-flex align-items-center justify-content-center  ">
        <FontAwesomeIcon  icon={faFacebookSquare} size="2x" color="#7c7c7c" />
        <FontAwesomeIcon icon={faTwitter} size="2x" color="#7c7c7c" />
        <FontAwesomeIcon icon={faYoutube} size="2x" color="#7c7c7c" />



      </Col>
      </Row>
     </Container>
  </footer>
  )
};

export default Footer;





