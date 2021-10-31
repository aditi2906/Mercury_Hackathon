import React from 'react'
import Icon1 from '../../images/upcoming1.png'
import Icon2 from '../../images/upcoming2.png'
import Icon3 from '../../images/upcoming3.jpg'
import {
    UpcomingContainer,
    UpcomingH1,
    UpcomingWrapper,
    UpcomingCard,
    UpcomingIcon,
    UpcomingH2,
    UpcomingP
} from './UpcomingElements'

const Upcoming = () => {
    return (
        <UpcomingContainer id="Upcoming">
            <UpcomingH1>Our Upcoming Ventures</UpcomingH1>
            <UpcomingWrapper>
                <UpcomingCard>
                    <UpcomingIcon src={Icon1}/>
                    <UpcomingH2>Three-D NFTS</UpcomingH2>
                    <UpcomingP>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</UpcomingP>
                </UpcomingCard>
                <UpcomingCard>
                    <UpcomingIcon src={Icon2}/>
                    <UpcomingH2>AR/VR Twist</UpcomingH2>
                    <UpcomingP>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</UpcomingP>
                </UpcomingCard>
                <UpcomingCard>
                    <UpcomingIcon src={Icon3}/>
                    <UpcomingH2>Connect to Digitial Artists</UpcomingH2>
                    <UpcomingP>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</UpcomingP>
                </UpcomingCard>
            </UpcomingWrapper>
        </UpcomingContainer>
    )
}

export default Upcoming
