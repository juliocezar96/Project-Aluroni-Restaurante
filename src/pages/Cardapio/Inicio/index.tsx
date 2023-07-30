import cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';

export default function Inicio() {

  let pratosRecomentados = [...cardapio];
  pratosRecomentados = pratosRecomentados.sort(() => 0.5 - Math.random()).splice(0,3);

  return(
    <section>

      <h3 className={styles.titulo}>
            Recomendacoes da cozinha
      </h3>
      <div className={styles.recomendados}>
        {pratosRecomentados.map(item =>(
          <div className={styles.recomendados} key={item.id}>
            <div className={styles.recomendados__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recomendados__botao}>
                Ver mais
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}