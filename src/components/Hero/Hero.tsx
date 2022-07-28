import Button from '../Button/Button';
import Container from '../Container/Container';
import s from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={s.hero}>
      <Container>
        <div className={s.heroText}>
          <h1 className={s.title}>Next generation digital banking</h1>
          <p className={s.text}>
            Take your financial life online. Your Easybank account will be a one-stop-shop for
            spending, saving, budgeting, investing, and much more.
          </p>
          <Button>Request Invite</Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
