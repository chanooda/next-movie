import { IHeaderProps } from "../interfaces/HeaderInterface";

const Header = ({ title }: IHeaderProps) => {
  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>
      <style jsx>{`
        header {
          margin-bottom: 15px;
          height: 70px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 25px;
          font-weight: bold;
        }
        h1 {
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Header;
