import { now } from "../now";

export const serverListen: producer = ({
  _now = now,
  serverTemplate = observe.serverTemplate,
  updateServer = update.server,
  status = update.status.isServerListening,
}) => {
  if (!serverTemplate) {
    return;
  }
  const server = serverTemplate.listen(4000, () => {
    console.log(`app is listening to port 4000`);
    status.set(_now());
  });
  updateServer.set(server);
};
