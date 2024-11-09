import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import { useState } from "react";
import { data } from "./data";

function App() {
  const [tour, setTour] = useState(data);

  function removeTour(id) {
    const newTour = tour.filter((tour) => tour.id !== id);
    setTour(newTour);
  }

  return (
    <div className="App">
      <Card tour={tour} removeTour={removeTour} />
    </div>
  );
}

export default App;
