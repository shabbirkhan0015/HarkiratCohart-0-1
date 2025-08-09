import { useState } from "react";
    import reactLogo from "./assets/react.svg";
    import viteLogo from "/vite.svg";
import "./App.css";
import { useRecoilValue } from "recoil";
import {
  networkCount,
  jobCount,
  messageCount,
  notificationCount,
} from "./atoms";
import React from "react";

function App() {
  const NetworkCountValue = useRecoilValue(networkCount);
  const jobCountValue = useRecoilValue(jobCount);
  const messageCountValue = useRecoilValue(messageCount);
  const notificationCountValue = useRecoilValue(notificationCount);

  return (
    <div>
      <button>Home</button>
      <button>
        My Network {NetworkCountValue > 100 ? "99+" : NetworkCountValue}
      </button>
      <button>Job {jobCountValue}</button>
      <button>Messaging {messageCountValue}</button>
      <button>Notification {notificationCountValue}</button>
      <button>Me</button>
    </div>
  );
}

export default App;
