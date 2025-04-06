// New file for calendar functionality
export function initCalendar() {
    const daysGrid = document.querySelector('.days-grid');
    const prevMonthBtn = document.querySelector('.prev-month');
    const nextMonthBtn = document.querySelector('.next-month');
    const currentMonthDisplay = document.querySelector('.current-month');
    const calendarMessage = document.querySelector('.calendar-message');
    const eventList = document.querySelector('.event-list');
    
    if (!daysGrid || !prevMonthBtn || !nextMonthBtn || !currentMonthDisplay) return;
    
    let currentDate = new Date(2030, 0, 1); // Jan 1, 2030
    
    function renderCalendar() {
        // Clear previous calendar
        daysGrid.innerHTML = '';
        
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        
        // Check if year is out of bounds (should be 2030 only)
        if (year < 2030 || year > 2030) {
            daysGrid.classList.add('hidden');
            calendarMessage.classList.remove('hidden');
            calendarMessage.textContent = "ERROR: ACCESO DENEGADO A DATOS " + year;
            return;
        } else {
            daysGrid.classList.remove('hidden');
            calendarMessage.classList.add('hidden');
        }
        
        const monthNames = [
            'ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 
            'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'
        ];
        
        currentMonthDisplay.textContent = `${monthNames[month]} ${year}`;
        
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        
        // Get the day of the week for the first day (0 = Sunday)
        let firstDayOfWeek = firstDay.getDay();
        // Adjust for Monday as first day of week
        firstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
        
        // Empty cells for days before the first day of the month
        for (let i = 0; i < firstDayOfWeek; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.classList.add('empty-day');
            daysGrid.appendChild(emptyDay);
        }
        
        // Simplified calendar with no interaction for individual dates
        for (let i = 1; i <= lastDay.getDate(); i++) {
            const dayElement = document.createElement('div');
            dayElement.textContent = i;
            
            // Add some event days (marked in red)
            const isEventDay = (i % 7 === 3) || (i % 14 === 1) || (i === 15);
            if (isEventDay) {
                dayElement.style.border = '1px solid var(--primary)';
                dayElement.style.color = 'var(--primary)';
                dayElement.classList.add('event-day');
            }
            
            // No click functionality - just information about how the system works
            daysGrid.appendChild(dayElement);
        }
    }
    
    function showEvents(day, month, year) {
        // This function has been simplified to show static information
        eventList.innerHTML = '';
        
        const infoElement = document.createElement('div');
        infoElement.classList.add('event');
        infoElement.innerHTML = `
            <div class="event-name">El sistema de calendario en Proyect of Lilin permite organizar los días en periodos que afectan a las actividades disponibles.</div>
        `;
        
        const infoElement2 = document.createElement('div');
        infoElement2.classList.add('event');
        infoElement2.innerHTML = `
            <div class="event-time">NOTA:</div>
            <div class="event-name">Los días marcados en rojo señalan eventos importantes como ataques de Ángeles o pruebas de sincronización.</div>
        `;
        
        eventList.appendChild(infoElement);
        eventList.appendChild(infoElement2);
    }
    
    renderCalendar();
    
    prevMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });
    
    nextMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });
    
    return {
        renderCalendar
    };
}