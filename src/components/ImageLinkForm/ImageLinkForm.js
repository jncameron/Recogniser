import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onSubmit}) => {
  return(
    <div className="link-form">
      <p className='f3'>
        {'Enter a URL below. This mighty brain will detect faces!'}
      </p>
      <div className="pa4 br3 shadow-5 form center">
        <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange}/>
        <button className="w-30 grow f4 link ph3 dib" onClick={onSubmit}>Detect</button>
      </div>
    </div>
  );
}

export default ImageLinkForm;