import PropTypes from "prop-types";
import { CiStopwatch } from "react-icons/ci";
import { FaFire } from "react-icons/fa";

const SingleReceipe = ({ receipe, handleReceipeAdd }) => {
  const {
    img,
    receipe_name,
    description,
    ingredients,
    preparing_time,
    calories,
  } = receipe;

  return (
    <div className=" border-2 p-8 rounded-lg">
      <img className="rounded-lg mb-5" src={img} alt="" />
      <p className="text-2xl font-semibold mb-4">{receipe_name}</p>
      <p className="text-gray-500">{description}</p>

      <div className="divider"></div>
      <div>
        <p className="text-2xl font-semibold mb-4">
          Total Ingredients: {ingredients.length}
        </p>
        <ol className="text-gray-500 mb-4">
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              {index + 1}. {ingredient}
            </li>
          ))}
        </ol>

        <div className="divider"></div>
      </div>
      <div className="flex gap-5">
        <p className="flex items-center text-gray-500">
          <button className="mr-2">
            <CiStopwatch />
          </button>
          {preparing_time}
        </p>
        <p className="flex items-center text-gray-500">
          <button className="mr-2">
            <FaFire />
          </button>
          {calories}
        </p>
      </div>

      <center className="mt-16">
        <button
          onClick={() => handleReceipeAdd(receipe)}
          className="btn btn-active btn-accent"
        >
          Watch To Cook
        </button>
      </center>
    </div>
  );
};

SingleReceipe.propTypes = {
  receipe: PropTypes.object,
  handleReceipeAdd: PropTypes.func,
};

export default SingleReceipe;
