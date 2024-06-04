import React from 'react'

function Avatar({classDiv, imgSrc, classImg}) {
    return (
        <div className="avatar">
            <div className={classDiv}>
                <img className={classImg} src={imgSrc} alt='avatar' />
            </div>
        </div>
    )
}

export default Avatar