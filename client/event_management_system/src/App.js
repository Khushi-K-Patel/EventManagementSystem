import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ResetPassword from "./Pages/Auth/ResetPassword";
import Contactus from "./Pages/Contactus";
import About from "./Pages/About";
import Category from "./Pages/Admin/Category";
import Event from "./Pages/Admin/Event";
import OurWork from "./Pages/OurWork";
import UpdateEvent from "./Pages/Admin/UpdateEvent";
import ClientMessage from "./Pages/Admin/ClientMessage";
import DetailWork from "./Pages/DetailWork";
import Service from "./Pages/Service";
import Venue from "./Pages/service/Venue";
import Decoration from "./Pages/service/Decoration";
import PagenotFound from "./Pages/PagenotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/about" element={<About />} />
        <Route path="/category" element={<Category />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/update-delete/:eid" element={<UpdateEvent />} />
        <Route path="/client-message" element={<ClientMessage />} />
        <Route path="/ourwork" element={<OurWork />} />
        <Route path="/ourwork/:eid" element={<DetailWork />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/venue" element={<Venue />} />
        <Route path="/service/decoration" element={<Decoration />} />
        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </>
  );
}

export default App;
