import { IHeaderProps } from "../interfaces/HeaderInterface";

const Header = ({ title }: IHeaderProps) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
