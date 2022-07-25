import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Gallery.css";
import Slides from "../../components/Slideshow/Slideshow";
import { Slider } from "../../components/Slider/Slider";
import seat_before from "../../images/car_seat_before.jpg";
import seat_after from "../../images/car_seat_after.jpg";
import image3 from "../../images/car3.jpg";
import { Fade } from "react-reveal";
function Gallery() {
  return (
    <>
      <div className="gallery" id="gallery">
        <div className="gallery-container" id="gallery-container">
          <div className="logo-container"></div>
          <div className="gallery-image">
            <Container fluid className="gallery-wrapper">
              <Row className="justify-content-md-center">
                <Col md={5}>
                  <Card style={{ height: "100%" }}>
                    <Card.Body className="gallery-sidecard-container">
                      <Card.Text className="gallery-sidecard-text">
                        <Fade duration={2000}>
                          <h1 className="gallery-sidecard-header">Gallery</h1>
                        </Fade>
                        <Fade delay={1000} duration={2000}>
                          <p>
                            <b>SlickNSpan</b> wasn’t just some business venture
                            that came to be, it was driven by a passion for the
                            automotive world. Our journey started in the car
                            community while attending shows and sponsored
                            events. We just couldn’t get enough of these show
                            cars and their attention to detail, every car was in
                            pristine condition no matter the year. Why can’t all
                            cars look like this? This question drove us to bring
                            the car show level of detail to the rest of the
                            automotive world!
                          </p>
                        </Fade>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={5}>
                  <Card style={{ width: "100%" }} className="slider-top">
                    <Slider src1={seat_before} src2={seat_after} />
                    <Card.Body className="slider-bottom">
                      <Card.Title></Card.Title>
                      <Card.Text>
                        <p>
                          This section will continue to be updated periodically,
                          check back in if you want updates on our recent work
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  <Card style={{ width: "100%" }}>
                    <Slider src1={image3} src2={image3} />
                    <Card.Body className="slider-bottom">
                      <Card.Title></Card.Title>
                      <Card.Text>
                        <p>
                          This section will continue to be updated periodically,
                          check back in if you want updates on our recent work
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <Row className="gallery-row-bottom">
                <Col md={3}>
                  <Card style={{ height: "100%" }}>
                    <Card.Img
                      src={image3}
                      style={{ height: "100%" }}
                    ></Card.Img>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card style={{ height: "100%" }}>
                    <Card.Body className="gallery-sidecard-container">
                      <Card.Text className="gallery-sidecard-text">
                        Send us your favorite <b>SlickNSpan Detailing</b> Pics
                        and we will add them to this section! The most important
                        thing to us is our community and our love of cars.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card style={{ height: "100%" }}>
                    <Card.Img
                      src={image3}
                      style={{ height: "100%" }}
                    ></Card.Img>
                  </Card>
                </Col>
              </Row>
              <Row className="gallery-row-bottom">
                <Col md={10}>
                  <Slides />
                </Col>
              </Row>
            </Container>
          </div>
          <p>
            This section will continue to be updated periodically, check back in
            if you want updates on our recent work
          </p>
        </div>
      </div>
    </>
  );
}
export default Gallery;
