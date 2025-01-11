import React, { useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { RiArrowDropDownLine } from "react-icons/ri";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Avatar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        className="bg-whiteTransparent backdrop-blur-[8px] rounded-3xl w-[70px] h-10 flex justify-between items-center"
        onClick={handleClick}
      >
        <AccountCircle sx={{ fontSize: 35 }} />
        <RiArrowDropDownLine className="text-white" size={38} />
      </button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleClose}>Login</MenuItem>
        <MenuItem onClick={handleClose}>Signup</MenuItem>
      </Menu>
    </div>
  );
};

export default Avatar;
