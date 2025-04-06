// New file for character stats visualization and management

export function initCharacterStats() {
    const characterSection = document.getElementById('characters');
    if (!characterSection) return;

    // Ensure the character section is properly initialized
    if (!characterSection.querySelector('.character-stats-triangle')) {
        // Find the abilities section
        const abilitiesSection = characterSection.querySelector('.char-attribute.abilities');
        if (abilitiesSection) {
            // Replace abilities section with our new stats system
            abilitiesSection.innerHTML = `
                <span class="attr-label">ESTADÍSTICAS:</span>
                <div class="stats-container">
                    <div class="stats-triangle-container">
                        <div class="stats-triangle">
                            <svg viewBox="0 0 200 180" width="200" height="180">
                                <!-- Background layer with more visual interest -->
                                <defs>
                                    <radialGradient id="triangleGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                        <stop offset="0%" stop-color="rgba(0, 0, 0, 0)" />
                                        <stop offset="100%" stop-color="rgba(255, 0, 0, 0.1)" />
                                    </radialGradient>

                                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                        <feGaussianBlur stdDeviation="5" result="blur" />
                                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                    </filter>
                                </defs>

                                <!-- Background fill for the triangle -->
                                <polygon points="100,10 10,170 190,170" fill="url(#triangleGradient)" />

                                <!-- Main triangle outline -->
                                <polygon points="100,10 10,170 190,170" fill="none" stroke="var(--primary)" stroke-width="2" />

                                <!-- Stat point with enhanced look -->
                                <circle id="stat-point" cx="100" cy="100" r="5" fill="var(--primary)" filter="url(#glow)" />

                                <!-- Stat icons with better design -->
                                <g class="stat-icon academic" transform="translate(100, 0)">
                                    <circle cx="0" cy="10" r="15" fill="rgba(0, 200, 255, 0.2)" stroke="var(--secondary)" stroke-width="1" />
                                    <path d="M-8,15 L8,15 L0,5 Z" fill="var(--secondary)" />
                                    <rect x="-5" y="5" width="10" height="10" fill="var(--secondary)" />
                                </g>

                                <g class="stat-icon social" transform="translate(190, 170)">
                                    <circle cx="0" cy="0" r="15" fill="rgba(255, 0, 255, 0.2)" stroke="#ff00ff" stroke-width="1" />
                                    <circle cx="-5" cy="-5" r="3" fill="#ff00ff" />
                                    <circle cx="5" cy="-5" r="3" fill="#ff00ff" />
                                    <path d="M-5,5 Q0,10 5,5" stroke="#ff00ff" stroke-width="2" fill="none" />
                                </g>

                                <g class="stat-icon genetic" transform="translate(10, 170)">
                                    <circle cx="0" cy="0" r="15" fill="rgba(255, 0, 0, 0.2)" stroke="var(--primary)" stroke-width="1" />
                                    <path d="M-5,-5 L5,5 M-5,5 L5,-5" stroke="var(--primary)" stroke-width="2" />
                                    <circle cx="0" cy="0" r="3" fill="var(--primary)" />
                                </g>

                                <!-- Grid lines with animated pulse -->
                                <line x1="100" y1="10" x2="100" y2="170" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1" stroke-dasharray="5,5" class="grid-line" />
                                <line x1="10" y1="170" x2="100" y2="10" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1" stroke-dasharray="5,5" class="grid-line" />
                                <line x1="100" y1="10" x2="190" y2="170" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1" stroke-dasharray="5,5" class="grid-line" />
                                <line x1="10" y1="170" x2="190" y2="170" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1" stroke-dasharray="5,5" class="grid-line" />

                                <!-- Additional decorative elements -->
                                <circle cx="100" cy="90" r="60" fill="none" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1" stroke-dasharray="2,4" />

                                <!-- Inner triangle segmentation -->
                                <line x1="100" y1="90" x2="55" y2="170" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1" />
                                <line x1="100" y1="90" x2="145" y2="170" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1" />
                                <line x1="55" y1="170" x2="145" y2="170" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1" />

                                <!-- Stat value indicators (moved slightly to not overlap with lines) -->
                                <text id="academic-value" x="100" y="35" text-anchor="middle" fill="var(--text)" font-size="12" class="stat-value"></text>
                                <text id="social-value" x="160" y="155" text-anchor="middle" fill="var(--text)" font-size="12" class="stat-value"></text>
                                <text id="genetic-value" x="40" y="155" text-anchor="middle" fill="var(--text)" font-size="12" class="stat-value"></text>
                            </svg>
                        </div>
                        <div class="stats-inputs">
                            <div class="stat-input">
                                <label for="academic-stat">ACADÉMICO:</label>
                                <input type="number" id="academic-stat" min="0" max="30" value="10">
                            </div>
                            <div class="stat-input">
                                <label for="social-stat">SOCIAL:</label>
                                <input type="number" id="social-stat" min="0" max="30" value="10">
                            </div>
                            <div class="stat-input">
                                <label for="genetic-stat">GENÉTICO:</label>
                                <input type="number" id="genetic-stat" min="0" max="30" value="10">
                            </div>
                            <div class="stat-total">
                                <span>TOTAL:</span>
                                <span id="stat-total-value">30/30</span>
                            </div>
                        </div>
                    </div>
                    <div class="stats-explanation">
                        <h4>ESTADÍSTICAS DE PILOTO</h4>
                        <dl>
                            <dt><i class="stat-icon-small academic"></i> ACADÉMICO</dt>
                            <dd>Mide tu conocimiento y capacidad intelectual. Afecta a la velocidad de estudio, comprensión de los sistemas del Expedition y resolución de problemas técnicos.</dd>

                            <dt><i class="stat-icon-small social"></i> SOCIAL</dt>
                            <dd>Representa tus habilidades interpersonales y carisma. Determina la calidad de tus relaciones con otros pilotos y personal, afectando al trabajo en equipo y apoyo recibido.</dd>

                            <dt><i class="stat-icon-small genetic"></i> GENÉTICO</dt>
                            <dd>Tu compatibilidad neurológica con los Expeditions. A mayor nivel, mejor sincronización con tu unidad, permitiendo un control más preciso y mayor potencia en combate.</dd>
                        </dl>
                    </div>
                </div>
            `;

            // Initialize stat values
            const academicValue = document.getElementById('academic-value');
            if (academicValue) academicValue.textContent = 10;

            const socialValue = document.getElementById('social-value');
            if (socialValue) socialValue.textContent = 10;

            const geneticValue = document.getElementById('genetic-value');
            if (geneticValue) geneticValue.textContent = 10;

            // Add style for stat value animation
            const styleElement = document.createElement('style');
            styleElement.textContent = `
                .stat-value {
                    transition: all 0.3s ease;
                }
                .grid-line {
                    animation: pulseLine 3s infinite;
                }
                @keyframes pulseLine {
                    0% { stroke-opacity: 0.2; }
                    50% { stroke-opacity: 0.5; }
                    100% { stroke-opacity: 0.2; }
                }
                .stat-warning {
                    color: var(--primary);
                    margin-top: 10px;
                    font-size: 0.9em;
                    animation: pulse 2s infinite;
                }
                @keyframes pulse {
                    0% { opacity: 0.7; }
                    50% { opacity: 1; }
                    100% { opacity: 0.7; }
                }
                .character-export-import {
                    display: flex;
                    gap: 10px;
                    margin-top: 20px;
                    justify-content: center;
                }
                .export-btn, .import-btn {
                    background-color: var(--background);
                    border: 1px solid var(--primary-dark);
                    color: var(--text);
                    cursor: pointer;
                    padding: 8px 15px;
                    font-family: 'Share Tech Mono', monospace;
                    transition: all 0.3s ease;
                }
                .export-btn:hover, .import-btn:hover {
                    background-color: var(--primary-dark);
                    color: white;
                }
                .stats-triangle {
                  z-index: 2; /* Ensure it is on top */
                  position: relative; /* Needed for z-index to work */
                }

                .stats-triangle svg {
                  overflow: visible; /* Prevent SVG from being clipped */
                }
            `;
            document.head.appendChild(styleElement);
        }
    }

    // Call updateStatTriangle to initialize triangle position
    updateStatTriangle();

    // Add input event listeners to update the triangle
    const academicInput = document.getElementById('academic-stat');
    const socialInput = document.getElementById('social-stat');
    const geneticInput = document.getElementById('genetic-stat');

    if (academicInput) {
        academicInput.addEventListener('input', () => {
            validateStats('academic-stat');
        });
    }

    if (socialInput) {
        socialInput.addEventListener('input', () => {
            validateStats('social-stat');
        });
    }

    if (geneticInput) {
        geneticInput.addEventListener('input', () => {
            validateStats('genetic-stat');
        });
    }
}

