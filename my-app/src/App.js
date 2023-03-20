import { useState } from 'react'
import './App.css'

var arr = new Array();

function App() {  
  const [task, SetTask] = useState([])

  return (
    
    <div className='App'>      
      <div>
        <label htmlFor="name">Task</label>
        <br/>
        <input type="text" id="name" />
      </div>

      <div>
        <label htmlFor="date">Date</label>
        <br/>
        <input type="date" id="date" />
      </div>

      <div>
        <input type="button" id="btn" value={"Enviar"}  onClick={ ()=> {

          var nameValue = document.querySelector("#name").value
          var dateValue = document.querySelector("#date").value

          dateValue = dateValue.replace(/-/g, "/")

          arr.push({id: arr.length, name: nameValue, data: dateValue});
          SetTask(new Array(arr));
        }} />
      </div>
      
      <hr />

      <ul>
        {(task.length > 0 ) ? task[0].map((t)=>(
          <li key={t.id}>
              <p>
                {t.name}
              </p>
              -
              <p>
                {t.data}
              </p>
              <button onClick={() => {
                debugger
                arr.splice(arr.filter(p => p.id == t.id), 1)
                SetTask(new Array(arr));
              }}>
                X
              </button>
          </li>
        )) : (
          <li>
            <p>
              Vazio
            </p>
          </li>
          )}
      </ul>
    </div>
  )
}

export default App
