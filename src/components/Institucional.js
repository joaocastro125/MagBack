import React from "react"
import  Container from 'react-bootstrap/Container';
import  Row from 'react-bootstrap/Row';
import   Col from 'react-bootstrap/Col';
import  Button from 'react-bootstrap/Button';
import {
    faMobileAlt,
    faMobile,
    faGlobe,
    faShieldAlt,
  } from '@fortawesome/free-solid-svg-icons';
  import IconText from './IconText';

  import '../components/Institucional.scss'  
const Institucional=({onClick})=>{
    return (
        <section className="institucional text-light py-5">
          <Container>
          <Row>
             <Col xs={12} lg={5} />

             <Col xs={12} lg={7}>

                <h2 className='institutional-title my-5'>Já nascemos digital</h2>
                    <p className='mb-5'>
                    Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma galera de tipos e os embaralhou para fazer um livro de espécimes de tipos. Ele sobreviveu não apenas a cinco séculos, mas também ao salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com software de editoração eletrônica como Aldus PageMaker, incluindo versões de Lorem Ipsum.
                    </p>
                    <IconText icon={faMobileAlt} color='#fff' className='mb-2' size="6x">
            Sem fila e sem burocracia
          </IconText>
          <IconText icon={faMobile} color='#fff' className='mb-2'>
            Simples e prático
          </IconText>
          <IconText icon={faGlobe} color='#fff' className='mb-2'>
            Abertura de conta 100% online
          </IconText>
          <IconText icon={faShieldAlt} color='#fff' className='mb-2'>
            Transações mais seguras
          </IconText>
          <Button sm={4} variant='outline-light' className='mt-5' onClick={onClick}>
            Abra sua conta
          </Button>
          </Col>
          </Row> 
          </Container>
        
        </section>
    )
}

export default Institucional