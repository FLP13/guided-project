import React from 'react';

import FullStar from './star_full.svg';
import HalfStar from '../../svg/star_half.svg';
import EmptyStar from '../../svg/star_empty.svg';

type Props = {
    rating: number
}

export const Ratings: React.FC<Props> = ({rating}) => {

    return (
        <div>
            {
                [...Array(5)].map((_, i) => {
                    if (i+1 <= rating) {
                        return <span key={i}><FullStar /></span>;
                    } else if (rating - i === 0.5) {
                        return <span key={i}><HalfStar /></span>;
                    } else {
                        return <span key={i}><EmptyStar /></span>;
                    }
                })
            }
        </div>
    );
};