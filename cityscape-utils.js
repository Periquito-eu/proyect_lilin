export function initDynamicCityscape() {
  const cityscapeContainer = document.querySelector('.cityscape-animation');
  if (!cityscapeContainer) return;
  
  // Clear previous cityscape
  cityscapeContainer.innerHTML = '';
  
  // Define time-based weather appearance
  let skyColor, buildingColor, windowColor, windowOpacity, weatherElements = [];
  
  // Get current hour to determine weather conditions
  const currentHour = new Date().getHours();
  
  // Weather conditions based on time
  if (currentHour >= 5 && currentHour < 10) {
    // Morning - clear sky with morning light
    skyColor = 'linear-gradient(to bottom, #ff9e63, #ffcda3, #a4bfef)';
    buildingColor = 'rgba(40, 50, 70, 0.8)';
    windowColor = 'rgba(255, 255, 200, 0.2)';
    windowOpacity = 0.2;
    weatherElements.push('sun-morning');
  } else if (currentHour >= 10 && currentHour < 17) {
    // Day - clear blue sky
    skyColor = 'linear-gradient(to bottom, #4a80d1, #6a93cb, #a4bfef)';
    buildingColor = 'rgba(40, 50, 70, 0.8)';
    windowColor = 'rgba(255, 255, 200, 0.1)';
    windowOpacity = 0.1;
    weatherElements.push('sun-day');
    
    // Random clouds (50% chance)
    if (Math.random() > 0.5) weatherElements.push('clouds');
  } else if (currentHour >= 17 && currentHour < 20) {
    // Evening - sunset colors
    skyColor = 'linear-gradient(to bottom, #ff5e62, #ff9966, #434343)';
    buildingColor = 'rgba(40, 50, 70, 0.9)';
    windowColor = 'rgba(255, 255, 200, 0.4)';
    windowOpacity = 0.5;
    weatherElements.push('sun-evening');
  } else {
    // Night - dark sky with stars
    skyColor = 'linear-gradient(to bottom, #0f2027, #203a43, #2c5364)';
    buildingColor = 'rgba(20, 25, 40, 0.9)';
    windowColor = 'rgba(255, 255, 200, 0.8)';
    windowOpacity = 0.6;
    weatherElements.push('stars');
    weatherElements.push('moon');
  }
  
  // Create sky
  const sky = document.createElement('div');
  sky.style.position = 'absolute';
  sky.style.top = '0';
  sky.style.left = '0';
  sky.style.width = '100%';
  sky.style.height = '100%';
  sky.style.background = skyColor;
  sky.style.zIndex = '1';
  cityscapeContainer.appendChild(sky);
  
  // Add weather elements
  if (weatherElements.includes('stars')) {
    // Add stars to night sky
    for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      star.style.position = 'absolute';
      star.style.width = `${Math.random() * 2 + 1}px`;
      star.style.height = star.style.width;
      star.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
      star.style.borderRadius = '50%';
      star.style.top = `${Math.random() * 60}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.zIndex = '2';
      star.style.boxShadow = '0 0 3px white';
      star.style.animation = `twinkle ${Math.random() * 5 + 2}s infinite alternate`;
      sky.appendChild(star);
    }
  }
  
  if (weatherElements.includes('moon')) {
    // Add moon to night sky
    const moon = document.createElement('div');
    moon.style.position = 'absolute';
    moon.style.width = '30px';
    moon.style.height = '30px';
    moon.style.backgroundColor = 'rgba(255, 255, 230, 0.9)';
    moon.style.borderRadius = '50%';
    moon.style.top = '15%';
    moon.style.right = '20%';
    moon.style.zIndex = '2';
    moon.style.boxShadow = '0 0 15px rgba(255, 255, 230, 0.8)';
    sky.appendChild(moon);
  }
  
  if (weatherElements.includes('sun-day')) {
    // Add sun to day sky
    const sun = document.createElement('div');
    sun.style.position = 'absolute';
    sun.style.width = '40px';
    sun.style.height = '40px';
    sun.style.background = 'radial-gradient(circle, rgba(255,220,110,1) 0%, rgba(255,170,0,0.8) 100%)';
    sun.style.borderRadius = '50%';
    sun.style.top = '15%';
    sun.style.left = '75%';
    sun.style.zIndex = '2';
    sun.style.boxShadow = '0 0 20px rgba(255, 200, 0, 0.6)';
    sky.appendChild(sun);
  }
  
  if (weatherElements.includes('sun-morning')) {
    // Add rising sun
    const sun = document.createElement('div');
    sun.style.position = 'absolute';
    sun.style.width = '50px';
    sun.style.height = '50px';
    sun.style.background = 'radial-gradient(circle, rgba(255,180,110,1) 0%, rgba(255,130,50,0.8) 100%)';
    sun.style.borderRadius = '50%';
    sun.style.top = '40%';
    sun.style.left = '80%';
    sun.style.zIndex = '2';
    sun.style.boxShadow = '0 0 25px rgba(255, 150, 50, 0.7)';
    sky.appendChild(sun);
  }
  
  if (weatherElements.includes('sun-evening')) {
    // Add setting sun
    const sun = document.createElement('div');
    sun.style.position = 'absolute';
    sun.style.width = '50px';
    sun.style.height = '50px';
    sun.style.background = 'radial-gradient(circle, rgba(255,100,100,1) 0%, rgba(255,50,0,0.8) 100%)';
    sun.style.borderRadius = '50%';
    sun.style.top = '60%';
    sun.style.left = '20%';
    sun.style.zIndex = '2';
    sun.style.boxShadow = '0 0 25px rgba(255, 50, 0, 0.7)';
    sky.appendChild(sun);
  }
  
  if (weatherElements.includes('clouds')) {
    // Add clouds
    const cloudCount = Math.floor(Math.random() * 5) + 2;
    for (let i = 0; i < cloudCount; i++) {
      const cloud = document.createElement('div');
      cloud.style.position = 'absolute';
      cloud.style.width = `${Math.random() * 100 + 50}px`;
      cloud.style.height = `${Math.random() * 30 + 20}px`;
      cloud.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
      cloud.style.borderRadius = '50px';
      cloud.style.top = `${Math.random() * 40}%`;
      cloud.style.left = `${Math.random() * 80}%`;
      cloud.style.zIndex = '2';
      cloud.style.boxShadow = '10px 10px 15px rgba(0, 0, 0, 0.2)';
      sky.appendChild(cloud);
      
      // Add cloud puffs
      const puffCount = Math.floor(Math.random() * 3) + 2;
      for (let j = 0; j < puffCount; j++) {
        const puff = document.createElement('div');
        puff.style.position = 'absolute';
        puff.style.width = `${Math.random() * 30 + 20}px`;
        puff.style.height = `${Math.random() * 30 + 20}px`;
        puff.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        puff.style.borderRadius = '50%';
        puff.style.top = `${Math.random() * 10}px`;
        puff.style.left = `${Math.random() * parseInt(cloud.style.width)}px`;
        puff.style.zIndex = '3';
        cloud.appendChild(puff);
      }
    }
  }
  
  // Create more buildings for a denser cityscape
  const buildingCount = 40; 
  for (let i = 0; i < buildingCount; i++) {
    const building = document.createElement('div');
    building.classList.add('building');
    
    const height = Math.random() * 100 + 50;
    const width = Math.random() * 20 + 10;
    const left = i * (width / 2.5); 
    
    building.style.height = `${height}px`;
    building.style.width = `${width}px`;
    building.style.left = `${left}px`;
    building.style.bottom = '0';
    building.style.position = 'absolute';
    building.style.backgroundColor = buildingColor;
    building.style.borderTop = '1px solid var(--secondary)';
    building.style.borderLeft = '1px solid rgba(0, 200, 255, 0.2)';
    building.style.borderRight = '1px solid rgba(0, 200, 255, 0.2)';
    building.style.zIndex = '2';
    
    // Add more windows
    const windowCount = Math.floor(height / 8);
    const windowColumns = Math.floor(width / 5);
    
    for (let j = 0; j < windowCount; j++) {
      for (let k = 0; k < windowColumns; k++) {
        const windowElem = document.createElement('div');
        windowElem.style.width = '3px';
        windowElem.style.height = '3px';
        windowElem.style.backgroundColor = Math.random() > windowOpacity ? 'transparent' : windowColor;
        windowElem.style.position = 'absolute';
        windowElem.style.left = `${k * 5 + 2}px`;
        windowElem.style.bottom = `${j * 8 + 5}px`;
        building.appendChild(windowElem);
      }
    }
    
    cityscapeContainer.appendChild(building);
  }
  
  // Add time indicator
  const timeIndicator = document.createElement('div');
  timeIndicator.style.position = 'absolute';
  timeIndicator.style.bottom = '5px';
  timeIndicator.style.right = '5px';
  timeIndicator.style.color = 'rgba(255, 255, 255, 0.7)';
  timeIndicator.style.fontSize = '0.8em';
  timeIndicator.style.zIndex = '3';
  
  let timeOfDay = "";
  if (currentHour >= 6 && currentHour < 12) timeOfDay = "MAÑANA";
  else if (currentHour >= 12 && currentHour < 18) timeOfDay = "TARDE";
  else if (currentHour >= 18 && currentHour < 22) timeOfDay = "TARDE/NOCHE";
  else timeOfDay = "NOCHE";
  
  timeIndicator.textContent = `HORA: ${timeOfDay}`;
  cityscapeContainer.appendChild(timeIndicator);

  // Add animation styles
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    @keyframes twinkle {
      0% { opacity: 0.3; }
      100% { opacity: 1; }
    }
  `;
  document.head.appendChild(styleEl);
}