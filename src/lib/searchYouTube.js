import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {'q': query},
    success: callback
  });
};

// const videoObj = {};

// var videosArray2 = searchYouTube('', data => {
//   if (videoObj['array'] === undefined) {
//     videoObj['array'] = data;
//   }
// } );


export default searchYouTube;

