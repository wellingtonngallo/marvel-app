import { useCharacter } from '../../context/getCharacters';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { Card } from "../../components/Card"
import { CardContainer, Container } from './styles';
import { Search } from '../../components/Search';
import { Loading } from '../../components/Loading';

export const Home = (): JSX.Element => {
  const { characters, loading, setLimitRequest, nameStartsWith } = useCharacter();
  const infiniteRef = useInfiniteScroll<HTMLDivElement>({
    loading: loading,
    hasNextPage: true,
    onLoadMore: nameStartsWith.length === 0 ? setLimitRequest : () => {},
    scrollContainer: 'window',
  });

  return (
    <Container>
      <Search/>
      <CardContainer ref={infiniteRef}>
        {
          characters.map((character, index) => (
            <Card
              id={character.id}
              key={index}
              name={character.name}
              image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            /> 
          ))
        }
        {
          loading &&
          <>
          <Loading/>
          <Loading/>
          <Loading/>
          <Loading/>
          </>
        }
      </CardContainer>
    </Container>
  )
}