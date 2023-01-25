import styled from "styled-components";

const DisclaimerText = styled.span`
  padding: 0.5rem;
  font-size: 0.5rem;
  align-self: flex-start;
`;

const DisclaimerLink = styled.a`
  text-decoration: none;
`;

function Disclaimer() {
  return (
    <DisclaimerText>
      Assets by{" "}
      <DisclaimerLink href="https://kenney.nl/">Kenney</DisclaimerLink>
    </DisclaimerText>
  );
}

export default Disclaimer;
