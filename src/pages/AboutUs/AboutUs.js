import React, { useRef, useState } from "react";
import "./AboutUs.css";
import { Row, Col, Container, Card, Form, Button } from "react-bootstrap";
import Lorem from "react-lorem-component";
import logo from "../../images/Group 2.png";
import emailjs from "@emailjs/browser";
import ConfirmationDialog from "./Confirmation";

function AboutUs() {
  const [show, setShow] = useState(false);
  const form = useRef();
  //referencing form current values

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setShow(true);
    e.target.reset();
  };
  //email form submission handler
  return (
    <div className="/about" id="about">
      <>
        <Container fluid className="about-container" id="schedule-now">
          <Row style={{ padding: "0 5rem 0 5rem" }}>
            <Col md={6} className="about-section">
              <Card className="about-box">
                <Card.Header className="about-head">
                  <h1 className="hours">
                    <b className="hours">Request a Quote Today</b>
                  </h1>
                </Card.Header>
                <Card.Body className="about-wrap">
                  <Card.Text className="about-type">
                    <div className="hours">
                      {" "}
                      <Lorem count="2" className="hours" />{" "}
                    </div>
                  </Card.Text>
                </Card.Body>
                <Card.Body className="about-wrap">
                  <Card.Text>
                    <div className="contact-details">
                      <h2>
                        <u className="hours">Business Hours</u>
                      </h2>

                      <li className="hours">Monday-Friday</li>
                      <li className="hours">9:00 AM - 5:00 PM</li>
                      <h2>
                        <u className="hours">Email</u>
                      </h2>
                      <p>
                        <u className="hours">carloscolon@spicknspan.com</u>
                      </p>
                      <h2>
                        <u className="hours">Phone</u>
                      </h2>
                      <p>
                        <u className="hours">(813) 403 - 8713</u>
                      </p>
                      <p className="hours">
                        We are located near USF and offer mobile services to
                        those that live in the Bay Area! Distance fees will be
                        assessed during initial quote and applied to the final
                        bill. Please reach out directly if you wish to come to
                        us or meet at a convenient location!
                      </p>
                      <p className="hours">
                        Best,<br></br>Slick Crew
                      </p>
                      <img src={logo} alt="/" />
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="form-section">
              <Form ref={form} className="about-form" onSubmit={sendEmail}>
                {/* form beginning */}
                <h2 className="hours">Vehicle Information</h2>
                <Row className="mb-3">
                  <input hidden value="petrie.cam@gmail.com" />
                  <Form.Group as={Col} controlId="formGridVehicleInfo">
                    <Form.Label className="hours">Make</Form.Label>
                    <Form.Control
                      type="vehicle-info"
                      name="make"
                      placeholder="Make"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridModelInfo">
                    <Form.Label className="hours">Model</Form.Label>
                    <Form.Control
                      type="vehicle-info"
                      name="model"
                      placeholder="Model"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridYearInfo">
                    <Form.Label className="hours">Year</Form.Label>
                    <Form.Control
                      type="vehicle-info"
                      name="year"
                      placeholder="Year"
                    />
                  </Form.Group>
                </Row>
                <Form.Group as={Col} controlId="formBasicContactInfo">
                  <h2 className="hours">Contact Information</h2>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFirstName">
                      <Form.Label className="hours">First Name</Form.Label>
                      <Form.Control
                        type="name"
                        name="first_name"
                        placeholder="First Name"
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridLastName">
                      <Form.Label className="hours">Last Name</Form.Label>
                      <Form.Control
                        type="name"
                        name="last_name"
                        placeholder="Last Name"
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label className="hours">Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email"
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} xs={10} controlId="formGridAddress">
                      <Form.Label className="hours">Address</Form.Label>
                      <Form.Control
                        placeholder="ex. 1234 Main St"
                        name="address"
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label className="hours">Zip</Form.Label>
                      <Form.Control placeholder="Zip" name="zip" />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridAddress2">
                      <Form.Label className="hours">Address 2</Form.Label>
                      <Form.Control
                        placeholder="Apartment, studio, or floor"
                        name="address2"
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group controlId="formBasicPhoneNumber">
                      <Form.Label className="hours">Phone Number</Form.Label>
                      <Form.Control
                        type="contact-info"
                        placeholder="Phone Number"
                        name="phone"
                      />
                    </Form.Group>
                  </Row>
                </Form.Group>
                <Row className="mb-3">
                  <h2 className="hours">Select Service(s)</h2>
                  <Form.Group controlId="formBasicCheck">
                    <Form.Check
                      name="service"
                      type="checkbox"
                      label="Interior"
                    />
                    <Form.Check
                      name="service"
                      type="checkbox"
                      label="Exterior"
                    />
                    <Form.Check
                      name="service"
                      type="checkbox"
                      label="Full Detail"
                    />
                    <Form.Check
                      name="service"
                      type="checkbox"
                      label="Full Extraction"
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} xs={6} controlId="formGridSelect">
                    <Form.Label className="hours">
                      How would you prefer us to reach you?
                    </Form.Label>
                    <Form.Select
                      name="preference_message"
                      aria-label="Default select example"
                    >
                      <option className="hours">Options</option>
                      <option className="hours" value="1">
                        Phone
                      </option>
                      <option className="hours" value="2">
                        Email
                      </option>
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    xs={6}
                    controlId="formGridAdditionalInfo"
                  >
                    <Form.Label className="hours">
                      *Anything else we need to know
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="additional_message"
                    />
                  </Form.Group>
                </Row>

                <Button className="form-btn" variant="light" type="submit">
                  Submit
                </Button>
                <ConfirmationDialog show={show} setShow={setShow} />
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
}

export default AboutUs;
