import shop1 from "@/assets/uploads/shop 1.svg";
import shop2 from "@/assets/uploads/shop 2.svg";
import shop3 from "@/assets/uploads/shop 3.svg";
import shop4 from "@/assets/uploads/shop 4.svg";
const Shop = () => {
  return (
    <section className="shop">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-heading__title">Shop</h2>
        </div>
        <div className="section-body">
          <div className="shops">
            <div className="shop-item">
              <a href="#" className="shop__link">
                <img src={shop1} alt="#" className="shop__image" />
              </a>
            </div>
            <div className="shop-item">
              <a href="#" className="shop__link">
                <img src={shop2} alt="#" className="shop__image" />
              </a>
            </div>
            <div className="shop-item">
              <a href="#" className="shop__link">
                <img src={shop3} alt="#" className="shop__image" />
              </a>
            </div>
            <div className="shop-item">
              <a href="#" className="shop__link">
                <img src={shop4} alt="#" className="shop__image" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
