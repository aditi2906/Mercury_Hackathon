import React from 'react'
import styled from 'styled-components';
import { InnerPageContainer, PageContainer } from '../../components/pageContainer'
import { AccountBox } from '.';
import Footer from "../Footer/Footer.js"
import { Element } from 'react-scroll';
import { Marginer } from '../marginer';
import { AccountNavbar } from '../AccountNavbar';





const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 0em;
`;
const UserPageContainer =styled.div `
 width: 100%;
  height: 200vh;
  padding: 0;
  background-color:#fff;
  position: relative;`

export default function customerAccessPage() {
  return (
    <>

    
<UserPageContainer>
<AccountNavbar/>
        <StyledInnerContainer>
        
        <Marginer direction="vertical" margin="4em"/>
         
          <AccountBox  />
        </StyledInnerContainer>
        <Marginer direction="vertical" margin="4em"/>
        <Footer />
</UserPageContainer>
        
    </>
  )
}
