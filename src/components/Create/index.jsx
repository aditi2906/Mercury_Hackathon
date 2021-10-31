import React, {Component} from 'react'
import styled from "styled-components";
import { Usersidebar } from '../usersidebar';
import "./create.css";


const Createcontainer= styled.div `
height:100%;
width:100%;
background-color:#fff;
align-items:right;
float:right; ` 



export class Createnft extends Component {
    state={
      Img:'https://icon-library.com/images/icon-uploader/icon-uploader-25.jpg'
    }
    imageHandler = (e) => {
      const reader = new FileReader();
      reader.onload = () =>{
        if(reader.readyState === 2){
          this.setState({Img: reader.result})
        }
      }
      reader.readAsDataURL(e.target.files[0])
    };
      render() {
          
      const { Img} = this.state
          return (
              
              <Createcontainer>
              
              <Usersidebar/>
              
              <div className="page">
                  <div className="container">
                      <h1 className="heading">Upload your file here</h1>
                      <div className="img-holder">
                          <img src={Img} alt="" id="img" className="img" />
                      </div>
                      <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
                      <div className="label">
            <label className="image-upload" htmlFor="input">
                          <i className="material-icons">add_photo_alternate</i>
                          Choose your Photo
                      </label>
            </div>
                  </div>
              </div>
              
              </Createcontainer>

          );
      }
      
  }
  
  export default Createnft;