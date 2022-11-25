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
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo 
              duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus 
              est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur 
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
              dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et 
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur 
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo 
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est 
              Lorem ipsum dolor sit amet.   

              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, 
              vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio 
              dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait 
              nulla facilisi. Lorem ipsum dolor sit amet,
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card bg={"light"}>
            <Card.Body>
              <Card.Title>How to Learn your Vocabulary</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo 
              duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus 
              est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur 
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
              dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et 
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur 
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo 
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est 
              Lorem ipsum dolor sit amet.   

              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, 
              vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio 
              dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait 
              nulla facilisi. Lorem ipsum dolor sit amet,
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>   
    
    </div>
  );
}

export default Home;
