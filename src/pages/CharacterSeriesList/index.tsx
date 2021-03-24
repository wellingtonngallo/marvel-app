import { useEffect, useState } from "react";
import { api, DEFAULT_QUERY } from "../../services/api";
import { Link, useParams } from 'react-router-dom';
import { Container, ContainerLink } from './styles';
import { IoArrowBackSharp } from "react-icons/io5";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

interface Params {
  id: string;
  name: string;
}

interface Serie {
  name: string;
  resourceURI: string;
}

export const SeriesList = (): JSX.Element => {
  const  [loading, setLoading] = useState(true);
  const [series, setSeries] = useState<Serie[]>([]);
  const { id, name } = useParams<Params>();

  useEffect(() => {
    getSeries();
  }, []);

  const getSeries = async () => {
    const { data } = await api.get(`characters/${parseInt(id, 10)}`, {
      params: {
        ...DEFAULT_QUERY,
      }
    });

    setSeries(data.data.results[0].series.items);
    setLoading(false);
  }
  
  return (
    <>
      <ContainerLink className="link">
        <Link to="/">
          <IoArrowBackSharp/>
        </Link>
      </ContainerLink>
      <Container>
        <h1>Lista de series do personagem { name }</h1>
        {loading ? (
          <SkeletonTheme color="#dbdbdb" highlightColor="#bfbfbf">
            <Skeleton height={20} width={430}/>
          </SkeletonTheme>
        ) :
          series.map((serie, index) => (
            <h2 key={index}>
              {serie.name}
            </h2>
          ))
        }
      </Container>
    </>
  )
}