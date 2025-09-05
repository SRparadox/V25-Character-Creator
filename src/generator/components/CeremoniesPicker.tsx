import React from "react";
import { Ceremonies } from "../../data/Disciplines";
import { Character } from "../../data/Character";

interface CeremoniesPickerProps {
  character: Character;
  setCharacter: (character: Character) => void;
  nextStep: () => void;
}

const CeremoniesPicker: React.FC<CeremoniesPickerProps> = ({ character, setCharacter, nextStep }) => {
  // This is a minimal placeholder. You can expand it to match RitualsPicker's UI/logic.
  return (
    <div>
      <h2>Oblivion Ceremonies</h2>
      <ul>
        {Ceremonies.map((ceremony) => (
          <li key={ceremony.name}>
            <strong>{ceremony.name}</strong> (lv {ceremony.level}): {ceremony.summary}
          </li>
        ))}
      </ul>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default CeremoniesPicker;
