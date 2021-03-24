import { now } from "../../../common";

export const requestFailure: producer = ({
  _now = now,
  failedAt = update.request.failedAt,
  errorMessage = update.request.error,
  request = observe.request.instance,
}) => {
  if (!request) {
    return;
  }

  request.catch((error: any) => {
    failedAt.set(_now());
    errorMessage.set(error.toString());
  });
};
