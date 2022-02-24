import imgs from '../../../public/images/Prosuro.svg'
export default function Logo({height=50,width=50}) {
    return (
        <img src={imgs.src} height={height} width={width} alt="prosuro-logo" />
    )

}