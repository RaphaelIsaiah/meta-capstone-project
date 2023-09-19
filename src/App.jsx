import React from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

function App() {
  return (
    // I had used React.Fragment here with the className and it was not responding to the styling
 
    <>
    <div className="Container">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
    </>
  );
}

export default App;
