import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

import './App.css';



const app = new Clarifai.App({
  apiKey: 'bc0813e5d675435dae2c34038fcf67ca'
 });

const particlesOptions = {
  particles: {
    number: {
      value: 300,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      boxes: []
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiOutputs = data.outputs[0];
    const clarifaiFaces = clarifaiOutputs.data.regions.map(face => face.region_info.bounding_box);
    console.log(clarifaiFaces);
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    let calculated = [];

    for (let face = 0; face<clarifaiFaces.length; face++) {
      console.log(`faces: ${clarifaiFaces.face}`)

      let f = clarifaiFaces[face];
      let leftCol = f.left_col * width;
      let topRow = f.top_row * height;
      let rightCol = width - (f.right_col * width);
      let bottomRow = height - (f.bottom_row * height)

      calculated.push({leftCol, topRow, rightCol, bottomRow })
    }
    console.log(`calculated face positions ${JSON.stringify(calculated)}`)
    return calculated;
  }

  displayFaceBoxes = (boxes) => {
    console.log(boxes)
    this.setState({boxes: boxes});
  }
  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.input)
      .then(response => this.displayFaceBoxes(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="App">
      <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        <FaceRecognition boxes={this.state.boxes} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
