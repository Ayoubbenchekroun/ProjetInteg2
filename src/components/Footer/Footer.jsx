import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5 className="title"> Global Bites</h5>
              <p>
                Global Bites est un restaurant international qui propose une
                grande variété de cuisines internationales.
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Horaires de livraison</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Lundi - Dimanche</span>
                <p>10h00 - 23h00</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Adresse : Ottawa, J7Y UIL, Canada</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Téléphone : 01712345678</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email : GlobalBites@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Bulletin d'information</h5>
            <p>Abonnez-vous à notre bulletin d'information</p>
            <div className="newsletter">
              <input type="email" placeholder="Entrez votre email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              © 2024, site web réalisé par Ayoub Benchekroun , Khalil El Hayouni
              , Amal Hra , Sabrina Aissiou , Nizar Ouldbouya ,Hamza Chamsi. Tous
              droits réservés.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Suivez-nous : </p>
              <span>
                {" "}
                <Link to="https://www.facebook.com/globalBites">
                  <i className="ri-facebook-line"></i>
                </Link>{" "}
              </span>
              <span>
                <Link to="https://www.instagram.com/globalBites">
                  <i className="ri-instagram-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://www.snapchat.com/globalBites">
                  <i className="ri-snapchat-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
