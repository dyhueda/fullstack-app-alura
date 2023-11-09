import profile from "../../images/profile.svg";
import cart from "../../images/cart.svg";
import styled from "styled-components";

export default function HeaderIcons() {
  const IconsContainer = styled.ul`
    display: flex;
    align-items: center;
  `
  const IconContainer = styled.li`
        margin-right: 40px;
    width: 25px;

    `

  const icons = [profile, cart];

  return (
    <IconsContainer>
      {icons.map((icon) => (
        <IconContainer key={icon}>
          <img src={icon} alt={icon}></img>
        </IconContainer>
      ))}
    </IconsContainer>
  );
}
