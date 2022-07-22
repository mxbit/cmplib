import React from 'react';
import PropTypes from 'prop-types';
import './simplecard.scss'
export const SimpleCard = ({ header, description, handler }) => {

    return (
        <div className='topic-div'>
            <div className='topic-container'>
                <h2 className='topic-heading-tag' onClick={()=>handler()}>{header} </h2>
                <p onClick={()=>handler()}>{description}</p>
            </div>
        </div>
    )
}
SimpleCard.propTypes = {
    header: PropTypes.string,
    description: PropTypes.string,
    handler: PropTypes.func.isRequired,
}
SimpleCard.defaultProps = {
    header: 'Heading Text Goes Here',
    description: 'Description here',
}

