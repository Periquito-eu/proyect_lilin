// New file for character export and import functionality

export function initCharacterExportImport() {
    const charactersSection = document.getElementById('characters');
    if (!charactersSection) return;
    
    // Add export/import buttons if they don't exist
    if (!charactersSection.querySelector('.character-export-import')) {
        const exportImportContainer = document.createElement('div');
        exportImportContainer.className = 'character-export-import';
        
        const exportBtn = document.createElement('button');
        exportBtn.className = 'export-btn';
        exportBtn.textContent = 'Exportar personaje';
        
        const importBtn = document.createElement('button');
        importBtn.className = 'import-btn';
        importBtn.textContent = 'Importar personaje';
        
        exportImportContainer.appendChild(exportBtn);
        exportImportContainer.appendChild(importBtn);
        
        // Add the container after character info
        const characterInfo = charactersSection.querySelector('.character-info');
        if (characterInfo) {
            characterInfo.appendChild(exportImportContainer);
        }
        
        // Add export functionality
        exportBtn.addEventListener('click', exportCharacter);
        
        // Add import functionality
        importBtn.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.json';
            input.onchange = importCharacter;
            input.click();
        });
    }
}

function exportCharacter() {
    // Get character data
    const characterData = {
        name: document.querySelector('.char-attribute input[placeholder="Ingrese nombre"]')?.value || '',
        academic: parseInt(document.getElementById('academic-stat')?.value) || 0,
        social: parseInt(document.getElementById('social-stat')?.value) || 0,
        genetic: parseInt(document.getElementById('genetic-stat')?.value) || 0,
        imageData: null
    };
    
    // Get character image if exists
    const characterImage = document.querySelector('.upload-box img');
    if (characterImage && characterImage.src) {
        characterData.imageData = characterImage.src;
    }
    
    // Convert to JSON
    const jsonData = JSON.stringify(characterData);
    
    // Create downloadable file
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    // Create download link
    const a = document.createElement('a');
    a.href = url;
    a.download = `${characterData.name || 'personaje'}.json`;
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 0);

    // Show message after download
    const message = document.createElement('div');
    message.className = 'export-message';
    message.textContent = 'Ahora que ya has descargado tu personaje, verás como tienes un archivo llamado "personaje.json" envíalo a "@.petisui" en discord o envialo por e-mail a: "hoyocorporacion@gmail.com" ¡gracias!';
    message.style.color = 'var(--secondary)';
    message.style.padding = '10px';
    message.style.textAlign = 'center';
    
    const exportImportContainer = document.querySelector('.character-export-import');
    if (exportImportContainer) {
        exportImportContainer.appendChild(message);
        setTimeout(() => message.remove(), 5000); // Remove after 5 seconds
    }
}

function importCharacter(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const characterData = JSON.parse(e.target.result);
            
            // Update character name
            const nameInput = document.querySelector('.char-attribute input[placeholder="Ingrese nombre"]');
            if (nameInput && characterData.name) {
                nameInput.value = characterData.name;
            }
            
            // Update stats
            const academicInput = document.getElementById('academic-stat');
            const socialInput = document.getElementById('social-stat');
            const geneticInput = document.getElementById('genetic-stat');
            
            if (academicInput && characterData.academic !== undefined) {
                academicInput.value = characterData.academic;
            }
            
            if (socialInput && characterData.social !== undefined) {
                socialInput.value = characterData.social;
            }
            
            if (geneticInput && characterData.genetic !== undefined) {
                geneticInput.value = characterData.genetic;
            }
            
            // Update image if exists
            if (characterData.imageData) {
                const uploadBox = document.querySelector('.upload-box');
                if (uploadBox) {
                    uploadBox.innerHTML = '';
                    const img = document.createElement('img');
                    img.src = characterData.imageData;
                    img.style.maxWidth = '100%';
                    img.style.maxHeight = '100%';
                    uploadBox.appendChild(img);
                }
            }
            
            // Update triangle and validate stats
            validateStats();
            
            // Show success message
            const message = document.createElement('div');
            message.className = 'import-success';
            message.textContent = 'Personaje importado con éxito';
            message.style.color = 'var(--secondary)';
            message.style.padding = '10px';
            message.style.textAlign = 'center';
            
            const exportImportContainer = document.querySelector('.character-export-import');
            if (exportImportContainer) {
                exportImportContainer.appendChild(message);
                setTimeout(() => message.remove(), 3000);
            }
            
        } catch (error) {
            console.error('Error importing character:', error);
            alert('Error al importar el personaje. El archivo podría estar dañado.');
        }
    };
    
    reader.readAsText(file);
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
    
    // Update total display
    const total = academic + social + genetic;
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

function validateStats() {
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
    const total = academic + social + genetic;
    
    // If total exceeds 30, adjust the last changed stat
    if (total > 30) {
        // Find which input was last changed
        const focused = document.activeElement;
        
        if (focused === academicInput) {
            academic = 30 - (social + genetic);
            academicInput.value = academic;
        } else if (focused === socialInput) {
            social = 30 - (academic + genetic);
            socialInput.value = social;
        } else if (focused === geneticInput) {
            genetic = 30 - (academic + social);
            geneticInput.value = genetic;
        }
    }
    
    updateStatTriangle();
}