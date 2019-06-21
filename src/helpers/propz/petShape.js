import PropTypes from 'prop-types';

const petShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  isBoarded: PropTypes.bool.isRequired,
  notes: PropTypes.string.isRequired,
});

export default { petShape };
