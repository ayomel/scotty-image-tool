import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';
import './App.css';

const ImagePreViewON = (props) => {
 if (props.imagePreviewUrl) {
   return (
     <div className="image-container">
       <img src={props.imagePreviewUrl} />
     </div>
   )
 }
  return <div></div>;
}
class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      file: '',
      imagePreviewUrl: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  scanFile(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(file);
  }

  handleImageChange = (e) => {
    e.preventDefault();
    let files = e.target.files;
    let file = e.target.files[0];
    if (files && files[0]) {
      Object.keys(files).map((key, index) => {
        this.setState({
          files: this.state.files.concat([files[key]]),
        });
        scanFile(files[key]);
      });
    }
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input
            type="file"
            onChange={this.handleImageChange} multiple/>
        </form>
        <ImagePreViewON imagePreviewUrl={this.state.imagePreviewUrl} />
      </div>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h3> React Image Upload </h3>
        <ImageUpload/>
      </div>
    )
  }
}
