import "./App.css";
import React, { useState } from 'react'
import RadioButton from "./components/RadioButton/RadioButton";

function App() {

  const [selected, setSelected] = useState(null)

  const [data] = useState([
    { title: "ROG", color: "#3f51b5" },
    { title: "TUF", color: "#673ab7" },
    { title: "Katana", color: "#009688" },
    { title: "Legion", color: "#cddc39" },
    { title: "ProArt", color: "#ffc107" },
  ])

  return (
    <div className="body">
      <div className="app-container">
        <h2>Select your option</h2>
        <div className="radio-main-container" style={{'--radio-count': `${data.length}`}}>
          {data.map((item) => {
            return <RadioButton key={item.title} {...item} selected={selected} setSelected={setSelected}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default App