
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useAuth0 } from "@auth0/auth0-react";
import { Debate, GroupDiscussion, Icebreaker } from "../Assets/TopicDetail";

import { useParams } from "react-router-dom";




const RoomPage = () => {
  const { user } = useAuth0();
  const { topicHeader, topic, roomId } = useParams();
  const navigate = useNavigate();

  const [seconds, setSeconds] = useState(900);

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setInterval(() => setSeconds(seconds - 1), 1000);
      return () => clearInterval(timerId);
    }
  }, [seconds]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const myMeeting = async (element) => {
    // generate Kit Token
    const appID = 1885512553;
    const serverSecret = "57e06e22f60d0afa7de7a4e82442c55e";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      user.nickname,
      user.name
    );

    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      maxUsers: 4,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
      showScreenSharingButton: false,
      showUserList: false,
      videoResolutionList: [
        ZegoUIKitPrebuilt.VideoResolution_360P,
        ZegoUIKitPrebuilt.VideoResolution_180P,
        ZegoUIKitPrebuilt.VideoResolution_480P,
        ZegoUIKitPrebuilt.VideoResolution_720P,
      ],
      videoResolutionDefault: ZegoUIKitPrebuilt.VideoResolution_360P,
      showPreJoinView: false,

      onLeaveRoom: () => {
        navigate("/existsession");
      },
    });
    if (seconds === 0) zc.destroy();
  };

  let index = 0;

  if (topicHeader === "Icebreaker") {
    for (let i = 0; i < Icebreaker.length; i++) {
      if (Icebreaker[i].topic === topic) {
        index = i;
        break;
      }
    }
  } else if (topicHeader === "Debate") {
    for (let i = 0; i < Debate.length; i++) {
      if (Debate[i].topic === topic) {
        index = i;
        break;
      }
    }
  } else {
    for (let i = 0; i < GroupDiscussion.length; i++) {
      if (GroupDiscussion[i].topic === topic) {
        index = i;
        break;
      }
    }
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "78vw", height: "100vh" }} ref={myMeeting} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "22vw",
          backgroundColor: "#1c1f2e",
        }}
      >
        <div
          style={{
            height: "15%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            margin: "1rem 0.8rem 0.8rem 0.8rem",
            borderRadius: "12px",
            backgroundColor: "#242736",
          }}
        >
          <p style={{ fontSize: "20px" }}>{formatTime(seconds)}</p>
        </div>
        <div
          style={{
            height: "85%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "white",
            margin: "0.8rem",
            borderRadius: "12px",
            backgroundColor: "#242736",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              justifyContent: "center",
              margin: "0rem 0.8rem 0rem  0.8rem",
              height: "13%",
            }}
          >
            Cue Card
          </h1>
          <div>
            {topicHeader === "Icebreaker"
              ? Icebreaker[index].cuecards.map((item) => {
                  return (
                    <p
                      style={{
                        margin: "1rem 1.5rem 0rem 1.5rem",
                        borderRadius: "12px",
                        padding: "3px",
                        fontWeight: "100",
                      }}
                    >
                      {item}
                    </p>
                  );
                })
              : topicHeader === "Debate"
              ? Debate[index].cuecards.map((item) => {
                  return (
                    <p
                      style={{
                        margin: "1rem 1.5rem 0rem 1.5rem",
                        borderRadius: "12px",
                        padding: "3px",
                        fontWeight: "100",
                      }}
                    >
                      {item}
                    </p>
                  );
                })
              : GroupDiscussion[index].cuecards.map((item) => {
                  return (
                    <p
                      style={{
                        margin: "1rem 1.5rem 0rem 1.5rem",
                        borderRadius: "12px",
                        padding: "3px",
                        fontWeight: "100",
                      }}
                    >
                      {item}
                    </p>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
