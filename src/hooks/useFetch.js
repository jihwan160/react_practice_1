
import { useEffect,useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then( async res => {
        return await res.json()
      })
      .then(data => {
        setData(data);
      }).catch(console.error("Asdf"));
  }, [url])
  
  return data;
}

export default useFetch