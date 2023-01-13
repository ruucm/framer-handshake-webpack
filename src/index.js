import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Button from "https://framer.com/m/Button-9Nlu.js@1AgFEz9hQs1j2aFkuyae"

// buildHttp test
// with `buildHttp` enabled, webpack will build pMap1 just like a regular local module
// import pMap1 from "https://cdn.skypack.dev/p-map";
// console.log(pMap1);

// import Toggle from "https://framer.com/m/Toggle-B5iT.js@52zFaz7rN7Bt3pjtYxWH";
// import PRButton from "https://framer.com/m/PR-Button-6Z6o.js@bEDykX6ACHr8WBqttZhQ"
// import PRSideMenuItem from "https://framer.com/m/PR-Side-Menu-Item-Wtl9.js@JatH0FJHSRwGmuuhDihz"
// import SendPayslipsNowModal from "https://framer.com/m/Send-payslips-now-Modal-W377.js@m8idfOpxIH0ANAqyn4Aw"
// import Hey from "https://framer.com/m/Hey-lcXj.js@V3WRSeUfF6jcZXTzuemb"

const App = () => {
  return (
    <div>
      Hello Framer Handshake. 👋

      <Button />
      {/* <Toggle />
      <PRButton />
      <PRSideMenuItem />
      <SendPayslipsNowModal />
      <Hey /> */}
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
