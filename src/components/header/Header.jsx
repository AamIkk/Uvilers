import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <span>О нас</span>
          <span>Доставка и оплата</span>
          <span>Лояльность</span>
          <span>Контакты</span>
        </div>
        <div className={styles.topBarRight}>
          <span>+7 495 995 69 39</span>
          <span>Войти в личный кабинет</span>
        </div>
      </div>
      <div className={styles.mainHeader}>
        <div className={styles.logo}>
          <h1>UVILERS</h1>
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="Например, золотое кольцо" />
          <button>🔍</button>
        </div>
        <div className={styles.navLinks}>
          <NavLink to="/rings">Кольца</NavLink>
          <NavLink to="/earrings">Серьги</NavLink>
          <NavLink to="/pendants">Подвески</NavLink>
          <NavLink to="/bracelets">Браслеты</NavLink>
          <NavLink to="/chains">Цепи</NavLink>
          <NavLink to="/kids">Детям</NavLink>
          <NavLink to="/sets">Комплекты</NavLink>
          <NavLink to="/sale">Sale</NavLink>
        </div>
        <div className={styles.cart}>
          <button>🛒</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
