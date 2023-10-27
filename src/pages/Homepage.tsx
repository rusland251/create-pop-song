import { Component, ReactNode } from "react";
import UseChords from "../components/Chords/useChords";

class Homepage extends Component {
  render(): ReactNode {
    return (
      <div>
        <UseChords />
      </div>
    );
  }
}
export { Homepage };
