import PropTypes from "prop-types";

const CurrentlyCooking = ({ currentlyCooking }) => {
  // Calculate totals
  const totalPreparationTime = currentlyCooking.reduce(
    (sum, receipe) => sum + parseInt(receipe.preparing_time, 10),
    0
  );

  const totalCalories = currentlyCooking.reduce(
    (sum, receipe) => sum + parseInt(receipe.calories, 10),
    0
  );

  return (
    <div className="mt-10 mx-5 md:mx-20">
      <p className="text-center text-2xl font-semibold mb-10">
        Currently Cooking: {currentlyCooking.length}
      </p>
      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Time (mins)</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {currentlyCooking.map((receipe, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{receipe.receipe_name}</td>
                <td>{receipe.preparing_time}</td>
                <td>{receipe.calories}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Totals Section */}
      <div className="mt-5 p-4 border rounded-lg bg-gray-100 text-center">
        <p className="text-xl font-semibold">Summary</p>
        <p className="text-lg">
          Total Preparation Time: {totalPreparationTime} mins
        </p>
        <p className="text-lg">Total Calories: {totalCalories} kcal</p>
      </div>
    </div>
  );
};

CurrentlyCooking.propTypes = {
  currentlyCooking: PropTypes.array.isRequired,
};

export default CurrentlyCooking;
