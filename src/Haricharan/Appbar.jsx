import {
  AppBar,
  Avatar,
  Box,
  Card,
  CardContent,
  Toolbar,
  Typography,
} from "@mui/material";

function Appbar() {
  return (
    <AppBar
      sx={{
        backgroundColor: "transparent",
        paddingX: "9rem",
        paddingY: "1rem",
        boxShadow: 0,
      }}
    >
      <Toolbar>
        <Card
          sx={{
            backgroundColor: "bg.main",
            width: 260,
            height: 55,
            borderRadius: "15px",
            boxShadow: 0,
          }}
        >
          <CardContent sx={{ textAlign: "center", marginTop: "3px" }}>
            <Typography variant="header2" color="black">
              CollabNSpeak
            </Typography>
          </CardContent>
        </Card>

        <Box sx={{ marginLeft: "auto" }}>
          <Typography variant="regular" color="black" sx={{ paddingX: "10px" }}>
            Home
          </Typography>
          <Typography variant="regular" color="black" sx={{ paddingX: "10px" }}>
            Services
          </Typography>
          <Typography
            variant="regular"
            color="black"
            sx={{ paddingRight: "40px", paddingLeft: "10px" }}
          >
            About Us
          </Typography>
        </Box>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;
