var Search = ({search}) => (
  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      onChange={e => {
        search(e.target.value);
      }}/>
    <button className="btn hidden-sm-down" >
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// const getInputValue = (event)=>{
//   // show the user input value to console
//   const userValue = event.target.value;
//   return userValue;


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
