import { IHeaderProps } from "../interfaces/HeaderInterface";
import { HeaderContainer } from "./styled-components/headerStyled";

const Header = ({ title }: IHeaderProps) => {
  return (
    <>
      <HeaderContainer>
        <h1>{title}</h1>
      </HeaderContainer>
    </>
  );
};

export default Header;