function updateStatTriangle() {
    const academicInput = document.getElementById('academic-stat');
    const socialInput = document.getElementById('social-stat');
    const geneticInput = document.getElementById('genetic-stat');
    const totalValue = document.getElementById('stat-total-value');
    const statPoint = document.getElementById('stat-point');

    if (!academicInput || !socialInput || !geneticInput || !totalValue || !statPoint) return;

    let academic = parseInt(academicInput.value) || 0;
    let social = parseInt(socialInput.value) || 0;
    let genetic = parseInt(geneticInput.value) || 0;

    // Calculate total
    const total = academic + social + genetic;

    // Update total display
    const totalText = `${total}/30`;
    totalValue.textContent = totalText;
    totalValue.style.color = total > 30 ? 'var(--primary)' : 'var(--text)';

    // Update stat value displays
    const academicValue = document.getElementById('academic-value');
    const socialValue = document.getElementById('social-value');
    const geneticValue = document.getElementById('genetic-value');

    if (academicValue) academicValue.textContent = academic;
    if (socialValue) socialValue.textContent = social;
    if (geneticValue) geneticValue.textContent = genetic;

    // Calculate position within triangle
    const maxPossible = 30;
    const normalizedA = academic / maxPossible;
    const normalizedS = social / maxPossible;
    const normalizedG = genetic / maxPossible;

    // Calculate the weighted average position
    const sum = normalizedA + normalizedS + normalizedG;
    const weightedSum = sum > 0 ? sum : 1; // Avoid division by zero

    // Triangle vertices (from SVG viewBox coordinates)
    const ax = 100, ay = 10;  // Academic (top)
    const sx = 190, sy = 170; // Social (bottom right)
    const gx = 10, gy = 170;  // Genetic (bottom left)

    // Calculate the position using barycentric coordinates
    const x = (normalizedA * ax + normalizedS * sx + normalizedG * gx) / weightedSum;
    const y = (normalizedA * ay + normalizedS * sy + normalizedG * gy) / weightedSum;

    // Update the position of the point
    statPoint.setAttribute('cx', x);
    statPoint.setAttribute('cy', y);
}

