import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Mostpopularcategory from "./Mostpopularcategory";
import { NavLink } from "react-router-dom";
// sample comment

function welcome() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <br></br>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.pcbuilder.dev/assets/images/builds/pc-builds.jpg"
                style={{ height: "400px", objectFit: "cover" }}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Our Setups</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://voltedpc.in/assets/images/20201101_002052.jpg"
                style={{ height: "400px", objectFit: "cover" }}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://123pcsolutions.com/wp-content/uploads/2022/08/3.jpg"
                style={{ height: "400px", objectFit: "cover" }}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-4">
          <br></br>
          <Card className="shadow-lg">
            <Card.Body>
              <img
                className="d-block w-100"
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pc-repairs-flyer-advertisement-design-template-e2ee5cc6f63a7f7e973c37ef1d9f8d22_screen.jpg?ts=1637045005"
                style={{ height: "380px", objectFit: "cover" }}
                alt="Third slide"
              />
            </Card.Body>
          </Card>
        </div>
      </div>
      <br></br>
      <br></br>
      <div>
        <Container>
          <h1
            className="text-center"
            style={{
              color: "#A31A26",
              fontWeight: "bold",
              fontFamily: "Concert One, cursive",
            }}
          >
            BE CHOOSY, BE YOU &#128526;
          </h1>
          <hr
            className="text-center mb-4"
            style={{
              width: "20%",
              marginLeft: "38%",
              backgroundColor: "black",
            }}
          />
          <Row>
            <Col className="m-2 p-0">
              <NavLink to="/products/intelProcessor">
                <img
                  src="https://etimg.etb2bimg.com/photo/90213412.cms"
                  alt="Intel-PCs"
                  className="img-fluid m-0 p-0"
                  style={{ height: "40vh", width: "100%", objectFit: "cover" }}
                ></img>
              </NavLink>
            </Col>

            <Col className="m-2 p-0">
              <NavLink to="/products/AMDProcessor">
                <img
                  src="https://fdn.gsmarena.com/imgroot/news/21/06/amd-computex/-1220x526/gsmarena_000.jpg"
                  alt="AMD-PCs"
                  className="img-fluid m-0 p-0"
                  style={{ height: "40vh", width: "100%", objectFit: "cover" }}
                ></img>
              </NavLink>
            </Col>
          </Row>
        </Container>
      </div>
      <br></br>
      <div className="container">
        <div className="row" style={{ backgroundColor: "#E9E9E9" }}>
          {/* <div className="col-md-1"></div> */}
          {/* <div className="col-md-10"> */}
          <Mostpopularcategory />
          {/* </div> */}
          {/* <div className="col-md-1"></div> */}
        </div>
      </div>
      <br></br>
      <>
        <div className="row" style={{ backgroundColor: "#001E57" }}>
          <div className="col-md-4 col-12">
            <h3
              className="font-weight-bold text-white"
              style={{ marginTop: "40px", textAlign: "center" }}
            >
              CUSTOMER SERVICES
            </h3>
            <hr
              style={{
                width: "30%",
                backgroundColor: "#A31A26",
                marginTop: "25px",
              }}
            />
            <ul style={{ listStyleType: "none" }}>
              <li style={{ borderBottom: "1px solid grey" }}>
                <NavLink
                  className="text-white"
                  to={""}
                  style={{ textDecoration: "none" }}
                >
                  <i
                    className="fa fa-angle-double-right text-white font-weight-bold"
                    ariaHidden="true"
                  ></i>
                  &nbsp;&nbsp;&nbsp;PROFILE
                </NavLink>
              </li>
              <li style={{ borderBottom: "1px solid grey" }}>
                <NavLink
                  className="text-white"
                  to={""}
                  style={{ textDecoration: "none" }}
                >
                  <i
                    className="fa fa-angle-double-right text-white font-weight-bold"
                    ariaHidden="true"
                  ></i>
                  &nbsp;&nbsp;&nbsp;CHECK ORDER STATUS
                </NavLink>
              </li>
              <li style={{ borderBottom: "1px solid grey" }}>
                <NavLink
                  className="text-white"
                  to={""}
                  style={{ textDecoration: "none" }}
                >
                  <i
                    className="fa fa-angle-double-right text-white font-weight-bold"
                    ariaHidden="true"
                  ></i>
                  &nbsp;&nbsp;&nbsp;FAQ
                </NavLink>
              </li>
              <li style={{ borderBottom: "1px solid grey" }}>
                <NavLink
                  className="text-white"
                  to={""}
                  style={{ textDecoration: "none" }}
                >
                  <i
                    className="fa fa-angle-double-right text-white font-weight-bold"
                    ariaHidden="true"
                  ></i>
                  &nbsp;&nbsp;&nbsp;SERVICE & REPAIR
                </NavLink>
              </li>
              <li style={{ borderBottom: "1px solid grey" }}>
                <NavLink
                  className="text-white"
                  to={""}
                  style={{ textDecoration: "none" }}
                >
                  <i
                    className="fa fa-angle-double-right text-white font-weight-bold"
                    ariaHidden="true"
                  ></i>
                  &nbsp;&nbsp;&nbsp;SAFETY PROMISE
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-md-4 col-12">
            <h3
              className="font-weight-bold text-white"
              style={{ marginTop: "40px", textAlign: "center" }}
            >
              QUICK LINKS
            </h3>
            <hr
              style={{
                width: "30%",
                backgroundColor: "#A31A26",
                marginTop: "25px",
              }}
            />
            <ul style={{ listStyleType: "none" }}>
              <li style={{ borderBottom: "1px solid grey" }}>
                <NavLink
                  className="text-white"
                  to={""}
                  style={{ textDecoration: "none" }}
                >
                  <i
                    className="fa fa-angle-double-right text-white font-weight-bold"
                    ariaHidden="true"
                  ></i>
                  &nbsp;&nbsp;&nbsp;HOME
                </NavLink>
              </li>
              <li style={{ borderBottom: "1px solid grey" }}>
                <NavLink
                  className="text-white"
                  to={""}
                  style={{ textDecoration: "none" }}
                >
                  <i
                    className="fa fa-angle-double-right text-white font-weight-bold"
                    ariaHidden="true"
                  ></i>
                  &nbsp;&nbsp;&nbsp;PRODUCT
                </NavLink>
              </li>
              <li style={{ borderBottom: "1px solid grey" }}>
                <NavLink
                  className="text-white"
                  to={""}
                  style={{ textDecoration: "none" }}
                >
                  <i
                    className="fa fa-angle-double-right text-white font-weight-bold"
                    ariaHidden="true"
                  ></i>
                  &nbsp;&nbsp;&nbsp;ABOUT-US
                </NavLink>
              </li>
              <li style={{ borderBottom: "1px solid grey" }}>
                <NavLink
                  className="text-white"
                  to={""}
                  style={{ textDecoration: "none" }}
                >
                  <i
                    className="fa fa-angle-double-right text-white font-weight-bold"
                    ariaHidden="true"
                  ></i>
                  &nbsp;&nbsp;&nbsp;INFRASTRUCTURE
                </NavLink>
              </li>
              <li style={{ borderBottom: "1px solid grey" }}>
                <NavLink
                  className="text-white"
                  to={""}
                  style={{ textDecoration: "none" }}
                >
                  <i
                    className="fa fa-angle-double-right text-white font-weight-bold"
                    ariaHidden="true"
                  ></i>
                  &nbsp;&nbsp;&nbsp;CONTACT
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-md-4 col-12">
            <h3
              className="font-weight-bold text-white"
              style={{ marginTop: "40px", textAlign: "center" }}
            >
              CONTACT US
            </h3>
            <hr
              style={{
                width: "30%",
                backgroundColor: "#A31A26",
                marginTop: "25px",
              }}
            />
            <ul style={{ listStyleType: "none" }}>
              <li>
                <i
                  className="fa fa-map-marker text-white font-weight-bold"
                  ariaHidden="true"
                ></i>
                &nbsp;&nbsp;&nbsp;
                <span className="text-white">
                  C-DAC,Kharghar,Mumbai–410210.
                </span>
              </li>
              <li>
                <i
                  className="fa fa-envelope text-white font-weight-bold"
                  ariaHidden="true"
                ></i>
                &nbsp;&nbsp;&nbsp;
                <NavLink
                  className="text-white"
                  href="mailto:srmaihar@gmail.com"
                  style={{ textDecoration: "none" }}
                >
                  srmaihar@gmail.com
                </NavLink>
              </li>
              <li>
                <i
                  className="fa fa-phone text-white font-weight-bold"
                  ariaHidden="true"
                ></i>
                &nbsp;&nbsp;&nbsp;
                <NavLink
                  className="text-white"
                  href="#7999325288"
                  style={{ textDecoration: "none" }}
                >
                  (+91)7999325288
                </NavLink>
              </li>
              <li>
                <i
                  className="fa fa-whatsapp text-white font-weight-bold"
                  ariaHidden="true"
                ></i>
                &nbsp;&nbsp;&nbsp;
                <NavLink
                  className="text-white"
                  href="#7062017807"
                  style={{ textDecoration: "none" }}
                >
                  (+91)7062017807
                </NavLink>
              </li>
              <br />
              <li>
                <NavLink href="#" style={{ textDecoration: "none" }}>
                  <i
                    className="fa fa-facebook text-white text-primary"
                    ariaHidden="true"
                    style={{ fontSize: "25px" }}
                  ></i>
                </NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink href="#" style={{ textDecoration: "none" }}>
                  <i
                    className="fa fa-instagram text-white"
                    ariaHidden="true"
                    style={{ fontSize: "25px", color: "#CE2D90" }}
                  ></i>
                </NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink href="#" style={{ textDecoration: "none" }}>
                  <i
                    className="fa fa-twitter text-white text-primary"
                    ariaHidden="true"
                    style={{ fontSize: "25px" }}
                  ></i>
                </NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink href="#" style={{ textDecoration: "none" }}>
                  <i
                    className="fa fa-youtube text-white"
                    ariaHidden="true"
                    style={{ fontSize: "25px" }}
                  ></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="row pt-5" style={{ backgroundColor: "#001E57" }}>
          <div className="col-md-12 col-12">
            <hr style={{ backgroundColor: "grey" }} />
          </div>
        </div>
        <div className="row pb-3" style={{ backgroundColor: "#001E57" }}>
          <div className="col-md-6 col-12">
            <h6
              className="text-secondary"
              style={{ marginLeft: "10%", textAlign: "left" }}
            >
              {" "}
              Copyright © 2022 PC Builder Pro
            </h6>
          </div>
          <div className="col-md-6 col-12" style={{ textAlign: "right" }}>
            <h6 style={{ marginRight: "10%" }}>
              <NavLink
                to={""}
                style={{
                  textDecoration: "none",
                  color: "grey",
                  textAlign: "right",
                }}
              >
                Privacy Policy
              </NavLink>{" "}
              <span style={{ color: "grey" }}>|</span>{" "}
              <NavLink
                to={""}
                style={{ textDecoration: "none", color: "grey" }}
              >
                Terms & Conditions
              </NavLink>
            </h6>
          </div>
        </div>
      </>
    </div>
  );
}

export default welcome;
