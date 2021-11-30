import Actions from "./Actions"
import Message from "./Message"
import ProfileImage from "./ProfileImage"
import Timestamp from "./Timestamp"
import User from "./User"

function Tweet(props) {
  const {tweet : {message, timestamp, user}} = props

  return (
    <div className="tweet">
      <ProfileImage image={user.image}/>

      <div className="body">
        <div className="top">
          <User userData={user}/>

          <Timestamp time={timestamp} />
        </div>

        <Message message={message} />     

        <Actions/>

      <i class="fas fa-ellipsis-h"></i>
    </div>
    </div>
  );
}

export default Tweet;
