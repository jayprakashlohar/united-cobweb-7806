import React from 'react'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
  return (
    <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
  )
}
export default SampleNextArrow