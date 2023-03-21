import styles from "./style";
import { Billing, FadeInOnScroll, Carbon, Stake, CTA, Footer, Navbar, Stats,  Hero } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <FadeInOnScroll>
        <Stake />
        </FadeInOnScroll>
        <FadeInOnScroll>
        <Carbon />
        </FadeInOnScroll>
        <FadeInOnScroll>
        <Billing />
        </FadeInOnScroll>
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
