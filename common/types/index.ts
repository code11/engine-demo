export type Timestamp = number;
export type Trigger =
  | Timestamp
  | {
      time: Timestamp;
      data: {};
    };
