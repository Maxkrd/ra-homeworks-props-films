import './FilmsRating.css';
import { FilmCard } from '../FilmCard';

export const FilmsRating = () => {
    const films = [{
        id: 1,
        title: 'Зеленая миля',
        img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/acb932eb-c7d0-42de-92df-f5f306c4c48e/orig',
        price: 1299,
        count: 1
    }, {
        id: 2,
        title: 'Побег из Шоушенка',
        img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/e26044e5-2d5a-4b38-a133-a776ad93366f/orig',
        price: 899,
        count: 4
    }]
    return (
        <div className="container">
            {films.map(film => <FilmCard key={film.id} film={film}/>)}
        </div>
    )
}
