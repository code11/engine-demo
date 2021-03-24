import { Component } from "../../common";
import * as producers from "./producers";

const AppView: view = ({
  trigger = update.photos.triggers.retrieve,
  errorMessage = observe.photos.error,
  data = observe.photos.data,
  _now = performance.now.bind(performance),
}) => (
  <div style={{ color: "white" }}>
    {errorMessage && (
      <p style={{ border: "1px solid pink", padding: "10px" }}>
        {errorMessage}
      </p>
    )}
    <p>{data && JSON.stringify(data)}</p>
    <button style={{ background: "pink" }} onClick={() => trigger.set(_now())}>
      Retrieve photos
    </button>
  </div>
);

const AppComponent = Component(AppView, producers);

export { AppComponent as App };
