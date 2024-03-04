import React from 'react'
import styles from "../style"

const Services = () => (
  <>
<section className={`${styles.flexStart} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-[#D9D9D9] rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col text-black">
      <h2 className={`font-outfit font-semibold xs:text-[48px] text-[40px] text-[#161616] xs:leading-[76.8px] leading-[66.8px] w-full`}>Let’s try our service now!</h2>
      <p className={`font-outfit font-normal text-[#161616] text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      {/* <Button /> */}
    </div>


  </section>
  <section className={`${styles.flexend} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-[#D9D9D9] rounded-[20px] box-shadow`}>
  <div className="flex-1 flex flex-col">
    <h2 className={styles.heading2}>Let’s try our service now!</h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Everything you need to accept card payments and grow your business
      anywhere on the planet.
    </p>
  </div>

  <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    {/* <Button /> */}
  </div>
</section>
<section className={`${styles.flexStart} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-[#D9D9D9] rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      {/* <Button /> */}
    </div>
  </section>
  </>
);

export default Services