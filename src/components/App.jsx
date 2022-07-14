import videosArray from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

// var App = (props) => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer video={videosArray[0]}/>
//       </div>
//       <div className="col-md-5">
//         <VideoList videos={videosArray}/>
//       </div>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor (props) {
    super (props),
    this.state = {
      videoPlaying: videosArray[0]

    };
  }

  onTitleClick(event) {
    console.log(event);
    // this.setState({
    //   videoPlaying: videosArray[1]
    // });
  }


  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videoPlaying}/>
          </div>
          <div className="col-md-5" onClick={this.onTitleClick.bind(this)}>
            <VideoList videos={videosArray} clickFun={this.onTitleClick.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}


// console.log(exampleVideoData);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
//ReactDOM.render(<App />, document.getElementById('app'));
export default App;