import React from 'react'
import { SidebarContainer } from './SidebarElements'
import { Icon } from './SidebarElements'
import { CloseIcon } from './SidebarElements'
import { SidebarWrapper, SidebarLink, SidebtnWrap,SidebarRoute, SidebarMenu } from './SidebarElements'

function Sidebar({isOpen,toggle}) {
    return (
        <>
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon>

            </CloseIcon>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
            <SidebarLink to="Home" onClick={toggle}>
                    Home
                </SidebarLink>
                <SidebarLink to="about" onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to="/discover" onClick={toggle}>
                   Discover
                </SidebarLink>
                <SidebarLink to="/discover" onClick={toggle}>
                   Upcoming
                </SidebarLink>
            </SidebarMenu>
            <SidebtnWrap>
                <SidebarRoute to="/contact-us" onClick={toggle}>Contact Us</SidebarRoute>
            </SidebtnWrap>
        </SidebarWrapper>
        </SidebarContainer>
        </>
    )
}

export default Sidebar
