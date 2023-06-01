import { Route, Routes } from "react-router-dom";
import { ChannelChat } from "./ChannelChat";

export const ChannelsRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<ChannelChat />} />
      </Route>
    </Routes>
  );
};
