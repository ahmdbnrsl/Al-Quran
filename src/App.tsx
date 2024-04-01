import axios from 'axios';
import { useState, useEffect } from 'react';
import { getData } from './service/getData';
function App() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    getData((data) => {
      setResult(data);
    })
  }, [result]);
  return (
    <>
      <div className="w-full min-h-screen p-5 bg-slate-900 text-white">
        {
          result.map(dat => {
            return (
              <div>{dat.nama}</div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
