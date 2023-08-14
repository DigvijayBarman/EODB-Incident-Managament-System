
// Get references to the two dropdowns
const mainDropdown = document.getElementById('department');
const dependentDropdown = document.getElementById('service');

// Define the options for the dependent dropdown based on the selection in the main dropdown
function updateDependentDropdown() {
    // Clear existing options
    dependentDropdown.innerHTML = '';

    // Get the selected value from the main dropdown
    const selectedValue = mainDropdown.value;

    // Define the options for each case in the main dropdown
    switch (selectedValue) {
        case 'labour-welfare':
            addOption('Commissionerate of Labour', 'Commissionerate-of-Labour');
            addOption(' Inspectorate of factories', ' Inspectorate-of-factories');
            addOption(' Inspectorate of Boilers', ' Inspectorate-of-Boilers');
            break;
        case 'health-and-family':
            addOption('Commissionerate Of Food Safety', 'Commissionerate-Of-Food-Safety');
            addOption('Directorate of Ayush', 'Directorate-of-Ayush');
            addOption('State Drugs Control Administration', 'State-Drugs-Control-Administration');
            addOption('Directorate of Medical Education', 'Directorate-of-Medical-Education');
            addOption('Directorate of Health Services', 'Directorate-of-Health-Services');
            addOption('Pre-Conception and Pre-Natal Diagnostic Techniques', 'Pre-Conception-and-Pre-Natal-Diagnostic-Techniques');
            break;
        case 'industries-commerce':
            addOption('Single Window Agency', 'Single-Window-Agency');
            addOption('Commissionerate of Industries and Commerce', 'Commissionerate-of-Industries-and-Commerce');
            addOption('Assam Industrial Development Corporation (AIDC) Ltd', 'Assam-Industrial-Development-Corporation');
            addOption('Assam Industrial Infrastructure Development Corporation (AIIDC)', 'Assam-Industrial-Infrastructure-Development-Corporation');
            addOption('Assam Small Industries Development Corporation (ASIDC) Ltd.', 'Assam-Small-Industries-Development-Corporation');
            break;
        case 'Power':
            addOption('Inspectorate Of Electricity', 'Inspectorate-Of-Electricity');
            addOption('Assam Power Distribution Company Ltd. (APDCL)', 'Assam-Power-Distribution-Company');
            break;
        case 'housing-urban-affairs':
            addOption('Guwahati Jal Board', 'Guwahati-Jal-Board');
            addOption('Guwahati Municipal Corporation', 'Guwahati-Municipal-Corporation');
            addOption('Guwahati Metropolitan Development Authority', 'Guwahati-Metropolitan-Development-Authority');
            addOption('Directorate of Municipal Administration', 'Directorate-of-Municipal-Administration');

            addOption('Assam Urban Water Supply & Sewarage Board', 'Assam-Urban-Water-Supply-&-Sewarage-Board');
            break;
        case 'tourism':
            addOption('Directorate of Tourism', 'Directorate-of-Tourism');
            
            break;
        case 'home-political':
            addOption('Director of Fire and Emergency Services', 'Director of Fire and Emergency Services');
            addOption('Political Department', 'Political Department');
            break;
        case 'food-civil-consumer':
            addOption('Controller of Legal Metrology', 'Controller of Legal Metrology');
            addOption('Directorate of Food, Civil Supplies & Consumer Affairs', 'Directorate of Food, Civil Supplies & Consumer Affairs');
            break;
        case 'Finance':
            addOption('Registrar of Firms & Societies', 'Registrar of Firms & Societies');
            addOption('Commissionerate of Taxes', 'Commissionerate of Taxes');
            break;
        case 'Co-Operation':
            addOption('Registrar of Co-operative Societies', 'Registrar of Co-operative Societies');
            
            break;
        case 'agriculture':
            addOption('Directorate of Agriculture', 'Directorate of Agriculture');
            
            break;
        case 'public-works':
            addOption( 'Public Works Roads Department', ' Public Works Roads Department');
            
            break;
        case 'Environment-forest':
            addOption('Pollution Control Board Assam', 'Pollution Control Board Assam');
            addOption('Environment and Forest', 'Environment and Forest');
            break;
        case 'education':
            addOption('Directorate of Elementary Education', 'Directorate of Elementary Education');
            addOption('Directorate of Secondary Education', 'Directorate of Secondary Education');
            addOption('Directorate of Higher Education', 'Directorate of Higher Education');
            break;
        case 'mines-minerals':
            addOption('Directorate of Geology and Mining', 'Directorate of Geology and Mining');
            
            break;
        case 'excise':
            addOption(' Commissionerate of Excise', ' Commissionerate of Excise');
            
            break;
        case 'judicial':
            addOption('Commercial Court', 'Commercial Court');
            
            break;
        case 'Transport':
            addOption('Transport', 'Transport');
            
            break;
        case 'general-admininstration':
            addOption('General Administration', 'General Administration');
            
            break;
        case 'information-technology':
            addOption('Directorate of Information Technology, Electronics and Communication', 'Directorate of Information Technology, Electronics and Communication');
            
            break;
        case 'petroleum-gas':
            addOption('Ministry of Petroleum and Natural Gas', 'Ministry of Petroleum and Natural Gas');
            
            break;

        default:

            addOption('Select an option', '');
    }
}


function addOption(text, value) {
    const option = document.createElement('option');
    option.textContent = text;
    option.value = value;
    dependentDropdown.appendChild(option);
}

// Attach an event listener to the main dropdown to trigger the update of the dependent dropdown
mainDropdown.addEventListener('change', updateDependentDropdown);

// Initialize the dependent dropdown on page load
updateDependentDropdown();

