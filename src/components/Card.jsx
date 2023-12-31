export default function Card({image, selected, onClick}) {
  return (
    <div className={`card ${!selected && 'selectable'}`} >
      <div className={selected && 'selected'}>
        <img src={image} className="card-face" alt=""/>
        <img src="/assets/fireship.png" className="card-back" alt="" onClick={onClick}/>
      </div>
    </div>
  );
}