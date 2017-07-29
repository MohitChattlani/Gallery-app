import React from 'react';
import {images} from '/imports/fixtures/fixtures';
import ImageListItem from './ImageListItem';
import {Session} from 'meteor/session';
import {createContainer} from 'react-meteor-data';

export class ImageList extends React.Component{
  renderImageListItem(){
    return this.props.images.map((image)=>{
      return (
        <ImageListItem key={image.id} image={image}/>
      );
    });
  }
  render(){
    return (
      <div>
        {this.renderImageListItem()}
      </div>
    );
  }
}

export default createContainer(()=>{
  return {
    images:images
  };
},ImageList);
