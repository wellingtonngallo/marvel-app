import { Container } from './styles';

interface CardProps {
  name: string;
  image: string;
}

export const Card = ({name, image}: CardProps): JSX.Element => {
  return (
    <Container>
      <header>
        <img src={image} alt={name} />
      </header>
      <section>
        <h2>{name}</h2>
      </section>
    </Container>
  )
}