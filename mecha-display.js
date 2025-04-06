export function initMechaDisplay() {
    const mechaSection = document.getElementById('mechas');
    if (!mechaSection) return;
    
    // Update mecha display with a proper image
    const mechaDisplay = mechaSection.querySelector('.mecha-display');
    if (mechaDisplay) {
        // Replace the hologram with the mecha image
        const mechaHologram = mechaDisplay.querySelector('.mecha-hologram');
        if (mechaHologram) {
            mechaHologram.innerHTML = '';
            
            // Create container for the image with hologram effects
            const imageContainer = document.createElement('div');
            imageContainer.className = 'mecha-image-container';
            
            // Add the mecha image
            const mechaImage = document.createElement('img');
            mechaImage.src = '/mecha.png';
            mechaImage.alt = 'Expedition Unit-01';
            
            // Add hologram effects
            const hologramOverlay = document.createElement('div');
            hologramOverlay.className = 'hologram-overlay';
            
            const scanLine = document.createElement('div');
            scanLine.className = 'scan-line';
            
            // Assemble the components
            imageContainer.appendChild(mechaImage);
            imageContainer.appendChild(hologramOverlay);
            imageContainer.appendChild(scanLine);
            mechaHologram.appendChild(imageContainer);
            
            // Add CSS for the mecha display
            const styleElement = document.createElement('style');
            styleElement.textContent = `
                .mecha-hologram {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    position: relative;
                }
                
                .mecha-image-container {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                
                .mecha-image-container img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                    position: relative;
                    z-index: 1;
                }
                
                .hologram-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        135deg,
                        rgba(255, 0, 0, 0.1) 0%,
                        rgba(0, 0, 0, 0) 50%,
                        rgba(0, 200, 255, 0.1) 100%
                    );
                    z-index: 2;
                    pointer-events: none;
                }
                
                .scan-line {
                    position: absolute;
                    width: 100%;
                    height: 5px;
                    background: linear-gradient(
                        to bottom,
                        rgba(0, 200, 255, 0),
                        rgba(0, 200, 255, 0.5),
                        rgba(0, 200, 255, 0)
                    );
                    z-index: 3;
                    animation: scanAnimation 3s ease-in-out infinite;
                    pointer-events: none;
                }
                
                @keyframes scanAnimation {
                    0% { top: 0%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
            `;
            document.head.appendChild(styleElement);
        }
    }
    
    // Update mecha description
    const mechaDescription = mechaSection.querySelector('.mecha-description');
    if (mechaDescription) {
        mechaDescription.innerHTML = `
            <p>Los Expeditions son unidades mecánicas de combate desarrolladas para proteger a Tokyo-3 de los Ángeles. Cada unidad tiene características únicas y requiere un piloto con alta compatibilidad genética.</p>
            <p>El sistema de sincronización neuronal permite al piloto controlar la unidad como una extensión de su propio cuerpo, pero esto crea una conexión profunda que puede tener consecuencias físicas y mentales.</p>
            <div class="mecha-specs">
                <h4>ESPECIFICACIONES TÉCNICAS - EXPEDITION UNIT-01</h4>
                <ul>
                    <li><strong>Altura:</strong> 75 metros</li>
                    <li><strong>Peso:</strong> 2,500 toneladas</li>
                    <li><strong>Blindaje:</strong> Aleación de titanio reforzado con campo A.T.</li>
                    <li><strong>Sistemas:</strong> Soporte vital, análisis ambiental, asistencia táctica</li>
                    <li><strong>Armamento:</strong> Rifle de partículas, cuchillo progresivo, escudo térmico</li>
                </ul>
            </div>
        `;
        
        // Add styling for mecha specs
        const style = document.createElement('style');
        style.textContent = `
            .mecha-specs {
                margin-top: 15px;
                padding-top: 15px;
                border-top: 1px solid rgba(255, 0, 0, 0.3);
            }
            
            .mecha-specs h4 {
                color: var(--secondary);
                margin-bottom: 10px;
            }
            
            .mecha-specs ul {
                list-style: none;
                padding-left: 0;
            }
            
            .mecha-specs li {
                margin-bottom: 8px;
                padding-left: 15px;
                position: relative;
            }
            
            .mecha-specs li::before {
                content: '>';
                color: var(--primary);
                position: absolute;
                left: 0;
            }
            
            .mecha-specs strong {
                color: var(--text-dim);
            }
        `;
        document.head.appendChild(style);
    }
}