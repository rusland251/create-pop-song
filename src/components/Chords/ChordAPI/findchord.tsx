import chords from "../chords.json";
import generateChord from "./generateChord";

export default function findChord() {
  const chord = chords.chord;
  const arrChord = generateChord();
  const newArrChord = [];
  for (let i = 0; i < 3; i++) {
    const newChord = chord.find((item) => item.number === arrChord[i]);
    newArrChord.push(newChord);
  }
  return newArrChord;
}
