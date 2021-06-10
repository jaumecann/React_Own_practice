import './Modal.css'

const Modal = (props) => {

let content = "Empty content";

if (props.type === "Negative"){
  content = "Negative content";
}

const closeHandler = () =>{
    props.onClose(true)
}

return (
    <div className="modal">
        <div>
        {content}
        </div>    
        <button type="button" onClick={closeHandler}>Close</button>
    </div>
 
)

}

export default Modal