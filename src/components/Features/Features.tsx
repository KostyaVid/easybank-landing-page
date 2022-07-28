import Container from '../Container/Container';
import Card from './Card/Card';
import s from './Features.module.scss';

const Features = () => {
  return (
    <section className={s.features}>
      <Container>
        <h2 className={s.title}>Why choose Easybank?</h2>
        <p className={s.subTitle}>
          We leverage Open Banking to turn your bank account into your financial hub. Control your
          finances like never before.
        </p>
        <div className={s.cards}>
          <Card
            imgUrl="./images/icon-online.svg"
            title="Online Banking"
            description="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
          />
          <Card
            imgUrl="./images/icon-budgeting.svg"
            title="Simple Budgeting"
            description="See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
          />
          <Card
            imgUrl="./images/icon-onboarding.svg"
            title="Fast Onboarding"
            description="We don't do branches. Open your account in minutes online and start talking control of your finances right away."
          />
          <Card
            imgUrl="./images/icon-api.svg"
            title="Open API"
            description="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
          />
        </div>
      </Container>
    </section>
  );
};

export default Features;
