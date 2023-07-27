import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import styles from './Cardapio.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';
import Buscador from './Buscador';

export default function Cardapio() {

  const { t, i18n } = useTranslation();
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'pt', label: 'Português' },
  ];

  const changeLanguage = (language: string | undefined) => {
    i18n.changeLanguage(language);
  };


  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
        <Select
          className={styles.languageDropdown}
          options={languageOptions}
          onChange={(selectedOption) => changeLanguage(selectedOption?.value)}
          value={languageOptions.find((option) => option.value === i18n.language)}
          isSearchable={false}
        />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>{t('headerText')}</div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>{t('menuLabel')}</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
      </section>
    </main>
  );
}
