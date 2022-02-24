import imgs from '../../../public/images/Person.svg'

export default function Img1({height,width,className}) {
    return (
        <img src={imgs.src} height={height} width={width} className={className} alt="prosuro-logo" />
    )

}