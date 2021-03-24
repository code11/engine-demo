import { now } from "../../../common";

export const requestSuccess: producer = ({
  _now = now,
  responseAt = update.request.responseAt,
  request = observe.request.instance,
  data = update.request.data,
}) => {
  if (!request) {
    return;
  }

  request.then((response) => {
    if (!response.ok) {
      console.error("Not ok");
    }
    responseAt.set(_now());
    console.log(response);
  });
};
