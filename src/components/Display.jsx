import React from 'react'

function Display({count}) {

  return (
    <div>
         <div style={{
            width: "450px",
            height: "50px",
            backgroundColor: "#000",
            borderRadius: "20px",
            border: "solid 2px #00ff00",
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
            padding: "20px",
            overflow: "hidden"
            }}>
                <span style={{
                   fontSize: "40px"
                }}>
                {count}
                </span>
        </div>
    </div>
  )
}

export default Display
