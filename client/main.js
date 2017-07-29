import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';
import {routes,History} from '../imports/routes/routes';
import {Session} from 'meteor/session';

Tracker.autorun(()=>{
  const selectedImageId= Session.get('selectedImageId');
  if (selectedImageId) {
    History.replace(`/gallery/${selectedImageId}`);
  }
});

Meteor.startup(()=>{
  Session.set('selectedImageId',undefined);
  ReactDOM.render(routes,document.getElementById('app'));
});
