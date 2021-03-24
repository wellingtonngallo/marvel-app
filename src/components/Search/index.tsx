import { useCharacter } from "../../context/getCharacters";
import { Container, ContainerInput } from './style';

export const Search = (): JSX.Element => {
  const { searchCharacter, nameStartsWith } = useCharacter();  
  
  const handleSearchCharacter = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchCharacter(e.target.value)
  }

  return (
    <Container>
    <ContainerInput 
      type="text"
      value={nameStartsWith}
      onChange={handleSearchCharacter}
      placeholder="Buscar personagem..."
    ></ContainerInput>
    </Container>
  );
}