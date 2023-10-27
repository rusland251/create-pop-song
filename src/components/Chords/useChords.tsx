import Button from "@mui/material/Button";
import { useState } from "react";
import findChord from "./ChordAPI/findchord";

export default function useChords() {
  let playNum = 0;
  const [chordArray, setChordArray] = useState(0);
  const chord = findChord();
  const audio = new Audio();
  const tracks: (string | undefined)[] = chord.map((el) => el?.sound);
  tracks.unshift("ChordSound/Am.wav");
  let isPlay = false;
  return (
    <div>
      <Button
        onClick={() => {
          audio.pause();
          setChordArray(chordArray + 1);
        }}
      >
        Генерировать
      </Button>
      <div>
        <div>Am</div>
        <div>{chord[0]?.name}</div>
        <div>{chord[1]?.name}</div>
        <div>{chord[2]?.name}</div>
      </div>
      <Button
        onClick={() => {
          console.log(audio);
          if (!isPlay) {
            audio.src = tracks[playNum]!;
            audio.play();
            isPlay = true;
          } else {
            audio.pause();
            isPlay = false;
            playNum = 0;
          }
          function playNext() {
            if (playNum < tracks.length - 1) {
              playNum++;
            } else {
              playNum = 0;
            }
            audio.src = tracks[playNum]!;
            audio.play();
            isPlay = true;
          }
          audio.addEventListener("ended", playNext);
        }}
      >
        Играть
      </Button>
    </div>
  );
}
