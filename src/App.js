import React, { useState } from 'react';
import NewUserItem from './components/NewUser';
import Userbox from './components/Userbox';
import Card from './UI/Card'



function App() {

  const [newUsers, setNewUsers] = useState([]); 

  const onNewEntry = (data) => {
    setNewUsers((prevUsers) => {
      return [data, ...prevUsers];
    })
  }


  return (
    <div>
      <Card>
      <Userbox newEntry={onNewEntry} />    
     </Card>

    <ul>
      {newUsers.map((entry) => 
      <NewUserItem 
        key={entry.id}
        name={entry.name}
        age={entry.age}
      />    
      )}
    </ul>
      
    </div>
  );
}

export default App;
