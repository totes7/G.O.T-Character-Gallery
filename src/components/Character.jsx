import PropTypes from "prop-types";

const Character = ({ name, imgUrl, birth, death, race, realm, spouse }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} />
      <ul>
        <li>Date of Birth: {birth}</li>
        <li>Date of Death: {death}</li>
        <li>Race: {race}</li>
        <li>Realm: {realm}</li>
        <li>Spouse: {spouse}</li>
      </ul>
    </div>
  );
};

// Character.propTypes = {
//   name: PropTypes.string,
//   imageUrl: PropTypes.string,
//   birth: PropTypes.string,
//   death: PropTypes.string,
//   race: PropTypes.string,
//   realm: PropTypes.string,
//   spouse: PropTypes.string,
// };

export default Character;
