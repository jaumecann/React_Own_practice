import './NewUser.css'
import Card from '../UI/Card'

const NewUserItem = (props) => {


    return (
      
        <div className="user-display">
            <p>
              {props.name} {props.age}
            </p>
        </div>
        
  
    )
}

export default NewUserItem