import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import SingleReceipe from "../SingleReceipe/SingleReceipe";

const Receipe = ({ handleReceipeAdd }) => {
  const [receipes, setReceipes] = useState([]);

  useEffect(() => {
    fetch("receipe.json")
      .then((res) => res.json())
      .then((data) => setReceipes(data));
  }, []);

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-10 mx-10">
        {receipes.map((receipe) => (
          <SingleReceipe
            receipe={receipe}
            key={receipe.receipe_id}
            handleReceipeAdd={handleReceipeAdd}
          ></SingleReceipe>
        ))}
      </div>
      <br />
    </div>
  );
};

Receipe.propTypes = {
  handleReceipeAdd: PropTypes.func,
};

export default Receipe;
