import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Preloader from "./layout/Preloader";
const Home = lazy(() => import("./ui/Home"));
const Career = lazy(() => import("./ui/Career"));
const Contact = lazy(() => import("./ui/Contact"));
const About = lazy(() => import("./ui/About"));
const Service = lazy(() => import("./ui/Service"));
const NoPage = lazy(() => import("./layout/NoPage"));
const BusinessEdition = lazy(() => import("./ui/BusinessEdition"));
const CustomEdition = lazy(() => import("./ui/CustomEdition"));
const SocialEdition = lazy(() => import("./ui/SocialEdition"));
function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Service />} />
            {/* <Route path="careers" element={<Career />} /> */}
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
            <Route
              path="services/BusinessEdition"
              element={<BusinessEdition />}
            />
            <Route path="services/CustomEdition" element={<CustomEdition />} />
            <Route path="services/SocialEdition" element={<SocialEdition />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
