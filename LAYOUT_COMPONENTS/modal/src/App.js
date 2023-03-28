import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal";
import Button from "./components/Button";
import Button2 from "./components/Button2";

function App() {
  const [shouldOpen, setShouldOpen] = useState(true);

  const closeModal = () => {
    setShouldOpen(false);
  };

  const openModal = () => {
    setShouldOpen(true);
  };

  const clickMe = () => {
    setShouldOpen(true);
  };
  return (
    <div className="App">
      <Button openHandler={openModal} hexColor="#00FA9A" text="Open" />

      <Button2 clickHandler={clickMe} />

      <Modal
        className="z-50"
        shouldOpen={shouldOpen}
        closeHandeler={closeModal}
      />
    </div>
  );
}

export default App;
