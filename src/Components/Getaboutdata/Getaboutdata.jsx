import { useState, useEffect } from 'react';

function Getaboutdata() {
  const [aboutData, setaboutData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/datas/aboutData.json');

        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const data = await response.json();
        setaboutData(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données JSON:', error);
      }
    };

    fetchData();
  }, []);

  return aboutData;
}

export default Getaboutdata;
