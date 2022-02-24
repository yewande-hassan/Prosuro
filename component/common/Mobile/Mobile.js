import imgs from '../../../public/images/mobile.svg'

export default function Mobile({height,width,className}) {
    return (
        <img src={imgs.src} height={height} width={width} className={className} alt="prosuro-logo" />
    )

}