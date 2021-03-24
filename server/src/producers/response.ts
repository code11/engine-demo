export const response: producer = ({
  result = observe.request.result,
  response = get.request.response,
}) => {
  if (!result) {
    return;
  }

  response.value().send(JSON.stringify(result));
};
