export const cleanup: producer = ({ db = get.db, server = get.server }) => {
  return () => {
    console.log("cleaning up service");
    db.value().unset("posts").write();
    server.value().close();
  };
};
