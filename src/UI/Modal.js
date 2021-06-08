import './Modal.css'

const Modal = (props) => {

if (props.display){
 return (
     <div className="overlay">
       {props.children}
     </div>
 )
}  
  
return (
    <div>

    </div>
)

}

export default Modal