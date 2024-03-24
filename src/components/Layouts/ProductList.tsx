import new1 from "@/assets/uploads/Ảnh 1.svg";
import useProductQuery from "@/hooks/useProductQuery";
import { IProduct } from "@/interfaces/product";
import { Link } from "react-router-dom";
const ProductList = () => {
  const { data, isLoading } = useProductQuery();
  if (isLoading) return <div>Loading...</div>;
  console.log("data", data);
  return (
    <div>
      <section className="news">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-heading__title">New</h2>
          </div>
          <div className="section-body">
            <div className="product-list">
              {data.map(
                (item: IProduct, index: number) =>
                  index < 4 && (
                    <div key={index} className="product-item">
                      <div className="product-image">
                        <img
                          src={new1}
                          alt="#"
                          className="product__thumbnail"
                        />
                        <span className="product-sale">30%</span>
                      </div>
                      <div className="product-info">
                        <h3 className="product__name">
                          <a href="#" className="product__link">
                            {item.name}
                          </a>
                        </h3>
                        <a href="#" className="product__category">
                          {item.category}
                        </a>
                        <div className="product-price">
                          <span className="product-price__new">
                            {item.price}
                          </span>
                          <span className="product-price__old">
                            {item.discount}
                          </span>
                        </div>
                      </div>
                      <div className="product-actions">
                        <Link to={`/products-detail/:id`}>
                          <button className="btn product-action__quickview">
                            Quick View
                          </button>
                        </Link>
                        <Link to={`/cart`}>
                          <button className="btn product-action__addtocart">
                            Add To Cart
                          </button>
                        </Link>
                        <div className="product-actions-more">
                          <span className="product-action__share">Share</span>
                          <span className="product-action__compare">
                            Compare
                          </span>
                          <span className="product-action__like">Like</span>
                        </div>
                      </div>
                    </div>
                  )
              )}
              {/*End .product-item*/}
              {/* <div className="product-item">
                <div className="product-image">
                  <img src={new2} alt="#" className="product__thumbnail" />
                  <span className="product-new">New</span>
                </div>
                <div className="product-info">
                  <h3 className="product__name">
                    <a href="#" className="product__link">
                      Syltherine
                    </a>
                  </h3>
                  <a href="#" className="product__category">
                    Stylish cafe chair
                  </a>
                  <div className="product-price">
                    <span className="product-price__new">$200</span>
                    <span className="product-price__old">$300</span>
                  </div>
                </div>
                <div className="product-actions">
                  <Link to={`/products-detail/:id`}>
                    <button className="btn product-action__quickview">
                      Quick View
                    </button>
                  </Link>
                  <Link to={`/cart`}>
                    <button className="btn product-action__addtocart">
                      Add To Cart
                    </button>
                  </Link>
                  <div className="product-actions-more">
                    <span className="product-action__share">Share</span>
                    <span className="product-action__compare">Compare</span>
                    <span className="product-action__like">Like</span>
                  </div>
                </div>
              </div> */}
              {/*End .product-item*/}
              {/* <div className="product-item">
                <div className="product-image">
                  <img src={new3} alt="#" className="product__thumbnail" />
                </div>
                <div className="product-info">
                  <h3 className="product__name">
                    <a href="#" className="product__link">
                      Syltherine
                    </a>
                  </h3>
                  <a href="#" className="product__category">
                    Stylish cafe chair
                  </a>
                  <div className="product-price">
                    <span className="product-price__new">$200</span>
                    <span className="product-price__old">$300</span>
                  </div>
                </div>
                <div className="product-actions">
                  <Link to={`/products-detail/:id`}>
                    <button className="btn product-action__quickview">
                      Quick View
                    </button>
                  </Link>
                  <Link to={`/cart`}>
                    <button className="btn product-action__addtocart">
                      Add To Cart
                    </button>
                  </Link>
                  <div className="product-actions-more">
                    <span className="product-action__share">Share</span>
                    <span className="product-action__compare">Compare</span>
                    <span className="product-action__like">Like</span>
                  </div>
                </div>
              </div> */}
              {/*End .product-item*/}
              {/* <div className="product-item">
                <div className="product-image">
                  <img src={new4} alt="#" className="product__thumbnail" />
                </div>
                <div className="product-info">
                  <h3 className="product__name">
                    <a href="#" className="product__link">
                      Syltherine
                    </a>
                  </h3>
                  <a href="#" className="product__category">
                    Stylish cafe chair
                  </a>
                  <div className="product-price">
                    <span className="product-price__new">500.000</span>
                    <span className="product-price__old">$300</span>
                  </div>
                </div>
                <div className="product-actions">
                  <Link to={`/products-detail/:id`}>
                    <button className="btn product-action__quickview">
                      Quick View
                    </button>
                  </Link>
                  <Link to={`/cart`}>
                    <button className="btn product-action__addtocart">
                      Add To Cart
                    </button>
                  </Link>
                  <div className="product-actions-more">
                    <span className="product-action__share">Share</span>
                    <span className="product-action__compare">Compare</span>
                    <span className="product-action__like">Like</span>
                  </div>
                </div>
              </div> */}
              {/*End .product-item*/}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductList;
