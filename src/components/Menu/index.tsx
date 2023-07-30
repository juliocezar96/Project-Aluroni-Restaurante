import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Menu.module.scss';
import {Link} from 'react-router-dom';

export default function Menu() {
  const rotas = [{
    label: 'inicio',
    to: '/'
  },
  {
    label: 'Cardapio',
    to: '/cardapio'
  },
  {
    label:'sobre',
    to: '/sobre'
  }];

  return(
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menu__list}>{rotas.map((rota, index)=>(
        <li className={styles.menu__link} key={index}>
          <Link  to={rota.to}>{rota.label}</Link>
        </li>
      ))}</ul>
    </nav>
  );
}