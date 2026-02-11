import styles from "./Perfil.module.scss"

import fotoperfil from "../../assets/fotoperfil.png";

function Perfil() {
  return (
    <section className={styles.containerTelaPerfil}>
      <article>
        <img src={fotoperfil} alt="Foto de perfil" />

        <div className={styles.cardInfo}>
          <h2> Stefanny Souza </h2>
          <h3> Voluntária Ativa</h3>

          <p className={styles.paragrafoSobreMim}>
            Eu realmente acredito que estender a mão ao próximo transforma,
             de forma bonita e silenciosa, tanto quem oferece ajuda quanto quem a recebe. Foi nesse caminho que eu me encontrei,
             e carrego comigo o desejo sincero de que outras pessoas também possam sentir esse mesmo abraço de acolhimento.
          </p>

          <address>
            <p> Miguel Calmon, BA</p>
            <p>Stefannysouza.sza@gmail.com</p>
            <p> Membro desde Outubro de 2025</p>
          </address>

          <ul className={styles.listaInteresses}>
            <li>Educação</li>
            <li>Meio Ambiente</li>
            <li>Assistência Social</li>
            <li>Design</li>
          </ul>
        </div>

      </article>
    </section>
  );
}

export default Perfil;

