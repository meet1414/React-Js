import StyleFour from "./StyleFour";
import chaiseeds from "../../assets/chaiseeds.jpg";
import pumpkin from "../../assets/pumpkin.jpg";


function StyleFourProduct() {
  return (
    <div>
      <div className="one-header">
        <h1>Style 4</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore lacus vel facilisis.
        </p>
      </div>
      <div className="custom-container">
        <div class="d-flex">
          <StyleFour
            image={chaiseeds}
            rating="★★★★★"
            ratingtext="(5.0)"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel culpa autem magnam vitae fugiat maxime alias veniam repudiandae facilis suscipit molestias, hic, ratione incidunt delectus deserunt consequatur! Eos, quae maiores."
            name="Chai seeds pack 200gm"
            discountprice="$170"
            price="$200"
          />
          <StyleFour
            image={pumpkin}
            rating="★★★★★"
            ratingtext="(5.0)"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel culpa autem magnam vitae fugiat maxime alias veniam repudiandae facilis suscipit molestias, hic, ratione incidunt delectus deserunt consequatur! Eos, quae maiores."
            name="Pumpkin seeds 250gm pack"
            discountprice="$185"
            price="$200"
          />
        </div>
      </div>
    </div>
  );
}

export default StyleFourProduct;