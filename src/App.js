import Petsim from './components/Petsim'
// import Home from './components/Home'
// import {
//   BrowserRouter as Router, Routes, Route, Link
// } from 'react-router-dom'


const footerStyle = {
  position: "fixed",
  left: 0,
  bottom: 0,
  width: "100%",
  textAlign: "center"
}


const App = () => {

  return (
    <div>
    {/* // <Router> */}
      {/* <div>
        <Link to="/">home</Link>
        <Link to="/petsim">petsim</Link>
      </div> */}
{/* 
      <Routes>
        <Route path="/petsim" element={<Petsim />} />
        <Route path="/" element={<Home />} />
      </Routes> */}

      <div>
        <Petsim></Petsim>
      </div>

      <div style={footerStyle}>
        <i>Lumikasa 2025</i>
      </div>

    {/* </Router> */}
    </div>
  );
}

export default App;
