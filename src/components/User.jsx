function User(props) {
  
    return(
        <div className="user">
             <span className="user">
            <span className="name">{props.user.name}</span>
            <span className="handle">{props.user.handle}</span>
          </span>

        </div>
    )
}

export default User;