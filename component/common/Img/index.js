import imgs from '../../../public/images/Bell.svg'

export default function Img({height,width,className}) {
    return (
        <img src={imgs.src} height={height} width={width} className= {className} alt="prosuro-logo" />
    )

}