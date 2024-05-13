import React from "react";
import { useParams } from "react-router-dom";
import GetLogementData from "../../Components/GetLogementdata/GetLogementdata";
import GetSingleLogement from "../../Components/Getsinglelogementdata/Getsinglelogementdata";
import Error from "../../Pages/Error/Error";
import Collapse from "../../Components/Collapse/Collapse";
import './Logement.scss'

function Logement() {
  const { logementId } = useParams();
  const logements = GetLogementData();
  const logementData = GetSingleLogement(logements, logementId);

  if (Object.keys(logementData).length === 0) {
    return <Error />;
  }

  
const hostName = logementData?.host?.name?.split(' ');


  return (
    <div>
      <div className="details">
        <div className="details__infos1">
          <div className="details__infos1__title">{logementData.title}</div>
          <div className="details__infos1__location">
            {logementData.location}
          </div>
          <div className="details__infos1__tags">
            {logementData.tags.map((tag, index) => (
              <div className="tag" key={index}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="details__infos2">
          <div className="details__infos2__host">
            <div className="details__infos2__host__name">
			<span>{hostName[0]}</span>
							<span>{hostName[1]}</span>
			</div>
            <img
              src={logementData.host.picture}
              alt={logementData.host.name}
              className="details__infos2__host__picture"
            />
          </div>
        </div>
      </div>
      <div className="logement-collapse-container">
        <Collapse title={`Description`} content={logementData.description} />
        <Collapse
          title={`Equipements`}
          content={logementData.equipments.map((equipement, index) => (
            <div className="equipement-list" key={index}>
              {equipement}
            </div>
          ))}
        />
      </div>
    </div>
  );
}

export default Logement;
