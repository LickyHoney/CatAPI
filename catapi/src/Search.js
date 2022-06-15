import { TextField, IconButton } from "@material-ui/core";

import { SearchOutlined } from "@material-ui/icons";

function Search({ searchfield, searchChange }) {
  return (
    <div className="pa2">
      <TextField
        fullWidth
        id="standard-bare"
        variant="outlined"
        placeholder="Search breeds..."
        color="'primary'"
        onChange={searchChange}
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchOutlined />
            </IconButton>
          )
        }}
      />
    </div>
  );
}

export default Search;
