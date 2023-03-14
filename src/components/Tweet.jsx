import User from './User'
import Actions from './Actions'
import Message from './Message'
import ProfileImage from './ProfileImage'
import Timestamp from './Timestamp'

function Tweet(props) {
 console.log(props)
   
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image}/>

      <div className="body">
        <div className="top">
          
            <User user={props.tweet.user}/>
            <Timestamp timestamp={props.tweet.timestamp}/>
        </div>

        
          <Message message={props.tweet.message}/>
        
          <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
