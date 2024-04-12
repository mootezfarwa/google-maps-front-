import styled from "styled-components";
import squareImage from '/workspaces/google-maps-front-/src/assets/Produits-avocarbon-1.png'; 
import sealsImage from '/workspaces/google-maps-front-/src/assets/4.png'; 
import brushImage from '/workspaces/google-maps-front-/src/assets/2.png';
const Square = styled.div`
  width: 120px;
  height: 120px;
  background-image: url(${squareImage});
  background-size: cover;
  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: -1;
  animation: moveSquare 25s linear alternate infinite;

  @keyframes moveSquare {
    to {
      transform: translate(-100vw, -100vh);
    }
  }
`
const Circle = styled.div`
width: 120px;
height: 120px;
background-image: url(${sealsImage});
background-size: cover;
position: absolute;
bottom: 0px;
right: 0px;
z-index: -1;
animation: moveSquare 25s linear alternate infinite;

@keyframes moveSquare {
  to {
    transform: translate(-100vw, -100vh);
  }
}
`
const Rect = styled.div`
width: 120px;
height: 120px;
background-image: url(${brushImage});
background-size: cover;
position: absolute;
bottom: 0px;
right: 0px;
z-index: -1;
animation: moveSquare 25s linear alternate infinite;

@keyframes moveSquare {
  to {
    transform: translate(-100vw, -100vh);
  }
}
`

const AnimatedShapes = () => {
    return (
        <>
            <Square />
            <Circle />
            <Rect />
        </>
    );
}
export default AnimatedShapes;