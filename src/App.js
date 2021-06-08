import React, { useState } from 'react';
import NewUserItem from './components/NewUser';
import Userbox from './components/Userbox';
import Card from './UI/Card'
import Modal from './UI/Modal'


function App() {

  const [newUsers, setNewUsers] = useState([]); 
  const [isModalActive, setModalActive] = useState(false);

  const onNewEntry = (data) => {
    setNewUsers((prevUsers) => {
      return [data, ...prevUsers];
    })
  }

  const onWarning = (badData) => {
    setModalActive(badData)
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
    <Modal display={isModalActive}>

    </Modal>
    </div>
  );
}

export default App;
