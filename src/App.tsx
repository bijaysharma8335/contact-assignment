import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Dashboard from "./components/Charts";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="border-4 border-bordercolor  mt-5 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl sm:ms-1 lg:mx-auto md:mx-auto shadow-lg w-auto ">
      <Header />
      <div className=" flex h-[400px]">
        <Router>

          <Sidebar />
          <Routes>
            {/* <Route path='/' element={<Layout />}> */}
            <Route path='/' element={<Contact />} />
            <Route path='/charts' element={<Dashboard />} />
            {/* </Route> */}

          </Routes>
        </Router>
      </div>




    </div>
  );
}

export default App;
