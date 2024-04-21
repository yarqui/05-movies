import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

const Button = ({ type, label, onClick }) => {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {label}
    </ButtonStyled>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
