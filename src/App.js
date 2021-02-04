import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import MainPage from "./MainPage";
import Detail from "./Detail";
import Navbar from "./Navbar";
import { Router } from "@reach/router";


function App() {
    return (
        <div className="main-content">
            <div>
                <Navbar/>
            </div>
            <Router>
                <MainPage path="/"/>
                <Detail path="/detail/:id"/>
            </Router>
            <Footer />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));