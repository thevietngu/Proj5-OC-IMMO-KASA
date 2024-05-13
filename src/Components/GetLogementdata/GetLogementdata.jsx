import { useState, useEffect } from "react";

function GetLogementData() {
  const [logementData, setLogementData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch('/datas/logdatas.json');
        const logements = await data.json();
        setLogementData(logements || []);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData();
  }, []);

  return logementData;
}

export default GetLogementData;
