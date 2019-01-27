import React from 'react';
import './FaceRecognition.css';

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
    <div className="absolute mt2">
      { !imageUrl ?
      <p className="wait">Brain waiting for image...</p>
      :
      <img className="input-image" id="inputimage" src={imageUrl} alt="hmm...well that didn't work" width="500px" height="auto"/>
        
      }
      {faceBoxes}

    </div>
  </div>
  )
}

export default FaceRecognition;
