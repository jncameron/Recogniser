import React from 'react';
import './FaceRecogniser.css';

const FaceRecognition = ({imageUrl, boxes}) => {

  const faceBoxes = boxes.map((box) => {
    return (
      <div 
        key={box.topRow}
        className="bounding-box"
        style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
      </div>
    )
  })
  return(
  <div className="center ma">
    <div className=" absolute mt2">
      <img id="inputimage" src={imageUrl} alt="face-detect" width="500px" height="auto"/>
      {faceBoxes}
    </div>
  </div>
  )
}

export default FaceRecognition;
