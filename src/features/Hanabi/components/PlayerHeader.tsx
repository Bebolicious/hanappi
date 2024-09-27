import { Button, Menu, MenuItem, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

interface Player {
  name: string;
  short: string;
  id: number;
}

console.log(import.meta.env.VITE_SUPABASE_URL);
console.log(import.meta.env);
console.log(process.env.VITE_SUPABASE_URL);
console.log(process.env.VITE_SUPABASE_ANON_KEY);
console.log(process.env);

const supabase = createClient(
  process.env.VITE_SUPABASE_URL ? process.env.VITE_SUPABASE_URL : "",
  process.env.VITE_SUPABASE_ANON_KEY ? process.env.VITE_SUPABASE_ANON_KEY : ""
);

export default function PlayerHeader() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [allPlayers, setAllPlayers] = useState<any>([]);

  const [players, setPlayers] = useState<any>([]);

  useEffect(() => {
    getPlayers();
  }, []);

  async function getPlayers() {
    const { data } = await supabase.from("Player").select();
    setAllPlayers(data);
  }

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAddPlayer = (player: Player) => {
    let newPlayers = [...players];
    newPlayers.push(player);

    setPlayers(newPlayers);
    handleClose();
  };

  const removePlayer = (player: Player) => {
    let newPlayers = [...players];
    let target = newPlayers.indexOf((p: any) => p.id === player.id);
    newPlayers.splice(target, 1);

    console.log(target);

    setPlayers(newPlayers);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: "1rem", display: "flex", gap: "1rem" }}>
      {players.map((p: any) => (
        <Button
          key={p.id}
          sx={{
            p: "0px",
          }}
          onClick={() => removePlayer(p)}
        >
          <Box
            sx={{
              borderRadius: "50%",
              backgroundColor: "#2F3036",
              width: "63px",
              height: "63px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "all 300ms",
              "&:hover": {
                backgroundColor: "rgba(255, 0, 0, 0.4);",
                color: "#fff",
              },
            }}
          >
            <Typography sx={{ color: "#fff" }}>{p.short}</Typography>
          </Box>
        </Button>
      ))}
      <Button sx={{ p: "0px" }} onClick={handleClick}>
        <Box
          sx={{
            borderRadius: "50%",
            backgroundColor: "#2F3036",
            width: "63px",
            height: "63px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AddIcon sx={{ color: "#fff" }} />
        </Box>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {allPlayers.map((p: any) => (
          <MenuItem onClick={() => handleAddPlayer(p)}>{p.name}</MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
