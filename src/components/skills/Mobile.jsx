import React from 'react'

const Mobile = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Desenvolvimento Mobile</h3>
    
            <div className="skills__box">
                
                {/* grupo 01 */}
                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        
                        <div>
                            <h3 className="skills__name">React Native</h3>
                            <span className="skills__level">Avançado</span>
                        </div>
                    </div>
    
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
    
                        <div>
                            <h3 className="skills__name">Swift</h3>
                            <span className="skills__level">Básico</span>
                        </div>
                    </div>
    
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
    
                        <div>
                            <h3 className="skills__name">Kotlin</h3>
                            <span className="skills__level">Básico</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
    
                        <div>
                            <h3 className="skills__name">Flutter</h3>
                            <span className="skills__level">Intermediário</span>
                        </div>
                    </div>
    
                </div>
    
                {/* grupo 02 */}
                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
    
                        <div>
                            <h3 className="skills__name">Firebase</h3>
                            <span className="skills__level">Intermediário</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
    
                        <div>
                            <h3 className="skills__name">Expo</h3>
                            <span className="skills__level">Avançado</span>
                        </div>
                    </div>
    
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
    
                        <div>
                            <h3 className="skills__name">TypeScript</h3>
                            <span className="skills__level">Avançado</span>
                        </div>
                    </div>
    
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
    
                        <div>
                            <h3 className="skills__name">Dart</h3>
                            <span className="skills__level">Intermediário</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}
export default Mobile;