export function randomHole(holesCount, currentHole) {
  const newHole = Math.floor(Math.random() * holesCount);
  if (newHole === currentHole) {
    return randomHole(holesCount, currentHole);
  }
  return newHole;
}
