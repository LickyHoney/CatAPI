import { TextField, IconButton } from "@material-ui/core";

import { SearchOutlined } from "@material-ui/icons";

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
