export default function generateChord() {
  function getRandomArbitrary(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const newChordArray: number[] = Array.from({ length: 4 }, () =>
    getRandomArbitrary(1, 7)
  );

  return newChordArray;
}
