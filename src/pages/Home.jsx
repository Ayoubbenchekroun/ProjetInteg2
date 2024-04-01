import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.jpg";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Livraison Rapide",
    imgUrl: featureImg01,
    desc: "Nous livrons votre commande dans la région d'Ottawa/Gatineau en quelques minutes.",
  },
  {
    title: "Cuisine Internationale",
    imgUrl: featureImg02,
    desc: "Découvrez notre large sélection de plats internationaux préparés par nos chefs experts.",
  },
  {
    title: "Fraîcheur",
    imgUrl: featureImg03,
    desc: "Notre nourriture est fraîchement préparée par nos chefs internationaux.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "Plat nord Africain") {
      const filteredProducts = products.filter(
        (item) => item.category === "Plat nord Africain"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Plat asiatique") {
      const filteredProducts = products.filter(
        (item) => item.category === "Plat asiatique"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">
Facile de passer une commande</h5>
                <h1 className="mb-4 hero__title">
                <span>Faim ?</span> Attendez juste <br /> la nourriture à
<span> votre porte</span>
                </h1>

                <p>
                Envie de quelque chose de délicieux ? Votre attente est terminée ! Global Bites, votre restaurant en ligne de cuisine internationale de référence, apporte les saveurs du monde à votre porte. Des plats thaïlandais alléchants aux pâtes italiennes savoureuses, en passant par la cuisine aromatique d'Afrique du Nord, rassasiez votre faim en quelques clics seulement. Commandez maintenant et laissez Global Bites vous emmener dans un voyage culinaire !
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                  <Link to="/foods">Commandez maintenant !</Link> <i class="ri-arrow-right-s-line"></i>
                  </button>

                
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                   Livraison gratuite
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                   
Paiement sécurisé à 100%
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">
Ce que nous servons</h5>
             
<h2 className="feature__title">Installez-vous confortablement à la maison</h2>
              <h2 className="feature__title">
                nous allons <span>prendre soin de vous</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
              On met à votre disposition une variété de plats internationaux. Nous nous approvisionnons en ingrédients du monde entier
et n'utilisons que des ingrédients frais.
 </p>
              <p className="feature__text">
              and use only the fresh ingredients  and deliver it to ur home.{" "}
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Plat   Populaire</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Plat nord Africain" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Plat nord Africain")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Plats nord Africain
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Plats italien
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Plat asiatique" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Plat asiatique")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Plats Asiatique 
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Pourquoi <span>Global bites?</span>
                </h2>
                <p className="tasty__treat-desc">
                Vous recherchez des saveurs uniques ? Global Bites est là pour vous ! Nous proposons une sélection de plats internationaux, frais et délicieux.
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Nourriture internationale fraîche et savoureuse
                    
                    </p>
                    <p className="choose__us-desc">
                    Découvrez une variété de plats internationaux, frais et savoureux, préparés avec soin par nos chefs experts.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Support de qualité

                    </p>
                    <p className="choose__us-desc">
                    Profitez d'un service clientèle de qualité pour répondre à toutes vos questions et demandes.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Commandez de n'importe quel endroit dans Ottawa/Gatineau {" "}
                    </p>
                    <p className="choose__us-desc">
                    Passez votre commande de n'importe où dans la région d'Ottawa/Gatineau et nous la livrerons rapidement à votre porte.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>Pizza populaire</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
  <Container>
    <Row>
      <Col lg="6" md="6">
        <div className="testimonial ">
          <h5 className="testimonial__subtitle mb-4">Témoignage</h5>
          <h2 className="testimonial__title mb-4">
            Ce que disent nos <span>clients</span>
          </h2>
          <p className="testimonial__desc">
            "Une expérience gastronomique exceptionnelle ! Les plats de Global Bites sont incroyablement délicieux et authentiques. Chaque bouchée est une explosion de saveurs qui nous transporte à travers le monde. De plus, le service clientèle est impeccable et la livraison est toujours à l'heure. Je recommande vivement Global Bites à tous les amateurs de bonne cuisine internationale !"
          </p>

          <TestimonialSlider />
        </div>
      </Col>

      <Col lg="6" md="6">
        <img src={networkImg} alt="testimonial-img" className="w-100" />
      </Col>
    </Row>
  </Container>
</section>

    </Helmet>
  );
};

export default Home;
