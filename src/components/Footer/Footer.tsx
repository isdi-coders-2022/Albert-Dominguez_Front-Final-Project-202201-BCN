import styled from "styled-components";

const Futer = styled.footer`
  display: flex;
  position: fixed;
  width: 100vw;
  justify-content: center;
  background-color: #f37370;
  align-items: center;
  color: white;
  height: 15vh;
  bottom: 0;
  overflow: scroll;
  box-shadow: 0px 0px 10px white;
`;
const Image = styled.img`
  height: 90%;
`;

const Footer = (): JSX.Element => {
  return (
    <Futer>
      <Image src={require("../../logo.png")} alt="Nicest Shrink Logo" />
    </Futer>
  );
};

export default Footer;
