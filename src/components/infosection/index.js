import React from 'react'
import { Button } from '../Button/Button'
import { MdSlowMotionVideo } from 'react-icons/md'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from './InfoElements'

const InfoSection = ({  lightBg, 
                        id, 
                        imgStart, 
                        topLine, 
                        lightText, 
                        headLine, 
                        darkText, 
                        description, 
                        buttonLabel,
                        img, 
                        alt,
                        primary,
                        dark,
                        dark2
    }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                <Button buttonStyle="btn--medium" to='customerAccess'>
                        {buttonLabel} <MdSlowMotionVideo/>
                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
