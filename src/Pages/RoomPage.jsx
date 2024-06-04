import React, { useCallback, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

import {
  Icebreaker,
  Debate,
  GroupDiscussion,
  Icebreakerhi,
  Debatehi,
  GroupDiscussionhi,
  Icebreakergr,
  Debategr,
  GroupDiscussiongr,
} from "../Assets/TopicDetail";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { Timer } from "../Components/Timer";
import { useAuth0 } from "@auth0/auth0-react";

const RoomPage = () => {
  const { topicHeader, topic, roomId, language } = useParams();
  const navigate = useNavigate();
  const { loading } = useContext(CurrentUserContext);
  const { user } = useAuth0();

  useEffect(() => {
    const handleBackButton = (event) => {
      event.preventDefault();
      event.stopPropagation();
      // Perform your custom logic here
      window.alert("Navigation to Previous Page is not allowed.");
      return false; // Prevent navigation
    };

    window.history.pushState(null, "", window.location.pathname);
    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  const myMeeting = useCallback(
    async (element) => {
      const appID = 1145363589;
      const serverSecret = "c77188faf8d963407679e0d3daa157f2";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        user?.email,
        user?.name
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
        showLeavingView: false,
        showRoomDetailsButton: false,
        onLeaveRoom: () => {
          navigate("/endcall");
        },
      });

      setTimeout(() => {
        zc.destroy();
        navigate("/endcall");
      }, 900000);
    },
    [navigate, roomId, user?.email, user?.name]
  );

  const getTopicDetails = () => {
    let topics;

    switch (language) {
      case "Hindi":
        topics = {
          Icebreaker: Icebreakerhi,
          Debate: Debatehi,
          GroupDiscussion: GroupDiscussionhi,
        };
        break;
      case "German":
        topics = {
          Icebreaker: Icebreakergr,
          Debate: Debategr,
          GroupDiscussion: GroupDiscussiongr,
        };
        break;
      default:
        topics = { Icebreaker, Debate, GroupDiscussion };
    }

    if (topicHeader === "Icebreaker") {
      for (let i = 0; i < topics.Icebreaker.length; i++) {
        if (topics.Icebreaker[i].topic === topic) {
          return topics.Icebreaker[i].cuecards;
        }
      }
    } else if (topicHeader === "Debate") {
      for (let i = 0; i < topics.Debate.length; i++) {
        if (topics.Debate[i].topic === topic) {
          return topics.Debate[i].cuecards;
        }
      }
    }
    for (let i = 0; i < topics.GroupDiscussion.length; i++) {
      if (topics.GroupDiscussion[i].topic === topic) {
        return topics.GroupDiscussion[i].cuecards;
      }
    }
  };

  const topicDetail = getTopicDetails();

  if (loading) {
    return <div>Loading...</div>;
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
          <Timer />
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
              margin: "0rem 0.8rem 0rem 0.8rem",
              height: "13%",
            }}
          >
            Cue Card
          </h1>
          <div>
            {topicDetail.map((item) => (
              <p
                key={crypto.randomUUID()}
                style={{
                  margin: "1rem 1.5rem 0rem 1.5rem",
                  borderRadius: "12px",
                  padding: "3px",
                  fontWeight: "100",
                }}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
