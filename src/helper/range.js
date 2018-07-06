export function range(max) {
  // return [...Array(20).keys()]; // doesn't work the same way in iOS & Android : broken on Android
  return Array.from({ length: max }, (_, i) => i);
}
