import Header_desc from "./Header_desc/Header_desc";
import Img_galeria from "./img_galeria/img_galeria";
import Car_location from "./car_location/car_location";
import Car_categories from "./car_categories/car_categories";

export default function Description() {
  return (
    <div>
      <div>
        <Header_desc />
      </div>
      <div>
        <Img_galeria />
      </div>
      <div>
        <Car_location />
      </div>
      <div>
        <Car_categories />
      </div>
    </div>
  );
}
