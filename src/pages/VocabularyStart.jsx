import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})`
text-align: center;
margin-top: 20px;`

const data = [
  {
   image: require('../slider1.png'), 
  },
  {
    image:require('../slider2.png'), 
   }]

function Home() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="d-block w-100"
          src={slide.image}
          alt="slider image"
        />
        <Carousel.Caption>
          <h3>{slide.caption}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
    <div>
      <Title>Hello!</Title>
    </div>  
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card bg={"light"}>
            <Card.Body>
              <Card.Title>How to Insert your Words</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card bg={"light"}>
            <Card.Body>
              <Card.Title>How to Learn your Vocabulary</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
      
    
    </div>
  );
}

export default Home;
