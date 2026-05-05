import './style.css'
export default function UserProfile(props) {

  return (
    <section className="user">
      <div className='container'>
        <img src={props.photo} alt={props.name}></img>

        <div className='info'>
        <p className='username'>{props.username}</p>
        <p>{props.name}</p>
        </div>
        
        </div>
        <button>Trocar</button>

    </section>
  );
}
