import User from './User'
import Actions from './Actions'
import Message from './Message'
import ProfileImage from './ProfileImage'
import Timestamp from './Timestamp'

function Tweet(props) {
 
   
  return (
    <div className="tweet">
      <ProfileImage image={props.user.image}/>

      <div className="body">
        <div className="top">
          <span className="user">
            <User user={props.user.name}/>
            
          </span>

          <Timestamp timestamp={Timestamp}/>
        </div>

        
          <Message message={Message}/>
        
          <Actions actions={Actions}/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
