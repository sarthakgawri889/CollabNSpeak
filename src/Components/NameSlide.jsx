import React from "react";
import { Box, Typography, styled, Avatar } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

const BackPartN = styled(Box)`
  position: relative;
  width: 45rem;
  height: 79px;
  left: 26rem;
  top: 15rem;
  background: #2d8cff;
  border-radius: 30px;
  margin: 0.8rem 0;
  display: flex;
`;

const Name = styled(Typography)`
  position: relative;
  padding: 1.8rem 2rem;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 20px;
  /* or 83% */
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  color: white;
`;

function NameSlide() {
  const { user } = useAuth0();
  return (
    <>
      <BackPartN>
        <Name>{user.name}</Name>
        <Avatar
          alt="Remy Sharp"
          src={user.picture}
          sx={{ width: 56, height: 56 /* Ellipse 18 */, left: 500, top: 10 }}
        />
      </BackPartN>
      <BackPartN>
        <Name>Name</Name>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 /* Ellipse 18 */, left: 500, top: 10 }}
        />
      </BackPartN>
      <BackPartN>
        <Name>Name</Name>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 /* Ellipse 18 */, left: 500, top: 10 }}
        />
      </BackPartN>
      <BackPartN>
        <Name>Name</Name>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 /* Ellipse 18 */, left: 500, top: 10 }}
        />
      </BackPartN>
    </>
  );
}

export default NameSlide;
