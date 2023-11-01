import { Component, ReactNode } from "react";
import BuildChords from "../components/Chords/BuildChords";

class Homepage extends Component {
  render(): ReactNode {
    return (
      <div>
        <BuildChords />
      </div>
    );
  }
}
export { Homepage };
