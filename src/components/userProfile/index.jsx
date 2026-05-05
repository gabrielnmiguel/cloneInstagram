import './style.css'

export default function UserProfile(props) {
  return (
    <div className="user">
        <img src={props.photo} alt={props.name}></img>
        <div className='userInfo'>
        <p className='username'>{props.username}</p>
        <p>{props.name}</p>
        </div>
    </div>
  );
}