interface IProps {
ImageUrl: string,
ImageName: string,
ImageClass?: string,
}

const Image = ({ImageName,ImageUrl,ImageClass}:IProps) =>  <img src={ImageUrl} alt={ImageName} className={ImageClass} />

export default Image