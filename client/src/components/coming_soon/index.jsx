import styles from './style.module.css'
import coming_soon from '../../img/Construction worker-rafiki.svg'

export default function CommingSoon() {
    return (
        <div className={styles.mainContainer}>
            <p className={styles.title}>No momento, estamos construindo esta parte do site.</p>
            <div className={styles.imageContainer}>
                <img
                    className={styles.img}
                    src={coming_soon}
                    alt={""}
                />
            </div>
            
        </div>
    );
}