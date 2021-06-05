import React from 'react';
import Userbox from './components/Userbox';
import Card from './UI/Card'



function App() {

  const onNewEntry = (data) => {
    console.log(data)
  }


  return (
    <div>
      <Card>
      <Userbox newEntry={onNewEntry} />    
     </Card>

      
    </div>
  );
}

export default App;
