import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Appbar from "../Components/Appbar";
import Topic from "../Components/Topic";
import TopicHeader from "../Components/TopicHeader";
import React from "react";
import styled from "@emotion/styled";

function CreateSession() {
  const [language, setLanguage] = React.useState("");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  const CustomFormControl = styled(FormControl)(() => ({
    width: "288px",
    position: "relative",
    top: "10rem",
    left: "295px",
    borderRadius: "12px",
  }));

  const TopicBox = styled(Box)(() => ({
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    position: "relative",
  }));

  const TopicListBox = styled(Box)(() => ({
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    position: "relative",
    top: "11rem",
  }));

  return (
    <div>
      <Appbar />
      <CustomFormControl>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value={10}>Hindi</MenuItem>
          <MenuItem value={20}>English</MenuItem>
          <MenuItem value={30}>German</MenuItem>
        </Select>
      </CustomFormControl>

      <TopicBox>
        <TopicHeader topic={"Icebreaker"} />
        <TopicHeader topic={"Group Discussion"} />
        <TopicHeader topic={"Debate"} />
      </TopicBox>

      <TopicListBox>
        <Topic />
        <Topic />
        <Topic />
      </TopicListBox>
    </div>
  );
}

export default CreateSession;
