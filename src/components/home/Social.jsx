import React from 'react'

export const Social = () => {
  return (
    <div className="home__social">
        <a 
            href="https://www.instagram.com/viniipp" 
            className="home__social-icon" 
            target='_blank'
            rel="noopener noreferrer"
            >
            <i class="uil uil-instagram"></i>
        </a>

        <a 
            href="https://www.linkedin.com/in/vinicius-pereira-polli17" 
            className="home__social-icon" 
            target='_blank'
            rel="noopener noreferrer"
            >
            <i class="uil uil-linkedin-alt"></i>
        </a>

        <a 
            href="https://www.github.com/ViniiPP" 
            className="home__social-icon" 
            target='_blank'
            rel="noopener noreferrer"
            >
            <i class="uil uil-github-alt"></i>
        </a>


    </div>
  )
}
