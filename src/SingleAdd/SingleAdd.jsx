import PropTypes from "prop-types";

const SingleAdd = ({ receipe, index, handlePreparing }) => {
  const { receipe_name, preparing_time, calories } = receipe;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{receipe_name}</td>
      <td>{preparing_time}</td>
      <td>{calories}</td>
      <td>
        <button
          onClick={() => handlePreparing(receipe)}
          className="btn btn-success"
        >
          Preparing
        </button>
      </td>
    </tr>
  );
};

SingleAdd.propTypes = {
  receipe: PropTypes.object,
  index: PropTypes.number,
  handlePreparing: PropTypes.func,
};

export default SingleAdd;
