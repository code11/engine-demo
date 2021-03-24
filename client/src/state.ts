import { Timestamp, Trigger } from "../../common/types";

export type State = {
  request: {
    createdAt: Timestamp;
    sendAt: Timestamp;
    url: string;
    config: {};
    instance: {};
    data: {};
    error: {};
  };
  photos: {
    data: {
      [k: string]: {
        id: string;
        url: string;
      };
    };
    error: string;
    triggers: {
      [k: string]: Trigger;
    };
  };
};
