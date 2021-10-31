import React from 'react'
import InfoSection from '../infosection';
import { homeObjOne } from '../infosection/Data';
export default function about() {
    return (
        <>
        <InfoSection {...homeObjOne}/>
        </>
    )
}
