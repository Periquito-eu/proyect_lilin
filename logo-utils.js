export function createImprovedLogo() {
  const logoContainer = document.querySelector('.company-logo');
  if (!logoContainer) return;
  
  // Clear existing logo
  logoContainer.innerHTML = '';
  
  // Create new SVG logo
  const svgLogo = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgLogo.setAttribute('viewBox', '0 0 100 60');
  svgLogo.classList.add('logo-svg');
  
  // Create stylized HP logo
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', '50');
  circle.setAttribute('cy', '30');
  circle.setAttribute('r', '25');
  circle.setAttribute('fill', 'rgba(0,0,0,0.6)');
  circle.setAttribute('stroke', '#FF0000');
  circle.setAttribute('stroke-width', '2');
  
  const textH = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  textH.setAttribute('x', '35');
  textH.setAttribute('y', '38');
  textH.setAttribute('fill', '#FF0000');
  textH.setAttribute('font-family', 'Share Tech Mono, monospace');
  textH.setAttribute('font-size', '24');
  textH.setAttribute('font-weight', 'bold');
  textH.textContent = 'H';
  
  const textP = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  textP.setAttribute('x', '65');
  textP.setAttribute('y', '38');
  textP.setAttribute('fill', '#FF0000');
  textP.setAttribute('font-family', 'Share Tech Mono, monospace');
  textP.setAttribute('font-size', '24');
  textP.setAttribute('font-weight', 'bold');
  textP.textContent = 'P';
  
  // Create decorative elements
  const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line1.setAttribute('x1', '25');
  line1.setAttribute('y1', '20');
  line1.setAttribute('x2', '75');
  line1.setAttribute('y2', '20');
  line1.setAttribute('stroke', '#FF0000');
  line1.setAttribute('stroke-width', '1.5');
  
  const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line2.setAttribute('x1', '25');
  line2.setAttribute('y1', '40');
  line2.setAttribute('x2', '75');
  line2.setAttribute('y2', '40');
  line2.setAttribute('stroke', '#FF0000');
  line2.setAttribute('stroke-width', '1.5');
  
  svgLogo.appendChild(circle);
  svgLogo.appendChild(textH);
  svgLogo.appendChild(textP);
  svgLogo.appendChild(line1);
  svgLogo.appendChild(line2);
  
  logoContainer.appendChild(svgLogo);
}