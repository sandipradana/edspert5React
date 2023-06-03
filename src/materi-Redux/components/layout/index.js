import { Button } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Ini merupakan layout halaman yand dirender semua page</p>
      <div style={{ display: "flex", gap: "8px" }}>
        <Button onClick={() => navigate("/")}>Product</Button>
        <Button onClick={() => navigate("/detail/1")}>Detail</Button>
        <Button onClick={() => navigate("/checkout")}>Checkout</Button>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
