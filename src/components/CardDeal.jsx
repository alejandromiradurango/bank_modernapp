import {card} from '../assets';
import styles, {layout} from '../style';
import Button from './Button'

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Quis qui cillum id eu ex commodo laborum adipisicing nisi cillum ea minim. Ullamco incididunt elit mollit duis. Officia excepteur ad consequat officia dolor. Voluptate commodo excepteur Lorem sit laboris velit amet est est aliqua veniam deserunt.</p>
      <Button styles="mt-10" title="Let's start"/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="Card" className='w-[100%] h-[100%]'/>
      </div>
    </section>
)

export default CardDeal