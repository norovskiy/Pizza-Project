import { AppBar, Toolbar, Button } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#111" }}>
      <Toolbar className="flex justify-between">
        <h1 className="text-orange-500 font-bold text-xl">PizzaMagic</h1>
        <div className="space-x-4">
          <Button sx={{ color: "#ff6600" }}>Home</Button>
          <Button sx={{ color: "#ff6600" }}>About Us</Button>
          <Button sx={{ color: "#ff6600" }}>Menu</Button>
          <Button sx={{ color: "#ff6600" }}>Order</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
