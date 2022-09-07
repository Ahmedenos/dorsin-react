import React from 'react'
import "./style.css"
import pImage from "../../../assets/potfoli1.jpg"
import Repeat from '../Repeat'
export default function Portfolio() {
    const head="Build your dream website today"
    const body=`But nothing the copy said could convince her and so it 
             didn’t take long until a few insidious Copy Writers ambushed her.`
    const btn="View Plan & Pricing"
    return (
        <Repeat head={head} body={body} btn={btn} image={pImage}/>
    )
}
