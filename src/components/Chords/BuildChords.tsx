import Button from "@mui/material/Button";
import { useState } from "react";
import findChord from "./ChordAPI/findchord";
import generateNotes from "./ChordAPI/generateNotes";

export default function BuildChords() {
  let playNum = 0;
  const [chordArray, setChordArray] = useState(0);
  const chordArr = findChord();
  const audio = new Audio();
  const tracks: (string | undefined)[] = chordArr.map((el) => el?.sound);
  tracks.unshift("ChordSound/Am.wav");
  let isPlay = false;

  // заменить потом на одну переменную?
  const storageChord = JSON.parse(localStorage.getItem("chord") || "{}");
  const storageTracks = JSON.parse(localStorage.getItem("tracks") || "{}");

  function handleClick() {
    generateNotes(storageChord);
    if (!isPlay) {
      // audio.src = storageTracks[playNum]!;
      // audio.play();
      isPlay = true;
    } else {
      // audio.pause();
      isPlay = false;
      playNum = 0;
    }
    function playNext() {
      if (playNum < storageTracks.length - 1) {
        playNum++;
      } else {
        playNum = 0;
      }
      // audio.src = storageTracks[playNum]!;
      // audio.play();
      isPlay = true;
    }
    audio.addEventListener("ended", playNext);
  }
  return (
    <div>
      <Button
        onClick={() => {
          // audio.pause();
          setChordArray(chordArray + 1);
          localStorage.clear();
          localStorage.setItem("tracks", JSON.stringify(tracks));
          localStorage.setItem("chord", JSON.stringify(chordArr));
        }}
      >
        Генерировать
      </Button>
      <div style={{ display: "flex", gap: "50px" }}>
        <div>
          <div>{storageChord[0]?.name}</div>
          <div>{storageChord[1]?.name}</div>
          <div>{storageChord[2]?.name}</div>
          <div>{storageChord[3]?.name}</div>
        </div>
        <div>
          <div>{storageChord[0]?.name}</div>
          <div>{storageChord[1]?.name}</div>
          <div>{storageChord[2]?.name}</div>
          <div>{storageChord[3]?.name}</div>
        </div>
      </div>

      <Button onClick={handleClick}>Играть </Button>
      <Button
        onClick={() => {
          // audio.pause();
          isPlay = false;
        }}
      >
        Стоп
      </Button>
    </div>
  );
}
