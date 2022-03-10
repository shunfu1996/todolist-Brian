import './Login.css';
import React, { useState,useEffect } from "react";
import { useSpring, animated } from 'react-spring'

export default function Login() {
    const [test, setTest] = useState(false)
    const noSpring = () =>{
        setTest(!test)
    }

    const styles = useSpring({
        backgroundColor: test ? "blue" : "red",
        fontSize: test ? 50 : 20 ,
        })
    return(
        <>
            <div className={test?"blue font":"red font-small"} onClick={noSpring} >
                No Spring
            </div>
            <animated.div className="font" style={styles} onClick={noSpring} >
                Spring
            </animated.div>
            <h1>Login</h1>
        </>
    )
}