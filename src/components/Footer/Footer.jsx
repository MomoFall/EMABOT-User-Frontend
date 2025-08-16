import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <p>© 2025 EMA-BOT -- Association de robotique de l'IMT Mines Alès. Tous droits réservés.</p>
      <p>Contact: <a href="mailto:contact@ema-bot.com">contact@ema-bot.com</a></p>
      <p>Suivez-nous sur nos réseaux sociaux</p>
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <p>Politique de confidentialité | Conditions d'utilisation</p>
    </div>
  )
}

export default Footer
