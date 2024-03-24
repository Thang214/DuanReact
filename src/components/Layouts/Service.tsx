import icon10 from "@/assets/icons/10.svg";
import icon11 from "@/assets/icons/11.svg";
import icon12 from "@/assets/icons/12.svg";
import icon13 from "@/assets/icons/13.svg";
const Service = () => {
  return (
    <section className="services">
      <div className="container-fluid">
        <div className="service-list">
          <div className="service-item">
            <img src={icon10} className="service__image" />
            <div className="service-info">
              <h4 className="service__name">High Quality</h4>
              <p className="service__description">crafted from top materials</p>
            </div>
          </div>
          {/*End service-item*/}
          <div className="service-item">
            <img src={icon11} className="service__image" />
            <div className="service-info">
              <h4 className="service__name">High Quality</h4>
              <p className="service__description">crafted from top materials</p>
            </div>
          </div>
          {/*End service-item*/}
          <div className="service-item">
            <img src={icon12} className="service__image" />
            <div className="service-info">
              <h4 className="service__name">High Quality</h4>
              <p className="service__description">crafted from top materials</p>
            </div>
          </div>
          {/*End service-item*/}
          <div className="service-item">
            <img src={icon13} className="service__image" />
            <div className="service-info">
              <h4 className="service__name">High Quality</h4>
              <p className="service__description">crafted from top materials</p>
            </div>
          </div>
          {/*End service-item*/}
        </div>
      </div>
    </section>
  );
};

export default Service;
