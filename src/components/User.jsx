function User(props) {
    return(
        <div className="user">
             <span className="user">
            <span className="name">{props.tweet.user.name}</span>
            <span className="handle">{props.tweet.user.handle}</span>
          </span>

        </div>
    )
}

export default User;