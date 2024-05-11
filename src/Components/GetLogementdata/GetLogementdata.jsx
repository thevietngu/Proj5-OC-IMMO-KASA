import { useState, useEffect } from 'react';

function GetLogementdata() {
  const [logementData, setLogementData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/datas/logdatas.json');

        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const data = await response.json();
        setLogementData(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données JSON:', error);
      }
    };

    fetchData();
  }, []);

  return logementData;
}

export default GetLogementdata;
