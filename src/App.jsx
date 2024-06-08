import "./App.css";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Transactions from "./pages/Transactions/Transactions";
// import Payment from "./Pages/Payment";
// import ContactUs from "./Pages/ContactUs";
// import PrivacyPolicy from "./Pages/PrivacyPolicy";
// import TermsAndConditions from "./Pages/TermsAndConditions";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          {/* <Route path="/payment" element={<Payment />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
