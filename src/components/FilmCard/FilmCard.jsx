import './FilmCard.css'
import { Stars } from '../Stars';

export const FilmCard = (props) => {
    const { film } = props;
    return (
        <div className="film" id={film.id}>
            <img className="film-image" src={film.img} alt={film.title}/>
            <h3>{film.title}</h3>
            <div className="link-wrapper">
                <a href="#"><span className="material-icons">favorite</span></a>
                <a href="#"><span className="material-icons">share</span></a>
            </div>
            <Stars count={film.count}/>
            <div className="btn-wrapper">
                <button className="btn film-price">{`Купить ${film.price} ₽`}</button>
                <button className="btn film-details">Подробнее →</button>
            </div>
        </div>
    )
}
