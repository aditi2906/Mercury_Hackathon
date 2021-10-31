import {React,useState} from "react";
import Particles from "react-particles-js"
import ParticleConfig from "./particle-config"
import './ParticleBackground.css';
import vid from "../../video/bgvid.mp4"
import { FirstContainer, VideoBg  } from "./ParticleElement";
import { Button } from "../Button/Button";
import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'
import {MdSlowMotionVideo} from 'react-icons/md';


export const HeroBtnWrapper = styled.div`
    margin-top: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
function CenterTitle() {
    return (
      <div id="text_div center_all">
        <div className="center_all">
          <h1 class="custom-subTitle">NFTgram</h1>
          <h2 className ="subhead">Your one stop destination for the cool and trendy NFTs!</h2>
          
                    <Button buttonStyle="btn--medium" to="customerAccess">
                        Get Started <MdSlowMotionVideo/>
                    </Button>
                
        </div>
      </div>
    );
  }
  export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`

export default function ParticleBackground() {
  const Hero = () => {
    const [hover, setHover] = useState(false)
  
    const onHover = () => {
        setHover(!hover)
    }
  }
    return (
        <>
          
        <Particles params={ParticleConfig}></Particles>
        <CenterTitle/>
      
        
        </>

    );

}