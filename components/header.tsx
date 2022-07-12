import { IHeaderProps } from "../interfaces/HeaderInterface";
import { HeaderContainer } from "../styles/heading";

const Header = ({ title }: IHeaderProps) => {
  return (
    <HeaderContainer>
      <h1>{title}</h1>
    </HeaderContainer>
  );
};

export default Header;
