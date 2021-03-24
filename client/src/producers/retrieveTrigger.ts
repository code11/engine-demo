export const retrieveTrigger: producer = ({
  request = update.request,
  trigger = observe.photos.triggers.retrieve,
  _now = performance.now.bind(performance),
}) => {
  if (!trigger) {
    return;
  }

  request.set({
    createdAt: _now(),
    url: "http://localhost:4000/photos",
    config: {
      method: "GET",
    },
  });
};
