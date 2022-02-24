import imgs from '../../../public/images/Searchicon.svg';
import styles from '../../../styles/styles.module.css';
export default function Search({height,width}) {
    return (
         <div className={styles.div}>
            <input placeholder="Search for transactions" className={`form-control my-3 ${styles.input}`}/>
            <img className= {styles.search} src={imgs.src} height={height} width={width} alt="search icon" />
        </div>
    )

}