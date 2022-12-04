import PropTypes from 'prop-types';

export const ContactElem = ({ id, name, number, onDelete }) => {
  return (
    <li key={id}>
      <div>
        <p>{name}:</p>
        <p>{number}</p>
      </div>
      <button onClick={() => onDelete(id)} type="button">
        Delete
      </button>
    </li>
  );
};

ContactElem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
