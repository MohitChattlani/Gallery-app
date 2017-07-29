import React from 'react';
import {Session} from 'meteor/session';

export default class ImageListItem extends React.Component{
  selectImage(){
    Session.set('selectedImageId',this.props.image.id);
  }
  render(){
    return (
      <div onClick={this.selectImage.bind(this)}>
        <img className="image" src={this.props.image.src}/>
        <p>{this.props.image.title}</p>
      </div>
    );
  }
}
