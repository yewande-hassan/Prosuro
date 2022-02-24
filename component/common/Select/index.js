import imgs from '../../../public/images/Vector.svg';
import styles from '../../../styles/styles.module.css';
export default function Select({height,width,placeholder}) {
    return (
         <div className={styles.selectwrap}>
            <input placeholder={placeholder} className={`form-control  ${styles.select}`}/>
            <img className= {styles.arrow} src={imgs.src} height={height} width={width} alt="search icon" />
        </div>
    )
}