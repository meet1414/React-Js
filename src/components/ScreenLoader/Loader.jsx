import React from 'react'
import { ThreeCircles } from "react-loader-spinner"

export default function Loader() {
    return (
        <div className='d-flex justify-content-center align-items-center vh-100 w-100 position-absolute' style={{ backgroundColor: "rgba(0,0,0,0.97)", zIndex: 10000 }}>
            <ThreeCircles
                color="white"
                height={100}
                width={100}
                ariaLabel="three-circles-rotating"
            />
        </div>
    )
}
