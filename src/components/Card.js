function Card(props){
    
    function handleClick() {
        props.onCardClick(props.card);
      }  

    return(
            <li className="photo__box" id="element-li">
                <img className="photo__image" id="photo__image" src={props.link} alt={props.name} onClick={handleClick}></img>
                <button className="photo__delete" type="button" aria-label="кнопка удалить"></button>
                <div className="photo__text-box">
                    <h2 className="photo__text" id="photo__text">{props.name}</h2>
                    <div className="photo__like-box">
                        <button className="photo__like" type="button" aria-label="кнопка лайк"></button>
                        <p className="photo__like-count">0</p>
                    </div>
                </div>
            </li>
    )
}

export default Card;