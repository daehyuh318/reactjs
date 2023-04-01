import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {

    fetch("http://localhost/Api/members")
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.log(error));
  }, []);
  
  return (
    <div>
        <table>
          <tr>
            <td>아이디</td>
            <td>이름</td>
          </tr>
          {data.map(item => (
            <tr>
              <td>{item.id}</td><td>{item.name}</td>
            </tr>
          ))}

        </table>

      </div>
  );
}

export default App;