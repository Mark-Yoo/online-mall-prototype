import React, { FC } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import styles from './applayout.module.scss';

interface Props {
  children: React.ReactNode;
}

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.appLayout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
