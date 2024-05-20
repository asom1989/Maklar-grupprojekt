import { useState } from "react";
import "./FastighetsCard.css";
import img1 from "../../assets/imgs/clay-banks-hC2QBywnLd0-unsplash.jpg";
import img2 from "../../assets/imgs/spacejoy-YI2YkyaREHk-unsplash.jpg";
import img3 from "../../assets/imgs/valentina-locatelli-P8bsrm8KbM0-unsplash.jpg";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import BtnSvart from "../Buttons/BtnSvart";
import CardDetails from "../CardDetails/CardDetails";
import Overlay from "../Overlay/Overlay";

const images: string[] = [img1, img2, img3];

function FastighetsCard() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <article className="card">
        <div className="img-wrapper">
          <img src={images[currentImage]} alt="Property" />
          <div className="arrow-button-wrapper">
            <div className="arrow-button left-arrow">
              <button onClick={prevImage}>
                <MdArrowBackIosNew />
              </button>
            </div>
            <div className="arrow-button right-arrow">
              <button onClick={nextImage}>
                <MdArrowForwardIos />
              </button>
            </div>
          </div>
        </div>

        <div className="box">
          <header className="card-fastighets">
            <h2>Vattenvägen1</h2>
            <p className="sub-title">valsta, sigtuna kommun</p>
            <p>1 145 000 kr</p>
          </header>

          <div className="area">
            <p>105+55 m²</p>
            <p>3 rum</p>
          </div>
          <footer className="visas">
            <small>VISAS:sön 12/5</small>
            <BtnSvart onClick={handleOpenModal} title="Fler Detaljer" />
          </footer>
        </div>
      </article>
      {isModalVisible && (
        <Overlay handleCloseForm={handleCloseModal}>
          <CardDetails />
        </Overlay>
      )}
    </>
  );
}

export default FastighetsCard;
