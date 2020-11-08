import React, { FC } from "react";
// import styled from "styled-components";

import Button from "./Button";

const data = [
  { email: "vhardubej51@yahoo.com", id: "UQ7ZZP8XYF7PS" },
  { email: "vhardubej53@yahoo.com", id: "H3GDFVSG8N8K4" },
];

const App: FC = () => {
  return (
    <div>
      {data.map((b) => (
        <Button {...b} />
      ))}
    </div>
  );
};

export default App;
