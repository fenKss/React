import React from 'react';
import s     from './header.module.scss';

const Header = () => {
  return (
      <header>
        <div className={s.wrapper}>
          <div className={s.header_left}>
            <div className={s.title}>Blog</div>
            <div className={s.description}>About something</div>
          </div>
          <div className={s.header_right}>
      login
          </div>
        </div>
      </header>
  );
};

export default Header;