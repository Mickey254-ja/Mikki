import React from 'react'
import { Container, Row, Col, Button} from "react-bootstrap";


const HeroSection = () => {
  return (
    <Container className='hero-section-container' >
       <Row className='h-100'>
        <Col xs md="8" className='d-flex flex-column justify-content-center text-start px-4'>
            <div className='mx-4'>
               <h1>Photography Portfolio and My Project</h1>
               <p>lprem ipsum sit amet, cosectetura dipiscing elit, sed do elusmod tekmpor incididunt ut labore mana aliqua, Ut enim ad minim venam, quis nostrud exercitation ulianci laboris nisi ut aliquip ex ea commodo consequier.</p>
            </div>
            <div className='btns-wrapper'>
                <a href='/'>Read my blog</a>
                <Button variant='secondary'>Learn More</Button>
            </div>
        </Col>
        <Col xs md="4">
            <div className='img-wrapper'></div>
        </Col>
       </Row>
    </Container>
  )
}

export default HeroSection