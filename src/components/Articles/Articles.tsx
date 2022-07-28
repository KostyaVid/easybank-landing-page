import Container from '../Container/Container';
import Article from './Article/Article';
import s from './Articles.module.scss';

const Articles = () => {
  return (
    <section className={s.art}>
      <Container>
        <h3 className={s.title}>Latest Articles</h3>
        <div className={s.articles}>
          <Article
            imgUrl="./images/image-currency.jpg"
            byWho="By Claire Robison"
            title="Receive money in any currency with no fees"
            description="The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single..."
          />
          <Article
            imgUrl="./images/image-restaurant.jpg"
            byWho="By Wilson Hutton"
            title="Treat yourself without worrying about money"
            description="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you"
          />
          <Article
            imgUrl="./images/image-plane.jpg"
            byWho="By Wilson Hutton"
            title="Take your Easybank card wherever you go"
            description="We want you to enjoy your travels. This is why we don't charge any fees on purchases while you are abroad. We will even shoe you..."
          />
          <Article
            imgUrl="./images/image-confetti.jpg"
            byWho="By Claire Robison"
            title="Our invite-only Beta accounts are now live!"
            description="After a lot of hard work by the whole team, we're excited to launch our closed beta. It's ease to request an invite through the site..."
          />
        </div>
      </Container>
    </section>
  );
};

export default Articles;
