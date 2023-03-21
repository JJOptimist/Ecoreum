import { planet} from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={planet} alt="planet" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Incentivizing Sustainable  <br className="sm:block hidden" /> Practices
      with Ecoreum
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Ecoreum encourages eco-friendly initiatives by rewarding users who participate in recycling and other sustainable practices. This creates a positive impact on the environment by incentivizing users to take actions that benefit the planet.
      </p>

      
    </div>
  </section>
);

export default Billing;
