import React, { ReactNode, useState } from "react";
import "../../components/FastighetsCards/FastighetsCard.css";
import BtnMedIcon from "../Buttons/BtnMedIkon";
import { MdExpandMore } from "react-icons/md";

interface CardsWrapperProps {
  children: ReactNode;
}

function CardsWrapper({ children }: CardsWrapperProps) {
  const [visibleCards, setVisibleCards] = useState(4);

  const showMoreCards = () => {
    setVisibleCards((prevVisible) => prevVisible + 4);
  };

  return (
    <>
      <section className="cards-wrapper ">
        {React.Children.toArray(children).slice(0, visibleCards)}
      </section>
      <div className="cards-wrapper-btn">
        {React.Children.count(children) > visibleCards && (
          <BtnMedIcon
            icon={<MdExpandMore />}
            title="Show More"
            onClick={showMoreCards}
          />
        )}
      </div>
    </>
  );
}

export default CardsWrapper;