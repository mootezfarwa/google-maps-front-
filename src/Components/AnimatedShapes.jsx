import styled from "styled-components";

const Square = styled.div`
width:60px;
height:60px;
background:#046eaf;

position:absolute;
bottom:0px;
right:0px;
z-index:-1;
animation : square 25s linear alternate infinite;
@keyframes square {
    to{
        transform: translate(-100vw,-100vh);
    }
}
`
const Circle = styled.div`
width:100px;
height:100px;
border-radius:50%;
background:#0e4e78;

position:absolute;
top:200px;
right:-10px;
z-index:-1;
animation : circle 25s linear alternate infinite;
@keyframes circle {
    to{
        transform:translate(-100vw,10vh);
    }
}
`
const Rect = styled.div`
width:50px;
height:100px;
background:#ef7807;

position:absolute;
top:400px;
left:-50px;
z-index:-1;
animation : rect 30s linear alternate infinite;
@keyframes rect {
    to{
        transform:translate(100vw,-50vh);
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