export function initTokyoDistricts() {
    const districtIcons = document.querySelectorAll('.district-icon');
    const districtInfos = document.querySelectorAll('.district-info');
    const tokyoInfo = document.querySelector('.tokyo-info');

    if (!districtIcons.length || !districtInfos.length || !tokyoInfo) {
        console.warn('Tokyo districts elements not found.');
        return;
    }

    // Hide all district info initially
    districtInfos.forEach(info => info.classList.remove('active'));

    // Show "select a district" message if no district is selected
    const noSelectionInfo = tokyoInfo.querySelector('.district-info.no-selection');
    if (noSelectionInfo) {
        noSelectionInfo.classList.add('active');
    }

    districtIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const district = icon.dataset.district;

            // Remove active class from all icons and info elements
            districtIcons.forEach(icon => icon.classList.remove('active'));
            districtInfos.forEach(info => info.classList.remove('active'));

            // Add active class to the clicked icon
            icon.classList.add('active');

            // Show the selected district's info
            const selectedInfo = tokyoInfo.querySelector(`.district-info[data-district="${district}"]`);
            if (selectedInfo) {
                selectedInfo.classList.add('active');
            }
        });
    });
}