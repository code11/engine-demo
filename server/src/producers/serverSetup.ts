import express from "express";
import cors from "cors";
import { now } from "../now";
// import { now } from "../../../common";
// import https from "https";
// import { nanoid } from "nanoid";

export const serverSetup: producer = ({
  _now = now,
  _cors = cors,
  _express = express,
  serverTemplate = update.serverTemplate,
  request = update.request,
  status = update.status.isServerTemplateReady,
}) => {
  const server = _express();
  server.use(_cors());

  const storeRequest = (req, res) => {
    request.set({
      createdAt: _now(),
      request: req,
      response: res,
    });
    // response.send("ok");
  };

  server.get("/photos", storeRequest);
  serverTemplate.set(server);
  status.set(_now());
};
