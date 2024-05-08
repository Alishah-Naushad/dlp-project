import React, { useState, useEffect } from 'react';
import './Home.css';
import leftImage from '../assets/left.jpg';
import Typewriter from "typewriter-effect";
import API from '../API'
import Modal from 'react-modal';

function ImageViewModal(props) {
  return (
    <Modal isOpen={props.isOpen} onRequestClose={props.onClose} 
    overlayClassName="overlay"
    className="modal">
      <button onClick={props.onClose} className="close-button">X</button>
      {props.file && <img src={URL.createObjectURL(props.file)} alt="Uploaded" />}
    </Modal>
  );
}

function Footer() {
  return (
    <footer>
      <p className='Footer'>&copy; 2023 Deep Learning and Perception</p>
    </footer>
  );
}

function Home() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  useEffect(() => {
    console.log(uploadedFile)
  }, [uploadedFile])
  
  const closeModal = () => {
    // setUploadedFile(null);
    setIsModalOpen(false);
  };
  const hiddenFileInput = React.useRef(null);

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setUploadedFile(fileUploaded);
    setIsModalOpen(true);
    console.log(uploadedFile)
  };

  return (
    <div className="App">
      <div className="split left" style={{background: 'linear-gradient(to right, #5e27b0, #1e6fe9)'}}>
        <div className="split top" style={{marginTop:20}}>
          <div className="image-container">
            <img src={leftImage} alt="left" style={{borderRadius:'50%'}}/>
          </div>
        </div>
        <div className="split bottom">
          <div className="students-container" >
            <div className="student" >
              <p className="roll-number">K201078</p>
              <p className="name">Alishah Naushad</p>
            </div>
            <div className="student">
              <p className="roll-number">K200261</p>
              <p className="name">Mehma Waseem</p>
            </div>
            <div className="student">
              <p className="roll-number">K201065</p>
              <p className="name">Muhammad Yahya</p>
            </div>
          </div>
          <Footer /> {/* Add Footer component */}
        </div>
      </div>
      <div className="split right">
        <h1 className="main-heading">STAMP VERIFICATION MODEL</h1>
        <div className="sub-heading">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Image Segmentation\n")
                .pauseFor(1000)
                .start();
            }}
          />
        </div>
        <div>
          <p className="sub-sub-heading">Get your image stamps verified</p>
        </div>
        <button onClick={handleClick} className="upload-button">Upload Image</button>
        <API image = {uploadedFile} />
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{ display: 'none' }}
          accept="image/*"
        />
        <ImageViewModal isOpen={isModalOpen} onClose={closeModal} file={uploadedFile} />
      </div>
    </div>
  );
}

export default Home;
