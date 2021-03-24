export * from "./types";

export const now = performance.now.bind(performance);

export const Component = (view, producers) => {
  view.producers(Object.values(producers));
  return view;
};
