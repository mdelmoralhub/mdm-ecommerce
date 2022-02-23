import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export const GenericWidget = () => {
    return (
        <div>
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
    )
}