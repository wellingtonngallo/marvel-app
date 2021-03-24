import { Link } from 'react-router-dom';
import { Container } from './styles';

interface CardProps {
  id: number;
  name: string;
  image: string;
}

export const Card = ({name, image, id}: CardProps): JSX.Element => {
  return (
    <Container>
      <Link to={`/series/${id}/${name}`}>
        <header>
          <img src={image} alt={name} />
        </header>
        <section className="body">
          <h2>{name}</h2>
        </section>
      </Link>
    </Container>
  )
}