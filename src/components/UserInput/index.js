import styled from "styled-components";
import Button from "../Button";

const Form = styled.form`
  color: var(--pc-outline);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  height: 1rem;
  border: none;
  outline: none;
`;

const StyledBox = styled.div`
  margin: 0;
  line-height: normal;
  width: fit-content;
  padding: 0.2rem;
  background: #fff;
  box-shadow: 0 4px var(--pc-outline), 0 -4px var(--pc-outline),
    4px 0 var(--pc-outline), -4px 0 var(--pc-outline);
`;

export default function UserInput({ onSubmit, onChange, inputValue }) {
  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor="web-dev-subject">Keywords</label>
      <StyledBox>
        <Input
          type="text"
          id="web-dev-subject"
          value={inputValue}
          onChange={(event) => onChange(event.target.value)}
        />
      </StyledBox>

      <Button type="submit">memorize</Button>
    </Form>
  );
}
