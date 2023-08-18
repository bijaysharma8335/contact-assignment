import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddContact from "./components/AddContact";
import Charts from "./components/Charts";
import Layout from "./components/Layout";
import Header from "./components/Header";

function App() {
  return (
    <div className="border-4 border-bordercolor  mt-5 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl sm:ms-1 lg:mx-auto md:mx-auto shadow-lg">


      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<AddContact />} />
            <Route path='/charts' element={<Charts />} /></Route>

        </Routes>
      </Router>





    </div>
  );
}

export default App;
