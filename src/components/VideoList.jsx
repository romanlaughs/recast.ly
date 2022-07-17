
import VideoListEntry from './VideoListEntry.js';


var VideoList = (props) => (
  <div className="video-list" onClick= {props.clickFun}>
    {props.videos.map((video, index) =>
      <VideoListEntry key={index} clickFun={props.clickFun} video={video} />)}
  </div>
);

export default VideoList;
