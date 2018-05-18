import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';
import './App.css';

export default class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      files: [],
    };
    this.handleFiles = this.handleFiles.bind(this);
  }
  handleFiles = (files) => {
    files.base64.map((src) => {
      console.log(files);
    });
    this.setState({
        files
      });
  }

  render() {
    // console.log(this.state.files);
    return (
      <div>
        <ReactFileReader base64={true} handleFiles={this.handleFiles} multipleFiles={true}>
          <button className='btn'>Upload</button>
        </ReactFileReader>
        {this.state.files.base64
          ?
            <div>
              {this.state.files.base64.map((src) => {
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
}


// NOTE:
for (var i = 0; i < files.length; i++) {
  this.setState({
    files: this.state.files.concat([files[i]]),
  });
  reader.onload = (e) => {
    console.log(e.target);
  }
  reader.readAsDataURL(files)
}
