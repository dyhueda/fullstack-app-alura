import styled from "styled-components";
const OptionsContainer = styled.ul`
  display: flex;
`;
const OptionContainer = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;
export default function HeaderOptions() {
  const options = ["Categories", "Favorites", "Bookcase"];
  return (
    <OptionsContainer>
      {options.map((option) => (
        <OptionContainer key={option}>
          <p>{option}</p>
        </OptionContainer>
      ))}
    </OptionsContainer>
  );
}
