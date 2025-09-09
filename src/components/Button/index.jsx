import { ButtonRed, ButtonWhite,ButtonFechar } from "./styles";

function Button({ children, red, ...rest }) {
  return (
    <>
      {red ? (
        <ButtonRed {...rest}>{children}</ButtonRed>
      ) : (
        <ButtonWhite {...rest}>{children}</ButtonWhite>
      ) }

      <ButtonFechar></ButtonFechar>
    </>
  );
}

export default Button;
