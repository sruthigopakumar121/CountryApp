import React from 'react'

function Favourite(props) {
    const { data , ...rest } = props;
    return (
        <div>
            {data.name}
        </div>
    )
}

export default Favourite;
