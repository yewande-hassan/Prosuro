import Img from '../component/common/Img';
import Logo from '../component/common/Logo';
import styles from '../styles/styles.module.css';
import {Bell} from '../public/images/Bell.svg';
import {Person} from '../public/images/Person.svg'
import Img1 from '../component/common/Img1';
import Mobile from '../component/common/Mobile/Mobile';

import { data } from '../component/common/data/data';

import Search from '../component/common/Search';
import Select from '../component/common/Select';
import Filter from '../component/common/Filter';


export default function Home() {
  return (
    <>
      <div className='container'>
        <div className={`d-flex flex-row justify-content-between mt-2 ${styles.wrap}`}>
          <div className='d-flex flex-row mt-3'>
            <Logo height={25} width={25} />
            <h5>Prosuro</h5>
          </div>
          <nav className={`navbar navbar-expand-lg navbar-light`}>

            <div className="collapse navbar-collapse " id="navbarSupportedContent">

              <a className={`nav-link ${styles.navlink}`} aria-current="page" href="#">Dashboard</a>
              <a className={`nav-link ${styles.navlink}`} href="#">Client</a>
              <a className={`nav-link ${styles.active}`} href="#">Purchase</a>
              <a className={`nav-link ${styles.navlink}`} href="#">Policies</a>
              <a className={`nav-link ${styles.navlink}`} href="#">Recievables</a>
              <a className={`nav-link ${styles.navlink}`} href="#">Payment</a>

            </div >

          </nav>
          <div className='d-flex flex-row'>
            <Img className={`${styles.bell}`} src={Bell} height={25} width={25} />
            <Img1 className={`${styles.person}`} src={Person} height={50} width={50} />
          </div>
        </div>
        <div className='my-4'>
          <p className='Home'>Home / purchase</p>
          <h3 className='purchase'>Purchase</h3>
          <div className='d-flex flex-row justify-content-between'>
          <Search height={15} width={15}/>
            <div className='d-flex flex-row'>
          <Select placeholder='All Status' height={15} width={15} />
          <Filter placeholder='Filter by' heigth={ 14} width={12}/>
          </div>
          </div>
        </div>
        <table className='container'>
          <thead>
           
            <tr style={{
                  display: "flex", flexDirection: "space-between"
                }}className={`my-2 ${styles.row}`}>
              <th className={`${styles.tf}`}scope="col">Date</th>
              <th className={styles.th} scope="col">Reference</th>
              <th className={styles.th} scope="col">Product</th>
              <th className={`${styles.tw} ${styles.th}`} scope="col">Client</th>
              <th className={styles.th} scope="col">Premuim</th>
              <th></th>
            </tr>

          </thead>
          <tbody>
            {data.map((datas, index) => {
              return <tr scope="row" key={`${index}-row`} className={`d-flex flex-row justify-content-between my-2 ${styles.row}`} >
                <td className={styles.td}>{datas["date"]}</td>
                <td className={styles.td}>{datas["reference"]}</td>
                <td style={{
                  display: "flex", flexDirection: "space-between"
                }} className={styles.tm}>
                  <div className={styles.mobilewrap}>
                  <Mobile className={`${styles.mobile}`} src={Mobile} height={20} width={30} />
                  </div>
                  <div style={{
                  display: "flex", flexDirection: "column",paddingLeft:"20px"
                }}>
                  <div className={styles.td}>{datas["product1"]}</div><div className={styles.tdetails}>{datas["product2"]}</div>
                  </div>
                  </td>
                <td style={{
                  display: "flex", flexDirection: "row"
                }} className={styles.tm}>
                  <div style={{
                  display: "flex", flexDirection: "column"
                }}>
                  <div className={styles.td}>{datas["client1"]}</div><div className={styles.tdetails}>{datas["email"]}</div>
                  </div>
                  </td>
                <td className={styles.td}>
                  <div>
                    <span className='mx-2'>{datas["premuim"]}</span>
                    <span>
                      <button type="button" className="btn btn-outline-success px-3">Paid</button>
                      </span>
                      </div>
                      </td>
              </tr>

            })}
                            
          </tbody>
        </table>
      </div>
    </>
  )
}
