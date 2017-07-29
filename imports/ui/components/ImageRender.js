import React from 'react';
import {Session} from 'meteor/session';
import {createContainer} from 'react-meteor-data';
import {images} from '/imports/fixtures/fixtures';
import Modal from 'react-modal';
import {History} from '/imports/routes/routes';

export class ImageRender extends React.Component{
  render(){
    return (
      <Modal isOpen={this.props.image.selected} contentLabel="Image">
      <div className="image__details">
        <a href={this.props.image.src}> <img className="image--modal" src={this.props.image.src}/></a>
        <h2>{this.props.image.title}</h2>
        <p>{this.props.image.description}</p>
        <button className="button" onClick={()=>{
          History.replace('/gallery');
          Session.set('selectedImageId',undefined);
        }}>Go back</button>
      </div>
    </Modal>
    );
  }
}

export default createContainer(()=>{
  const selectedImageId= Session.get('selectedImageId');
  let selectedImage={};
  images.map((image)=>{
    if (image.id===selectedImageId ) {
      selectedImage={...image,selected:true};
    }
  })
  return {
    image:selectedImage
  };
},ImageRender);
