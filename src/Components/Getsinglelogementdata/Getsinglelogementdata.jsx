

function GetSingleLogement(logements, logementId) {
    return logements.find((logement) => logement.id === logementId) || {};
  }
  
  export default GetSingleLogement