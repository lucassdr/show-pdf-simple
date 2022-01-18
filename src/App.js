import React from "react";
import SinglePage from "./components/pdf/single-page";
import AllPages from "./components/pdf/all-pages";

import samplePDF from './sample.pdf'
import "./styles.css"

export default function App() {
  return (
    <div className="App">
      <h4>Single Page</h4>
      <SinglePage pdf={samplePDF} />

      <hr />

      <h4>All pages</h4>
      <div className="all-pages-container">
        <AllPages pdf={samplePDF} />
      </div>

      <hr />

    </div>
  )
}