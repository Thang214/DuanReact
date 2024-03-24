import { Footer, Header } from "..";

import { Outlet } from "react-router-dom";
const LayoutAdmin = () => {
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

export default LayoutAdmin;
