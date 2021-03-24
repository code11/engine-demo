import { Timestamp } from "../types";

export type State = {
  db: null;
  server: null;
  startup: {
    isDbReady: false;
    isServerReady: false;
  };
  triggers: {
    stop: Timestamp;
  };
  requests: {};
};
