import React from 'react';
import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';
import { t } from 'i18next';

interface Props {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

export default function Buscador({ busca, setBusca }: Props) {
  return (
    <div className={styles.buscador}>
      <input
        onChange={(event) => setBusca(event.target.value)}
        value={busca}
        placeholder={t('searchPlaceholder')}
      />
      <CgSearch size={20} color='#4C4D5F' />
    </div>
  );
}