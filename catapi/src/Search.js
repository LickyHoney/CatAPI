import { TextField } from "@material-ui/core";

//Renders the Search Component.

function Search({ searchfield, searchChange, searchClick }) {
  return (
    <div className="pa2">
      <TextField
        fullWidth
        id="standard-bare"
        variant="outlined"
        placeholder="Search breeds..."
        color="'primary'"
        onChange={searchChange}
      />
      <button onClick={searchClick}>Search</button>
    </div>
  );
}

export default Search;
