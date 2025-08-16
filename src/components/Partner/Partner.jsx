import { Assets } from '../../assets/Assets';
import './Partner.css';

function Partner() {
  return (
    <div className="partner">
      <h2>Partenaires</h2>
      <div className="partner-logos">
        <a href="https://www.imt-mines-ales.fr/" >
          <img src={Assets.ema} alt="EMA" />
        </a>
        <a href="https://www.energetis.com" >
          <img src={Assets.energetis} alt="Energetis" />
        </a>
      </div>
    </div>
  )
}

export default Partner
