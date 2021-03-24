import { engine, producers } from "@c11/engine.runtime";
import * as list from "./producers";

const service = engine({
  use: [producers(Object.values(list))],
});

service.start();
