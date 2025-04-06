// script.js

import { initDynamicCityscape } from './cityscape-utils.js';
import { createImprovedLogo } from './logo-utils.js';
import { initCharactersSection } from './characters-utils.js';
import { initCharacterStats } from './character-stats.js';
import { initCharacterExportImport } from './character-export-import.js';
import { initMechaDisplay } from './mecha-display.js';
import { initCalendar } from './calendar-utils.js';
import { initTokyoDistricts } from './tokyo-districts.js';

// Initializations - call these functions after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired.');
    initNavigation();
    initTimeDisplay();
    initTerminalEffect();

    initDynamicCityscape();
    initMechaDisplay();
    initCharactersSection();
    initCharacterStats();
    initCharacterExportImport();
    initCalendar();
    initTokyoDistricts();

    createImprovedLogo();
});

function initNavigation() {
    console.log('Initializing navigation...');
    const navLinks = document.querySelectorAll('nav ul li');
    const sections = document.querySelectorAll('main section');

    if (!navLinks.length || !sections.length) {
        console.warn('Navigation links or sections not found.');
        return;
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const sectionId = link.dataset.section;

            navLinks.forEach(link => link.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));

            link.classList.add('active');
            document.getElementById(sectionId)?.classList.add('active');
        });
    });
}

function initTimeDisplay() {
    console.log('Initializing time display...');
    const dateDisplay = document.querySelector('.date');
    const timeDisplay = document.querySelector('.time');

    if (!dateDisplay || !timeDisplay) {
        console.warn('Date or time display elements not found.');
        return;
    }

    function updateTime() {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');

        dateDisplay.textContent = `${day}.${month}.${year}`;
        timeDisplay.textContent = `${hours}:${minutes}`;
    }

    updateTime();
    setInterval(updateTime, 60000);
}

function initTerminalEffect() {
    console.log('Initializing terminal effect...');
    const typingElement = document.querySelector('.typing');
    if (!typingElement) {
        console.warn('Typing element not found.');
        return;
    }

    const text = typingElement.textContent;
    typingElement.textContent = '';

    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
            typingElement.style.borderRight = 'none';
        }
    }, 50);
}