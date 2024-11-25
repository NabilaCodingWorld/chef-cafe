import { useState } from "react";
import AddMark from "./AddMark/AddMark";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import Receipe from "./Receipe/Receipe";
import ReceipeTitle from "./ReceipeTitle/ReceipeTitle";
import CurrentlyCooking from "./CurrentlyCooking/CurrentlyCooking";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [receipes, setReceipes] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  const handleReceipeAdd = (receipe) => {
    if (receipes.some((r) => r.receipe_id === receipe.receipe_id)) {
      toast.error("This recipe is already added!");
    } else {
      setReceipes([...receipes, receipe]);
      toast.success("Recipe added successfully!");
    }
  };

  const handlePreparing = (receipe) => {
    setReceipes(receipes.filter((r) => r.receipe_id !== receipe.receipe_id));
    setCurrentlyCooking([...currentlyCooking, receipe]);
    toast.success("Recipe moved to Currently Cooking!");
  };

  return (
    <div>
      <Navbar />
      <Banner />
      <ReceipeTitle />
      <div className="grid md:grid-cols-2">
        <Receipe handleReceipeAdd={handleReceipeAdd} />
        <div>
          <AddMark receipes={receipes} handlePreparing={handlePreparing} />
          <CurrentlyCooking currentlyCooking={currentlyCooking} />
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default App;
