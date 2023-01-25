import styled from "styled-components";

const StyledButton = styled.button`
  appearance: none;
  border: none;
  font-family: "Press Start";
  font-size: 0.7rem;
  color: #fff;
  background: var(--pc-body);
  width: fit-content;
  padding: 0.3rem;
  box-shadow: 0 4px var(--pc-outline), 0 -4px var(--pc-outline),
    4px 0 var(--pc-outline), -4px 0 var(--pc-outline);

  &:hover {
    background: white;
    color: var(--pc-body);
  }
`;

function Button({ children, type, onClick }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
