import styled from "styled-components";
import woman from "../assets/pngegg.png"
import AnimatedShapes from "./AnimatedShapes";
import { ImTextColor } from "react-icons/im";
import { MdEmail } from "react-icons/md";
const Intro = () => {
  const smallScreen = window.screen.width <= 480 ? true : false;
  
  return (
    <Container>
      <Left>
        <Title>
          <span style={{ color: '#046eaf',fontStyle: 'italic' }}>AVO</span>
          <span style={{ color: 'gray',fontStyle: 'italic' }}>Carbon</span> 
          <span style={{ color: '#ef7807' ,fontSize: '24px',fontStyle: 'italic'}}>Group</span> 
        </Title>
        <Desc>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
          <ContactText>For any question or concern</ContactText>
            <Email>Contact Us<br></br> taha.khiari@avocarbon.com<br></br>mootaz.farwa@avocarbon.com</Email>
            <ContactText>Powred By Same Tunisie Service</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right><img src={woman} alt="Woman" style={{  marginTop: '180px' }} /></Right>
      <AnimatedShapes />
    </Container>
  );

}
const Container = styled.div`
height:calc(100vh - 50px);
display:flex;
padding:20px
`;

const Left = styled.div`
width:60%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;

const Title = styled.h1`
font-size:60px;
width:60%;
  @media only screen and (max-width: 480px) {
font-size:40px;
width: 100%;
  }
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 60%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:50px;
  
  @media only screen and (max-width: 480px) {
    flex-direction:column;
  }

`;
const Button = styled.button`
cursor:pointer;
padding:1rem; 
background:darkblue;
color:snow; 
border-radius:10px;
letter-spacing:2px
`;

const Contact = styled.div`
display:flex;
flex-direction:column;
@media only screen and (max-width: 480px) {
  display:none;
 }
`;

const Email = styled.span`
color:#ef7807;
`;

const ContactText = styled.span`
color:gray;
margin-top:5px;
`;

const Right = styled.div`
width:40%;
`;

const Image = styled.img`
width:50rem;
position:absolute;
bottom:0;
right:0%;

@media only screen and (max-width: 880px) {
  right:-20%;
 };

`;

export default Intro;