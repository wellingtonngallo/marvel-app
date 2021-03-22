import { useEffect, useState } from 'react';
import { Card } from "../../components/Card"
import { api, DEFAULT_QUERY } from '../../services/api';
import { CardContainer } from './styles';

interface Character {
  id: number;
  name: string;
  image: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

export const Home = (): JSX.Element => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    async function getCharacters() {
      const { data } = await api.get('characters', {
        params: {
          ...DEFAULT_QUERY  
        }
      });

      debugger;

      setCharacters(data.data.results);
    }

    getCharacters();
  }, []);

  return (
    <CardContainer>
      {
        characters.map(character => (
          <Card
            key={character.id}
            name={character.name}
            image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          /> 
        ))
      }
    </CardContainer>

  )
}