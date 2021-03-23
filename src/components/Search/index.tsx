import { useCharacter } from "../../context/getCharacters";

export const Search = (): JSX.Element => {
  const { searchCharacter, nameStartsWith } = useCharacter();  
  
  return (
    <input 
      type="text"
      value={nameStartsWith}
      onChange={e => searchCharacter(e.target.value)}
    ></input>
  );
}