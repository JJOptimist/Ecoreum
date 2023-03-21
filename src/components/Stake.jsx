import {stake} from "../assets";
import styles, { layout } from "../style";

const Stake = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={stake} alt="stake" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Stake and Earn <br className="sm:block hidden" /> Eco Token
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Ecoreum is good for the planet in several ways. Unlike traditional cryptocurrencies that rely on energy-intensive mining practices, Ecoreum has close to zero carbon footprint. This is because Ecoreum is built on a Proof-of-Stake (PoS) algorithm, which requires significantly less energy consumption compared to Proof-of-Work (PoW) algorithms used by other cryptocurrencies like Bitcoin.
      </p>

      
    </div>
  </section>
);

export default Stake;
