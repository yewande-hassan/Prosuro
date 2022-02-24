import imgs from '../../../public/images/Vector.svg';
import images from '../../../public/images/Layer-15.svg'
import styles from '../../../styles/styles.module.css';
export default function Filter({height,width,placeholder, src}) {
    return (
         <div className={`d-flex flex-column ${styles.selectwrap}`}>
            <input placeholder={placeholder} className={`form-control  ${styles.select}`}/>
            <img className= {styles.arrow} src={imgs.src} height={height} width={width} alt="search icon" />
            <img className= {styles.filter} src={images.src} height={height} width={width} alt="filtericon" />
        </div>
    )
}