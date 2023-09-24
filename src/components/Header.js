import React, { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Appstate } from "../App";

const Header = () => {
  const useAppState = useContext(Appstate);
  return (
    <div className="sticky z-10 bg-black text-3xl flex justify-between items-center font- bold p-3 border-b-2 border-gray-500">
      <Link to={"/"}>
        <span>
          99
          <span className="text-green-500">Movies</span>
        </span>
      </Link>
      {useAppState.login ? (
        <Link to={"/addmovie"}>
          <h1 className="text-lg flex items-center cursor-pointer text-white">
            <Button>
              <AddIcon className="mr-1" color="secondary" />
              <span className="text-white">Add Movie</span>
            </Button>
          </h1>
        </Link>
      ) : (
        <Link to={"/login"}>
          <h1 className="text-lg bg-green-500 flex items-center cursor-pointer text-white">
            <Button>
              <span className="text-white">Login</span>
            </Button>
          </h1>
        </Link>
      )}
    </div>
  );
};

export default Header;
