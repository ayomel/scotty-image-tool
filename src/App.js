import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';
import './App.css';

const ImagePreViewON = (props) => {
  console.log(props);
 if (props) {
   return (
     <div className="image-container">
       {this.props
         ?
         <div>
           {this.props.files.src.map((src) => {
             return (
               <img src={src} />
             )
           })}
         </div>
         :
         null }
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
  scanFile(file) {
    var reader = new FileReader();
    reader.onload = (e) => {
      file.src = e.target.result;
    }
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
        this.scanFile(files[key]);
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
        <ImagePreViewON imagePreviewUrl={this.state.files} />
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
