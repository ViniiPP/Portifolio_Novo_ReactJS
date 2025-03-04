import React from 'react'

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Desenvolvimento FrontEnd</h3>
    
            <div className="skills__box">

                {/* grupo 01 */}
                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        
                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">Avançado</span>
                        </div>
                    </div>
    
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
    
                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">Avançado</span>
                        </div>
                    </div>
    
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
    
                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__level">Avançado</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
    
                        <div>
                            <h3 className="skills__name">Figma</h3>
                            <span className="skills__level">Avançado</span>
                        </div>
                    </div>
    
                </div>
    
                {/* grupo 02 */}
                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
    
                        <div>
                            <h3 className="skills__name">Git</h3>
                            <span className="skills__level">Avançado</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
    
                        <div>
                            <h3 className="skills__name">Tailwind CSS</h3>
                            <span className="skills__level">Intermediário</span>
                        </div>
                    </div>
    
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
    
                        <div>
                            <h3 className="skills__name">BootStrap</h3>
                            <span className="skills__level">Intermediário</span>
                        </div>
                    </div>
    
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
    
                        <div>
                            <h3 className="skills__name">React JS</h3>
                            <span className="skills__level">Avançado</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}
export default Frontend;