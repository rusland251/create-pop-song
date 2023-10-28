import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import findChord from "./ChordAPI/findchord";

export default function BuildChords() {
  let playNum = 0;
  const [chordArray, setChordArray] = useState(0);
  const chord = findChord();
  const audio = new Audio();
  const tracks: (string | undefined)[] = chord.map((el) => el?.sound);
  tracks.unshift("ChordSound/Am.wav");
  let isPlay = false;
  // let rslt = localStorage.getItem("test");

  // if (rslt) {
  //   console.log("есть");
  // } else {
  //   localStorage.setItem("test", JSON.stringify(tracks));
  // }
  // useEffect(() => {
  //   console.log(rslt);
  //   localStorage.clear();
  //   localStorage.setItem("test", JSON.stringify(tracks));
  // }, [tracks]);
  const storageChord = JSON.parse(localStorage.getItem("chord") || "{}");
  const storageTracks = JSON.parse(localStorage.getItem("tracks") || "{}");

  function handleClick() {
    console.log(storageChord[0].name);
    // console.log(tracks);
    if (!isPlay) {
      audio.src = storageTracks[playNum]!;
      audio.play();
      isPlay = true;
    } else {
      audio.pause();
      isPlay = false;
      playNum = 0;
    }
    function playNext() {
      if (playNum < storageTracks.length - 1) {
        playNum++;
      } else {
        playNum = 0;
      }
      audio.src = storageTracks[playNum]!;
      audio.play();
      isPlay = true;
    }
    audio.addEventListener("ended", playNext);
  }
  return (
    <div>
      <Button
        onClick={() => {
          audio.pause();
          setChordArray(chordArray + 1);
          localStorage.clear();
          localStorage.setItem("tracks", JSON.stringify(tracks));
          localStorage.setItem("chord", JSON.stringify(chord));
        }}
      >
        Генерировать
      </Button>
      <div>
        <div>Am</div>
        <div>{storageChord[0]?.name}</div>
        <div>{storageChord[1]?.name}</div>
        <div>{storageChord[2]?.name}</div>
      </div>
      <Button onClick={handleClick}>Играть</Button>
      <Button
        onClick={() => {
          audio.pause();
          isPlay = false;
        }}
      >
        Стоп
      </Button>
    </div>
  );
}
