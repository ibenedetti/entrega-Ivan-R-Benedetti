import './styles.css';

const Item = ({ title , description , price , image , stock}) => {
  return (
    <div className="card-container">
        <h6 className="card-title">{title}</h6>
        <img src={image} alt={title} width={70} />
        <div className="card-description">
            <p>{description}</p>
        </div>

        <p>{price}</p>
        <div>
          <p>
            Stock: <b>{stock}</b>
          </p>
      </div>
    </div>
    
  )
}

export default Item