import React from 'react'

const MainContainer = ({children}) => {
    const containerStyles = {
        width: "100%",
        maxWidth: "100%",
        padding: "0 20px", // Optional padding
        margin: "0 auto", // Optional center alignment
      };
    return (
    <section style={containerStyles} >
        {children}
    </section>
  )
}

export default MainContainer