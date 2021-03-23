import { useEffect, useState } from "react";
import { api, DEFAULT_QUERY } from "../../services/api";
import { useParams } from 'react-router-dom';
import { Container } from './styles';

interface Params {
  id: string;
}

interface Serie {
  name: string;
  resourceURI: string;
}

export const SeriesList = (): JSX.Element => {
  const [series, setSeries] = useState<Serie[]>([]);
  const { id } = useParams<Params>();

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
  }
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
          </tr>  
        </thead>
        <tbody>
          {series.map(serie => (
            <tr key={serie.name}>
              <td>{serie.name}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </Container>
  )
}