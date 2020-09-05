import React from 'react';
import {
  Col, Container, Row, Footer,
} from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import 'font-awesome/css/font-awesome.min.css';

const FooterPage = () => (
  <Footer color="stylish-color-dark" className="page-footer font-small pt-2 mt-2">
    <Container className="text-center">
      <Row>
        <hr className="clearfix w-100 d-md-none" />
        <Col md="6">
          <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Our History</h5>
          <li><a href="#!">About Us</a></li>
        </Col>
        <hr className="clearfix w-100 d-md-none" />
        <Col md="6">
          <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Games</h5>
          <li><a href="/game">Space Roids</a></li>
        </Col>
      </Row>
    </Container>
    <hr />
    <div className="footer-copyright text-center">
      <Container fluid>
        {(new Date().getFullYear())}
        {' '}
        <a href="https://www.phaserbros.com">PhaserBros.com</a>
      </Container>
    </div>
  </Footer>
);

export default FooterPage;
