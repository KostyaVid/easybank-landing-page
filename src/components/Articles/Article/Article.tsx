import s from './Article.module.scss';

interface IArticleProps {
  imgUrl: string;
  byWho: string;
  title: string;
  description: string;
}

const Article = ({ imgUrl, byWho, title, description }: IArticleProps) => {
  return (
    <article className={s.article}>
      <img src={imgUrl} alt={title} height={200} width={255} />
      <p className={s.byWho}>{byWho}</p>
      <h3 className={s.title}>{title}</h3>
      <p className={s.description}>{description}</p>
    </article>
  );
};

export default Article;
