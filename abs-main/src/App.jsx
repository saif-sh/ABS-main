import styles from "./style";

import { Navbar, Hero, Stats, About, Services, Testimonials, Blogcard, Footer } from './components';

const App = () => (
  <div className="bg-[url('./assets/bgimg.png')] bg-cover p-0">
    <div className=" w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>

        <Navbar />

      </div>

      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <Stats />

      <div className={` ${styles.paddingY} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Services />
          <Testimonials />
        </div>
      </div>
      <Blogcard styles="xl:w-full" />
      <Footer />
    </div>
  </div>
);

export default App