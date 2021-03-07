import { React } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { ReactComponent as FullStar} from '../../svg/star_full.svg';
import { ReactComponent as HalfStar} from '../../svg/star_half.svg';
import { ReactComponent as EmptyStar} from '../../svg/star_empty.svg';

const Ratings = ({rating}) => {

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

Ratings.propTypes = {
    rating: PropTypes.number
};

export default Ratings;