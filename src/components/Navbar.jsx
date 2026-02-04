import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#000000' }}>
      <Toolbar className="flex justify-between">
        <div className="text-accent font-bold text-xl">Pizza Project</div>
        <div>
          <Button sx={{ color: '#FF6600' }} component={Link} to="/">Home</Button>
          <Button sx={{ color: '#FF6600' }} component={Link} to="/about">About Us</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
