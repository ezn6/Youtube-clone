import React from 'react';

const Video = (props) => {
  console.log('video.jsx render');
  return <li>{props.value.snippet.title}</li>;
};

export default Video;
