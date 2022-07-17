
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import Search from './Search.js';



class App extends React.Component {
  constructor (props) {
    super (props),
    this.state = {
      videosArray: [],
      videoPlaying: {},
      query: 'Breast Feeding',
    };
  }

  componentDidMount() {
    searchYouTube( this.state.query, (data) => {
      this.setState({
        videoPlaying: data[0],
        videosArray: data
      });
    });
  }

  search(string) {
    var debounce = _.debounce(() => {
      searchYouTube(string, (data) => {
        this.setState({
          videoPlaying: data[0],
          videosArray: data
        });
      });
    }, 1000);

    debounce();
  }


  onTitleClick(event) {
    for (var i = 0; i < this.state.videosArray.length; i++) {
      if ((event.target.innerText) === this.state.videosArray[i].snippet.title) {
        this.setState({
          videoPlaying: this.state.videosArray[i]
        });
      }
    }
  }

  render () {
    var loading = <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3 form-control">
          <div><h5><em>search</em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7 video-player">
          <div><h5><em>videoPlayer</em> view goes here</h5></div>
        </div>
        <div className="col-md-5 video-list">
          <div><h5><em>videoList</em> view goes here</h5></div>
        </div>
      </div>
    </div>;

    var final = (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search search={this.search.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videoPlaying}/>
          </div>
          <div className="col-md-5" onClick={this.onTitleClick.bind(this)}>
            <VideoList videos={this.state.videosArray} clickFun={this.onTitleClick.bind(this)} />
          </div>
        </div>
      </div>
    );

    if (this.state.videosArray.length < 1) {
      return loading;
    }
    return final;
  }

}

export default App;