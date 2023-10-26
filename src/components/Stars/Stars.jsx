import { Star } from '../Star'

export const Stars = (props) => {
    const { count } = props;

    if (!Number.isInteger(count) || count < 1 || count > 5) return null;

    return (
        <ul className="card-body-stars u-clearfix">
            {Array.from({ length: count }, (_, index) => <Star key={index} />)}
        </ul>
    )
}
