import './styles.css';

const ItemDetail = ({ itemSelected }) => {
  return (
    <div className='container'>
      <h6 className='card-title'>{itemSelected?.title}</h6>
      <img src={itemSelected?.image} alt={itemSelected?.title} width={70} />
      <div className='card-description'>
        <p>{itemSelected?.description}</p>
      </div>

      <p>{itemSelected?.price}</p>
    </div>
  )
}

export default ItemDetail