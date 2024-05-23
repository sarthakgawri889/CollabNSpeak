import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useAuth0 } from "@auth0/auth0-react";


const RoomPage = () => {
  const { user } = useAuth0();
  const { roomId } = useParams();

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
    });
  };

  return <div style={{ width: "100vw", height: "100vh" }} ref={myMeeting} />;
};

export default RoomPage;
