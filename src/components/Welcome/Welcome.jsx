import { Assets } from '../../assets/Assets';
import './Welcome.css';

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome-content">
        <h1>
          Commandez votre<br />
          matériel de robotique<br />
          avec EMA Bot
        </h1>
        <p>
          Cartes, capteurs, moteurs, impression 3D… Tout le nécessaire pour vos projets étudiants et compétitions.
        </p>
      </div>
      <img className="welcome-bg" src={Assets.robot} alt="Robot" />
    </div>
  );
}

export default Welcome;