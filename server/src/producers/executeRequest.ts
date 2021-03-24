export const executeRequest: producer = ({
  trigger = observe.request.createdAt,
  db = get.db,
  storeResult = update.request.result,
}) => {
  if (!trigger) {
    return;
  }

  const result = db.value().get("photos");

  storeResult.set(result);
};
