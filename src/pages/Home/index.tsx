import { useEffect, useState } from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
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
  const [limit, setLimit] = useState(20);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCharacters();
  }, [limit]);

  const getCharacters = async() => {
    const { data } = await api.get('characters', {
      params: {
        ...DEFAULT_QUERY,
        limit: limit
      }
    });

    setLoading(false);
    setCharacters(data.data.results);
  }

  const setLimitRequest = () => {
    setLoading(true);
    if (limit === 80) {
      setLimit(limit + 20);
    } else if (limit <= 80) {
      setLimit(limit * 2);
    }
  }

  const infiniteRef = useInfiniteScroll<HTMLDivElement>({
    loading: loading,
    hasNextPage: true,
    onLoadMore: setLimitRequest,
    scrollContainer: 'window',
  });

  return (
    <CardContainer ref={infiniteRef}>
      {
        characters.map(character => (
          <Card
            id={character.id}
            key={character.id}
            name={character.name}
            image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          /> 
        ))
      }
    </CardContainer>
  )
}