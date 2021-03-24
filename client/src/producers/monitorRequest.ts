export const monitorRequest: producer = ({
  error = observe.request.error,
  data = observe.request.data,
  photosError = update.photos.error,
  photosData = update.photos.data,
}) => {
  if (!error && !data) {
    return;
  }

  if (error) {
    photosError.set("The request failed. Try again later");
  } else if (data) {
    photosData.set(data);
  }
};
