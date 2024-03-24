import "@/style.scss";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutAdmin from "./components/Layouts/LayoutAdmin";
import LayoutWebsite from "./components/Layouts/LayoutWebsite";
import {
  AboutPage,
  ContactPage,
  HomePage,
  NotFound,
  ProductDetail,
} from "./pages";
import Product from "./components/Admin/Product";
import ProductAdd from "./components/Admin/ProductAdd";
import ProductEdit from "./components/Admin/ProductEdit";
import CartPage from "./pages/Page/CartPage";
import CheckoutPage from "./pages/Page/CheckKoutPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<HomePage />} />
          {/* <Route path="shop" element={<ShopPage />} /> */}
          <Route path="products-detail/:id" element={<ProductDetail />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="admin" element={<LayoutAdmin />}>
          <Route path="products/add" element={<ProductAdd />} />
          <Route path="products/:id/edit" element={<ProductEdit />} />
          <Route path="products" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
