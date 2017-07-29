import React from 'react';
import Header from './Header';
import ImageList from './ImageList';
import ImageRender from './ImageRender';
import {Link} from 'react-router-dom';
export default class Gallery extends React.Component{
  render(){
    return (
      <div>
        <div className="page-content">
          <Header/>
          <ImageList/>
        </div>
        <ImageRender/>
        <div className="page-content">
          <Link to="/">GO BACK</Link>
        </div>
      </div>
    );
  }
}
