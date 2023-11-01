// генерируем ноты от аккордов из локал сторэджа
// надо еще сделать посекундно ноты и аккорды

function findNotes() {}

export default function generateNotes(storageChord: any[]) {
  for (let i = 0; i <= 4; i++) {
    if (storageChord[i].number === 1) {
      let mainNotes = [1, 3, 5];
    }
    if (storageChord[i].number === 2) {
      let mainNotes = [2, 4, 6];
    }
    if (storageChord[i].number === 3) {
      let mainNotes = [3, 5, 7];
    }
    if (storageChord[i].number === 4) {
      let mainNotes = [4, 6, 1];
    }
    if (storageChord[i].number === 5) {
      let mainNotes = [5, 7, 2];
    }
    if (storageChord[i].number === 6) {
      let mainNotes = [6, 1, 3];
    }
    if (storageChord[i].number === 7) {
      let mainNotes = [7, 2, 4];
    }
  }
}
