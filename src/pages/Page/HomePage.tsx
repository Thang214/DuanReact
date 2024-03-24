import { Banner, Blog, Service, Shop, ProductList } from "@/components";

const HomePage = () => {
  return (
    <>
      <Banner />
      <ProductList />
      <div className="container">
        <hr />
      </div>
      <Shop />
      <Blog />
      <Service />
    </>
  );
};

export default HomePage;
