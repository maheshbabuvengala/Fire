import "./App.css";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Transactions from "./pages/Transactions/Transactions";
import Payment from "./pages/Payment/Payment";
// import Payment from "./pages/Payment/Paymentsquad";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Terms from "./pages/Terms";
import EditInfo from "./pages/EditInfo/EditInfo";
import Paymentsquad from "./pages/Payment/Paymentsquad";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/paymentsquad" element={<Paymentsquad />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/terms" element={<Terms />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/profile" element={<EditInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
