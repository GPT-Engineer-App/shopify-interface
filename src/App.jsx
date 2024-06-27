import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Product from "./pages/Product.jsx";
import PurchaseHistory from "./pages/PurchaseHistory.jsx";
import ProductUpload from "./pages/ProductUpload.jsx";
import PurchaseRecord from "./pages/PurchaseRecord.jsx";
import TrafficReport from "./pages/TrafficReport.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/purchase-history" element={<PurchaseHistory />} />
        <Route exact path="/product-upload" element={<ProductUpload />} />
        <Route exact path="/purchase-record" element={<PurchaseRecord />} />
        <Route exact path="/traffic-report" element={<TrafficReport />} />
      </Routes>
    </Router>
  );
}

export default App;