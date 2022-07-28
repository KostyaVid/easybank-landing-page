import { ReactChildren } from 'react';
import s from './Button.module.scss';

const Button = ({ children }: React.PropsWithChildren) => {
  return <button className={s.button}>{children}</button>;
};

export default Button;
