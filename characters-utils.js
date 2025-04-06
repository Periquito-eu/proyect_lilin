// Utility functions for the characters section
export function initCharactersSection() {
    const charactersSection = document.getElementById('characters');
    if (!charactersSection) return;

    // Update the characters section with new layout
    charactersSection.innerHTML = `
        <div class="section-header">
            <h2>PERSONAJES</h2>
            <div class="terminal-line"></div>
        </div>
        <div class="character-system">
            <div class="character-upload">
                <div class="upload-box">
                    <svg viewBox="0 0 24 24" width="48" height="48" stroke="#ff0000" stroke-width="1.5" fill="none">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                    <p>Arrastra y suelta una imagen para tu personaje</p>
                </div>
                <div class="expedition-preview">
                    <h4>COMPATIBILIDAD EXPEDITION</h4>
                    <div class="compatibility-meter">
                        <div class="meter-bar"></div>
                        <div class="meter-value">78%</div>
                    </div>
                </div>
            </div>
            <div class="character-info">
                <div class="character-stats">
                    <div class="char-header">
                        <h3>INFORMACIÓN DE PERSONAJE</h3>
                        <div class="terminal-line"></div>
                    </div>
                    <div class="char-attribute">
                        <span class="attr-label">NOMBRE:</span>
                        <input type="text" class="attr-value" placeholder="Ingrese nombre">
                    </div>
                    <div class="char-attribute abilities">
                        <!-- This will be replaced with the character stats triangle -->
                    </div>
                    <div class="character-explanation">
                        <h4>SISTEMA DE PERSONAJES DE PROYECT OF LILIN</h4>
                        <div class="terminal-line"></div>
                        <p>Al controlar un Expedition, deberás preocuparte por dos aspectos principales:</p>
                        <ul>
                            <li><strong>Características del Expedition:</strong> Puedes mejorar tu unidad con armas, sistemas de propulsión y otros accesorios que te ayudarán en combate.</li>
                            <li><strong>Estadísticas académicas y sociales:</strong> Mantener buenas calificaciones y relaciones sociales es vital para el éxito de la misión.</li>
                        </ul>
                        <p>Si mantienes buenas notas y el proyecto POL avanza correctamente, ¡no tendrás problemas! El destino de Tokio-3 depende de ti y de tu grupo.</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Re-initialize the character upload functionality
    const uploadBox = charactersSection.querySelector('.upload-box');
    if (uploadBox) {
        uploadBox.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        uploadBox.innerHTML = '';
                        const img = document.createElement('img');
                        img.src = event.target.result;
                        img.style.maxWidth = '100%';
                        img.style.maxHeight = '100%';
                        uploadBox.appendChild(img);
                    };
                    reader.readAsDataURL(file);
                }
            };
            input.click();
        });
        
        uploadBox.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadBox.style.borderColor = 'var(--secondary)';
        });
        
        uploadBox.addEventListener('dragleave', () => {
            uploadBox.style.borderColor = 'var(--primary)';
        });
        
        uploadBox.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadBox.style.borderColor = 'var(--primary)';
            
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    uploadBox.innerHTML = '';
                    const img = document.createElement('img');
                    img.src = event.target.result;
                    img.style.maxWidth = '100%';
                    img.style.maxHeight = '100%';
                    uploadBox.appendChild(img);
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Add styling for new elements
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        .expedition-preview {
            margin-top: 15px;
            padding: 10px;
            background-color: rgba(13, 15, 26, 0.8);
            border: 1px solid rgba(255, 0, 0, 0.3);
        }
        .compatibility-meter {
            height: 20px;
            background-color: var(--background);
            border: 1px solid var(--primary-dark);
            position: relative;
            margin-top: 5px;
        }
        .meter-bar {
            height: 100%;
            width: 78%;
            background-color: var(--primary);
        }
        .meter-value {
            position: absolute;
            top: 0;
            right: 10px;
            line-height: 20px;
            color: white;
            font-size: 12px;
        }
    `;
    document.head.appendChild(styleElement);
}