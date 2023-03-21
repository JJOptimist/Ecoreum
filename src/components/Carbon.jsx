import { carbon } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Carbon = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Low-Carbon Footprint  <br className="sm:block hidden" /> Cryptocurrency
        
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Unlike traditional cryptocurrencies that rely on energy-intensive mining practices, Ecoreum has close to 0 carbon footprint, making it a greener and more responsible choice.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={carbon} alt="carbon" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Carbon;
