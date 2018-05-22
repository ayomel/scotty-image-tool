import React, { Component } from 'react';
import './App.css';


let processedFiles = 0;
let totalFiles = 0;

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.dropHandler = this.dropHandler.bind(this);
    this.scanFile = this.scanFile.bind(this);
    this.onLoadEndHandler = this.onLoadEndHandler.bind(this);
    this.state = {
      images: [],
      files: [],
      isLoaded: false,
    };
  }
  scanFile(file) {
    let reader = new FileReader();
    reader.onload = (e) => {
      let image = new Image();
      image.src = e.target.result;
      file.src = image.src;
      this.onLoadEndHandler();
    }
    this.setState(prevState => ({
      images: [...prevState.images, file]
    }));
    reader.readAsDataURL(file);
  }
  handleImageChange = (e) => {
    e.preventDefault();
    let files = e.target.files;
    totalFiles = files.length;
    if (files && files[0]) {
      Object.keys(files).map((key, index) => {
        this.setState(prevState => ({
          files: [...prevState.files, files[key]],
        }));
        return this.scanFile(files[key]);
      });
    }
  }
  dropHandler = (e) => {
    e.preventDefault();
    let files = e.dataTransfer.files;
    if (files && files[0]) {
      Object.keys(files).map((key, index) => {
        this.setState(prevState => ({
          files: [...prevState.files, files[key]],
        }));
        return this.scanFile(files[key]);
      });
    }
  }
  onLoadEndHandler() {
    processedFiles++;
    if (processedFiles === totalFiles) {
      this.setState({
        isLoaded: true
      })
    }
  }
  render() {
    const { isLoaded } =  this.state;
    return (
      <div>
        <div className="drop--file" draggable="true" onDrop={this.dropHandler} onDragOver={(e) => e.preventDefault()}>
          <form onSubmit={this._handleSubmit}>
            <label className="file--browse" htmlFor="browse--input">Select Images from your computer</label>
            <input
              id="browse--input"
              name="file"
              type="file"
              onChange={this.handleImageChange} multiple/>
          </form>
        </div>
          { isLoaded ?
            <div className="file--preview">
              {this.state.images.map((image, i) => {
                return (
                  <div key={i} className="image--files">
                    <img key={image.name} alt={image.name} src={image.src} />
                    <h5>{image.name}</h5>
                  </div>
                )
              })}
          </div>
          :
          <div></div> }
      </div>

    )
  }
}

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <h3> React Image Upload </h3>
        <ImageUpload />
      </main>
    )
  }
}
