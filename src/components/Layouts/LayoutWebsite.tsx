import { Outlet } from "react-router-dom";
import { Footer, Header } from "..";

const LayoutWebsite = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutWebsite;
