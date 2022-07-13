import Link from "next/link";
import { IHeaderProps } from "../interfaces/HeaderInterface";
import { Back, HeaderContainer } from "./styled-components/headerStyled";

const Header = ({ title }: IHeaderProps) => {
  return (
    <>
      <HeaderContainer>
        {title ? (
          <h1>{title}</h1>
        ) : (
          <Link href="/">
            <Back>
              <span>{`<-`}</span>
            </Back>
          </Link>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
