import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
const Header = () => {
  return (
    <div className="text-3xl flex justify-between items-center font- bold p-3 border-b-2 border-gray-500">
      <span>
        99
        <span className="text-green-500">Movies</span>
      </span>
      <h1 className="text-lg flex items-center cursor-pointer text-white">
        <Button>
          <AddIcon className="mr-1" color="secondary" />
          <span className="text-white">Add Movie</span>
        </Button>
      </h1>
    </div>
  );
};

export default Header;
