import SingleAdd from "../SingleAdd/SingleAdd";
import PropTypes from "prop-types";

const AddMark = ({ receipes, handlePreparing }) => {
  return (
    <div>
      <p className="text-center text-2xl font-semibold mb-10">
        Want To Cook: {receipes.length}
      </p>

      <div className="mx-20">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {receipes.map((receipe, index) => (
              <SingleAdd
                key={index}
                receipe={receipe}
                index={index}
                handlePreparing={handlePreparing}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

AddMark.propTypes = {
  receipes: PropTypes.array,
  handlePreparing: PropTypes.func,
};

export default AddMark;
