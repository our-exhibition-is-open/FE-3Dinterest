import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 7px; 
`;

const Title = styled.div`
  color: #000000;
  font-family: "SF-Pro-Rounded-Regular";
  font-size: 0.85rem;
  font-weight: 200;
  letter-spacing: 0.02625rem;

  padding-left: 4px;
`;

export const InputStyled = styled.input`
  border-radius: 1rem;
  border-style: solid;
  border-width: 2px;
  border-color: #c2c2c2;

  width: 100%;
  height: 3rem;
  padding-left: 1rem;
`;

export function UploadInputComponent() {
  return (
    <>
      <Container>
        <Title>Title</Title>
        <InputStyled placeholder="Add a title" />
      </Container>
    </>
  );
}
