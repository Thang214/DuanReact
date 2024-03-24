import { ProductList } from ".";
import "@/style/detail.scss";
import "@/style.scss";
const Detail = () => {
  return (
    <div>
      <div>
        <div className="product-container">
          <div className="product-image">
            {/* Replace # with the actual image source */}
            <img
              src="https://picsum.photos/id/10/1440/500"
              alt="Product Image"
            />
          </div>
          <div className="product-info">
            <h2 className="product-name">Asgaard Sofa</h2>
            <p className="product-price">25.000.000₫</p>
            <p className="product-reviews">5 Customer Reviews</p>
            <div className="product-description">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended lights for a
              sound.
            </div>
            <div className="product-size-color">
              <p>
                Size: <span className="select">L</span>
                <span className="sizehihi">XL</span>
                <span className="sizehihi">XS</span>
              </p>
              <p>Color:</p>
              <select>
                {/* Add more color options as needed */}
                <option value="default">Default</option>
              </select>
            </div>
            <div className="product-btn">
              <button className="my-button">
                <span className="symbol minus">-</span>
                <span className="label">0</span>
                <span className="symbol plus">+</span>
              </button>
              <button className="add-to-cart">Add To Cart</button>
              <button className="compare">Compare</button>
            </div>
            <div className="product-card">
              <div className="product-card-item">
                <div className="product-card-name">SKU</div>
                <div className="product-card-name">Category</div>
                <div className="product-card-name">Tags</div>
                <div className="product-card-name">Share</div>
              </div>
              <div className="product-card-item">
                <div className="product-card-name">: SS001</div>
                <div className="product-card-name">: Sofas</div>
                <div className="product-card-name">
                  : Sofa, Chair, Home, Shop
                </div>
                <div className="product-card-name">: Share</div>
              </div>
            </div>
          </div>
        </div>
        <section className="product-description">
          <div className="container">
            <div className="product-description-item">
              <div className="product-description-tab product-description-tab-active">
                <p>Description</p>
              </div>
              <div className="product-description-tab">
                <p>Additional Information</p>
              </div>
              <div className="product-description-tab">
                <p>Reviews [5]</p>
              </div>
            </div>
            <div className="product-description-content">
              <p>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road. Weighing in under 7 pounds, the Kilburn is a lightweight
                piece of vintage styled engineering. Setting the bar as one of
                the loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </p>
              <div className="product-description-content-img">
                <img
                  src="https://s3-alpha-sig.figma.com/img/b739/5be5/3f5927c3cf50e945c3e0f03b3206e810?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A45QA5yyNnbUX7xQS4-FTyHiZCV870xiYfAF-uEbA-itQlQuVOoERSQfJSzh74so8UhgKWuy3l8QXc2gh-7VzmiePNR8V2DOkpLv3GueiuAGlerHDjd9fUPSAM8VDjiJOEj5WhU0s6eBg81GTe6EWmWz3ZEEzG5RvnEoNc332rkYkQmIzSO07YEQ43cSSDc6AiuPbGpvLQ86eSxMUIPG5-h2rhWPvGiJ4WEao6SLAH6MtvfDE-8mKaVvo6EmPjYz5KsioRhtCC6Og82DyW~3qiR~lWhrvKSovvbbw-YdcX1OoJXZcNdeCafyF4GnRrE94hYoh3KrfrObVnwNsh~StA__"
                  alt="#"
                />
                <img
                  src="https://s3-alpha-sig.figma.com/img/b739/5be5/3f5927c3cf50e945c3e0f03b3206e810?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A45QA5yyNnbUX7xQS4-FTyHiZCV870xiYfAF-uEbA-itQlQuVOoERSQfJSzh74so8UhgKWuy3l8QXc2gh-7VzmiePNR8V2DOkpLv3GueiuAGlerHDjd9fUPSAM8VDjiJOEj5WhU0s6eBg81GTe6EWmWz3ZEEzG5RvnEoNc332rkYkQmIzSO07YEQ43cSSDc6AiuPbGpvLQ86eSxMUIPG5-h2rhWPvGiJ4WEao6SLAH6MtvfDE-8mKaVvo6EmPjYz5KsioRhtCC6Og82DyW~3qiR~lWhrvKSovvbbw-YdcX1OoJXZcNdeCafyF4GnRrE94hYoh3KrfrObVnwNsh~StA__"
                  alt="#"
                />
              </div>
            </div>
          </div>
        </section>
        <ProductList />
      </div>
    </div>
  );
};

export default Detail;
