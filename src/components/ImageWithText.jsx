import React from "react";
import image from "./imagewt.png";
import "./custom.css";

function ImageWithText() {
  return (
    <div className="image-section">
      <div className="img-s">
        <div className="col-left">
          <h2>Vind de geschikte traplift voor uw situatie</h2>
          <p>
            Als u meer moeite hebt traplopen, kan een traplift een uitkomst
            zijn. U wordt veilig en comfortabel naar boven en beneden gebracht.
            In onze gratis traplift borchure kunt u op uq gemak alles lezen over
            trapliften. Met deze brochure krijgt u een beeld van de
            mogelijkheden en modellen, maar ook de aankoop en financiering. Als
            u meer moeite hebt traplopen, kan een traplift een uitkomst zijn. U
            wordt veilig en comfortabel naar boven en beneden gebracht. In onze
            gratis traplift borchure kunt u op uq gemak alles lezen over
            trapliften. Met deze brochure krijgt u een beeld van de
            mogelijkheden en modellen, maar ook de aankoop en financiering.
          </p>
        </div>
        <div className="col-right">
          <img src={image} alt="imgwithtext" className="iwt" />
        </div>
      </div>
    </div>
  );
}

export default ImageWithText;
