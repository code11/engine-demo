import { now } from "../../../common";

export const executeRequest: producer = ({
  _fetch = fetch,
  _now = now,
  trigger = observe.request.createdAt,
  config = get.request.config,
  url = get.request.url,
  sentAt = update.request.sentAt,
  instance = update.request.instance,
}) => {
  if (!trigger) {
    return;
  }

  if (!url.value() || !config.value()) {
    console.error("Request malformed");
    return;
  }

  sentAt.set(_now());

  const requestInstance = _fetch(url.value(), config.value());

  instance.set(requestInstance);
};
