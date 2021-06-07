import './NewUser.css'
import Card from '../UI/Card'

const NewUserItem = (props) => {


    return (
        <Card>
        <div>
            <p>
                {props.name}
            </p>
            <p>
                {props.age}
            </p>
        </div>
        </Card>
  
    )
}

export default NewUserItem