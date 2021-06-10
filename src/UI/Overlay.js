import './Overlay.css'

const Overlay = (props) => {

const closeOverlay = () => {
 props.isClosed(true)
}

if (props.display){
 return (
     <div className="overlay" onClick={closeOverlay}>
       {props.children}
     </div>
 )
}  
  
return (
    <div>

    </div>
)

}

export default Overlay