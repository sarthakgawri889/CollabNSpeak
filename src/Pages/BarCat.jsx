import { Box, Typography, styled, Button } from "@mui/material";
import Countdown from "react-countdown";
import NameSlide from "../Components/NameSlide";
import { useNavigate } from "react-router-dom";
import AccountProvider from "../context/AccountProvider";
import Appbar from "../Components/Appbar";
import { AccountContext } from "../context/AccountProvider";
import { useContext } from "react";
const BackPart = styled(Box)`
  position: absolute;
  width: 1150px;
  height: 84px;
  left: 200px;
  top: 8.5rem;
  background: #c8d8f0;
  border-radius: 30px;
  display: flex;
`;

const FrontBox = styled(Box)`
  position: relative;
  margin: 0 0.3em auto;
  width: 250px;
  height: 60px;
  left: 10px;
  top: 12px;
  background: #747487;
  border-radius: 50px;
  text-align: center;
`;

const Timer = styled(Box)`
  position: relative;
  margin: 0 0.3em auto;
  width: 200px;
  height: 60px;
  left: 26rem;
  top: 12px;
  background: #747487;
  border-radius: 50px;
`;

const Text = styled(Typography)`
  position: relative;
  width: 276px;
  height: 51px;
  left: 0.4em;
  top: 4px;
  /* Body Thin Header */
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
  color: #000000;
`;
const TimerText = styled(Typography)`
  margin: 0 auto;
  position: relative;
  padding: 1.2rem 1rem 1.4rem 4rem;

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
  color: #000000;
`;

const Topic = styled(Typography)`
  position: relative;
  width: 276px;
  height: 51px;
  left: 47px;
  top: 4px;
  /* Body Thin Header */
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
  color: #000000;
`;

const Start = styled(Button)`
  position: absolute;
  width: 20rem;
  height: 5rem;
  left: 20rem;
  top: 40rem;
  background: #747487;
  border-radius: 50px;
`;
const End = styled(Button)`
  position: absolute;
  width: 20rem;
  height: 5rem;
  right: 20rem;
  top: 40rem;
  background: #747487;
  border-radius: 50px;
`;

const renderer = ({ minutes, seconds }) => {
  if (seconds >= 0 && seconds < 10 && Math.floor(seconds) === seconds) {
    return (
      <span>
        0{minutes}:0{seconds}
      </span>
    );
  }
  return (
    <span>
      0{minutes}:{seconds}
    </span>
  );
};

function BarCat() {
  const account = useContext(AccountContext);
  const navigate = useNavigate();

  const navigateToVideoCall = () => {
    navigate("/videocall");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <>
    <AccountProvider>
      <Appbar account={account}/>
    </AccountProvider>
      <BackPart>
        <FrontBox>
          <Text>Group Discussion</Text>
        </FrontBox>
        <FrontBox>
          <Topic>Topic Name</Topic>
        </FrontBox>
        <Timer>
          <TimerText>
            <Countdown
              date={Date.now() + 150000}
              renderer={renderer}
            ></Countdown>
          </TimerText>
        </Timer>
      </BackPart>
      <NameSlide />
      <Start variant="contained" onClick={navigateToVideoCall}>
        Start Now
      </Start>
      <End variant="contained" onClick={navigateToHome}>
        End Now
      </End>
    </>
  );
}

export default BarCat;