function validateStats(changedInputId) {
    const academicInput = document.getElementById('academic-stat');
    const socialInput = document.getElementById('social-stat');
    const geneticInput = document.getElementById('genetic-stat');
    const totalValue = document.getElementById('stat-total-value');

    if (!academicInput || !socialInput || !geneticInput || !totalValue) return;

    let academic = parseInt(academicInput.value) || 0;
    let social = parseInt(socialInput.value) || 0;
    let genetic = parseInt(geneticInput.value) || 0;

    // Ensure no negative values
    if (academic < 0) {
        academic = 0;
        academicInput.value = 0;
    }

    if (social < 0) {
        social = 0;
        socialInput.value = 0;
    }

    if (genetic < 0) {
        genetic = 0;
        geneticInput.value = 0;
    }

    // Calculate total
    let total = academic + social + genetic;

    // If total exceeds 30, adjust the last changed stat
    if (total > 30) {
        if (changedInputId === 'academic-stat') {
            academic = 30 - (social + genetic);
            academicInput.value = academic;
        } else if (changedInputId === 'social-stat') {
            social = 30 - (academic + genetic);
            socialInput.value = social;
        } else if (changedInputId === 'genetic-stat') {
            genetic = 30 - (academic + social);
            geneticInput.value = genetic;
        }
    }

    // Recalculate total after adjustment
    total = academic + social + genetic;

    updateStatTriangle();
    checkMinimumStats();
}

function checkMinimumStats() {
    const academicInput = document.getElementById('academic-stat');
    const socialInput = document.getElementById('social-stat');
    const geneticInput = document.getElementById('genetic-stat');

    if (!academicInput || !socialInput || !geneticInput) return;

    const academic = parseInt(academicInput.value) || 0;
    const social = parseInt(socialInput.value) || 0;
    const genetic = parseInt(geneticInput.value) || 0;

    // Remove any existing warning message
    const existingWarning = document.querySelector('.stat-warning');
    if (existingWarning) {
        existingWarning.remove();
    }

    // Check if any stat is below 5
    let warningMessage = null;
    if (academic < 5) {
      warningMessage = document.createElement('div');
      warningMessage.className = 'stat-warning';
      warningMessage.textContent = 'ADVERTENCIA: No es recomendable tener la estadística ACADÉMICO por debajo de 5.';
    } else if (social < 5) {
      warningMessage = document.createElement('div');
      warningMessage.className = 'stat-warning';
      warningMessage.textContent = 'ADVERTENCIA: No es recomendable tener la estadística SOCIAL por debajo de 5.';
    } else if (genetic < 5) {
      warningMessage = document.createElement('div');
      warningMessage.className = 'stat-warning';
      warningMessage.textContent = 'ADVERTENCIA: No es recomendable tener la estadística GENÉTICO por debajo de 5.';
    }

    // All stats are 0.
    if (academic === 0 && social === 0 && genetic === 0) {
        warningMessage = document.createElement('div');
        warningMessage.className = 'stat-warning';
        warningMessage.textContent = 'ERROR: No es recomendable tener todas las estadísticas a 0.';
    }
        
    const statsContainer = document.querySelector('.stats-inputs');
    if (warningMessage && statsContainer) {
            statsContainer.appendChild(warningMessage);
    }
}