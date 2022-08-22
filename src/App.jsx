import styles from './style'
import {Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer} from './components'
import { useEffect, useState } from 'react';

const App = () => {

  const [scroll, setScroll] = useState(false);

  document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  return (
    <div className='bg-primary w-full'>
      <div className={`${styles.paddingX} ${styles.flexCenter} sticky top-0 z-[10] transition-all ${scroll && 'bg-dimPrimary'}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero   />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} overflow-hidden`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
