function ProfileImage(props) {
    return(
        <div>
            <img
                src={props.tweet.user.image}
                className="profile"
                alt="profile"
            />
        </div>
    )
}

export default ProfileImage