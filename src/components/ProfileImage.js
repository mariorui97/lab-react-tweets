import React from 'react'

function ProfileImage(props) {
    console.log(props, 'asd')
    const {image} = props
    return (
        <>
            <img src={image} className="profile" alt="profile" />
        </>
    )
}

export default ProfileImage
