import styled from "styled-components";

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  background: var(--pastel-mint);
  background: linear-gradient(0deg, #fff 0%, var(--pastel-mint) 100%);
`;

export default Wrapper;
