import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddContact from "./components/AddContact";
import Charts from "./components/Charts";
import Layout from "./components/Layout";
import Header from "./components/Header";

function App() {
  return (
    <div className="border-4 border-bordercolor  mx-5 mt-5">


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
