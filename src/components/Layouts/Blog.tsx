import blog1 from "@/assets/uploads/blog 1.svg";
import blog2 from "@/assets/uploads/blog 2.svg";
import blog3 from "@/assets/uploads/blog 3.svg";
const Blog = () => {
  return (
    <section className="blog">
      <div className="container">
        <div className="section-heading section-blog-heading">
          <h2 className="section-heading__title">Blog</h2>
        </div>
        <div className="section-body">
          <div className="post-list">
            <div className="post-item">
              <div className="post-image">
                <a href="#">
                  <img src={blog1} alt="#" className="post__thumbnail" />
                </a>
              </div>
              <div className="post-info">
                <h3 className="post__title">
                  <a href="#" className="post__link">
                    THE ULTIMATE SOFA BUYING GUIDE
                  </a>
                </h3>
                <p className="post__excerpt">
                  The versatility of our living space is more crucial than ever.
                  But buying a sofa might be a difficult undertaking. Your needs
                  and the size of your living area will determine everything,
                  However, don’t worry, were are here to help you
                </p>
                <a href="#" className="post__readmore">
                  Readmore
                </a>
              </div>
            </div>
            {/*End .post-item*/}
            <div className="post-item">
              <div className="post-image">
                <a href="#">
                  <img src={blog2} alt="#" className="post__thumbnail" />
                </a>
              </div>
              <div className="post-info">
                <h3 className="post__title">
                  <a href="#" className="post__link">
                    THE ULTIMATE SOFA BUYING GUIDE
                  </a>
                </h3>
                <p className="post__excerpt">
                  The versatility of our living space is more crucial than ever.
                  But buying a sofa might be a difficult undertaking. Your needs
                  and the size of your living area will determine everything,
                  However, don’t worry, were are here to help you
                </p>
                <a href="#" className="post__readmore">
                  Readmore
                </a>
              </div>
            </div>
            {/*End .post-item*/}
          </div>
        </div>
        <div className="section-body">
          <div className="post-list">
            <div className="post-item">
              <div className="post-image">
                <a href="#">
                  <img src={blog3} alt="#" className="post__thumbnail" />
                </a>
              </div>
              <div className="post-info">
                <h3 className="post__title">
                  <a href="#" className="post__link">
                    THE ULTIMATE SOFA BUYING GUIDE
                  </a>
                </h3>
                <p className="post__excerpt">
                  The versatility of our living space is more crucial than ever.
                  But buying a sofa might be a difficult undertaking. Your needs
                  and the size of your living area will determine everything,
                  However, don’t worry, were are here to help you
                </p>
                <a href="#" className="post__readmore">
                  Readmore
                </a>
              </div>
            </div>
            {/*End .post-item*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
