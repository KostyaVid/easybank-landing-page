import s from './Card.module.scss';

interface ICardProps {
  imgUrl: string;
  title: string;
  description: string;
}

const Card = ({ imgUrl, title, description }: ICardProps) => {
  return (
    <article className={s.card}>
      <img src={imgUrl} alt={title} width={72} height={72} />
      <h3 className={s.title}>{title}</h3>
      <p className={s.description}>{description}</p>
    </article>
  );
};

export default Card;
