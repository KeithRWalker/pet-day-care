import PropTypes from 'prop-types';

const staffShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  currentEmp: PropTypes.bool.isRequired,
});

export default { staffShape };
