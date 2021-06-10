import React, { useState } from 'react';
import NewUserItem from './components/NewUser';
import Userbox from './components/Userbox';
import Card from './UI/Card';
import Overlay from './UI/Overlay';
import Modal from './components/Modal'


function App() {

  const [newUsers, setNewUsers] = useState([]); 
  const [isOverlayActive, setOverlayActive] = useState({value:false, type:''});

  const onNewEntry = (data) => {
    setNewUsers((prevUsers) => {
      return [data, ...prevUsers];
    })
  }

  const onWarning = (badData) => {
    setOverlayActive(badData)
  }

  const closeHandler = isClosed => {
    setOverlayActive({value: !isClosed, type:''})
  }


  return (
    <div>
      <Card>
      <Userbox newEntry={onNewEntry} warning={onWarning} />    
     </Card>

    <Card>
      {newUsers.map((entry) => 
      <NewUserItem 
        key={entry.id}
        name={entry.name}
        age={entry.age}
      />    
      )}
    </Card>
    <Overlay display={isOverlayActive.value} isClosed={closeHandler}>
        <Card>
          <Modal type={isOverlayActive.type} onClose={closeHandler} />
        </Card>
    </Overlay>
    </div>
  );
}

export default App;
