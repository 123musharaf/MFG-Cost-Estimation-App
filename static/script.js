
// // static/script.js
// // Material densities and costs
// const materials = {
//     "MS": {"Density_gm_cc": 7.85, "Cost_per_KG": 80.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "C45": {"Density_gm_cc": 7.85, "Cost_per_KG": 95.0, "FM_per_sqmm": 0.005, "HT_KG": 25.0, "FM_AFTER_HT_per_sqmm": 0.007},
//     "EN24": {"Density_gm_cc": 7.85, "Cost_per_KG": 125.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN354": {"Density_gm_cc": 7.85, "Cost_per_KG": 145.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "20MnCr5": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN47": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN31": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN19": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS410": {"Density_gm_cc": 7.85, "Cost_per_KG": 220.0, "FM_per_sqmm": 0.008, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-7075": {"Density_gm_cc": 2.73, "Cost_per_KG": 730.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "D2": {"Density_gm_cc": 7.85, "Cost_per_KG": 350.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "OHNS": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "DELRIN": {"Density_gm_cc": 1.42, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "NYLON": {"Density_gm_cc": 1.14, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "HYLEM": {"Density_gm_cc": 1.95, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "BRASS": {"Density_gm_cc": 8.5, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "COPPER": {"Density_gm_cc": 8.93, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CARBIDE": {"Density_gm_cc": 15.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CASTING": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "WELDMENTS": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-6061": {"Density_gm_cc": 2.73, "Cost_per_KG": 455.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS304": {"Density_gm_cc": 7.85, "Cost_per_KG": 245.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0}
// };

// // Drilling costs
// const drillingCosts = {
//     "Hole_4_8": {"Cost": 25},
//     "Hole_9_13": {"Cost": 30},
//     "Hole_15_22": {"Cost": 35},
//     "Hole_M4": {"Cost": 20},
//     "Hole_M5": {"Cost": 25},
//     "Hole_M6": {"Cost": 30},
//     "Hole_M8": {"Cost": 40},
//     "Hole_M10": {"Cost": 50},
//     "Hole_M12": {"Cost": 60},
//     "Hole_M14": {"Cost": 60},
//     "Hole_M16": {"Cost": 70},
//     "Hole_M18": {"Cost": 70},
//     "Hole_M20": {"Cost": 120},
//     "Hole_M22": {"Cost": 120},
//     "Hole_M24": {"Cost": 120},
//     "Hole_M25": {"Cost": 200},
//     "Hole_M26": {"Cost": 200},
//     "Hole_M30": {"Cost": 250},
//     "Hole_M36": {"Cost": 300},
//     "C_bore_M3_M5": {"Cost": 30},
//     "C_bore_M6_M10": {"Cost": 40},
//     "C_bore_M12": {"Cost": 50},
//     "C_bore_M14": {"Cost": 60},
//     "C_bore_M16": {"Cost": 80},
//     "BSP_TAP_1/8_1/4": {"Cost": 45},
//     "BSP_TAP_1/2_3/8": {"Cost": 60},
//     "BSP_TAP_1_inch": {"Cost": 120},
//     "BSP_TAP_1.5_2_inch": {"Cost": 200},
//     "GD_TOTAL_HOLE_LENGTH": {"Cost": 3},
//     "GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING": {"Cost": 2},
//     "4_5_H7": {"Cost": 80},
//     "6_8_H7": {"Cost": 100},
//     "10_14_H7": {"Cost": 120},
//     "15_18_H7": {"Cost": 160},
//     "20_25_H7": {"Cost": 220},
//     "25_30_H7": {"Cost": 280},
//     "Spot_face": {"Cost": 30}
// };

// // Coating costs
// const coatingCosts = {
//     "Blackening": {"Cost": 20},
//     "ENP": {"Cost": 180},
//     "Flash Chrome": {"Cost": 0.6},
//     "PC": {"Cost": 20},
//     "Zinc Blue": {"Cost": 30}
// };

// // Store Excel data in memory
// let excelData = { headers: [], rows: [] };
// let uploadedFileName = 'cost_estimation.xlsx'; // Default filename if no file uploaded

// // Initialize Choices.js and handle Excel upload
// document.addEventListener('DOMContentLoaded', () => {
//     const materialSelect = new Choices('#material', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Material',
//     });

//     const typeSelect = new Choices('#type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Type',
//     });

//     const operationSelect = new Choices('#operation', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Operations',
//         removeItemButton: false
//     });

//     const fmSideSelect = new Choices('#fm_side', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select FM Side',
//     });

//     const htRequiredSelect = new Choices('#ht_required', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select HT Required',
//     });

//     const coatingTypeSelect = new Choices('#coating_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Coating Type',
//     });

//     // Populate coating_type dynamically
//     if (coatingTypeSelect.getValue(true) === '') {
//         const coatingOptions = Object.keys(coatingCosts).map(coating => ({
//             value: coating,
//             label: coating,
//         }));
//         coatingTypeSelect.setChoices(coatingOptions, 'value', 'label', true);
//     }

//     // Make coating cost fields readonly
//     ['blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'].forEach(name => {
//         document.querySelector(`input[name="${name}"]`).setAttribute('readonly', true);
//     });

//     // Handle Excel file upload
//     document.getElementById('excelUpload').addEventListener('change', function(e) {
//         const file = e.target.files[0];
//         if (file) {
//             uploadedFileName = file.name; // Use uploaded file's name for download
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 const data = new Uint8Array(e.target.result);
//                 const workbook = XLSX.read(data, { type: 'array' });
//                 const sheetName = workbook.SheetNames[0];
//                 const worksheet = workbook.Sheets[sheetName];
//                 const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

//                 if (jsonData.length > 0) {
//                     excelData.headers = jsonData[0]; // First row as headers
//                     excelData.rows = jsonData.slice(1); // Remaining rows as data
//                 } else {
//                     excelData.headers = []; // Blank sheet
//                     excelData.rows = [];
//                 }
//             };
//             reader.readAsArrayBuffer(file);
//         }
//     });

//     // Handle form submission
//     document.getElementById('costForm').addEventListener('submit', function(e) {
//         e.preventDefault(); // Prevent default form submission
//         calculateFields(); // Ensure latest calculations
//         updateExcel(); // Update and download Excel
//     });

//     // Initial call to update operation boxes
//     updateOperationBoxes();
// });

// // Show/hide fields based on type selection
// document.querySelector('#type').addEventListener('change', function() {
//     const type = this.value;
//     const diaField = document.querySelector('label[for="dia"]');
//     const lengthField = document.querySelector('label[for="length"]');
//     const widthField = document.querySelector('label[for="width"]');
//     const thicknessField = document.querySelector('label[for="thickness"]');
//     const rmwstrField = document.querySelector('label[for="rmw_str"]');

//     diaField.classList.add('hidden');
//     lengthField.classList.add('hidden');
//     widthField.classList.add('hidden');
//     thicknessField.classList.add('hidden');
//     rmwstrField.classList.add('hidden');

//     if (type === 'Cyl') {
//         diaField.classList.remove('hidden');
//         lengthField.classList.remove('hidden');
//     } else if (type === 'Pri') {
//         lengthField.classList.remove('hidden');
//         widthField.classList.remove('hidden');
//         thicknessField.classList.remove('hidden');
//     } else if (type === 'Str') {
//         rmwstrField.classList.remove('hidden');
//     }
//     calculateFields();
// });

// // Show/hide fields based on operation selection
// document.querySelector('#operation').addEventListener('change', function() {
//     const operations = Array.from(this.selectedOptions).map(option => option.value).filter(op => op !== '');
//     updateOperationBoxes();
//     updateOperationFields(operations);
//     calculateFields();
// });

// // Function to update operation boxes
// function updateOperationBoxes() {
//     const operationSelect = document.querySelector('#operation');
//     const selectedOperations = Array.from(operationSelect.selectedOptions)
//         .map(option => option.value)
//         .filter(op => op !== '');
//     const container = document.querySelector('#operation-box-container');
//     container.innerHTML = ''; // Clear existing boxes

//     selectedOperations.forEach(operation => {
//         const box = document.createElement('div');
//         box.className = 'operation-box';
//         box.textContent = operation;
//         container.appendChild(box);
//     });
// }

// // Function to update fields based on selected operations
// function updateOperationFields(operations) {
//     const fmField = document.querySelector('label:has(input[name="fm"])');
//     const fmSideQField = document.querySelector('label:has(#fm_side)');
//     const fmSideField = document.querySelector('label:has(input[name="fm_side_cost"])');
//     const fmLField = document.querySelector('label:has(input[name="fm_l"])');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost', 
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14', 
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26', 
//         'hole_m30', 'hole_m36', 'tap_hole_cost', 'c_bore_m3_m5', 'c_bore_m6_m10', 
//         'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost', 'bsp_tap_1_8_1_4', 
//         'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost', 
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling', 
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
//     const grindingFields = ['sg', 'sgl'];
//     const heatTreatmentFields = ['ht_required', 'ht'];
//     const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
//     const vmcFields = ['vmc'];
//     const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
//     const cgFields = ['cg'];
//     const turningFields = ['turning'];
//     const cncTurningFields = ['cnc_turning'];
//     const jgFields = ['jg'];
//     const sparkingFields = ['sparking'];

//     // Hide all operation-related fields initially
//     fmField.classList.add('hidden');
//     fmSideQField.classList.add('hidden');
//     fmSideField.classList.add('hidden');
//     fmLField.classList.add('hidden');
//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     heatTreatmentFields.forEach(name => {
//         const field = name === 'ht_required' ? 
//             document.querySelector(`label:has(#${name})`) : 
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     coatingFields.forEach(name => {
//         const field = name === 'coating_type' ? 
//             document.querySelector(`label:has(#${name})`) : 
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));

//     // Show fields based on selected operations
//     operations.forEach(operation => {
//         if (operation === 'Milling') {
//             fmField.classList.remove('hidden');
//             fmSideQField.classList.remove('hidden');
//             fmSideField.classList.remove('hidden');
//             fmLField.classList.remove('hidden');
//         }
//         if (operation === 'Drilling') {
//             holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Grinding') {
//             grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Heat Treatment') {
//             heatTreatmentFields.forEach(name => {
//                 const field = name === 'ht_required' ? 
//                     document.querySelector(`label:has(#${name})`) : 
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//         }
//         if (operation === 'Coating') {
//             coatingFields.forEach(name => {
//                 const field = name === 'coating_type' ? 
//                     document.querySelector(`label:has(#${name})`) : 
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//             updateCoatingFields();
//         }
//         if (operation === 'VMC') {
//             vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Wire Cut') {
//             wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CG') {
//             cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Turning') {
//             turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CNC Turning') {
//             cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'JG') {
//             jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Sparking') {
//             sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//     });
// }

// // Show/hide coating-specific fields based on coating_type selection
// document.querySelector('#coating_type').addEventListener('change', function() {
//     updateCoatingFields();
//     calculateFields();
// });

// // Function to handle coating field visibility
// function updateCoatingFields() {
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value);
//     const coatingType = document.querySelector('#coating_type').value;
//     const blackeningField = document.querySelector('label:has(input[name="blackening"])');
//     const enpField = document.querySelector('label:has(input[name="enp"])');
//     const flashChromeField = document.querySelector('label:has(input[name="flash_chrome"])');
//     const pcField = document.querySelector('label:has(input[name="pc"])');
//     const zincBlueField = document.querySelector('label:has(input[name="zinc_blue"])');

//     blackeningField.classList.add('hidden');
//     enpField.classList.add('hidden');
//     flashChromeField.classList.add('hidden');
//     pcField.classList.add('hidden');
//     zincBlueField.classList.add('hidden');

//     if (operations.includes('Coating')) {
//         if (coatingType === 'Blackening') blackeningField.classList.remove('hidden');
//         if (coatingType === 'ENP') enpField.classList.remove('hidden');
//         if (coatingType === 'Flash Chrome') flashChromeField.classList.remove('hidden');
//         if (coatingType === 'PC') pcField.classList.remove('hidden');
//         if (coatingType === 'Zinc Blue') zincBlueField.classList.remove('hidden');
//     }
// }

// // Auto-calculate fields when inputs change
// const inputs = document.querySelectorAll(
//     'input[name="dia"], input[name="length"], input[name="width"], input[name="thickness"], input[name="rmw_str"], ' +
//     '#type, #material, #operation, #fm_side, ' +
//     'input[name="hole_4_8"], input[name="hole_9_13"], input[name="hole_15_22"], ' +
//     'input[name="hole_m4"], input[name="hole_m5"], input[name="hole_m6"], input[name="hole_m8"], ' +
//     'input[name="hole_m10"], input[name="hole_m12"], input[name="hole_m14"], input[name="hole_m16"], ' +
//     'input[name="hole_m18"], input[name="hole_m20"], input[name="hole_m22"], input[name="hole_m24"], ' +
//     'input[name="hole_m25"], input[name="hole_m26"], input[name="hole_m30"], input[name="hole_m36"], ' +
//     'input[name="c_bore_m3_m5"], input[name="c_bore_m6_m10"], input[name="c_bore_m12"], ' +
//     'input[name="c_bore_m14"], input[name="c_bore_m16"], ' +
//     'input[name="bsp_tap_1_8_1_4"], input[name="bsp_tap_1_2_3_8"], input[name="bsp_tap_1_inch"], ' +
//     'input[name="bsp_tap_1_5_2_inch"], input[name="gd_total_hole_length"], ' +
//     'input[name="gd_total_hole_length_dro_radial_drilling"], ' +
//     'input[name="4_5_h7"], input[name="6_8_h7"], input[name="10_14_h7"], ' +
//     'input[name="15_18_h7"], input[name="20_25_h7"], input[name="25_30_h7"], ' +
//     'input[name="sg"], input[name="sgl"], #ht_required, input[name="ht"], ' +
//     'input[name="fwcam"], #coating_type, input[name="blackening"], ' +
//     'input[name="enp"], input[name="flash_chrome"], input[name="pc"], input[name="zinc_blue"], ' +
//     'input[name="vmc"], input[name="turning"], input[name="cg"], input[name="wire_cut_sp"], ' +
//     'input[name="cnc_turning"], input[name="jg"], input[name="sparking"], input[name="fm"], ' +
//     'input[name="profit_percent"]'
// );
// inputs.forEach(input => input.addEventListener('change', calculateFields));

// function calculateFields() {
//     const type = document.querySelector('#type').value;
//     const material = document.querySelector('#material').value;
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).filter(op => op !== '');
//     const fmSide = document.querySelector('#fm_side').value === "True";
//     const htRequired = document.querySelector('#ht_required').value === "True";
//     const coatingType = document.querySelector('#coating_type').value;
//     const dia = parseFloat(document.querySelector('input[name="dia"]').value) || 0;
//     const length = parseFloat(document.querySelector('input[name="length"]').value) || 0;
//     const width = parseFloat(document.querySelector('input[name="width"]').value) || 0;
//     const thickness = parseFloat(document.querySelector('input[name="thickness"]').value) || 0;
//     const rmwStr = parseFloat(document.querySelector('input[name="rmw_str"]').value) || 0;
//     const fwcam = parseFloat(document.querySelector('input[name="fwcam"]').value) || 0;
//     const profitPercent = parseFloat(document.querySelector('input[name="profit_percent"]').value) || 0;
//     const density = materials[material]?.Density_gm_cc || 0;
//     const costPerKg = materials[material]?.Cost_per_KG || 0;
//     const fmPerSqmm = materials[material]?.FM_per_sqmm || 0;
//     const fmAfterHtPerSqmm = materials[material]?.FM_AFTER_HT_per_sqmm || 0;
//     const htKg = materials[material]?.HT_KG || 0;
//     let rmwCalc = 0;
//     let rmw = 0;
//     let rmc = 0;
//     let fm = parseFloat(document.querySelector('input[name="fm"]').value) || 0;
//     let fmSideCost = 0;
//     let fmL = parseFloat(document.querySelector('input[name="fm_l"]').value) || 0;
//     let freeHoleCost = 0;
//     let tapHoleCost = 0;
//     let cBoreCost = 0;
//     let bspTapCost = 0;
//     let gdCostGdMachine = 0;
//     let gdCostDroRadialDrilling = 0;
//     let h7HoleCost = 0;
//     let sg = parseFloat(document.querySelector('input[name="sg"]').value) || 0;
//     let sgl = parseFloat(document.querySelector('input[name="sgl"]').value) || 0;
//     let ht = 0;
//     let blackeningCost = 0;
//     let enpCost = 0;
//     let flashChromeCost = 0;
//     let pcCost = 0;
//     let zincBlueCost = 0;
//     let vmc = parseFloat(document.querySelector('input[name="vmc"]').value) || 0;
//     let turning = parseFloat(document.querySelector('input[name="turning"]').value) || 0;
//     let cg = parseFloat(document.querySelector('input[name="cg"]').value) || 0;
//     let wireCutSp = parseFloat(document.querySelector('input[name="wire_cut_sp"]').value) || 0;
//     let cncTurning = parseFloat(document.querySelector('input[name="cnc_turning"]').value) || 0;
//     let engraving = parseFloat(document.querySelector('input[name="engraving"]').value) || 0;

//     // Calculate RMW_Calc
//     if (type === "Pri" && length > 0 && width > 0 && thickness > 0) {
//         rmwCalc = ((length * width * thickness / 1000) * density) / 1000;
//     } else if (type === "Cyl" && dia > 0 && length > 0) {
//         rmwCalc = ((3.14159 * (dia * dia) * length / 4 / 1000) * density) / 1000;
//     }

//     // Calculate RMW
//     if (type === "Str" && rmwStr > 0) {
//         rmw = rmwStr;
//     } else if (rmwCalc > 0) {
//         rmw = rmwCalc;
//     }

//     // Calculate RMC
//     if (rmw > 0 && costPerKg > 0) {
//         rmc = rmw * costPerKg;
//     }

//     // Calculate FM only when Milling is selected
//     if (operations.includes("Milling") && type === "Pri" && length >= 250 && width >= 250) {
//         const fmRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fm = length * width * fmRate;
//     }

//     // Calculate FM_Side
//     if (type === "Pri" && fmSide && length > 0 && width > 0 && thickness > 0) {
//         const fmSideRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fmSideCost = 2 * (length + width) * thickness * fmSideRate;
//     }

//     // Calculate Free_hole_cost
//     const hole_4_8 = parseFloat(document.querySelector('input[name="hole_4_8"]').value) || 0;
//     const hole_9_13 = parseFloat(document.querySelector('input[name="hole_9_13"]').value) || 0;
//     const hole_15_22 = parseFloat(document.querySelector('input[name="hole_15_22"]').value) || 0;
//     freeHoleCost = (hole_4_8 * drillingCosts["Hole_4_8"].Cost) +
//                    (hole_9_13 * drillingCosts["Hole_9_13"].Cost) +
//                    (hole_15_22 * drillingCosts["Hole_15_22"].Cost);

//     // Calculate Tap_hole_cost
//     const hole_m4 = parseFloat(document.querySelector('input[name="hole_m4"]').value) || 0;
//     const hole_m5 = parseFloat(document.querySelector('input[name="hole_m5"]').value) || 0;
//     const hole_m6 = parseFloat(document.querySelector('input[name="hole_m6"]').value) || 0;
//     const hole_m8 = parseFloat(document.querySelector('input[name="hole_m8"]').value) || 0;
//     const hole_m10 = parseFloat(document.querySelector('input[name="hole_m10"]').value) || 0;
//     const hole_m12 = parseFloat(document.querySelector('input[name="hole_m12"]').value) || 0;
//     const hole_m14 = parseFloat(document.querySelector('input[name="hole_m14"]').value) || 0;
//     const hole_m16 = parseFloat(document.querySelector('input[name="hole_m16"]').value) || 0;
//     const hole_m18 = parseFloat(document.querySelector('input[name="hole_m18"]').value) || 0;
//     const hole_m20 = parseFloat(document.querySelector('input[name="hole_m20"]').value) || 0;
//     const hole_m22 = parseFloat(document.querySelector('input[name="hole_m22"]').value) || 0;
//     const hole_m24 = parseFloat(document.querySelector('input[name="hole_m24"]').value) || 0;
//     const hole_m25 = parseFloat(document.querySelector('input[name="hole_m25"]').value) || 0;
//     const hole_m26 = parseFloat(document.querySelector('input[name="hole_m26"]').value) || 0;
//     const hole_m30 = parseFloat(document.querySelector('input[name="hole_m30"]').value) || 0;
//     const hole_m36 = parseFloat(document.querySelector('input[name="hole_m36"]').value) || 0;
//     tapHoleCost = (hole_m4 * drillingCosts["Hole_M4"].Cost) +
//                   (hole_m5 * drillingCosts["Hole_M5"].Cost) +
//                   (hole_m6 * drillingCosts["Hole_M6"].Cost) +
//                   (hole_m8 * drillingCosts["Hole_M8"].Cost) +
//                   (hole_m10 * drillingCosts["Hole_M10"].Cost) +
//                   (hole_m12 * drillingCosts["Hole_M12"].Cost) +
//                   (hole_m14 * drillingCosts["Hole_M14"].Cost) +
//                   (hole_m16 * drillingCosts["Hole_M16"].Cost) +
//                   (hole_m18 * drillingCosts["Hole_M18"].Cost) +
//                   (hole_m20 * drillingCosts["Hole_M20"].Cost) +
//                   (hole_m22 * drillingCosts["Hole_M22"].Cost) +
//                   (hole_m24 * drillingCosts["Hole_M24"].Cost) +
//                   (hole_m25 * drillingCosts["Hole_M25"].Cost) +
//                   (hole_m26 * drillingCosts["Hole_M26"].Cost) +
//                   (hole_m30 * drillingCosts["Hole_M30"].Cost) +
//                   (hole_m36 * drillingCosts["Hole_M36"].Cost);

//     // Calculate C_Bore_Cost
//     const c_bore_m3_m5 = parseFloat(document.querySelector('input[name="c_bore_m3_m5"]').value) || 0;
//     const c_bore_m6_m10 = parseFloat(document.querySelector('input[name="c_bore_m6_m10"]').value) || 0;
//     const c_bore_m12 = parseFloat(document.querySelector('input[name="c_bore_m12"]').value) || 0;
//     const c_bore_m14 = parseFloat(document.querySelector('input[name="c_bore_m14"]').value) || 0;
//     const c_bore_m16 = parseFloat(document.querySelector('input[name="c_bore_m16"]').value) || 0;
//     cBoreCost = (c_bore_m3_m5 * drillingCosts["C_bore_M3_M5"].Cost) +
//                 (c_bore_m6_m10 * drillingCosts["C_bore_M6_M10"].Cost) +
//                 (c_bore_m12 * drillingCosts["C_bore_M12"].Cost) +
//                 (c_bore_m14 * drillingCosts["C_bore_M14"].Cost) +
//                 (c_bore_m16 * drillingCosts["C_bore_M16"].Cost);

//     // Calculate BSP_TAP_COST
//     const bsp_tap_1_8_1_4 = parseFloat(document.querySelector('input[name="bsp_tap_1_8_1_4"]').value) || 0;
//     const bsp_tap_1_2_3_8 = parseFloat(document.querySelector('input[name="bsp_tap_1_2_3_8"]').value) || 0;
//     const bsp_tap_1_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_inch"]').value) || 0;
//     const bsp_tap_1_5_2_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_5_2_inch"]').value) || 0;
//     bspTapCost = (bsp_tap_1_8_1_4 * drillingCosts["BSP_TAP_1/8_1/4"].Cost) +
//                  (bsp_tap_1_2_3_8 * drillingCosts["BSP_TAP_1/2_3/8"].Cost) +
//                  (bsp_tap_1_inch * drillingCosts["BSP_TAP_1_inch"].Cost) +
//                  (bsp_tap_1_5_2_inch * drillingCosts["BSP_TAP_1.5_2_inch"].Cost);

//     // Calculate GD_COST_GD_MACHINE
//     const gd_total_hole_length = parseFloat(document.querySelector('input[name="gd_total_hole_length"]').value) || 0;
//     gdCostGdMachine = gd_total_hole_length * drillingCosts["GD_TOTAL_HOLE_LENGTH"].Cost;

//     // Calculate GD_COST_DRO_RADIAL DRILLING
//     const gd_total_hole_length_dro_radial_drilling = parseFloat(document.querySelector('input[name="gd_total_hole_length_dro_radial_drilling"]').value) || 0;
//     gdCostDroRadialDrilling = gd_total_hole_length_dro_radial_drilling * drillingCosts["GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING"].Cost;

//     // Calculate H7_HOLE_COST
//     const h7_4_5 = parseFloat(document.querySelector('input[name="4_5_h7"]').value) || 0;
//     const h7_6_8 = parseFloat(document.querySelector('input[name="6_8_h7"]').value) || 0;
//     const h7_10_14 = parseFloat(document.querySelector('input[name="10_14_h7"]').value) || 0;
//     const h7_15_18 = parseFloat(document.querySelector('input[name="15_18_h7"]').value) || 0;
//     const h7_20_25 = parseFloat(document.querySelector('input[name="20_25_h7"]').value) || 0;
//     const h7_25_30 = parseFloat(document.querySelector('input[name="25_30_h7"]').value) || 0;
//     h7HoleCost = (h7_4_5 * drillingCosts["4_5_H7"].Cost) +
//                  (h7_6_8 * drillingCosts["6_8_H7"].Cost) +
//                  (h7_10_14 * drillingCosts["10_14_H7"].Cost) +
//                  (h7_15_18 * drillingCosts["10_14_H7"].Cost) +
//                  (h7_20_25 * drillingCosts["20_25_H7"].Cost) +
//                  (h7_25_30 * drillingCosts["25_30_H7"].Cost);

//     // Calculate SG only when Grinding is selected
//     if (operations.includes("Grinding") && type === "Pri" && length >= 250 && width >= 250) {
//         sg = length * width * fmPerSqmm;
//     }

//     // Calculate HT
//     if (operations.includes("Heat Treatment") && htRequired) {
//         ht = rmw * htKg;
//     }

//     // Calculate Coating Costs
//     if (operations.includes("Coating") && length > 0 && width > 0 && coatingType) {
//         const areaCm2 = (length / 10) * (width / 10);
//         blackeningCost = coatingType === "Blackening" ? fwcam * coatingCosts["Blackening"].Cost : 0;
//         enpCost = coatingType === "ENP" ? fwcam * coatingCosts["ENP"].Cost : 0;
//         flashChromeCost = coatingType === "Flash Chrome" ? areaCm2 * coatingCosts["Flash Chrome"].Cost : 0;
//         pcCost = coatingType === "PC" ? fwcam * coatingCosts["PC"].Cost : 0;
//         zincBlueCost = coatingType === "Zinc Blue" ? fwcam * coatingCosts["Zinc Blue"].Cost : 0;
//     }

//     // Calculate Total
//     const coatingSum = blackeningCost + enpCost + flashChromeCost + pcCost + zincBlueCost;
//     const total = (
//         engraving + sgl + h7HoleCost + ht + gdCostDroRadialDrilling + 
//         gdCostGdMachine + bspTapCost + cBoreCost + tapHoleCost + freeHoleCost + 
//         fmL + fmSideCost + fm + rmc + vmc + turning + cg + wireCutSp + cncTurning + 
//         coatingSum
//     );

//     // Calculate With Profit
//     const withProfit = total * (1 + (profitPercent / 100));

//     // Update fields
//     const rmwCalcField = document.querySelector('input[name="rmw_calc"]');
//     const rmwField = document.querySelector('input[name="rmw"]');
//     const rmcField = document.querySelector('input[name="rmc"]');
//     const fmField = document.querySelector('input[name="fm"]');
//     const fmSideCostField = document.querySelector('input[name="fm_side_cost"]');
//     const fmLField = document.querySelector('input[name="fm_l"]');
//     const freeHoleCostField = document.querySelector('input[name="free_hole_cost"]');
//     const tapHoleCostField = document.querySelector('input[name="tap_hole_cost"]');
//     const cBoreCostField = document.querySelector('input[name="c_bore_cost"]');
//     const bspTapCostField = document.querySelector('input[name="bsp_tap_cost"]');
//     const gdCostGdMachineField = document.querySelector('input[name="gd_cost_gd_machine"]');
//     const gdCostDroRadialDrillingField = document.querySelector('input[name="gd_cost_dro_radial_drilling"]');
//     const h7HoleCostField = document.querySelector('input[name="h7_hole_cost"]');
//     const sgField = document.querySelector('input[name="sg"]');
//     const sglField = document.querySelector('input[name="sgl"]');
//     const htField = document.querySelector('input[name="ht"]');
//     const blackeningField = document.querySelector('input[name="blackening"]');
//     const enpField = document.querySelector('input[name="enp"]');
//     const flashChromeField = document.querySelector('input[name="flash_chrome"]');
//     const pcField = document.querySelector('input[name="pc"]');
//     const zincBlueField = document.querySelector('input[name="zinc_blue"]');
//     const vmcField = document.querySelector('input[name="vmc"]');
//     const turningField = document.querySelector('input[name="turning"]');
//     const cgField = document.querySelector('input[name="cg"]');
//     const wireCutSpField = document.querySelector('input[name="wire_cut_sp"]');
//     const cncTurningField = document.querySelector('input[name="cnc_turning"]');
//     const totalField = document.querySelector('input[name="total"]');
//     const withProfitField = document.querySelector('input[name="with_profit"]');

//     rmwCalcField.value = rmwCalc > 0 ? rmwCalc.toFixed(2) : '';
//     rmwField.value = rmw > 0 ? rmw.toFixed(2) : '';
//     rmcField.value = rmc > 0 ? rmc.toFixed(2) : '';
//     fmField.value = fm > 0 ? fm.toFixed(2) : fmField.value;
//     fmSideCostField.value = fmSideCost > 0 ? fmSideCost.toFixed(2) : '';
//     fmLField.value = fmL > 0 ? fmL.toFixed(2) : fmLField.value;
//     freeHoleCostField.value = freeHoleCost > 0 ? freeHoleCost.toFixed(2) : '';
//     tapHoleCostField.value = tapHoleCost > 0 ? tapHoleCost.toFixed(2) : '';
//     cBoreCostField.value = cBoreCost > 0 ? cBoreCost.toFixed(2) : '';
//     bspTapCostField.value = bspTapCost > 0 ? bspTapCost.toFixed(2) : '';
//     gdCostGdMachineField.value = gdCostGdMachine > 0 ? gdCostGdMachine.toFixed(2) : '';
//     gdCostDroRadialDrillingField.value = gdCostDroRadialDrilling > 0 ? gdCostDroRadialDrilling.toFixed(2) : '';
//     h7HoleCostField.value = h7HoleCost > 0 ? h7HoleCost.toFixed(2) : '';
//     sgField.value = sg > 0 ? sg.toFixed(2) : sgField.value;
//     sglField.value = sgl > 0 ? sgl.toFixed(2) : sglField.value;
//     htField.value = ht > 0 ? ht.toFixed(2) : '';
//     blackeningField.value = blackeningCost > 0 ? blackeningCost.toFixed(2) : '';
//     enpField.value = enpCost > 0 ? enpCost.toFixed(2) : '';
//     flashChromeField.value = flashChromeCost > 0 ? flashChromeCost.toFixed(2) : '';
//     pcField.value = pcCost > 0 ? pcCost.toFixed(2) : '';
//     zincBlueField.value = zincBlueCost > 0 ? zincBlueCost.toFixed(2) : '';
//     vmcField.value = vmc > 0 ? vmc.toFixed(2) : vmcField.value;
//     turningField.value = turning > 0 ? turning.toFixed(2) : turningField.value;
//     cgField.value = cg > 0 ? cg.toFixed(2) : cgField.value;
//     wireCutSpField.value = wireCutSp > 0 ? wireCutSp.toFixed(2) : wireCutSpField.value;
//     cncTurningField.value = cncTurning > 0 ? cncTurning.toFixed(2) : cncTurningField.value;
//     totalField.value = total > 0 ? total.toFixed(2) : '';
//     withProfitField.value = withProfit > 0 ? withProfit.toFixed(2) : '';
// }

// // Function to update and download Excel
// function updateExcel() {
//     const form = document.getElementById('costForm');
//     const formData = new FormData(form);
//     const newRowData = {};

//     // Collect all form field values
//     formData.forEach((value, key) => {
//         if (key === 'operation') {
//             // Handle multiple selections for operation
//             if (!newRowData[key]) newRowData[key] = [];
//             newRowData[key].push(value);
//         } else {
//             newRowData[key] = value;
//         }
//     });

//     // Convert operation array to comma-separated string
//     if (newRowData['operation']) {
//         newRowData['operation'] = newRowData['operation'].join(', ');
//     }

//     // Define all possible headers (form field names)
//     const allHeaders = Array.from(form.elements)
//         .filter(el => el.name && el.name !== 'operation') // Exclude empty names and handle operation separately
//         .map(el => el.name)
//         .concat(['operation'])
//         .filter((v, i, a) => a.indexOf(v) === i); // Remove duplicates

//     // If no headers exist (blank sheet), use form field names
//     if (excelData.headers.length === 0) {
//         excelData.headers = allHeaders;
//     }

//     // Ensure new row matches header order, filling missing fields with empty strings
//     const newRow = excelData.headers.map(header => newRowData[header] || '');

//     // Append the new row to existing data
//     excelData.rows.push(newRow);

//     // Create worksheet data: headers + rows
//     const wsData = [excelData.headers, ...excelData.rows];

//     // Create worksheet
//     const ws = XLSX.utils.aoa_to_sheet(wsData);

//     // Create workbook and add worksheet
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Cost Estimation');

//     // Download the updated file
//     XLSX.writeFile(wb, uploadedFileName);
// }

// // Initially hide fields on page load
// const holeFields = [
//     'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost', 
//     'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14', 
//     'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26', 
//     'hole_m30', 'hole_m36', 'tap_hole_cost', 'c_bore_m3_m5', 'c_bore_m6_m10', 
//     'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost', 'bsp_tap_1_8_1_4', 
//     'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost', 
//     'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling', 
//     'gd_cost_dro_radial_drilling', 'spot_face'
// ];
// const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
// const fmFields = ['fm', 'fm_side', 'fm_side_cost', 'fm_l'];
// const grindingFields = ['sg', 'sgl'];
// const heatTreatmentFields = ['ht_required', 'ht'];
// const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
// const vmcFields = ['vmc'];
// const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
// const cgFields = ['cg'];
// const turningFields = ['turning'];
// const cncTurningFields = ['cnc_turning'];
// const jgFields = ['jg'];
// const sparkingFields = ['sparking'];

// holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// fmFields.forEach(name => {
//     const field = name === 'fm_side' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// heatTreatmentFields.forEach(name => {
//     const field = name === 'ht_required' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// coatingFields.forEach(name => {
//     const field = name === 'coating_type' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
























// // static/script.js
// // Material density and costs
// const materials = {
//     "MS": {"Density_gm_cc": 7.85, "Cost_per_KG": 80.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "C45": {"Density_gm_cc": 7.85, "Cost_per_KG": 95.0, "FM_per_sqmm": 0.005, "HT_KG": 25.0, "FM_AFTER_HT_per_sqmm": 0.007},
//     "EN24": {"Density_gm_cc": 7.85, "Cost_per_KG": 125.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN354": {"Density_gm_cc": 7.85, "Cost_per_KG": 145.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "20MnCr5": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN47": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN31": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN19": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS410": {"Density_gm_cc": 7.85, "Cost_per_KG": 220.0, "FM_per_sqmm": 0.008, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-7075": {"Density_gm_cc": 2.73, "Cost_per_KG": 730.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "D2": {"Density_gm_cc": 7.85, "Cost_per_KG": 350.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "OHNS": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "DELRIN": {"Density_gm_cc": 1.42, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "NYLON": {"Density_gm_cc": 1.14, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "HYLEM": {"Density_gm_cc": 1.95, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "BRASS": {"Density_gm_cc": 8.5, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "COPPER": {"Density_gm_cc": 8.93, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CARBIDE": {"Density_gm_cc": 15.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CASTING": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "WELDMENTS": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-6061": {"Density_gm_cc": 2.73, "Cost_per_KG": 455.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS304": {"Density_gm_cc": 7.85, "Cost_per_KG": 245.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0}
// };

// // Drilling costs
// const drillingCosts = {
//     "Hole_4_8": {"Cost": 25},
//     "Hole_9_13": {"Cost": 30},
//     "Hole_15_22": {"Cost": 35},
//     "Hole_M4": {"Cost": 20},
//     "Hole_M5": {"Cost": 25},
//     "Hole_M6": {"Cost": 30},
//     "Hole_M8": {"Cost": 40},
//     "Hole_M10": {"Cost": 50},
//     "Hole_M12": {"Cost": 60},
//     "Hole_M14": {"Cost": 60},
//     "Hole_M16": {"Cost": 70},
//     "Hole_M18": {"Cost": 70},
//     "Hole_M20": {"Cost": 120},
//     "Hole_M22": {"Cost": 120},
//     "Hole_M24": {"Cost": 120},
//     "Hole_M25": {"Cost": 200},
//     "Hole_M26": {"Cost": 200},
//     "Hole_M30": {"Cost": 250},
//     "Hole_M36": {"Cost": 300},
//     "C_bore_M3_M5": {"Cost": 30},
//     "C_bore_M6_M10": {"Cost": 40},
//     "C_bore_M12": {"Cost": 50},
//     "C_bore_M14": {"Cost": 60},
//     "C_bore_M16": {"Cost": 80},
//     "BSP_TAP_1/8_1/4": {"Cost": 45},
//     "BSP_TAP_1/2_3/8": {"Cost": 60},
//     "BSP_TAP_1_inch": {"Cost": 120},
//     "BSP_TAP_1.5_2_inch": {"Cost": 200},
//     "GD_TOTAL_HOLE_LENGTH": {"Cost": 3},
//     "GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING": {"Cost": 2},
//     "4_5_H7": {"Cost": 80},
//     "6_8_H7": {"Cost": 100},
//     "10_14_H7": {"Cost": 120},
//     "15_18_H7": {"Cost": 160},
//     "20_25_H7": {"Cost": 220},
//     "25_30_H7": {"Cost": 280},
//     "Spot_face": {"Cost": 30}
// };

// // Coating costs
// const coatingCosts = {
//     "Blackening": {"Cost": 20},
//     "ENP": {"Cost": 180},
//     "Flash Chrome": {"Cost": 0.6},
//     "PC": {"Cost": 20},
//     "Zinc Blue": {"Cost": 30}
// };

// // Store Excel data in memory
// let excelData = { headers: [], rows: [] };
// let uploadedFileName = 'cost_estimation.xlsx'; // Default filename if no file uploaded
// let savedEstimations = []; // Array to store multiple estimations

// // Initialize Choices.js and handle Excel upload
// document.addEventListener('DOMContentLoaded', () => {
//     const materialSelect = new Choices('#material', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Material',
//     });

//     const typeSelect = new Choices('#type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Type',
//     });

//     const operationSelect = new Choices('#operation', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Operations',
//         removeItemButton: false
//     });

//     const fmSideSelect = new Choices('#fm_side', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select FM Side',
//     });

//     const htRequiredSelect = new Choices('#ht_required', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select HT Required',
//     });

//     const coatingTypeSelect = new Choices('#coating_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Coating Type',
//     });

//     // Populate coating_type dynamically
//     if (coatingTypeSelect.getValue(true) === '') {
//         const coatingOptions = Object.keys(coatingCosts).map(coating => ({
//             value: coating,
//             label: coating,
//         }));
//         coatingTypeSelect.setChoices(coatingOptions, 'value', 'label', true);
//     }

//     // Make coating cost fields readonly
//     ['blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'].forEach(name => {
//         document.querySelector(`input[name="${name}"]`).setAttribute('readonly', true);
//     });

//     // Handle Excel file upload
//     document.getElementById('excelUpload').addEventListener('change', function(e) {
//         const file = e.target.files[0];
//         if (file) {
//             uploadedFileName = file.name; // Use uploaded file's name for download
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 const data = new Uint8Array(e.target.result);
//                 const workbook = XLSX.read(data, { type: 'array' });
//                 const sheetName = workbook.SheetNames[0];
//                 const worksheet = workbook.Sheets[sheetName];
//                 const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

//                 if (jsonData.length > 0) {
//                     excelData.headers = jsonData[0]; // First row as headers
//                     excelData.rows = jsonData.slice(1); // Remaining rows as data
//                 } else {
//                     excelData.headers = []; // Blank sheet
//                     excelData.rows = [];
//                 }
//             };
//             reader.readAsArrayBuffer(file);
//         }
//     });

//     // Handle form submission (Calculate button)
//     document.getElementById('costForm').addEventListener('submit', function(e) {
//         e.preventDefault(); // Prevent default form submission
//         calculateFields(); // Perform calculations
//     });

//     // Handle Save button
//     document.getElementById('saveButton').addEventListener('click', function() {
//         calculateFields(); // Ensure latest calculations
//         saveEstimation(); // Save the current estimation
//         alert('Estimation saved!'); // Feedback to user
//     });

//     // Handle Download button
//     document.getElementById('downloadButton').addEventListener('click', function() {
//         if (savedEstimations.length === 0 && excelData.rows.length === 0) {
//             alert('No estimations to download!');
//             return;
//         }
//         downloadExcel(); // Download all saved estimations
//     });

//     // Initial call to update operation boxes
//     updateOperationBoxes();
// });

// // Show/hide fields based on type selection
// document.querySelector('#type').addEventListener('change', function() {
//     const type = this.value;
//     const diaField = document.querySelector('label[for="dia"]');
//     const lengthField = document.querySelector('label[for="length"]');
//     const widthField = document.querySelector('label[for="width"]');
//     const thicknessField = document.querySelector('label[for="thickness"]');
//     const rmwstrField = document.querySelector('label[for="rmw_str"]');

//     diaField.classList.add('hidden');
//     lengthField.classList.add('hidden');
//     widthField.classList.add('hidden');
//     thicknessField.classList.add('hidden');
//     rmwstrField.classList.add('hidden');

//     if (type === 'Cyl') {
//         diaField.classList.remove('hidden');
//         lengthField.classList.remove('hidden');
//     } else if (type === 'Pri') {
//         lengthField.classList.remove('hidden');
//         widthField.classList.remove('hidden');
//         thicknessField.classList.remove('hidden');
//     } else if (type === 'Str') {
//         rmwstrField.classList.remove('hidden');
//     }
//     calculateFields();
// });

// // Show/hide fields based on operation selection
// document.querySelector('#operation').addEventListener('change', function() {
//     const operations = Array.from(this.selectedOptions).map(option => option.value).filter(op => op !== '');
//     updateOperationBoxes();
//     updateOperationFields(operations);
//     calculateFields();
// });

// // Function to update operation boxes
// function updateOperationBoxes() {
//     const operationSelect = document.querySelector('#operation');
//     const selectedOperations = Array.from(operationSelect.selectedOptions)
//         .map(option => option.value)
//         .filter(op => op !== '');
//     const container = document.querySelector('#operation-box-container');
//     container.innerHTML = ''; // Clear existing boxes

//     selectedOperations.forEach(operation => {
//         const box = document.createElement('div');
//         box.className = 'operation-box';
//         box.textContent = operation;
//         container.appendChild(box);
//     });
// }

// // Function to update fields based on selected operations
// function updateOperationFields(operations) {
//     const fmField = document.querySelector('label:has(input[name="fm"])');
//     const fmSideQField = document.querySelector('label:has(#fm_side)');
//     const fmSideField = document.querySelector('label:has(input[name="fm_side_cost"])');
//     const fmLField = document.querySelector('label:has(input[name="fm_l"])');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost', 
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14', 
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26', 
//         'hole_m30', 'hole_m36', 'tap_hole_cost', 'c_bore_m3_m5', 'c_bore_m6_m10', 
//         'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost', 'bsp_tap_1_8_1_4', 
//         'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost', 
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling', 
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
//     const grindingFields = ['sg', 'sgl'];
//     const heatTreatmentFields = ['ht_required', 'ht'];
//     const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
//     const vmcFields = ['vmc'];
//     const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
//     const cgFields = ['cg'];
//     const turningFields = ['turning'];
//     const cncTurningFields = ['cnc_turning'];
//     const jgFields = ['jg'];
//     const sparkingFields = ['sparking'];

//     // Hide all operation-related fields initially
//     fmField.classList.add('hidden');
//     fmSideQField.classList.add('hidden');
//     fmSideField.classList.add('hidden');
//     fmLField.classList.add('hidden');
//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     heatTreatmentFields.forEach(name => {
//         const field = name === 'ht_required' ? 
//             document.querySelector(`label:has(#${name})`) : 
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     coatingFields.forEach(name => {
//         const field = name === 'coating_type' ? 
//             document.querySelector(`label:has(#${name})`) : 
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));

//     // Show fields based on selected operations
//     operations.forEach(operation => {
//         if (operation === 'Milling') {
//             fmField.classList.remove('hidden');
//             fmSideQField.classList.remove('hidden');
//             fmSideField.classList.remove('hidden');
//             fmLField.classList.remove('hidden');
//         }
//         if (operation === 'Drilling') {
//             holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Grinding') {
//             grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Heat Treatment') {
//             heatTreatmentFields.forEach(name => {
//                 const field = name === 'ht_required' ? 
//                     document.querySelector(`label:has(#${name})`) : 
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//         }
//         if (operation === 'Coating') {
//             coatingFields.forEach(name => {
//                 const field = name === 'coating_type' ? 
//                     document.querySelector(`label:has(#${name})`) : 
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//             updateCoatingFields();
//         }
//         if (operation === 'VMC') {
//             vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Wire Cut') {
//             wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CG') {
//             cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Turning') {
//             turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CNC Turning') {
//             cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'JG') {
//             jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Sparking') {
//             sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//     });
// }

// // Show/hide coating-specific fields based on coating_type selection
// document.querySelector('#coating_type').addEventListener('change', function() {
//     updateCoatingFields();
//     calculateFields();
// });

// // Function to handle coating field visibility
// function updateCoatingFields() {
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value);
//     const coatingType = document.querySelector('#coating_type').value;
//     const blackeningField = document.querySelector('label:has(input[name="blackening"])');
//     const enpField = document.querySelector('label:has(input[name="enp"])');
//     const flashChromeField = document.querySelector('label:has(input[name="flash_chrome"])');
//     const pcField = document.querySelector('label:has(input[name="pc"])');
//     const zincBlueField = document.querySelector('label:has(input[name="zinc_blue"])');

//     blackeningField.classList.add('hidden');
//     enpField.classList.add('hidden');
//     flashChromeField.classList.add('hidden');
//     pcField.classList.add('hidden');
//     zincBlueField.classList.add('hidden');

//     if (operations.includes('Coating')) {
//         if (coatingType === 'Blackening') blackeningField.classList.remove('hidden');
//         if (coatingType === 'ENP') enpField.classList.remove('hidden');
//         if (coatingType === 'Flash Chrome') flashChromeField.classList.remove('hidden');
//         if (coatingType === 'PC') pcField.classList.remove('hidden');
//         if (coatingType === 'Zinc Blue') zincBlueField.classList.remove('hidden');
//     }
// }

// // Auto-calculate fields when inputs change
// const inputs = document.querySelectorAll(
//     'input[name="dia"], input[name="length"], input[name="width"], input[name="thickness"], input[name="rmw_str"], ' +
//     '#type, #material, #operation, #fm_side, ' +
//     'input[name="hole_4_8"], input[name="hole_9_13"], input[name="hole_15_22"], ' +
//     'input[name="hole_m4"], input[name="hole_m5"], input[name="hole_m6"], input[name="hole_m8"], ' +
//     'input[name="hole_m10"], input[name="hole_m12"], input[name="hole_m14"], input[name="hole_m16"], ' +
//     'input[name="hole_m18"], input[name="hole_m20"], input[name="hole_m22"], input[name="hole_m24"], ' +
//     'input[name="hole_m25"], input[name="hole_m26"], input[name="hole_m30"], input[name="hole_m36"], ' +
//     'input[name="c_bore_m3_m5"], input[name="c_bore_m6_m10"], input[name="c_bore_m12"], ' +
//     'input[name="c_bore_m14"], input[name="c_bore_m16"], ' +
//     'input[name="bsp_tap_1_8_1_4"], input[name="bsp_tap_1_2_3_8"], input[name="bsp_tap_1_inch"], ' +
//     'input[name="bsp_tap_1_5_2_inch"], input[name="gd_total_hole_length"], ' +
//     'input[name="gd_total_hole_length_dro_radial_drilling"], ' +
//     'input[name="4_5_h7"], input[name="6_8_h7"], input[name="10_14_h7"], ' +
//     'input[name="15_18_h7"], input[name="20_25_h7"], input[name="25_30_h7"], ' +
//     'input[name="sg"], input[name="sgl"], #ht_required, input[name="ht"], ' +
//     'input[name="fwcam"], #coating_type, input[name="blackening"], ' +
//     'input[name="enp"], input[name="flash_chrome"], input[name="pc"], input[name="zinc_blue"], ' +
//     'input[name="vmc"], input[name="turning"], input[name="cg"], input[name="wire_cut_sp"], ' +
//     'input[name="cnc_turning"], input[name="jg"], input[name="sparking"], input[name="fm"], ' +
//     'input[name="profit_percent"]'
// );
// inputs.forEach(input => input.addEventListener('change', calculateFields));

// function calculateFields() {
//     const type = document.querySelector('#type').value;
//     const material = document.querySelector('#material').value;
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).filter(op => op !== '');
//     const fmSide = document.querySelector('#fm_side').value === "True";
//     const htRequired = document.querySelector('#ht_required').value === "True";
//     const coatingType = document.querySelector('#coating_type').value;
//     const dia = parseFloat(document.querySelector('input[name="dia"]').value) || 0;
//     const length = parseFloat(document.querySelector('input[name="length"]').value) || 0;
//     const width = parseFloat(document.querySelector('input[name="width"]').value) || 0;
//     const thickness = parseFloat(document.querySelector('input[name="thickness"]').value) || 0;
//     const rmwStr = parseFloat(document.querySelector('input[name="rmw_str"]').value) || 0;
//     const fwcam = parseFloat(document.querySelector('input[name="fwcam"]').value) || 0;
//     const profitPercent = parseFloat(document.querySelector('input[name="profit_percent"]').value) || 0;
//     const density = materials[material]?.Density_gm_cc || 0;
//     const costPerKg = materials[material]?.Cost_per_KG || 0;
//     const fmPerSqmm = materials[material]?.FM_per_sqmm || 0;
//     const fmAfterHtPerSqmm = materials[material]?.FM_AFTER_HT_per_sqmm || 0;
//     const htKg = materials[material]?.HT_KG || 0;
//     let rmwCalc = 0;
//     let rmw = 0;
//     let rmc = 0;
//     let fm = parseFloat(document.querySelector('input[name="fm"]').value) || 0;
//     let fmSideCost = 0;
//     let fmL = parseFloat(document.querySelector('input[name="fm_l"]').value) || 0;
//     let freeHoleCost = 0;
//     let tapHoleCost = 0;
//     let cBoreCost = 0;
//     let bspTapCost = 0;
//     let gdCostGdMachine = 0;
//     let gdCostDroRadialDrilling = 0;
//     let h7HoleCost = 0;
//     let sg = parseFloat(document.querySelector('input[name="sg"]').value) || 0;
//     let sgl = parseFloat(document.querySelector('input[name="sgl"]').value) || 0;
//     let ht = 0;
//     let blackeningCost = 0;
//     let enpCost = 0;
//     let flashChromeCost = 0;
//     let pcCost = 0;
//     let zincBlueCost = 0;
//     let vmc = parseFloat(document.querySelector('input[name="vmc"]').value) || 0;
//     let turning = parseFloat(document.querySelector('input[name="turning"]').value) || 0;
//     let cg = parseFloat(document.querySelector('input[name="cg"]').value) || 0;
//     let wireCutSp = parseFloat(document.querySelector('input[name="wire_cut_sp"]').value) || 0;
//     let cncTurning = parseFloat(document.querySelector('input[name="cnc_turning"]').value) || 0;
//     let engraving = parseFloat(document.querySelector('input[name="engraving"]').value) || 0;

//     // Calculate RMW_Calc
//     if (type === "Pri" && length > 0 && width > 0 && thickness > 0) {
//         rmwCalc = ((length * width * thickness / 1000) * density) / 1000;
//     } else if (type === "Cyl" && dia > 0 && length > 0) {
//         rmwCalc = ((3.14159 * (dia * dia) * length / 4 / 1000) * density) / 1000;
//     }

//     // Calculate RMW
//     if (type === "Str" && rmwStr > 0) {
//         rmw = rmwStr;
//     } else if (rmwCalc > 0) {
//         rmw = rmwCalc;
//     }

//     // Calculate RMC
//     if (rmw > 0 && costPerKg > 0) {
//         rmc = rmw * costPerKg;
//     }

//     // Calculate FM only when Milling is selected
//     if (operations.includes("Milling") && type === "Pri" && length >= 250 && width >= 250) {
//         const fmRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fm = length * width * fmRate;
//     }

//     // Calculate FM_Side
//     if (type === "Pri" && fmSide && length > 0 && width > 0 && thickness > 0) {
//         const fmSideRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fmSideCost = 2 * (length + width) * thickness * fmSideRate;
//     }

//     // Calculate Free_hole_cost
//     const hole_4_8 = parseFloat(document.querySelector('input[name="hole_4_8"]').value) || 0;
//     const hole_9_13 = parseFloat(document.querySelector('input[name="hole_9_13"]').value) || 0;
//     const hole_15_22 = parseFloat(document.querySelector('input[name="hole_15_22"]').value) || 0;
//     freeHoleCost = (hole_4_8 * drillingCosts["Hole_4_8"].Cost) +
//                    (hole_9_13 * drillingCosts["Hole_9_13"].Cost) +
//                    (hole_15_22 * drillingCosts["Hole_15_22"].Cost);

//     // Calculate Tap_hole_cost
//     const hole_m4 = parseFloat(document.querySelector('input[name="hole_m4"]').value) || 0;
//     const hole_m5 = parseFloat(document.querySelector('input[name="hole_m5"]').value) || 0;
//     const hole_m6 = parseFloat(document.querySelector('input[name="hole_m6"]').value) || 0;
//     const hole_m8 = parseFloat(document.querySelector('input[name="hole_m8"]').value) || 0;
//     const hole_m10 = parseFloat(document.querySelector('input[name="hole_m10"]').value) || 0;
//     const hole_m12 = parseFloat(document.querySelector('input[name="hole_m12"]').value) || 0;
//     const hole_m14 = parseFloat(document.querySelector('input[name="hole_m14"]').value) || 0;
//     const hole_m16 = parseFloat(document.querySelector('input[name="hole_m16"]').value) || 0;
//     const hole_m18 = parseFloat(document.querySelector('input[name="hole_m18"]').value) || 0;
//     const hole_m20 = parseFloat(document.querySelector('input[name="hole_m20"]').value) || 0;
//     const hole_m22 = parseFloat(document.querySelector('input[name="hole_m22"]').value) || 0;
//     const hole_m24 = parseFloat(document.querySelector('input[name="hole_m24"]').value) || 0;
//     const hole_m25 = parseFloat(document.querySelector('input[name="hole_m25"]').value) || 0;
//     const hole_m26 = parseFloat(document.querySelector('input[name="hole_m26"]').value) || 0;
//     const hole_m30 = parseFloat(document.querySelector('input[name="hole_m30"]').value) || 0;
//     const hole_m36 = parseFloat(document.querySelector('input[name="hole_m36"]').value) || 0;
//     tapHoleCost = (hole_m4 * drillingCosts["Hole_M4"].Cost) +
//                   (hole_m5 * drillingCosts["Hole_M5"].Cost) +
//                   (hole_m6 * drillingCosts["Hole_M6"].Cost) +
//                   (hole_m8 * drillingCosts["Hole_M8"].Cost) +
//                   (hole_m10 * drillingCosts["Hole_M10"].Cost) +
//                   (hole_m12 * drillingCosts["Hole_M12"].Cost) +
//                   (hole_m14 * drillingCosts["Hole_M14"].Cost) +
//                   (hole_m16 * drillingCosts["Hole_M16"].Cost) +
//                   (hole_m18 * drillingCosts["Hole_M18"].Cost) +
//                   (hole_m20 * drillingCosts["Hole_M20"].Cost) +
//                   (hole_m22 * drillingCosts["Hole_M22"].Cost) +
//                   (hole_m24 * drillingCosts["Hole_M24"].Cost) +
//                   (hole_m25 * drillingCosts["Hole_M25"].Cost) +
//                   (hole_m26 * drillingCosts["Hole_M26"].Cost) +
//                   (hole_m30 * drillingCosts["Hole_M30"].Cost) +
//                   (hole_m36 * drillingCosts["Hole_M36"].Cost);

//     // Calculate C_Bore_Cost
//     const c_bore_m3_m5 = parseFloat(document.querySelector('input[name="c_bore_m3_m5"]').value) || 0;
//     const c_bore_m6_m10 = parseFloat(document.querySelector('input[name="c_bore_m6_m10"]').value) || 0;
//     const c_bore_m12 = parseFloat(document.querySelector('input[name="c_bore_m12"]').value) || 0;
//     const c_bore_m14 = parseFloat(document.querySelector('input[name="c_bore_m14"]').value) || 0;
//     const c_bore_m16 = parseFloat(document.querySelector('input[name="c_bore_m16"]').value) || 0;
//     cBoreCost = (c_bore_m3_m5 * drillingCosts["C_bore_M3_M5"].Cost) +
//                 (c_bore_m6_m10 * drillingCosts["C_bore_M6_M10"].Cost) +
//                 (c_bore_m12 * drillingCosts["C_bore_M12"].Cost) +
//                 (c_bore_m14 * drillingCosts["C_bore_M14"].Cost) +
//                 (c_bore_m16 * drillingCosts["C_bore_M16"].Cost);

//     // Calculate BSP_TAP_COST
//     const bsp_tap_1_8_1_4 = parseFloat(document.querySelector('input[name="bsp_tap_1_8_1_4"]').value) || 0;
//     const bsp_tap_1_2_3_8 = parseFloat(document.querySelector('input[name="bsp_tap_1_2_3_8"]').value) || 0;
//     const bsp_tap_1_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_inch"]').value) || 0;
//     const bsp_tap_1_5_2_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_5_2_inch"]').value) || 0;
//     bspTapCost = (bsp_tap_1_8_1_4 * drillingCosts["BSP_TAP_1/8_1/4"].Cost) +
//                  (bsp_tap_1_2_3_8 * drillingCosts["BSP_TAP_1/2_3/8"].Cost) +
//                  (bsp_tap_1_inch * drillingCosts["BSP_TAP_1_inch"].Cost) +
//                  (bsp_tap_1_5_2_inch * drillingCosts["BSP_TAP_1.5_2_inch"].Cost);

//     // Calculate GD_COST_GD_MACHINE
//     const gd_total_hole_length = parseFloat(document.querySelector('input[name="gd_total_hole_length"]').value) || 0;
//     gdCostGdMachine = gd_total_hole_length * drillingCosts["GD_TOTAL_HOLE_LENGTH"].Cost;

//     // Calculate GD_COST_DRO_RADIAL DRILLING
//     const gd_total_hole_length_dro_radial_drilling = parseFloat(document.querySelector('input[name="gd_total_hole_length_dro_radial_drilling"]').value) || 0;
//     gdCostDroRadialDrilling = gd_total_hole_length_dro_radial_drilling * drillingCosts["GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING"].Cost;

//     // Calculate H7_HOLE_COST
//     const h7_4_5 = parseFloat(document.querySelector('input[name="4_5_h7"]').value) || 0;
//     const h7_6_8 = parseFloat(document.querySelector('input[name="6_8_h7"]').value) || 0;
//     const h7_10_14 = parseFloat(document.querySelector('input[name="10_14_h7"]').value) || 0;
//     const h7_15_18 = parseFloat(document.querySelector('input[name="15_18_h7"]').value) || 0;
//     const h7_20_25 = parseFloat(document.querySelector('input[name="20_25_h7"]').value) || 0;
//     const h7_25_30 = parseFloat(document.querySelector('input[name="25_30_h7"]').value) || 0;
//     h7HoleCost = (h7_4_5 * drillingCosts["4_5_H7"].Cost) +
//                  (h7_6_8 * drillingCosts["6_8_H7"].Cost) +
//                  (h7_10_14 * drillingCosts["10_14_H7"].Cost) +
//                  (h7_15_18 * drillingCosts["10_14_H7"].Cost) +
//                  (h7_20_25 * drillingCosts["20_25_H7"].Cost) +
//                  (h7_25_30 * drillingCosts["25_30_H7"].Cost);

//     // Calculate SG only when Grinding is selected
//     if (operations.includes("Grinding") && type === "Pri" && length >= 250 && width >= 250) {
//         sg = length * width * fmPerSqmm;
//     }

//     // Calculate HT
//     if (operations.includes("Heat Treatment") && htRequired) {
//         ht = rmw * htKg;
//     }

//     // Calculate Coating Costs
//     if (operations.includes("Coating") && length > 0 && width > 0 && coatingType) {
//         const areaCm2 = (length / 10) * (width / 10);
//         blackeningCost = coatingType === "Blackening" ? fwcam * coatingCosts["Blackening"].Cost : 0;
//         enpCost = coatingType === "ENP" ? fwcam * coatingCosts["ENP"].Cost : 0;
//         flashChromeCost = coatingType === "Flash Chrome" ? areaCm2 * coatingCosts["Flash Chrome"].Cost : 0;
//         pcCost = coatingType === "PC" ? fwcam * coatingCosts["PC"].Cost : 0;
//         zincBlueCost = coatingType === "Zinc Blue" ? fwcam * coatingCosts["Zinc Blue"].Cost : 0;
//     }

//     // Calculate Total
//     const coatingSum = blackeningCost + enpCost + flashChromeCost + pcCost + zincBlueCost;
//     const total = (
//         engraving + sgl + h7HoleCost + ht + gdCostDroRadialDrilling + 
//         gdCostGdMachine + bspTapCost + cBoreCost + tapHoleCost + freeHoleCost + 
//         fmL + fmSideCost + fm + rmc + vmc + turning + cg + wireCutSp + cncTurning + 
//         coatingSum
//     );

//     // Calculate With Profit
//     const withProfit = total * (1 + (profitPercent / 100));

//     // Update fields
//     const rmwCalcField = document.querySelector('input[name="rmw_calc"]');
//     const rmwField = document.querySelector('input[name="rmw"]');
//     const rmcField = document.querySelector('input[name="rmc"]');
//     const fmField = document.querySelector('input[name="fm"]');
//     const fmSideCostField = document.querySelector('input[name="fm_side_cost"]');
//     const fmLField = document.querySelector('input[name="fm_l"]');
//     const freeHoleCostField = document.querySelector('input[name="free_hole_cost"]');
//     const tapHoleCostField = document.querySelector('input[name="tap_hole_cost"]');
//     const cBoreCostField = document.querySelector('input[name="c_bore_cost"]');
//     const bspTapCostField = document.querySelector('input[name="bsp_tap_cost"]');
//     const gdCostGdMachineField = document.querySelector('input[name="gd_cost_gd_machine"]');
//     const gdCostDroRadialDrillingField = document.querySelector('input[name="gd_cost_dro_radial_drilling"]');
//     const h7HoleCostField = document.querySelector('input[name="h7_hole_cost"]');
//     const sgField = document.querySelector('input[name="sg"]');
//     const sglField = document.querySelector('input[name="sgl"]');
//     const htField = document.querySelector('input[name="ht"]');
//     const blackeningField = document.querySelector('input[name="blackening"]');
//     const enpField = document.querySelector('input[name="enp"]');
//     const flashChromeField = document.querySelector('input[name="flash_chrome"]');
//     const pcField = document.querySelector('input[name="pc"]');
//     const zincBlueField = document.querySelector('input[name="zinc_blue"]');
//     const vmcField = document.querySelector('input[name="vmc"]');
//     const turningField = document.querySelector('input[name="turning"]');
//     const cgField = document.querySelector('input[name="cg"]');
//     const wireCutSpField = document.querySelector('input[name="wire_cut_sp"]');
//     const cncTurningField = document.querySelector('input[name="cnc_turning"]');
//     const totalField = document.querySelector('input[name="total"]');
//     const withProfitField = document.querySelector('input[name="with_profit"]');

//     rmwCalcField.value = rmwCalc > 0 ? rmwCalc.toFixed(2) : '';
//     rmwField.value = rmw > 0 ? rmw.toFixed(2) : '';
//     rmcField.value = rmc > 0 ? rmc.toFixed(2) : '';
//     fmField.value = fm > 0 ? fm.toFixed(2) : fmField.value;
//     fmSideCostField.value = fmSideCost > 0 ? fmSideCost.toFixed(2) : '';
//     fmLField.value = fmL > 0 ? fmL.toFixed(2) : fmLField.value;
//     freeHoleCostField.value = freeHoleCost > 0 ? freeHoleCost.toFixed(2) : '';
//     tapHoleCostField.value = tapHoleCost > 0 ? tapHoleCost.toFixed(2) : '';
//     cBoreCostField.value = cBoreCost > 0 ? cBoreCost.toFixed(2) : '';
//     bspTapCostField.value = bspTapCost > 0 ? bspTapCost.toFixed(2) : '';
//     gdCostGdMachineField.value = gdCostGdMachine > 0 ? gdCostGdMachine.toFixed(2) : '';
//     gdCostDroRadialDrillingField.value = gdCostDroRadialDrilling > 0 ? gdCostDroRadialDrilling.toFixed(2) : '';
//     h7HoleCostField.value = h7HoleCost > 0 ? h7HoleCost.toFixed(2) : '';
//     sgField.value = sg > 0 ? sg.toFixed(2) : sgField.value;
//     sglField.value = sgl > 0 ? sgl.toFixed(2) : sglField.value;
//     htField.value = ht > 0 ? ht.toFixed(2) : '';
//     blackeningField.value = blackeningCost > 0 ? blackeningCost.toFixed(2) : '';
//     enpField.value = enpCost > 0 ? enpCost.toFixed(2) : '';
//     flashChromeField.value = flashChromeCost > 0 ? flashChromeCost.toFixed(2) : '';
//     pcField.value = pcCost > 0 ? pcCost.toFixed(2) : '';
//     zincBlueField.value = zincBlueCost > 0 ? zincBlueCost.toFixed(2) : '';
//     vmcField.value = vmc > 0 ? vmc.toFixed(2) : vmcField.value;
//     turningField.value = turning > 0 ? turning.toFixed(2) : turningField.value;
//     cgField.value = cg > 0 ? cg.toFixed(2) : cgField.value;
//     wireCutSpField.value = wireCutSp > 0 ? wireCutSp.toFixed(2) : wireCutSpField.value;
//     cncTurningField.value = cncTurning > 0 ? cncTurning.toFixed(2) : cncTurningField.value;
//     totalField.value = total > 0 ? total.toFixed(2) : '';
//     withProfitField.value = withProfit > 0 ? withProfit.toFixed(2) : '';
// }

// // Function to save the current estimation
// function saveEstimation() {
//     const form = document.getElementById('costForm');
//     const formData = new FormData(form);
//     const estimationData = {};

//     // Collect all form field values
//     formData.forEach((value, key) => {
//         if (key === 'operation') {
//             // Handle multiple selections for operation
//             if (!estimationData[key]) estimationData[key] = [];
//             estimationData[key].push(value);
//         } else {
//             estimationData[key] = value;
//         }
//     });

//     // Convert operation array to comma-separated string
//     if (estimationData['operation']) {
//         estimationData['operation'] = estimationData['operation'].join(', ');
//     }

//     // Add the estimation to the savedEstimations array
//     savedEstimations.push(estimationData);
// }

// // Function to download all saved estimations
// function downloadExcel() {
//     // Define all possible headers (form field names)
//     const allHeaders = Array.from(document.getElementById('costForm').elements)
//         .filter(el => el.name && el.name !== 'operation') // Exclude empty names and handle operation separately
//         .map(el => el.name)
//         .concat(['operation'])
//         .filter((v, i, a) => a.indexOf(v) === i); // Remove duplicates

//     // Use uploaded headers if available, otherwise use form field names
//     const headers = excelData.headers.length > 0 ? excelData.headers : allHeaders;

//     // Map saved estimations to rows, ensuring they match header order
//     const estimationRows = savedEstimations.map(estimation => 
//         headers.map(header => estimation[header] || '')
//     );

//     // Combine uploaded data (if any) with saved estimations
//     const allRows = [...excelData.rows, ...estimationRows];

//     // Create worksheet data: headers + rows
//     const wsData = [headers, ...allRows];

//     // Create worksheet
//     const ws = XLSX.utils.aoa_to_sheet(wsData);

//     // Create workbook and add worksheet
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Cost Estimation');

//     // Download the file
//     XLSX.writeFile(wb, uploadedFileName);
// }

// // Initially hide fields on page load
// const holeFields = [
//     'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost', 
//     'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14', 
//     'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26', 
//     'hole_m30', 'hole_m36', 'tap_hole_cost', 'c_bore_m3_m5', 'c_bore_m6_m10', 
//     'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost', 'bsp_tap_1_8_1_4', 
//     'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost', 
//     'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling', 
//     'gd_cost_dro_radial_drilling', 'spot_face'
// ];
// const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
// const fmFields = ['fm', 'fm_side', 'fm_side_cost', 'fm_l'];
// const grindingFields = ['sg', 'sgl'];
// const heatTreatmentFields = ['ht_required', 'ht'];
// const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
// const vmcFields = ['vmc'];
// const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
// const cgFields = ['cg'];
// const turningFields = ['turning'];
// const cncTurningFields = ['cnc_turning'];
// const jgFields = ['jg'];
// const sparkingFields = ['sparking'];

// holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// fmFields.forEach(name => {
//     const field = name === 'fm_side' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// heatTreatmentFields.forEach(name => {
//     const field = name === 'ht_required' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// coatingFields.forEach(name => {
//     const field = name === 'coating_type' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));





























// // static/script.js
// // Material density and costs
// const materials = {
//     "MS": {"Density_gm_cc": 7.85, "Cost_per_KG": 80.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "C45": {"Density_gm_cc": 7.85, "Cost_per_KG": 95.0, "FM_per_sqmm": 0.005, "HT_KG": 25.0, "FM_AFTER_HT_per_sqmm": 0.007},
//     "EN24": {"Density_gm_cc": 7.85, "Cost_per_KG": 125.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN354": {"Density_gm_cc": 7.85, "Cost_per_KG": 145.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "20MnCr5": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN47": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN31": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN19": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS410": {"Density_gm_cc": 7.85, "Cost_per_KG": 220.0, "FM_per_sqmm": 0.008, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-7075": {"Density_gm_cc": 2.73, "Cost_per_KG": 730.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "D2": {"Density_gm_cc": 7.85, "Cost_per_KG": 350.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "OHNS": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "DELRIN": {"Density_gm_cc": 1.42, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "NYLON": {"Density_gm_cc": 1.14, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "HYLEM": {"Density_gm_cc": 1.95, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "BRASS": {"Density_gm_cc": 8.5, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "COPPER": {"Density_gm_cc": 8.93, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CARBIDE": {"Density_gm_cc": 15.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CASTING": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "WELDMENTS": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-6061": {"Density_gm_cc": 2.73, "Cost_per_KG": 455.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS304": {"Density_gm_cc": 7.85, "Cost_per_KG": 245.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0}
// };

// // Drilling costs
// const drillingCosts = {
//     "Hole_4_8": {"Cost": 25},
//     "Hole_9_13": {"Cost": 30},
//     "Hole_15_22": {"Cost": 35},
//     "Hole_M4": {"Cost": 20},
//     "Hole_M5": {"Cost": 25},
//     "Hole_M6": {"Cost": 30},
//     "Hole_M8": {"Cost": 40},
//     "Hole_M10": {"Cost": 50},
//     "Hole_M12": {"Cost": 60},
//     "Hole_M14": {"Cost": 60},
//     "Hole_M16": {"Cost": 70},
//     "Hole_M18": {"Cost": 70},
//     "Hole_M20": {"Cost": 120},
//     "Hole_M22": {"Cost": 120},
//     "Hole_M24": {"Cost": 120},
//     "Hole_M25": {"Cost": 200},
//     "Hole_M26": {"Cost": 200},
//     "Hole_M30": {"Cost": 250},
//     "Hole_M36": {"Cost": 300},
//     "C_bore_M3_M5": {"Cost": 30},
//     "C_bore_M6_M10": {"Cost": 40},
//     "C_bore_M12": {"Cost": 50},
//     "C_bore_M14": {"Cost": 60},
//     "C_bore_M16": {"Cost": 80},
//     "BSP_TAP_1/8_1/4": {"Cost": 45},
//     "BSP_TAP_1/2_3/8": {"Cost": 60},
//     "BSP_TAP_1_inch": {"Cost": 120},
//     "BSP_TAP_1.5_2_inch": {"Cost": 200},
//     "GD_TOTAL_HOLE_LENGTH": {"Cost": 3},
//     "GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING": {"Cost": 2},
//     "4_5_H7": {"Cost": 80},
//     "6_8_H7": {"Cost": 100},
//     "10_14_H7": {"Cost": 120},
//     "15_18_H7": {"Cost": 160},
//     "20_25_H7": {"Cost": 220},
//     "25_30_H7": {"Cost": 280},
//     "Spot_face": {"Cost": 30}
// };

// // Coating costs
// const coatingCosts = {
//     "Blackening": {"Cost": 20},
//     "ENP": {"Cost": 180},
//     "Flash Chrome": {"Cost": 0.6},
//     "PC": {"Cost": 20},
//     "Zinc Blue": {"Cost": 30}
// };

// // Store Excel data in memory
// let excelData = { headers: [], rows: [] };
// let uploadedFileName = 'cost_estimation.xlsx'; // Default filename if no file uploaded
// let savedEstimations = []; // Array to store multiple estimations

// // Initialize Choices.js and handle Excel upload
// document.addEventListener('DOMContentLoaded', () => {
//     const materialSelect = new Choices('#material', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Material',
//     });

//     const typeSelect = new Choices('#type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Type',
//     });

//     const operationSelect = new Choices('#operation', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Operations',
//         removeItemButton: true // Enable remove button for multiple selections
//     });

//     const fmSideSelect = new Choices('#fm_side', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select FM Side',
//     });

//     const htRequiredSelect = new Choices('#ht_required', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select HT Required',
//     });

//     const coatingTypeSelect = new Choices('#coating_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Coating Type',
//     });

//     // Populate coating_type dynamically
//     if (coatingTypeSelect.getValue(true) === '') {
//         const coatingOptions = Object.keys(coatingCosts).map(coating => ({
//             value: coating,
//             label: coating,
//         }));
//         coatingTypeSelect.setChoices(coatingOptions, 'value', 'label', true);
//     }

//     // Make coating cost fields readonly
//     ['blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'].forEach(name => {
//         document.querySelector(`input[name="${name}"]`).setAttribute('readonly', true);
//     });

//     // Handle Excel file upload
//     document.getElementById('excelUpload').addEventListener('change', function(e) {
//         const file = e.target.files[0];
//         if (file) {
//             uploadedFileName = file.name; // Use uploaded file's name for download
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 const data = new Uint8Array(e.target.result);
//                 const workbook = XLSX.read(data, { type: 'array' });
//                 const sheetName = workbook.SheetNames[0];
//                 const worksheet = workbook.Sheets[sheetName];
//                 const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

//                 if (jsonData.length > 0) {
//                     excelData.headers = jsonData[0]; // First row as headers
//                     excelData.rows = jsonData.slice(1); // Remaining rows as data
//                 } else {
//                     excelData.headers = []; // Blank sheet
//                     excelData.rows = [];
//                 }
//             };
//             reader.readAsArrayBuffer(file);
//         }
//     });

//     // Handle form submission (Calculate button)
//     document.getElementById('costForm').addEventListener('submit', function(e) {
//         e.preventDefault(); // Prevent default form submission
//         calculateFields(); // Perform calculations
//     });

//     // Handle Save button
//     document.getElementById('saveButton').addEventListener('click', function() {
//         calculateFields(); // Ensure latest calculations
//         saveEstimation(); // Save the current estimation
//         alert('Estimation saved!'); // Feedback to user
//     });

//     // Handle Download button
//     document.getElementById('downloadButton').addEventListener('click', function() {
//         if (savedEstimations.length === 0 && excelData.rows.length === 0) {
//             alert('No estimations to download!');
//             return;
//         }
//         downloadExcel(); // Download all saved estimations
//     });

//     // Initial call to update operation boxes
//     updateOperationBoxes();
// });

// // Show/hide fields based on type selection
// document.querySelector('#type').addEventListener('change', function() {
//     const type = this.value;
//     const diaField = document.querySelector('label[for="dia"]');
//     const lengthField = document.querySelector('label[for="length"]');
//     const widthField = document.querySelector('label[for="width"]');
//     const thicknessField = document.querySelector('label[for="thickness"]');
//     const rmwstrField = document.querySelector('label[for="rmw_str"]');

//     diaField.classList.add('hidden');
//     lengthField.classList.add('hidden');
//     widthField.classList.add('hidden');
//     thicknessField.classList.add('hidden');
//     rmwstrField.classList.add('hidden');

//     if (type === 'Cyl') {
//         diaField.classList.remove('hidden');
//         lengthField.classList.remove('hidden');
//     } else if (type === 'Pri') {
//         lengthField.classList.remove('hidden');
//         widthField.classList.remove('hidden');
//         thicknessField.classList.remove('hidden');
//     } else if (type === 'Str') {
//         rmwstrField.classList.remove('hidden');
//     }
//     calculateFields();
// });

// // Show/hide fields based on operation selection
// document.querySelector('#operation').addEventListener('change', function() {
//     const operations = Array.from(this.selectedOptions).map(option => option.value).filter(op => op !== '');
//     updateOperationBoxes();
//     updateOperationFields(operations);
//     calculateFields();
// });

// // Function to update operation boxes
// function updateOperationBoxes() {
//     const operationSelect = document.querySelector('#operation');
//     const selectedOperations = Array.from(operationSelect.selectedOptions)
//         .map(option => option.value)
//         .filter(op => op !== '');
//     const container = document.querySelector('#operation-box-container');
//     container.innerHTML = ''; // Clear existing boxes

//     selectedOperations.forEach(operation => {
//         const box = document.createElement('div');
//         box.className = 'operation-box';
//         box.textContent = operation;
//         container.appendChild(box);
//     });
// }

// // Function to update fields based on selected operations
// function updateOperationFields(operations) {
//     const fmField = document.querySelector('label:has(input[name="fm"])');
//     const fmSideQField = document.querySelector('label:has(#fm_side)');
//     const fmSideField = document.querySelector('label:has(input[name="fm_side_cost"])');
//     const fmLField = document.querySelector('label:has(input[name="fm_l"])');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost', 
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14', 
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26', 
//         'hole_m30', 'hole_m36', 'tap_hole_cost', 'c_bore_m3_m5', 'c_bore_m6_m10', 
//         'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost', 'bsp_tap_1_8_1_4', 
//         'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost', 
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling', 
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
//     const grindingFields = ['sg', 'sgl'];
//     const heatTreatmentFields = ['ht_required', 'ht'];
//     const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
//     const vmcFields = ['vmc'];
//     const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
//     const cgFields = ['cg'];
//     const turningFields = ['turning'];
//     const cncTurningFields = ['cnc_turning'];
//     const jgFields = ['jg'];
//     const sparkingFields = ['sparking'];

//     // Hide all operation-related fields initially
//     fmField.classList.add('hidden');
//     fmSideQField.classList.add('hidden');
//     fmSideField.classList.add('hidden');
//     fmLField.classList.add('hidden');
//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     heatTreatmentFields.forEach(name => {
//         const field = name === 'ht_required' ? 
//             document.querySelector(`label:has(#${name})`) : 
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     coatingFields.forEach(name => {
//         const field = name === 'coating_type' ? 
//             document.querySelector(`label:has(#${name})`) : 
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));

//     // Show fields based on selected operations
//     operations.forEach(operation => {
//         if (operation === 'Milling') {
//             fmField.classList.remove('hidden');
//             fmSideQField.classList.remove('hidden');
//             fmSideField.classList.remove('hidden');
//             fmLField.classList.remove('hidden');
//         }
//         if (operation === 'Drilling') {
//             holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Grinding') {
//             grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Heat Treatment') {
//             heatTreatmentFields.forEach(name => {
//                 const field = name === 'ht_required' ? 
//                     document.querySelector(`label:has(#${name})`) : 
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//         }
//         if (operation === 'Coating') {
//             coatingFields.forEach(name => {
//                 const field = name === 'coating_type' ? 
//                     document.querySelector(`label:has(#${name})`) : 
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//             updateCoatingFields();
//         }
//         if (operation === 'VMC') {
//             vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Wire Cut') {
//             wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CG') {
//             cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Turning') {
//             turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CNC Turning') {
//             cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'JG') {
//             jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Sparking') {
//             sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//     });
// }

// // Show/hide coating-specific fields based on coating_type selection
// document.querySelector('#coating_type').addEventListener('change', function() {
//     updateCoatingFields();
//     calculateFields();
// });

// // Function to handle coating field visibility
// function updateCoatingFields() {
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value);
//     const coatingType = document.querySelector('#coating_type').value;
//     const blackeningField = document.querySelector('label:has(input[name="blackening"])');
//     const enpField = document.querySelector('label:has(input[name="enp"])');
//     const flashChromeField = document.querySelector('label:has(input[name="flash_chrome"])');
//     const pcField = document.querySelector('label:has(input[name="pc"])');
//     const zincBlueField = document.querySelector('label:has(input[name="zinc_blue"])');

//     blackeningField.classList.add('hidden');
//     enpField.classList.add('hidden');
//     flashChromeField.classList.add('hidden');
//     pcField.classList.add('hidden');
//     zincBlueField.classList.add('hidden');

//     if (operations.includes('Coating')) {
//         if (coatingType === 'Blackening') blackeningField.classList.remove('hidden');
//         if (coatingType === 'ENP') enpField.classList.remove('hidden');
//         if (coatingType === 'Flash Chrome') flashChromeField.classList.remove('hidden');
//         if (coatingType === 'PC') pcField.classList.remove('hidden');
//         if (coatingType === 'Zinc Blue') zincBlueField.classList.remove('hidden');
//     }
// }

// // Auto-calculate fields when inputs change
// const inputs = document.querySelectorAll(
//     'input[name="dia"], input[name="length"], input[name="width"], input[name="thickness"], input[name="rmw_str"], ' +
//     '#type, #material, #operation, #fm_side, ' +
//     'input[name="hole_4_8"], input[name="hole_9_13"], input[name="hole_15_22"], ' +
//     'input[name="hole_m4"], input[name="hole_m5"], input[name="hole_m6"], input[name="hole_m8"], ' +
//     'input[name="hole_m10"], input[name="hole_m12"], input[name="hole_m14"], input[name="hole_m16"], ' +
//     'input[name="hole_m18"], input[name="hole_m20"], input[name="hole_m22"], input[name="hole_m24"], ' +
//     'input[name="hole_m25"], input[name="hole_m26"], input[name="hole_m30"], input[name="hole_m36"], ' +
//     'input[name="c_bore_m3_m5"], input[name="c_bore_m6_m10"], input[name="c_bore_m12"], ' +
//     'input[name="c_bore_m14"], input[name="c_bore_m16"], ' +
//     'input[name="bsp_tap_1_8_1_4"], input[name="bsp_tap_1_2_3_8"], input[name="bsp_tap_1_inch"], ' +
//     'input[name="bsp_tap_1_5_2_inch"], input[name="gd_total_hole_length"], ' +
//     'input[name="gd_total_hole_length_dro_radial_drilling"], ' +
//     'input[name="4_5_h7"], input[name="6_8_h7"], input[name="10_14_h7"], ' +
//     'input[name="15_18_h7"], input[name="20_25_h7"], input[name="25_30_h7"], ' +
//     'input[name="sg"], input[name="sgl"], #ht_required, input[name="ht"], ' +
//     'input[name="fwcam"], #coating_type, input[name="blackening"], ' +
//     'input[name="enp"], input[name="flash_chrome"], input[name="pc"], input[name="zinc_blue"], ' +
//     'input[name="vmc"], input[name="turning"], input[name="cg"], input[name="wire_cut_sp"], ' +
//     'input[name="cnc_turning"], input[name="jg"], input[name="sparking"], input[name="fm"], ' +
//     'input[name="profit_percent"]'
// );
// inputs.forEach(input => input.addEventListener('change', calculateFields));

// function calculateFields() {
//     const type = document.querySelector('#type').value;
//     const material = document.querySelector('#material').value;
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).filter(op => op !== '');
//     const fmSide = document.querySelector('#fm_side').value === "True";
//     const htRequired = document.querySelector('#ht_required').value === "True";
//     const coatingType = document.querySelector('#coating_type').value;
//     const dia = parseFloat(document.querySelector('input[name="dia"]').value) || 0;
//     const length = parseFloat(document.querySelector('input[name="length"]').value) || 0;
//     const width = parseFloat(document.querySelector('input[name="width"]').value) || 0;
//     const thickness = parseFloat(document.querySelector('input[name="thickness"]').value) || 0;
//     const rmwStr = parseFloat(document.querySelector('input[name="rmw_str"]').value) || 0;
//     const fwcam = parseFloat(document.querySelector('input[name="fwcam"]').value) || 0;
//     const profitPercent = parseFloat(document.querySelector('input[name="profit_percent"]').value) || 0;
//     const density = materials[material]?.Density_gm_cc || 0;
//     const costPerKg = materials[material]?.Cost_per_KG || 0;
//     const fmPerSqmm = materials[material]?.FM_per_sqmm || 0;
//     const fmAfterHtPerSqmm = materials[material]?.FM_AFTER_HT_per_sqmm || 0;
//     const htKg = materials[material]?.HT_KG || 0;
//     let rmwCalc = 0;
//     let rmw = 0;
//     let rmc = 0;
//     let fm = parseFloat(document.querySelector('input[name="fm"]').value) || 0;
//     let fmSideCost = 0;
//     let fmL = parseFloat(document.querySelector('input[name="fm_l"]').value) || 0;
//     let freeHoleCost = 0;
//     let tapHoleCost = 0;
//     let cBoreCost = 0;
//     let bspTapCost = 0;
//     let gdCostGdMachine = 0;
//     let gdCostDroRadialDrilling = 0;
//     let h7HoleCost = 0;
//     let sg = parseFloat(document.querySelector('input[name="sg"]').value) || 0;
//     let sgl = parseFloat(document.querySelector('input[name="sgl"]').value) || 0;
//     let ht = 0;
//     let blackeningCost = 0;
//     let enpCost = 0;
//     let flashChromeCost = 0;
//     let pcCost = 0;
//     let zincBlueCost = 0;
//     let vmc = parseFloat(document.querySelector('input[name="vmc"]').value) || 0;
//     let turning = parseFloat(document.querySelector('input[name="turning"]').value) || 0;
//     let cg = parseFloat(document.querySelector('input[name="cg"]').value) || 0;
//     let wireCutSp = parseFloat(document.querySelector('input[name="wire_cut_sp"]').value) || 0;
//     let cncTurning = parseFloat(document.querySelector('input[name="cnc_turning"]').value) || 0;
//     let engraving = parseFloat(document.querySelector('input[name="engraving"]').value) || 0;

//     // Calculate RMW_Calc
//     if (type === "Pri" && length > 0 && width > 0 && thickness > 0) {
//         rmwCalc = ((length * width * thickness / 1000) * density) / 1000;
//     } else if (type === "Cyl" && dia > 0 && length > 0) {
//         rmwCalc = ((3.14159 * (dia * dia) * length / 4 / 1000) * density) / 1000;
//     }

//     // Calculate RMW
//     if (type === "Str" && rmwStr > 0) {
//         rmw = rmwStr;
//     } else if (rmwCalc > 0) {
//         rmw = rmwCalc;
//     }

//     // Calculate RMC
//     if (rmw > 0 && costPerKg > 0) {
//         rmc = rmw * costPerKg;
//     }

//     // Calculate FM only when Milling is selected
//     if (operations.includes("Milling") && type === "Pri" && length >= 250 && width >= 250) {
//         const fmRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fm = length * width * fmRate;
//     }

//     // Calculate FM_Side
//     if (type === "Pri" && fmSide && length > 0 && width > 0 && thickness > 0) {
//         const fmSideRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fmSideCost = 2 * (length + width) * thickness * fmSideRate;
//     }

//     // Calculate Free_hole_cost
//     const hole_4_8 = parseFloat(document.querySelector('input[name="hole_4_8"]').value) || 0;
//     const hole_9_13 = parseFloat(document.querySelector('input[name="hole_9_13"]').value) || 0;
//     const hole_15_22 = parseFloat(document.querySelector('input[name="hole_15_22"]').value) || 0;
//     freeHoleCost = (hole_4_8 * drillingCosts["Hole_4_8"].Cost) +
//                    (hole_9_13 * drillingCosts["Hole_9_13"].Cost) +
//                    (hole_15_22 * drillingCosts["Hole_15_22"].Cost);

//     // Calculate Tap_hole_cost
//     const hole_m4 = parseFloat(document.querySelector('input[name="hole_m4"]').value) || 0;
//     const hole_m5 = parseFloat(document.querySelector('input[name="hole_m5"]').value) || 0;
//     const hole_m6 = parseFloat(document.querySelector('input[name="hole_m6"]').value) || 0;
//     const hole_m8 = parseFloat(document.querySelector('input[name="hole_m8"]').value) || 0;
//     const hole_m10 = parseFloat(document.querySelector('input[name="hole_m10"]').value) || 0;
//     const hole_m12 = parseFloat(document.querySelector('input[name="hole_m12"]').value) || 0;
//     const hole_m14 = parseFloat(document.querySelector('input[name="hole_m14"]').value) || 0;
//     const hole_m16 = parseFloat(document.querySelector('input[name="hole_m16"]').value) || 0;
//     const hole_m18 = parseFloat(document.querySelector('input[name="hole_m18"]').value) || 0;
//     const hole_m20 = parseFloat(document.querySelector('input[name="hole_m20"]').value) || 0;
//     const hole_m22 = parseFloat(document.querySelector('input[name="hole_m22"]').value) || 0;
//     const hole_m24 = parseFloat(document.querySelector('input[name="hole_m24"]').value) || 0;
//     const hole_m25 = parseFloat(document.querySelector('input[name="hole_m25"]').value) || 0;
//     const hole_m26 = parseFloat(document.querySelector('input[name="hole_m26"]').value) || 0;
//     const hole_m30 = parseFloat(document.querySelector('input[name="hole_m30"]').value) || 0;
//     const hole_m36 = parseFloat(document.querySelector('input[name="hole_m36"]').value) || 0;
//     tapHoleCost = (hole_m4 * drillingCosts["Hole_M4"].Cost) +
//                   (hole_m5 * drillingCosts["Hole_M5"].Cost) +
//                   (hole_m6 * drillingCosts["Hole_M6"].Cost) +
//                   (hole_m8 * drillingCosts["Hole_M8"].Cost) +
//                   (hole_m10 * drillingCosts["Hole_M10"].Cost) +
//                   (hole_m12 * drillingCosts["Hole_M12"].Cost) +
//                   (hole_m14 * drillingCosts["Hole_M14"].Cost) +
//                   (hole_m16 * drillingCosts["Hole_M16"].Cost) +
//                   (hole_m18 * drillingCosts["Hole_M18"].Cost) +
//                   (hole_m20 * drillingCosts["Hole_M20"].Cost) +
//                   (hole_m22 * drillingCosts["Hole_M22"].Cost) +
//                   (hole_m24 * drillingCosts["Hole_M24"].Cost) +
//                   (hole_m25 * drillingCosts["Hole_M25"].Cost) +
//                   (hole_m26 * drillingCosts["Hole_M26"].Cost) +
//                   (hole_m30 * drillingCosts["Hole_M30"].Cost) +
//                   (hole_m36 * drillingCosts["Hole_M36"].Cost);

//     // Calculate C_Bore_Cost
//     const c_bore_m3_m5 = parseFloat(document.querySelector('input[name="c_bore_m3_m5"]').value) || 0;
//     const c_bore_m6_m10 = parseFloat(document.querySelector('input[name="c_bore_m6_m10"]').value) || 0;
//     const c_bore_m12 = parseFloat(document.querySelector('input[name="c_bore_m12"]').value) || 0;
//     const c_bore_m14 = parseFloat(document.querySelector('input[name="c_bore_m14"]').value) || 0;
//     const c_bore_m16 = parseFloat(document.querySelector('input[name="c_bore_m16"]').value) || 0;
//     cBoreCost = (c_bore_m3_m5 * drillingCosts["C_bore_M3_M5"].Cost) +
//                 (c_bore_m6_m10 * drillingCosts["C_bore_M6_M10"].Cost) +
//                 (c_bore_m12 * drillingCosts["C_bore_M12"].Cost) +
//                 (c_bore_m14 * drillingCosts["C_bore_M14"].Cost) +
//                 (c_bore_m16 * drillingCosts["C_bore_M16"].Cost);

//     // Calculate BSP_TAP_COST
//     const bsp_tap_1_8_1_4 = parseFloat(document.querySelector('input[name="bsp_tap_1_8_1_4"]').value) || 0;
//     const bsp_tap_1_2_3_8 = parseFloat(document.querySelector('input[name="bsp_tap_1_2_3_8"]').value) || 0;
//     const bsp_tap_1_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_inch"]').value) || 0;
//     const bsp_tap_1_5_2_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_5_2_inch"]').value) || 0;
//     bspTapCost = (bsp_tap_1_8_1_4 * drillingCosts["BSP_TAP_1/8_1/4"].Cost) +
//                  (bsp_tap_1_2_3_8 * drillingCosts["BSP_TAP_1/2_3/8"].Cost) +
//                  (bsp_tap_1_inch * drillingCosts["BSP_TAP_1_inch"].Cost) +
//                  (bsp_tap_1_5_2_inch * drillingCosts["BSP_TAP_1.5_2_inch"].Cost);

//     // Calculate GD_COST_GD_MACHINE
//     const gd_total_hole_length = parseFloat(document.querySelector('input[name="gd_total_hole_length"]').value) || 0;
//     gdCostGdMachine = gd_total_hole_length * drillingCosts["GD_TOTAL_HOLE_LENGTH"].Cost;

//     // Calculate GD_COST_DRO_RADIAL DRILLING
//     const gd_total_hole_length_dro_radial_drilling = parseFloat(document.querySelector('input[name="gd_total_hole_length_dro_radial_drilling"]').value) || 0;
//     gdCostDroRadialDrilling = gd_total_hole_length_dro_radial_drilling * drillingCosts["GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING"].Cost;

//     // Calculate H7_HOLE_COST
//     const h7_4_5 = parseFloat(document.querySelector('input[name="4_5_h7"]').value) || 0;
//     const h7_6_8 = parseFloat(document.querySelector('input[name="6_8_h7"]').value) || 0;
//     const h7_10_14 = parseFloat(document.querySelector('input[name="10_14_h7"]').value) || 0;
//     const h7_15_18 = parseFloat(document.querySelector('input[name="15_18_h7"]').value) || 0;
//     const h7_20_25 = parseFloat(document.querySelector('input[name="20_25_h7"]').value) || 0;
//     const h7_25_30 = parseFloat(document.querySelector('input[name="25_30_h7"]').value) || 0;
//     h7HoleCost = (h7_4_5 * drillingCosts["4_5_H7"].Cost) +
//                  (h7_6_8 * drillingCosts["6_8_H7"].Cost) +
//                  (h7_10_14 * drillingCosts["10_14_H7"].Cost) +
//                  (h7_15_18 * drillingCosts["15_18_H7"].Cost) +
//                  (h7_20_25 * drillingCosts["20_25_H7"].Cost) +
//                  (h7_25_30 * drillingCosts["25_30_H7"].Cost);

//     // Calculate SG only when Grinding is selected
//     if (operations.includes("Grinding") && type === "Pri" && length >= 250 && width >= 250) {
//         sg = length * width * fmPerSqmm;
//     }

//     // Calculate HT
//     if (operations.includes("Heat Treatment") && htRequired) {
//         ht = rmw * htKg;
//     }

//     // Calculate Coating Costs
//     if (operations.includes("Coating") && length > 0 && width > 0 && coatingType) {
//         const areaCm2 = (length / 10) * (width / 10);
//         blackeningCost = coatingType === "Blackening" ? fwcam * coatingCosts["Blackening"].Cost : 0;
//         enpCost = coatingType === "ENP" ? fwcam * coatingCosts["ENP"].Cost : 0;
//         flashChromeCost = coatingType === "Flash Chrome" ? areaCm2 * coatingCosts["Flash Chrome"].Cost : 0;
//         pcCost = coatingType === "PC" ? fwcam * coatingCosts["PC"].Cost : 0;
//         zincBlueCost = coatingType === "Zinc Blue" ? fwcam * coatingCosts["Zinc Blue"].Cost : 0;
//     }

//     // Calculate Total
//     const coatingSum = blackeningCost + enpCost + flashChromeCost + pcCost + zincBlueCost;
//     const total = (
//         engraving + sgl + h7HoleCost + ht + gdCostDroRadialDrilling + 
//         gdCostGdMachine + bspTapCost + cBoreCost + tapHoleCost + freeHoleCost + 
//         fmL + fmSideCost + fm + rmc + vmc + turning + cg + wireCutSp + cncTurning + 
//         coatingSum
//     );

//     // Calculate With Profit
//     const withProfit = total * (1 + (profitPercent / 100));

//     // Update fields
//     const rmwCalcField = document.querySelector('input[name="rmw_calc"]');
//     const rmwField = document.querySelector('input[name="rmw"]');
//     const rmcField = document.querySelector('input[name="rmc"]');
//     const fmField = document.querySelector('input[name="fm"]');
//     const fmSideCostField = document.querySelector('input[name="fm_side_cost"]');
//     const fmLField = document.querySelector('input[name="fm_l"]');
//     const freeHoleCostField = document.querySelector('input[name="free_hole_cost"]');
//     const tapHoleCostField = document.querySelector('input[name="tap_hole_cost"]');
//     const cBoreCostField = document.querySelector('input[name="c_bore_cost"]');
//     const bspTapCostField = document.querySelector('input[name="bsp_tap_cost"]');
//     const gdCostGdMachineField = document.querySelector('input[name="gd_cost_gd_machine"]');
//     const gdCostDroRadialDrillingField = document.querySelector('input[name="gd_cost_dro_radial_drilling"]');
//     const h7HoleCostField = document.querySelector('input[name="h7_hole_cost"]');
//     const sgField = document.querySelector('input[name="sg"]');
//     const sglField = document.querySelector('input[name="sgl"]');
//     const htField = document.querySelector('input[name="ht"]');
//     const blackeningField = document.querySelector('input[name="blackening"]');
//     const enpField = document.querySelector('input[name="enp"]');
//     const flashChromeField = document.querySelector('input[name="flash_chrome"]');
//     const pcField = document.querySelector('input[name="pc"]');
//     const zincBlueField = document.querySelector('input[name="zinc_blue"]');
//     const vmcField = document.querySelector('input[name="vmc"]');
//     const turningField = document.querySelector('input[name="turning"]');
//     const cgField = document.querySelector('input[name="cg"]');
//     const wireCutSpField = document.querySelector('input[name="wire_cut_sp"]');
//     const cncTurningField = document.querySelector('input[name="cnc_turning"]');
//     const totalField = document.querySelector('input[name="total"]');
//     const withProfitField = document.querySelector('input[name="with_profit"]');

//     rmwCalcField.value = rmwCalc > 0 ? rmwCalc.toFixed(2) : '';
//     rmwField.value = rmw > 0 ? rmw.toFixed(2) : '';
//     rmcField.value = rmc > 0 ? rmc.toFixed(2) : '';
//     fmField.value = fm > 0 ? fm.toFixed(2) : fmField.value;
//     fmSideCostField.value = fmSideCost > 0 ? fmSideCost.toFixed(2) : '';
//     fmLField.value = fmL > 0 ? fmL.toFixed(2) : fmLField.value;
//     freeHoleCostField.value = freeHoleCost > 0 ? freeHoleCost.toFixed(2) : '';
//     tapHoleCostField.value = tapHoleCost > 0 ? tapHoleCost.toFixed(2) : '';
//     cBoreCostField.value = cBoreCost > 0 ? cBoreCost.toFixed(2) : '';
//     bspTapCostField.value = bspTapCost > 0 ? bspTapCost.toFixed(2) : '';
//     gdCostGdMachineField.value = gdCostGdMachine > 0 ? gdCostGdMachine.toFixed(2) : '';
//     gdCostDroRadialDrillingField.value = gdCostDroRadialDrilling > 0 ? gdCostDroRadialDrilling.toFixed(2) : '';
//     h7HoleCostField.value = h7HoleCost > 0 ? h7HoleCost.toFixed(2) : '';
//     sgField.value = sg > 0 ? sg.toFixed(2) : sgField.value;
//     sglField.value = sgl > 0 ? sgl.toFixed(2) : sglField.value;
//     htField.value = ht > 0 ? ht.toFixed(2) : '';
//     blackeningField.value = blackeningCost > 0 ? blackeningCost.toFixed(2) : '';
//     enpField.value = enpCost > 0 ? enpCost.toFixed(2) : '';
//     flashChromeField.value = flashChromeCost > 0 ? flashChromeCost.toFixed(2) : '';
//     pcField.value = pcCost > 0 ? pcCost.toFixed(2) : '';
//     zincBlueField.value = zincBlueCost > 0 ? zincBlueCost.toFixed(2) : '';
//     vmcField.value = vmc > 0 ? vmc.toFixed(2) : vmcField.value;
//     turningField.value = turning > 0 ? turning.toFixed(2) : turningField.value;
//     cgField.value = cg > 0 ? cg.toFixed(2) : cgField.value;
//     wireCutSpField.value = wireCutSp > 0 ? wireCutSp.toFixed(2) : wireCutSpField.value;
//     cncTurningField.value = cncTurning > 0 ? cncTurning.toFixed(2) : cncTurningField.value;
//     totalField.value = total > 0 ? total.toFixed(2) : '';
//     withProfitField.value = withProfit > 0 ? withProfit.toFixed(2) : '';
// }

// // Function to save the current estimation
// function saveEstimation() {
//     const form = document.getElementById('costForm');
//     const formData = new FormData(form);
//     const estimationData = {};

//     // Collect all form field values
//     formData.forEach((value, key) => {
//         if (key === 'operation') {
//             // Handle multiple selections for operation
//             if (!estimationData[key]) estimationData[key] = [];
//             estimationData[key].push(value);
//         } else {
//             estimationData[key] = value;
//         }
//     });

//     // Convert operation array to comma-separated string
//     if (estimationData['operation']) {
//         estimationData['operation'] = estimationData['operation'].join(', ');
//     }

//     // Add the estimation to the savedEstimations array
//     savedEstimations.push(estimationData);
// }

// // Function to download all saved estimations
// function downloadExcel() {
//     // Define all possible headers (form field names)
//     const allHeaders = Array.from(document.getElementById('costForm').elements)
//         .filter(el => el.name && el.name !== 'operation') // Exclude empty names and handle operation separately
//         .map(el => el.name)
//         .concat(['operation'])
//         .filter((v, i, a) => a.indexOf(v) === i); // Remove duplicates

//     // Use uploaded headers if available, otherwise use form field names
//     const headers = excelData.headers.length > 0 ? excelData.headers : allHeaders;

//     // Map saved estimations to rows, ensuring they match header order
//     const estimationRows = savedEstimations.map(estimation => 
//         headers.map(header => estimation[header] || '')
//     );

//     // Combine uploaded data (if any) with saved estimations
//     const allRows = [...excelData.rows, ...estimationRows];

//     // Create worksheet data: headers + rows
//     const wsData = [headers, ...allRows];

//     // Create worksheet
//     const ws = XLSX.utils.aoa_to_sheet(wsData);

//     // Create workbook and add worksheet
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Cost Estimation');

//     // Download the file
//     XLSX.writeFile(wb, uploadedFileName);
// }

// // Initially hide fields on page load
// const holeFields = [
//     'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost', 
//     'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14', 
//     'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26', 
//     'hole_m30', 'hole_m36', 'tap_hole_cost', 'c_bore_m3_m5', 'c_bore_m6_m10', 
//     'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost', 'bsp_tap_1_8_1_4', 
//     'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost', 
//     'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling', 
//     'gd_cost_dro_radial_drilling', 'spot_face'
// ];
// const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
// const fmFields = ['fm', 'fm_side', 'fm_side_cost', 'fm_l'];
// const grindingFields = ['sg', 'sgl'];
// const heatTreatmentFields = ['ht_required', 'ht'];
// const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
// const vmcFields = ['vmc'];
// const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
// const cgFields = ['cg'];
// const turningFields = ['turning'];
// const cncTurningFields = ['cnc_turning'];
// const jgFields = ['jg'];
// const sparkingFields = ['sparking'];

// holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// fmFields.forEach(name => {
//     const field = name === 'fm_side' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// heatTreatmentFields.forEach(name => {
//     const field = name === 'ht_required' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// coatingFields.forEach(name => {
//     const field = name === 'coating_type' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));





















// // static/script.js
// // Material density and costs
// const materials = {
//     "MS": {"Density_gm_cc": 7.85, "Cost_per_KG": 80.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "C45": {"Density_gm_cc": 7.85, "Cost_per_KG": 95.0, "FM_per_sqmm": 0.005, "HT_KG": 25.0, "FM_AFTER_HT_per_sqmm": 0.007},
//     "EN24": {"Density_gm_cc": 7.85, "Cost_per_KG": 125.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN354": {"Density_gm_cc": 7.85, "Cost_per_KG": 145.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "20MnCr5": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN47": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN31": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN19": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS410": {"Density_gm_cc": 7.85, "Cost_per_KG": 220.0, "FM_per_sqmm": 0.008, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-7075": {"Density_gm_cc": 2.73, "Cost_per_KG": 730.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "D2": {"Density_gm_cc": 7.85, "Cost_per_KG": 350.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "OHNS": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "DELRIN": {"Density_gm_cc": 1.42, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "NYLON": {"Density_gm_cc": 1.14, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "HYLEM": {"Density_gm_cc": 1.95, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "BRASS": {"Density_gm_cc": 8.5, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "COPPER": {"Density_gm_cc": 8.93, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CARBIDE": {"Density_gm_cc": 15.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CASTING": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "WELDMENTS": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-6061": {"Density_gm_cc": 2.73, "Cost_per_KG": 455.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS304": {"Density_gm_cc": 7.85, "Cost_per_KG": 245.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0}
// };

// // Drilling costs
// const drillingCosts = {
//     "Hole_4_8": {"Cost": 25},
//     "Hole_9_13": {"Cost": 30},
//     "Hole_15_22": {"Cost": 35},
//     "Hole_M4": {"Cost": 20},
//     "Hole_M5": {"Cost": 25},
//     "Hole_M6": {"Cost": 30},
//     "Hole_M8": {"Cost": 40},
//     "Hole_M10": {"Cost": 50},
//     "Hole_M12": {"Cost": 60},
//     "Hole_M14": {"Cost": 60},
//     "Hole_M16": {"Cost": 70},
//     "Hole_M18": {"Cost": 70},
//     "Hole_M20": {"Cost": 120},
//     "Hole_M22": {"Cost": 120},
//     "Hole_M24": {"Cost": 120},
//     "Hole_M25": {"Cost": 200},
//     "Hole_M26": {"Cost": 200},
//     "Hole_M30": {"Cost": 250},
//     "Hole_M36": {"Cost": 300},
//     "C_bore_M3_M5": {"Cost": 30},
//     "C_bore_M6_M10": {"Cost": 40},
//     "C_bore_M12": {"Cost": 50},
//     "C_bore_M14": {"Cost": 60},
//     "C_bore_M16": {"Cost": 80},
//     "BSP_TAP_1/8_1/4": {"Cost": 45},
//     "BSP_TAP_1/2_3/8": {"Cost": 60},
//     "BSP_TAP_1_inch": {"Cost": 120},
//     "BSP_TAP_1.5_2_inch": {"Cost": 200},
//     "GD_TOTAL_HOLE_LENGTH": {"Cost": 3},
//     "GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING": {"Cost": 2},
//     "4_5_H7": {"Cost": 80},
//     "6_8_H7": {"Cost": 100},
//     "10_14_H7": {"Cost": 120},
//     "15_18_H7": {"Cost": 160},
//     "20_25_H7": {"Cost": 220},
//     "25_30_H7": {"Cost": 280},
//     "Spot_face": {"Cost": 30}
// };

// // Coating costs
// const coatingCosts = {
//     "Blackening": {"Cost": 20},
//     "ENP": {"Cost": 180},
//     "Flash Chrome": {"Cost": 0.6},
//     "PC": {"Cost": 20},
//     "Zinc Blue": {"Cost": 30}
// };

// // Store Excel data in memory
// let excelData = { headers: [], rows: [] };
// let uploadedFileName = 'cost_estimation.xlsx'; // Default filename if no file uploaded
// let savedEstimations = []; // Array to store multiple estimations

// // Initialize Choices.js and handle Excel upload
// document.addEventListener('DOMContentLoaded', () => {
//     const materialSelect = new Choices('#material', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Material',
//     });

//     const typeSelect = new Choices('#type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Type',
//     });

//     const operationSelect = new Choices('#operation', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Operations',
//         removeItemButton: true // Enable remove button for multiple selections
//     });

//     const fmSideSelect = new Choices('#fm_side', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select FM Side',
//     });

//     const htRequiredSelect = new Choices('#ht_required', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select HT Required',
//     });

//     const coatingTypeSelect = new Choices('#coating_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Coating Type',
//     });

//     // Populate coating_type dynamically
//     if (coatingTypeSelect.getValue(true) === '') {
//         const coatingOptions = Object.keys(coatingCosts).map(coating => ({
//             value: coating,
//             label: coating,
//         }));
//         coatingTypeSelect.setChoices(coatingOptions, 'value', 'label', true);
//     }

//     // Make coating cost fields readonly
//     ['blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'].forEach(name => {
//         document.querySelector(`input[name="${name}"]`).setAttribute('readonly', true);
//     });

//     // Handle Excel file upload
//     document.getElementById('excelUpload').addEventListener('change', function(e) {
//         const file = e.target.files[0];
//         if (file) {
//             uploadedFileName = file.name; // Use uploaded file's name for download
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 const data = new Uint8Array(e.target.result);
//                 const workbook = XLSX.read(data, { type: 'array' });
//                 const sheetName = workbook.SheetNames[0];
//                 const worksheet = workbook.Sheets[sheetName];
//                 const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

//                 if (jsonData.length > 0) {
//                     excelData.headers = jsonData[0]; // First row as headers
//                     excelData.rows = jsonData.slice(1); // Remaining rows as data
//                 } else {
//                     excelData.headers = []; // Blank sheet
//                     excelData.rows = [];
//                 }
//             };
//             reader.readAsArrayBuffer(file);
//         }
//     });

//     // Handle form submission (Calculate button)
//     document.getElementById('costForm').addEventListener('submit', function(e) {
//         e.preventDefault(); // Prevent default form submission
//         calculateFields(); // Perform calculations
//     });

//     // Handle Save button
//     document.getElementById('saveButton').addEventListener('click', function() {
//         calculateFields(); // Ensure latest calculations
//         saveEstimation(); // Save the current estimation
//         alert('Estimation saved!'); // Feedback to user
//     });

//     // Handle Download button
//     document.getElementById('downloadButton').addEventListener('click', function() {
//         if (savedEstimations.length === 0 && excelData.rows.length === 0) {
//             alert('No estimations to download!');
//             return;
//         }
//         downloadExcel(); // Download all saved estimations
//     });

//     // Initial call to update operation boxes
//     updateOperationBoxes();
// });

// // Show/hide fields based on type selection
// document.querySelector('#type').addEventListener('change', function() {
//     const type = this.value;
//     const diaField = document.querySelector('label[for="dia"]');
//     const lengthField = document.querySelector('label[for="length"]');
//     const widthField = document.querySelector('label[for="width"]');
//     const thicknessField = document.querySelector('label[for="thickness"]');
//     const rmwstrField = document.querySelector('label[for="rmw_str"]');

//     diaField.classList.add('hidden');
//     lengthField.classList.add('hidden');
//     widthField.classList.add('hidden');
//     thicknessField.classList.add('hidden');
//     rmwstrField.classList.add('hidden');

//     if (type === 'Cyl') {
//         diaField.classList.remove('hidden');
//         lengthField.classList.remove('hidden');
//     } else if (type === 'Pri') {
//         lengthField.classList.remove('hidden');
//         widthField.classList.remove('hidden');
//         thicknessField.classList.remove('hidden');
//     } else if (type === 'Str') {
//         rmwstrField.classList.remove('hidden');
//     }
//     calculateFields();
// });

// // Show/hide fields based on operation selection
// document.querySelector('#operation').addEventListener('change', function() {
//     const operations = Array.from(this.selectedOptions).map(option => option.value).filter(op => op !== '');
//     updateOperationBoxes();
//     updateOperationFields(operations);
//     calculateFields();
// });

// // Function to update operation boxes
// function updateOperationBoxes() {
//     const operationSelect = document.querySelector('#operation');
//     const selectedOperations = Array.from(operationSelect.selectedOptions)
//         .map(option => option.value)
//         .filter(op => op !== '');
//     const container = document.querySelector('#operation-box-container');
//     container.innerHTML = ''; // Clear existing boxes

//     selectedOperations.forEach(operation => {
//         const box = document.createElement('div');
//         box.className = 'operation-box';
//         box.textContent = operation;
//         container.appendChild(box);
//     });
// }

// // Function to update fields based on selected operations
// function updateOperationFields(operations) {
//     const fmField = document.querySelector('label:has(input[name="fm"])');
//     const fmSideQField = document.querySelector('label:has(#fm_side)');
//     const fmSideField = document.querySelector('label:has(input[name="fm_side_cost"])');
//     const fmLField = document.querySelector('label:has(input[name="fm_l"])');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost', 
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14', 
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26', 
//         'hole_m30', 'hole_m36', 'tap_hole_cost', 'c_bore_m3_m5', 'c_bore_m6_m10', 
//         'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost', 'bsp_tap_1_8_1_4', 
//         'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost', 
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling', 
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
//     const grindingFields = ['sg', 'sgl'];
//     const heatTreatmentFields = ['ht_required', 'ht'];
//     const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
//     const vmcFields = ['vmc'];
//     const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
//     const cgFields = ['cg'];
//     const turningFields = ['turning'];
//     const cncTurningFields = ['cnc_turning'];
//     const jgFields = ['jg'];
//     const sparkingFields = ['sparking'];

//     // Hide all operation-related fields initially
//     fmField.classList.add('hidden');
//     fmSideQField.classList.add('hidden');
//     fmSideField.classList.add('hidden');
//     fmLField.classList.add('hidden');
//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     heatTreatmentFields.forEach(name => {
//         const field = name === 'ht_required' ? 
//             document.querySelector(`label:has(#${name})`) : 
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     coatingFields.forEach(name => {
//         const field = name === 'coating_type' ? 
//             document.querySelector(`label:has(#${name})`) : 
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));

//     // Show fields based on selected operations
//     operations.forEach(operation => {
//         if (operation === 'Milling') {
//             fmField.classList.remove('hidden');
//             fmSideQField.classList.remove('hidden');
//             fmSideField.classList.remove('hidden');
//             fmLField.classList.remove('hidden');
//         }
//         if (operation === 'Drilling') {
//             holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Grinding') {
//             grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Heat Treatment') {
//             heatTreatmentFields.forEach(name => {
//                 const field = name === 'ht_required' ? 
//                     document.querySelector(`label:has(#${name})`) : 
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//         }
//         if (operation === 'Coating') {
//             coatingFields.forEach(name => {
//                 const field = name === 'coating_type' ? 
//                     document.querySelector(`label:has(#${name})`) : 
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//             updateCoatingFields();
//         }
//         if (operation === 'VMC') {
//             vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Wire Cut') {
//             wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CG') {
//             cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Turning') {
//             turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CNC Turning') {
//             cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'JG') {
//             jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Sparking') {
//             sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//     });
// }

// // Show/hide coating-specific fields based on coating_type selection
// document.querySelector('#coating_type').addEventListener('change', function() {
//     updateCoatingFields();
//     calculateFields();
// });

// // Function to handle coating field visibility
// function updateCoatingFields() {
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value);
//     const coatingType = document.querySelector('#coating_type').value;
//     const blackeningField = document.querySelector('label:has(input[name="blackening"])');
//     const enpField = document.querySelector('label:has(input[name="enp"])');
//     const flashChromeField = document.querySelector('label:has(input[name="flash_chrome"])');
//     const pcField = document.querySelector('label:has(input[name="pc"])');
//     const zincBlueField = document.querySelector('label:has(input[name="zinc_blue"])');

//     blackeningField.classList.add('hidden');
//     enpField.classList.add('hidden');
//     flashChromeField.classList.add('hidden');
//     pcField.classList.add('hidden');
//     zincBlueField.classList.add('hidden');

//     if (operations.includes('Coating')) {
//         if (coatingType === 'Blackening') blackeningField.classList.remove('hidden');
//         if (coatingType === 'ENP') enpField.classList.remove('hidden');
//         if (coatingType === 'Flash Chrome') flashChromeField.classList.remove('hidden');
//         if (coatingType === 'PC') pcField.classList.remove('hidden');
//         if (coatingType === 'Zinc Blue') zincBlueField.classList.remove('hidden');
//     }
// }

// // Auto-calculate fields when inputs change
// const inputs = document.querySelectorAll(
//     'input[name="dia"], input[name="length"], input[name="width"], input[name="thickness"], input[name="rmw_str"], ' +
//     '#type, #material, #operation, #fm_side, ' +
//     'input[name="hole_4_8"], input[name="hole_9_13"], input[name="hole_15_22"], ' +
//     'input[name="hole_m4"], input[name="hole_m5"], input[name="hole_m6"], input[name="hole_m8"], ' +
//     'input[name="hole_m10"], input[name="hole_m12"], input[name="hole_m14"], input[name="hole_m16"], ' +
//     'input[name="hole_m18"], input[name="hole_m20"], input[name="hole_m22"], input[name="hole_m24"], ' +
//     'input[name="hole_m25"], input[name="hole_m26"], input[name="hole_m30"], input[name="hole_m36"], ' +
//     'input[name="c_bore_m3_m5"], input[name="c_bore_m6_m10"], input[name="c_bore_m12"], ' +
//     'input[name="c_bore_m14"], input[name="c_bore_m16"], ' +
//     'input[name="bsp_tap_1_8_1_4"], input[name="bsp_tap_1_2_3_8"], input[name="bsp_tap_1_inch"], ' +
//     'input[name="bsp_tap_1_5_2_inch"], input[name="gd_total_hole_length"], ' +
//     'input[name="gd_total_hole_length_dro_radial_drilling"], ' +
//     'input[name="4_5_h7"], input[name="6_8_h7"], input[name="10_14_h7"], ' +
//     'input[name="15_18_h7"], input[name="20_25_h7"], input[name="25_30_h7"], ' +
//     'input[name="sg"], input[name="sgl"], #ht_required, input[name="ht"], ' +
//     'input[name="fwcam"], #coating_type, input[name="blackening"], ' +
//     'input[name="enp"], input[name="flash_chrome"], input[name="pc"], input[name="zinc_blue"], ' +
//     'input[name="vmc"], input[name="turning"], input[name="cg"], input[name="wire_cut_sp"], ' +
//     'input[name="cnc_turning"], input[name="jg"], input[name="sparking"], input[name="fm"], ' +
//     'input[name="profit_percent"]'
// );
// inputs.forEach(input => input.addEventListener('change', calculateFields));

// function calculateFields() {
//     const type = document.querySelector('#type').value;
//     const material = document.querySelector('#material').value;
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).filter(op => op !== '');
//     const fmSide = document.querySelector('#fm_side').value === "True";
//     const htRequired = document.querySelector('#ht_required').value === "True";
//     const coatingType = document.querySelector('#coating_type').value;
//     const dia = parseFloat(document.querySelector('input[name="dia"]').value) || 0;
//     const length = parseFloat(document.querySelector('input[name="length"]').value) || 0;
//     const width = parseFloat(document.querySelector('input[name="width"]').value) || 0;
//     const thickness = parseFloat(document.querySelector('input[name="thickness"]').value) || 0;
//     const rmwStr = parseFloat(document.querySelector('input[name="rmw_str"]').value) || 0;
//     const fwcam = parseFloat(document.querySelector('input[name="fwcam"]').value) || 0;
//     const profitPercent = parseFloat(document.querySelector('input[name="profit_percent"]').value) || 0;
//     const density = materials[material]?.Density_gm_cc || 0;
//     const costPerKg = materials[material]?.Cost_per_KG || 0;
//     const fmPerSqmm = materials[material]?.FM_per_sqmm || 0;
//     const fmAfterHtPerSqmm = materials[material]?.FM_AFTER_HT_per_sqmm || 0;
//     const htKg = materials[material]?.HT_KG || 0;
//     let rmwCalc = 0;
//     let rmw = 0;
//     let rmc = 0;
//     let fm = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm"]').value) || 0) : 0;
//     let fmSideCost = 0;
//     let fmL = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm_l"]').value) || 0) : 0;
//     let freeHoleCost = 0;
//     let tapHoleCost = 0;
//     let cBoreCost = 0;
//     let bspTapCost = 0;
//     let gdCostGdMachine = 0;
//     let gdCostDroRadialDrilling = 0;
//     let h7HoleCost = 0;
//     let sg = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sg"]').value) || 0) : 0;
//     let sgl = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sgl"]').value) || 0) : 0;
//     let ht = 0;
//     let blackeningCost = 0;
//     let enpCost = 0;
//     let flashChromeCost = 0;
//     let pcCost = 0;
//     let zincBlueCost = 0;
//     let vmc = operations.includes("VMC") ? (parseFloat(document.querySelector('input[name="vmc"]').value) || 0) : 0;
//     let turning = operations.includes("Turning") ? (parseFloat(document.querySelector('input[name="turning"]').value) || 0) : 0;
//     let cg = operations.includes("CG") ? (parseFloat(document.querySelector('input[name="cg"]').value) || 0) : 0;
//     let wireCutSp = operations.includes("Wire Cut") ? (parseFloat(document.querySelector('input[name="wire_cut_sp"]').value) || 0) : 0;
//     let cncTurning = operations.includes("CNC Turning") ? (parseFloat(document.querySelector('input[name="cnc_turning"]').value) || 0) : 0;
//     let jg = operations.includes("JG") ? (parseFloat(document.querySelector('input[name="jg"]').value) || 0) : 0;
//     let sparking = operations.includes("Sparking") ? (parseFloat(document.querySelector('input[name="sparking"]').value) || 0) : 0;
//     let engraving = parseFloat(document.querySelector('input[name="engraving"]').value) || 0;

//     // Calculate RMW_Calc
//     if (type === "Pri" && length > 0 && width > 0 && thickness > 0) {
//         rmwCalc = ((length * width * thickness / 1000) * density) / 1000;
//     } else if (type === "Cyl" && dia > 0 && length > 0) {
//         rmwCalc = ((3.14159 * (dia * dia) * length / 4 / 1000) * density) / 1000;
//     }

//     // Calculate RMW
//     if (type === "Str" && rmwStr > 0) {
//         rmw = rmwStr;
//     } else if (rmwCalc > 0) {
//         rmw = rmwCalc;
//     }

//     // Calculate RMC
//     if (rmw > 0 && costPerKg > 0) {
//         rmc = rmw * costPerKg;
//     }

//     // Calculate FM only when Milling is selected
//     if (operations.includes("Milling") && type === "Pri" && length >= 250 && width >= 250) {
//         const fmRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fm = length * width * fmRate;
//     }

//     // Calculate FM_Side
//     if (operations.includes("Milling") && type === "Pri" && fmSide && length > 0 && width > 0 && thickness > 0) {
//         const fmSideRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fmSideCost = 2 * (length + width) * thickness * fmSideRate;
//     }

//     // Calculate Free_hole_cost
//     if (operations.includes("Drilling")) {
//         const hole_4_8 = parseFloat(document.querySelector('input[name="hole_4_8"]').value) || 0;
//         const hole_9_13 = parseFloat(document.querySelector('input[name="hole_9_13"]').value) || 0;
//         const hole_15_22 = parseFloat(document.querySelector('input[name="hole_15_22"]').value) || 0;
//         freeHoleCost = (hole_4_8 * drillingCosts["Hole_4_8"].Cost) +
//                        (hole_9_13 * drillingCosts["Hole_9_13"].Cost) +
//                        (hole_15_22 * drillingCosts["Hole_15_22"].Cost);
//     }

//     // Calculate Tap_hole_cost
//     if (operations.includes("Drilling")) {
//         const hole_m4 = parseFloat(document.querySelector('input[name="hole_m4"]').value) || 0;
//         const hole_m5 = parseFloat(document.querySelector('input[name="hole_m5"]').value) || 0;
//         const hole_m6 = parseFloat(document.querySelector('input[name="hole_m6"]').value) || 0;
//         const hole_m8 = parseFloat(document.querySelector('input[name="hole_m8"]').value) || 0;
//         const hole_m10 = parseFloat(document.querySelector('input[name="hole_m10"]').value) || 0;
//         const hole_m12 = parseFloat(document.querySelector('input[name="hole_m12"]').value) || 0;
//         const hole_m14 = parseFloat(document.querySelector('input[name="hole_m14"]').value) || 0;
//         const hole_m16 = parseFloat(document.querySelector('input[name="hole_m16"]').value) || 0;
//         const hole_m18 = parseFloat(document.querySelector('input[name="hole_m18"]').value) || 0;
//         const hole_m20 = parseFloat(document.querySelector('input[name="hole_m20"]').value) || 0;
//         const hole_m22 = parseFloat(document.querySelector('input[name="hole_m22"]').value) || 0;
//         const hole_m24 = parseFloat(document.querySelector('input[name="hole_m24"]').value) || 0;
//         const hole_m25 = parseFloat(document.querySelector('input[name="hole_m25"]').value) || 0;
//         const hole_m26 = parseFloat(document.querySelector('input[name="hole_m26"]').value) || 0;
//         const hole_m30 = parseFloat(document.querySelector('input[name="hole_m30"]').value) || 0;
//         const hole_m36 = parseFloat(document.querySelector('input[name="hole_m36"]').value) || 0;
//         tapHoleCost = (hole_m4 * drillingCosts["Hole_M4"].Cost) +
//                       (hole_m5 * drillingCosts["Hole_M5"].Cost) +
//                       (hole_m6 * drillingCosts["Hole_M6"].Cost) +
//                       (hole_m8 * drillingCosts["Hole_M8"].Cost) +
//                       (hole_m10 * drillingCosts["Hole_M10"].Cost) +
//                       (hole_m12 * drillingCosts["Hole_M12"].Cost) +
//                       (hole_m14 * drillingCosts["Hole_M14"].Cost) +
//                       (hole_m16 * drillingCosts["Hole_M16"].Cost) +
//                       (hole_m18 * drillingCosts["Hole_M18"].Cost) +
//                       (hole_m20 * drillingCosts["Hole_M20"].Cost) +
//                       (hole_m22 * drillingCosts["Hole_M22"].Cost) +
//                       (hole_m24 * drillingCosts["Hole_M24"].Cost) +
//                       (hole_m25 * drillingCosts["Hole_M25"].Cost) +
//                       (hole_m26 * drillingCosts["Hole_M26"].Cost) +
//                       (hole_m30 * drillingCosts["Hole_M30"].Cost) +
//                       (hole_m36 * drillingCosts["Hole_M36"].Cost);
//     }

//     // Calculate C_Bore_Cost
//     if (operations.includes("Drilling")) {
//         const c_bore_m3_m5 = parseFloat(document.querySelector('input[name="c_bore_m3_m5"]').value) || 0;
//         const c_bore_m6_m10 = parseFloat(document.querySelector('input[name="c_bore_m6_m10"]').value) || 0;
//         const c_bore_m12 = parseFloat(document.querySelector('input[name="c_bore_m12"]').value) || 0;
//         const c_bore_m14 = parseFloat(document.querySelector('input[name="c_bore_m14"]').value) || 0;
//         const c_bore_m16 = parseFloat(document.querySelector('input[name="c_bore_m16"]').value) || 0;
//         cBoreCost = (c_bore_m3_m5 * drillingCosts["C_bore_M3_M5"].Cost) +
//                     (c_bore_m6_m10 * drillingCosts["C_bore_M6_M10"].Cost) +
//                     (c_bore_m12 * drillingCosts["C_bore_M12"].Cost) +
//                     (c_bore_m14 * drillingCosts["C_bore_M14"].Cost) +
//                     (c_bore_m16 * drillingCosts["C_bore_M16"].Cost);
//     }

//     // Calculate BSP_TAP_COST
//     if (operations.includes("Drilling")) {
//         const bsp_tap_1_8_1_4 = parseFloat(document.querySelector('input[name="bsp_tap_1_8_1_4"]').value) || 0;
//         const bsp_tap_1_2_3_8 = parseFloat(document.querySelector('input[name="bsp_tap_1_2_3_8"]').value) || 0;
//         const bsp_tap_1_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_inch"]').value) || 0;
//         const bsp_tap_1_5_2_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_5_2_inch"]').value) || 0;
//         bspTapCost = (bsp_tap_1_8_1_4 * drillingCosts["BSP_TAP_1/8_1/4"].Cost) +
//                      (bsp_tap_1_2_3_8 * drillingCosts["BSP_TAP_1/2_3/8"].Cost) +
//                      (bsp_tap_1_inch * drillingCosts["BSP_TAP_1_inch"].Cost) +
//                      (bsp_tap_1_5_2_inch * drillingCosts["BSP_TAP_1.5_2_inch"].Cost);
//     }

//     // Calculate GD_COST_GD_MACHINE
//     if (operations.includes("Drilling")) {
//         const gd_total_hole_length = parseFloat(document.querySelector('input[name="gd_total_hole_length"]').value) || 0;
//         gdCostGdMachine = gd_total_hole_length * drillingCosts["GD_TOTAL_HOLE_LENGTH"].Cost;
//     }

//     // Calculate GD_COST_DRO_RADIAL DRILLING
//     if (operations.includes("Drilling")) {
//         const gd_total_hole_length_dro_radial_drilling = parseFloat(document.querySelector('input[name="gd_total_hole_length_dro_radial_drilling"]').value) || 0;
//         gdCostDroRadialDrilling = gd_total_hole_length_dro_radial_drilling * drillingCosts["GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING"].Cost;
//     }

//     // Calculate H7_HOLE_COST
//     if (operations.includes("Drilling")) {
//         const h7_4_5 = parseFloat(document.querySelector('input[name="4_5_h7"]').value) || 0;
//         const h7_6_8 = parseFloat(document.querySelector('input[name="6_8_h7"]').value) || 0;
//         const h7_10_14 = parseFloat(document.querySelector('input[name="10_14_h7"]').value) || 0;
//         const h7_15_18 = parseFloat(document.querySelector('input[name="15_18_h7"]').value) || 0;
//         const h7_20_25 = parseFloat(document.querySelector('input[name="20_25_h7"]').value) || 0;
//         const h7_25_30 = parseFloat(document.querySelector('input[name="25_30_h7"]').value) || 0;
//         h7HoleCost = (h7_4_5 * drillingCosts["4_5_H7"].Cost) +
//                      (h7_6_8 * drillingCosts["6_8_H7"].Cost) +
//                      (h7_10_14 * drillingCosts["10_14_H7"].Cost) +
//                      (h7_15_18 * drillingCosts["15_18_H7"].Cost) +
//                      (h7_20_25 * drillingCosts["20_25_H7"].Cost) +
//                      (h7_25_30 * drillingCosts["25_30_H7"].Cost);
//     }

//     // Calculate SG only when Grinding is selected
//     if (operations.includes("Grinding") && type === "Pri" && length >= 250 && width >= 250) {
//         sg = length * width * fmPerSqmm;
//     }

//     // Calculate HT
//     if (operations.includes("Heat Treatment") && htRequired) {
//         ht = rmw * htKg;
//     }

//     // Calculate Coating Costs
//     if (operations.includes("Coating") && length > 0 && width > 0 && coatingType) {
//         const areaCm2 = (length / 10) * (width / 10);
//         blackeningCost = coatingType === "Blackening" ? fwcam * coatingCosts["Blackening"].Cost : 0;
//         enpCost = coatingType === "ENP" ? fwcam * coatingCosts["ENP"].Cost : 0;
//         flashChromeCost = coatingType === "Flash Chrome" ? areaCm2 * coatingCosts["Flash Chrome"].Cost : 0;
//         pcCost = coatingType === "PC" ? fwcam * coatingCosts["PC"].Cost : 0;
//         zincBlueCost = coatingType === "Zinc Blue" ? fwcam * coatingCosts["Zinc Blue"].Cost : 0;
//     }

//     // Calculate Total
//     const coatingSum = blackeningCost + enpCost + flashChromeCost + pcCost + zincBlueCost;
//     const total = (
//         engraving + sgl + h7HoleCost + ht + gdCostDroRadialDrilling + 
//         gdCostGdMachine + bspTapCost + cBoreCost + tapHoleCost + freeHoleCost + 
//         fmL + fmSideCost + fm + rmc + vmc + turning + cg + wireCutSp + cncTurning + 
//         jg + sparking + coatingSum
//     );

//     // Calculate With Profit
//     const withProfit = total * (1 + (profitPercent / 100));

//     // Update fields
//     const rmwCalcField = document.querySelector('input[name="rmw_calc"]');
//     const rmwField = document.querySelector('input[name="rmw"]');
//     const rmcField = document.querySelector('input[name="rmc"]');
//     const fmField = document.querySelector('input[name="fm"]');
//     const fmSideCostField = document.querySelector('input[name="fm_side_cost"]');
//     const fmLField = document.querySelector('input[name="fm_l"]');
//     const freeHoleCostField = document.querySelector('input[name="free_hole_cost"]');
//     const tapHoleCostField = document.querySelector('input[name="tap_hole_cost"]');
//     const cBoreCostField = document.querySelector('input[name="c_bore_cost"]');
//     const bspTapCostField = document.querySelector('input[name="bsp_tap_cost"]');
//     const gdCostGdMachineField = document.querySelector('input[name="gd_cost_gd_machine"]');
//     const gdCostDroRadialDrillingField = document.querySelector('input[name="gd_cost_dro_radial_drilling"]');
//     const h7HoleCostField = document.querySelector('input[name="h7_hole_cost"]');
//     const sgField = document.querySelector('input[name="sg"]');
//     const sglField = document.querySelector('input[name="sgl"]');
//     const htField = document.querySelector('input[name="ht"]');
//     const blackeningField = document.querySelector('input[name="blackening"]');
//     const enpField = document.querySelector('input[name="enp"]');
//     const flashChromeField = document.querySelector('input[name="flash_chrome"]');
//     const pcField = document.querySelector('input[name="pc"]');
//     const zincBlueField = document.querySelector('input[name="zinc_blue"]');
//     const vmcField = document.querySelector('input[name="vmc"]');
//     const turningField = document.querySelector('input[name="turning"]');
//     const cgField = document.querySelector('input[name="cg"]');
//     const wireCutSpField = document.querySelector('input[name="wire_cut_sp"]');
//     const cncTurningField = document.querySelector('input[name="cnc_turning"]');
//     const jgField = document.querySelector('input[name="jg"]');
//     const sparkingField = document.querySelector('input[name="sparking"]');
//     const totalField = document.querySelector('input[name="total"]');
//     const withProfitField = document.querySelector('input[name="with_profit"]');

//     rmwCalcField.value = rmwCalc > 0 ? rmwCalc.toFixed(2) : '';
//     rmwField.value = rmw > 0 ? rmw.toFixed(2) : '';
//     rmcField.value = rmc > 0 ? rmc.toFixed(2) : '';
//     fmField.value = fm > 0 ? fm.toFixed(2) : (operations.includes("Milling") ? fmField.value : '');
//     fmSideCostField.value = fmSideCost > 0 ? fmSideCost.toFixed(2) : '';
//     fmLField.value = fmL > 0 ? fmL.toFixed(2) : (operations.includes("Milling") ? fmLField.value : '');
//     freeHoleCostField.value = freeHoleCost > 0 ? freeHoleCost.toFixed(2) : '';
//     tapHoleCostField.value = tapHoleCost > 0 ? tapHoleCost.toFixed(2) : '';
//     cBoreCostField.value = cBoreCost > 0 ? cBoreCost.toFixed(2) : '';
//     bspTapCostField.value = bspTapCost > 0 ? bspTapCost.toFixed(2) : '';
//     gdCostGdMachineField.value = gdCostGdMachine > 0 ? gdCostGdMachine.toFixed(2) : '';
//     gdCostDroRadialDrillingField.value = gdCostDroRadialDrilling > 0 ? gdCostDroRadialDrilling.toFixed(2) : '';
//     h7HoleCostField.value = h7HoleCost > 0 ? h7HoleCost.toFixed(2) : '';
//     sgField.value = sg > 0 ? sg.toFixed(2) : (operations.includes("Grinding") ? sgField.value : '');
//     sglField.value = sgl > 0 ? sgl.toFixed(2) : (operations.includes("Grinding") ? sglField.value : '');
//     htField.value = ht > 0 ? ht.toFixed(2) : '';
//     blackeningField.value = blackeningCost > 0 ? blackeningCost.toFixed(2) : '';
//     enpField.value = enpCost > 0 ? enpCost.toFixed(2) : '';
//     flashChromeField.value = flashChromeCost > 0 ? flashChromeCost.toFixed(2) : '';
//     pcField.value = pcCost > 0 ? pcCost.toFixed(2) : '';
//     zincBlueField.value = zincBlueCost > 0 ? zincBlueCost.toFixed(2) : '';
//     vmcField.value = vmc > 0 ? vmc.toFixed(2) : (operations.includes("VMC") ? vmcField.value : '');
//     turningField.value = turning > 0 ? turning.toFixed(2) : (operations.includes("Turning") ? turningField.value : '');
//     cgField.value = cg > 0 ? cg.toFixed(2) : (operations.includes("CG") ? cgField.value : '');
//     wireCutSpField.value = wireCutSp > 0 ? wireCutSp.toFixed(2) : (operations.includes("Wire Cut") ? wireCutSpField.value : '');
//     cncTurningField.value = cncTurning > 0 ? cncTurning.toFixed(2) : (operations.includes("CNC Turning") ? cncTurningField.value : '');
//     jgField.value = jg > 0 ? jg.toFixed(2) : (operations.includes("JG") ? jgField.value : '');
//     sparkingField.value = sparking > 0 ? sparking.toFixed(2) : (operations.includes("Sparking") ? sparkingField.value : '');
//     totalField.value = total > 0 ? total.toFixed(2) : '';
//     withProfitField.value = withProfit > 0 ? withProfit.toFixed(2) : '';
// }

// // Function to save the current estimation
// function saveEstimation() {
//     const form = document.getElementById('costForm');
//     const formData = new FormData(form);
//     const estimationData = {};

//     // Collect all form field values
//     formData.forEach((value, key) => {
//         if (key === 'operation') {
//             // Handle multiple selections for operation
//             if (!estimationData[key]) estimationData[key] = [];
//             estimationData[key].push(value);
//         } else {
//             estimationData[key] = value;
//         }
//     });

//     // Convert operation array to comma-separated string
//     if (estimationData['operation']) {
//         estimationData['operation'] = estimationData['operation'].join(', ');
//     }

//     // Add the estimation to the savedEstimations array
//     savedEstimations.push(estimationData);
// }

// // Function to download all saved estimations
// function downloadExcel() {
//     // Define all possible headers (form field names)
//     const allHeaders = Array.from(document.getElementById('costForm').elements)
//         .filter(el => el.name && el.name !== 'operation') // Exclude empty names and handle operation separately
//         .map(el => el.name)
//         .concat(['operation'])
//         .filter((v, i, a) => a.indexOf(v) === i); // Remove duplicates

//     // Use uploaded headers if available, otherwise use form field names
//     const headers = excelData.headers.length > 0 ? excelData.headers : allHeaders;

//     // Map saved estimations to rows, ensuring they match header order
//     const estimationRows = savedEstimations.map(estimation => 
//         headers.map(header => estimation[header] || '')
//     );

//     // Combine uploaded data (if any) with saved estimations
//     const allRows = [...excelData.rows, ...estimationRows];

//     // Create worksheet data: headers + rows
//     const wsData = [headers, ...allRows];

//     // Create worksheet
//     const ws = XLSX.utils.aoa_to_sheet(wsData);

//     // Create workbook and add worksheet
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Cost Estimation');

//     // Download the file
//     XLSX.writeFile(wb, uploadedFileName);
// }

// // Initially hide fields on page load
// const holeFields = [
//     'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost', 
//     'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14', 
//     'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26', 
//     'hole_m30', 'hole_m36', 'tap_hole_cost', 'c_bore_m3_m5', 'c_bore_m6_m10', 
//     'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost', 'bsp_tap_1_8_1_4', 
//     'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost', 
//     'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling', 
//     'gd_cost_dro_radial_drilling', 'spot_face'
// ];
// const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
// const fmFields = ['fm', 'fm_side', 'fm_side_cost', 'fm_l'];
// const grindingFields = ['sg', 'sgl'];
// const heatTreatmentFields = ['ht_required', 'ht'];
// const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
// const vmcFields = ['vmc'];
// const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
// const cgFields = ['cg'];
// const turningFields = ['turning'];
// const cncTurningFields = ['cnc_turning'];
// const jgFields = ['jg'];
// const sparkingFields = ['sparking'];

// holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// fmFields.forEach(name => {
//     const field = name === 'fm_side' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// heatTreatmentFields.forEach(name => {
//     const field = name === 'ht_required' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// coatingFields.forEach(name => {
//     const field = name === 'coating_type' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));






















// static/script.js
// Material density and costs
// const materials = {
//     "MS": {"Density_gm_cc": 7.85, "Cost_per_KG": 80.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "C45": {"Density_gm_cc": 7.85, "Cost_per_KG": 95.0, "FM_per_sqmm": 0.005, "HT_KG": 25.0, "FM_AFTER_HT_per_sqmm": 0.007},
//     "EN24": {"Density_gm_cc": 7.85, "Cost_per_KG": 125.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN354": {"Density_gm_cc": 7.85, "Cost_per_KG": 145.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "20MnCr5": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN47": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN31": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN19": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS410": {"Density_gm_cc": 7.85, "Cost_per_KG": 220.0, "FM_per_sqmm": 0.008, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-7075": {"Density_gm_cc": 2.73, "Cost_per_KG": 730.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "D2": {"Density_gm_cc": 7.85, "Cost_per_KG": 350.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "OHNS": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "DELRIN": {"Density_gm_cc": 1.42, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "NYLON": {"Density_gm_cc": 1.14, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "HYLEM": {"Density_gm_cc": 1.95, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "BRASS": {"Density_gm_cc": 8.5, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "COPPER": {"Density_gm_cc": 8.93, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CARBIDE": {"Density_gm_cc": 15.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CASTING": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "WELDMENTS": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-6061": {"Density_gm_cc": 2.73, "Cost_per_KG": 455.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS304": {"Density_gm_cc": 7.85, "Cost_per_KG": 245.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0}
// };

// // Drilling costs
// const drillingCosts = {
//     "Hole_4_8": {"Cost": 25},
//     "Hole_9_13": {"Cost": 30},
//     "Hole_15_22": {"Cost": 35},
//     "Hole_M4": {"Cost": 20},
//     "Hole_M5": {"Cost": 25},
//     "Hole_M6": {"Cost": 30},
//     "Hole_M8": {"Cost": 40},
//     "Hole_M10": {"Cost": 50},
//     "Hole_M12": {"Cost": 60},
//     "Hole_M14": {"Cost": 60},
//     "Hole_M16": {"Cost": 70},
//     "Hole_M18": {"Cost": 70},
//     "Hole_M20": {"Cost": 120},
//     "Hole_M22": {"Cost": 120},
//     "Hole_M24": {"Cost": 120},
//     "Hole_M25": {"Cost": 200},
//     "Hole_M26": {"Cost": 200},
//     "Hole_M30": {"Cost": 250},
//     "Hole_M36": {"Cost": 300},
//     "C_bore_M3_M5": {"Cost": 30},
//     "C_bore_M6_M10": {"Cost": 40},
//     "C_bore_M12": {"Cost": 50},
//     "C_bore_M14": {"Cost": 60},
//     "C_bore_M16": {"Cost": 80},
//     "BSP_TAP_1/8_1/4": {"Cost": 45},
//     "BSP_TAP_1/2_3/8": {"Cost": 60},
//     "BSP_TAP_1_inch": {"Cost": 120},
//     "BSP_TAP_1.5_2_inch": {"Cost": 200},
//     "GD_TOTAL_HOLE_LENGTH": {"Cost": 3},
//     "GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING": {"Cost": 2},
//     "4_5_H7": {"Cost": 80},
//     "6_8_H7": {"Cost": 100},
//     "10_14_H7": {"Cost": 120},
//     "15_18_H7": {"Cost": 160},
//     "20_25_H7": {"Cost": 220},
//     "25_30_H7": {"Cost": 280},
//     "Spot_face": {"Cost": 30}
// };

// // Coating costs
// const coatingCosts = {
//     "Blackening": {"Cost": 20},
//     "ENP": {"Cost": 180},
//     "Flash Chrome": {"Cost": 0.6},
//     "PC": {"Cost": 20},
//     "Zinc Blue": {"Cost": 30}
// };

// // Store Excel data in memory
// let excelData = { headers: [], rows: [] };
// let uploadedFileName = 'cost_estimation.xlsx'; // Default filename if no file uploaded
// let savedEstimations = []; // Array to store multiple estimations

// // Initialize Choices.js and handle Excel upload
// document.addEventListener('DOMContentLoaded', () => {
//     const materialSelect = new Choices('#material', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Material',
//     });

//     const typeSelect = new Choices('#type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Type',
//     });

//     const operationSelect = new Choices('#operation', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Operations',
//         removeItemButton: true // Enable remove button for multiple selections
//     });

//     const fmSideSelect = new Choices('#fm_side', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select FM Side',
//     });

//     const htRequiredSelect = new Choices('#ht_required', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select HT Required',
//     });

//     const coatingTypeSelect = new Choices('#coating_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Coating Type',
//     });

//     // Populate coating_type dynamically
//     if (coatingTypeSelect.getValue(true) === '') {
//         const coatingOptions = Object.keys(coatingCosts).map(coating => ({
//             value: coating,
//             label: coating,
//         }));
//         coatingTypeSelect.setChoices(coatingOptions, 'value', 'label', true);
//     }

//     // Make coating cost fields readonly
//     ['blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'].forEach(name => {
//         document.querySelector(`input[name="${name}"]`).setAttribute('readonly', true);
//     });

//     // Handle Excel file upload
//     document.getElementById('excelUpload').addEventListener('change', function(e) {
//         const file = e.target.files[0];
//         if (file) {
//             uploadedFileName = file.name; // Use uploaded file's name for download
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 const data = new Uint8Array(e.target.result);
//                 const workbook = XLSX.read(data, { type: 'array' });
//                 const sheetName = workbook.SheetNames[0];
//                 const worksheet = workbook.Sheets[sheetName];
//                 const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

//                 if (jsonData.length > 0) {
//                     excelData.headers = jsonData[0]; // First row as headers
//                     excelData.rows = jsonData.slice(1).filter(row => row.some(cell => cell !== undefined && cell !== '')); // Filter out empty rows
//                 } else {
//                     excelData.headers = []; // Blank sheet
//                     excelData.rows = [];
//                 }
//             };
//             reader.readAsArrayBuffer(file);
//         }
//     });

//     // Handle Save button
//     document.getElementById('saveButton').addEventListener('click', function() {
//         calculateFields(); // Ensure latest calculations
//         saveEstimation(); // Save the current estimation
//         alert('Estimation saved!'); // Feedback to user
//     });

//     // Handle Download button
//     document.getElementById('downloadButton').addEventListener('click', function() {
//         if (savedEstimations.length === 0 && excelData.rows.length === 0) {
//             alert('No estimations to download!');
//             return;
//         }
//         downloadExcel(); // Download all saved estimations
//     });

//     // Initial call to update operation boxes
//     updateOperationBoxes();
// });

// // Show/hide fields based on type selection
// document.querySelector('#type').addEventListener('change', function() {
//     const type = this.value;
//     const diaField = document.querySelector('label[for="dia"]');
//     const lengthField = document.querySelector('label[for="length"]');
//     const widthField = document.querySelector('label[for="width"]');
//     const thicknessField = document.querySelector('label[for="thickness"]');
//     const rmwstrField = document.querySelector('label[for="rmw_str"]');

//     diaField.classList.add('hidden');
//     lengthField.classList.add('hidden');
//     widthField.classList.add('hidden');
//     thicknessField.classList.add('hidden');
//     rmwstrField.classList.add('hidden');

//     if (type === 'Cyl') {
//         diaField.classList.remove('hidden');
//         lengthField.classList.remove('hidden');
//     } else if (type === 'Pri') {
//         lengthField.classList.remove('hidden');
//         widthField.classList.remove('hidden');
//         thicknessField.classList.remove('hidden');
//     } else if (type === 'Str') {
//         rmwstrField.classList.remove('hidden');
//     }
//     calculateFields();
// });

// // Show/hide fields based on operation selection
// document.querySelector('#operation').addEventListener('change', function() {
//     const operations = Array.from(this.selectedOptions).map(option => option.value).filter(op => op !== '');
//     updateOperationBoxes();
//     updateOperationFields(operations);
//     calculateFields();
// });

// // Function to update operation boxes
// function updateOperationBoxes() {
//     const operationSelect = document.querySelector('#operation');
//     const selectedOperations = Array.from(operationSelect.selectedOptions)
//         .map(option => option.value)
//         .filter(op => op !== '');
//     const container = document.querySelector('#operation-box-container');
//     container.innerHTML = ''; // Clear existing boxes

//     selectedOperations.forEach(operation => {
//         const box = document.createElement('div');
//         box.className = 'operation-box';
//         box.textContent = operation;
//         container.appendChild(box);
//     });
// }

// // Function to update fields based on selected operations
// function updateOperationFields(operations) {
//     const fmField = document.querySelector('label:has(input[name="fm"])');
//     const fmSideQField = document.querySelector('label:has(#fm_side)');
//     const fmSideField = document.querySelector('label:has(input[name="fm_side_cost"])');
//     const fmLField = document.querySelector('label:has(input[name="fm_l"])');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost', 
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14', 
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26', 
//         'hole_m30', 'hole_m36', 'tap_hole_cost', 'c_bore_m3_m5', 'c_bore_m6_m10', 
//         'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost', 'bsp_tap_1_8_1_4', 
//         'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost', 
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling', 
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
//     const grindingFields = ['sg', 'sgl'];
//     const heatTreatmentFields = ['ht_required', 'ht'];
//     const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
//     const vmcFields = ['vmc'];
//     const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
//     const cgFields = ['cg'];
//     const turningFields = ['turning'];
//     const cncTurningFields = ['cnc_turning'];
//     const jgFields = ['jg'];
//     const sparkingFields = ['sparking'];

//     // Hide all operation-related fields initially
//     fmField.classList.add('hidden');
//     fmSideQField.classList.add('hidden');
//     fmSideField.classList.add('hidden');
//     fmLField.classList.add('hidden');
//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     heatTreatmentFields.forEach(name => {
//         const field = name === 'ht_required' ? 
//             document.querySelector(`label:has(#${name})`) : 
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     coatingFields.forEach(name => {
//         const field = name === 'coating_type' ? 
//             document.querySelector(`label:has(#${name})`) : 
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));

//     // Show fields based on selected operations
//     operations.forEach(operation => {
//         if (operation === 'Milling') {
//             fmField.classList.remove('hidden');
//             fmSideQField.classList.remove('hidden');
//             fmSideField.classList.remove('hidden');
//             fmLField.classList.remove('hidden');
//         }
//         if (operation === 'Drilling') {
//             holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Grinding') {
//             grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Heat Treatment') {
//             heatTreatmentFields.forEach(name => {
//                 const field = name === 'ht_required' ? 
//                     document.querySelector(`label:has(#${name})`) : 
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//         }
//         if (operation === 'Coating') {
//             coatingFields.forEach(name => {
//                 const field = name === 'coating_type' ? 
//                     document.querySelector(`label:has(#${name})`) : 
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//             updateCoatingFields();
//         }
//         if (operation === 'VMC') {
//             vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Wire Cut') {
//             wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CG') {
//             cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Turning') {
//             turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CNC Turning') {
//             cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'JG') {
//             jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Sparking') {
//             sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//     });
// }

// // Show/hide coating-specific fields based on coating_type selection
// document.querySelector('#coating_type').addEventListener('change', function() {
//     updateCoatingFields();
//     calculateFields();
// });

// // Function to handle coating field visibility
// function updateCoatingFields() {
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value);
//     const coatingType = document.querySelector('#coating_type').value;
//     const blackeningField = document.querySelector('label:has(input[name="blackening"])');
//     const enpField = document.querySelector('label:has(input[name="enp"])');
//     const flashChromeField = document.querySelector('label:has(input[name="flash_chrome"])');
//     const pcField = document.querySelector('label:has(input[name="pc"])');
//     const zincBlueField = document.querySelector('label:has(input[name="zinc_blue"])');

//     blackeningField.classList.add('hidden');
//     enpField.classList.add('hidden');
//     flashChromeField.classList.add('hidden');
//     pcField.classList.add('hidden');
//     zincBlueField.classList.add('hidden');

//     if (operations.includes('Coating')) {
//         if (coatingType === 'Blackening') blackeningField.classList.remove('hidden');
//         if (coatingType === 'ENP') enpField.classList.remove('hidden');
//         if (coatingType === 'Flash Chrome') flashChromeField.classList.remove('hidden');
//         if (coatingType === 'PC') pcField.classList.remove('hidden');
//         if (coatingType === 'Zinc Blue') zincBlueField.classList.remove('hidden');
//     }
// }

// // Auto-calculate fields when inputs change
// const inputs = document.querySelectorAll(
//     'input[name="dia"], input[name="length"], input[name="width"], input[name="thickness"], input[name="rmw_str"], ' +
//     '#type, #material, #operation, #fm_side, ' +
//     'input[name="hole_4_8"], input[name="hole_9_13"], input[name="hole_15_22"], ' +
//     'input[name="hole_m4"], input[name="hole_m5"], input[name="hole_m6"], input[name="hole_m8"], ' +
//     'input[name="hole_m10"], input[name="hole_m12"], input[name="hole_m14"], input[name="hole_m16"], ' +
//     'input[name="hole_m18"], input[name="hole_m20"], input[name="hole_m22"], input[name="hole_m24"], ' +
//     'input[name="hole_m25"], input[name="hole_m26"], input[name="hole_m30"], input[name="hole_m36"], ' +
//     'input[name="c_bore_m3_m5"], input[name="c_bore_m6_m10"], input[name="c_bore_m12"], ' +
//     'input[name="c_bore_m14"], input[name="c_bore_m16"], ' +
//     'input[name="bsp_tap_1_8_1_4"], input[name="bsp_tap_1_2_3_8"], input[name="bsp_tap_1_inch"], ' +
//     'input[name="bsp_tap_1_5_2_inch"], input[name="gd_total_hole_length"], ' +
//     'input[name="gd_total_hole_length_dro_radial_drilling"], ' +
//     'input[name="4_5_h7"], input[name="6_8_h7"], input[name="10_14_h7"], ' +
//     'input[name="15_18_h7"], input[name="20_25_h7"], input[name="25_30_h7"], ' +
//     'input[name="sg"], input[name="sgl"], #ht_required, input[name="ht"], ' +
//     'input[name="fwcam"], #coating_type, input[name="blackening"], ' +
//     'input[name="enp"], input[name="flash_chrome"], input[name="pc"], input[name="zinc_blue"], ' +
//     'input[name="vmc"], input[name="turning"], input[name="cg"], input[name="wire_cut_sp"], ' +
//     'input[name="cnc_turning"], input[name="jg"], input[name="sparking"], input[name="fm"], ' +
//     'input[name="profit_percent"]'
// );
// inputs.forEach(input => input.addEventListener('change', calculateFields));

// function calculateFields() {
//     const type = document.querySelector('#type').value;
//     const material = document.querySelector('#material').value;
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).filter(op => op !== '');
//     const fmSide = document.querySelector('#fm_side').value === "True";
//     const htRequired = document.querySelector('#ht_required').value === "True";
//     const coatingType = document.querySelector('#coating_type').value;
//     const dia = parseFloat(document.querySelector('input[name="dia"]').value) || 0;
//     const length = parseFloat(document.querySelector('input[name="length"]').value) || 0;
//     const width = parseFloat(document.querySelector('input[name="width"]').value) || 0;
//     const thickness = parseFloat(document.querySelector('input[name="thickness"]').value) || 0;
//     const rmwStr = parseFloat(document.querySelector('input[name="rmw_str"]').value) || 0;
//     const fwcam = parseFloat(document.querySelector('input[name="fwcam"]').value) || 0;
//     const profitPercent = parseFloat(document.querySelector('input[name="profit_percent"]').value) || 0;
//     const density = materials[material]?.Density_gm_cc || 0;
//     const costPerKg = materials[material]?.Cost_per_KG || 0;
//     const fmPerSqmm = materials[material]?.FM_per_sqmm || 0;
//     const fmAfterHtPerSqmm = materials[material]?.FM_AFTER_HT_per_sqmm || 0;
//     const htKg = materials[material]?.HT_KG || 0;
//     let rmwCalc = 0;
//     let rmw = 0;
//     let rmc = 0;
//     let fm = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm"]').value) || 0) : 0;
//     let fmSideCost = 0;
//     let fmL = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm_l"]').value) || 0) : 0;
//     let freeHoleCost = 0;
//     let tapHoleCost = 0;
//     let cBoreCost = 0;
//     let bspTapCost = 0;
//     let gdCostGdMachine = 0;
//     let gdCostDroRadialDrilling = 0;
//     let h7HoleCost = 0;
//     let sg = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sg"]').value) || 0) : 0;
//     let sgl = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sgl"]').value) || 0) : 0;
//     let ht = 0;
//     let blackeningCost = 0;
//     let enpCost = 0;
//     let flashChromeCost = 0;
//     let pcCost = 0;
//     let zincBlueCost = 0;
//     let vmc = operations.includes("VMC") ? (parseFloat(document.querySelector('input[name="vmc"]').value) || 0) : 0;
//     let turning = operations.includes("Turning") ? (parseFloat(document.querySelector('input[name="turning"]').value) || 0) : 0;
//     let cg = operations.includes("CG") ? (parseFloat(document.querySelector('input[name="cg"]').value) || 0) : 0;
//     let wireCutSp = operations.includes("Wire Cut") ? (parseFloat(document.querySelector('input[name="wire_cut_sp"]').value) || 0) : 0;
//     let cncTurning = operations.includes("CNC Turning") ? (parseFloat(document.querySelector('input[name="cnc_turning"]').value) || 0) : 0;
//     let jg = operations.includes("JG") ? (parseFloat(document.querySelector('input[name="jg"]').value) || 0) : 0;
//     let sparking = operations.includes("Sparking") ? (parseFloat(document.querySelector('input[name="sparking"]').value) || 0) : 0;
//     let engraving = parseFloat(document.querySelector('input[name="engraving"]').value) || 0;

//     // Calculate RMW_Calc
//     if (type === "Pri" && length > 0 && width > 0 && thickness > 0) {
//         rmwCalc = ((length * width * thickness / 1000) * density) / 1000;
//     } else if (type === "Cyl" && dia > 0 && length > 0) {
//         rmwCalc = ((3.14159 * (dia * dia) * length / 4 / 1000) * density) / 1000;
//     }

//     // Calculate RMW
//     if (type === "Str" && rmwStr > 0) {
//         rmw = rmwStr;
//     } else if (rmwCalc > 0) {
//         rmw = rmwCalc;
//     }

//     // Calculate RMC
//     if (rmw > 0 && costPerKg > 0) {
//         rmc = rmw * costPerKg;
//     }

//     // Calculate FM only when Milling is selected
//     if (operations.includes("Milling") && type === "Pri" && length >= 250 && width >= 250) {
//         const fmRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fm = length * width * fmRate;
//     }

//     // Calculate FM_Side
//     if (operations.includes("Milling") && type === "Pri" && fmSide && length > 0 && width > 0 && thickness > 0) {
//         const fmSideRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fmSideCost = 2 * (length + width) * thickness * fmSideRate;
//     }

//     // Calculate Free_hole_cost
//     if (operations.includes("Drilling")) {
//         const hole_4_8 = parseFloat(document.querySelector('input[name="hole_4_8"]').value) || 0;
//         const hole_9_13 = parseFloat(document.querySelector('input[name="hole_9_13"]').value) || 0;
//         const hole_15_22 = parseFloat(document.querySelector('input[name="hole_15_22"]').value) || 0;
//         freeHoleCost = (hole_4_8 * drillingCosts["Hole_4_8"].Cost) +
//                        (hole_9_13 * drillingCosts["Hole_9_13"].Cost) +
//                        (hole_15_22 * drillingCosts["Hole_15_22"].Cost);
//     }

//     // Calculate Tap_hole_cost
//     if (operations.includes("Drilling")) {
//         const hole_m4 = parseFloat(document.querySelector('input[name="hole_m4"]').value) || 0;
//         const hole_m5 = parseFloat(document.querySelector('input[name="hole_m5"]').value) || 0;
//         const hole_m6 = parseFloat(document.querySelector('input[name="hole_m6"]').value) || 0;
//         const hole_m8 = parseFloat(document.querySelector('input[name="hole_m8"]').value) || 0;
//         const hole_m10 = parseFloat(document.querySelector('input[name="hole_m10"]').value) || 0;
//         const hole_m12 = parseFloat(document.querySelector('input[name="hole_m12"]').value) || 0;
//         const hole_m14 = parseFloat(document.querySelector('input[name="hole_m14"]').value) || 0;
//         const hole_m16 = parseFloat(document.querySelector('input[name="hole_m16"]').value) || 0;
//         const hole_m18 = parseFloat(document.querySelector('input[name="hole_m18"]').value) || 0;
//         const hole_m20 = parseFloat(document.querySelector('input[name="hole_m20"]').value) || 0;
//         const hole_m22 = parseFloat(document.querySelector('input[name="hole_m22"]').value) || 0;
//         const hole_m24 = parseFloat(document.querySelector('input[name="hole_m24"]').value) || 0;
//         const hole_m25 = parseFloat(document.querySelector('input[name="hole_m25"]').value) || 0;
//         const hole_m26 = parseFloat(document.querySelector('input[name="hole_m26"]').value) || 0;
//         const hole_m30 = parseFloat(document.querySelector('input[name="hole_m30"]').value) || 0;
//         const hole_m36 = parseFloat(document.querySelector('input[name="hole_m36"]').value) || 0;
//         tapHoleCost = (hole_m4 * drillingCosts["Hole_M4"].Cost) +
//                       (hole_m5 * drillingCosts["Hole_M5"].Cost) +
//                       (hole_m6 * drillingCosts["Hole_M6"].Cost) +
//                       (hole_m8 * drillingCosts["Hole_M8"].Cost) +
//                       (hole_m10 * drillingCosts["Hole_M10"].Cost) +
//                       (hole_m12 * drillingCosts["Hole_M12"].Cost) +
//                       (hole_m14 * drillingCosts["Hole_M14"].Cost) +
//                       (hole_m16 * drillingCosts["Hole_M16"].Cost) +
//                       (hole_m18 * drillingCosts["Hole_M18"].Cost) +
//                       (hole_m20 * drillingCosts["Hole_M20"].Cost) +
//                       (hole_m22 * drillingCosts["Hole_M22"].Cost) +
//                       (hole_m24 * drillingCosts["Hole_M24"].Cost) +
//                       (hole_m25 * drillingCosts["Hole_M25"].Cost) +
//                       (hole_m26 * drillingCosts["Hole_M26"].Cost) +
//                       (hole_m30 * drillingCosts["Hole_M30"].Cost) +
//                       (hole_m36 * drillingCosts["Hole_M36"].Cost);
//     }

//     // Calculate C_Bore_Cost
//     if (operations.includes("Drilling")) {
//         const c_bore_m3_m5 = parseFloat(document.querySelector('input[name="c_bore_m3_m5"]').value) || 0;
//         const c_bore_m6_m10 = parseFloat(document.querySelector('input[name="c_bore_m6_m10"]').value) || 0;
//         const c_bore_m12 = parseFloat(document.querySelector('input[name="c_bore_m12"]').value) || 0;
//         const c_bore_m14 = parseFloat(document.querySelector('input[name="c_bore_m14"]').value) || 0;
//         const c_bore_m16 = parseFloat(document.querySelector('input[name="c_bore_m16"]').value) || 0;
//         cBoreCost = (c_bore_m3_m5 * drillingCosts["C_bore_M3_M5"].Cost) +
//                     (c_bore_m6_m10 * drillingCosts["C_bore_M6_M10"].Cost) +
//                     (c_bore_m12 * drillingCosts["C_bore_M12"].Cost) +
//                     (c_bore_m14 * drillingCosts["C_bore_M14"].Cost) +
//                     (c_bore_m16 * drillingCosts["C_bore_M16"].Cost);
//     }

//     // Calculate BSP_TAP_COST
//     if (operations.includes("Drilling")) {
//         const bsp_tap_1_8_1_4 = parseFloat(document.querySelector('input[name="bsp_tap_1_8_1_4"]').value) || 0;
//         const bsp_tap_1_2_3_8 = parseFloat(document.querySelector('input[name="bsp_tap_1_2_3_8"]').value) || 0;
//         const bsp_tap_1_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_inch"]').value) || 0;
//         const bsp_tap_1_5_2_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_5_2_inch"]').value) || 0;
//         bspTapCost = (bsp_tap_1_8_1_4 * drillingCosts["BSP_TAP_1/8_1/4"].Cost) +
//                      (bsp_tap_1_2_3_8 * drillingCosts["BSP_TAP_1/2_3/8"].Cost) +
//                      (bsp_tap_1_inch * drillingCosts["BSP_TAP_1_inch"].Cost) +
//                      (bsp_tap_1_5_2_inch * drillingCosts["BSP_TAP_1.5_2_inch"].Cost);
//     }

//     // Calculate GD_COST_GD_MACHINE
//     if (operations.includes("Drilling")) {
//         const gd_total_hole_length = parseFloat(document.querySelector('input[name="gd_total_hole_length"]').value) || 0;
//         gdCostGdMachine = gd_total_hole_length * drillingCosts["GD_TOTAL_HOLE_LENGTH"].Cost;
//     }

//     // Calculate GD_COST_DRO_RADIAL DRILLING
//     if (operations.includes("Drilling")) {
//         const gd_total_hole_length_dro_radial_drilling = parseFloat(document.querySelector('input[name="gd_total_hole_length_dro_radial_drilling"]').value) || 0;
//         gdCostDroRadialDrilling = gd_total_hole_length_dro_radial_drilling * drillingCosts["GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING"].Cost;
//     }

//     // Calculate H7_HOLE_COST
//     if (operations.includes("Drilling")) {
//         const h7_4_5 = parseFloat(document.querySelector('input[name="4_5_h7"]').value) || 0;
//         const h7_6_8 = parseFloat(document.querySelector('input[name="6_8_h7"]').value) || 0;
//         const h7_10_14 = parseFloat(document.querySelector('input[name="10_14_h7"]').value) || 0;
//         const h7_15_18 = parseFloat(document.querySelector('input[name="15_18_h7"]').value) || 0;
//         const h7_20_25 = parseFloat(document.querySelector('input[name="20_25_h7"]').value) || 0;
//         const h7_25_30 = parseFloat(document.querySelector('input[name="25_30_h7"]').value) || 0;
//         h7HoleCost = (h7_4_5 * drillingCosts["4_5_H7"].Cost) +
//                      (h7_6_8 * drillingCosts["6_8_H7"].Cost) +
//                      (h7_10_14 * drillingCosts["10_14_H7"].Cost) +
//                      (h7_15_18 * drillingCosts["15_18_H7"].Cost) +
//                      (h7_20_25 * drillingCosts["20_25_H7"].Cost) +
//                      (h7_25_30 * drillingCosts["25_30_H7"].Cost);
//     }

//     // Calculate SG only when Grinding is selected
//     if (operations.includes("Grinding") && type === "Pri" && length >= 250 && width >= 250) {
//         sg = length * width * fmPerSqmm;
//     }

//     // Calculate HT
//     if (operations.includes("Heat Treatment") && htRequired) {
//         ht = rmw * htKg;
//     }

//     // Calculate Coating Costs
//     if (operations.includes("Coating") && length > 0 && width > 0 && coatingType) {
//         const areaCm2 = (length / 10) * (width / 10);
//         blackeningCost = coatingType === "Blackening" ? fwcam * coatingCosts["Blackening"].Cost : 0;
//         enpCost = coatingType === "ENP" ? fwcam * coatingCosts["ENP"].Cost : 0;
//         flashChromeCost = coatingType === "Flash Chrome" ? areaCm2 * coatingCosts["Flash Chrome"].Cost : 0;
//         pcCost = coatingType === "PC" ? fwcam * coatingCosts["PC"].Cost : 0;
//         zincBlueCost = coatingType === "Zinc Blue" ? fwcam * coatingCosts["Zinc Blue"].Cost : 0;
//     }

//     // Calculate Total
//     const coatingSum = blackeningCost + enpCost + flashChromeCost + pcCost + zincBlueCost;
//     const total = (
//         engraving + sgl + h7HoleCost + ht + gdCostDroRadialDrilling + 
//         gdCostGdMachine + bspTapCost + cBoreCost + tapHoleCost + freeHoleCost + 
//         fmL + fmSideCost + fm + rmc + vmc + turning + cg + wireCutSp + cncTurning + 
//         jg + sparking + coatingSum
//     );

//     // Calculate With Profit
//     const withProfit = total * (1 + (profitPercent / 100));

//     // Update fields
//     const rmwCalcField = document.querySelector('input[name="rmw_calc"]');
//     const rmwField = document.querySelector('input[name="rmw"]');
//     const rmcField = document.querySelector('input[name="rmc"]');
//     const fmField = document.querySelector('input[name="fm"]');
//     const fmSideCostField = document.querySelector('input[name="fm_side_cost"]');
//     const fmLField = document.querySelector('input[name="fm_l"]');
//     const freeHoleCostField = document.querySelector('input[name="free_hole_cost"]');
//     const tapHoleCostField = document.querySelector('input[name="tap_hole_cost"]');
//     const cBoreCostField = document.querySelector('input[name="c_bore_cost"]');
//     const bspTapCostField = document.querySelector('input[name="bsp_tap_cost"]');
//     const gdCostGdMachineField = document.querySelector('input[name="gd_cost_gd_machine"]');
//     const gdCostDroRadialDrillingField = document.querySelector('input[name="gd_cost_dro_radial_drilling"]');
//     const h7HoleCostField = document.querySelector('input[name="h7_hole_cost"]');
//     const sgField = document.querySelector('input[name="sg"]');
//     const sglField = document.querySelector('input[name="sgl"]');
//     const htField = document.querySelector('input[name="ht"]');
//     const blackeningField = document.querySelector('input[name="blackening"]');
//     const enpField = document.querySelector('input[name="enp"]');
//     const flashChromeField = document.querySelector('input[name="flash_chrome"]');
//     const pcField = document.querySelector('input[name="pc"]');
//     const zincBlueField = document.querySelector('input[name="zinc_blue"]');
//     const vmcField = document.querySelector('input[name="vmc"]');
//     const turningField = document.querySelector('input[name="turning"]');
//     const cgField = document.querySelector('input[name="cg"]');
//     const wireCutSpField = document.querySelector('input[name="wire_cut_sp"]');
//     const cncTurningField = document.querySelector('input[name="cnc_turning"]');
//     const jgField = document.querySelector('input[name="jg"]');
//     const sparkingField = document.querySelector('input[name="sparking"]');
//     const totalField = document.querySelector('input[name="total"]');
//     const withProfitField = document.querySelector('input[name="with_profit"]');

//     rmwCalcField.value = rmwCalc > 0 ? rmwCalc.toFixed(2) : '';
//     rmwField.value = rmw > 0 ? rmw.toFixed(2) : '';
//     rmcField.value = rmc > 0 ? rmc.toFixed(2) : '';
//     fmField.value = fm > 0 ? fm.toFixed(2) : (operations.includes("Milling") ? fmField.value : '');
//     fmSideCostField.value = fmSideCost > 0 ? fmSideCost.toFixed(2) : '';
//     fmLField.value = fmL > 0 ? fmL.toFixed(2) : (operations.includes("Milling") ? fmLField.value : '');
//     freeHoleCostField.value = freeHoleCost > 0 ? freeHoleCost.toFixed(2) : '';
//     tapHoleCostField.value = tapHoleCost > 0 ? tapHoleCost.toFixed(2) : '';
//     cBoreCostField.value = cBoreCost > 0 ? cBoreCost.toFixed(2) : '';
//     bspTapCostField.value = bspTapCost > 0 ? bspTapCost.toFixed(2) : '';
//     gdCostGdMachineField.value = gdCostGdMachine > 0 ? gdCostGdMachine.toFixed(2) : '';
//     gdCostDroRadialDrillingField.value = gdCostDroRadialDrilling > 0 ? gdCostDroRadialDrilling.toFixed(2) : '';
//     h7HoleCostField.value = h7HoleCost > 0 ? h7HoleCost.toFixed(2) : '';
//     sgField.value = sg > 0 ? sg.toFixed(2) : (operations.includes("Grinding") ? sgField.value : '');
//     sglField.value = sgl > 0 ? sgl.toFixed(2) : (operations.includes("Grinding") ? sglField.value : '');
//     htField.value = ht > 0 ? ht.toFixed(2) : '';
//     blackeningField.value = blackeningCost > 0 ? blackeningCost.toFixed(2) : '';
//     enpField.value = enpCost > 0 ? enpCost.toFixed(2) : '';
//     flashChromeField.value = flashChromeCost > 0 ? flashChromeCost.toFixed(2) : '';
//     pcField.value = pcCost > 0 ? pcCost.toFixed(2) : '';
//     zincBlueField.value = zincBlueCost > 0 ? zincBlueCost.toFixed(2) : '';
//     vmcField.value = vmc > 0 ? vmc.toFixed(2) : (operations.includes("VMC") ? vmcField.value : '');
//     turningField.value = turning > 0 ? turning.toFixed(2) : (operations.includes("Turning") ? turningField.value : '');
//     cgField.value = cg > 0 ? cg.toFixed(2) : (operations.includes("CG") ? cgField.value : '');
//     wireCutSpField.value = wireCutSp > 0 ? wireCutSp.toFixed(2) : (operations.includes("Wire Cut") ? wireCutSpField.value : '');
//     cncTurningField.value = cncTurning > 0 ? cncTurning.toFixed(2) : (operations.includes("CNC Turning") ? cncTurningField.value : '');
//     jgField.value = jg > 0 ? jg.toFixed(2) : (operations.includes("JG") ? jgField.value : '');
//     sparkingField.value = sparking > 0 ? sparking.toFixed(2) : (operations.includes("Sparking") ? sparkingField.value : '');
//     totalField.value = total > 0 ? total.toFixed(2) : '';
//     withProfitField.value = withProfit > 0 ? withProfit.toFixed(2) : '';
// }

// // Function to save the current estimation
// function saveEstimation() {
//     const form = document.getElementById('costForm');
//     const formData = new FormData(form);
//     const estimationData = {};

//     // Collect all form field values
//     formData.forEach((value, key) => {
//         if (key === 'operation') {
//             // Handle multiple selections for operation
//             if (!estimationData[key]) estimationData[key] = [];
//             estimationData[key].push(value);
//         } else {
//             estimationData[key] = value;
//         }
//     });

//     // Convert operation array to comma-separated string
//     if (estimationData['operation']) {
//         estimationData['operation'] = estimationData['operation'].join(', ');
//     }

//     // Add the estimation to the savedEstimations array
//     savedEstimations.push(estimationData);
// }

// // Function to download all saved estimations
// function downloadExcel() {
//     // Define all possible headers (form field names)
//     const allHeaders = Array.from(document.getElementById('costForm').elements)
//         .filter(el => el.name && el.name !== 'operation') // Exclude empty names and handle operation separately
//         .map(el => el.name)
//         .concat(['operation'])
//         .filter((v, i, a) => a.indexOf(v) === i); // Remove duplicates

//     // Use uploaded headers if available, otherwise use form field names
//     const headers = excelData.headers.length > 0 ? excelData.headers : allHeaders;

//     // Map saved estimations to rows, ensuring they match header order
//     const estimationRows = savedEstimations.map(estimation => 
//         headers.map(header => estimation[header] || '')
//     );

//     // Combine uploaded data (if any) with saved estimations, filtering out empty rows
//     const allRows = [...excelData.rows, ...estimationRows].filter(row => row.some(cell => cell !== undefined && cell !== ''));

//     // Create worksheet data: headers + rows
//     const wsData = [headers, ...allRows];

//     // Create worksheet
//     const ws = XLSX.utils.aoa_to_sheet(wsData);

//     // Create workbook and add worksheet
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Cost Estimation');

//     // Download the file
//     XLSX.writeFile(wb, uploadedFileName);
// }

// // Initially hide fields on page load
// const holeFields = [
//     'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost', 
//     'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14', 
//     'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26', 
//     'hole_m30', 'hole_m36', 'tap_hole_cost', 'c_bore_m3_m5', 'c_bore_m6_m10', 
//     'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost', 'bsp_tap_1_8_1_4', 
//     'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost', 
//     'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling', 
//     'gd_cost_dro_radial_drilling', 'spot_face'
// ];
// const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
// const fmFields = ['fm', 'fm_side', 'fm_side_cost', 'fm_l'];
// const grindingFields = ['sg', 'sgl'];
// const heatTreatmentFields = ['ht_required', 'ht'];
// const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
// const vmcFields = ['vmc'];
// const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
// const cgFields = ['cg'];
// const turningFields = ['turning'];
// const cncTurningFields = ['cnc_turning'];
// const jgFields = ['jg'];
// const sparkingFields = ['sparking'];

// holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// fmFields.forEach(name => {
//     const field = name === 'fm_side' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// heatTreatmentFields.forEach(name => {
//     const field = name === 'ht_required' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// coatingFields.forEach(name => {
//     const field = name === 'coating_type' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));






































// static/script.js
// Material density and costs
// const materials = {
//     "MS": {"Density_gm_cc": 7.85, "Cost_per_KG": 80.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "C45": {"Density_gm_cc": 7.85, "Cost_per_KG": 95.0, "FM_per_sqmm": 0.005, "HT_KG": 25.0, "FM_AFTER_HT_per_sqmm": 0.007},
//     "EN24": {"Density_gm_cc": 7.85, "Cost_per_KG": 125.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN354": {"Density_gm_cc": 7.85, "Cost_per_KG": 145.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "20MnCr5": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN47": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN31": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN19": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS410": {"Density_gm_cc": 7.85, "Cost_per_KG": 220.0, "FM_per_sqmm": 0.008, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-7075": {"Density_gm_cc": 2.73, "Cost_per_KG": 730.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "D2": {"Density_gm_cc": 7.85, "Cost_per_KG": 350.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "OHNS": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "DELRIN": {"Density_gm_cc": 1.42, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "NYLON": {"Density_gm_cc": 1.14, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "HYLEM": {"Density_gm_cc": 1.95, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "BRASS": {"Density_gm_cc": 8.5, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "COPPER": {"Density_gm_cc": 8.93, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CARBIDE": {"Density_gm_cc": 15.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CASTING": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "WELDMENTS": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-6061": {"Density_gm_cc": 2.73, "Cost_per_KG": 455.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS304": {"Density_gm_cc": 7.85, "Cost_per_KG": 245.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0}
// };

// // Drilling costs
// const drillingCosts = {
//     "Hole_4_8": {"Cost": 25},
//     "Hole_9_13": {"Cost": 30},
//     "Hole_15_22": {"Cost": 35},
//     "Hole_M4": {"Cost": 20},
//     "Hole_M5": {"Cost": 25},
//     "Hole_M6": {"Cost": 30},
//     "Hole_M8": {"Cost": 40},
//     "Hole_M10": {"Cost": 50},
//     "Hole_M12": {"Cost": 60},
//     "Hole_M14": {"Cost": 60},
//     "Hole_M16": {"Cost": 70},
//     "Hole_M18": {"Cost": 70},
//     "Hole_M20": {"Cost": 120},
//     "Hole_M22": {"Cost": 120},
//     "Hole_M24": {"Cost": 120},
//     "Hole_M25": {"Cost": 200},
//     "Hole_M26": {"Cost": 200},
//     "Hole_M30": {"Cost": 250},
//     "Hole_M36": {"Cost": 300},
//     "C_bore_M3_M5": {"Cost": 30},
//     "C_bore_M6_M10": {"Cost": 40},
//     "C_bore_M12": {"Cost": 50},
//     "C_bore_M14": {"Cost": 60},
//     "C_bore_M16": {"Cost": 80},
//     "BSP_TAP_1/8_1/4": {"Cost": 45},
//     "BSP_TAP_1/2_3/8": {"Cost": 60},
//     "BSP_TAP_1_inch": {"Cost": 120},
//     "BSP_TAP_1.5_2_inch": {"Cost": 200},
//     "GD_TOTAL_HOLE_LENGTH": {"Cost": 3},
//     "GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING": {"Cost": 2},
//     "4_5_H7": {"Cost": 80},
//     "6_8_H7": {"Cost": 100},
//     "10_14_H7": {"Cost": 120},
//     "15_18_H7": {"Cost": 160},
//     "20_25_H7": {"Cost": 220},
//     "25_30_H7": {"Cost": 280},
//     "Spot_face": {"Cost": 30}
// };

// // Coating costs
// const coatingCosts = {
//     "Blackening": {"Cost": 20},
//     "ENP": {"Cost": 180},
//     "Flash Chrome": {"Cost": 0.6},
//     "PC": {"Cost": 20},
//     "Zinc Blue": {"Cost": 30}
// };

// // Store Excel data in memory
// let excelData = { headers: [], rows: [] };
// let uploadedFileName = 'cost_estimation.xlsx'; // Default filename if no file uploaded
// let savedEstimations = []; // Array to store multiple estimations

// // Initialize Choices.js and handle Excel upload
// document.addEventListener('DOMContentLoaded', () => {
//     const materialSelect = new Choices('#material', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Material',
//     });

//     const typeSelect = new Choices('#type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Type',
//     });

//     const operationSelect = new Choices('#operation', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Operations',
//         removeItemButton: true // Enable remove button for multiple selections
//     });

//     const fmSideSelect = new Choices('#fm_side', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select FM Side',
//     });

//     const htRequiredSelect = new Choices('#ht_required', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select HT Required',
//     });

//     const coatingTypeSelect = new Choices('#coating_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Coating Type',
//     });

//     const holeTypeSelect = new Choices('#hole_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Hole Type',
//     });

//     // Populate coating_type dynamically
//     if (coatingTypeSelect.getValue(true) === '') {
//         const coatingOptions = Object.keys(coatingCosts).map(coating => ({
//             value: coating,
//             label: coating,
//         }));
//         coatingTypeSelect.setChoices(coatingOptions, 'value', 'label', true);
//     }

//     // Make coating cost fields readonly
//     ['blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'].forEach(name => {
//         document.querySelector(`input[name="${name}"]`).setAttribute('readonly', true);
//     });

//     // Handle Excel file upload
//     document.getElementById('excelUpload').addEventListener('change', function(e) {
//         const file = e.target.files[0];
//         if (file) {
//             uploadedFileName = file.name; // Use uploaded file's name for download
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 const data = new Uint8Array(e.target.result);
//                 const workbook = XLSX.read(data, { type: 'array' });
//                 const sheetName = workbook.SheetNames[0];
//                 const worksheet = workbook.Sheets[sheetName];
//                 const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

//                 if (jsonData.length > 0) {
//                     excelData.headers = jsonData[0]; // First row as headers
//                     excelData.rows = jsonData.slice(1).filter(row => row.some(cell => cell !== undefined && cell !== '')); // Filter out empty rows
//                 } else {
//                     excelData.headers = []; // Blank sheet
//                     excelData.rows = [];
//                 }
//             };
//             reader.readAsArrayBuffer(file);
//         }
//     });

//     // Handle Save button
//     document.getElementById('saveButton').addEventListener('click', function() {
//         calculateFields(); // Ensure latest calculations
//         saveEstimation(); // Save the current estimation
//         alert('Estimation saved!'); // Feedback to user
//     });

//     // Handle Download button
//     document.getElementById('downloadButton').addEventListener('click', function() {
//         if (savedEstimations.length === 0 && excelData.rows.length === 0) {
//             alert('No estimations to download!');
//             return;
//         }
//         downloadExcel(); // Download all saved estimations
//     });

//     // Initial call to update operation boxes
//     updateOperationBoxes();
// });

// // Show/hide fields based on type selection
// document.querySelector('#type').addEventListener('change', function() {
//     const type = this.value;
//     const diaField = document.querySelector('label[for="dia"]');
//     const lengthField = document.querySelector('label[for="length"]');
//     const widthField = document.querySelector('label[for="width"]');
//     const thicknessField = document.querySelector('label[for="thickness"]');
//     const rmwstrField = document.querySelector('label[for="rmw_str"]');

//     diaField.classList.add('hidden');
//     lengthField.classList.add('hidden');
//     widthField.classList.add('hidden');
//     thicknessField.classList.add('hidden');
//     rmwstrField.classList.add('hidden');

//     if (type === 'Cyl') {
//         diaField.classList.remove('hidden');
//         lengthField.classList.remove('hidden');
//     } else if (type === 'Pri') {
//         lengthField.classList.remove('hidden');
//         widthField.classList.remove('hidden');
//         thicknessField.classList.remove('hidden');
//     } else if (type === 'Str') {
//         rmwstrField.classList.remove('hidden');
//     }
//     calculateFields();
// });

// // Show/hide fields based on operation selection
// document.querySelector('#operation').addEventListener('change', function() {
//     const operations = Array.from(this.selectedOptions).map(option => option.value).filter(op => op !== '');
//     updateOperationBoxes();
//     updateOperationFields(operations);
//     updateHoleTypeField(operations);
//     calculateFields();
// });

// // Show/hide fields based on hole type selection
// document.querySelector('#hole_type').addEventListener('change', function() {
//     updateHoleTypeFields();
//     calculateFields();
// });

// // Function to update operation boxes
// function updateOperationBoxes() {
//     const operationSelect = document.querySelector('#operation');
//     const selectedOperations = Array.from(operationSelect.selectedOptions)
//         .map(option => option.value)
//         .filter(op => op !== '');
//     const container = document.querySelector('#operation-box-container');
//     container.innerHTML = ''; // Clear existing boxes

//     selectedOperations.forEach(operation => {
//         const box = document.createElement('div');
//         box.className = 'operation-box';
//         box.textContent = operation;
//         container.appendChild(box);
//     });
// }

// // Function to update fields based on selected operations
// function updateOperationFields(operations) {
//     const fmField = document.querySelector('label:has(input[name="fm"])');
//     const fmSideQField = document.querySelector('label:has(#fm_side)');
//     const fmSideField = document.querySelector('label:has(input[name="fm_side_cost"])');
//     const fmLField = document.querySelector('label:has(input[name="fm_l"])');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost', 
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14', 
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26', 
//         'hole_m30', 'hole_m36', 'tap_hole_cost', 'c_bore_m3_m5', 'c_bore_m6_m10', 
//         'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost', 'bsp_tap_1_8_1_4', 
//         'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost', 
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling', 
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
//     const grindingFields = ['sg', 'sgl'];
//     const heatTreatmentFields = ['ht_required', 'ht'];
//     const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
//     const vmcFields = ['vmc'];
//     const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
//     const cgFields = ['cg'];
//     const turningFields = ['turning'];
//     const cncTurningFields = ['cnc_turning'];
//     const jgFields = ['jg'];
//     const sparkingFields = ['sparking'];

//     // Hide all operation-related fields initially
//     fmField.classList.add('hidden');
//     fmSideQField.classList.add('hidden');
//     fmSideField.classList.add('hidden');
//     fmLField.classList.add('hidden');
//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     heatTreatmentFields.forEach(name => {
//         const field = name === 'ht_required' ? 
//             document.querySelector(`label:has(#${name})`) : 
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     coatingFields.forEach(name => {
//         const field = name === 'coating_type' ? 
//             document.querySelector(`label:has(#${name})`) : 
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));

//     // Show fields based on selected operations
//     operations.forEach(operation => {
//         if (operation === 'Milling') {
//             fmField.classList.remove('hidden');
//             fmSideQField.classList.remove('hidden');
//             fmSideField.classList.remove('hidden');
//             fmLField.classList.remove('hidden');
//         }
//         if (operation === 'Drilling') {
//             document.querySelector('label[for="hole_type"]').classList.remove('hidden');
//         }
//         if (operation === 'Grinding') {
//             grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Heat Treatment') {
//             heatTreatmentFields.forEach(name => {
//                 const field = name === 'ht_required' ? 
//                     document.querySelector(`label:has(#${name})`) : 
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//         }
//         if (operation === 'Coating') {
//             coatingFields.forEach(name => {
//                 const field = name === 'coating_type' ? 
//                     document.querySelector(`label:has(#${name})`) : 
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//             updateCoatingFields();
//         }
//         if (operation === 'VMC') {
//             vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Wire Cut') {
//             wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CG') {
//             cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Turning') {
//             turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CNC Turning') {
//             cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'JG') {
//             jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Sparking') {
//             sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//     });

//     // Update hole type fields based on current selection
//     updateHoleTypeFields();
// }

// // Function to update hole type field visibility
// function updateHoleTypeField(operations) {
//     const holeTypeField = document.querySelector('label[for="hole_type"]');
//     if (!operations.includes('Drilling')) {
//         holeTypeField.classList.add('hidden');
//         // Reset hole type selection and hide related fields
//         document.querySelector('#hole_type').value = '';
//         updateHoleTypeFields();
//     }
// }

// // Function to update fields based on selected hole type
// function updateHoleTypeFields() {
//     const holeType = document.querySelector('#hole_type').value;
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost', 
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14', 
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26', 
//         'hole_m30', 'hole_m36', 'tap_hole_cost', 'c_bore_m3_m5', 'c_bore_m6_m10', 
//         'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost', 'bsp_tap_1_8_1_4', 
//         'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost', 
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling', 
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];

//     // Hide all hole-related fields initially
//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));

//     // Show fields based on selected hole type
//     if (document.querySelector('#operation').selectedOptions && Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).includes('Drilling')) {
//         if (holeType === 'Free Hole') {
//             ['hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost'].forEach(name => 
//                 document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         } else if (holeType === 'Tap Hole') {
//             ['hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14', 
//              'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26', 
//              'hole_m30', 'hole_m36', 'tap_hole_cost'].forEach(name => 
//                 document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         } else if (holeType === 'C Bore') {
//             ['c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost'].forEach(name => 
//                 document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         } else if (holeType === 'BSP Tap') {
//             ['bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost'].forEach(name => 
//                 document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         } else if (holeType === 'GD Hole') {
//             ['gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling', 'gd_cost_dro_radial_drilling'].forEach(name => 
//                 document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         } else if (holeType === 'Spot Face') {
//             ['spot_face'].forEach(name => 
//                 document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         } else if (holeType === 'H7 Hole') {
//             ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'].forEach(name => 
//                 document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//     }
// }

// // Show/hide coating-specific fields based on coating_type selection
// document.querySelector('#coating_type').addEventListener('change', function() {
//     updateCoatingFields();
//     calculateFields();
// });

// // Function to handle coating field visibility
// function updateCoatingFields() {
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value);
//     const coatingType = document.querySelector('#coating_type').value;
//     const blackeningField = document.querySelector('label:has(input[name="blackening"])');
//     const enpField = document.querySelector('label:has(input[name="enp"])');
//     const flashChromeField = document.querySelector('label:has(input[name="flash_chrome"])');
//     const pcField = document.querySelector('label:has(input[name="pc"])');
//     const zincBlueField = document.querySelector('label:has(input[name="zinc_blue"])');

//     blackeningField.classList.add('hidden');
//     enpField.classList.add('hidden');
//     flashChromeField.classList.add('hidden');
//     pcField.classList.add('hidden');
//     zincBlueField.classList.add('hidden');

//     if (operations.includes('Coating')) {
//         if (coatingType === 'Blackening') blackeningField.classList.remove('hidden');
//         if (coatingType === 'ENP') enpField.classList.remove('hidden');
//         if (coatingType === 'Flash Chrome') flashChromeField.classList.remove('hidden');
//         if (coatingType === 'PC') pcField.classList.remove('hidden');
//         if (coatingType === 'Zinc Blue') zincBlueField.classList.remove('hidden');
//     }
// }

// // Auto-calculate fields when inputs change
// const inputs = document.querySelectorAll(
//     'input[name="dia"], input[name="length"], input[name="width"], input[name="thickness"], input[name="rmw_str"], ' +
//     '#type, #material, #operation, #fm_side, #hole_type, ' +
//     'input[name="hole_4_8"], input[name="hole_9_13"], input[name="hole_15_22"], ' +
//     'input[name="hole_m4"], input[name="hole_m5"], input[name="hole_m6"], input[name="hole_m8"], ' +
//     'input[name="hole_m10"], input[name="hole_m12"], input[name="hole_m14"], input[name="hole_m16"], ' +
//     'input[name="hole_m18"], input[name="hole_m20"], input[name="hole_m22"], input[name="hole_m24"], ' +
//     'input[name="hole_m25"], input[name="hole_m26"], input[name="hole_m30"], input[name="hole_m36"], ' +
//     'input[name="c_bore_m3_m5"], input[name="c_bore_m6_m10"], input[name="c_bore_m12"], ' +
//     'input[name="c_bore_m14"], input[name="c_bore_m16"], ' +
//     'input[name="bsp_tap_1_8_1_4"], input[name="bsp_tap_1_2_3_8"], input[name="bsp_tap_1_inch"], ' +
//     'input[name="bsp_tap_1_5_2_inch"], input[name="gd_total_hole_length"], ' +
//     'input[name="gd_total_hole_length_dro_radial_drilling"], ' +
//     'input[name="4_5_h7"], input[name="6_8_h7"], input[name="10_14_h7"], ' +
//     'input[name="15_18_h7"], input[name="20_25_h7"], input[name="25_30_h7"], ' +
//     'input[name="sg"], input[name="sgl"], #ht_required, input[name="ht"], ' +
//     'input[name="fwcam"], #coating_type, input[name="blackening"], ' +
//     'input[name="enp"], input[name="flash_chrome"], input[name="pc"], input[name="zinc_blue"], ' +
//     'input[name="vmc"], input[name="turning"], input[name="cg"], input[name="wire_cut_sp"], ' +
//     'input[name="cnc_turning"], input[name="jg"], input[name="sparking"], input[name="fm"], ' +
//     'input[name="profit_percent"]'
// );
// inputs.forEach(input => input.addEventListener('change', calculateFields));

// function calculateFields() {
//     const type = document.querySelector('#type').value;
//     const material = document.querySelector('#material').value;
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).filter(op => op !== '');
//     const fmSide = document.querySelector('#fm_side').value === "True";
//     const htRequired = document.querySelector('#ht_required').value === "True";
//     const coatingType = document.querySelector('#coating_type').value;
//     const dia = parseFloat(document.querySelector('input[name="dia"]').value) || 0;
//     const length = parseFloat(document.querySelector('input[name="length"]').value) || 0;
//     const width = parseFloat(document.querySelector('input[name="width"]').value) || 0;
//     const thickness = parseFloat(document.querySelector('input[name="thickness"]').value) || 0;
//     const rmwStr = parseFloat(document.querySelector('input[name="rmw_str"]').value) || 0;
//     const fwcam = parseFloat(document.querySelector('input[name="fwcam"]').value) || 0;
//     const profitPercent = parseFloat(document.querySelector('input[name="profit_percent"]').value) || 0;
//     const density = materials[material]?.Density_gm_cc || 0;
//     const costPerKg = materials[material]?.Cost_per_KG || 0;
//     const fmPerSqmm = materials[material]?.FM_per_sqmm || 0;
//     const fmAfterHtPerSqmm = materials[material]?.FM_AFTER_HT_per_sqmm || 0;
//     const htKg = materials[material]?.HT_KG || 0;
//     let rmwCalc = 0;
//     let rmw = 0;
//     let rmc = 0;
//     let fm = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm"]').value) || 0) : 0;
//     let fmSideCost = 0;
//     let fmL = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm_l"]').value) || 0) : 0;
//     let freeHoleCost = 0;
//     let tapHoleCost = 0;
//     let cBoreCost = 0;
//     let bspTapCost = 0;
//     let gdCostGdMachine = 0;
//     let gdCostDroRadialDrilling = 0;
//     let h7HoleCost = 0;
//     let sg = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sg"]').value) || 0) : 0;
//     let sgl = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sgl"]').value) || 0) : 0;
//     let ht = 0;
//     let blackeningCost = 0;
//     let enpCost = 0;
//     let flashChromeCost = 0;
//     let pcCost = 0;
//     let zincBlueCost = 0;
//     let vmc = operations.includes("VMC") ? (parseFloat(document.querySelector('input[name="vmc"]').value) || 0) : 0;
//     let turning = operations.includes("Turning") ? (parseFloat(document.querySelector('input[name="turning"]').value) || 0) : 0;
//     let cg = operations.includes("CG") ? (parseFloat(document.querySelector('input[name="cg"]').value) || 0) : 0;
//     let wireCutSp = operations.includes("Wire Cut") ? (parseFloat(document.querySelector('input[name="wire_cut_sp"]').value) || 0) : 0;
//     let cncTurning = operations.includes("CNC Turning") ? (parseFloat(document.querySelector('input[name="cnc_turning"]').value) || 0) : 0;
//     let jg = operations.includes("JG") ? (parseFloat(document.querySelector('input[name="jg"]').value) || 0) : 0;
//     let sparking = operations.includes("Sparking") ? (parseFloat(document.querySelector('input[name="sparking"]').value) || 0) : 0;
//     let engraving = parseFloat(document.querySelector('input[name="engraving"]').value) || 0;

//     // Calculate RMW_Calc
//     if (type === "Pri" && length > 0 && width > 0 && thickness > 0) {
//         rmwCalc = ((length * width * thickness / 1000) * density) / 1000;
//     } else if (type === "Cyl" && dia > 0 && length > 0) {
//         rmwCalc = ((3.14159 * (dia * dia) * length / 4 / 1000) * density) / 1000;
//     }

//     // Calculate RMW
//     if (type === "Str" && rmwStr > 0) {
//         rmw = rmwStr;
//     } else if (rmwCalc > 0) {
//         rmw = rmwCalc;
//     }

//     // Calculate RMC
//     if (rmw > 0 && costPerKg > 0) {
//         rmc = rmw * costPerKg;
//     }

//     // Calculate FM only when Milling is selected
//     if (operations.includes("Milling") && type === "Pri" && length >= 250 && width >= 250) {
//         const fmRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fm = length * width * fmRate;
//     }

//     // Calculate FM_Side
//     if (operations.includes("Milling") && type === "Pri" && fmSide && length > 0 && width > 0 && thickness > 0) {
//         const fmSideRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fmSideCost = 2 * (length + width) * thickness * fmSideRate;
//     }

//     // Calculate Free_hole_cost
//     if (operations.includes("Drilling")) {
//         const hole_4_8 = parseFloat(document.querySelector('input[name="hole_4_8"]').value) || 0;
//         const hole_9_13 = parseFloat(document.querySelector('input[name="hole_9_13"]').value) || 0;
//         const hole_15_22 = parseFloat(document.querySelector('input[name="hole_15_22"]').value) || 0;
//         freeHoleCost = (hole_4_8 * drillingCosts["Hole_4_8"].Cost) +
//                        (hole_9_13 * drillingCosts["Hole_9_13"].Cost) +
//                        (hole_15_22 * drillingCosts["Hole_15_22"].Cost);
//     }

//     // Calculate Tap_hole_cost
//     if (operations.includes("Drilling")) {
//         const hole_m4 = parseFloat(document.querySelector('input[name="hole_m4"]').value) || 0;
//         const hole_m5 = parseFloat(document.querySelector('input[name="hole_m5"]').value) || 0;
//         const hole_m6 = parseFloat(document.querySelector('input[name="hole_m6"]').value) || 0;
//         const hole_m8 = parseFloat(document.querySelector('input[name="hole_m8"]').value) || 0;
//         const hole_m10 = parseFloat(document.querySelector('input[name="hole_m10"]').value) || 0;
//         const hole_m12 = parseFloat(document.querySelector('input[name="hole_m12"]').value) || 0;
//         const hole_m14 = parseFloat(document.querySelector('input[name="hole_m14"]').value) || 0;
//         const hole_m16 = parseFloat(document.querySelector('input[name="hole_m16"]').value) || 0;
//         const hole_m18 = parseFloat(document.querySelector('input[name="hole_m18"]').value) || 0;
//         const hole_m20 = parseFloat(document.querySelector('input[name="hole_m20"]').value) || 0;
//         const hole_m22 = parseFloat(document.querySelector('input[name="hole_m22"]').value) || 0;
//         const hole_m24 = parseFloat(document.querySelector('input[name="hole_m24"]').value) || 0;
//         const hole_m25 = parseFloat(document.querySelector('input[name="hole_m25"]').value) || 0;
//         const hole_m26 = parseFloat(document.querySelector('input[name="hole_m26"]').value) || 0;
//         const hole_m30 = parseFloat(document.querySelector('input[name="hole_m30"]').value) || 0;
//         const hole_m36 = parseFloat(document.querySelector('input[name="hole_m36"]').value) || 0;
//         tapHoleCost = (hole_m4 * drillingCosts["Hole_M4"].Cost) +
//                       (hole_m5 * drillingCosts["Hole_M5"].Cost) +
//                       (hole_m6 * drillingCosts["Hole_M6"].Cost) +
//                       (hole_m8 * drillingCosts["Hole_M8"].Cost) +
//                       (hole_m10 * drillingCosts["Hole_M10"].Cost) +
//                       (hole_m12 * drillingCosts["Hole_M12"].Cost) +
//                       (hole_m14 * drillingCosts["Hole_M14"].Cost) +
//                       (hole_m16 * drillingCosts["Hole_M16"].Cost) +
//                       (hole_m18 * drillingCosts["Hole_M18"].Cost) +
//                       (hole_m20 * drillingCosts["Hole_M20"].Cost) +
//                       (hole_m22 * drillingCosts["Hole_M22"].Cost) +
//                       (hole_m24 * drillingCosts["Hole_M24"].Cost) +
//                       (hole_m25 * drillingCosts["Hole_M25"].Cost) +
//                       (hole_m26 * drillingCosts["Hole_M26"].Cost) +
//                       (hole_m30 * drillingCosts["Hole_M30"].Cost) +
//                       (hole_m36 * drillingCosts["Hole_M36"].Cost);
//     }

//     // Calculate C_Bore_Cost
//     if (operations.includes("Drilling")) {
//         const c_bore_m3_m5 = parseFloat(document.querySelector('input[name="c_bore_m3_m5"]').value) || 0;
//         const c_bore_m6_m10 = parseFloat(document.querySelector('input[name="c_bore_m6_m10"]').value) || 0;
//         const c_bore_m12 = parseFloat(document.querySelector('input[name="c_bore_m12"]').value) || 0;
//         const c_bore_m14 = parseFloat(document.querySelector('input[name="c_bore_m14"]').value) || 0;
//         const c_bore_m16 = parseFloat(document.querySelector('input[name="c_bore_m16"]').value) || 0;
//         cBoreCost = (c_bore_m3_m5 * drillingCosts["C_bore_M3_M5"].Cost) +
//                     (c_bore_m6_m10 * drillingCosts["C_bore_M6_M10"].Cost) +
//                     (c_bore_m12 * drillingCosts["C_bore_M12"].Cost) +
//                     (c_bore_m14 * drillingCosts["C_bore_M14"].Cost) +
//                     (c_bore_m16 * drillingCosts["C_bore_M16"].Cost);
//     }

//     // Calculate BSP_TAP_COST
//     if (operations.includes("Drilling")) {
//         const bsp_tap_1_8_1_4 = parseFloat(document.querySelector('input[name="bsp_tap_1_8_1_4"]').value) || 0;
//         const bsp_tap_1_2_3_8 = parseFloat(document.querySelector('input[name="bsp_tap_1_2_3_8"]').value) || 0;
//         const bsp_tap_1_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_inch"]').value) || 0;
//         const bsp_tap_1_5_2_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_5_2_inch"]').value) || 0;
//         bspTapCost = (bsp_tap_1_8_1_4 * drillingCosts["BSP_TAP_1/8_1/4"].Cost) +
//                      (bsp_tap_1_2_3_8 * drillingCosts["BSP_TAP_1/2_3/8"].Cost) +
//                      (bsp_tap_1_inch * drillingCosts["BSP_TAP_1_inch"].Cost) +
//                      (bsp_tap_1_5_2_inch * drillingCosts["BSP_TAP_1.5_2_inch"].Cost);
//     }

//     // Calculate GD_COST_GD_MACHINE
//     if (operations.includes("Drilling")) {
//         const gd_total_hole_length = parseFloat(document.querySelector('input[name="gd_total_hole_length"]').value) || 0;
//         gdCostGdMachine = gd_total_hole_length * drillingCosts["GD_TOTAL_HOLE_LENGTH"].Cost;
//     }

//     // Calculate GD_COST_DRO_RADIAL DRILLING
//     if (operations.includes("Drilling")) {
//         const gd_total_hole_length_dro_radial_drilling = parseFloat(document.querySelector('input[name="gd_total_hole_length_dro_radial_drilling"]').value) || 0;
//         gdCostDroRadialDrilling = gd_total_hole_length_dro_radial_drilling * drillingCosts["GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING"].Cost;
//     }

//     // Calculate H7_HOLE_COST
//     if (operations.includes("Drilling")) {
//         const h7_4_5 = parseFloat(document.querySelector('input[name="4_5_h7"]').value) || 0;
//         const h7_6_8 = parseFloat(document.querySelector('input[name="6_8_h7"]').value) || 0;
//         const h7_10_14 = parseFloat(document.querySelector('input[name="10_14_h7"]').value) || 0;
//         const h7_15_18 = parseFloat(document.querySelector('input[name="15_18_h7"]').value) || 0;
//         const h7_20_25 = parseFloat(document.querySelector('input[name="20_25_h7"]').value) || 0;
//         const h7_25_30 = parseFloat(document.querySelector('input[name="25_30_h7"]').value) || 0;
//         h7HoleCost = (h7_4_5 * drillingCosts["4_5_H7"].Cost) +
//                      (h7_6_8 * drillingCosts["6_8_H7"].Cost) +
//                      (h7_10_14 * drillingCosts["10_14_H7"].Cost) +
//                      (h7_15_18 * drillingCosts["15_18_H7"].Cost) +
//                      (h7_20_25 * drillingCosts["20_25_H7"].Cost) +
//                      (h7_25_30 * drillingCosts["25_30_H7"].Cost);
//     }

//     // Calculate SG only when Grinding is selected
//     if (operations.includes("Grinding") && type === "Pri" && length >= 250 && width >= 250) {
//         sg = length * width * fmPerSqmm;
//     }

//     // Calculate HT
//     if (operations.includes("Heat Treatment") && htRequired) {
//         ht = rmw * htKg;
//     }

//     // Calculate Coating Costs
//     if (operations.includes("Coating") && length > 0 && width > 0 && coatingType) {
//         const areaCm2 = (length / 10) * (width / 10);
//         blackeningCost = coatingType === "Blackening" ? fwcam * coatingCosts["Blackening"].Cost : 0;
//         enpCost = coatingType === "ENP" ? fwcam * coatingCosts["ENP"].Cost : 0;
//         flashChromeCost = coatingType === "Flash Chrome" ? areaCm2 * coatingCosts["Flash Chrome"].Cost : 0;
//         pcCost = coatingType === "PC" ? fwcam * coatingCosts["PC"].Cost : 0;
//         zincBlueCost = coatingType === "Zinc Blue" ? fwcam * coatingCosts["Zinc Blue"].Cost : 0;
//     }

//     // Calculate Total
//     const coatingSum = blackeningCost + enpCost + flashChromeCost + pcCost + zincBlueCost;
//     const total = (
//         engraving + sgl + h7HoleCost + ht + gdCostDroRadialDrilling + 
//         gdCostGdMachine + bspTapCost + cBoreCost + tapHoleCost + freeHoleCost + 
//         fmL + fmSideCost + fm + rmc + vmc + turning + cg + wireCutSp + cncTurning + 
//         jg + sparking + coatingSum
//     );

//     // Calculate With Profit
//     const withProfit = total * (1 + (profitPercent / 100));

//     // Update fields
//     const rmwCalcField = document.querySelector('input[name="rmw_calc"]');
//     const rmwField = document.querySelector('input[name="rmw"]');
//     const rmcField = document.querySelector('input[name="rmc"]');
//     const fmField = document.querySelector('input[name="fm"]');
//     const fmSideCostField = document.querySelector('input[name="fm_side_cost"]');
//     const fmLField = document.querySelector('input[name="fm_l"]');
//     const freeHoleCostField = document.querySelector('input[name="free_hole_cost"]');
//     const tapHoleCostField = document.querySelector('input[name="tap_hole_cost"]');
//     const cBoreCostField = document.querySelector('input[name="c_bore_cost"]');
//     const bspTapCostField = document.querySelector('input[name="bsp_tap_cost"]');
//     const gdCostGdMachineField = document.querySelector('input[name="gd_cost_gd_machine"]');
//     const gdCostDroRadialDrillingField = document.querySelector('input[name="gd_cost_dro_radial_drilling"]');
//     const h7HoleCostField = document.querySelector('input[name="h7_hole_cost"]');
//     const sgField = document.querySelector('input[name="sg"]');
//     const sglField = document.querySelector('input[name="sgl"]');
//     const htField = document.querySelector('input[name="ht"]');
//     const blackeningField = document.querySelector('input[name="blackening"]');
//     const enpField = document.querySelector('input[name="enp"]');
//     const flashChromeField = document.querySelector('input[name="flash_chrome"]');
//     const pcField = document.querySelector('input[name="pc"]');
//     const zincBlueField = document.querySelector('input[name="zinc_blue"]');
//     const vmcField = document.querySelector('input[name="vmc"]');
//     const turningField = document.querySelector('input[name="turning"]');
//     const cgField = document.querySelector('input[name="cg"]');
//     const wireCutSpField = document.querySelector('input[name="wire_cut_sp"]');
//     const cncTurningField = document.querySelector('input[name="cnc_turning"]');
//     const jgField = document.querySelector('input[name="jg"]');
//     const sparkingField = document.querySelector('input[name="sparking"]');
//     const totalField = document.querySelector('input[name="total"]');
//     const withProfitField = document.querySelector('input[name="with_profit"]');

//     rmwCalcField.value = rmwCalc > 0 ? rmwCalc.toFixed(2) : '';
//     rmwField.value = rmw > 0 ? rmw.toFixed(2) : '';
//     rmcField.value = rmc > 0 ? rmc.toFixed(2) : '';
//     fmField.value = fm > 0 ? fm.toFixed(2) : (operations.includes("Milling") ? fmField.value : '');
//     fmSideCostField.value = fmSideCost > 0 ? fmSideCost.toFixed(2) : '';
//     fmLField.value = fmL > 0 ? fmL.toFixed(2) : (operations.includes("Milling") ? fmLField.value : '');
//     freeHoleCostField.value = freeHoleCost > 0 ? freeHoleCost.toFixed(2) : '';
//     tapHoleCostField.value = tapHoleCost > 0 ? tapHoleCost.toFixed(2) : '';
//     cBoreCostField.value = cBoreCost > 0 ? cBoreCost.toFixed(2) : '';
//     bspTapCostField.value = bspTapCost > 0 ? bspTapCost.toFixed(2) : '';
//     gdCostGdMachineField.value = gdCostGdMachine > 0 ? gdCostGdMachine.toFixed(2) : '';
//     gdCostDroRadialDrillingField.value = gdCostDroRadialDrilling > 0 ? gdCostDroRadialDrilling.toFixed(2) : '';
//     h7HoleCostField.value = h7HoleCost > 0 ? h7HoleCost.toFixed(2) : '';
//     sgField.value = sg > 0 ? sg.toFixed(2) : (operations.includes("Grinding") ? sgField.value : '');
//     sglField.value = sgl > 0 ? sgl.toFixed(2) : (operations.includes("Grinding") ? sglField.value : '');
//     htField.value = ht > 0 ? ht.toFixed(2) : '';
//     blackeningField.value = blackeningCost > 0 ? blackeningCost.toFixed(2) : '';
//     enpField.value = enpCost > 0 ? enpCost.toFixed(2) : '';
//     flashChromeField.value = flashChromeCost > 0 ? flashChromeCost.toFixed(2) : '';
//     pcField.value = pcCost > 0 ? pcCost.toFixed(2) : '';
//     zincBlueField.value = zincBlueCost > 0 ? zincBlueCost.toFixed(2) : '';
//     vmcField.value = vmc > 0 ? vmc.toFixed(2) : (operations.includes("VMC") ? vmcField.value : '');
//     turningField.value = turning > 0 ? turning.toFixed(2) : (operations.includes("Turning") ? turningField.value : '');
//     cgField.value = cg > 0 ? cg.toFixed(2) : (operations.includes("CG") ? cgField.value : '');
//     wireCutSpField.value = wireCutSp > 0 ? wireCutSp.toFixed(2) : (operations.includes("Wire Cut") ? wireCutSpField.value : '');
//     cncTurningField.value = cncTurning > 0 ? cncTurning.toFixed(2) : (operations.includes("CNC Turning") ? cncTurningField.value : '');
//     jgField.value = jg > 0 ? jg.toFixed(2) : (operations.includes("JG") ? jgField.value : '');
//     sparkingField.value = sparking > 0 ? sparking.toFixed(2) : (operations.includes("Sparking") ? sparkingField.value : '');
//     totalField.value = total > 0 ? total.toFixed(2) : '';
//     withProfitField.value = withProfit > 0 ? withProfit.toFixed(2) : '';
// }

// // Function to save the current estimation
// function saveEstimation() {
//     const form = document.getElementById('costForm');
//     const formData = new FormData(form);
//     const estimationData = {};

//     // Collect all form field values
//     formData.forEach((value, key) => {
//         if (key === 'operation') {
//             // Handle multiple selections for operation
//             if (!estimationData[key]) estimationData[key] = [];
//             estimationData[key].push(value);
//         } else {
//             estimationData[key] = value;
//         }
//     });

//     // Convert operation array to comma-separated string
//     if (estimationData['operation']) {
//         estimationData['operation'] = estimationData['operation'].join(', ');
//     }

//     // Add the estimation to the savedEstimations array
//     savedEstimations.push(estimationData);
// }

// //Function to download all saved estimations
// function downloadExcel() {
//     // Define all possible headers (form field names)
//     const allHeaders = Array.from(document.getElementById('costForm').elements)
//         .filter(el => el.name && el.name !== 'operation') // Exclude empty names and handle operation separately
//         .map(el => el.name)
//         .concat(['operation'])
//         .filter((v, i, a) => a.indexOf(v) === i); // Remove duplicates

//     // Use uploaded headers if available, otherwise use form field names
//     const headers = excelData.headers.length > 0 ? excelData.headers : allHeaders;

//     // Map saved estimations to rows, ensuring they match header order
//     const estimationRows = savedEstimations.map(estimation => 
//         headers.map(header => estimation[header] || '')
//     );

//     // Combine uploaded data (if any) with saved estimations, filtering out empty rows
//     const allRows = [...excelData.rows, ...estimationRows].filter(row => row.some(cell => cell !== undefined && cell !== ''));

//     // Create worksheet data: headers + rows
//     const wsData = [headers, ...allRows];

//     // Create worksheet
//     const ws = XLSX.utils.aoa_to_sheet(wsData);

//     // Create workbook and add worksheet
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Cost Estimation');

//     // Download the file
//     XLSX.writeFile(wb, uploadedFileName);
// }

// // Initially hide fields on page load
// const holeFields = [
//     'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost', 
//     'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14', 
//     'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26', 
//     'hole_m30', 'hole_m36', 'tap_hole_cost', 'c_bore_m3_m5', 'c_bore_m6_m10', 
//     'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost', 'bsp_tap_1_8_1_4', 
//     'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost', 
//     'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling', 
//     'gd_cost_dro_radial_drilling', 'spot_face'
// ];
// const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
// const fmFields = ['fm', 'fm_side', 'fm_side_cost', 'fm_l'];
// const grindingFields = ['sg', 'sgl'];
// const heatTreatmentFields = ['ht_required', 'ht'];
// const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
// const vmcFields = ['vmc'];
// const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
// const cgFields = ['cg'];
// const turningFields = ['turning'];
// const cncTurningFields = ['cnc_turning'];
// const jgFields = ['jg'];
// const sparkingFields = ['sparking'];

// holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// fmFields.forEach(name => {
//     const field = name === 'fm_side' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// heatTreatmentFields.forEach(name => {
//     const field = name === 'ht_required' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// coatingFields.forEach(name => {
//     const field = name === 'coating_type' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));

























// // static/script.js
// // Material density and costs
// const materials = {
//     "MS": {"Density_gm_cc": 7.85, "Cost_per_KG": 80.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "C45": {"Density_gm_cc": 7.85, "Cost_per_KG": 95.0, "FM_per_sqmm": 0.005, "HT_KG": 25.0, "FM_AFTER_HT_per_sqmm": 0.007},
//     "EN24": {"Density_gm_cc": 7.85, "Cost_per_KG": 125.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN354": {"Density_gm_cc": 7.85, "Cost_per_KG": 145.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "20MnCr5": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN47": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN31": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN19": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS410": {"Density_gm_cc": 7.85, "Cost_per_KG": 220.0, "FM_per_sqmm": 0.008, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-7075": {"Density_gm_cc": 2.73, "Cost_per_KG": 730.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "D2": {"Density_gm_cc": 7.85, "Cost_per_KG": 350.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "OHNS": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "DELRIN": {"Density_gm_cc": 1.42, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "NYLON": {"Density_gm_cc": 1.14, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "HYLEM": {"Density_gm_cc": 1.95, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "BRASS": {"Density_gm_cc": 8.5, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "COPPER": {"Density_gm_cc": 8.93, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CARBIDE": {"Density_gm_cc": 15.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CASTING": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "WELDMENTS": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-6061": {"Density_gm_cc": 2.73, "Cost_per_KG": 455.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS304": {"Density_gm_cc": 7.85, "Cost_per_KG": 245.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0}
// };

// // Drilling costs
// const drillingCosts = {
//     "Hole_4_8": {"Cost": 25},
//     "Hole_9_13": {"Cost": 30},
//     "Hole_15_22": {"Cost": 35},
//     "Hole_M4": {"Cost": 20},
//     "Hole_M5": {"Cost": 25},
//     "Hole_M6": {"Cost": 30},
//     "Hole_M8": {"Cost": 40},
//     "Hole_M10": {"Cost": 50},
//     "Hole_M12": {"Cost": 60},
//     "Hole_M14": {"Cost": 60},
//     "Hole_M16": {"Cost": 70},
//     "Hole_M18": {"Cost": 70},
//     "Hole_M20": {"Cost": 120},
//     "Hole_M22": {"Cost": 120},
//     "Hole_M24": {"Cost": 120},
//     "Hole_M25": {"Cost": 200},
//     "Hole_M26": {"Cost": 200},
//     "Hole_M30": {"Cost": 250},
//     "Hole_M36": {"Cost": 300},
//     "C_bore_M3_M5": {"Cost": 30},
//     "C_bore_M6_M10": {"Cost": 40},
//     "C_bore_M12": {"Cost": 50},
//     "C_bore_M14": {"Cost": 60},
//     "C_bore_M16": {"Cost": 80},
//     "BSP_TAP_1/8_1/4": {"Cost": 45},
//     "BSP_TAP_1/2_3/8": {"Cost": 60},
//     "BSP_TAP_1_inch": {"Cost": 120},
//     "BSP_TAP_1.5_2_inch": {"Cost": 200},
//     "GD_TOTAL_HOLE_LENGTH": {"Cost": 3},
//     "GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING": {"Cost": 2},
//     "4_5_H7": {"Cost": 80},
//     "6_8_H7": {"Cost": 100},
//     "10_14_H7": {"Cost": 120},
//     "15_18_H7": {"Cost": 160},
//     "20_25_H7": {"Cost": 220},
//     "25_30_H7": {"Cost": 280},
//     "Spot_face": {"Cost": 30}
// };

// // Coating costs
// const coatingCosts = {
//     "Blackening": {"Cost": 20},
//     "ENP": {"Cost": 180},
//     "Flash Chrome": {"Cost": 0.6},
//     "PC": {"Cost": 20},
//     "Zinc Blue": {"Cost": 30}
// };

// // Store Excel data in memory
// let excelData = { headers: [], rows: [] };
// let uploadedFileName = 'cost_estimation.xlsx'; // Default filename if no file uploaded
// let savedEstimations = []; // Array to store multiple estimations

// // Initialize Choices.js and handle Excel upload
// document.addEventListener('DOMContentLoaded', () => {
//     const materialSelect = new Choices('#material', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Material',
//     });

//     const typeSelect = new Choices('#type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Type',
//     });

//     const operationSelect = new Choices('#operation', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Operations',
//         removeItemButton: true
//     });

//     const fmSideSelect = new Choices('#fm_side', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select FM Side',
//     });

//     const htRequiredSelect = new Choices('#ht_required', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select HT Required',
//     });

//     const coatingTypeSelect = new Choices('#coating_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Coating Type',
//     });

//     const holeTypeSelect = new Choices('#hole_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Hole Types',
//         removeItemButton: true
//     });

//     // Populate coating_type dynamically
//     if (coatingTypeSelect.getValue(true) === '') {
//         const coatingOptions = Object.keys(coatingCosts).map(coating => ({
//             value: coating,
//             label: coating,
//         }));
//         coatingTypeSelect.setChoices(coatingOptions, 'value', 'label', true);
//     }

//     // Make coating cost fields readonly
//     ['blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'].forEach(name => {
//         document.querySelector(`input[name="${name}"]`).setAttribute('readonly', true);
//     });

//     // Handle Excel file upload
//     document.getElementById('excelUpload').addEventListener('change', function(e) {
//         const file = e.target.files[0];
//         if (file) {
//             uploadedFileName = file.name;
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 const data = new Uint8Array(e.target.result);
//                 const workbook = XLSX.read(data, { type: 'array' });
//                 const sheetName = workbook.SheetNames[0];
//                 const worksheet = workbook.Sheets[sheetName];
//                 const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

//                 if (jsonData.length > 0) {
//                     excelData.headers = jsonData[0];
//                     excelData.rows = jsonData.slice(1).filter(row => row.some(cell => cell !== undefined && cell !== ''));
//                 } else {
//                     excelData.headers = [];
//                     excelData.rows = [];
//                 }
//             };
//             reader.readAsArrayBuffer(file);
//         }
//     });

//     // Handle Save button
//     document.getElementById('saveButton').addEventListener('click', function() {
//         calculateFields();
//         saveEstimation();
//         alert('Estimation saved!');
//     });

//     // Handle Download button
//     document.getElementById('downloadButton').addEventListener('click', function() {
//         if (savedEstimations.length === 0 && excelData.rows.length === 0) {
//             alert('No estimations to download!');
//             return;
//         }
//         downloadExcel();
//     });

//     // Initial call to update operation boxes
//     updateOperationBoxes();

//     // Hide all operation-related fields initially
//     const operationFields = [
//         'fm', 'fm_side', 'fm_side_cost', 'fm_l',
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face',
//         '4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost',
//         'sg', 'sgl', 'ht_required', 'ht',
//         'coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue',
//         'vmc', 'wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp', 'cg', 'turning',
//         'cnc_turning', 'jg', 'sparking'
//     ];
//     operationFields.forEach(name => {
//         const selector = name === 'fm_side' || name === 'ht_required' || name === 'coating_type' ?
//             `label:has(#${name})` : `label:has(input[name="${name}"])`;
//         document.querySelector(selector).classList.add('hidden');
//     });
// });

// // Show/hide fields based on type selection
// document.querySelector('#type').addEventListener('change', function() {
//     const type = this.value;
//     const diaField = document.querySelector('label[for="dia"]');
//     const lengthField = document.querySelector('label[for="length"]');
//     const widthField = document.querySelector('label[for="width"]');
//     const thicknessField = document.querySelector('label[for="thickness"]');
//     const rmwstrField = document.querySelector('label[for="rmw_str"]');

//     diaField.classList.add('hidden');
//     lengthField.classList.add('hidden');
//     widthField.classList.add('hidden');
//     thicknessField.classList.add('hidden');
//     rmwstrField.classList.add('hidden');

//     if (type === 'Cyl') {
//         diaField.classList.remove('hidden');
//         lengthField.classList.remove('hidden');
//     } else if (type === 'Pri') {
//         lengthField.classList.remove('hidden');
//         widthField.classList.remove('hidden');
//         thicknessField.classList.remove('hidden');
//     } else if (type === 'Str') {
//         rmwstrField.classList.remove('hidden');
//     }
//     calculateFields();
// });

// // Show/hide fields based on operation selection
// document.querySelector('#operation').addEventListener('change', function() {
//     const operations = Array.from(this.selectedOptions).map(option => option.value).filter(op => op !== '');
//     updateOperationBoxes();
//     updateOperationFields(operations);
//     calculateFields();
// });

// // Show/hide fields based on hole type selection
// document.querySelector('#hole_type').addEventListener('change', function() {
//     updateHoleTypeFields();
//     calculateFields();
// });

// // Function to update operation boxes
// function updateOperationBoxes() {
//     const operationSelect = document.querySelector('#operation');
//     const selectedOperations = Array.from(operationSelect.selectedOptions)
//         .map(option => option.value)
//         .filter(op => op !== '');
//     const container = document.querySelector('#operation-box-container');
//     container.innerHTML = '';

//     selectedOperations.forEach(operation => {
//         const box = document.createElement('div');
//         box.className = 'operation-box';
//         box.textContent = operation;
//         container.appendChild(box);
//     });
// }

// // Function to update fields based on selected operations
// function updateOperationFields(operations) {
//     const fmField = document.querySelector('label:has(input[name="fm"])');
//     const fmSideQField = document.querySelector('label:has(#fm_side)');
//     const fmSideField = document.querySelector('label:has(input[name="fm_side_cost"])');
//     const fmLField = document.querySelector('label:has(input[name="fm_l"])');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
//     const grindingFields = ['sg', 'sgl'];
//     const heatTreatmentFields = ['ht_required', 'ht'];
//     const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
//     const vmcFields = ['vmc'];
//     const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
//     const cgFields = ['cg'];
//     const turningFields = ['turning'];
//     const cncTurningFields = ['cnc_turning'];
//     const jgFields = ['jg'];
//     const sparkingFields = ['sparking'];
//     const holeTypeField = document.querySelector('label[for="hole_type"]');

//     // Hide all operation-related fields initially
//     fmField.classList.add('hidden');
//     fmSideQField.classList.add('hidden');
//     fmSideField.classList.add('hidden');
//     fmLField.classList.add('hidden');
//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     heatTreatmentFields.forEach(name => {
//         const field = name === 'ht_required' ?
//             document.querySelector(`label:has(#${name})`) :
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     coatingFields.forEach(name => {
//         const field = name === 'coating_type' ?
//             document.querySelector(`label:has(#${name})`) :
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     holeTypeField.classList.add('hidden');

//     // Show fields based on selected operations
//     operations.forEach(operation => {
//         if (operation === 'Milling') {
//             fmField.classList.remove('hidden');
//             fmSideQField.classList.remove('hidden');
//             fmSideField.classList.remove('hidden');
//             fmLField.classList.remove('hidden');
//         }
//         if (operation === 'Drilling') {
//             holeTypeField.classList.remove('hidden');
//         }
//         if (operation === 'Grinding') {
//             grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Heat Treatment') {
//             heatTreatmentFields.forEach(name => {
//                 const field = name === 'ht_required' ?
//                     document.querySelector(`label:has(#${name})`) :
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//         }
//         if (operation === 'Coating') {
//             coatingFields.forEach(name => {
//                 const field = name === 'coating_type' ?
//                     document.querySelector(`label:has(#${name})`) :
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//             updateCoatingFields();
//         }
//         if (operation === 'VMC') {
//             vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Wire Cut') {
//             wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CG') {
//             cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Turning') {
//             turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CNC Turning') {
//             cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'JG') {
//             jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//         }
//         if (operation === 'Sparking') {
//             sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//     });

//     // Reset hole types and update fields if Drilling is not selected
//     if (!operations.includes('Drilling')) {
//         const holeTypeSelect = Choices.getInstance('#hole_type');
//         holeTypeSelect.removeActiveItems();
//     }
//     updateHoleTypeFields();
// }

// // Function to update fields based on selected hole types
// function updateHoleTypeFields() {
//     const holeTypes = Array.from(document.querySelector('#hole_type').selectedOptions)
//         .map(option => option.value)
//         .filter(type => type !== '');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];

//     // Hide all hole-related fields initially
//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));

//     // Show fields based on selected hole types if Drilling is selected
//     if (Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).includes('Drilling')) {
//         holeTypes.forEach(holeType => {
//             if (holeType === 'Free Hole') {
//                 ['hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'Tap Hole') {
//                 ['hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//                  'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//                  'hole_m30', 'hole_m36', 'tap_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'C Bore') {
//                 ['c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'BSP Tap') {
//                 ['bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'GD Hole') {
//                 ['gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//                  'gd_cost_dro_radial_drilling'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'Spot Face') {
//                 ['spot_face'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'H7 Hole') {
//                 ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//         });
//     }
// }

// // Show/hide coating-specific fields based on coating_type selection
// document.querySelector('#coating_type').addEventListener('change', function() {
//     updateCoatingFields();
//     calculateFields();
// });

// // Function to handle coating field visibility
// function updateCoatingFields() {
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value);
//     const coatingType = document.querySelector('#coating_type').value;
//     const blackeningField = document.querySelector('label:has(input[name="blackening"])');
//     const enpField = document.querySelector('label:has(input[name="enp"])');
//     const flashChromeField = document.querySelector('label:has(input[name="flash_chrome"])');
//     const pcField = document.querySelector('label:has(input[name="pc"])');
//     const zincBlueField = document.querySelector('label:has(input[name="zinc_blue"])');

//     blackeningField.classList.add('hidden');
//     enpField.classList.add('hidden');
//     flashChromeField.classList.add('hidden');
//     pcField.classList.add('hidden');
//     zincBlueField.classList.add('hidden');

//     if (operations.includes('Coating')) {
//         if (coatingType === 'Blackening') blackeningField.classList.remove('hidden');
//         if (coatingType === 'ENP') enpField.classList.remove('hidden');
//         if (coatingType === 'Flash Chrome') flashChromeField.classList.remove('hidden');
//         if (coatingType === 'PC') pcField.classList.remove('hidden');
//         if (coatingType === 'Zinc Blue') zincBlueField.classList.remove('hidden');
//     }
// }

// // Auto-calculate fields when inputs change
// const inputs = document.querySelectorAll(
//     'input[name="dia"], input[name="length"], input[name="width"], input[name="thickness"], input[name="rmw_str"], ' +
//     '#type, #material, #operation, #fm_side, #hole_type, ' +
//     'input[name="hole_4_8"], input[name="hole_9_13"], input[name="hole_15_22"], ' +
//     'input[name="hole_m4"], input[name="hole_m5"], input[name="hole_m6"], input[name="hole_m8"], ' +
//     'input[name="hole_m10"], input[name="hole_m12"], input[name="hole_m14"], input[name="hole_m16"], ' +
//     'input[name="hole_m18"], input[name="hole_m20"], input[name="hole_m22"], input[name="hole_m24"], ' +
//     'input[name="hole_m25"], input[name="hole_m26"], input[name="hole_m30"], input[name="hole_m36"], ' +
//     'input[name="c_bore_m3_m5"], input[name="c_bore_m6_m10"], input[name="c_bore_m12"], ' +
//     'input[name="c_bore_m14"], input[name="c_bore_m16"], ' +
//     'input[name="bsp_tap_1_8_1_4"], input[name="bsp_tap_1_2_3_8"], input[name="bsp_tap_1_inch"], ' +
//     'input[name="bsp_tap_1_5_2_inch"], input[name="gd_total_hole_length"], ' +
//     'input[name="gd_total_hole_length_dro_radial_drilling"], input[name="spot_face"], ' +
//     'input[name="4_5_h7"], input[name="6_8_h7"], input[name="10_14_h7"], ' +
//     'input[name="15_18_h7"], input[name="20_25_h7"], input[name="25_30_h7"], ' +
//     'input[name="sg"], input[name="sgl"], #ht_required, input[name="ht"], ' +
//     'input[name="fwcam"], #coating_type, input[name="blackening"], ' +
//     'input[name="enp"], input[name="flash_chrome"], input[name="pc"], input[name="zinc_blue"], ' +
//     'input[name="vmc"], input[name="turning"], input[name="cg"], input[name="wire_cut_sp"], ' +
//     'input[name="cnc_turning"], input[name="jg"], input[name="sparking"], input[name="fm"], ' +
//     'input[name="profit_percent"]'
// );
// inputs.forEach(input => input.addEventListener('change', calculateFields));

// function calculateFields() {
//     const type = document.querySelector('#type').value;
//     const material = document.querySelector('#material').value;
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).filter(op => op !== '');
//     const fmSide = document.querySelector('#fm_side').value === "True";
//     const htRequired = document.querySelector('#ht_required').value === "True";
//     const coatingType = document.querySelector('#coating_type').value;
//     const dia = parseFloat(document.querySelector('input[name="dia"]').value) || 0;
//     const length = parseFloat(document.querySelector('input[name="length"]').value) || 0;
//     const width = parseFloat(document.querySelector('input[name="width"]').value) || 0;
//     const thickness = parseFloat(document.querySelector('input[name="thickness"]').value) || 0;
//     const rmwStr = parseFloat(document.querySelector('input[name="rmw_str"]').value) || 0;
//     const fwcam = parseFloat(document.querySelector('input[name="fwcam"]').value) || 0;
//     const profitPercent = parseFloat(document.querySelector('input[name="profit_percent"]').value) || 0;
//     const density = materials[material]?.Density_gm_cc || 0;
//     const costPerKg = materials[material]?.Cost_per_KG || 0;
//     const fmPerSqmm = materials[material]?.FM_per_sqmm || 0;
//     const fmAfterHtPerSqmm = materials[material]?.FM_AFTER_HT_per_sqmm || 0;
//     const htKg = materials[material]?.HT_KG || 0;
//     let rmwCalc = 0;
//     let rmw = 0;
//     let rmc = 0;
//     let fm = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm"]').value) || 0) : 0;
//     let fmSideCost = 0;
//     let fmL = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm_l"]').value) || 0) : 0;
//     let freeHoleCost = 0;
//     let tapHoleCost = 0;
//     let cBoreCost = 0;
//     let bspTapCost = 0;
//     let gdCostGdMachine = 0;
//     let gdCostDroRadialDrilling = 0;
//     let h7HoleCost = 0;
//     let spotFaceCost = 0;
//     let sg = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sg"]').value) || 0) : 0;
//     let sgl = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sgl"]').value) || 0) : 0;
//     let ht = 0;
//     let blackeningCost = 0;
//     let enpCost = 0;
//     let flashChromeCost = 0;
//     let pcCost = 0;
//     let zincBlueCost = 0;
//     let vmc = operations.includes("VMC") ? (parseFloat(document.querySelector('input[name="vmc"]').value) || 0) : 0;
//     let turning = operations.includes("Turning") ? (parseFloat(document.querySelector('input[name="turning"]').value) || 0) : 0;
//     let cg = operations.includes("CG") ? (parseFloat(document.querySelector('input[name="cg"]').value) || 0) : 0;
//     let wireCutSp = operations.includes("Wire Cut") ? (parseFloat(document.querySelector('input[name="wire_cut_sp"]').value) || 0) : 0;
//     let cncTurning = operations.includes("CNC Turning") ? (parseFloat(document.querySelector('input[name="cnc_turning"]').value) || 0) : 0;
//     let jg = operations.includes("JG") ? (parseFloat(document.querySelector('input[name="jg"]').value) || 0) : 0;
//     let sparking = operations.includes("Sparking") ? (parseFloat(document.querySelector('input[name="sparking"]').value) || 0) : 0;
//     let engraving = parseFloat(document.querySelector('input[name="engraving"]').value) || 0;

//     // Calculate RMW_Calc
//     if (type === "Pri" && length > 0 && width > 0 && thickness > 0) {
//         rmwCalc = ((length * width * thickness / 1000) * density) / 1000;
//     } else if (type === "Cyl" && dia > 0 && length > 0) {
//         rmwCalc = ((3.14159 * (dia * dia) * length / 4 / 1000) * density) / 1000;
//     }

//     // Calculate RMW
//     if (type === "Str" && rmwStr > 0) {
//         rmw = rmwStr;
//     } else if (rmwCalc > 0) {
//         rmw = rmwCalc;
//     }

//     // Calculate RMC
//     if (rmw > 0 && costPerKg > 0) {
//         rmc = rmw * costPerKg;
//     }

//     // Calculate FM only when Milling is selected
//     if (operations.includes("Milling") && type === "Pri" && length >= 250 && width >= 250) {
//         const fmRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fm = length * width * fmRate;
//     }

//     // Calculate FM_Side
//     if (operations.includes("Milling") && type === "Pri" && fmSide && length > 0 && width > 0 && thickness > 0) {
//         const fmSideRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fmSideCost = 2 * (length + width) * thickness * fmSideRate;
//     }

//     // Calculate drilling-related costs
//     if (operations.includes("Drilling")) {
//         const holeTypes = Array.from(document.querySelector('#hole_type').selectedOptions)
//             .map(option => option.value)
//             .filter(type => type !== '');

//         // Free Hole Cost
//         if (holeTypes.includes('Free Hole')) {
//             const hole_4_8 = parseFloat(document.querySelector('input[name="hole_4_8"]').value) || 0;
//             const hole_9_13 = parseFloat(document.querySelector('input[name="hole_9_13"]').value) || 0;
//             const hole_15_22 = parseFloat(document.querySelector('input[name="hole_15_22"]').value) || 0;
//             freeHoleCost = (hole_4_8 * drillingCosts["Hole_4_8"].Cost) +
//                            (hole_9_13 * drillingCosts["Hole_9_13"].Cost) +
//                            (hole_15_22 * drillingCosts["Hole_15_22"].Cost);
//         }

//         // Tap Hole Cost
//         if (holeTypes.includes('Tap Hole')) {
//             const hole_m4 = parseFloat(document.querySelector('input[name="hole_m4"]').value) || 0;
//             const hole_m5 = parseFloat(document.querySelector('input[name="hole_m5"]').value) || 0;
//             const hole_m6 = parseFloat(document.querySelector('input[name="hole_m6"]').value) || 0;
//             const hole_m8 = parseFloat(document.querySelector('input[name="hole_m8"]').value) || 0;
//             const hole_m10 = parseFloat(document.querySelector('input[name="hole_m10"]').value) || 0;
//             const hole_m12 = parseFloat(document.querySelector('input[name="hole_m12"]').value) || 0;
//             const hole_m14 = parseFloat(document.querySelector('input[name="hole_m14"]').value) || 0;
//             const hole_m16 = parseFloat(document.querySelector('input[name="hole_m16"]').value) || 0;
//             const hole_m18 = parseFloat(document.querySelector('input[name="hole_m18"]').value) || 0;
//             const hole_m20 = parseFloat(document.querySelector('input[name="hole_m20"]').value) || 0;
//             const hole_m22 = parseFloat(document.querySelector('input[name="hole_m22"]').value) || 0;
//             const hole_m24 = parseFloat(document.querySelector('input[name="hole_m24"]').value) || 0;
//             const hole_m25 = parseFloat(document.querySelector('input[name="hole_m25"]').value) || 0;
//             const hole_m26 = parseFloat(document.querySelector('input[name="hole_m26"]').value) || 0;
//             const hole_m30 = parseFloat(document.querySelector('input[name="hole_m30"]').value) || 0;
//             const hole_m36 = parseFloat(document.querySelector('input[name="hole_m36"]').value) || 0;
//             tapHoleCost = (hole_m4 * drillingCosts["Hole_M4"].Cost) +
//                           (hole_m5 * drillingCosts["Hole_M5"].Cost) +
//                           (hole_m6 * drillingCosts["Hole_M6"].Cost) +
//                           (hole_m8 * drillingCosts["Hole_M8"].Cost) +
//                           (hole_m10 * drillingCosts["Hole_M10"].Cost) +
//                           (hole_m12 * drillingCosts["Hole_M12"].Cost) +
//                           (hole_m14 * drillingCosts["Hole_M14"].Cost) +
//                           (hole_m16 * drillingCosts["Hole_M16"].Cost) +
//                           (hole_m18 * drillingCosts["Hole_M18"].Cost) +
//                           (hole_m20 * drillingCosts["Hole_M20"].Cost) +
//                           (hole_m22 * drillingCosts["Hole_M22"].Cost) +
//                           (hole_m24 * drillingCosts["Hole_M24"].Cost) +
//                           (hole_m25 * drillingCosts["Hole_M25"].Cost) +
//                           (hole_m26 * drillingCosts["Hole_M26"].Cost) +
//                           (hole_m30 * drillingCosts["Hole_M30"].Cost) +
//                           (hole_m36 * drillingCosts["Hole_M36"].Cost);
//         }

//         // C Bore Cost
//         if (holeTypes.includes('C Bore')) {
//             const c_bore_m3_m5 = parseFloat(document.querySelector('input[name="c_bore_m3_m5"]').value) || 0;
//             const c_bore_m6_m10 = parseFloat(document.querySelector('input[name="c_bore_m6_m10"]').value) || 0;
//             const c_bore_m12 = parseFloat(document.querySelector('input[name="c_bore_m12"]').value) || 0;
//             const c_bore_m14 = parseFloat(document.querySelector('input[name="c_bore_m14"]').value) || 0;
//             const c_bore_m16 = parseFloat(document.querySelector('input[name="c_bore_m16"]').value) || 0;
//             cBoreCost = (c_bore_m3_m5 * drillingCosts["C_bore_M3_M5"].Cost) +
//                         (c_bore_m6_m10 * drillingCosts["C_bore_M6_M10"].Cost) +
//                         (c_bore_m12 * drillingCosts["C_bore_M12"].Cost) +
//                         (c_bore_m14 * drillingCosts["C_bore_M14"].Cost) +
//                         (c_bore_m16 * drillingCosts["C_bore_M16"].Cost);
//         }

//         // BSP Tap Cost
//         if (holeTypes.includes('BSP Tap')) {
//             const bsp_tap_1_8_1_4 = parseFloat(document.querySelector('input[name="bsp_tap_1_8_1_4"]').value) || 0;
//             const bsp_tap_1_2_3_8 = parseFloat(document.querySelector('input[name="bsp_tap_1_2_3_8"]').value) || 0;
//             const bsp_tap_1_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_inch"]').value) || 0;
//             const bsp_tap_1_5_2_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_5_2_inch"]').value) || 0;
//             bspTapCost = (bsp_tap_1_8_1_4 * drillingCosts["BSP_TAP_1/8_1/4"].Cost) +
//                          (bsp_tap_1_2_3_8 * drillingCosts["BSP_TAP_1/2_3/8"].Cost) +
//                          (bsp_tap_1_inch * drillingCosts["BSP_TAP_1_inch"].Cost) +
//                          (bsp_tap_1_5_2_inch * drillingCosts["BSP_TAP_1.5_2_inch"].Cost);
//         }

//         // GD Hole Cost
//         if (holeTypes.includes('GD Hole')) {
//             const gd_total_hole_length = parseFloat(document.querySelector('input[name="gd_total_hole_length"]').value) || 0;
//             gdCostGdMachine = gd_total_hole_length * drillingCosts["GD_TOTAL_HOLE_LENGTH"].Cost;
//             const gd_total_hole_length_dro_radial_drilling = parseFloat(document.querySelector('input[name="gd_total_hole_length_dro_radial_drilling"]').value) || 0;
//             gdCostDroRadialDrilling = gd_total_hole_length_dro_radial_drilling * drillingCosts["GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING"].Cost;
//         }

//         // Spot Face Cost
//         if (holeTypes.includes('Spot Face')) {
//             const spot_face = parseFloat(document.querySelector('input[name="spot_face"]').value) || 0;
//             spotFaceCost = spot_face * drillingCosts["Spot_face"].Cost;
//         }

//         // H7 Hole Cost
//         if (holeTypes.includes('H7 Hole')) {
//             const h7_4_5 = parseFloat(document.querySelector('input[name="4_5_h7"]').value) || 0;
//             const h7_6_8 = parseFloat(document.querySelector('input[name="6_8_h7"]').value) || 0;
//             const h7_10_14 = parseFloat(document.querySelector('input[name="10_14_h7"]').value) || 0;
//             const h7_15_18 = parseFloat(document.querySelector('input[name="15_18_h7"]').value) || 0;
//             const h7_20_25 = parseFloat(document.querySelector('input[name="20_25_h7"]').value) || 0;
//             const h7_25_30 = parseFloat(document.querySelector('input[name="25_30_h7"]').value) || 0;
//             h7HoleCost = (h7_4_5 * drillingCosts["4_5_H7"].Cost) +
//                          (h7_6_8 * drillingCosts["6_8_H7"].Cost) +
//                          (h7_10_14 * drillingCosts["10_14_H7"].Cost) +
//                          (h7_15_18 * drillingCosts["15_18_H7"].Cost) +
//                          (h7_20_25 * drillingCosts["20_25_H7"].Cost) +
//                          (h7_25_30 * drillingCosts["25_30_H7"].Cost);
//         }
//     }

//     // Calculate SG only when Grinding is selected
//     if (operations.includes("Grinding") && type === "Pri" && length >= 250 && width >= 250) {
//         sg = length * width * fmPerSqmm;
//     }

//     // Calculate HT
//     if (operations.includes("Heat Treatment") && htRequired) {
//         ht = rmw * htKg;
//     }

//     // Calculate Coating Costs
//     if (operations.includes("Coating") && length > 0 && width > 0 && coatingType) {
//         const areaCm2 = (length / 10) * (width / 10);
//         blackeningCost = coatingType === "Blackening" ? fwcam * coatingCosts["Blackening"].Cost : 0;
//         enpCost = coatingType === "ENP" ? fwcam * coatingCosts["ENP"].Cost : 0;
//         flashChromeCost = coatingType === "Flash Chrome" ? areaCm2 * coatingCosts["Flash Chrome"].Cost : 0;
//         pcCost = coatingType === "PC" ? fwcam * coatingCosts["PC"].Cost : 0;
//         zincBlueCost = coatingType === "Zinc Blue" ? fwcam * coatingCosts["Zinc Blue"].Cost : 0;
//     }

//     // Calculate Total
//     const coatingSum = blackeningCost + enpCost + flashChromeCost + pcCost + zincBlueCost;
//     const total = (
//         engraving + sgl + h7HoleCost + ht + gdCostDroRadialDrilling +
//         gdCostGdMachine + bspTapCost + cBoreCost + tapHoleCost + freeHoleCost +
//         spotFaceCost + fmL + fmSideCost + fm + rmc + vmc + turning + cg + wireCutSp +
//         cncTurning + jg + sparking + coatingSum
//     );

//     // Calculate With Profit
//     const withProfit = total * (1 + (profitPercent / 100));

//     // Update fields
//     const rmwCalcField = document.querySelector('input[name="rmw_calc"]');
//     const rmwField = document.querySelector('input[name="rmw"]');
//     const rmcField = document.querySelector('input[name="rmc"]');
//     const fmField = document.querySelector('input[name="fm"]');
//     const fmSideCostField = document.querySelector('input[name="fm_side_cost"]');
//     const fmLField = document.querySelector('input[name="fm_l"]');
//     const freeHoleCostField = document.querySelector('input[name="free_hole_cost"]');
//     const tapHoleCostField = document.querySelector('input[name="tap_hole_cost"]');
//     const cBoreCostField = document.querySelector('input[name="c_bore_cost"]');
//     const bspTapCostField = document.querySelector('input[name="bsp_tap_cost"]');
//     const gdCostGdMachineField = document.querySelector('input[name="gd_cost_gd_machine"]');
//     const gdCostDroRadialDrillingField = document.querySelector('input[name="gd_cost_dro_radial_drilling"]');
//     const h7HoleCostField = document.querySelector('input[name="h7_hole_cost"]');
//     const sgField = document.querySelector('input[name="sg"]');
//     const sglField = document.querySelector('input[name="sgl"]');
//     const htField = document.querySelector('input[name="ht"]');
//     const blackeningField = document.querySelector('input[name="blackening"]');
//     const enpField = document.querySelector('input[name="enp"]');
//     const flashChromeField = document.querySelector('input[name="flash_chrome"]');
//     const pcField = document.querySelector('input[name="pc"]');
//     const zincBlueField = document.querySelector('input[name="zinc_blue"]');
//     const vmcField = document.querySelector('input[name="vmc"]');
//     const turningField = document.querySelector('input[name="turning"]');
//     const cgField = document.querySelector('input[name="cg"]');
//     const wireCutSpField = document.querySelector('input[name="wire_cut_sp"]');
//     const cncTurningField = document.querySelector('input[name="cnc_turning"]');
//     const jgField = document.querySelector('input[name="jg"]');
//     const sparkingField = document.querySelector('input[name="sparking"]');
//     const totalField = document.querySelector('input[name="total"]');
//     const withProfitField = document.querySelector('input[name="with_profit"]');

//     rmwCalcField.value = rmwCalc > 0 ? rmwCalc.toFixed(2) : '';
//     rmwField.value = rmw > 0 ? rmw.toFixed(2) : '';
//     rmcField.value = rmc > 0 ? rmc.toFixed(2) : '';
//     fmField.value = fm > 0 ? fm.toFixed(2) : (operations.includes("Milling") ? fmField.value : '');
//     fmSideCostField.value = fmSideCost > 0 ? fmSideCost.toFixed(2) : '';
//     fmLField.value = fmL > 0 ? fmL.toFixed(2) : (operations.includes("Milling") ? fmLField.value : '');
//     freeHoleCostField.value = freeHoleCost > 0 ? freeHoleCost.toFixed(2) : '';
//     tapHoleCostField.value = tapHoleCost > 0 ? tapHoleCost.toFixed(2) : '';
//     cBoreCostField.value = cBoreCost > 0 ? cBoreCost.toFixed(2) : '';
//     bspTapCostField.value = bspTapCost > 0 ? bspTapCost.toFixed(2) : '';
//     gdCostGdMachineField.value = gdCostGdMachine > 0 ? gdCostGdMachine.toFixed(2) : '';
//     gdCostDroRadialDrillingField.value = gdCostDroRadialDrilling > 0 ? gdCostDroRadialDrilling.toFixed(2) : '';
//     h7HoleCostField.value = h7HoleCost > 0 ? h7HoleCost.toFixed(2) : '';
//     sgField.value = sg > 0 ? sg.toFixed(2) : (operations.includes("Grinding") ? sgField.value : '');
//     sglField.value = sgl > 0 ? sgl.toFixed(2) : (operations.includes("Grinding") ? sglField.value : '');
//     htField.value = ht > 0 ? ht.toFixed(2) : '';
//     blackeningField.value = blackeningCost > 0 ? blackeningCost.toFixed(2) : '';
//     enpField.value = enpCost > 0 ? enpCost.toFixed(2) : '';
//     flashChromeField.value = flashChromeCost > 0 ? flashChromeCost.toFixed(2) : '';
//     pcField.value = pcCost > 0 ? pcCost.toFixed(2) : '';
//     zincBlueField.value = zincBlueCost > 0 ? zincBlueCost.toFixed(2) : '';
//     vmcField.value = vmc > 0 ? vmc.toFixed(2) : (operations.includes("VMC") ? vmcField.value : '');
//     turningField.value = turning > 0 ? turning.toFixed(2) : (operations.includes("Turning") ? turningField.value : '');
//     cgField.value = cg > 0 ? cg.toFixed(2) : (operations.includes("CG") ? cgField.value : '');
//     wireCutSpField.value = wireCutSp > 0 ? wireCutSp.toFixed(2) : (operations.includes("Wire Cut") ? wireCutSpField.value : '');
//     cncTurningField.value = cncTurning > 0 ? cncTurning.toFixed(2) : (operations.includes("CNC Turning") ? cncTurningField.value : '');
//     jgField.value = jg > 0 ? jg.toFixed(2) : (operations.includes("JG") ? jgField.value : '');
//     sparkingField.value = sparking > 0 ? sparking.toFixed(2) : (operations.includes("Sparking") ? sparkingField.value : '');
//     totalField.value = total > 0 ? total.toFixed(2) : '';
//     withProfitField.value = withProfit > 0 ? withProfit.toFixed(2) : '';
// }

// // Function to save the current estimation
// function saveEstimation() {
//     const form = document.getElementById('costForm');
//     const formData = new FormData(form);
//     const estimationData = {};

//     // Collect all form field values
//     formData.forEach((value, key) => {
//         if (key === 'operation') {
//             // Handle multiple selections for operation
//             if (!estimationData[key]) estimationData[key] = [];
//             estimationData[key].push(value);
//         } else {
//             estimationData[key] = value;
//         }
//     });

//     // Convert operation array to comma-separated string
//     if (estimationData['operation']) {
//         estimationData['operation'] = estimationData['operation'].join(', ');
//     }

//     // Add the estimation to the savedEstimations array
//     savedEstimations.push(estimationData);
// }

// //Function to download all saved estimations
// function downloadExcel() {
//     // Define all possible headers (form field names)
//     const allHeaders = Array.from(document.getElementById('costForm').elements)
//         .filter(el => el.name && el.name !== 'operation') // Exclude empty names and handle operation separately
//         .map(el => el.name)
//         .concat(['operation'])
//         .filter((v, i, a) => a.indexOf(v) === i); // Remove duplicates

//     // Use uploaded headers if available, otherwise use form field names
//     const headers = excelData.headers.length > 0 ? excelData.headers : allHeaders;

//     // Map saved estimations to rows, ensuring they match header order
//     const estimationRows = savedEstimations.map(estimation => 
//         headers.map(header => estimation[header] || '')
//     );

//     // Combine uploaded data (if any) with saved estimations, filtering out empty rows
//     const allRows = [...excelData.rows, ...estimationRows].filter(row => row.some(cell => cell !== undefined && cell !== ''));

//     // Create worksheet data: headers + rows
//     const wsData = [headers, ...allRows];

//     // Create worksheet
//     const ws = XLSX.utils.aoa_to_sheet(wsData);

//     // Create workbook and add worksheet
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Cost Estimation');

//     // Download the file
//     XLSX.writeFile(wb, uploadedFileName);
// }

// // Initially hide fields on page load
// const holeFields = [
//     'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost', 
//     'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14', 
//     'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26', 
//     'hole_m30', 'hole_m36', 'tap_hole_cost', 'c_bore_m3_m5', 'c_bore_m6_m10', 
//     'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost', 'bsp_tap_1_8_1_4', 
//     'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost', 
//     'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling', 
//     'gd_cost_dro_radial_drilling', 'spot_face'
// ];
// const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
// const fmFields = ['fm', 'fm_side', 'fm_side_cost', 'fm_l'];
// const grindingFields = ['sg', 'sgl'];
// const heatTreatmentFields = ['ht_required', 'ht'];
// const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
// const vmcFields = ['vmc'];
// const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
// const cgFields = ['cg'];
// const turningFields = ['turning'];
// const cncTurningFields = ['cnc_turning'];
// const jgFields = ['jg'];
// const sparkingFields = ['sparking'];

// holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// fmFields.forEach(name => {
//     const field = name === 'fm_side' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// heatTreatmentFields.forEach(name => {
//     const field = name === 'ht_required' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// coatingFields.forEach(name => {
//     const field = name === 'coating_type' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
























// const materials = {
//     "MS": {"Density_gm_cc": 7.85, "Cost_per_KG": 80.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "C45": {"Density_gm_cc": 7.85, "Cost_per_KG": 95.0, "FM_per_sqmm": 0.005, "HT_KG": 25.0, "FM_AFTER_HT_per_sqmm": 0.007},
//     "EN24": {"Density_gm_cc": 7.85, "Cost_per_KG": 125.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN354": {"Density_gm_cc": 7.85, "Cost_per_KG": 145.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "20MnCr5": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN47": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN31": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN19": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS410": {"Density_gm_cc": 7.85, "Cost_per_KG": 220.0, "FM_per_sqmm": 0.008, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-7075": {"Density_gm_cc": 2.73, "Cost_per_KG": 730.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "D2": {"Density_gm_cc": 7.85, "Cost_per_KG": 350.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "OHNS": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "DELRIN": {"Density_gm_cc": 1.42, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "NYLON": {"Density_gm_cc": 1.14, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "HYLEM": {"Density_gm_cc": 1.95, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "BRASS": {"Density_gm_cc": 8.5, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "COPPER": {"Density_gm_cc": 8.93, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CARBIDE": {"Density_gm_cc": 15.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CASTING": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "WELDMENTS": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-6061": {"Density_gm_cc": 2.73, "Cost_per_KG": 455.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS304": {"Density_gm_cc": 7.85, "Cost_per_KG": 245.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0}
// };

// const drillingCosts = {
//     "Hole_4_8": {"Cost": 25},
//     "Hole_9_13": {"Cost": 30},
//     "Hole_15_22": {"Cost": 35},
//     "Hole_M4": {"Cost": 20},
//     "Hole_M5": {"Cost": 25},
//     "Hole_M6": {"Cost": 30},
//     "Hole_M8": {"Cost": 40},
//     "Hole_M10": {"Cost": 50},
//     "Hole_M12": {"Cost": 60},
//     "Hole_M14": {"Cost": 60},
//     "Hole_M16": {"Cost": 70},
//     "Hole_M18": {"Cost": 70},
//     "Hole_M20": {"Cost": 120},
//     "Hole_M22": {"Cost": 120},
//     "Hole_M24": {"Cost": 120},
//     "Hole_M25": {"Cost": 200},
//     "Hole_M26": {"Cost": 200},
//     "Hole_M30": {"Cost": 250},
//     "Hole_M36": {"Cost": 300},
//     "C_bore_M3_M5": {"Cost": 30},
//     "C_bore_M6_M10": {"Cost": 40},
//     "C_bore_M12": {"Cost": 50},
//     "C_bore_M14": {"Cost": 60},
//     "C_bore_M16": {"Cost": 80},
//     "BSP_TAP_1/8_1/4": {"Cost": 45},
//     "BSP_TAP_1/2_3/8": {"Cost": 60},
//     "BSP_TAP_1_inch": {"Cost": 120},
//     "BSP_TAP_1.5_2_inch": {"Cost": 200},
//     "GD_TOTAL_HOLE_LENGTH": {"Cost": 3},
//     "GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING": {"Cost": 2},
//     "4_5_H7": {"Cost": 80},
//     "6_8_H7": {"Cost": 100},
//     "10_14_H7": {"Cost": 120},
//     "15_18_H7": {"Cost": 160},
//     "20_25_H7": {"Cost": 220},
//     "25_30_H7": {"Cost": 280},
//     "Spot_face": {"Cost": 30}
// };

// const coatingCosts = {
//     "Blackening": {"Cost": 20},
//     "ENP": {"Cost": 180},
//     "Flash Chrome": {"Cost": 0.6},
//     "PC": {"Cost": 20},
//     "Zinc Blue": {"Cost": 30}
// };

// let excelData = { headers: [], rows: [] };
// let uploadedFileName = 'cost_estimation.xlsx';
// let savedEstimations = [];

// document.addEventListener('DOMContentLoaded', () => {
//     const materialSelect = new Choices('#material', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Material',
//     });

//     const typeSelect = new Choices('#type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Type',
//     });

//     const operationSelect = new Choices('#operation', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Operations',
//         removeItemButton: true,
//         choices: [
//             { value: 'Milling', label: 'Milling' },
//             { value: 'Drilling', label: 'Drilling' },
//             { value: 'Grinding', label: 'Grinding' },
//             { value: 'Heat Treatment', label: 'Heat Treatment' },
//             { value: 'Coating', label: 'Coating' },
//             { value: 'VMC', label: 'VMC' },
//             { value: 'Wire Cut', label: 'Wire Cut' },
//             { value: 'CG', label: 'CG' },
//             { value: 'Turning', label: 'Turning' },
//             { value: 'CNC Turning', label: 'CNC Turning' },
//             { value: 'JG', label: 'JG' },
//             { value: 'Sparking', label: 'Sparking' },
//             { value: 'Engraving', label: 'Engraving' }
//         ]
//     });

//     const fmSideSelect = new Choices('#fm_side', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select FM Side',
//     });

//     const htRequiredSelect = new Choices('#ht_required', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select HT Required',
//     });

//     const coatingTypeSelect = new Choices('#coating_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Coating Type',
//     });

//     const holeTypeSelect = new Choices('#hole_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Hole Types',
//         removeItemButton: true
//     });

//     if (coatingTypeSelect.getValue(true) === '') {
//         const coatingOptions = Object.keys(coatingCosts).map(coating => ({
//             value: coating,
//             label: coating,
//         }));
//         coatingTypeSelect.setChoices(coatingOptions, 'value', 'label', true);
//     }

//     ['blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'].forEach(name => {
//         document.querySelector(`input[name="${name}"]`).setAttribute('readonly', true);
//     });

//     document.getElementById('excelUpload').addEventListener('change', function(e) {
//         const file = e.target.files[0];
//         if (file) {
//             uploadedFileName = file.name;
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 const data = new Uint8Array(e.target.result);
//                 const workbook = XLSX.read(data, { type: 'array' });
//                 const sheetName = workbook.SheetNames[0];
//                 const worksheet = workbook.Sheets[sheetName];
//                 const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

//                 if (jsonData.length > 0) {
//                     excelData.headers = jsonData[0];
//                     excelData.rows = jsonData.slice(1).filter(row => row.some(cell => cell !== undefined && cell !== ''));
//                 } else {
//                     excelData.headers = [];
//                     excelData.rows = [];
//                 }
//             };
//             reader.readAsArrayBuffer(file);
//         }
//     });

//     document.getElementById('saveButton').addEventListener('click', function() {
//         calculateFields();
//         saveEstimation();
//         alert('Estimation saved!');
//     });

//     document.getElementById('downloadButton').addEventListener('click', function() {
//         if (savedEstimations.length === 0 && excelData.rows.length === 0) {
//             alert('No estimations to download!');
//             return;
//         }
//         downloadExcel();
//     });

//     updateOperationBoxes();

//     const operationFields = [
//         'fm', 'fm_side', 'fm_side_cost', 'fm_l',
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face',
//         '4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost',
//         'sg', 'sgl', 'ht_required', 'ht',
//         'coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue',
//         'vmc', 'wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp', 'cg', 'turning',
//         'cnc_turning', 'jg', 'sparking', 'engraving'
//     ];
//     operationFields.forEach(name => {
//         const selector = name === 'fm_side' || name === 'ht_required' || name === 'coating_type' ?
//             `label:has(#${name})` : `label:has(input[name="${name}"])`;
//         document.querySelector(selector).classList.add('hidden');
//     });
// });

// document.querySelector('#type').addEventListener('change', function() {
//     const type = this.value;
//     const diaField = document.querySelector('label[for="dia"]');
//     const lengthField = document.querySelector('label[for="length"]');
//     const widthField = document.querySelector('label[for="width"]');
//     const thicknessField = document.querySelector('label[for="thickness"]');
//     const rmwstrField = document.querySelector('label[for="rmw_str"]');

//     diaField.classList.add('hidden');
//     lengthField.classList.add('hidden');
//     widthField.classList.add('hidden');
//     thicknessField.classList.add('hidden');
//     rmwstrField.classList.add('hidden');

//     if (type === 'Cyl') {
//         diaField.classList.remove('hidden');
//         lengthField.classList.remove('hidden');
//     } else if (type === 'Pri') {
//         lengthField.classList.remove('hidden');
//         widthField.classList.remove('hidden');
//         thicknessField.classList.remove('hidden');
//     } else if (type === 'Str') {
//         rmwstrField.classList.remove('hidden');
//     }
//     calculateFields();
// });

// document.querySelector('#operation').addEventListener('change', function() {
//     const operations = Array.from(this.selectedOptions).map(option => option.value).filter(op => op !== '');
//     updateOperationBoxes();
//     updateOperationFields(operations);
//     calculateFields();
// });

// document.querySelector('#hole_type').addEventListener('change', function() {
//     updateHoleTypeFields();
//     calculateFields();
// });

// function updateOperationBoxes() {
//     const operationSelect = document.querySelector('#operation');
//     const selectedOperations = Array.from(operationSelect.selectedOptions)
//         .map(option => option.value)
//         .filter(op => op !== '');
//     const container = document.querySelector('#operation-box-container');
//     container.innerHTML = '';

//     selectedOperations.forEach(operation => {
//         const box = document.createElement('div');
//         box.className = 'operation-box';
//         box.textContent = operation;
//         container.appendChild(box);
//     });
// }

// function updateOperationFields(operations) {
//     const fmField = document.querySelector('label:has(input[name="fm"])');
//     const fmSideQField = document.querySelector('label:has(#fm_side)');
//     const fmSideField = document.querySelector('label:has(input[name="fm_side_cost"])');
//     const fmLField = document.querySelector('label:has(input[name="fm_l"])');
//     const engravingField = document.querySelector('label:has(input[name="engraving"])');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
//     const grindingFields = ['sg', 'sgl'];
//     const heatTreatmentFields = ['ht_required', 'ht'];
//     const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
//     const vmcFields = ['vmc'];
//     const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
//     const cgFields = ['cg'];
//     const turningFields = ['turning'];
//     const cncTurningFields = ['cnc_turning'];
//     const jgFields = ['jg'];
//     const sparkingFields = ['sparking'];
//     const holeTypeField = document.querySelector('label[for="hole_type"]');

//     fmField.classList.add('hidden');
//     fmSideQField.classList.add('hidden');
//     fmSideField.classList.add('hidden');
//     fmLField.classList.add('hidden');
//     engravingField.classList.add('hidden');
//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     heatTreatmentFields.forEach(name => {
//         const field = name === 'ht_required' ?
//             document.querySelector(`label:has(#${name})`) :
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     coatingFields.forEach(name => {
//         const field = name === 'coating_type' ?
//             document.querySelector(`label:has(#${name})`) :
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     holeTypeField.classList.add('hidden');

//     operations.forEach(operation => {
//         if (operation === 'Milling') {
//             fmField.classList.remove('hidden');
//             fmSideQField.classList.remove('hidden');
//             fmSideField.classList.remove('hidden');
//             fmLField.classList.remove('hidden');
//         }
//         if (operation === 'Drilling') {
//             holeTypeField.classList.remove('hidden');
//         }
//         if (operation === 'Grinding') {
//             grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Heat Treatment') {
//             heatTreatmentFields.forEach(name => {
//                 const field = name === 'ht_required' ?
//                     document.querySelector(`label:has(#${name})`) :
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//         }
//         if (operation === 'Coating') {
//             coatingFields.forEach(name => {
//                 const field = name === 'coating_type' ?
//                     document.querySelector(`label:has(#${name})`) :
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//             updateCoatingFields();
//         }
//         if (operation === 'VMC') {
//             vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Wire Cut') {
//             wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CG') {
//             cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Turning') {
//             turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CNC Turning') {
//             cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'JG') {
//             jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//         }
//         if (operation === 'Sparking') {
//             sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Engraving') {
//             engravingField.classList.remove('hidden');
//         }
//     });

//     if (!operations.includes('Drilling')) {
//         const holeTypeSelect = Choices.getInstance('#hole_type');
//         holeTypeSelect.removeActiveItems();
//     }
//     updateHoleTypeFields();
// }

// function updateHoleTypeFields() {
//     const holeTypes = Array.from(document.querySelector('#hole_type').selectedOptions)
//         .map(option => option.value)
//         .filter(type => type !== '');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];

//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));

//     if (Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).includes('Drilling')) {
//         holeTypes.forEach(holeType => {
//             if (holeType === 'Free Hole') {
//                 ['hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'Tap Hole') {
//                 ['hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//                  'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//                  'hole_m30', 'hole_m36', 'tap_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'C Bore') {
//                 ['c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'BSP Tap') {
//                 ['bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'GD Hole') {
//                 ['gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//                  'gd_cost_dro_radial_drilling'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'Spot Face') {
//                 ['spot_face'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'H7 Hole') {
//                 ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//         });
//     }
// }

// document.querySelector('#coating_type').addEventListener('change', function() {
//     updateCoatingFields();
//     calculateFields();
// });

// function updateCoatingFields() {
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value);
//     const coatingType = document.querySelector('#coating_type').value;
//     const blackeningField = document.querySelector('label:has(input[name="blackening"])');
//     const enpField = document.querySelector('label:has(input[name="enp"])');
//     const flashChromeField = document.querySelector('label:has(input[name="flash_chrome"])');
//     const pcField = document.querySelector('label:has(input[name="pc"])');
//     const zincBlueField = document.querySelector('label:has(input[name="zinc_blue"])');

//     blackeningField.classList.add('hidden');
//     enpField.classList.add('hidden');
//     flashChromeField.classList.add('hidden');
//     pcField.classList.add('hidden');
//     zincBlueField.classList.add('hidden');

//     if (operations.includes('Coating')) {
//         if (coatingType === 'Blackening') blackeningField.classList.remove('hidden');
//         if (coatingType === 'ENP') enpField.classList.remove('hidden');
//         if (coatingType === 'Flash Chrome') flashChromeField.classList.remove('hidden');
//         if (coatingType === 'PC') pcField.classList.remove('hidden');
//         if (coatingType === 'Zinc Blue') zincBlueField.classList.remove('hidden');
//     }
// }

// const inputs = document.querySelectorAll(
//     'input[name="dia"], input[name="length"], input[name="width"], input[name="thickness"], input[name="rmw_str"], ' +
//     '#type, #material, #operation, #fm_side, #hole_type, ' +
//     'input[name="hole_4_8"], input[name="hole_9_13"], input[name="hole_15_22"], ' +
//     'input[name="hole_m4"], input[name="hole_m5"], input[name="hole_m6"], input[name="hole_m8"], ' +
//     'input[name="hole_m10"], input[name="hole_m12"], input[name="hole_m14"], input[name="hole_m16"], ' +
//     'input[name="hole_m18"], input[name="hole_m20"], input[name="hole_m22"], input[name="hole_m24"], ' +
//     'input[name="hole_m25"], input[name="hole_m26"], input[name="hole_m30"], input[name="hole_m36"], ' +
//     'input[name="c_bore_m3_m5"], input[name="c_bore_m6_m10"], input[name="c_bore_m12"], ' +
//     'input[name="c_bore_m14"], input[name="c_bore_m16"], ' +
//     'input[name="bsp_tap_1_8_1_4"], input[name="bsp_tap_1_2_3_8"], input[name="bsp_tap_1_inch"], ' +
//     'input[name="bsp_tap_1_5_2_inch"], input[name="gd_total_hole_length"], ' +
//     'input[name="gd_total_hole_length_dro_radial_drilling"], input[name="spot_face"], ' +
//     'input[name="4_5_h7"], input[name="6_8_h7"], input[name="10_14_h7"], ' +
//     'input[name="15_18_h7"], input[name="20_25_h7"], input[name="25_30_h7"], ' +
//     'input[name="sg"], input[name="sgl"], #ht_required, input[name="ht"], ' +
//     'input[name="fwcam"], #coating_type, input[name="blackening"], ' +
//     'input[name="enp"], input[name="flash_chrome"], input[name="pc"], input[name="zinc_blue"], ' +
//     'input[name="vmc"], input[name="turning"], input[name="cg"], input[name="wire_cut_sp"], ' +
//     'input[name="cnc_turning"], input[name="jg"], input[name="sparking"], input[name="fm"], ' +
//     'input[name="engraving"], input[name="profit_percent"]'
// );
// inputs.forEach(input => input.addEventListener('change', calculateFields));

// function calculateFields() {
//     const type = document.querySelector('#type').value;
//     const material = document.querySelector('#material').value;
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).filter(op => op !== '');
//     const fmSide = document.querySelector('#fm_side').value === "True";
//     const htRequired = document.querySelector('#ht_required').value === "True";
//     const coatingType = document.querySelector('#coating_type').value;
//     const dia = parseFloat(document.querySelector('input[name="dia"]').value) || 0;
//     const length = parseFloat(document.querySelector('input[name="length"]').value) || 0;
//     const width = parseFloat(document.querySelector('input[name="width"]').value) || 0;
//     const thickness = parseFloat(document.querySelector('input[name="thickness"]').value) || 0;
//     const rmwStr = parseFloat(document.querySelector('input[name="rmw_str"]').value) || 0;
//     const fwcam = parseFloat(document.querySelector('input[name="fwcam"]').value) || 0;
//     const profitPercent = parseFloat(document.querySelector('input[name="profit_percent"]').value) || 0;
//     const density = materials[material]?.Density_gm_cc || 0;
//     const costPerKg = materials[material]?.Cost_per_KG || 0;
//     const fmPerSqmm = materials[material]?.FM_per_sqmm || 0;
//     const fmAfterHtPerSqmm = materials[material]?.FM_AFTER_HT_per_sqmm || 0;
//     const htKg = materials[material]?.HT_KG || 0;
//     let rmwCalc = 0;
//     let rmw = 0;
//     let rmc = 0;
//     let fm = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm"]').value) || 0) : 0;
//     let fmSideCost = 0;
//     let fmL = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm_l"]').value) || 0) : 0;
//     let freeHoleCost = 0;
//     let tapHoleCost = 0;
//     let cBoreCost = 0;
//     let bspTapCost = 0;
//     let gdCostGdMachine = 0;
//     let gdCostDroRadialDrilling = 0;
//     let h7HoleCost = 0;
//     let spotFaceCost = 0;
//     let sg = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sg"]').value) || 0) : 0;
//     let sgl = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sgl"]').value) || 0) : 0;
//     let ht = 0;
//     let blackeningCost = 0;
//     let enpCost = 0;
//     let flashChromeCost = 0;
//     let pcCost = 0;
//     let zincBlueCost = 0;
//     let vmc = operations.includes("VMC") ? (parseFloat(document.querySelector('input[name="vmc"]').value) || 0) : 0;
//     let turning = operations.includes("Turning") ? (parseFloat(document.querySelector('input[name="turning"]').value) || 0) : 0;
//     let cg = operations.includes("CG") ? (parseFloat(document.querySelector('input[name="cg"]').value) || 0) : 0;
//     let wireCutSp = operations.includes("Wire Cut") ? (parseFloat(document.querySelector('input[name="wire_cut_sp"]').value) || 0) : 0;
//     let cncTurning = operations.includes("CNC Turning") ? (parseFloat(document.querySelector('input[name="cnc_turning"]').value) || 0) : 0;
//     let jg = operations.includes("JG") ? (parseFloat(document.querySelector('input[name="jg"]').value) || 0) : 0;
//     let sparking = operations.includes("Sparking") ? (parseFloat(document.querySelector('input[name="sparking"]').value) || 0) : 0;
//     let engraving = operations.includes("Engraving") ? (parseFloat(document.querySelector('input[name="engraving"]').value) || 0) : 0;

//     if (type === "Pri" && length > 0 && width > 0 && thickness > 0) {
//         rmwCalc = ((length * width * thickness / 1000) * density) / 1000;
//     } else if (type === "Cyl" && dia > 0 && length > 0) {
//         rmwCalc = ((3.14159 * (dia * dia) * length / 4 / 1000) * density) / 1000;
//     }

//     if (type === "Str" && rmwStr > 0) {
//         rmw = rmwStr;
//     } else if (rmwCalc > 0) {
//         rmw = rmwCalc;
//     }

//     if (rmw > 0 && costPerKg > 0) {
//         rmc = rmw * costPerKg;
//     }

//     if (operations.includes("Milling") && type === "Pri" && length >= 250 && width >= 250) {
//         const fmRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fm = length * width * fmRate;
//     }

//     if (operations.includes("Milling") && type === "Pri" && fmSide && length > 0 && width > 0 && thickness > 0) {
//         const fmSideRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fmSideCost = 2 * (length + width) * thickness * fmSideRate;
//     }

//     if (operations.includes("Drilling")) {
//         const holeTypes = Array.from(document.querySelector('#hole_type').selectedOptions)
//             .map(option => option.value)
//             .filter(type => type !== '');

//         if (holeTypes.includes('Free Hole')) {
//             const hole_4_8 = parseFloat(document.querySelector('input[name="hole_4_8"]').value) || 0;
//             const hole_9_13 = parseFloat(document.querySelector('input[name="hole_9_13"]').value) || 0;
//             const hole_15_22 = parseFloat(document.querySelector('input[name="hole_15_22"]').value) || 0;
//             freeHoleCost = (hole_4_8 * drillingCosts["Hole_4_8"].Cost) +
//                            (hole_9_13 * drillingCosts["Hole_9_13"].Cost) +
//                            (hole_15_22 * drillingCosts["Hole_15_22"].Cost);
//         }

//         if (holeTypes.includes('Tap Hole')) {
//             const hole_m4 = parseFloat(document.querySelector('input[name="hole_m4"]').value) || 0;
//             const hole_m5 = parseFloat(document.querySelector('input[name="hole_m5"]').value) || 0;
//             const hole_m6 = parseFloat(document.querySelector('input[name="hole_m6"]').value) || 0;
//             const hole_m8 = parseFloat(document.querySelector('input[name="hole_m8"]').value) || 0;
//             const hole_m10 = parseFloat(document.querySelector('input[name="hole_m10"]').value) || 0;
//             const hole_m12 = parseFloat(document.querySelector('input[name="hole_m12"]').value) || 0;
//             const hole_m14 = parseFloat(document.querySelector('input[name="hole_m14"]').value) || 0;
//             const hole_m16 = parseFloat(document.querySelector('input[name="hole_m16"]').value) || 0;
//             const hole_m18 = parseFloat(document.querySelector('input[name="hole_m18"]').value) || 0;
//             const hole_m20 = parseFloat(document.querySelector('input[name="hole_m20"]').value) || 0;
//             const hole_m22 = parseFloat(document.querySelector('input[name="hole_m22"]').value) || 0;
//             const hole_m24 = parseFloat(document.querySelector('input[name="hole_m24"]').value) || 0;
//             const hole_m25 = parseFloat(document.querySelector('input[name="hole_m25"]').value) || 0;
//             const hole_m26 = parseFloat(document.querySelector('input[name="hole_m26"]').value) || 0;
//             const hole_m30 = parseFloat(document.querySelector('input[name="hole_m30"]').value) || 0;
//             const hole_m36 = parseFloat(document.querySelector('input[name="hole_m36"]').value) || 0;
//             tapHoleCost = (hole_m4 * drillingCosts["Hole_M4"].Cost) +
//                           (hole_m5 * drillingCosts["Hole_M5"].Cost) +
//                           (hole_m6 * drillingCosts["Hole_M6"].Cost) +
//                           (hole_m8 * drillingCosts["Hole_M8"].Cost) +
//                           (hole_m10 * drillingCosts["Hole_M10"].Cost) +
//                           (hole_m12 * drillingCosts["Hole_M12"].Cost) +
//                           (hole_m14 * drillingCosts["Hole_M14"].Cost) +
//                           (hole_m16 * drillingCosts["Hole_M16"].Cost) +
//                           (hole_m18 * drillingCosts["Hole_M18"].Cost) +
//                           (hole_m20 * drillingCosts["Hole_M20"].Cost) +
//                           (hole_m22 * drillingCosts["Hole_M22"].Cost) +
//                           (hole_m24 * drillingCosts["Hole_M24"].Cost) +
//                           (hole_m25 * drillingCosts["Hole_M25"].Cost) +
//                           (hole_m26 * drillingCosts["Hole_M26"].Cost) +
//                           (hole_m30 * drillingCosts["Hole_M30"].Cost) +
//                           (hole_m36 * drillingCosts["Hole_M36"].Cost);
//         }

//         if (holeTypes.includes('C Bore')) {
//             const c_bore_m3_m5 = parseFloat(document.querySelector('input[name="c_bore_m3_m5"]').value) || 0;
//             const c_bore_m6_m10 = parseFloat(document.querySelector('input[name="c_bore_m6_m10"]').value) || 0;
//             const c_bore_m12 = parseFloat(document.querySelector('input[name="c_bore_m12"]').value) || 0;
//             const c_bore_m14 = parseFloat(document.querySelector('input[name="c_bore_m14"]').value) || 0;
//             const c_bore_m16 = parseFloat(document.querySelector('input[name="c_bore_m16"]').value) || 0;
//             cBoreCost = (c_bore_m3_m5 * drillingCosts["C_bore_M3_M5"].Cost) +
//                         (c_bore_m6_m10 * drillingCosts["C_bore_M6_M10"].Cost) +
//                         (c_bore_m12 * drillingCosts["C_bore_M12"].Cost) +
//                         (c_bore_m14 * drillingCosts["C_bore_M14"].Cost) +
//                         (c_bore_m16 * drillingCosts["C_bore_M16"].Cost);
//         }

//         if (holeTypes.includes('BSP Tap')) {
//             const bsp_tap_1_8_1_4 = parseFloat(document.querySelector('input[name="bsp_tap_1_8_1_4"]').value) || 0;
//             const bsp_tap_1_2_3_8 = parseFloat(document.querySelector('input[name="bsp_tap_1_2_3_8"]').value) || 0;
//             const bsp_tap_1_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_inch"]').value) || 0;
//             const bsp_tap_1_5_2_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_5_2_inch"]').value) || 0;
//             bspTapCost = (bsp_tap_1_8_1_4 * drillingCosts["BSP_TAP_1/8_1/4"].Cost) +
//                          (bsp_tap_1_2_3_8 * drillingCosts["BSP_TAP_1/2_3/8"].Cost) +
//                          (bsp_tap_1_inch * drillingCosts["BSP_TAP_1_inch"].Cost) +
//                          (bsp_tap_1_5_2_inch * drillingCosts["BSP_TAP_1.5_2_inch"].Cost);
//         }

//         if (holeTypes.includes('GD Hole')) {
//             const gd_total_hole_length = parseFloat(document.querySelector('input[name="gd_total_hole_length"]').value) || 0;
//             gdCostGdMachine = gd_total_hole_length * drillingCosts["GD_TOTAL_HOLE_LENGTH"].Cost;
//             const gd_total_hole_length_dro_radial_drilling = parseFloat(document.querySelector('input[name="gd_total_hole_length_dro_radial_drilling"]').value) || 0;
//             gdCostDroRadialDrilling = gd_total_hole_length_dro_radial_drilling * drillingCosts["GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING"].Cost;
//         }

//         if (holeTypes.includes('Spot Face')) {
//             const spot_face = parseFloat(document.querySelector('input[name="spot_face"]').value) || 0;
//             spotFaceCost = spot_face * drillingCosts["Spot_face"].Cost;
//         }

//         if (holeTypes.includes('H7 Hole')) {
//             const h7_4_5 = parseFloat(document.querySelector('input[name="4_5_h7"]').value) || 0;
//             const h7_6_8 = parseFloat(document.querySelector('input[name="6_8_h7"]').value) || 0;
//             const h7_10_14 = parseFloat(document.querySelector('input[name="10_14_h7"]').value) || 0;
//             const h7_15_18 = parseFloat(document.querySelector('input[name="15_18_h7"]').value) || 0;
//             const h7_20_25 = parseFloat(document.querySelector('input[name="20_25_h7"]').value) || 0;
//             const h7_25_30 = parseFloat(document.querySelector('input[name="25_30_h7"]').value) || 0;
//             h7HoleCost = (h7_4_5 * drillingCosts["4_5_H7"].Cost) +
//                          (h7_6_8 * drillingCosts["6_8_H7"].Cost) +
//                          (h7_10_14 * drillingCosts["10_14_H7"].Cost) +
//                          (h7_15_18 * drillingCosts["15_18_H7"].Cost) +
//                          (h7_20_25 * drillingCosts["20_25_H7"].Cost) +
//                          (h7_25_30 * drillingCosts["25_30_H7"].Cost);
//         }
//     }

//     if (operations.includes("Grinding") && type === "Pri" && length >= 250 && width >= 250) {
//         sg = length * width * fmPerSqmm;
//     }

//     if (operations.includes("Heat Treatment") && htRequired) {
//         ht = rmw * htKg;
//     }

//     if (operations.includes("Coating") && length > 0 && width > 0 && coatingType) {
//         const areaCm2 = (length / 10) * (width / 10);
//         blackeningCost = coatingType === "Blackening" ? fwcam * coatingCosts["Blackening"].Cost : 0;
//         enpCost = coatingType === "ENP" ? fwcam * coatingCosts["ENP"].Cost : 0;
//         flashChromeCost = coatingType === "Flash Chrome" ? areaCm2 * coatingCosts["Flash Chrome"].Cost : 0;
//         pcCost = coatingType === "PC" ? fwcam * coatingCosts["PC"].Cost : 0;
//         zincBlueCost = coatingType === "Zinc Blue" ? fwcam * coatingCosts["Zinc Blue"].Cost : 0;
//     }

//     const coatingSum = blackeningCost + enpCost + flashChromeCost + pcCost + zincBlueCost;
//     const total = (
//         engraving + sgl + h7HoleCost + ht + gdCostDroRadialDrilling +
//         gdCostGdMachine + bspTapCost + cBoreCost + tapHoleCost + freeHoleCost +
//         spotFaceCost + fmL + fmSideCost + fm + rmc + vmc + turning + cg + wireCutSp +
//         cncTurning + jg + sparking + coatingSum
//     );

//     const withProfit = total * (1 + (profitPercent / 100));

//     const rmwCalcField = document.querySelector('input[name="rmw_calc"]');
//     const rmwField = document.querySelector('input[name="rmw"]');
//     const rmcField = document.querySelector('input[name="rmc"]');
//     const fmField = document.querySelector('input[name="fm"]');
//     const fmSideCostField = document.querySelector('input[name="fm_side_cost"]');
//     const fmLField = document.querySelector('input[name="fm_l"]');
//     const freeHoleCostField = document.querySelector('input[name="free_hole_cost"]');
//     const tapHoleCostField = document.querySelector('input[name="tap_hole_cost"]');
//     const cBoreCostField = document.querySelector('input[name="c_bore_cost"]');
//     const bspTapCostField = document.querySelector('input[name="bsp_tap_cost"]');
//     const gdCostGdMachineField = document.querySelector('input[name="gd_cost_gd_machine"]');
//     const gdCostDroRadialDrillingField = document.querySelector('input[name="gd_cost_dro_radial_drilling"]');
//     const h7HoleCostField = document.querySelector('input[name="h7_hole_cost"]');
//     const sgField = document.querySelector('input[name="sg"]');
//     const sglField = document.querySelector('input[name="sgl"]');
//     const htField = document.querySelector('input[name="ht"]');
//     const blackeningField = document.querySelector('input[name="blackening"]');
//     const enpField = document.querySelector('input[name="enp"]');
//     const flashChromeField = document.querySelector('input[name="flash_chrome"]');
//     const pcField = document.querySelector('input[name="pc"]');
//     const zincBlueField = document.querySelector('input[name="zinc_blue"]');
//     const vmcField = document.querySelector('input[name="vmc"]');
//     const turningField = document.querySelector('input[name="turning"]');
//     const cgField = document.querySelector('input[name="cg"]');
//     const wireCutSpField = document.querySelector('input[name="wire_cut_sp"]');
//     const cncTurningField = document.querySelector('input[name="cnc_turning"]');
//     const jgField = document.querySelector('input[name="jg"]');
//     const sparkingField = document.querySelector('input[name="sparking"]');
//     const engravingField = document.querySelector('input[name="engraving"]');
//     const totalField = document.querySelector('input[name="total"]');
//     const withProfitField = document.querySelector('input[name="with_profit"]');

//     rmwCalcField.value = rmwCalc > 0 ? rmwCalc.toFixed(2) : '';
//     rmwField.value = rmw > 0 ? rmw.toFixed(2) : '';
//     rmcField.value = rmc > 0 ? rmc.toFixed(2) : '';
//     fmField.value = fm > 0 ? fm.toFixed(2) : (operations.includes("Milling") ? fmField.value : '');
//     fmSideCostField.value = fmSideCost > 0 ? fmSideCost.toFixed(2) : '';
//     fmLField.value = fmL > 0 ? fmL.toFixed(2) : (operations.includes("Milling") ? fmLField.value : '');
//     freeHoleCostField.value = freeHoleCost > 0 ? freeHoleCost.toFixed(2) : '';
//     tapHoleCostField.value = tapHoleCost > 0 ? tapHoleCost.toFixed(2) : '';
//     cBoreCostField.value = cBoreCost > 0 ? cBoreCost.toFixed(2) : '';
//     bspTapCostField.value = bspTapCost > 0 ? bspTapCost.toFixed(2) : '';
//     gdCostGdMachineField.value = gdCostGdMachine > 0 ? gdCostGdMachine.toFixed(2) : '';
//     gdCostDroRadialDrillingField.value = gdCostDroRadialDrilling > 0 ? gdCostDroRadialDrilling.toFixed(2) : '';
//     h7HoleCostField.value = h7HoleCost > 0 ? h7HoleCost.toFixed(2) : '';
//     sgField.value = sg > 0 ? sg.toFixed(2) : (operations.includes("Grinding") ? sgField.value : '');
//     sglField.value = sgl > 0 ? sgl.toFixed(2) : (operations.includes("Grinding") ? sglField.value : '');
//     htField.value = ht > 0 ? ht.toFixed(2) : '';
//     blackeningField.value = blackeningCost > 0 ? blackeningCost.toFixed(2) : '';
//     enpField.value = enpCost > 0 ? enpCost.toFixed(2) : '';
//     flashChromeField.value = flashChromeCost > 0 ? flashChromeCost.toFixed(2) : '';
//     pcField.value = pcCost > 0 ? pcCost.toFixed(2) : '';
//     zincBlueField.value = zincBlueCost > 0 ? zincBlueCost.toFixed(2) : '';
//     vmcField.value = vmc > 0 ? vmc.toFixed(2) : (operations.includes("VMC") ? vmcField.value : '');
//     turningField.value = turning > 0 ? turning.toFixed(2) : (operations.includes("Turning") ? turningField.value : '');
//     cgField.value = cg > 0 ? cg.toFixed(2) : (operations.includes("CG") ? cgField.value : '');
//     wireCutSpField.value = wireCutSp > 0 ? wireCutSp.toFixed(2) : (operations.includes("Wire Cut") ? wireCutSpField.value : '');
//     cncTurningField.value = cncTurning > 0 ? cncTurning.toFixed(2) : (operations.includes("CNC Turning") ? cncTurningField.value : '');
//     jgField.value = jg > 0 ? jg.toFixed(2) : (operations.includes("JG") ? jgField.value : '');
//     sparkingField.value = sparking > 0 ? sparking.toFixed(2) : (operations.includes("Sparking") ? sparkingField.value : '');
//     engravingField.value = engraving > 0 ? engraving.toFixed(2) : (operations.includes("Engraving") ? engravingField.value : '');
//     totalField.value = total > 0 ? total.toFixed(2) : '';
//     withProfitField.value = withProfit > 0 ? withProfit.toFixed(2) : '';
// }

// function saveEstimation() {
//     const form = document.getElementById('costForm');
//     const formData = new FormData(form);
//     const estimationData = {};

//     formData.forEach((value, key) => {
//         if (key === 'operation') {
//             if (!estimationData[key]) estimationData[key] = [];
//             estimationData[key].push(value);
//         } else {
//             estimationData[key] = value;
//         }
//     });

//     if (estimationData['operation']) {
//         estimationData['operation'] = estimationData['operation'].join(', ');
//     }

//     savedEstimations.push(estimationData);
// }

// function downloadExcel() {
//     const allHeaders = Array.from(document.getElementById('costForm').elements)
//         .filter(el => el.name && el.name !== 'operation')
//         .map(el => el.name)
//         .concat(['operation'])
//         .filter((v, i, a) => a.indexOf(v) === i);

//     const headers = excelData.headers.length > 0 ? excelData.headers : allHeaders;

//     const estimationRows = savedEstimations.map(estimation => 
//         headers.map(header => estimation[header] || '')
//     );

//     const allRows = [...excelData.rows, ...estimationRows].filter(row => row.some(cell => cell !== undefined && cell !== ''));

//     const wsData = [headers, ...allRows];

//     const ws = XLSX.utils.aoa_to_sheet(wsData);

//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Cost Estimation');

//     XLSX.writeFile(wb, uploadedFileName);
// }

// const holeFields = [
//     'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost', 
//     'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14', 
//     'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26', 
//     'hole_m30', 'hole_m36', 'tap_hole_cost', 'c_bore_m3_m5', 'c_bore_m6_m10', 
//     'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost', 'bsp_tap_1_8_1_4', 
//     'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost', 
//     'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling', 
//     'gd_cost_dro_radial_drilling', 'spot_face'
// ];
// const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
// const fmFields = ['fm', 'fm_side', 'fm_side_cost', 'fm_l'];
// const grindingFields = ['sg', 'sgl'];
// const heatTreatmentFields = ['ht_required', 'ht'];
// const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
// const vmcFields = ['vmc'];
// const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
// const cgFields = ['cg'];
// const turningFields = ['turning'];
// const cncTurningFields = ['cnc_turning'];
// const jgFields = ['jg'];
// const sparkingFields = ['sparking'];
// const engravingFields = ['engraving'];

// holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// fmFields.forEach(name => {
//     const field = name === 'fm_side' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// heatTreatmentFields.forEach(name => {
//     const field = name === 'ht_required' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// coatingFields.forEach(name => {
//     const field = name === 'coating_type' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// engravingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));















































// const materials = {
//     "MS": {"Density_gm_cc": 7.85, "Cost_per_KG": 80.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "C45": {"Density_gm_cc": 7.85, "Cost_per_KG": 95.0, "FM_per_sqmm": 0.005, "HT_KG": 25.0, "FM_AFTER_HT_per_sqmm": 0.007},
//     "EN24": {"Density_gm_cc": 7.85, "Cost_per_KG": 125.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN354": {"Density_gm_cc": 7.85, "Cost_per_KG": 145.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "20MnCr5": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN47": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN31": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN19": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS410": {"Density_gm_cc": 7.85, "Cost_per_KG": 220.0, "FM_per_sqmm": 0.008, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-7075": {"Density_gm_cc": 2.73, "Cost_per_KG": 730.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "D2": {"Density_gm_cc": 7.85, "Cost_per_KG": 350.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "OHNS": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "DELRIN": {"Density_gm_cc": 1.42, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "NYLON": {"Density_gm_cc": 1.14, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "HYLEM": {"Density_gm_cc": 1.95, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "BRASS": {"Density_gm_cc": 8.5, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "COPPER": {"Density_gm_cc": 8.93, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CARBIDE": {"Density_gm_cc": 15.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CASTING": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "WELDMENTS": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-6061": {"Density_gm_cc": 2.73, "Cost_per_KG": 455.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS304": {"Density_gm_cc": 7.85, "Cost_per_KG": 245.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0}
// };

// const drillingCosts = {
//     "Hole_4_8": {"Cost": 25},
//     "Hole_9_13": {"Cost": 30},
//     "Hole_15_22": {"Cost": 35},
//     "Hole_M4": {"Cost": 20},
//     "Hole_M5": {"Cost": 25},
//     "Hole_M6": {"Cost": 30},
//     "Hole_M8": {"Cost": 40},
//     "Hole_M10": {"Cost": 50},
//     "Hole_M12": {"Cost": 60},
//     "Hole_M14": {"Cost": 60},
//     "Hole_M16": {"Cost": 70},
//     "Hole_M18": {"Cost": 70},
//     "Hole_M20": {"Cost": 120},
//     "Hole_M22": {"Cost": 120},
//     "Hole_M24": {"Cost": 120},
//     "Hole_M25": {"Cost": 200},
//     "Hole_M26": {"Cost": 200},
//     "Hole_M30": {"Cost": 250},
//     "Hole_M36": {"Cost": 300},
//     "C_bore_M3_M5": {"Cost": 30},
//     "C_bore_M6_M10": {"Cost": 40},
//     "C_bore_M12": {"Cost": 50},
//     "C_bore_M14": {"Cost": 60},
//     "C_bore_M16": {"Cost": 80},
//     "BSP_TAP_1/8_1/4": {"Cost": 45},
//     "BSP_TAP_1/2_3/8": {"Cost": 60},
//     "BSP_TAP_1_inch": {"Cost": 120},
//     "BSP_TAP_1.5_2_inch": {"Cost": 200},
//     "GD_TOTAL_HOLE_LENGTH": {"Cost": 3},
//     "GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING": {"Cost": 2},
//     "4_5_H7": {"Cost": 80},
//     "6_8_H7": {"Cost": 100},
//     "10_14_H7": {"Cost": 120},
//     "15_18_H7": {"Cost": 160},
//     "20_25_H7": {"Cost": 220},
//     "25_30_H7": {"Cost": 280},
//     "Spot_face": {"Cost": 30}
// };

// const coatingCosts = {
//     "Blackening": {"Cost": 20},
//     "ENP": {"Cost": 180},
//     "Flash Chrome": {"Cost": 0.6},
//     "PC": {"Cost": 20},
//     "Zinc Blue": {"Cost": 30}
// };

// let excelData = { headers: [], rows: [] };
// let uploadedFileName = 'cost_estimation.xlsx';
// let savedEstimations = [];

// document.addEventListener('DOMContentLoaded', () => {
//     const materialSelect = new Choices('#material', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Material',
//     });

//     const typeSelect = new Choices('#type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Type',
//     });

//     const operationSelect = new Choices('#operation', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Operations',
//         removeItemButton: true,
//     });

//     // Explicitly set operation choices, replacing any existing options
//     const operationChoices = [
//         { value: 'Milling', label: 'Milling' },
//         { value: 'Drilling', label: 'Drilling' },
//         { value: 'Grinding', label: 'Grinding' },
//         { value: 'Heat Treatment', label: 'Heat Treatment' },
//         { value: 'Coating', label: 'Coating' },
//         { value: 'VMC', label: 'VMC' },
//         { value: 'Wire Cut', label: 'Wire Cut' },
//         { value: 'CG', label: 'CG' },
//         { value: 'Turning', label: 'Turning' },
//         { value: 'CNC Turning', label: 'CNC Turning' },
//         { value: 'JG', label: 'JG' },
//         { value: 'Sparking', label: 'Sparking' },
//         { value: 'Engraving', label: 'Engraving' }
//     ];
//     operationSelect.setChoices(operationChoices, 'value', 'label', true);

//     const fmSideSelect = new Choices('#fm_side', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select FM Side',
//     });

//     const htRequiredSelect = new Choices('#ht_required', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select HT Required',
//     });

//     const coatingTypeSelect = new Choices('#coating_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Coating Type',
//     });

//     const holeTypeSelect = new Choices('#hole_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Hole Types',
//         removeItemButton: true
//     });

//     if (coatingTypeSelect.getValue(true) === '') {
//         const coatingOptions = Object.keys(coatingCosts).map(coating => ({
//             value: coating,
//             label: coating,
//         }));
//         coatingTypeSelect.setChoices(coatingOptions, 'value', 'label', true);
//     }

//     ['blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'].forEach(name => {
//         document.querySelector(`input[name="${name}"]`).setAttribute('readonly', true);
//     });

//     document.getElementById('excelUpload').addEventListener('change', function(e) {
//         const file = e.target.files[0];
//         if (file) {
//             uploadedFileName = file.name;
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 const data = new Uint8Array(e.target.result);
//                 const workbook = XLSX.read(data, { type: 'array' });
//                 const sheetName = workbook.SheetNames[0];
//                 const worksheet = workbook.Sheets[sheetName];
//                 const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

//                 if (jsonData.length > 0) {
//                     excelData.headers = jsonData[0];
//                     excelData.rows = jsonData.slice(1).filter(row => row.some(cell => cell !== undefined && cell !== ''));
//                 } else {
//                     excelData.headers = [];
//                     excelData.rows = [];
//                 }
//             };
//             reader.readAsArrayBuffer(file);
//         }
//     });

//     document.getElementById('saveButton').addEventListener('click', function() {
//         calculateFields();
//         saveEstimation();
//         alert('Estimation saved!');
//     });

//     document.getElementById('downloadButton').addEventListener('click', function() {
//         if (savedEstimations.length === 0 && excelData.rows.length === 0) {
//             alert('No estimations to download!');
//             return;
//         }
//         downloadExcel();
//     });

//     updateOperationBoxes();

//     const operationFields = [
//         'fm', 'fm_side', 'fm_side_cost', 'fm_l',
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face',
//         '4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost',
//         'sg', 'sgl', 'ht_required', 'ht',
//         'coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue',
//         'vmc', 'wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp', 'cg', 'turning',
//         'cnc_turning', 'jg', 'sparking', 'engraving'
//     ];
//     operationFields.forEach(name => {
//         const selector = name === 'fm_side' || name === 'ht_required' || name === 'coating_type' ?
//             `label:has(#${name})` : `label:has(input[name="${name}"])`;
//         document.querySelector(selector).classList.add('hidden');
//     });
// });

// document.querySelector('#type').addEventListener('change', function() {
//     const type = this.value;
//     const diaField = document.querySelector('label[for="dia"]');
//     const lengthField = document.querySelector('label[for="length"]');
//     const widthField = document.querySelector('label[for="width"]');
//     const thicknessField = document.querySelector('label[for="thickness"]');
//     const rmwstrField = document.querySelector('label[for="rmw_str"]');

//     diaField.classList.add('hidden');
//     lengthField.classList.add('hidden');
//     widthField.classList.add('hidden');
//     thicknessField.classList.add('hidden');
//     rmwstrField.classList.add('hidden');

//     if (type === 'Cyl') {
//         diaField.classList.remove('hidden');
//         lengthField.classList.remove('hidden');
//     } else if (type === 'Pri') {
//         lengthField.classList.remove('hidden');
//         widthField.classList.remove('hidden');
//         thicknessField.classList.remove('hidden');
//     } else if (type === 'Str') {
//         rmwstrField.classList.remove('hidden');
//     }
//     calculateFields();
// });

// document.querySelector('#operation').addEventListener('change', function() {
//     const operations = Array.from(this.selectedOptions).map(option => option.value).filter(op => op !== '');
//     updateOperationBoxes();
//     updateOperationFields(operations);
//     calculateFields();
// });

// document.querySelector('#hole_type').addEventListener('change', function() {
//     updateHoleTypeFields();
//     calculateFields();
// });

// function updateOperationBoxes() {
//     const operationSelect = document.querySelector('#operation');
//     const selectedOperations = Array.from(operationSelect.selectedOptions)
//         .map(option => option.value)
//         .filter(op => op !== '');
//     const container = document.querySelector('#operation-box-container');
//     container.innerHTML = '';

//     selectedOperations.forEach(operation => {
//         const box = document.createElement('div');
//         box.className = 'operation-box';
//         box.textContent = operation;
//         container.appendChild(box);
//     });
// }

// function updateOperationFields(operations) {
//     const fmField = document.querySelector('label:has(input[name="fm"])');
//     const fmSideQField = document.querySelector('label:has(#fm_side)');
//     const fmSideField = document.querySelector('label:has(input[name="fm_side_cost"])');
//     const fmLField = document.querySelector('label:has(input[name="fm_l"])');
//     const engravingField = document.querySelector('label:has(input[name="engraving"])');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
//     const grindingFields = ['sg', 'sgl'];
//     const heatTreatmentFields = ['ht_required', 'ht'];
//     const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
//     const vmcFields = ['vmc'];
//     const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
//     const cgFields = ['cg'];
//     const turningFields = ['turning'];
//     const cncTurningFields = ['cnc_turning'];
//     const jgFields = ['jg'];
//     const sparkingFields = ['sparking'];
//     const holeTypeField = document.querySelector('label[for="hole_type"]');

//     fmField.classList.add('hidden');
//     fmSideQField.classList.add('hidden');
//     fmSideField.classList.add('hidden');
//     fmLField.classList.add('hidden');
//     engravingField.classList.add('hidden');
//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     heatTreatmentFields.forEach(name => {
//         const field = name === 'ht_required' ?
//             document.querySelector(`label:has(#${name})`) :
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     coatingFields.forEach(name => {
//         const field = name === 'coating_type' ?
//             document.querySelector(`label:has(#${name})`) :
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     holeTypeField.classList.add('hidden');

//     operations.forEach(operation => {
//         if (operation === 'Milling') {
//             fmField.classList.remove('hidden');
//             fmSideQField.classList.remove('hidden');
//             fmSideField.classList.remove('hidden');
//             fmLField.classList.remove('hidden');
//         }
//         if (operation === 'Drilling') {
//             holeTypeField.classList.remove('hidden');
//         }
//         if (operation === 'Grinding') {
//             grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Heat Treatment') {
//             heatTreatmentFields.forEach(name => {
//                 const field = name === 'ht_required' ?
//                     document.querySelector(`label:has(#${name})`) :
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//         }
//         if (operation === 'Coating') {
//             coatingFields.forEach(name => {
//                 const field = name === 'coating_type' ?
//                     document.querySelector(`label:has(#${name})`) :
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//             updateCoatingFields();
//         }
//         if (operation === 'VMC') {
//             vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Wire Cut') {
//             wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CG') {
//             cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Turning') {
//             turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CNC Turning') {
//             cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'JG') {
//             jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//         }
//         if (operation === 'Sparking') {
//             sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Engraving') {
//             engravingField.classList.remove('hidden');
//         }
//     });

//     if (!operations.includes('Drilling')) {
//         const holeTypeSelect = Choices.getInstance('#hole_type');
//         holeTypeSelect.removeActiveItems();
//     }
//     updateHoleTypeFields();
// }

// function updateHoleTypeFields() {
//     const holeTypes = Array.from(document.querySelector('#hole_type').selectedOptions)
//         .map(option => option.value)
//         .filter(type => type !== '');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];

//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));

//     if (Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).includes('Drilling')) {
//         holeTypes.forEach(holeType => {
//             if (holeType === 'Free Hole') {
//                 ['hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'Tap Hole') {
//                 ['hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//                  'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//                  'hole_m30', 'hole_m36', 'tap_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'C Bore') {
//                 ['c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'BSP Tap') {
//                 ['bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'GD Hole') {
//                 ['gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//                  'gd_cost_dro_radial_drilling'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'Spot Face') {
//                 ['spot_face'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'H7 Hole') {
//                 ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//         });
//     }
// }

// document.querySelector('#coating_type').addEventListener('change', function() {
//     updateCoatingFields();
//     calculateFields();
// });

// function updateCoatingFields() {
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value);
//     const coatingType = document.querySelector('#coating_type').value;
//     const blackeningField = document.querySelector('label:has(input[name="blackening"])');
//     const enpField = document.querySelector('label:has(input[name="enp"])');
//     const flashChromeField = document.querySelector('label:has(input[name="flash_chrome"])');
//     const pcField = document.querySelector('label:has(input[name="pc"])');
//     const zincBlueField = document.querySelector('label:has(input[name="zinc_blue"])');

//     blackeningField.classList.add('hidden');
//     enpField.classList.add('hidden');
//     flashChromeField.classList.add('hidden');
//     pcField.classList.add('hidden');
//     zincBlueField.classList.add('hidden');

//     if (operations.includes('Coating')) {
//         if (coatingType === 'Blackening') blackeningField.classList.remove('hidden');
//         if (coatingType === 'ENP') enpField.classList.remove('hidden');
//         if (coatingType === 'Flash Chrome') flashChromeField.classList.remove('hidden');
//         if (coatingType === 'PC') pcField.classList.remove('hidden');
//         if (coatingType === 'Zinc Blue') zincBlueField.classList.remove('hidden');
//     }
// }

// const inputs = document.querySelectorAll(
//     'input[name="dia"], input[name="length"], input[name="width"], input[name="thickness"], input[name="rmw_str"], ' +
//     '#type, #material, #operation, #fm_side, #hole_type, ' +
//     'input[name="hole_4_8"], input[name="hole_9_13"], input[name="hole_15_22"], ' +
//     'input[name="hole_m4"], input[name="hole_m5"], input[name="hole_m6"], input[name="hole_m8"], ' +
//     'input[name="hole_m10"], input[name="hole_m12"], input[name="hole_m14"], input[name="hole_m16"], ' +
//     'input[name="hole_m18"], input[name="hole_m20"], input[name="hole_m22"], input[name="hole_m24"], ' +
//     'input[name="hole_m25"], input[name="hole_m26"], input[name="hole_m30"], input[name="hole_m36"], ' +
//     'input[name="c_bore_m3_m5"], input[name="c_bore_m6_m10"], input[name="c_bore_m12"], ' +
//     'input[name="c_bore_m14"], input[name="c_bore_m16"], ' +
//     'input[name="bsp_tap_1_8_1_4"], input[name="bsp_tap_1_2_3_8"], input[name="bsp_tap_1_inch"], ' +
//     'input[name="bsp_tap_1_5_2_inch"], input[name="gd_total_hole_length"], ' +
//     'input[name="gd_total_hole_length_dro_radial_drilling"], input[name="spot_face"], ' +
//     'input[name="4_5_h7"], input[name="6_8_h7"], input[name="10_14_h7"], ' +
//     'input[name="15_18_h7"], input[name="20_25_h7"], input[name="25_30_h7"], ' +
//     'input[name="sg"], input[name="sgl"], #ht_required, input[name="ht"], ' +
//     'input[name="fwcam"], #coating_type, input[name="blackening"], ' +
//     'input[name="enp"], input[name="flash_chrome"], input[name="pc"], input[name="zinc_blue"], ' +
//     'input[name="vmc"], input[name="turning"], input[name="cg"], input[name="wire_cut_sp"], ' +
//     'input[name="cnc_turning"], input[name="jg"], input[name="sparking"], input[name="fm"], ' +
//     'input[name="engraving"], input[name="profit_percent"]'
// );
// inputs.forEach(input => input.addEventListener('change', calculateFields));

// function calculateFields() {
//     const type = document.querySelector('#type').value;
//     const material = document.querySelector('#material').value;
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).filter(op => op !== '');
//     const fmSide = document.querySelector('#fm_side').value === "True";
//     const htRequired = document.querySelector('#ht_required').value === "True";
//     const coatingType = document.querySelector('#coating_type').value;
//     const dia = parseFloat(document.querySelector('input[name="dia"]').value) || 0;
//     const length = parseFloat(document.querySelector('input[name="length"]').value) || 0;
//     const width = parseFloat(document.querySelector('input[name="width"]').value) || 0;
//     const thickness = parseFloat(document.querySelector('input[name="thickness"]').value) || 0;
//     const rmwStr = parseFloat(document.querySelector('input[name="rmw_str"]').value) || 0;
//     const fwcam = parseFloat(document.querySelector('input[name="fwcam"]').value) || 0;
//     const profitPercent = parseFloat(document.querySelector('input[name="profit_percent"]').value) || 0;
//     const density = materials[material]?.Density_gm_cc || 0;
//     const costPerKg = materials[material]?.Cost_per_KG || 0;
//     const fmPerSqmm = materials[material]?.FM_per_sqmm || 0;
//     const fmAfterHtPerSqmm = materials[material]?.FM_AFTER_HT_per_sqmm || 0;
//     const htKg = materials[material]?.HT_KG || 0;
//     let rmwCalc = 0;
//     let rmw = 0;
//     let rmc = 0;
//     let fm = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm"]').value) || 0) : 0;
//     let fmSideCost = 0;
//     let fmL = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm_l"]').value) || 0) : 0;
//     let freeHoleCost = 0;
//     let tapHoleCost = 0;
//     let cBoreCost = 0;
//     let bspTapCost = 0;
//     let gdCostGdMachine = 0;
//     let gdCostDroRadialDrilling = 0;
//     let h7HoleCost = 0;
//     let spotFaceCost = 0;
//     let sg = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sg"]').value) || 0) : 0;
//     let sgl = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sgl"]').value) || 0) : 0;
//     let ht = 0;
//     let blackeningCost = 0;
//     let enpCost = 0;
//     let flashChromeCost = 0;
//     let pcCost = 0;
//     let zincBlueCost = 0;
//     let vmc = operations.includes("VMC") ? (parseFloat(document.querySelector('input[name="vmc"]').value) || 0) : 0;
//     let turning = operations.includes("Turning") ? (parseFloat(document.querySelector('input[name="turning"]').value) || 0) : 0;
//     let cg = operations.includes("CG") ? (parseFloat(document.querySelector('input[name="cg"]').value) || 0) : 0;
//     let wireCutSp = operations.includes("Wire Cut") ? (parseFloat(document.querySelector('input[name="wire_cut_sp"]').value) || 0) : 0;
//     let cncTurning = operations.includes("CNC Turning") ? (parseFloat(document.querySelector('input[name="cnc_turning"]').value) || 0) : 0;
//     let jg = operations.includes("JG") ? (parseFloat(document.querySelector('input[name="jg"]').value) || 0) : 0;
//     let sparking = operations.includes("Sparking") ? (parseFloat(document.querySelector('input[name="sparking"]').value) || 0) : 0;
//     let engraving = operations.includes("Engraving") ? (parseFloat(document.querySelector('input[name="engraving"]').value) || 0) : 0;

//     if (type === "Pri" && length > 0 && width > 0 && thickness > 0) {
//         rmwCalc = ((length * width * thickness / 1000) * density) / 1000;
//     } else if (type === "Cyl" && dia > 0 && length > 0) {
//         rmwCalc = ((3.14159 * (dia * dia) * length / 4 / 1000) * density) / 1000;
//     }

//     if (type === "Str" && rmwStr > 0) {
//         rmw = rmwStr;
//     } else if (rmwCalc > 0) {
//         rmw = rmwCalc;
//     }

//     if (rmw > 0 && costPerKg > 0) {
//         rmc = rmw * costPerKg;
//     }

//     if (operations.includes("Milling") && type === "Pri" && length >= 250 && width >= 250) {
//         const fmRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fm = length * width * fmRate;
//     }

//     if (operations.includes("Milling") && type === "Pri" && fmSide && length > 0 && width > 0 && thickness > 0) {
//         const fmSideRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fmSideCost = 2 * (length + width) * thickness * fmSideRate;
//     }

//     if (operations.includes("Drilling")) {
//         const holeTypes = Array.from(document.querySelector('#hole_type').selectedOptions)
//             .map(option => option.value)
//             .filter(type => type !== '');

//         if (holeTypes.includes('Free Hole')) {
//             const hole_4_8 = parseFloat(document.querySelector('input[name="hole_4_8"]').value) || 0;
//             const hole_9_13 = parseFloat(document.querySelector('input[name="hole_9_13"]').value) || 0;
//             const hole_15_22 = parseFloat(document.querySelector('input[name="hole_15_22"]').value) || 0;
//             freeHoleCost = (hole_4_8 * drillingCosts["Hole_4_8"].Cost) +
//                            (hole_9_13 * drillingCosts["Hole_9_13"].Cost) +
//                            (hole_15_22 * drillingCosts["Hole_15_22"].Cost);
//         }

//         if (holeTypes.includes('Tap Hole')) {
//             const hole_m4 = parseFloat(document.querySelector('input[name="hole_m4"]').value) || 0;
//             const hole_m5 = parseFloat(document.querySelector('input[name="hole_m5"]').value) || 0;
//             const hole_m6 = parseFloat(document.querySelector('input[name="hole_m6"]').value) || 0;
//             const hole_m8 = parseFloat(document.querySelector('input[name="hole_m8"]').value) || 0;
//             const hole_m10 = parseFloat(document.querySelector('input[name="hole_m10"]').value) || 0;
//             const hole_m12 = parseFloat(document.querySelector('input[name="hole_m12"]').value) || 0;
//             const hole_m14 = parseFloat(document.querySelector('input[name="hole_m14"]').value) || 0;
//             const hole_m16 = parseFloat(document.querySelector('input[name="hole_m16"]').value) || 0;
//             const hole_m18 = parseFloat(document.querySelector('input[name="hole_m18"]').value) || 0;
//             const hole_m20 = parseFloat(document.querySelector('input[name="hole_m20"]').value) || 0;
//             const hole_m22 = parseFloat(document.querySelector('input[name="hole_m22"]').value) || 0;
//             const hole_m24 = parseFloat(document.querySelector('input[name="hole_m24"]').value) || 0;
//             const hole_m25 = parseFloat(document.querySelector('input[name="hole_m25"]').value) || 0;
//             const hole_m26 = parseFloat(document.querySelector('input[name="hole_m26"]').value) || 0;
//             const hole_m30 = parseFloat(document.querySelector('input[name="hole_m30"]').value) || 0;
//             const hole_m36 = parseFloat(document.querySelector('input[name="hole_m36"]').value) || 0;
//             tapHoleCost = (hole_m4 * drillingCosts["Hole_M4"].Cost) +
//                           (hole_m5 * drillingCosts["Hole_M5"].Cost) +
//                           (hole_m6 * drillingCosts["Hole_M6"].Cost) +
//                           (hole_m8 * drillingCosts["Hole_M8"].Cost) +
//                           (hole_m10 * drillingCosts["Hole_M10"].Cost) +
//                           (hole_m12 * drillingCosts["Hole_M12"].Cost) +
//                           (hole_m14 * drillingCosts["Hole_M14"].Cost) +
//                           (hole_m16 * drillingCosts["Hole_M16"].Cost) +
//                           (hole_m18 * drillingCosts["Hole_M18"].Cost) +
//                           (hole_m20 * drillingCosts["Hole_M20"].Cost) +
//                           (hole_m22 * drillingCosts["Hole_M22"].Cost) +
//                           (hole_m24 * drillingCosts["Hole_M24"].Cost) +
//                           (hole_m25 * drillingCosts["Hole_M25"].Cost) +
//                           (hole_m26 * drillingCosts["Hole_M26"].Cost) +
//                           (hole_m30 * drillingCosts["Hole_M30"].Cost) +
//                           (hole_m36 * drillingCosts["Hole_M36"].Cost);
//         }

//         if (holeTypes.includes('C Bore')) {
//             const c_bore_m3_m5 = parseFloat(document.querySelector('input[name="c_bore_m3_m5"]').value) || 0;
//             const c_bore_m6_m10 = parseFloat(document.querySelector('input[name="c_bore_m6_m10"]').value) || 0;
//             const c_bore_m12 = parseFloat(document.querySelector('input[name="c_bore_m12"]').value) || 0;
//             const c_bore_m14 = parseFloat(document.querySelector('input[name="c_bore_m14"]').value) || 0;
//             const c_bore_m16 = parseFloat(document.querySelector('input[name="c_bore_m16"]').value) || 0;
//             cBoreCost = (c_bore_m3_m5 * drillingCosts["C_bore_M3_M5"].Cost) +
//                         (c_bore_m6_m10 * drillingCosts["C_bore_M6_M10"].Cost) +
//                         (c_bore_m12 * drillingCosts["C_bore_M12"].Cost) +
//                         (c_bore_m14 * drillingCosts["C_bore_M14"].Cost) +
//                         (c_bore_m16 * drillingCosts["C_bore_M16"].Cost);
//         }

//         if (holeTypes.includes('BSP Tap')) {
//             const bsp_tap_1_8_1_4 = parseFloat(document.querySelector('input[name="bsp_tap_1_8_1_4"]').value) || 0;
//             const bsp_tap_1_2_3_8 = parseFloat(document.querySelector('input[name="bsp_tap_1_2_3_8"]').value) || 0;
//             const bsp_tap_1_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_inch"]').value) || 0;
//             const bsp_tap_1_5_2_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_5_2_inch"]').value) || 0;
//             bspTapCost = (bsp_tap_1_8_1_4 * drillingCosts["BSP_TAP_1/8_1/4"].Cost) +
//                          (bsp_tap_1_2_3_8 * drillingCosts["BSP_TAP_1/2_3/8"].Cost) +
//                          (bsp_tap_1_inch * drillingCosts["BSP_TAP_1_inch"].Cost) +
//                          (bsp_tap_1_5_2_inch * drillingCosts["BSP_TAP_1.5_2_inch"].Cost);
//         }

//         if (holeTypes.includes('GD Hole')) {
//             const gd_total_hole_length = parseFloat(document.querySelector('input[name="gd_total_hole_length"]').value) || 0;
//             gdCostGdMachine = gd_total_hole_length * drillingCosts["GD_TOTAL_HOLE_LENGTH"].Cost;
//             const gd_total_hole_length_dro_radial_drilling = parseFloat(document.querySelector('input[name="gd_total_hole_length_dro_radial_drilling"]').value) || 0;
//             gdCostDroRadialDrilling = gd_total_hole_length_dro_radial_drilling * drillingCosts["GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING"].Cost;
//         }

//         if (holeTypes.includes('Spot Face')) {
//             const spot_face = parseFloat(document.querySelector('input[name="spot_face"]').value) || 0;
//             spotFaceCost = spot_face * drillingCosts["Spot_face"].Cost;
//         }

//         if (holeTypes.includes('H7 Hole')) {
//             const h7_4_5 = parseFloat(document.querySelector('input[name="4_5_h7"]').value) || 0;
//             const h7_6_8 = parseFloat(document.querySelector('input[name="6_8_h7"]').value) || 0;
//             const h7_10_14 = parseFloat(document.querySelector('input[name="10_14_h7"]').value) || 0;
//             const h7_15_18 = parseFloat(document.querySelector('input[name="15_18_h7"]').value) || 0;
//             const h7_20_25 = parseFloat(document.querySelector('input[name="20_25_h7"]').value) || 0;
//             const h7_25_30 = parseFloat(document.querySelector('input[name="25_30_h7"]').value) || 0;
//             h7HoleCost = (h7_4_5 * drillingCosts["4_5_H7"].Cost) +
//                          (h7_6_8 * drillingCosts["6_8_H7"].Cost) +
//                          (h7_10_14 * drillingCosts["10_14_H7"].Cost) +
//                          (h7_15_18 * drillingCosts["15_18_H7"].Cost) +
//                          (h7_20_25 * drillingCosts["20_25_H7"].Cost) +
//                          (h7_25_30 * drillingCosts["25_30_H7"].Cost);
//         }
//     }

//     if (operations.includes("Grinding") && type === "Pri" && length >= 250 && width >= 250) {
//         sg = length * width * fmPerSqmm;
//     }

//     if (operations.includes("Heat Treatment") && htRequired) {
//         ht = rmw * htKg;
//     }

//     if (operations.includes("Coating") && length > 0 && width > 0 && coatingType) {
//         const areaCm2 = (length / 10) * (width / 10);
//         blackeningCost = coatingType === "Blackening" ? fwcam * coatingCosts["Blackening"].Cost : 0;
//         enpCost = coatingType === "ENP" ? fwcam * coatingCosts["ENP"].Cost : 0;
//         flashChromeCost = coatingType === "Flash Chrome" ? areaCm2 * coatingCosts["Flash Chrome"].Cost : 0;
//         pcCost = coatingType === "PC" ? fwcam * coatingCosts["PC"].Cost : 0;
//         zincBlueCost = coatingType === "Zinc Blue" ? fwcam * coatingCosts["Zinc Blue"].Cost : 0;
//     }

//     const coatingSum = blackeningCost + enpCost + flashChromeCost + pcCost + zincBlueCost;
//     const total = (
//         engraving + sgl + h7HoleCost + ht + gdCostDroRadialDrilling +
//         gdCostGdMachine + bspTapCost + cBoreCost + tapHoleCost + freeHoleCost +
//         spotFaceCost + fmL + fmSideCost + fm + rmc + vmc + turning + cg + wireCutSp +
//         cncTurning + jg + sparking + coatingSum
//     );

//     const withProfit = total * (1 + (profitPercent / 100));

//     const rmwCalcField = document.querySelector('input[name="rmw_calc"]');
//     const rmwField = document.querySelector('input[name="rmw"]');
//     const rmcField = document.querySelector('input[name="rmc"]');
//     const fmField = document.querySelector('input[name="fm"]');
//     const fmSideCostField = document.querySelector('input[name="fm_side_cost"]');
//     const fmLField = document.querySelector('input[name="fm_l"]');
//     const freeHoleCostField = document.querySelector('input[name="free_hole_cost"]');
//     const tapHoleCostField = document.querySelector('input[name="tap_hole_cost"]');
//     const cBoreCostField = document.querySelector('input[name="c_bore_cost"]');
//     const bspTapCostField = document.querySelector('input[name="bsp_tap_cost"]');
//     const gdCostGdMachineField = document.querySelector('input[name="gd_cost_gd_machine"]');
//     const gdCostDroRadialDrillingField = document.querySelector('input[name="gd_cost_dro_radial_drilling"]');
//     const h7HoleCostField = document.querySelector('input[name="h7_hole_cost"]');
//     const sgField = document.querySelector('input[name="sg"]');
//     const sglField = document.querySelector('input[name="sgl"]');
//     const htField = document.querySelector('input[name="ht"]');
//     const blackeningField = document.querySelector('input[name="blackening"]');
//     const enpField = document.querySelector('input[name="enp"]');
//     const flashChromeField = document.querySelector('input[name="flash_chrome"]');
//     const pcField = document.querySelector('input[name="pc"]');
//     const zincBlueField = document.querySelector('input[name="zinc_blue"]');
//     const vmcField = document.querySelector('input[name="vmc"]');
//     const turningField = document.querySelector('input[name="turning"]');
//     const cgField = document.querySelector('input[name="cg"]');
//     const wireCutSpField = document.querySelector('input[name="wire_cut_sp"]');
//     const cncTurningField = document.querySelector('input[name="cnc_turning"]');
//     const jgField = document.querySelector('input[name="jg"]');
//     const sparkingField = document.querySelector('input[name="sparking"]');
//     const engravingField = document.querySelector('input[name="engraving"]');
//     const totalField = document.querySelector('input[name="total"]');
//     const withProfitField = document.querySelector('input[name="with_profit"]');

//     rmwCalcField.value = rmwCalc > 0 ? rmwCalc.toFixed(2) : '';
//     rmwField.value = rmw > 0 ? rmw.toFixed(2) : '';
//     rmcField.value = rmc > 0 ? rmc.toFixed(2) : '';
//     fmField.value = fm > 0 ? fm.toFixed(2) : (operations.includes("Milling") ? fmField.value : '');
//     fmSideCostField.value = fmSideCost > 0 ? fmSideCost.toFixed(2) : '';
//     fmLField.value = fmL > 0 ? fmL.toFixed(2) : (operations.includes("Milling") ? fmLField.value : '');
//     freeHoleCostField.value = freeHoleCost > 0 ? freeHoleCost.toFixed(2) : '';
//     tapHoleCostField.value = tapHoleCost > 0 ? tapHoleCost.toFixed(2) : '';
//     cBoreCostField.value = cBoreCost > 0 ? cBoreCost.toFixed(2) : '';
//     bspTapCostField.value = bspTapCost > 0 ? bspTapCost.toFixed(2) : '';
//     gdCostGdMachineField.value = gdCostGdMachine > 0 ? gdCostGdMachine.toFixed(2) : '';
//     gdCostDroRadialDrillingField.value = gdCostDroRadialDrilling > 0 ? gdCostDroRadialDrilling.toFixed(2) : '';
//     h7HoleCostField.value = h7HoleCost > 0 ? h7HoleCost.toFixed(2) : '';
//     sgField.value = sg > 0 ? sg.toFixed(2) : (operations.includes("Grinding") ? sgField.value : '');
//     sglField.value = sgl > 0 ? sgl.toFixed(2) : (operations.includes("Grinding") ? sglField.value : '');
//     htField.value = ht > 0 ? ht.toFixed(2) : '';
//     blackeningField.value = blackeningCost > 0 ? blackeningCost.toFixed(2) : '';
//     enpField.value = enpCost > 0 ? enpCost.toFixed(2) : '';
//     flashChromeField.value = flashChromeCost > 0 ? flashChromeCost.toFixed(2) : '';
//     pcField.value = pcCost > 0 ? pcCost.toFixed(2) : '';
//     zincBlueField.value = zincBlueCost > 0 ? zincBlueCost.toFixed(2) : '';
//     vmcField.value = vmc > 0 ? vmc.toFixed(2) : (operations.includes("VMC") ? vmcField.value : '');
//     turningField.value = turning > 0 ? turning.toFixed(2) : (operations.includes("Turning") ? turningField.value : '');
//     cgField.value = cg > 0 ? cg.toFixed(2) : (operations.includes("CG") ? cgField.value : '');
//     wireCutSpField.value = wireCutSp > 0 ? wireCutSp.toFixed(2) : (operations.includes("Wire Cut") ? wireCutSpField.value : '');
//     cncTurningField.value = cncTurning > 0 ? cncTurning.toFixed(2) : (operations.includes("CNC Turning") ? cncTurningField.value : '');
//     jgField.value = jg > 0 ? jg.toFixed(2) : (operations.includes("JG") ? jgField.value : '');
//     sparkingField.value = sparking > 0 ? sparking.toFixed(2) : (operations.includes("Sparking") ? sparkingField.value : '');
//     engravingField.value = engraving > 0 ? engraving.toFixed(2) : (operations.includes("Engraving") ? engravingField.value : '');
//     totalField.value = total > 0 ? total.toFixed(2) : '';
//     withProfitField.value = withProfit > 0 ? withProfit.toFixed(2) : '';
// }

// function saveEstimation() {
//     const form = document.getElementById('costForm');
//     const formData = new FormData(form);
//     const estimationData = {};

//     formData.forEach((value, key) => {
//         if (key === 'operation') {
//             if (!estimationData[key]) estimationData[key] = [];
//             estimationData[key].push(value);
//         } else {
//             estimationData[key] = value;
//         }
//     });

//     if (estimationData['operation']) {
//         estimationData['operation'] = estimationData['operation'].join(', ');
//     }

//     savedEstimations.push(estimationData);
// }

// function downloadExcel() {
//     const allHeaders = Array.from(document.getElementById('costForm').elements)
//         .filter(el => el.name && el.name !== 'operation')
//         .map(el => el.name)
//         .concat(['operation'])
//         .filter((v, i, a) => a.indexOf(v) === i);

//     const headers = excelData.headers.length > 0 ? excelData.headers : allHeaders;

//     const estimationRows = savedEstimations.map(estimation => 
//         headers.map(header => estimation[header] || '')
//     );

//     const allRows = [...excelData.rows, ...estimationRows].filter(row => row.some(cell => cell !== undefined && cell !== ''));

//     const wsData = [headers, ...allRows];

//     const ws = XLSX.utils.aoa_to_sheet(wsData);

//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Cost Estimation');

//     XLSX.writeFile(wb, uploadedFileName);
// }

// const holeFields = [
//     'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost', 
//     'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14', 
//     'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26', 
//     'hole_m30', 'hole_m36', 'tap_hole_cost', 'c_bore_m3_m5', 'c_bore_m6_m10', 
//     'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost', 'bsp_tap_1_8_1_4', 
//     'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost', 
//     'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling', 
//     'gd_cost_dro_radial_drilling', 'spot_face'
// ];
// const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
// const fmFields = ['fm', 'fm_side', 'fm_side_cost', 'fm_l'];
// const grindingFields = ['sg', 'sgl'];
// const heatTreatmentFields = ['ht_required', 'ht'];
// const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
// const vmcFields = ['vmc'];
// const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
// const cgFields = ['cg'];
// const turningFields = ['turning'];
// const cncTurningFields = ['cnc_turning'];
// const jgFields = ['jg'];
// const sparkingFields = ['sparking'];
// const engravingFields = ['engraving'];

// holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// fmFields.forEach(name => {
//     const field = name === 'fm_side' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// heatTreatmentFields.forEach(name => {
//     const field = name === 'ht_required' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// coatingFields.forEach(name => {
//     const field = name === 'coating_type' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// engravingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
























// const materials = {
//     "MS": {"Density_gm_cc": 7.85, "Cost_per_KG": 80.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "C45": {"Density_gm_cc": 7.85, "Cost_per_KG": 95.0, "FM_per_sqmm": 0.005, "HT_KG": 25.0, "FM_AFTER_HT_per_sqmm": 0.007},
//     "EN24": {"Density_gm_cc": 7.85, "Cost_per_KG": 125.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN354": {"Density_gm_cc": 7.85, "Cost_per_KG": 145.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "20MnCr5": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN47": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN31": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN19": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS410": {"Density_gm_cc": 7.85, "Cost_per_KG": 220.0, "FM_per_sqmm": 0.008, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-7075": {"Density_gm_cc": 2.73, "Cost_per_KG": 730.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "D2": {"Density_gm_cc": 7.85, "Cost_per_KG": 350.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "OHNS": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "DELRIN": {"Density_gm_cc": 1.42, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "NYLON": {"Density_gm_cc": 1.14, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "HYLEM": {"Density_gm_cc": 1.95, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "BRASS": {"Density_gm_cc": 8.5, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "COPPER": {"Density_gm_cc": 8.93, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CARBIDE": {"Density_gm_cc": 15.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CASTING": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "WELDMENTS": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-6061": {"Density_gm_cc": 2.73, "Cost_per_KG": 455.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS304": {"Density_gm_cc": 7.85, "Cost_per_KG": 245.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0}
// };

// const drillingCosts = {
//     "Hole_4_8": {"Cost": 25},
//     "Hole_9_13": {"Cost": 30},
//     "Hole_15_22": {"Cost": 35},
//     "Hole_M4": {"Cost": 20},
//     "Hole_M5": {"Cost": 25},
//     "Hole_M6": {"Cost": 30},
//     "Hole_M8": {"Cost": 40},
//     "Hole_M10": {"Cost": 50},
//     "Hole_M12": {"Cost": 60},
//     "Hole_M14": {"Cost": 60},
//     "Hole_M16": {"Cost": 70},
//     "Hole_M18": {"Cost": 70},
//     "Hole_M20": {"Cost": 120},
//     "Hole_M22": {"Cost": 120},
//     "Hole_M24": {"Cost": 120},
//     "Hole_M25": {"Cost": 200},
//     "Hole_M26": {"Cost": 200},
//     "Hole_M30": {"Cost": 250},
//     "Hole_M36": {"Cost": 300},
//     "C_bore_M3_M5": {"Cost": 30},
//     "C_bore_M6_M10": {"Cost": 40},
//     "C_bore_M12": {"Cost": 50},
//     "C_bore_M14": {"Cost": 60},
//     "C_bore_M16": {"Cost": 80},
//     "BSP_TAP_1/8_1/4": {"Cost": 45},
//     "BSP_TAP_1/2_3/8": {"Cost": 60},
//     "BSP_TAP_1_inch": {"Cost": 120},
//     "BSP_TAP_1.5_2_inch": {"Cost": 200},
//     "GD_TOTAL_HOLE_LENGTH": {"Cost": 3},
//     "GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING": {"Cost": 2},
//     "4_5_H7": {"Cost": 80},
//     "6_8_H7": {"Cost": 100},
//     "10_14_H7": {"Cost": 120},
//     "15_18_H7": {"Cost": 160},
//     "20_25_H7": {"Cost": 220},
//     "25_30_H7": {"Cost": 280},
//     "Spot_face": {"Cost": 30},
//     "Radial Drilling": {"Cost": 2},
//     "Gun Drilling": {"Cost": 3}    
// };

// const coatingCosts = {
//     "Blackening": {"Cost": 20},
//     "ENP": {"Cost": 180},
//     "Flash Chrome": {"Cost": 0.6},
//     "PC": {"Cost": 20},
//     "Zinc Blue": {"Cost": 30}
// };

// let excelData = { headers: [], rows: [] };
// let uploadedFileName = 'cost_estimation.xlsx';
// let savedEstimations = [];

// document.addEventListener('DOMContentLoaded', () => {
//     const materialSelect = new Choices('#material', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Material',
//     });

//     const typeSelect = new Choices('#type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Type',
//     });

//     const operationSelect = new Choices('#operation', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Operations',
//         removeItemButton: true,
//     });

//     // Explicitly set operation choices, replacing any existing options
//     const operationChoices = [
//         { value: 'Milling', label: 'Milling' },
//         { value: 'Drilling', label: 'Drilling' },
//         { value: 'Grinding', label: 'Grinding' },
//         { value: 'Heat Treatment', label: 'Heat Treatment' },
//         { value: 'Coating', label: 'Coating' },
//         { value: 'VMC', label: 'VMC' },
//         { value: 'Wire Cut', label: 'Wire Cut' },
//         { value: 'CG', label: 'CG' },
//         { value: 'Turning', label: 'Turning' },
//         { value: 'CNC Turning', label: 'CNC Turning' },
//         { value: 'JG', label: 'JG' },
//         { value: 'Sparking', label: 'Sparking' },
//         { value: 'Engraving', label: 'Engraving' },
//         { value: 'Radial Drilling', label: 'Radial Drilling' },
//         { value: 'Gun Drilling', label: 'Gun Drilling' }
//     ];
//     operationSelect.setChoices(operationChoices, 'value', 'label', true);

//     const fmSideSelect = new Choices('#fm_side', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select FM Side',
//     });

//     const htRequiredSelect = new Choices('#ht_required', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select HT Required',
//     });

//     const coatingTypeSelect = new Choices('#coating_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Coating Type',
//     });

//     const holeTypeSelect = new Choices('#hole_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Hole Types',
//         removeItemButton: true
//     });

//     if (coatingTypeSelect.getValue(true) === '') {
//         const coatingOptions = Object.keys(coatingCosts).map(coating => ({
//             value: coating,
//             label: coating,
//         }));
//         coatingTypeSelect.setChoices(coatingOptions, 'value', 'label', true);
//     }

//     ['blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'].forEach(name => {
//         document.querySelector(`input[name="${name}"]`).setAttribute('readonly', true);
//     });

//     document.getElementById('excelUpload').addEventListener('change', function(e) {
//         const file = e.target.files[0];
//         if (file) {
//             uploadedFileName = file.name;
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 const data = new Uint8Array(e.target.result);
//                 const workbook = XLSX.read(data, { type: 'array' });
//                 const sheetName = workbook.SheetNames[0];
//                 const worksheet = workbook.Sheets[sheetName];
//                 const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

//                 if (jsonData.length > 0) {
//                     excelData.headers = jsonData[0];
//                     excelData.rows = jsonData.slice(1).filter(row => row.some(cell => cell !== undefined && cell !== ''));
//                 } else {
//                     excelData.headers = [];
//                     excelData.rows = [];
//                 }
//             };
//             reader.readAsArrayBuffer(file);
//         }
//     });

//     document.getElementById('saveButton').addEventListener('click', function() {
//         calculateFields();
//         saveEstimation();
//         alert('Estimation saved!');
//     });

//     document.getElementById('downloadButton').addEventListener('click', function() {
//         if (savedEstimations.length === 0 && excelData.rows.length === 0) {
//             alert('No estimations to download!');
//             return;
//         }
//         downloadExcel();
//     });

//     updateOperationBoxes();

//     const operationFields = [
//         'fm', 'fm_side', 'fm_side_cost', 'fm_l',
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face',
//         '4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost',
//         'sg', 'sgl', 'ht_required', 'ht',
//         'coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue',
//         'vmc', 'wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp', 'cg', 'turning',
//         'cnc_turning', 'jg', 'sparking', 'engraving', 'radial_drilling', 'gun_drilling'
//     ];
//     operationFields.forEach(name => {
//         const selector = name === 'fm_side' || name === 'ht_required' || name === 'coating_type' ?
//             `label:has(#${name})` : `label:has(input[name="${name}"])`;
//         document.querySelector(selector).classList.add('hidden');
//     });
// });

// document.querySelector('#type').addEventListener('change', function() {
//     const type = this.value;
//     const diaField = document.querySelector('label[for="dia"]');
//     const lengthField = document.querySelector('label[for="length"]');
//     const widthField = document.querySelector('label[for="width"]');
//     const thicknessField = document.querySelector('label[for="thickness"]');
//     const rmwstrField = document.querySelector('label[for="rmw_str"]');

//     diaField.classList.add('hidden');
//     lengthField.classList.add('hidden');
//     widthField.classList.add('hidden');
//     thicknessField.classList.add('hidden');
//     rmwstrField.classList.add('hidden');

//     if (type === 'Cyl') {
//         diaField.classList.remove('hidden');
//         lengthField.classList.remove('hidden');
//     } else if (type === 'Pri') {
//         lengthField.classList.remove('hidden');
//         widthField.classList.remove('hidden');
//         thicknessField.classList.remove('hidden');
//     } else if (type === 'Str') {
//         rmwstrField.classList.remove('hidden');
//     }
//     calculateFields();
// });

// document.querySelector('#operation').addEventListener('change', function() {
//     const operations = Array.from(this.selectedOptions).map(option => option.value).filter(op => op !== '');
//     updateOperationBoxes();
//     updateOperationFields(operations);
//     calculateFields();
// });

// document.querySelector('#hole_type').addEventListener('change', function() {
//     updateHoleTypeFields();
//     calculateFields();
// });

// function updateOperationBoxes() {
//     const operationSelect = document.querySelector('#operation');
//     const selectedOperations = Array.from(operationSelect.selectedOptions)
//         .map(option => option.value)
//         .filter(op => op !== '');
//     const container = document.querySelector('#operation-box-container');
//     container.innerHTML = '';

//     selectedOperations.forEach(operation => {
//         const box = document.createElement('div');
//         box.className = 'operation-box';
//         box.textContent = operation;
//         container.appendChild(box);
//     });
// }

// function updateOperationFields(operations) {
//     const fmField = document.querySelector('label:has(input[name="fm"])');
//     const fmSideQField = document.querySelector('label:has(#fm_side)');
//     const fmSideField = document.querySelector('label:has(input[name="fm_side_cost"])');
//     const fmLField = document.querySelector('label:has(input[name="fm_l"])');
//     const engravingField = document.querySelector('label:has(input[name="engraving"])');
//     const radialDrillingField = document.querySelector('label:has(input[name="radial_drilling"])');
//     const gunDrillingField = document.querySelector('label:has(input[name="gun_drilling"])');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
//     const grindingFields = ['sg', 'sgl'];
//     const heatTreatmentFields = ['ht_required', 'ht'];
//     const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
//     const vmcFields = ['vmc'];
//     const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
//     const cgFields = ['cg'];
//     const turningFields = ['turning'];
//     const cncTurningFields = ['cnc_turning'];
//     const jgFields = ['jg'];
//     const sparkingFields = ['sparking'];
//     const radialDrillingFields = ['radial_drilling'];
//     const gunDrillingFields = ['gun_drilling'];
//     const holeTypeField = document.querySelector('label[for="hole_type"]');

//     fmField.classList.add('hidden');
//     fmSideQField.classList.add('hidden');
//     fmSideField.classList.add('hidden');
//     fmLField.classList.add('hidden');
//     engravingField.classList.add('hidden');
//     radialDrillingField.classList.add('hidden');
//     gunDrillingField.classList.add('hidden');
//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     heatTreatmentFields.forEach(name => {
//         const field = name === 'ht_required' ?
//             document.querySelector(`label:has(#${name})`) :
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     coatingFields.forEach(name => {
//         const field = name === 'coating_type' ?
//             document.querySelector(`label:has(#${name})`) :
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     radialDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     gunDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     holeTypeField.classList.add('hidden');

//     operations.forEach(operation => {
//         if (operation === 'Milling') {
//             fmField.classList.remove('hidden');
//             fmSideQField.classList.remove('hidden');
//             fmSideField.classList.remove('hidden');
//             fmLField.classList.remove('hidden');
//         }
//         if (operation === 'Drilling') {
//             holeTypeField.classList.remove('hidden');
//         }
//         if (operation === 'Grinding') {
//             grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Heat Treatment') {
//             heatTreatmentFields.forEach(name => {
//                 const field = name === 'ht_required' ?
//                     document.querySelector(`label:has(#${name})`) :
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//         }
//         if (operation === 'Coating') {
//             coatingFields.forEach(name => {
//                 const field = name === 'coating_type' ?
//                     document.querySelector(`label:has(#${name})`) :
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//             updateCoatingFields();
//         }
//         if (operation === 'VMC') {
//             vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Wire Cut') {
//             wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CG') {
//             cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Turning') {
//             turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CNC Turning') {
//             cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'JG') {
//             jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Sparking') {
//             sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Engraving') {
//             engravingField.classList.remove('hidden');
//         }
//         if (operation === 'Radial Drilling') {
//             radialDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Gun Drilling') {
//             gunDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//     });

//     if (!operations.includes('Drilling')) {
//         const holeTypeSelect = Choices.getInstance('#hole_type');
//         holeTypeSelect.removeActiveItems();
//     }
//     updateHoleTypeFields();
// }

// function updateHoleTypeFields() {
//     const holeTypes = Array.from(document.querySelector('#hole_type').selectedOptions)
//         .map(option => option.value)
//         .filter(type => type !== '');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];

//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));

//     if (Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).includes('Drilling')) {
//         holeTypes.forEach(holeType => {
//             if (holeType === 'Free Hole') {
//                 ['hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'Tap Hole') {
//                 ['hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//                  'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//                  'hole_m30', 'hole_m36', 'tap_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'C Bore') {
//                 ['c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'BSP Tap') {
//                 ['bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'GD Hole') {
//                 ['gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//                  'gd_cost_dro_radial_drilling'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'Spot Face') {
//                 ['spot_face'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'H7 Hole') {
//                 ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//         });
//     }
// }

// document.querySelector('#coating_type').addEventListener('change', function() {
//     updateCoatingFields();
//     calculateFields();
// });

// function updateCoatingFields() {
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value);
//     const coatingType = document.querySelector('#coating_type').value;
//     const blackeningField = document.querySelector('label:has(input[name="blackening"])');
//     const enpField = document.querySelector('label:has(input[name="enp"])');
//     const flashChromeField = document.querySelector('label:has(input[name="flash_chrome"])');
//     const pcField = document.querySelector('label:has(input[name="pc"])');
//     const zincBlueField = document.querySelector('label:has(input[name="zinc_blue"])');

//     blackeningField.classList.add('hidden');
//     enpField.classList.add('hidden');
//     flashChromeField.classList.add('hidden');
//     pcField.classList.add('hidden');
//     zincBlueField.classList.add('hidden');

//     if (operations.includes('Coating')) {
//         if (coatingType === 'Blackening') blackeningField.classList.remove('hidden');
//         if (coatingType === 'ENP') enpField.classList.remove('hidden');
//         if (coatingType === 'Flash Chrome') flashChromeField.classList.remove('hidden');
//         if (coatingType === 'PC') pcField.classList.remove('hidden');
//         if (coatingType === 'Zinc Blue') zincBlueField.classList.remove('hidden');
//     }
// }

// const inputs = document.querySelectorAll(
//     'input[name="dia"], input[name="length"], input[name="width"], input[name="thickness"], input[name="rmw_str"], ' +
//     '#type, #material, #operation, #fm_side, #hole_type, ' +
//     'input[name="hole_4_8"], input[name="hole_9_13"], input[name="hole_15_22"], ' +
//     'input[name="hole_m4"], input[name="hole_m5"], input[name="hole_m6"], input[name="hole_m8"], ' +
//     'input[name="hole_m10"], input[name="hole_m12"], input[name="hole_m14"], input[name="hole_m16"], ' +
//     'input[name="hole_m18"], input[name="hole_m20"], input[name="hole_m22"], input[name="hole_m24"], ' +
//     'input[name="hole_m25"], input[name="hole_m26"], input[name="hole_m30"], input[name="hole_m36"], ' +
//     'input[name="c_bore_m3_m5"], input[name="c_bore_m6_m10"], input[name="c_bore_m12"], ' +
//     'input[name="c_bore_m14"], input[name="c_bore_m16"], ' +
//     'input[name="bsp_tap_1_8_1_4"], input[name="bsp_tap_1_2_3_8"], input[name="bsp_tap_1_inch"], ' +
//     'input[name="bsp_tap_1_5_2_inch"], input[name="gd_total_hole_length"], ' +
//     'input[name="gd_total_hole_length_dro_radial_drilling"], input[name="spot_face"], ' +
//     'input[name="4_5_h7"], input[name="6_8_h7"], input[name="10_14_h7"], ' +
//     'input[name="15_18_h7"], input[name="20_25_h7"], input[name="25_30_h7"], ' +
//     'input[name="sg"], input[name="sgl"], #ht_required, input[name="ht"], ' +
//     'input[name="fwcam"], #coating_type, input[name="blackening"], ' +
//     'input[name="enp"], input[name="flash_chrome"], input[name="pc"], input[name="zinc_blue"], ' +
//     'input[name="vmc"], input[name="turning"], input[name="cg"], input[name="wire_cut_sp"], ' +
//     'input[name="cnc_turning"], input[name="jg"], input[name="sparking"], input[name="fm"], ' +
//     'input[name="engraving"], input[name="radial_drilling"], input[name="gun_drilling"], input[name="profit_percent"]'
// );
// inputs.forEach(input => input.addEventListener('change', calculateFields));

// function calculateFields() {
//     const type = document.querySelector('#type').value;
//     const material = document.querySelector('#material').value;
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).filter(op => op !== '');
//     const fmSide = document.querySelector('#fm_side').value === "True";
//     const htRequired = document.querySelector('#ht_required').value === "True";
//     const coatingType = document.querySelector('#coating_type').value;
//     const dia = parseFloat(document.querySelector('input[name="dia"]').value) || 0;
//     const length = parseFloat(document.querySelector('input[name="length"]').value) || 0;
//     const width = parseFloat(document.querySelector('input[name="width"]').value) || 0;
//     const thickness = parseFloat(document.querySelector('input[name="thickness"]').value) || 0;
//     const rmwStr = parseFloat(document.querySelector('input[name="rmw_str"]').value) || 0;
//     const fwcam = parseFloat(document.querySelector('input[name="fwcam"]').value) || 0;
//     const profitPercent = parseFloat(document.querySelector('input[name="profit_percent"]').value) || 0;
//     const density = materials[material]?.Density_gm_cc || 0;
//     const costPerKg = materials[material]?.Cost_per_KG || 0;
//     const fmPerSqmm = materials[material]?.FM_per_sqmm || 0;
//     const fmAfterHtPerSqmm = materials[material]?.FM_AFTER_HT_per_sqmm || 0;
//     const htKg = materials[material]?.HT_KG || 0;
//     let rmwCalc = 0;
//     let rmw = 0;
//     let rmc = 0;
//     let fm = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm"]').value) || 0) : 0;
//     let fmSideCost = 0;
//     let fmL = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm_l"]').value) || 0) : 0;
//     let freeHoleCost = 0;
//     let tapHoleCost = 0;
//     let cBoreCost = 0;
//     let bspTapCost = 0;
//     let gdCostGdMachine = 0;
//     let gdCostDroRadialDrilling = 0;
//     let h7HoleCost = 0;
//     let spotFaceCost = 0;
//     let sg = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sg"]').value) || 0) : 0;
//     let sgl = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sgl"]').value) || 0) : 0;
//     let ht = 0;
//     let blackeningCost = 0;
//     let enpCost = 0;
//     let flashChromeCost = 0;
//     let pcCost = 0;
//     let zincBlueCost = 0;
//     let vmc = operations.includes("VMC") ? (parseFloat(document.querySelector('input[name="vmc"]').value) || 0) : 0;
//     let turning = operations.includes("Turning") ? (parseFloat(document.querySelector('input[name="turning"]').value) || 0) : 0;
//     let cg = operations.includes("CG") ? (parseFloat(document.querySelector('input[name="cg"]').value) || 0) : 0;
//     let wireCutSp = operations.includes("Wire Cut") ? (parseFloat(document.querySelector('input[name="wire_cut_sp"]').value) || 0) : 0;
//     let cncTurning = operations.includes("CNC Turning") ? (parseFloat(document.querySelector('input[name="cnc_turning"]').value) || 0) : 0;
//     let jg = operations.includes("JG") ? (parseFloat(document.querySelector('input[name="jg"]').value) || 0) : 0;
//     let sparking = operations.includes("Sparking") ? (parseFloat(document.querySelector('input[name="sparking"]').value) || 0) : 0;
//     let engraving = operations.includes("Engraving") ? (parseFloat(document.querySelector('input[name="engraving"]').value) || 0) : 0;
//     let radialDrilling = operations.includes("Radial Drilling") ? (parseFloat(document.querySelector('input[name="radial_drilling"]').value) || 0) : 0;
//     let gunDrilling = operations.includes("Gun Drilling") ? (parseFloat(document.querySelector('input[name="gun_drilling"]').value) || 0) : 0;

//     if (type === "Pri" && length > 0 && width > 0 && thickness > 0) {
//         rmwCalc = ((length * width * thickness / 1000) * density) / 1000;
//     } else if (type === "Cyl" && dia > 0 && length > 0) {
//         rmwCalc = ((3.14159 * (dia * dia) * length / 4 / 1000) * density) / 1000;
//     }

//     if (type === "Str" && rmwStr > 0) {
//         rmw = rmwStr;
//     } else if (rmwCalc > 0) {
//         rmw = rmwCalc;
//     }

//     if (rmw > 0 && costPerKg > 0) {
//         rmc = rmw * costPerKg;
//     }

//     if (operations.includes("Milling") && type === "Pri" && length >= 250 && width >= 250) {
//         const fmRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fm = length * width * fmRate;
//     }

//     if (operations.includes("Milling") && type === "Pri" && fmSide && length > 0 && width > 0 && thickness > 0) {
//         const fmSideRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fmSideCost = 2 * (length + width) * thickness * fmSideRate;
//     }

//     if (operations.includes("Drilling")) {
//         const holeTypes = Array.from(document.querySelector('#hole_type').selectedOptions)
//             .map(option => option.value)
//             .filter(type => type !== '');

//         if (holeTypes.includes('Free Hole')) {
//             const hole_4_8 = parseFloat(document.querySelector('input[name="hole_4_8"]').value) || 0;
//             const hole_9_13 = parseFloat(document.querySelector('input[name="hole_9_13"]').value) || 0;
//             const hole_15_22 = parseFloat(document.querySelector('input[name="hole_15_22"]').value) || 0;
//             freeHoleCost = (hole_4_8 * drillingCosts["Hole_4_8"].Cost) +
//                            (hole_9_13 * drillingCosts["Hole_9_13"].Cost) +
//                            (hole_15_22 * drillingCosts["Hole_15_22"].Cost);
//         }

//         if (holeTypes.includes('Tap Hole')) {
//             const hole_m4 = parseFloat(document.querySelector('input[name="hole_m4"]').value) || 0;
//             const hole_m5 = parseFloat(document.querySelector('input[name="hole_m5"]').value) || 0;
//             const hole_m6 = parseFloat(document.querySelector('input[name="hole_m6"]').value) || 0;
//             const hole_m8 = parseFloat(document.querySelector('input[name="hole_m8"]').value) || 0;
//             const hole_m10 = parseFloat(document.querySelector('input[name="hole_m10"]').value) || 0;
//             const hole_m12 = parseFloat(document.querySelector('input[name="hole_m12"]').value) || 0;
//             const hole_m14 = parseFloat(document.querySelector('input[name="hole_m14"]').value) || 0;
//             const hole_m16 = parseFloat(document.querySelector('input[name="hole_m16"]').value) || 0;
//             const hole_m18 = parseFloat(document.querySelector('input[name="hole_m18"]').value) || 0;
//             const hole_m20 = parseFloat(document.querySelector('input[name="hole_m20"]').value) || 0;
//             const hole_m22 = parseFloat(document.querySelector('input[name="hole_m22"]').value) || 0;
//             const hole_m24 = parseFloat(document.querySelector('input[name="hole_m24"]').value) || 0;
//             const hole_m25 = parseFloat(document.querySelector('input[name="hole_m25"]').value) || 0;
//             const hole_m26 = parseFloat(document.querySelector('input[name="hole_m26"]').value) || 0;
//             const hole_m30 = parseFloat(document.querySelector('input[name="hole_m30"]').value) || 0;
//             const hole_m36 = parseFloat(document.querySelector('input[name="hole_m36"]').value) || 0;
//             tapHoleCost = (hole_m4 * drillingCosts["Hole_M4"].Cost) +
//                           (hole_m5 * drillingCosts["Hole_M5"].Cost) +
//                           (hole_m6 * drillingCosts["Hole_M6"].Cost) +
//                           (hole_m8 * drillingCosts["Hole_M8"].Cost) +
//                           (hole_m10 * drillingCosts["Hole_M10"].Cost) +
//                           (hole_m12 * drillingCosts["Hole_M12"].Cost) +
//                           (hole_m14 * drillingCosts["Hole_M14"].Cost) +
//                           (hole_m16 * drillingCosts["Hole_M16"].Cost) +
//                           (hole_m18 * drillingCosts["Hole_M18"].Cost) +
//                           (hole_m20 * drillingCosts["Hole_M20"].Cost) +
//                           (hole_m22 * drillingCosts["Hole_M22"].Cost) +
//                           (hole_m24 * drillingCosts["Hole_M24"].Cost) +
//                           (hole_m25 * drillingCosts["Hole_M25"].Cost) +
//                           (hole_m26 * drillingCosts["Hole_M26"].Cost) +
//                           (hole_m30 * drillingCosts["Hole_M30"].Cost) +
//                           (hole_m36 * drillingCosts["Hole_M36"].Cost);
//         }

//         if (holeTypes.includes('C Bore')) {
//             const c_bore_m3_m5 = parseFloat(document.querySelector('input[name="c_bore_m3_m5"]').value) || 0;
//             const c_bore_m6_m10 = parseFloat(document.querySelector('input[name="c_bore_m6_m10"]').value) || 0;
//             const c_bore_m12 = parseFloat(document.querySelector('input[name="c_bore_m12"]').value) || 0;
//             const c_bore_m14 = parseFloat(document.querySelector('input[name="c_bore_m14"]').value) || 0;
//             const c_bore_m16 = parseFloat(document.querySelector('input[name="c_bore_m16"]').value) || 0;
//             cBoreCost = (c_bore_m3_m5 * drillingCosts["C_bore_M3_M5"].Cost) +
//                         (c_bore_m6_m10 * drillingCosts["C_bore_M6_M10"].Cost) +
//                         (c_bore_m12 * drillingCosts["C_bore_M12"].Cost) +
//                         (c_bore_m14 * drillingCosts["C_bore_M14"].Cost) +
//                         (c_bore_m16 * drillingCosts["C_bore_M16"].Cost);
//         }

//         if (holeTypes.includes('BSP Tap')) {
//             const bsp_tap_1_8_1_4 = parseFloat(document.querySelector('input[name="bsp_tap_1_8_1_4"]').value) || 0;
//             const bsp_tap_1_2_3_8 = parseFloat(document.querySelector('input[name="bsp_tap_1_2_3_8"]').value) || 0;
//             const bsp_tap_1_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_inch"]').value) || 0;
//             const bsp_tap_1_5_2_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_5_2_inch"]').value) || 0;
//             bspTapCost = (bsp_tap_1_8_1_4 * drillingCosts["BSP_TAP_1/8_1/4"].Cost) +
//                          (bsp_tap_1_2_3_8 * drillingCosts["BSP_TAP_1/2_3/8"].Cost) +
//                          (bsp_tap_1_inch * drillingCosts["BSP_TAP_1_inch"].Cost) +
//                          (bsp_tap_1_5_2_inch * drillingCosts["BSP_TAP_1.5_2_inch"].Cost);
//         }

//         if (holeTypes.includes('GD Hole')) {
//             const gd_total_hole_length = parseFloat(document.querySelector('input[name="gd_total_hole_length"]').value) || 0;
//             gdCostGdMachine = gd_total_hole_length * drillingCosts["GD_TOTAL_HOLE_LENGTH"].Cost;
//             const gd_total_hole_length_dro_radial_drilling = parseFloat(document.querySelector('input[name="gd_total_hole_length_dro_radial_drilling"]').value) || 0;
//             gdCostDroRadialDrilling = gd_total_hole_length_dro_radial_drilling * drillingCosts["GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING"].Cost;
//         }

//         if (holeTypes.includes('Spot Face')) {
//             const spot_face = parseFloat(document.querySelector('input[name="spot_face"]').value) || 0;
//             spotFaceCost = spot_face * drillingCosts["Spot_face"].Cost;
//         }

//         if (holeTypes.includes('H7 Hole')) {
//             const h7_4_5 = parseFloat(document.querySelector('input[name="4_5_h7"]').value) || 0;
//             const h7_6_8 = parseFloat(document.querySelector('input[name="6_8_h7"]').value) || 0;
//             const h7_10_14 = parseFloat(document.querySelector('input[name="10_14_h7"]').value) || 0;
//             const h7_15_18 = parseFloat(document.querySelector('input[name="15_18_h7"]').value) || 0;
//             const h7_20_25 = parseFloat(document.querySelector('input[name="20_25_h7"]').value) || 0;
//             const h7_25_30 = parseFloat(document.querySelector('input[name="25_30_h7"]').value) || 0;
//             h7HoleCost = (h7_4_5 * drillingCosts["4_5_H7"].Cost) +
//                          (h7_6_8 * drillingCosts["6_8_H7"].Cost) +
//                          (h7_10_14 * drillingCosts["10_14_H7"].Cost) +
//                          (h7_15_18 * drillingCosts["15_18_H7"].Cost) +
//                          (h7_20_25 * drillingCosts["20_25_H7"].Cost) +
//                          (h7_25_30 * drillingCosts["25_30_H7"].Cost);
//         }
//     }

//     if (operations.includes("Grinding") && type === "Pri" && length >= 250 && width >= 250) {
//         sg = length * width * fmPerSqmm;
//     }

//     if (operations.includes("Heat Treatment") && htRequired) {
//         ht = rmw * htKg;
//     }

//     if (operations.includes("Coating") && length > 0 && width > 0 && coatingType) {
//         const areaCm2 = (length / 10) * (width / 10);
//         blackeningCost = coatingType === "Blackening" ? fwcam * coatingCosts["Blackening"].Cost : 0;
//         enpCost = coatingType === "ENP" ? fwcam * coatingCosts["ENP"].Cost : 0;
//         flashChromeCost = coatingType === "Flash Chrome" ? areaCm2 * coatingCosts["Flash Chrome"].Cost : 0;
//         pcCost = coatingType === "PC" ? fwcam * coatingCosts["PC"].Cost : 0;
//         zincBlueCost = coatingType === "Zinc Blue" ? fwcam * coatingCosts["Zinc Blue"].Cost : 0;
//     }

//     if (operations.includes("Radial Drilling")) {
//         radialDrilling = parseFloat(document.querySelector('input[name="radial_drilling"]').value) || 0;
//         radialDrilling *= drillingCosts["Radial Drilling"].Cost;
//     }

//     if (operations.includes("Gun Drilling")) {
//         gunDrilling = parseFloat(document.querySelector('input[name="gun_drilling"]').value) || 0;
//         gunDrilling *= drillingCosts["Gun Drilling"].Cost;
//     }

//     const coatingSum = blackeningCost + enpCost + flashChromeCost + pcCost + zincBlueCost;
//     const total = (
//         engraving + sgl + h7HoleCost + ht + gdCostDroRadialDrilling +
//         gdCostGdMachine + bspTapCost + cBoreCost + tapHoleCost + freeHoleCost +
//         spotFaceCost + fmL + fmSideCost + fm + rmc + vmc + turning + cg + wireCutSp +
//         cncTurning + jg + sparking + coatingSum + radialDrilling + gunDrilling
//     );

//     const withProfit = total * (1 + (profitPercent / 100));

//     const rmwCalcField = document.querySelector('input[name="rmw_calc"]');
//     const rmwField = document.querySelector('input[name="rmw"]');
//     const rmcField = document.querySelector('input[name="rmc"]');
//     const fmField = document.querySelector('input[name="fm"]');
//     const fmSideCostField = document.querySelector('input[name="fm_side_cost"]');
//     const fmLField = document.querySelector('input[name="fm_l"]');
//     const freeHoleCostField = document.querySelector('input[name="free_hole_cost"]');
//     const tapHoleCostField = document.querySelector('input[name="tap_hole_cost"]');
//     const cBoreCostField = document.querySelector('input[name="c_bore_cost"]');
//     const bspTapCostField = document.querySelector('input[name="bsp_tap_cost"]');
//     const gdCostGdMachineField = document.querySelector('input[name="gd_cost_gd_machine"]');
//     const gdCostDroRadialDrillingField = document.querySelector('input[name="gd_cost_dro_radial_drilling"]');
//     const h7HoleCostField = document.querySelector('input[name="h7_hole_cost"]');
//     const sgField = document.querySelector('input[name="sg"]');
//     const sglField = document.querySelector('input[name="sgl"]');
//     const htField = document.querySelector('input[name="ht"]');
//     const blackeningField = document.querySelector('input[name="blackening"]');
//     const enpField = document.querySelector('input[name="enp"]');
//     const flashChromeField = document.querySelector('input[name="flash_chrome"]');
//     const pcField = document.querySelector('input[name="pc"]');
//     const zincBlueField = document.querySelector('input[name="zinc_blue"]');
//     const vmcField = document.querySelector('input[name="vmc"]');
//     const turningField = document.querySelector('input[name="turning"]');
//     const cgField = document.querySelector('input[name="cg"]');
//     const wireCutSpField = document.querySelector('input[name="wire_cut_sp"]');
//     const cncTurningField = document.querySelector('input[name="cnc_turning"]');
//     const jgField = document.querySelector('input[name="jg"]');
//     const sparkingField = document.querySelector('input[name="sparking"]');
//     const engravingField = document.querySelector('input[name="engraving"]');
//     const radialDrillingField = document.querySelector('input[name="radial_drilling"]');
//     const gunDrillingField = document.querySelector('input[name="gun_drilling"]');
//     const totalField = document.querySelector('input[name="total"]');
//     const withProfitField = document.querySelector('input[name="with_profit"]');

//     rmwCalcField.value = rmwCalc > 0 ? rmwCalc.toFixed(2) : '';
//     rmwField.value = rmw > 0 ? rmw.toFixed(2) : '';
//     rmcField.value = rmc > 0 ? rmc.toFixed(2) : '';
//     fmField.value = fm > 0 ? fm.toFixed(2) : (operations.includes("Milling") ? fmField.value : '');
//     fmSideCostField.value = fmSideCost > 0 ? fmSideCost.toFixed(2) : '';
//     fmLField.value = fmL > 0 ? fmL.toFixed(2) : (operations.includes("Milling") ? fmLField.value : '');
//     freeHoleCostField.value = freeHoleCost > 0 ? freeHoleCost.toFixed(2) : '';
//     tapHoleCostField.value = tapHoleCost > 0 ? tapHoleCost.toFixed(2) : '';
//     cBoreCostField.value = cBoreCost > 0 ? cBoreCost.toFixed(2) : '';
//     bspTapCostField.value = bspTapCost > 0 ? bspTapCost.toFixed(2) : '';
//     gdCostGdMachineField.value = gdCostGdMachine > 0 ? gdCostGdMachine.toFixed(2) : '';
//     gdCostDroRadialDrillingField.value = gdCostDroRadialDrilling > 0 ? gdCostDroRadialDrilling.toFixed(2) : '';
//     h7HoleCostField.value = h7HoleCost > 0 ? h7HoleCost.toFixed(2) : '';
//     sgField.value = sg > 0 ? sg.toFixed(2) : (operations.includes("Grinding") ? sgField.value : '');
//     sglField.value = sgl > 0 ? sgl.toFixed(2) : (operations.includes("Grinding") ? sglField.value : '');
//     htField.value = ht > 0 ? ht.toFixed(2) : '';
//     blackeningField.value = blackeningCost > 0 ? blackeningCost.toFixed(2) : '';
//     enpField.value = enpCost > 0 ? enpCost.toFixed(2) : '';
//     flashChromeField.value = flashChromeCost > 0 ? flashChromeCost.toFixed(2) : '';
//     pcField.value = pcCost > 0 ? pcCost.toFixed(2) : '';
//     zincBlueField.value = zincBlueCost > 0 ? zincBlueCost.toFixed(2) : '';
//     vmcField.value = vmc > 0 ? vmc.toFixed(2) : (operations.includes("VMC") ? vmcField.value : '');
//     turningField.value = turning > 0 ? turning.toFixed(2) : (operations.includes("Turning") ? turningField.value : '');
//     cgField.value = cg > 0 ? cg.toFixed(2) : (operations.includes("CG") ? cgField.value : '');
//     wireCutSpField.value = wireCutSp > 0 ? wireCutSp.toFixed(2) : (operations.includes("Wire Cut") ? wireCutSpField.value : '');
//     cncTurningField.value = cncTurning > 0 ? cncTurning.toFixed(2) : (operations.includes("CNC Turning") ? cncTurningField.value : '');
//     jgField.value = jg > 0 ? jg.toFixed(2) : (operations.includes("JG") ? jgField.value : '');
//     sparkingField.value = sparking > 0 ? sparking.toFixed(2) : (operations.includes("Sparking") ? sparkingField.value : '');
//     engravingField.value = engraving > 0 ? engraving.toFixed(2) : (operations.includes("Engraving") ? engravingField.value : '');
//     radialDrillingField.value = radialDrilling > 0 ? radialDrilling.toFixed(2) : (operations.includes("Radial Drilling") ? radialDrillingField.value : '');
//     gunDrillingField.value = gunDrilling > 0 ? gunDrilling.toFixed(2) : (operations.includes("Gun Drilling") ? gunDrillingField.value : '');
//     totalField.value = total > 0 ? total.toFixed(2) : '';
//     withProfitField.value = withProfit > 0 ? withProfit.toFixed(2) : '';
// }

// function saveEstimation() {
//     const form = document.getElementById('costForm');
//     const formData = new FormData(form);
//     const estimationData = {};

//     formData.forEach((value, key) => {
//         if (key === 'operation') {
//             if (!estimationData[key]) estimationData[key] = [];
//             estimationData[key].push(value);
//         } else {
//             estimationData[key] = value;
//         }
//     });

//     if (estimationData['operation']) {
//         estimationData['operation'] = estimationData['operation'].join(', ');
//     }

//     savedEstimations.push(estimationData);
// }

// function downloadExcel() {
//     const allHeaders = Array.from(document.getElementById('costForm').elements)
//         .filter(el => el.name && el.name !== 'operation')
//         .map(el => el.name)
//         .concat(['operation'])
//         .filter((v, i, a) => a.indexOf(v) === i);

//     const headers = excelData.headers.length > 0 ? excelData.headers : allHeaders;

//     const estimationRows = savedEstimations.map(estimation => 
//         headers.map(header => estimation[header] || '')
//     );

//     const allRows = [...excelData.rows, ...estimationRows].filter(row => row.some(cell => cell !== undefined && cell !== ''));

//     const wsData = [headers, ...allRows];

//     const ws = XLSX.utils.aoa_to_sheet(wsData);

//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Cost Estimation');

//     XLSX.writeFile(wb, uploadedFileName);
// }

// const holeFields = [
//     'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost', 
//     'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14', 
//     'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26', 
//     'hole_m30', 'hole_m36', 'tap_hole_cost', 'c_bore_m3_m5', 'c_bore_m6_m10', 
//     'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost', 'bsp_tap_1_8_1_4', 
//     'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost', 
//     'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling', 
//     'gd_cost_dro_radial_drilling', 'spot_face'
// ];
// const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
// const fmFields = ['fm', 'fm_side', 'fm_side_cost', 'fm_l'];
// const grindingFields = ['sg', 'sgl'];
// const heatTreatmentFields = ['ht_required', 'ht'];
// const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
// const vmcFields = ['vmc'];
// const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
// const cgFields = ['cg'];
// const turningFields = ['turning'];
// const cncTurningFields = ['cnc_turning'];
// const jgFields = ['jg'];
// const sparkingFields = ['sparking'];
// const engravingFields = ['engraving'];
// const radialDrillingFields = ['radial_drilling'];
// const gunDrillingFields = ['gun_drilling'];

// holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// fmFields.forEach(name => {
//     const field = name === 'fm_side' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// heatTreatmentFields.forEach(name => {
//     const field = name === 'ht_required' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// coatingFields.forEach(name => {
//     const field = name === 'coating_type' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// engravingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// radialDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// gunDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));





































// const materials = {
//     "MS": {"Density_gm_cc": 7.85, "Cost_per_KG": 80.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "C45": {"Density_gm_cc": 7.85, "Cost_per_KG": 95.0, "FM_per_sqmm": 0.005, "HT_KG": 25.0, "FM_AFTER_HT_per_sqmm": 0.007},
//     "EN24": {"Density_gm_cc": 7.85, "Cost_per_KG": 125.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN354": {"Density_gm_cc": 7.85, "Cost_per_KG": 145.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "20MnCr5": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN47": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN31": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN19": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS410": {"Density_gm_cc": 7.85, "Cost_per_KG": 220.0, "FM_per_sqmm": 0.008, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-7075": {"Density_gm_cc": 2.73, "Cost_per_KG": 730.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "D2": {"Density_gm_cc": 7.85, "Cost_per_KG": 350.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "OHNS": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "DELRIN": {"Density_gm_cc": 1.42, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "NYLON": {"Density_gm_cc": 1.14, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "HYLEM": {"Density_gm_cc": 1.95, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "BRASS": {"Density_gm_cc": 8.5, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "COPPER": {"Density_gm_cc": 8.93, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CARBIDE": {"Density_gm_cc": 15.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CASTING": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "WELDMENTS": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-6061": {"Density_gm_cc": 2.73, "Cost_per_KG": 455.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS304": {"Density_gm_cc": 7.85, "Cost_per_KG": 245.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0}
// };

// const drillingCosts = {
//     "Hole_4_8": {"Cost": 25},
//     "Hole_9_13": {"Cost": 30},
//     "Hole_15_22": {"Cost": 35},
//     "Hole_M4": {"Cost": 20},
//     "Hole_M5": {"Cost": 25},
//     "Hole_M6": {"Cost": 30},
//     "Hole_M8": {"Cost": 40},
//     "Hole_M10": {"Cost": 50},
//     "Hole_M12": {"Cost": 60},
//     "Hole_M14": {"Cost": 60},
//     "Hole_M16": {"Cost": 70},
//     "Hole_M18": {"Cost": 70},
//     "Hole_M20": {"Cost": 120},
//     "Hole_M22": {"Cost": 120},
//     "Hole_M24": {"Cost": 120},
//     "Hole_M25": {"Cost": 200},
//     "Hole_M26": {"Cost": 200},
//     "Hole_M30": {"Cost": 250},
//     "Hole_M36": {"Cost": 300},
//     "C_bore_M3_M5": {"Cost": 30},
//     "C_bore_M6_M10": {"Cost": 40},
//     "C_bore_M12": {"Cost": 50},
//     "C_bore_M14": {"Cost": 60},
//     "C_bore_M16": {"Cost": 80},
//     "BSP_TAP_1/8_1/4": {"Cost": 45},
//     "BSP_TAP_1/2_3/8": {"Cost": 60},
//     "BSP_TAP_1_inch": {"Cost": 120},
//     "BSP_TAP_1.5_2_inch": {"Cost": 200},
//     "GD_TOTAL_HOLE_LENGTH": {"Cost": 3},
//     "GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING": {"Cost": 2},
//     "4_5_H7": {"Cost": 80},
//     "6_8_H7": {"Cost": 100},
//     "10_14_H7": {"Cost": 120},
//     "15_18_H7": {"Cost": 160},
//     "20_25_H7": {"Cost": 220},
//     "25_30_H7": {"Cost": 280},
//     "Spot_face": {"Cost": 30},
//     "Radial Drilling": {"Cost": 1},
//     "Gun Drilling": {"Cost": 1}    
// };

// const coatingCosts = {
//     "Blackening": {"Cost": 20},
//     "ENP": {"Cost": 180},
//     "Flash Chrome": {"Cost": 0.6},
//     "PC": {"Cost": 20},
//     "Zinc Blue": {"Cost": 30}
// };

// let excelData = { headers: [], rows: [] };
// let uploadedFileName = 'cost_estimation.xlsx';
// let savedEstimations = [];

// document.addEventListener('DOMContentLoaded', () => {
//     const materialSelect = new Choices('#material', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Material',
//     });

//     const typeSelect = new Choices('#type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Type',
//     });

//     const operationSelect = new Choices('#operation', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Operations',
//         removeItemButton: true,
//     });

//     const operationChoices = [
//         { value: 'Milling', label: 'Milling' },
//         { value: 'Drilling', label: 'Drilling' },
//         { value: 'Grinding', label: 'Grinding' },
//         { value: 'Heat Treatment', label: 'Heat Treatment' },
//         { value: 'Coating', label: 'Coating' },
//         { value: 'VMC', label: 'VMC' },
//         { value: 'Wire Cut', label: 'Wire Cut' },
//         { value: 'CG', label: 'CG' },
//         { value: 'Turning', label: 'Turning' },
//         { value: 'CNC Turning', label: 'CNC Turning' },
//         { value: 'JG', label: 'JG' },
//         { value: 'Sparking', label: 'Sparking' },
//         { value: 'Engraving', label: 'Engraving' },
//         { value: 'Radial Drilling', label: 'Radial Drilling' },
//         { value: 'Gun Drilling', label: 'Gun Drilling' }
//     ];
//     operationSelect.setChoices(operationChoices, 'value', 'label', true);

//     const fmSideSelect = new Choices('#fm_side', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select FM Side',
//     });

//     const htRequiredSelect = new Choices('#ht_required', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select HT Required',
//     });

//     const coatingTypeSelect = new Choices('#coating_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Coating Type',
//     });

//     const holeTypeSelect = new Choices('#hole_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Hole Types',
//         removeItemButton: true
//     });

//     if (coatingTypeSelect.getValue(true) === '') {
//         const coatingOptions = Object.keys(coatingCosts).map(coating => ({
//             value: coating,
//             label: coating,
//         }));
//         coatingTypeSelect.setChoices(coatingOptions, 'value', 'label', true);
//     }

//     ['blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'].forEach(name => {
//         document.querySelector(`input[name="${name}"]`).setAttribute('readonly', true);
//     });

//     document.getElementById('excelUpload').addEventListener('change', function(e) {
//         const file = e.target.files[0];
//         if (file) {
//             uploadedFileName = file.name;
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 const data = new Uint8Array(e.target.result);
//                 const workbook = XLSX.read(data, { type: 'array' });
//                 const sheetName = workbook.SheetNames[0];
//                 const worksheet = workbook.Sheets[sheetName];
//                 const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

//                 if (jsonData.length > 0) {
//                     excelData.headers = jsonData[0];
//                     excelData.rows = jsonData.slice(1).filter(row => row.some(cell => cell !== undefined && cell !== ''));
//                 } else {
//                     excelData.headers = [];
//                     excelData.rows = [];
//                 }
//             };
//             reader.readAsArrayBuffer(file);
//         }
//     });

//     document.getElementById('saveButton').addEventListener('click', function() {
//         calculateFields();
//         saveEstimation();
//         alert('Estimation saved!');
//     });

//     document.getElementById('downloadButton').addEventListener('click', function() {
//         if (savedEstimations.length === 0 && excelData.rows.length === 0) {
//             alert('No estimations to download!');
//             return;
//         }
//         downloadExcel();
//     });

//     updateOperationBoxes();

//     const operationFields = [
//         'fm', 'fm_side', 'fm_side_cost', 'fm_l',
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face',
//         '4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost',
//         'sg', 'sgl', 'ht_required', 'ht',
//         'coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue',
//         'vmc', 'wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp', 'cg', 'turning',
//         'cnc_turning', 'jg', 'sparking', 'engraving', 'radial_drilling', 'gun_drilling'
//     ];
//     operationFields.forEach(name => {
//         const selector = name === 'fm_side' || name === 'ht_required' || name === 'coating_type' ?
//             `label:has(#${name})` : `label:has(input[name="${name}"])`;
//         document.querySelector(selector).classList.add('hidden');
//     });
// });

// document.querySelector('#type').addEventListener('change', function() {
//     const type = this.value;
//     const diaField = document.querySelector('label[for="dia"]');
//     const lengthField = document.querySelector('label[for="length"]');
//     const widthField = document.querySelector('label[for="width"]');
//     const thicknessField = document.querySelector('label[for="thickness"]');
//     const rmwstrField = document.querySelector('label[for="rmw_str"]');

//     diaField.classList.add('hidden');
//     lengthField.classList.add('hidden');
//     widthField.classList.add('hidden');
//     thicknessField.classList.add('hidden');
//     rmwstrField.classList.add('hidden');

//     if (type === 'Cyl') {
//         diaField.classList.remove('hidden');
//         lengthField.classList.remove('hidden');
//     } else if (type === 'Pri') {
//         lengthField.classList.remove('hidden');
//         widthField.classList.remove('hidden');
//         thicknessField.classList.remove('hidden');
//     } else if (type === 'Str') {
//         rmwstrField.classList.remove('hidden');
//     }
//     calculateFields();
// });

// document.querySelector('#operation').addEventListener('change', function() {
//     const operations = Array.from(this.selectedOptions).map(option => option.value).filter(op => op !== '');
//     updateOperationBoxes();
//     updateOperationFields(operations);
//     calculateFields();
// });

// document.querySelector('#hole_type').addEventListener('change', function() {
//     updateHoleTypeFields();
//     calculateFields();
// });

// function updateOperationBoxes() {
//     const operationSelect = document.querySelector('#operation');
//     const selectedOperations = Array.from(operationSelect.selectedOptions)
//         .map(option => option.value)
//         .filter(op => op !== '');
//     const container = document.querySelector('#operation-box-container');
//     container.innerHTML = '';

//     selectedOperations.forEach(operation => {
//         const box = document.createElement('div');
//         box.className = 'operation-box';
//         box.textContent = operation;
//         container.appendChild(box);
//     });
// }

// function updateOperationFields(operations) {
//     const fmField = document.querySelector('label:has(input[name="fm"])');
//     const fmSideQField = document.querySelector('label:has(#fm_side)');
//     const fmSideField = document.querySelector('label:has(input[name="fm_side_cost"])');
//     const fmLField = document.querySelector('label:has(input[name="fm_l"])');
//     const engravingField = document.querySelector('label:has(input[name="engraving"])');
//     const radialDrillingField = document.querySelector('label:has(input[name="radial_drilling"])');
//     const gunDrillingField = document.querySelector('label:has(input[name="gun_drilling"])');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
//     const grindingFields = ['sg', 'sgl'];
//     const heatTreatmentFields = ['ht_required', 'ht'];
//     const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
//     const vmcFields = ['vmc'];
//     const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
//     const cgFields = ['cg'];
//     const turningFields = ['turning'];
//     const cncTurningFields = ['cnc_turning'];
//     const jgFields = ['jg'];
//     const sparkingFields = ['sparking'];
//     const radialDrillingFields = ['radial_drilling'];
//     const gunDrillingFields = ['gun_drilling'];
//     const holeTypeField = document.querySelector('label[for="hole_type"]');

//     fmField.classList.add('hidden');
//     fmSideQField.classList.add('hidden');
//     fmSideField.classList.add('hidden');
//     fmLField.classList.add('hidden');
//     engravingField.classList.add('hidden');
//     radialDrillingField.classList.add('hidden');
//     gunDrillingField.classList.add('hidden');
//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     heatTreatmentFields.forEach(name => {
//         const field = name === 'ht_required' ?
//             document.querySelector(`label:has(#${name})`) :
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     coatingFields.forEach(name => {
//         const field = name === 'coating_type' ?
//             document.querySelector(`label:has(#${name})`) :
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     radialDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     gunDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     holeTypeField.classList.add('hidden');

//     operations.forEach(operation => {
//         if (operation === 'Milling') {
//             fmField.classList.remove('hidden');
//             fmSideQField.classList.remove('hidden');
//             fmSideField.classList.remove('hidden');
//             fmLField.classList.remove('hidden');
//         }
//         if (operation === 'Drilling') {
//             holeTypeField.classList.remove('hidden');
//         }
//         if (operation === 'Grinding') {
//             grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Heat Treatment') {
//             heatTreatmentFields.forEach(name => {
//                 const field = name === 'ht_required' ?
//                     document.querySelector(`label:has(#${name})`) :
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//         }
//         if (operation === 'Coating') {
//             coatingFields.forEach(name => {
//                 const field = name === 'coating_type' ?
//                     document.querySelector(`label:has(#${name})`) :
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//             updateCoatingFields();
//         }
//         if (operation === 'VMC') {
//             vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Wire Cut') {
//             wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CG') {
//             cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Turning') {
//             turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CNC Turning') {
//             cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'JG') {
//             jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Sparking') {
//             sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Engraving') {
//             engravingField.classList.remove('hidden');
//         }
//         if (operation === 'Radial Drilling') {
//             radialDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Gun Drilling') {
//             gunDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//     });

//     if (!operations.includes('Drilling')) {
//         const holeTypeSelect = Choices.getInstance('#hole_type');
//         holeTypeSelect.removeActiveItems();
//     }
//     updateHoleTypeFields();
// }

// function updateHoleTypeFields() {
//     const holeTypes = Array.from(document.querySelector('#hole_type').selectedOptions)
//         .map(option => option.value)
//         .filter(type => type !== '');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];

//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));

//     if (Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).includes('Drilling')) {
//         holeTypes.forEach(holeType => {
//             if (holeType === 'Free Hole') {
//                 ['hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'Tap Hole') {
//                 ['hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//                  'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//                  'hole_m30', 'hole_m36', 'tap_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'C Bore') {
//                 ['c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'BSP Tap') {
//                 ['bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'GD Hole') {
//                 ['gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//                  'gd_cost_dro_radial_drilling'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'Spot Face') {
//                 ['spot_face'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'H7 Hole') {
//                 ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//         });
//     }
// }

// document.querySelector('#coating_type').addEventListener('change', function() {
//     updateCoatingFields();
//     calculateFields();
// });

// function updateCoatingFields() {
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value);
//     const coatingType = document.querySelector('#coating_type').value;
//     const blackeningField = document.querySelector('label:has(input[name="blackening"])');
//     const enpField = document.querySelector('label:has(input[name="enp"])');
//     const flashChromeField = document.querySelector('label:has(input[name="flash_chrome"])');
//     const pcField = document.querySelector('label:has(input[name="pc"])');
//     const zincBlueField = document.querySelector('label:has(input[name="zinc_blue"])');

//     blackeningField.classList.add('hidden');
//     enpField.classList.add('hidden');
//     flashChromeField.classList.add('hidden');
//     pcField.classList.add('hidden');
//     zincBlueField.classList.add('hidden');

//     if (operations.includes('Coating')) {
//         if (coatingType === 'Blackening') blackeningField.classList.remove('hidden');
//         if (coatingType === 'ENP') enpField.classList.remove('hidden');
//         if (coatingType === 'Flash Chrome') flashChromeField.classList.remove('hidden');
//         if (coatingType === 'PC') pcField.classList.remove('hidden');
//         if (coatingType === 'Zinc Blue') zincBlueField.classList.remove('hidden');
//     }
// }

// const inputs = document.querySelectorAll(
//     'input[name="dia"], input[name="length"], input[name="width"], input[name="thickness"], input[name="rmw_str"], ' +
//     '#type, #material, #operation, #fm_side, #hole_type, ' +
//     'input[name="hole_4_8"], input[name="hole_9_13"], input[name="hole_15_22"], ' +
//     'input[name="hole_m4"], input[name="hole_m5"], input[name="hole_m6"], input[name="hole_m8"], ' +
//     'input[name="hole_m10"], input[name="hole_m12"], input[name="hole_m14"], input[name="hole_m16"], ' +
//     'input[name="hole_m18"], input[name="hole_m20"], input[name="hole_m22"], input[name="hole_m24"], ' +
//     'input[name="hole_m25"], input[name="hole_m26"], input[name="hole_m30"], input[name="hole_m36"], ' +
//     'input[name="c_bore_m3_m5"], input[name="c_bore_m6_m10"], input[name="c_bore_m12"], ' +
//     'input[name="c_bore_m14"], input[name="c_bore_m16"], ' +
//     'input[name="bsp_tap_1_8_1_4"], input[name="bsp_tap_1_2_3_8"], input[name="bsp_tap_1_inch"], ' +
//     'input[name="bsp_tap_1_5_2_inch"], input[name="gd_total_hole_length"], ' +
//     'input[name="gd_total_hole_length_dro_radial_drilling"], input[name="spot_face"], ' +
//     'input[name="4_5_h7"], input[name="6_8_h7"], input[name="10_14_h7"], ' +
//     'input[name="15_18_h7"], input[name="20_25_h7"], input[name="25_30_h7"], ' +
//     'input[name="sg"], input[name="sgl"], #ht_required, input[name="ht"], ' +
//     'input[name="fwcam"], #coating_type, input[name="blackening"], ' +
//     'input[name="enp"], input[name="flash_chrome"], input[name="pc"], input[name="zinc_blue"], ' +
//     'input[name="vmc"], input[name="turning"], input[name="cg"], input[name="wire_cut_sp"], ' +
//     'input[name="cnc_turning"], input[name="jg"], input[name="sparking"], input[name="fm"], ' +
//     'input[name="engraving"], input[name="radial_drilling"], input[name="gun_drilling"], input[name="profit_percent"]'
// );
// inputs.forEach(input => input.addEventListener('change', calculateFields));

// function calculateFields() {
//     const type = document.querySelector('#type').value;
//     const material = document.querySelector('#material').value;
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).filter(op => op !== '');
//     const fmSide = document.querySelector('#fm_side').value === "True";
//     const htRequired = document.querySelector('#ht_required').value === "True";
//     const coatingType = document.querySelector('#coating_type').value;
//     const dia = parseFloat(document.querySelector('input[name="dia"]').value) || 0;
//     const length = parseFloat(document.querySelector('input[name="length"]').value) || 0;
//     const width = parseFloat(document.querySelector('input[name="width"]').value) || 0;
//     const thickness = parseFloat(document.querySelector('input[name="thickness"]').value) || 0;
//     const rmwStr = parseFloat(document.querySelector('input[name="rmw_str"]').value) || 0;
//     const fwcam = parseFloat(document.querySelector('input[name="fwcam"]').value) || 0;
//     const profitPercent = parseFloat(document.querySelector('input[name="profit_percent"]').value) || 0;
//     const density = materials[material]?.Density_gm_cc || 0;
//     const costPerKg = materials[material]?.Cost_per_KG || 0;
//     const fmPerSqmm = materials[material]?.FM_per_sqmm || 0;
//     const fmAfterHtPerSqmm = materials[material]?.FM_AFTER_HT_per_sqmm || 0;
//     const htKg = materials[material]?.HT_KG || 0;
//     let rmwCalc = 0;
//     let rmw = 0;
//     let rmc = 0;
//     let fm = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm"]').value) || 0) : 0;
//     let fmSideCost = 0;
//     let fmL = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm_l"]').value) || 0) : 0;
//     let freeHoleCost = 0;
//     let tapHoleCost = 0;
//     let cBoreCost = 0;
//     let bspTapCost = 0;
//     let gdCostGdMachine = 0;
//     let gdCostDroRadialDrilling = 0;
//     let h7HoleCost = 0;
//     let spotFaceCost = 0;
//     let sg = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sg"]').value) || 0) : 0;
//     let sgl = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sgl"]').value) || 0) : 0;
//     let ht = 0;
//     let blackeningCost = 0;
//     let enpCost = 0;
//     let flashChromeCost = 0;
//     let pcCost = 0;
//     let zincBlueCost = 0;
//     let vmc = operations.includes("VMC") ? (parseFloat(document.querySelector('input[name="vmc"]').value) || 0) : 0;
//     let turning = operations.includes("Turning") ? (parseFloat(document.querySelector('input[name="turning"]').value) || 0) : 0;
//     let cg = operations.includes("CG") ? (parseFloat(document.querySelector('input[name="cg"]').value) || 0) : 0;
//     let wireCutSp = operations.includes("Wire Cut") ? (parseFloat(document.querySelector('input[name="wire_cut_sp"]').value) || 0) : 0;
//     let cncTurning = operations.includes("CNC Turning") ? (parseFloat(document.querySelector('input[name="cnc_turning"]').value) || 0) : 0;
//     let jg = operations.includes("JG") ? (parseFloat(document.querySelector('input[name="jg"]').value) || 0) : 0;
//     let sparking = operations.includes("Sparking") ? (parseFloat(document.querySelector('input[name="sparking"]').value) || 0) : 0;
//     let engraving = operations.includes("Engraving") ? (parseFloat(document.querySelector('input[name="engraving"]').value) || 0) : 0;
//     let radialDrilling = 0;
//     let gunDrilling = 0;

//     if (type === "Pri" && length > 0 && width > 0 && thickness > 0) {
//         rmwCalc = ((length * width * thickness / 1000) * density) / 1000;
//     } else if (type === "Cyl" && dia > 0 && length > 0) {
//         rmwCalc = ((3.14159 * (dia * dia) * length / 4 / 1000) * density) / 1000;
//     }

//     if (type === "Str" && rmwStr > 0) {
//         rmw = rmwStr;
//     } else if (rmwCalc > 0) {
//         rmw = rmwCalc;
//     }

//     if (rmw > 0 && costPerKg > 0) {
//         rmc = rmw * costPerKg;
//     }

//     if (operations.includes("Milling") && type === "Pri" && length >= 250 && width >= 250) {
//         const fmRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fm = length * width * fmRate;
//     }

//     if (operations.includes("Milling") && type === "Pri" && fmSide && length > 0 && width > 0 && thickness > 0) {
//         const fmSideRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fmSideCost = 2 * (length + width) * thickness * fmSideRate;
//     }

//     if (operations.includes("Drilling")) {
//         const holeTypes = Array.from(document.querySelector('#hole_type').selectedOptions)
//             .map(option => option.value)
//             .filter(type => type !== '');

//         if (holeTypes.includes('Free Hole')) {
//             const hole_4_8 = parseFloat(document.querySelector('input[name="hole_4_8"]').value) || 0;
//             const hole_9_13 = parseFloat(document.querySelector('input[name="hole_9_13"]').value) || 0;
//             const hole_15_22 = parseFloat(document.querySelector('input[name="hole_15_22"]').value) || 0;
//             freeHoleCost = (hole_4_8 * drillingCosts["Hole_4_8"].Cost) +
//                            (hole_9_13 * drillingCosts["Hole_9_13"].Cost) +
//                            (hole_15_22 * drillingCosts["Hole_15_22"].Cost);
//         }

//         if (holeTypes.includes('Tap Hole')) {
//             const hole_m4 = parseFloat(document.querySelector('input[name="hole_m4"]').value) || 0;
//             const hole_m5 = parseFloat(document.querySelector('input[name="hole_m5"]').value) || 0;
//             const hole_m6 = parseFloat(document.querySelector('input[name="hole_m6"]').value) || 0;
//             const hole_m8 = parseFloat(document.querySelector('input[name="hole_m8"]').value) || 0;
//             const hole_m10 = parseFloat(document.querySelector('input[name="hole_m10"]').value) || 0;
//             const hole_m12 = parseFloat(document.querySelector('input[name="hole_m12"]').value) || 0;
//             const hole_m14 = parseFloat(document.querySelector('input[name="hole_m14"]').value) || 0;
//             const hole_m16 = parseFloat(document.querySelector('input[name="hole_m16"]').value) || 0;
//             const hole_m18 = parseFloat(document.querySelector('input[name="hole_m18"]').value) || 0;
//             const hole_m20 = parseFloat(document.querySelector('input[name="hole_m20"]').value) || 0;
//             const hole_m22 = parseFloat(document.querySelector('input[name="hole_m22"]').value) || 0;
//             const hole_m24 = parseFloat(document.querySelector('input[name="hole_m24"]').value) || 0;
//             const hole_m25 = parseFloat(document.querySelector('input[name="hole_m25"]').value) || 0;
//             const hole_m26 = parseFloat(document.querySelector('input[name="hole_m26"]').value) || 0;
//             const hole_m30 = parseFloat(document.querySelector('input[name="hole_m30"]').value) || 0;
//             const hole_m36 = parseFloat(document.querySelector('input[name="hole_m36"]').value) || 0;
//             tapHoleCost = (hole_m4 * drillingCosts["Hole_M4"].Cost) +
//                           (hole_m5 * drillingCosts["Hole_M5"].Cost) +
//                           (hole_m6 * drillingCosts["Hole_M6"].Cost) +
//                           (hole_m8 * drillingCosts["Hole_M8"].Cost) +
//                           (hole_m10 * drillingCosts["Hole_M10"].Cost) +
//                           (hole_m12 * drillingCosts["Hole_M12"].Cost) +
//                           (hole_m14 * drillingCosts["Hole_M14"].Cost) +
//                           (hole_m16 * drillingCosts["Hole_M16"].Cost) +
//                           (hole_m18 * drillingCosts["Hole_M18"].Cost) +
//                           (hole_m20 * drillingCosts["Hole_M20"].Cost) +
//                           (hole_m22 * drillingCosts["Hole_M22"].Cost) +
//                           (hole_m24 * drillingCosts["Hole_M24"].Cost) +
//                           (hole_m25 * drillingCosts["Hole_M25"].Cost) +
//                           (hole_m26 * drillingCosts["Hole_M26"].Cost) +
//                           (hole_m30 * drillingCosts["Hole_M30"].Cost) +
//                           (hole_m36 * drillingCosts["Hole_M36"].Cost);
//         }

//         if (holeTypes.includes('C Bore')) {
//             const c_bore_m3_m5 = parseFloat(document.querySelector('input[name="c_bore_m3_m5"]').value) || 0;
//             const c_bore_m6_m10 = parseFloat(document.querySelector('input[name="c_bore_m6_m10"]').value) || 0;
//             const c_bore_m12 = parseFloat(document.querySelector('input[name="c_bore_m12"]').value) || 0;
//             const c_bore_m14 = parseFloat(document.querySelector('input[name="c_bore_m14"]').value) || 0;
//             const c_bore_m16 = parseFloat(document.querySelector('input[name="c_bore_m16"]').value) || 0;
//             cBoreCost = (c_bore_m3_m5 * drillingCosts["C_bore_M3_M5"].Cost) +
//                         (c_bore_m6_m10 * drillingCosts["C_bore_M6_M10"].Cost) +
//                         (c_bore_m12 * drillingCosts["C_bore_M12"].Cost) +
//                         (c_bore_m14 * drillingCosts["C_bore_M14"].Cost) +
//                         (c_bore_m16 * drillingCosts["C_bore_M16"].Cost);
//         }

//         if (holeTypes.includes('BSP Tap')) {
//             const bsp_tap_1_8_1_4 = parseFloat(document.querySelector('input[name="bsp_tap_1_8_1_4"]').value) || 0;
//             const bsp_tap_1_2_3_8 = parseFloat(document.querySelector('input[name="bsp_tap_1_2_3_8"]').value) || 0;
//             const bsp_tap_1_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_inch"]').value) || 0;
//             const bsp_tap_1_5_2_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_5_2_inch"]').value) || 0;
//             bspTapCost = (bsp_tap_1_8_1_4 * drillingCosts["BSP_TAP_1/8_1/4"].Cost) +
//                          (bsp_tap_1_2_3_8 * drillingCosts["BSP_TAP_1/2_3/8"].Cost) +
//                          (bsp_tap_1_inch * drillingCosts["BSP_TAP_1_inch"].Cost) +
//                          (bsp_tap_1_5_2_inch * drillingCosts["BSP_TAP_1.5_2_inch"].Cost);
//         }

//         if (holeTypes.includes('GD Hole')) {
//             const gd_total_hole_length = parseFloat(document.querySelector('input[name="gd_total_hole_length"]').value) || 0;
//             gdCostGdMachine = gd_total_hole_length * drillingCosts["GD_TOTAL_HOLE_LENGTH"].Cost;
//             const gd_total_hole_length_dro_radial_drilling = parseFloat(document.querySelector('input[name="gd_total_hole_length_dro_radial_drilling"]').value) || 0;
//             gdCostDroRadialDrilling = gd_total_hole_length_dro_radial_drilling * drillingCosts["GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING"].Cost;
//         }

//         if (holeTypes.includes('Spot Face')) {
//             const spot_face = parseFloat(document.querySelector('input[name="spot_face"]').value) || 0;
//             spotFaceCost = spot_face * drillingCosts["Spot_face"].Cost;
//         }

//         if (holeTypes.includes('H7 Hole')) {
//             const h7_4_5 = parseFloat(document.querySelector('input[name="4_5_h7"]').value) || 0;
//             const h7_6_8 = parseFloat(document.querySelector('input[name="6_8_h7"]').value) || 0;
//             const h7_10_14 = parseFloat(document.querySelector('input[name="10_14_h7"]').value) || 0;
//             const h7_15_18 = parseFloat(document.querySelector('input[name="15_18_h7"]').value) || 0;
//             const h7_20_25 = parseFloat(document.querySelector('input[name="20_25_h7"]').value) || 0;
//             const h7_25_30 = parseFloat(document.querySelector('input[name="25_30_h7"]').value) || 0;
//             h7HoleCost = (h7_4_5 * drillingCosts["4_5_H7"].Cost) +
//                          (h7_6_8 * drillingCosts["6_8_H7"].Cost) +
//                          (h7_10_14 * drillingCosts["10_14_H7"].Cost) +
//                          (h7_15_18 * drillingCosts["15_18_H7"].Cost) +
//                          (h7_20_25 * drillingCosts["20_25_H7"].Cost) +
//                          (h7_25_30 * drillingCosts["25_30_H7"].Cost);
//         }
//     }

//     if (operations.includes("Grinding") && type === "Pri" && length >= 250 && width >= 250) {
//         sg = length * width * fmPerSqmm;
//     }

//     if (operations.includes("Heat Treatment") && htRequired) {
//         ht = rmw * htKg;
//     }

//     if (operations.includes("Coating") && length > 0 && width > 0 && coatingType) {
//         const areaCm2 = (length / 10) * (width / 10);
//         blackeningCost = coatingType === "Blackening" ? fwcam * coatingCosts["Blackening"].Cost : 0;
//         enpCost = coatingType === "ENP" ? fwcam * coatingCosts["ENP"].Cost : 0;
//         flashChromeCost = coatingType === "Flash Chrome" ? areaCm2 * coatingCosts["Flash Chrome"].Cost : 0;
//         pcCost = coatingType === "PC" ? fwcam * coatingCosts["PC"].Cost : 0;
//         zincBlueCost = coatingType === "Zinc Blue" ? fwcam * coatingCosts["Zinc Blue"].Cost : 0;
//     }

//     if (operations.includes("Radial Drilling")) {
//         radialDrilling = parseFloat(document.querySelector('input[name="radial_drilling"]').value) || 0;
//         radialDrilling = radialDrilling * drillingCosts["Radial Drilling"].Cost;
//     }

//     if (operations.includes("Gun Drilling")) {
//         gunDrilling = parseFloat(document.querySelector('input[name="gun_drilling"]').value) || 0;
//         gunDrilling = gunDrilling * drillingCosts["Gun Drilling"].Cost;
//     }

//     const coatingSum = blackeningCost + enpCost + flashChromeCost + pcCost + zincBlueCost;
//     const total = (
//         engraving + sgl + h7HoleCost + ht + gdCostDroRadialDrilling +
//         gdCostGdMachine + bspTapCost + cBoreCost + tapHoleCost + freeHoleCost +
//         spotFaceCost + fmL + fmSideCost + fm + rmc + vmc + turning + cg + wireCutSp +
//         cncTurning + jg + sparking + coatingSum + radialDrilling + gunDrilling
//     );

//     const withProfit = total * (1 + (profitPercent / 100));

//     const rmwCalcField = document.querySelector('input[name="rmw_calc"]');
//     const rmwField = document.querySelector('input[name="rmw"]');
//     const rmcField = document.querySelector('input[name="rmc"]');
//     const fmField = document.querySelector('input[name="fm"]');
//     const fmSideCostField = document.querySelector('input[name="fm_side_cost"]');
//     const fmLField = document.querySelector('input[name="fm_l"]');
//     const freeHoleCostField = document.querySelector('input[name="free_hole_cost"]');
//     const tapHoleCostField = document.querySelector('input[name="tap_hole_cost"]');
//     const cBoreCostField = document.querySelector('input[name="c_bore_cost"]');
//     const bspTapCostField = document.querySelector('input[name="bsp_tap_cost"]');
//     const gdCostGdMachineField = document.querySelector('input[name="gd_cost_gd_machine"]');
//     const gdCostDroRadialDrillingField = document.querySelector('input[name="gd_cost_dro_radial_drilling"]');
//     const h7HoleCostField = document.querySelector('input[name="h7_hole_cost"]');
//     const sgField = document.querySelector('input[name="sg"]');
//     const sglField = document.querySelector('input[name="sgl"]');
//     const htField = document.querySelector('input[name="ht"]');
//     const blackeningField = document.querySelector('input[name="blackening"]');
//     const enpField = document.querySelector('input[name="enp"]');
//     const flashChromeField = document.querySelector('input[name="flash_chrome"]');
//     const pcField = document.querySelector('input[name="pc"]');
//     const zincBlueField = document.querySelector('input[name="zinc_blue"]');
//     const vmcField = document.querySelector('input[name="vmc"]');
//     const turningField = document.querySelector('input[name="turning"]');
//     const cgField = document.querySelector('input[name="cg"]');
//     const wireCutSpField = document.querySelector('input[name="wire_cut_sp"]');
//     const cncTurningField = document.querySelector('input[name="cnc_turning"]');
//     const jgField = document.querySelector('input[name="jg"]');
//     const sparkingField = document.querySelector('input[name="sparking"]');
//     const engravingField = document.querySelector('input[name="engraving"]');
//     const radialDrillingField = document.querySelector('input[name="radial_drilling"]');
//     const gunDrillingField = document.querySelector('input[name="gun_drilling"]');
//     const totalField = document.querySelector('input[name="total"]');
//     const withProfitField = document.querySelector('input[name="with_profit"]');

//     rmwCalcField.value = rmwCalc > 0 ? rmwCalc.toFixed(2) : '';
//     rmwField.value = rmw > 0 ? rmw.toFixed(2) : '';
//     rmcField.value = rmc > 0 ? rmc.toFixed(2) : '';
//     fmField.value = fm > 0 ? fm.toFixed(2) : (operations.includes("Milling") ? fmField.value : '');
//     fmSideCostField.value = fmSideCost > 0 ? fmSideCost.toFixed(2) : '';
//     fmLField.value = fmL > 0 ? fmL.toFixed(2) : (operations.includes("Milling") ? fmLField.value : '');
//     freeHoleCostField.value = freeHoleCost > 0 ? freeHoleCost.toFixed(2) : '';
//     tapHoleCostField.value = tapHoleCost > 0 ? tapHoleCost.toFixed(2) : '';
//     cBoreCostField.value = cBoreCost > 0 ? cBoreCost.toFixed(2) : '';
//     bspTapCostField.value = bspTapCost > 0 ? bspTapCost.toFixed(2) : '';
//     gdCostGdMachineField.value = gdCostGdMachine > 0 ? gdCostGdMachine.toFixed(2) : '';
//     gdCostDroRadialDrillingField.value = gdCostDroRadialDrilling > 0 ? gdCostDroRadialDrilling.toFixed(2) : '';
//     h7HoleCostField.value = h7HoleCost > 0 ? h7HoleCost.toFixed(2) : '';
//     sgField.value = sg > 0 ? sg.toFixed(2) : (operations.includes("Grinding") ? sgField.value : '');
//     sglField.value = sgl > 0 ? sgl.toFixed(2) : (operations.includes("Grinding") ? sglField.value : '');
//     htField.value = ht > 0 ? ht.toFixed(2) : '';
//     blackeningField.value = blackeningCost > 0 ? blackeningCost.toFixed(2) : '';
//     enpField.value = enpCost > 0 ? enpCost.toFixed(2) : '';
//     flashChromeField.value = flashChromeCost > 0 ? flashChromeCost.toFixed(2) : '';
//     pcField.value = pcCost > 0 ? pcCost.toFixed(2) : '';
//     zincBlueField.value = zincBlueCost > 0 ? zincBlueCost.toFixed(2) : '';
//     vmcField.value = vmc > 0 ? vmc.toFixed(2) : (operations.includes("VMC") ? vmcField.value : '');
//     turningField.value = turning > 0 ? turning.toFixed(2) : (operations.includes("Turning") ? turningField.value : '');
//     cgField.value = cg > 0 ? cg.toFixed(2) : (operations.includes("CG") ? cgField.value : '');
//     wireCutSpField.value = wireCutSp > 0 ? wireCutSp.toFixed(2) : (operations.includes("Wire Cut") ? wireCutSpField.value : '');
//     cncTurningField.value = cncTurning > 0 ? cncTurning.toFixed(2) : (operations.includes("CNC Turning") ? cncTurningField.value : '');
//     jgField.value = jg > 0 ? jg.toFixed(2) : (operations.includes("JG") ? jgField.value : '');
//     sparkingField.value = sparking > 0 ? sparking.toFixed(2) : (operations.includes("Sparking") ? sparkingField.value : '');
//     engravingField.value = engraving > 0 ? engraving.toFixed(2) : (operations.includes("Engraving") ? engravingField.value : '');
//     radialDrillingField.value = radialDrilling > 0 ? radialDrilling.toFixed(2) : (operations.includes("Radial Drilling") ? radialDrillingField.value : '');
//     gunDrillingField.value = gunDrilling > 0 ? gunDrilling.toFixed(2) : (operations.includes("Gun Drilling") ? gunDrillingField.value : '');
//     totalField.value = total > 0 ? total.toFixed(2) : '';
//     withProfitField.value = withProfit > 0 ? withProfit.toFixed(2) : '';
// }

// function saveEstimation() {
//     const form = document.getElementById('costForm');
//     const formData = new FormData(form);
//     const estimationData = {};

//     formData.forEach((value, key) => {
//         if (key === 'operation') {
//             if (!estimationData[key]) estimationData[key] = [];
//             estimationData[key].push(value);
//         } else {
//             estimationData[key] = value;
//         }
//     });

//     if (estimationData['operation']) {
//         estimationData['operation'] = estimationData['operation'].join(', ');
//     }

//     savedEstimations.push(estimationData);
// }

// function downloadExcel() {
//     const allHeaders = Array.from(document.getElementById('costForm').elements)
//         .filter(el => el.name && el.name !== 'operation')
//         .map(el => el.name)
//         .concat(['operation'])
//         .filter((v, i, a) => a.indexOf(v) === i);

//     const headers = excelData.headers.length > 0 ? excelData.headers : allHeaders;

//     const estimationRows = savedEstimations.map(estimation => 
//         headers.map(header => estimation[header] || '')
//     );

//     const allRows = [...excelData.rows, ...estimationRows].filter(row => row.some(cell => cell !== undefined && cell !== ''));

//     const wsData = [headers, ...allRows];

//     const ws = XLSX.utils.aoa_to_sheet(wsData);

//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Cost Estimation');

//     XLSX.writeFile(wb, uploadedFileName);
// }

// const holeFields = [
//     'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost', 
//     'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14', 
//     'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26', 
//     'hole_m30', 'hole_m36', 'tap_hole_cost', 'c_bore_m3_m5', 'c_bore_m6_m10', 
//     'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost', 'bsp_tap_1_8_1_4', 
//     'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost', 
//     'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling', 
//     'gd_cost_dro_radial_drilling', 'spot_face'
// ];
// const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
// const fmFields = ['fm', 'fm_side', 'fm_side_cost', 'fm_l'];
// const grindingFields = ['sg', 'sgl'];
// const heatTreatmentFields = ['ht_required', 'ht'];
// const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
// const vmcFields = ['vmc'];
// const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
// const cgFields = ['cg'];
// const turningFields = ['turning'];
// const cncTurningFields = ['cnc_turning'];
// const jgFields = ['jg'];
// const sparkingFields = ['sparking'];
// const engravingFields = ['engraving'];
// const radialDrillingFields = ['radial_drilling'];
// const gunDrillingFields = ['gun_drilling'];

// holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// fmFields.forEach(name => {
//     const field = name === 'fm_side' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// heatTreatmentFields.forEach(name => {
//     const field = name === 'ht_required' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// coatingFields.forEach(name => {
//     const field = name === 'coating_type' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// engravingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// radialDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// gunDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));








































// const materials = {
//     "MS": {"Density_gm_cc": 7.85, "Cost_per_KG": 80.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "C45": {"Density_gm_cc": 7.85, "Cost_per_KG": 95.0, "FM_per_sqmm": 0.005, "HT_KG": 25.0, "FM_AFTER_HT_per_sqmm": 0.007},
//     "EN24": {"Density_gm_cc": 7.85, "Cost_per_KG": 125.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN354": {"Density_gm_cc": 7.85, "Cost_per_KG": 145.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "20MnCr5": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN47": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN31": {"Density_gm_cc": 7.85, "Cost_per_KG": 100.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN19": {"Density_gm_cc": 7.85, "Cost_per_KG": 75.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS410": {"Density_gm_cc": 7.85, "Cost_per_KG": 220.0, "FM_per_sqmm": 0.008, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-7075": {"Density_gm_cc": 2.73, "Cost_per_KG": 730.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "D2": {"Density_gm_cc": 7.85, "Cost_per_KG": 350.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "OHNS": {"Density_gm_cc": 7.85, "Cost_per_KG": 120.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "DELRIN": {"Density_gm_cc": 1.42, "Cost_per_KG": 550.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "NYLON": {"Density_gm_cc": 1.14, "Cost_per_KG": 500.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "HYLEM": {"Density_gm_cc": 1.95, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "BRASS": {"Density_gm_cc": 8.5, "Cost_per_KG": 600.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "COPPER": {"Density_gm_cc": 8.93, "Cost_per_KG": 700.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CARBIDE": {"Density_gm_cc": 15.0, "Cost_per_KG": 1600.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CASTING": {"Density_gm_cc": 0.0, "Cost_per_KG": 300.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "WELDMENTS": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-6061": {"Density_gm_cc": 2.73, "Cost_per_KG": 455.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS304": {"Density_gm_cc": 7.85, "Cost_per_KG": 245.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0}
// };

// const drillingCosts = {
//     "Hole_4_8": {"Cost": 25},
//     "Hole_9_13": {"Cost": 30},
//     "Hole_15_22": {"Cost": 35},
//     "Hole_M4": {"Cost": 20},
//     "Hole_M5": {"Cost": 25},
//     "Hole_M6": {"Cost": 30},
//     "Hole_M8": {"Cost": 40},
//     "Hole_M10": {"Cost": 50},
//     "Hole_M12": {"Cost": 60},
//     "Hole_M14": {"Cost": 60},
//     "Hole_M16": {"Cost": 70},
//     "Hole_M18": {"Cost": 70},
//     "Hole_M20": {"Cost": 120},
//     "Hole_M22": {"Cost": 120},
//     "Hole_M24": {"Cost": 120},
//     "Hole_M25": {"Cost": 200},
//     "Hole_M26": {"Cost": 200},
//     "Hole_M30": {"Cost": 250},
//     "Hole_M36": {"Cost": 300},
//     "C_bore_M3_M5": {"Cost": 30},
//     "C_bore_M6_M10": {"Cost": 40},
//     "C_bore_M12": {"Cost": 50},
//     "C_bore_M14": {"Cost": 60},
//     "C_bore_M16": {"Cost": 80},
//     "BSP_TAP_1/8_1/4": {"Cost": 45},
//     "BSP_TAP_1/2_3/8": {"Cost": 60},
//     "BSP_TAP_1_inch": {"Cost": 120},
//     "BSP_TAP_1.5_2_inch": {"Cost": 200},
//     "GD_TOTAL_HOLE_LENGTH": {"Cost": 3},
//     "GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING": {"Cost": 2},
//     "4_5_H7": {"Cost": 80},
//     "6_8_H7": {"Cost": 100},
//     "10_14_H7": {"Cost": 120},
//     "15_18_H7": {"Cost": 160},
//     "20_25_H7": {"Cost": 220},
//     "25_30_H7": {"Cost": 280},
//     "Spot_face": {"Cost": 30},
//     "Radial Drilling": {"Cost": 1},
//     "Gun Drilling": {"Cost": 1}    
// };

// const coatingCosts = {
//     "Blackening": {"Cost": 20},
//     "ENP": {"Cost": 180},
//     "Flash Chrome": {"Cost": 0.6},
//     "PC": {"Cost": 20},
//     "Zinc Blue": {"Cost": 30}
// };

// let excelData = { headers: [], rows: [] };
// let uploadedFileName = 'cost_estimation.xlsx';
// let savedEstimations = [];

// document.addEventListener('DOMContentLoaded', () => {
//     const materialSelect = new Choices('#material', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Material',
//     });

//     const typeSelect = new Choices('#type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Type',
//     });

//     const operationSelect = new Choices('#operation', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Operations',
//         removeItemButton: true,
//     });

//     const operationChoices = [
//         { value: 'Milling', label: 'Milling' },
//         { value: 'Drilling', label: 'Drilling' },
//         { value: 'Grinding', label: 'Grinding' },
//         { value: 'Heat Treatment', label: 'Heat Treatment' },
//         { value: 'Coating', label: 'Coating' },
//         { value: 'VMC', label: 'VMC' },
//         { value: 'Wire Cut', label: 'Wire Cut' },
//         { value: 'CG', label: 'CG' },
//         { value: 'Turning', label: 'Turning' },
//         { value: 'CNC Turning', label: 'CNC Turning' },
//         { value: 'JG', label: 'JG' },
//         { value: 'Sparking', label: 'Sparking' },
//         { value: 'Engraving', label: 'Engraving' },
//         { value: 'Radial Drilling', label: 'Radial Drilling' },
//         { value: 'Gun Drilling', label: 'Gun Drilling' }
//     ];
//     operationSelect.setChoices(operationChoices, 'value', 'label', true);

//     const fmSideSelect = new Choices('#fm_side', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select FM Side',
//     });

//     const htRequiredSelect = new Choices('#ht_required', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select HT Required',
//     });

//     const coatingTypeSelect = new Choices('#coating_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Coating Type',
//     });

//     const holeTypeSelect = new Choices('#hole_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Hole Types',
//         removeItemButton: true
//     });

//     if (coatingTypeSelect.getValue(true) === '') {
//         const coatingOptions = Object.keys(coatingCosts).map(coating => ({
//             value: coating,
//             label: coating,
//         }));
//         coatingTypeSelect.setChoices(coatingOptions, 'value', 'label', true);
//     }

//     ['blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'].forEach(name => {
//         document.querySelector(`input[name="${name}"]`).setAttribute('readonly', true);
//     });

//     document.getElementById('excelUpload').addEventListener('change', function(e) {
//         const file = e.target.files[0];
//         if (file) {
//             uploadedFileName = file.name;
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 const data = new Uint8Array(e.target.result);
//                 const workbook = XLSX.read(data, { type: 'array' });
//                 const sheetName = workbook.SheetNames[0];
//                 const worksheet = workbook.Sheets[sheetName];
//                 const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

//                 if (jsonData.length > 0) {
//                     excelData.headers = jsonData[0];
//                     excelData.rows = jsonData.slice(1).filter(row => row.some(cell => cell !== undefined && cell !== ''));
//                 } else {
//                     excelData.headers = [];
//                     excelData.rows = [];
//                 }
//             };
//             reader.readAsArrayBuffer(file);
//         }
//     });

//     document.getElementById('saveButton').addEventListener('click', function() {
//         calculateFields();
//         saveEstimation();
//         alert('Estimation saved!');
//     });

//     document.getElementById('downloadButton').addEventListener('click', function() {
//         if (savedEstimations.length === 0 && excelData.rows.length === 0) {
//             alert('No estimations to download!');
//             return;
//         }
//         downloadExcel();
//     });

//     updateOperationBoxes();

//     const operationFields = [
//         'fm', 'fm_side', 'fm_side_cost', 'fm_l',
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face',
//         '4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost',
//         'sg', 'sgl', 'ht_required', 'ht',
//         'coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue',
//         'vmc', 'wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp', 'cg', 'turning',
//         'cnc_turning', 'jg', 'sparking', 'engraving', 'radial_drilling', 'gun_drilling'
//     ];
//     operationFields.forEach(name => {
//         const selector = name === 'fm_side' || name === 'ht_required' || name === 'coating_type' ?
//             `label:has(#${name})` : `label:has(input[name="${name}"])`;
//         document.querySelector(selector).classList.add('hidden');
//     });
// });

// document.querySelector('#type').addEventListener('change', function() {
//     const type = this.value;
//     const diaField = document.querySelector('label[for="dia"]');
//     const lengthField = document.querySelector('label[for="length"]');
//     const widthField = document.querySelector('label[for="width"]');
//     const thicknessField = document.querySelector('label[for="thickness"]');
//     const rmwstrField = document.querySelector('label[for="rmw_str"]');

//     diaField.classList.add('hidden');
//     lengthField.classList.add('hidden');
//     widthField.classList.add('hidden');
//     thicknessField.classList.add('hidden');
//     rmwstrField.classList.add('hidden');

//     if (type === 'Cyl') {
//         diaField.classList.remove('hidden');
//         lengthField.classList.remove('hidden');
//     } else if (type === 'Pri') {
//         lengthField.classList.remove('hidden');
//         widthField.classList.remove('hidden');
//         thicknessField.classList.remove('hidden');
//     } else if (type === 'Str') {
//         rmwstrField.classList.remove('hidden');
//     }
//     calculateFields();
// });

// document.querySelector('#operation').addEventListener('change', function() {
//     const operations = Array.from(this.selectedOptions).map(option => option.value).filter(op => op !== '');
//     updateOperationBoxes();
//     updateOperationFields(operations);
//     calculateFields();
// });

// document.querySelector('#hole_type').addEventListener('change', function() {
//     updateHoleTypeFields();
//     calculateFields();
// });

// function updateOperationBoxes() {
//     const operationSelect = document.querySelector('#operation');
//     const selectedOperations = Array.from(operationSelect.selectedOptions)
//         .map(option => option.value)
//         .filter(op => op !== '');
//     const container = document.querySelector('#operation-box-container');
//     container.innerHTML = '';

//     selectedOperations.forEach(operation => {
//         const box = document.createElement('div');
//         box.className = 'operation-box';
//         box.textContent = operation;
//         container.appendChild(box);
//     });
// }

// function updateOperationFields(operations) {
//     const fmField = document.querySelector('label:has(input[name="fm"])');
//     const fmSideQField = document.querySelector('label:has(#fm_side)');
//     const fmSideField = document.querySelector('label:has(input[name="fm_side_cost"])');
//     const fmLField = document.querySelector('label:has(input[name="fm_l"])');
//     const engravingField = document.querySelector('label:has(input[name="engraving"])');
//     const radialDrillingField = document.querySelector('label:has(input[name="radial_drilling"])');
//     const gunDrillingField = document.querySelector('label:has(input[name="gun_drilling"])');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
//     const grindingFields = ['sg', 'sgl'];
//     const heatTreatmentFields = ['ht_required', 'ht'];
//     const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
//     const vmcFields = ['vmc'];
//     const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
//     const cgFields = ['cg'];
//     const turningFields = ['turning'];
//     const cncTurningFields = ['cnc_turning'];
//     const jgFields = ['jg'];
//     const sparkingFields = ['sparking'];
//     const radialDrillingFields = ['radial_drilling'];
//     const gunDrillingFields = ['gun_drilling'];
//     const holeTypeField = document.querySelector('label[for="hole_type"]');

//     fmField.classList.add('hidden');
//     fmSideQField.classList.add('hidden');
//     fmSideField.classList.add('hidden');
//     fmLField.classList.add('hidden');
//     engravingField.classList.add('hidden');
//     radialDrillingField.classList.add('hidden');
//     gunDrillingField.classList.add('hidden');
//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     heatTreatmentFields.forEach(name => {
//         const field = name === 'ht_required' ?
//             document.querySelector(`label:has(#${name})`) :
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     coatingFields.forEach(name => {
//         const field = name === 'coating_type' ?
//             document.querySelector(`label:has(#${name})`) :
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     radialDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     gunDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     holeTypeField.classList.add('hidden');

//     operations.forEach(operation => {
//         if (operation === 'Milling') {
//             fmField.classList.remove('hidden');
//             fmSideQField.classList.remove('hidden');
//             fmSideField.classList.remove('hidden');
//             fmLField.classList.remove('hidden');
//         }
//         if (operation === 'Drilling') {
//             holeTypeField.classList.remove('hidden');
//         }
//         if (operation === 'Grinding') {
//             grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Heat Treatment') {
//             heatTreatmentFields.forEach(name => {
//                 const field = name === 'ht_required' ?
//                     document.querySelector(`label:has(#${name})`) :
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//         }
//         if (operation === 'Coating') {
//             coatingFields.forEach(name => {
//                 const field = name === 'coating_type' ?
//                     document.querySelector(`label:has(#${name})`) :
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//             updateCoatingFields();
//         }
//         if (operation === 'VMC') {
//             vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Wire Cut') {
//             wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CG') {
//             cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Turning') {
//             turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CNC Turning') {
//             cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'JG') {
//             jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Sparking') {
//             sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Engraving') {
//             engravingField.classList.remove('hidden');
//         }
//         if (operation === 'Radial Drilling') {
//             radialDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Gun Drilling') {
//             gunDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//     });

//     if (!operations.includes('Drilling')) {
//         const holeTypeSelect = Choices.getInstance('#hole_type');
//         holeTypeSelect.removeActiveItems();
//     }
//     updateHoleTypeFields();
// }

// function updateHoleTypeFields() {
//     const holeTypes = Array.from(document.querySelector('#hole_type').selectedOptions)
//         .map(option => option.value)
//         .filter(type => type !== '');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];

//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));

//     if (Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).includes('Drilling')) {
//         holeTypes.forEach(holeType => {
//             if (holeType === 'Free Hole') {
//                 ['hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'Tap Hole') {
//                 ['hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//                  'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//                  'hole_m30', 'hole_m36', 'tap_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'C Bore') {
//                 ['c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'BSP Tap') {
//                 ['bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'GD Hole') {
//                 ['gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//                  'gd_cost_dro_radial_drilling'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'Spot Face') {
//                 ['spot_face'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'H7 Hole') {
//                 ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//         });
//     }
// }

// document.querySelector('#coating_type').addEventListener('change', function() {
//     updateCoatingFields();
//     calculateFields();
// });

// function updateCoatingFields() {
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value);
//     const coatingType = document.querySelector('#coating_type').value;
//     const blackeningField = document.querySelector('label:has(input[name="blackening"])');
//     const enpField = document.querySelector('label:has(input[name="enp"])');
//     const flashChromeField = document.querySelector('label:has(input[name="flash_chrome"])');
//     const pcField = document.querySelector('label:has(input[name="pc"])');
//     const zincBlueField = document.querySelector('label:has(input[name="zinc_blue"])');

//     blackeningField.classList.add('hidden');
//     enpField.classList.add('hidden');
//     flashChromeField.classList.add('hidden');
//     pcField.classList.add('hidden');
//     zincBlueField.classList.add('hidden');

//     if (operations.includes('Coating')) {
//         if (coatingType === 'Blackening') blackeningField.classList.remove('hidden');
//         if (coatingType === 'ENP') enpField.classList.remove('hidden');
//         if (coatingType === 'Flash Chrome') flashChromeField.classList.remove('hidden');
//         if (coatingType === 'PC') pcField.classList.remove('hidden');
//         if (coatingType === 'Zinc Blue') zincBlueField.classList.remove('hidden');
//     }
// }

// const inputs = document.querySelectorAll(
//     'input[name="dia"], input[name="length"], input[name="width"], input[name="thickness"], input[name="rmw_str"], ' +
//     '#type, #material, #operation, #fm_side, #hole_type, ' +
//     'input[name="hole_4_8"], input[name="hole_9_13"], input[name="hole_15_22"], ' +
//     'input[name="hole_m4"], input[name="hole_m5"], input[name="hole_m6"], input[name="hole_m8"], ' +
//     'input[name="hole_m10"], input[name="hole_m12"], input[name="hole_m14"], input[name="hole_m16"], ' +
//     'input[name="hole_m18"], input[name="hole_m20"], input[name="hole_m22"], input[name="hole_m24"], ' +
//     'input[name="hole_m25"], input[name="hole_m26"], input[name="hole_m30"], input[name="hole_m36"], ' +
//     'input[name="c_bore_m3_m5"], input[name="c_bore_m6_m10"], input[name="c_bore_m12"], ' +
//     'input[name="c_bore_m14"], input[name="c_bore_m16"], ' +
//     'input[name="bsp_tap_1_8_1_4"], input[name="bsp_tap_1_2_3_8"], input[name="bsp_tap_1_inch"], ' +
//     'input[name="bsp_tap_1_5_2_inch"], input[name="gd_total_hole_length"], ' +
//     'input[name="gd_total_hole_length_dro_radial_drilling"], input[name="spot_face"], ' +
//     'input[name="4_5_h7"], input[name="6_8_h7"], input[name="10_14_h7"], ' +
//     'input[name="15_18_h7"], input[name="20_25_h7"], input[name="25_30_h7"], ' +
//     'input[name="sg"], input[name="sgl"], #ht_required, input[name="ht"], ' +
//     'input[name="fwcam"], #coating_type, input[name="blackening"], ' +
//     'input[name="enp"], input[name="flash_chrome"], input[name="pc"], input[name="zinc_blue"], ' +
//     'input[name="vmc"], input[name="turning"], input[name="cg"], input[name="wire_cut_sp"], ' +
//     'input[name="cnc_turning"], input[name="jg"], input[name="sparking"], input[name="fm"], ' +
//     'input[name="engraving"], input[name="radial_drilling"], input[name="gun_drilling"], ' +
//     'input[name="miscellaneous"], input[name="profit_percent"]'
// );
// inputs.forEach(input => input.addEventListener('change', calculateFields));

// function calculateFields() {
//     const type = document.querySelector('#type').value;
//     const material = document.querySelector('#material').value;
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).filter(op => op !== '');
//     const fmSide = document.querySelector('#fm_side').value === "True";
//     const htRequired = document.querySelector('#ht_required').value === "True";
//     const coatingType = document.querySelector('#coating_type').value;
//     const dia = parseFloat(document.querySelector('input[name="dia"]').value) || 0;
//     const length = parseFloat(document.querySelector('input[name="length"]').value) || 0;
//     const width = parseFloat(document.querySelector('input[name="width"]').value) || 0;
//     const thickness = parseFloat(document.querySelector('input[name="thickness"]').value) || 0;
//     const rmwStr = parseFloat(document.querySelector('input[name="rmw_str"]').value) || 0;
//     const fwcam = parseFloat(document.querySelector('input[name="fwcam"]').value) || 0;
//     const profitPercent = parseFloat(document.querySelector('input[name="profit_percent"]').value) || 0;
//     const miscellaneous = parseFloat(document.querySelector('input[name="miscellaneous"]').value) || 0;
//     const density = materials[material]?.Density_gm_cc || 0;
//     const costPerKg = materials[material]?.Cost_per_KG || 0;
//     const fmPerSqmm = materials[material]?.FM_per_sqmm || 0;
//     const fmAfterHtPerSqmm = materials[material]?.FM_AFTER_HT_per_sqmm || 0;
//     const htKg = materials[material]?.HT_KG || 0;
//     let rmwCalc = 0;
//     let rmw = 0;
//     let rmc = 0;
//     let fm = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm"]').value) || 0) : 0;
//     let fmSideCost = 0;
//     let fmL = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm_l"]').value) || 0) : 0;
//     let freeHoleCost = 0;
//     let tapHoleCost = 0;
//     let cBoreCost = 0;
//     let bspTapCost = 0;
//     let gdCostGdMachine = 0;
//     let gdCostDroRadialDrilling = 0;
//     let h7HoleCost = 0;
//     let spotFaceCost = 0;
//     let sg = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sg"]').value) || 0) : 0;
//     let sgl = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sgl"]').value) || 0) : 0;
//     let ht = 0;
//     let blackeningCost = 0;
//     let enpCost = 0;
//     let flashChromeCost = 0;
//     let pcCost = 0;
//     let zincBlueCost = 0;
//     let vmc = operations.includes("VMC") ? (parseFloat(document.querySelector('input[name="vmc"]').value) || 0) : 0;
//     let turning = operations.includes("Turning") ? (parseFloat(document.querySelector('input[name="turning"]').value) || 0) : 0;
//     let cg = operations.includes("CG") ? (parseFloat(document.querySelector('input[name="cg"]').value) || 0) : 0;
//     let wireCutSp = operations.includes("Wire Cut") ? (parseFloat(document.querySelector('input[name="wire_cut_sp"]').value) || 0) : 0;
//     let cncTurning = operations.includes("CNC Turning") ? (parseFloat(document.querySelector('input[name="cnc_turning"]').value) || 0) : 0;
//     let jg = operations.includes("JG") ? (parseFloat(document.querySelector('input[name="jg"]').value) || 0) : 0;
//     let sparking = operations.includes("Sparking") ? (parseFloat(document.querySelector('input[name="sparking"]').value) || 0) : 0;
//     let engraving = operations.includes("Engraving") ? (parseFloat(document.querySelector('input[name="engraving"]').value) || 0) : 0;
//     let radialDrilling = 0;
//     let gunDrilling = 0;

//     if (type === "Pri" && length > 0 && width > 0 && thickness > 0) {
//         rmwCalc = ((length * width * thickness / 1000) * density) / 1000;
//     } else if (type === "Cyl" && dia > 0 && length > 0) {
//         rmwCalc = ((3.14159 * (dia * dia) * length / 4 / 1000) * density) / 1000;
//     }

//     if (type === "Str" && rmwStr > 0) {
//         rmw = rmwStr;
//     } else if (rmwCalc > 0) {
//         rmw = rmwCalc;
//     }

//     if (rmw > 0 && costPerKg > 0) {
//         rmc = rmw * costPerKg;
//     }

//     if (operations.includes("Milling") && type === "Pri" && length >= 250 && width >= 250) {
//         const fmRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fm = length * width * fmRate;
//     }

//     if (operations.includes("Milling") && type === "Pri" && fmSide && length > 0 && width > 0 && thickness > 0) {
//         const fmSideRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fmSideCost = 2 * (length + width) * thickness * fmSideRate;
//     }

//     if (operations.includes("Drilling")) {
//         const holeTypes = Array.from(document.querySelector('#hole_type').selectedOptions)
//             .map(option => option.value)
//             .filter(type => type !== '');

//         if (holeTypes.includes('Free Hole')) {
//             const hole_4_8 = parseFloat(document.querySelector('input[name="hole_4_8"]').value) || 0;
//             const hole_9_13 = parseFloat(document.querySelector('input[name="hole_9_13"]').value) || 0;
//             const hole_15_22 = parseFloat(document.querySelector('input[name="hole_15_22"]').value) || 0;
//             freeHoleCost = (hole_4_8 * drillingCosts["Hole_4_8"].Cost) +
//                            (hole_9_13 * drillingCosts["Hole_9_13"].Cost) +
//                            (hole_15_22 * drillingCosts["Hole_15_22"].Cost);
//         }

//         if (holeTypes.includes('Tap Hole')) {
//             const hole_m4 = parseFloat(document.querySelector('input[name="hole_m4"]').value) || 0;
//             const hole_m5 = parseFloat(document.querySelector('input[name="hole_m5"]').value) || 0;
//             const hole_m6 = parseFloat(document.querySelector('input[name="hole_m6"]').value) || 0;
//             const hole_m8 = parseFloat(document.querySelector('input[name="hole_m8"]').value) || 0;
//             const hole_m10 = parseFloat(document.querySelector('input[name="hole_m10"]').value) || 0;
//             const hole_m12 = parseFloat(document.querySelector('input[name="hole_m12"]').value) || 0;
//             const hole_m14 = parseFloat(document.querySelector('input[name="hole_m14"]').value) || 0;
//             const hole_m16 = parseFloat(document.querySelector('input[name="hole_m16"]').value) || 0;
//             const hole_m18 = parseFloat(document.querySelector('input[name="hole_m18"]').value) || 0;
//             const hole_m20 = parseFloat(document.querySelector('input[name="hole_m20"]').value) || 0;
//             const hole_m22 = parseFloat(document.querySelector('input[name="hole_m22"]').value) || 0;
//             const hole_m24 = parseFloat(document.querySelector('input[name="hole_m24"]').value) || 0;
//             const hole_m25 = parseFloat(document.querySelector('input[name="hole_m25"]').value) || 0;
//             const hole_m26 = parseFloat(document.querySelector('input[name="hole_m26"]').value) || 0;
//             const hole_m30 = parseFloat(document.querySelector('input[name="hole_m30"]').value) || 0;
//             const hole_m36 = parseFloat(document.querySelector('input[name="hole_m36"]').value) || 0;
//             tapHoleCost = (hole_m4 * drillingCosts["Hole_M4"].Cost) +
//                           (hole_m5 * drillingCosts["Hole_M5"].Cost) +
//                           (hole_m6 * drillingCosts["Hole_M6"].Cost) +
//                           (hole_m8 * drillingCosts["Hole_M8"].Cost) +
//                           (hole_m10 * drillingCosts["Hole_M10"].Cost) +
//                           (hole_m12 * drillingCosts["Hole_M12"].Cost) +
//                           (hole_m14 * drillingCosts["Hole_M14"].Cost) +
//                           (hole_m16 * drillingCosts["Hole_M16"].Cost) +
//                           (hole_m18 * drillingCosts["Hole_M18"].Cost) +
//                           (hole_m20 * drillingCosts["Hole_M20"].Cost) +
//                           (hole_m22 * drillingCosts["Hole_M22"].Cost) +
//                           (hole_m24 * drillingCosts["Hole_M24"].Cost) +
//                           (hole_m25 * drillingCosts["Hole_M25"].Cost) +
//                           (hole_m26 * drillingCosts["Hole_M26"].Cost) +
//                           (hole_m30 * drillingCosts["Hole_M30"].Cost) +
//                           (hole_m36 * drillingCosts["Hole_M36"].Cost);
//         }

//         if (holeTypes.includes('C Bore')) {
//             const c_bore_m3_m5 = parseFloat(document.querySelector('input[name="c_bore_m3_m5"]').value) || 0;
//             const c_bore_m6_m10 = parseFloat(document.querySelector('input[name="c_bore_m6_m10"]').value) || 0;
//             const c_bore_m12 = parseFloat(document.querySelector('input[name="c_bore_m12"]').value) || 0;
//             const c_bore_m14 = parseFloat(document.querySelector('input[name="c_bore_m14"]').value) || 0;
//             const c_bore_m16 = parseFloat(document.querySelector('input[name="c_bore_m16"]').value) || 0;
//             cBoreCost = (c_bore_m3_m5 * drillingCosts["C_bore_M3_M5"].Cost) +
//                         (c_bore_m6_m10 * drillingCosts["C_bore_M6_M10"].Cost) +
//                         (c_bore_m12 * drillingCosts["C_bore_M12"].Cost) +
//                         (c_bore_m14 * drillingCosts["C_bore_M14"].Cost) +
//                         (c_bore_m16 * drillingCosts["C_bore_M16"].Cost);
//         }

//         if (holeTypes.includes('BSP Tap')) {
//             const bsp_tap_1_8_1_4 = parseFloat(document.querySelector('input[name="bsp_tap_1_8_1_4"]').value) || 0;
//             const bsp_tap_1_2_3_8 = parseFloat(document.querySelector('input[name="bsp_tap_1_2_3_8"]').value) || 0;
//             const bsp_tap_1_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_inch"]').value) || 0;
//             const bsp_tap_1_5_2_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_5_2_inch"]').value) || 0;
//             bspTapCost = (bsp_tap_1_8_1_4 * drillingCosts["BSP_TAP_1/8_1/4"].Cost) +
//                          (bsp_tap_1_2_3_8 * drillingCosts["BSP_TAP_1/2_3/8"].Cost) +
//                          (bsp_tap_1_inch * drillingCosts["BSP_TAP_1_inch"].Cost) +
//                          (bsp_tap_1_5_2_inch * drillingCosts["BSP_TAP_1.5_2_inch"].Cost);
//         }

//         if (holeTypes.includes('GD Hole')) {
//             const gd_total_hole_length = parseFloat(document.querySelector('input[name="gd_total_hole_length"]').value) || 0;
//             gdCostGdMachine = gd_total_hole_length * drillingCosts["GD_TOTAL_HOLE_LENGTH"].Cost;
//             const gd_total_hole_length_dro_radial_drilling = parseFloat(document.querySelector('input[name="gd_total_hole_length_dro_radial_drilling"]').value) || 0;
//             gdCostDroRadialDrilling = gd_total_hole_length_dro_radial_drilling * drillingCosts["GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING"].Cost;
//         }

//         if (holeTypes.includes('Spot Face')) {
//             const spot_face = parseFloat(document.querySelector('input[name="spot_face"]').value) || 0;
//             spotFaceCost = spot_face * drillingCosts["Spot_face"].Cost;
//         }

//         if (holeTypes.includes('H7 Hole')) {
//             const h7_4_5 = parseFloat(document.querySelector('input[name="4_5_h7"]').value) || 0;
//             const h7_6_8 = parseFloat(document.querySelector('input[name="6_8_h7"]').value) || 0;
//             const h7_10_14 = parseFloat(document.querySelector('input[name="10_14_h7"]').value) || 0;
//             const h7_15_18 = parseFloat(document.querySelector('input[name="15_18_h7"]').value) || 0;
//             const h7_20_25 = parseFloat(document.querySelector('input[name="20_25_h7"]').value) || 0;
//             const h7_25_30 = parseFloat(document.querySelector('input[name="25_30_h7"]').value) || 0;
//             h7HoleCost = (h7_4_5 * 80) +
//                          (h7_6_8 * 100) +
//                          (h7_10_14 * 120) +
//                          (h7_15_18 * 160) +
//                          (h7_20_25 * 220) +
//                          (h7_25_30 * 280);
//         }
//     }

//     if (operations.includes("Grinding") && type === "Pri" && length >= 250 && width >= 250) {
//         sg = length * width * fmPerSqmm;
//     }

//     if (operations.includes("Heat Treatment") && htRequired) {
//         ht = rmw * htKg;
//     }

//     if (operations.includes("Coating") && length > 0 && width > 0 && coatingType) {
//         const areaCm2 = (length / 10) * (width / 10);
//         blackeningCost = coatingType === "Blackening" ? fwcam * coatingCosts["Blackening"].Cost : 0;
//         enpCost = coatingType === "ENP" ? fwcam * coatingCosts["ENP"].Cost : 0;
//         flashChromeCost = coatingType === "Flash Chrome" ? areaCm2 * coatingCosts["Flash Chrome"].Cost : 0;
//         pcCost = coatingType === "PC" ? fwcam * coatingCosts["PC"].Cost : 0;
//         zincBlueCost = coatingType === "Zinc Blue" ? fwcam * coatingCosts["Zinc Blue"].Cost : 0;
//     }

//     if (operations.includes("Radial Drilling")) {
//         radialDrilling = parseFloat(document.querySelector('input[name="radial_drilling"]').value) || 0;
//         radialDrilling = radialDrilling * drillingCosts["Radial Drilling"].Cost;
//     }

//     if (operations.includes("Gun Drilling")) {
//         gunDrilling = parseFloat(document.querySelector('input[name="gun_drilling"]').value) || 0;
//         gunDrilling = gunDrilling * drillingCosts["Gun Drilling"].Cost;
//     }

//     const coatingSum = blackeningCost + enpCost + flashChromeCost + pcCost + zincBlueCost;
//     const total = (
//         engraving + sgl + h7HoleCost + ht + gdCostDroRadialDrilling +
//         gdCostGdMachine + bspTapCost + cBoreCost + tapHoleCost + freeHoleCost +
//         spotFaceCost + fmL + fmSideCost + fm + rmc + vmc + turning + cg + wireCutSp +
//         cncTurning + jg + sparking + coatingSum + radialDrilling + gunDrilling + miscellaneous + sg
//     );

//     const withProfit = total * (1 + (profitPercent / 100));

//     const rmwCalcField = document.querySelector('input[name="rmw_calc"]');
//     const rmwField = document.querySelector('input[name="rmw"]');
//     const rmcField = document.querySelector('input[name="rmc"]');
//     const fmField = document.querySelector('input[name="fm"]');
//     const fmSideCostField = document.querySelector('input[name="fm_side_cost"]');
//     const fmLField = document.querySelector('input[name="fm_l"]');
//     const freeHoleCostField = document.querySelector('input[name="free_hole_cost"]');
//     const tapHoleCostField = document.querySelector('input[name="tap_hole_cost"]');
//     const cBoreCostField = document.querySelector('input[name="c_bore_cost"]');
//     const bspTapCostField = document.querySelector('input[name="bsp_tap_cost"]');
//     const gdCostGdMachineField = document.querySelector('input[name="gd_cost_gd_machine"]');
//     const gdCostDroRadialDrillingField = document.querySelector('input[name="gd_cost_dro_radial_drilling"]');
//     const h7HoleCostField = document.querySelector('input[name="h7_hole_cost"]');
//     const sgField = document.querySelector('input[name="sg"]');
//     const sglField = document.querySelector('input[name="sgl"]');
//     const htField = document.querySelector('input[name="ht"]');
//     const blackeningField = document.querySelector('input[name="blackening"]');
//     const enpField = document.querySelector('input[name="enp"]');
//     const flashChromeField = document.querySelector('input[name="flash_chrome"]');
//     const pcField = document.querySelector('input[name="pc"]');
//     const zincBlueField = document.querySelector('input[name="zinc_blue"]');
//     const vmcField = document.querySelector('input[name="vmc"]');
//     const turningField = document.querySelector('input[name="turning"]');
//     const cgField = document.querySelector('input[name="cg"]');
//     const wireCutSpField = document.querySelector('input[name="wire_cut_sp"]');
//     const cncTurningField = document.querySelector('input[name="cnc_turning"]');
//     const jgField = document.querySelector('input[name="jg"]');
//     const sparkingField = document.querySelector('input[name="sparking"]');
//     const engravingField = document.querySelector('input[name="engraving"]');
//     const radialDrillingField = document.querySelector('input[name="radial_drilling"]');
//     const gunDrillingField = document.querySelector('input[name="gun_drilling"]');
//     const totalField = document.querySelector('input[name="total"]');
//     const withProfitField = document.querySelector('input[name="with_profit"]');

//     rmwCalcField.value = rmwCalc > 0 ? rmwCalc.toFixed(2) : '';
//     rmwField.value = rmw > 0 ? rmw.toFixed(2) : '';
//     rmcField.value = rmc > 0 ? rmc.toFixed(2) : '';
//     fmField.value = fm > 0 ? fm.toFixed(2) : (operations.includes("Milling") ? fmField.value : '');
//     fmSideCostField.value = fmSideCost > 0 ? fmSideCost.toFixed(2) : '';
//     fmLField.value = fmL > 0 ? fmL.toFixed(2) : (operations.includes("Milling") ? fmLField.value : '');
//     freeHoleCostField.value = freeHoleCost > 0 ? freeHoleCost.toFixed(2) : '';
//     tapHoleCostField.value = tapHoleCost > 0 ? tapHoleCost.toFixed(2) : '';
//     cBoreCostField.value = cBoreCost > 0 ? cBoreCost.toFixed(2) : '';
//     bspTapCostField.value = bspTapCost > 0 ? bspTapCost.toFixed(2) : '';
//     gdCostGdMachineField.value = gdCostGdMachine > 0 ? gdCostGdMachine.toFixed(2) : '';
//     gdCostDroRadialDrillingField.value = gdCostDroRadialDrilling > 0 ? gdCostDroRadialDrilling.toFixed(2) : '';
//     h7HoleCostField.value = h7HoleCost > 0 ? h7HoleCost.toFixed(2) : '';
//     sgField.value = sg > 0 ? sg.toFixed(2) : (operations.includes("Grinding") ? sgField.value : '');
//     sglField.value = sgl > 0 ? sgl.toFixed(2) : (operations.includes("Grinding") ? sglField.value : '');
//     htField.value = ht > 0 ? ht.toFixed(2) : '';
//     blackeningField.value = blackeningCost > 0 ? blackeningCost.toFixed(2) : '';
//     enpField.value = enpCost > 0 ? enpCost.toFixed(2) : '';
//     flashChromeField.value = flashChromeCost > 0 ? flashChromeCost.toFixed(2) : '';
//     pcField.value = pcCost > 0 ? pcCost.toFixed(2) : '';
//     zincBlueField.value = zincBlueCost > 0 ? zincBlueCost.toFixed(2) : '';
//     vmcField.value = vmc > 0 ? vmc.toFixed(2) : (operations.includes("VMC") ? vmcField.value : '');
//     turningField.value = turning > 0 ? turning.toFixed(2) : (operations.includes("Turning") ? turningField.value : '');
//     cgField.value = cg > 0 ? cg.toFixed(2) : (operations.includes("CG") ? cgField.value : '');
//     wireCutSpField.value = wireCutSp > 0 ? wireCutSp.toFixed(2) : (operations.includes("Wire Cut") ? wireCutSpField.value : '');
//     cncTurningField.value = cncTurning > 0 ? cncTurning.toFixed(2) : (operations.includes("CNC Turning") ? cncTurningField.value : '');
//     jgField.value = jg > 0 ? jg.toFixed(2) : (operations.includes("JG") ? jgField.value : '');
//     sparkingField.value = sparking > 0 ? sparking.toFixed(2) : (operations.includes("Sparking") ? sparkingField.value : '');
//     engravingField.value = engraving > 0 ? engraving.toFixed(2) : (operations.includes("Engraving") ? engravingField.value : '');
//     radialDrillingField.value = radialDrilling > 0 ? radialDrilling.toFixed(2) : (operations.includes("Radial Drilling") ? radialDrillingField.value : '');
//     gunDrillingField.value = gunDrilling > 0 ? gunDrilling.toFixed(2) : (operations.includes("Gun Drilling") ? gunDrillingField.value : '');
//     totalField.value = total > 0 ? total.toFixed(2) : '';
//     withProfitField.value = withProfit > 0 ? withProfit.toFixed(2) : '';
// }

// function saveEstimation() {
//     const form = document.getElementById('costForm');
//     const formData = new FormData(form);
//     const estimationData = {};

//     formData.forEach((value, key) => {
//         if (key === 'operation') {
//             if (!estimationData[key]) estimationData[key] = [];
//             estimationData[key].push(value);
//         } else {
//             estimationData[key] = value;
//         }
//     });

//     if (estimationData['operation']) {
//         estimationData['operation'] = estimationData['operation'].join(', ');
//     }

//     savedEstimations.push(estimationData);
// }

// function downloadExcel() {
//     const allHeaders = Array.from(document.getElementById('costForm').elements)
//         .filter(el => el.name && el.name !== 'operation')
//         .map(el => el.name)
//         .concat(['operation'])
//         .filter((v, i, a) => a.indexOf(v) === i);

//     const headers = excelData.headers.length > 0 ? excelData.headers : allHeaders;

//     const estimationRows = savedEstimations.map(estimation => 
//         headers.map(header => estimation[header] || '')
//     );

//     const allRows = [...excelData.rows, ...estimationRows].filter(row => row.some(cell => cell !== undefined && cell !== ''));

//     const wsData = [headers, ...allRows];

//     const ws = XLSX.utils.aoa_to_sheet(wsData);

//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Cost Estimation');

//     XLSX.writeFile(wb, uploadedFileName);
// }

// const holeFields = [
//     'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost', 
//     'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14', 
//     'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26', 
//     'hole_m30', 'hole_m36', 'tap_hole_cost', 'c_bore_m3_m5', 'c_bore_m6_m10', 
//     'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost', 'bsp_tap_1_8_1_4', 
//     'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost', 
//     'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling', 
//     'gd_cost_dro_radial_drilling', 'spot_face'
// ];
// const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
// const fmFields = ['fm', 'fm_side', 'fm_side_cost', 'fm_l'];
// const grindingFields = ['sg', 'sgl'];
// const heatTreatmentFields = ['ht_required', 'ht'];
// const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
// const vmcFields = ['vmc'];
// const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
// const cgFields = ['cg'];
// const turningFields = ['turning'];
// const cncTurningFields = ['cnc_turning'];
// const jgFields = ['jg'];
// const sparkingFields = ['sparking'];
// const engravingFields = ['engraving'];
// const radialDrillingFields = ['radial_drilling'];
// const gunDrillingFields = ['gun_drilling'];

// holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// fmFields.forEach(name => {
//     const field = name === 'fm_side' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// heatTreatmentFields.forEach(name => {
//     const field = name === 'ht_required' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// coatingFields.forEach(name => {
//     const field = name === 'coating_type' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// engravingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// radialDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// gunDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));











































// const materials = {
//     "MS": {"Density_gm_cc": 7.85, "Cost_per_KG": 80.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "C45": {"Density_gm_cc": 7.85, "Cost_per_KG": 95.0, "FM_per_sqmm": 0.005, "HT_KG": 25.0, "FM_AFTER_HT_per_sqmm": 0.007},
//     "EN24": {"Density_gm_cc": 7.85, "Cost_per_KG": 125.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN354": {"Density_gm_cc": 7.85, "Cost_per_KG": 145.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "20MnCr5": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN47": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN31": {"Density_gm_cc": 7.85, "Cost_per_KG": 100.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN19": {"Density_gm_cc": 7.85, "Cost_per_KG": 75.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS410": {"Density_gm_cc": 7.85, "Cost_per_KG": 220.0, "FM_per_sqmm": 0.008, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-7075": {"Density_gm_cc": 2.73, "Cost_per_KG": 730.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "D2": {"Density_gm_cc": 7.85, "Cost_per_KG": 350.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "OHNS": {"Density_gm_cc": 7.85, "Cost_per_KG": 120.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "DELRIN": {"Density_gm_cc": 1.42, "Cost_per_KG": 550.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "NYLON": {"Density_gm_cc": 1.14, "Cost_per_KG": 500.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "HYLEM": {"Density_gm_cc": 1.95, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "BRASS": {"Density_gm_cc": 8.5, "Cost_per_KG": 600.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "COPPER": {"Density_gm_cc": 8.93, "Cost_per_KG": 700.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CARBIDE": {"Density_gm_cc": 15.0, "Cost_per_KG": 1600.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CASTING": {"Density_gm_cc": 0.0, "Cost_per_KG": 300.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "WELDMENTS": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-6061": {"Density_gm_cc": 2.73, "Cost_per_KG": 455.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS304": {"Density_gm_cc": 7.85, "Cost_per_KG": 245.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0}
// };

// const drillingCosts = {
//     "Hole_4_8": {"Cost": 25},
//     "Hole_9_13": {"Cost": 30},
//     "Hole_15_22": {"Cost": 35},
//     "Hole_M4": {"Cost": 20},
//     "Hole_M5": {"Cost": 25},
//     "Hole_M6": {"Cost": 30},
//     "Hole_M8": {"Cost": 40},
//     "Hole_M10": {"Cost": 50},
//     "Hole_M12": {"Cost": 60},
//     "Hole_M14": {"Cost": 60},
//     "Hole_M16": {"Cost": 70},
//     "Hole_M18": {"Cost": 70},
//     "Hole_M20": {"Cost": 120},
//     "Hole_M22": {"Cost": 120},
//     "Hole_M24": {"Cost": 120},
//     "Hole_M25": {"Cost": 200},
//     "Hole_M26": {"Cost": 200},
//     "Hole_M30": {"Cost": 250},
//     "Hole_M36": {"Cost": 300},
//     "C_bore_M3_M5": {"Cost": 30},
//     "C_bore_M6_M10": {"Cost": 40},
//     "C_bore_M12": {"Cost": 50},
//     "C_bore_M14": {"Cost": 60},
//     "C_bore_M16": {"Cost": 80},
//     "BSP_TAP_1/8_1/4": {"Cost": 45},
//     "BSP_TAP_1/2_3/8": {"Cost": 60},
//     "BSP_TAP_1_inch": {"Cost": 120},
//     "BSP_TAP_1.5_2_inch": {"Cost": 200},
//     "GD_TOTAL_HOLE_LENGTH": {"Cost": 3},
//     "GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING": {"Cost": 2},
//     "4_5_H7": {"Cost": 80},
//     "6_8_H7": {"Cost": 100},
//     "10_14_H7": {"Cost": 120},
//     "15_18_H7": {"Cost": 160},
//     "20_25_H7": {"Cost": 220},
//     "25_30_H7": {"Cost": 280},
//     "Spot_face": {"Cost": 30},
//     "Radial Drilling": {"Cost": 1},
//     "Gun Drilling": {"Cost": 1}    
// };

// const coatingCosts = {
//     "Blackening": {"Cost": 20},
//     "ENP": {"Cost": 180},
//     "Flash Chrome": {"Cost": 0.6},
//     "PC": {"Cost": 20},
//     "Zinc Blue": {"Cost": 30}
// };

// let excelData = { headers: [], rows: [] };
// let uploadedFileName = 'cost_estimation.xlsx';
// let savedEstimations = [];

// document.addEventListener('DOMContentLoaded', () => {
//     const materialSelect = new Choices('#material', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Material',
//     });

//     const typeSelect = new Choices('#type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Type',
//     });

//     const operationSelect = new Choices('#operation', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Operations',
//         removeItemButton: true,
//     });

//     const operationChoices = [
//         { value: 'Milling', label: 'Milling' },
//         { value: 'Drilling', label: 'Drilling' },
//         { value: 'Grinding', label: 'Grinding' },
//         { value: 'Heat Treatment', label: 'Heat Treatment' },
//         { value: 'Coating', label: 'Coating' },
//         { value: 'VMC', label: 'VMC' },
//         { value: 'Wire Cut', label: 'Wire Cut' },
//         { value: 'CG', label: 'CG' },
//         { value: 'Turning', label: 'Turning' },
//         { value: 'CNC Turning', label: 'CNC Turning' },
//         { value: 'JG', label: 'JG' },
//         { value: 'Sparking', label: 'Sparking' },
//         { value: 'Engraving', label: 'Engraving' },
//         { value: 'Radial Drilling', label: 'Radial Drilling' },
//         { value: 'Gun Drilling', label: 'Gun Drilling' }
//     ];
//     operationSelect.setChoices(operationChoices, 'value', 'label', true);

//     const fmSideSelect = new Choices('#fm_side', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select FM Side',
//     });

//     const htRequiredSelect = new Choices('#ht_required', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select HT Required',
//     });

//     const coatingTypeSelect = new Choices('#coating_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Coating Type',
//     });

//     const holeTypeSelect = new Choices('#hole_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Hole Types',
//         removeItemButton: true
//     });

//     if (coatingTypeSelect.getValue(true) === '') {
//         const coatingOptions = Object.keys(coatingCosts).map(coating => ({
//             value: coating,
//             label: coating,
//         }));
//         coatingTypeSelect.setChoices(coatingOptions, 'value', 'label', true);
//     }

//     ['blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'].forEach(name => {
//         document.querySelector(`input[name="${name}"]`).setAttribute('readonly', true);
//     });

//     document.getElementById('excelUpload').addEventListener('change', function(e) {
//         const file = e.target.files[0];
//         if (file) {
//             uploadedFileName = file.name;
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 const data = new Uint8Array(e.target.result);
//                 const workbook = XLSX.read(data, { type: 'array' });
//                 const sheetName = workbook.SheetNames[0];
//                 const worksheet = workbook.Sheets[sheetName];
//                 const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

//                 if (jsonData.length > 0) {
//                     excelData.headers = jsonData[0];
//                     excelData.rows = jsonData.slice(1).filter(row => row.some(cell => cell !== undefined && cell !== ''));
//                 } else {
//                     excelData.headers = [];
//                     excelData.rows = [];
//                 }
//             };
//             reader.readAsArrayBuffer(file);
//         }
//     });

//     document.getElementById('saveButton').addEventListener('click', function() {
//         calculateFields();
//         saveEstimation();
//         alert('Estimation saved!');
//     });

//     document.getElementById('downloadButton').addEventListener('click', function() {
//         if (savedEstimations.length === 0 && excelData.rows.length === 0) {
//             alert('No estimations to download!');
//             return;
//         }
//         downloadExcel();
//     });

//     updateOperationBoxes();

//     const operationFields = [
//         'fm', 'fm_side', 'fm_side_cost', 'fm_l',
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face',
//         '4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost',
//         'sg', 'sgl', 'ht_required', 'ht',
//         'coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue',
//         'vmc', 'wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp', 'cg', 'turning',
//         'cnc_turning', 'jg', 'sparking', 'engraving', 'radial_drilling', 'gun_drilling'
//     ];
//     operationFields.forEach(name => {
//         const selector = name === 'fm_side' || name === 'ht_required' || name === 'coating_type' ?
//             `label:has(#${name})` : `label:has(input[name="${name}"])`;
//         document.querySelector(selector).classList.add('hidden');
//     });
// });

// document.querySelector('#type').addEventListener('change', function() {
//     const type = this.value;
//     const diaField = document.querySelector('label[for="dia"]');
//     const lengthField = document.querySelector('label[for="length"]');
//     const widthField = document.querySelector('label[for="width"]');
//     const thicknessField = document.querySelector('label[for="thickness"]');
//     const rmwstrField = document.querySelector('label[for="rmw_str"]');

//     diaField.classList.add('hidden');
//     lengthField.classList.add('hidden');
//     widthField.classList.add('hidden');
//     thicknessField.classList.add('hidden');
//     rmwstrField.classList.add('hidden');

//     if (type === 'Cyl') {
//         diaField.classList.remove('hidden');
//         lengthField.classList.remove('hidden');
//     } else if (type === 'Pri') {
//         lengthField.classList.remove('hidden');
//         widthField.classList.remove('hidden');
//         thicknessField.classList.remove('hidden');
//     } else if (type === 'Str') {
//         rmwstrField.classList.remove('hidden');
//     }
//     calculateFields();
// });

// document.querySelector('#operation').addEventListener('change', function() {
//     const operations = Array.from(this.selectedOptions).map(option => option.value).filter(op => op !== '');
//     updateOperationBoxes();
//     updateOperationFields(operations);
//     calculateFields();
// });

// document.querySelector('#hole_type').addEventListener('change', function() {
//     updateHoleTypeFields();
//     calculateFields();
// });

// function updateOperationBoxes() {
//     const operationSelect = document.querySelector('#operation');
//     const selectedOperations = Array.from(operationSelect.selectedOptions)
//         .map(option => option.value)
//         .filter(op => op !== '');
//     const container = document.querySelector('#operation-box-container');
//     container.innerHTML = '';

//     selectedOperations.forEach(operation => {
//         const box = document.createElement('div');
//         box.className = 'operation-box';
//         box.textContent = operation;
//         container.appendChild(box);
//     });
// }

// function updateOperationFields(operations) {
//     const fmField = document.querySelector('label:has(input[name="fm"])');
//     const fmSideQField = document.querySelector('label:has(#fm_side)');
//     const fmSideField = document.querySelector('label:has(input[name="fm_side_cost"])');
//     const fmLField = document.querySelector('label:has(input[name="fm_l"])');
//     const engravingField = document.querySelector('label:has(input[name="engraving"])');
//     const radialDrillingField = document.querySelector('label:has(input[name="radial_drilling"])');
//     const gunDrillingField = document.querySelector('label:has(input[name="gun_drilling"])');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
//     const grindingFields = ['sg', 'sgl'];
//     const heatTreatmentFields = ['ht_required', 'ht'];
//     const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
//     const vmcFields = ['vmc'];
//     const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
//     const cgFields = ['cg'];
//     const turningFields = ['turning'];
//     const cncTurningFields = ['cnc_turning'];
//     const jgFields = ['jg'];
//     const sparkingFields = ['sparking'];
//     const radialDrillingFields = ['radial_drilling'];
//     const gunDrillingFields = ['gun_drilling'];
//     const holeTypeField = document.querySelector('label[for="hole_type"]');

//     fmField.classList.add('hidden');
//     fmSideQField.classList.add('hidden');
//     fmSideField.classList.add('hidden');
//     fmLField.classList.add('hidden');
//     engravingField.classList.add('hidden');
//     radialDrillingField.classList.add('hidden');
//     gunDrillingField.classList.add('hidden');
//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     heatTreatmentFields.forEach(name => {
//         const field = name === 'ht_required' ?
//             document.querySelector(`label:has(#${name})`) :
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     coatingFields.forEach(name => {
//         const field = name === 'coating_type' ?
//             document.querySelector(`label:has(#${name})`) :
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     radialDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     gunDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     holeTypeField.classList.add('hidden');

//     operations.forEach(operation => {
//         if (operation === 'Milling') {
//             fmField.classList.remove('hidden');
//             fmSideQField.classList.remove('hidden');
//             fmSideField.classList.remove('hidden');
//             fmLField.classList.remove('hidden');
//         }
//         if (operation === 'Drilling') {
//             holeTypeField.classList.remove('hidden');
//         }
//         if (operation === 'Grinding') {
//             grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Heat Treatment') {
//             heatTreatmentFields.forEach(name => {
//                 const field = name === 'ht_required' ?
//                     document.querySelector(`label:has(#${name})`) :
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//         }
//         if (operation === 'Coating') {
//             coatingFields.forEach(name => {
//                 const field = name === 'coating_type' ?
//                     document.querySelector(`label:has(#${name})`) :
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//             updateCoatingFields();
//         }
//         if (operation === 'VMC') {
//             vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Wire Cut') {
//             wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CG') {
//             cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Turning') {
//             turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CNC Turning') {
//             cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'JG') {
//             jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Sparking') {
//             sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Engraving') {
//             engravingField.classList.remove('hidden');
//         }
//         if (operation === 'Radial Drilling') {
//             radialDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Gun Drilling') {
//             gunDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//     });

//     if (!operations.includes('Drilling')) {
//         const holeTypeSelect = Choices.getInstance('#hole_type');
//         holeTypeSelect.removeActiveItems();
//     }
//     updateHoleTypeFields();
// }

// function updateHoleTypeFields() {
//     const holeTypes = Array.from(document.querySelector('#hole_type').selectedOptions)
//         .map(option => option.value)
//         .filter(type => type !== '');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];

//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));

//     if (Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).includes('Drilling')) {
//         holeTypes.forEach(holeType => {
//             if (holeType === 'Free Hole') {
//                 ['hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'Tap Hole') {
//                 ['hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//                  'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//                  'hole_m30', 'hole_m36', 'tap_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'C Bore') {
//                 ['c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'BSP Tap') {
//                 ['bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'GD Hole') {
//                 ['gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//                  'gd_cost_dro_radial_drilling'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'Spot Face') {
//                 ['spot_face'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'H7 Hole') {
//                 ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//         });
//     }
// }

// document.querySelector('#coating_type').addEventListener('change', function() {
//     updateCoatingFields();
//     calculateFields();
// });

// function updateCoatingFields() {
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value);
//     const coatingType = document.querySelector('#coating_type').value;
//     const blackeningField = document.querySelector('label:has(input[name="blackening"])');
//     const enpField = document.querySelector('label:has(input[name="enp"])');
//     const flashChromeField = document.querySelector('label:has(input[name="flash_chrome"])');
//     const pcField = document.querySelector('label:has(input[name="pc"])');
//     const zincBlueField = document.querySelector('label:has(input[name="zinc_blue"])');

//     blackeningField.classList.add('hidden');
//     enpField.classList.add('hidden');
//     flashChromeField.classList.add('hidden');
//     pcField.classList.add('hidden');
//     zincBlueField.classList.add('hidden');

//     if (operations.includes('Coating')) {
//         if (coatingType === 'Blackening') blackeningField.classList.remove('hidden');
//         if (coatingType === 'ENP') enpField.classList.remove('hidden');
//         if (coatingType === 'Flash Chrome') flashChromeField.classList.remove('hidden');
//         if (coatingType === 'PC') pcField.classList.remove('hidden');
//         if (coatingType === 'Zinc Blue') zincBlueField.classList.remove('hidden');
//     }
// }

// const inputs = document.querySelectorAll(
//     'input[name="dia"], input[name="length"], input[name="width"], input[name="thickness"], input[name="rmw_str"], ' +
//     '#type, #material, #operation, #fm_side, #hole_type, ' +
//     'input[name="hole_4_8"], input[name="hole_9_13"], input[name="hole_15_22"], ' +
//     'input[name="hole_m4"], input[name="hole_m5"], input[name="hole_m6"], input[name="hole_m8"], ' +
//     'input[name="hole_m10"], input[name="hole_m12"], input[name="hole_m14"], input[name="hole_m16"], ' +
//     'input[name="hole_m18"], input[name="hole_m20"], input[name="hole_m22"], input[name="hole_m24"], ' +
//     'input[name="hole_m25"], input[name="hole_m26"], input[name="hole_m30"], input[name="hole_m36"], ' +
//     'input[name="c_bore_m3_m5"], input[name="c_bore_m6_m10"], input[name="c_bore_m12"], ' +
//     'input[name="c_bore_m14"], input[name="c_bore_m16"], ' +
//     'input[name="bsp_tap_1_8_1_4"], input[name="bsp_tap_1_2_3_8"], input[name="bsp_tap_1_inch"], ' +
//     'input[name="bsp_tap_1_5_2_inch"], input[name="gd_total_hole_length"], ' +
//     'input[name="gd_total_hole_length_dro_radial_drilling"], input[name="spot_face"], ' +
//     'input[name="4_5_h7"], input[name="6_8_h7"], input[name="10_14_h7"], ' +
//     'input[name="15_18_h7"], input[name="20_25_h7"], input[name="25_30_h7"], ' +
//     'input[name="sg"], input[name="sgl"], #ht_required, input[name="ht"], ' +
//     'input[name="fwcam"], #coating_type, input[name="blackening"], ' +
//     'input[name="enp"], input[name="flash_chrome"], input[name="pc"], input[name="zinc_blue"], ' +
//     'input[name="vmc"], input[name="turning"], input[name="cg"], input[name="wire_cut_sp"], ' +
//     'input[name="cnc_turning"], input[name="jg"], input[name="sparking"], input[name="fm"], ' +
//     'input[name="engraving"], input[name="radial_drilling"], input[name="gun_drilling"], ' +
//     'input[name="miscellaneous"], input[name="profit_percent"]'
// );
// inputs.forEach(input => input.addEventListener('change', calculateFields));

// function calculateFields() {
//     const type = document.querySelector('#type').value;
//     const material = document.querySelector('#material').value;
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).filter(op => op !== '');
//     const fmSide = document.querySelector('#fm_side').value === "True";
//     const htRequired = document.querySelector('#ht_required').value === "True";
//     const coatingType = document.querySelector('#coating_type').value;
//     const dia = parseFloat(document.querySelector('input[name="dia"]').value) || 0;
//     const length = parseFloat(document.querySelector('input[name="length"]').value) || 0;
//     const width = parseFloat(document.querySelector('input[name="width"]').value) || 0;
//     const thickness = parseFloat(document.querySelector('input[name="thickness"]').value) || 0;
//     const rmwStr = parseFloat(document.querySelector('input[name="rmw_str"]').value) || 0;
//     const fwcam = parseFloat(document.querySelector('input[name="fwcam"]').value) || 0;
//     const profitPercent = parseFloat(document.querySelector('input[name="profit_percent"]').value) || 0;
//     const miscellaneous = parseFloat(document.querySelector('input[name="miscellaneous"]').value) || 0;
//     const density = materials[material]?.Density_gm_cc || 0;
//     const costPerKg = materials[material]?.Cost_per_KG || 0;
//     const fmPerSqmm = materials[material]?.FM_per_sqmm || 0;
//     const fmAfterHtPerSqmm = materials[material]?.FM_AFTER_HT_per_sqmm || 0;
//     const htKg = materials[material]?.HT_KG || 0;
//     let rmwCalc = 0;
//     let rmw = 0;
//     let rmc = 0;
//     let fm = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm"]').value) || 0) : 0;
//     let fmSideCost = 0;
//     let fmL = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm_l"]').value) || 0) : 0;
//     let freeHoleCost = 0;
//     let tapHoleCost = 0;
//     let cBoreCost = 0;
//     let bspTapCost = 0;
//     let gdCostGdMachine = 0;
//     let gdCostDroRadialDrilling = 0;
//     let h7HoleCost = 0;
//     let spotFaceCost = 0;
//     let sg = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sg"]').value) || 0) : 0;
//     let sgl = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sgl"]').value) || 0) : 0;
//     let ht = 0;
//     let blackeningCost = 0;
//     let enpCost = 0;
//     let flashChromeCost = 0;
//     let pcCost = 0;
//     let zincBlueCost = 0;
//     let vmc = operations.includes("VMC") ? (parseFloat(document.querySelector('input[name="vmc"]').value) || 0) : 0;
//     let turning = operations.includes("Turning") ? (parseFloat(document.querySelector('input[name="turning"]').value) || 0) : 0;
//     let cg = operations.includes("CG") ? (parseFloat(document.querySelector('input[name="cg"]').value) || 0) : 0;
//     let wireCutSp = operations.includes("Wire Cut") ? (parseFloat(document.querySelector('input[name="wire_cut_sp"]').value) || 0) : 0;
//     let cncTurning = operations.includes("CNC Turning") ? (parseFloat(document.querySelector('input[name="cnc_turning"]').value) || 0) : 0;
//     let jg = operations.includes("JG") ? (parseFloat(document.querySelector('input[name="jg"]').value) || 0) : 0;
//     let sparking = operations.includes("Sparking") ? (parseFloat(document.querySelector('input[name="sparking"]').value) || 0) : 0;
//     let engraving = operations.includes("Engraving") ? (parseFloat(document.querySelector('input[name="engraving"]').value) || 0) : 0;
//     let radialDrilling = 0;
//     let gunDrilling = 0;

//     if (type === "Pri" && length > 0 && width > 0 && thickness > 0) {
//         rmwCalc = ((length * width * thickness / 1000) * density) / 1000;
//     } else if (type === "Cyl" && dia > 0 && length > 0) {
//         rmwCalc = ((3.14159 * (dia * dia) * length / 4 / 1000) * density) / 1000;
//     }

//     if (type === "Str" && rmwStr > 0) {
//         rmw = rmwStr;
//     } else if (rmwCalc > 0) {
//         rmw = rmwCalc;
//     }

//     if (rmw > 0 && costPerKg > 0) {
//         rmc = rmw * costPerKg;
//     }

//     if (operations.includes("Milling") && type === "Pri" && length >= 250 && width >= 250) {
//         const fmRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fm = length * width * fmRate;
//     }

//     if (operations.includes("Milling") && type === "Pri" && fmSide && length > 0 && width > 0 && thickness > 0) {
//         const fmSideRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fmSideCost = 2 * (length + width) * thickness * fmSideRate;
//     }

//     if (operations.includes("Drilling")) {
//         const holeTypes = Array.from(document.querySelector('#hole_type').selectedOptions)
//             .map(option => option.value)
//             .filter(type => type !== '');

//         if (holeTypes.includes('Free Hole')) {
//             const hole_4_8 = parseFloat(document.querySelector('input[name="hole_4_8"]').value) || 0;
//             const hole_9_13 = parseFloat(document.querySelector('input[name="hole_9_13"]').value) || 0;
//             const hole_15_22 = parseFloat(document.querySelector('input[name="hole_15_22"]').value) || 0;
//             freeHoleCost = (hole_4_8 * drillingCosts["Hole_4_8"].Cost) +
//                            (hole_9_13 * drillingCosts["Hole_9_13"].Cost) +
//                            (hole_15_22 * drillingCosts["Hole_15_22"].Cost);
//         }

//         if (holeTypes.includes('Tap Hole')) {
//             const hole_m4 = parseFloat(document.querySelector('input[name="hole_m4"]').value) || 0;
//             const hole_m5 = parseFloat(document.querySelector('input[name="hole_m5"]').value) || 0;
//             const hole_m6 = parseFloat(document.querySelector('input[name="hole_m6"]').value) || 0;
//             const hole_m8 = parseFloat(document.querySelector('input[name="hole_m8"]').value) || 0;
//             const hole_m10 = parseFloat(document.querySelector('input[name="hole_m10"]').value) || 0;
//             const hole_m12 = parseFloat(document.querySelector('input[name="hole_m12"]').value) || 0;
//             const hole_m14 = parseFloat(document.querySelector('input[name="hole_m14"]').value) || 0;
//             const hole_m16 = parseFloat(document.querySelector('input[name="hole_m16"]').value) || 0;
//             const hole_m18 = parseFloat(document.querySelector('input[name="hole_m18"]').value) || 0;
//             const hole_m20 = parseFloat(document.querySelector('input[name="hole_m20"]').value) || 0;
//             const hole_m22 = parseFloat(document.querySelector('input[name="hole_m22"]').value) || 0;
//             const hole_m24 = parseFloat(document.querySelector('input[name="hole_m24"]').value) || 0;
//             const hole_m25 = parseFloat(document.querySelector('input[name="hole_m25"]').value) || 0;
//             const hole_m26 = parseFloat(document.querySelector('input[name="hole_m26"]').value) || 0;
//             const hole_m30 = parseFloat(document.querySelector('input[name="hole_m30"]').value) || 0;
//             const hole_m36 = parseFloat(document.querySelector('input[name="hole_m36"]').value) || 0;
//             tapHoleCost = (hole_m4 * drillingCosts["Hole_M4"].Cost) +
//                           (hole_m5 * drillingCosts["Hole_M5"].Cost) +
//                           (hole_m6 * drillingCosts["Hole_M6"].Cost) +
//                           (hole_m8 * drillingCosts["Hole_M8"].Cost) +
//                           (hole_m10 * drillingCosts["Hole_M10"].Cost) +
//                           (hole_m12 * drillingCosts["Hole_M12"].Cost) +
//                           (hole_m14 * drillingCosts["Hole_M14"].Cost) +
//                           (hole_m16 * drillingCosts["Hole_M16"].Cost) +
//                           (hole_m18 * drillingCosts["Hole_M18"].Cost) +
//                           (hole_m20 * drillingCosts["Hole_M20"].Cost) +
//                           (hole_m22 * drillingCosts["Hole_M22"].Cost) +
//                           (hole_m24 * drillingCosts["Hole_M24"].Cost) +
//                           (hole_m25 * drillingCosts["Hole_M25"].Cost) +
//                           (hole_m26 * drillingCosts["Hole_M26"].Cost) +
//                           (hole_m30 * drillingCosts["Hole_M30"].Cost) +
//                           (hole_m36 * drillingCosts["Hole_M36"].Cost);
//         }

//         if (holeTypes.includes('C Bore')) {
//             const c_bore_m3_m5 = parseFloat(document.querySelector('input[name="c_bore_m3_m5"]').value) || 0;
//             const c_bore_m6_m10 = parseFloat(document.querySelector('input[name="c_bore_m6_m10"]').value) || 0;
//             const c_bore_m12 = parseFloat(document.querySelector('input[name="c_bore_m12"]').value) || 0;
//             const c_bore_m14 = parseFloat(document.querySelector('input[name="c_bore_m14"]').value) || 0;
//             const c_bore_m16 = parseFloat(document.querySelector('input[name="c_bore_m16"]').value) || 0;
//             cBoreCost = (c_bore_m3_m5 * drillingCosts["C_bore_M3_M5"].Cost) +
//                         (c_bore_m6_m10 * drillingCosts["C_bore_M6_M10"].Cost) +
//                         (c_bore_m12 * drillingCosts["C_bore_M12"].Cost) +
//                         (c_bore_m14 * drillingCosts["C_bore_M14"].Cost) +
//                         (c_bore_m16 * drillingCosts["C_bore_M16"].Cost);
//         }

//         if (holeTypes.includes('BSP Tap')) {
//             const bsp_tap_1_8_1_4 = parseFloat(document.querySelector('input[name="bsp_tap_1_8_1_4"]').value) || 0;
//             const bsp_tap_1_2_3_8 = parseFloat(document.querySelector('input[name="bsp_tap_1_2_3_8"]').value) || 0;
//             const bsp_tap_1_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_inch"]').value) || 0;
//             const bsp_tap_1_5_2_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_5_2_inch"]').value) || 0;
//             bspTapCost = (bsp_tap_1_8_1_4 * drillingCosts["BSP_TAP_1/8_1/4"].Cost) +
//                          (bsp_tap_1_2_3_8 * drillingCosts["BSP_TAP_1/2_3/8"].Cost) +
//                          (bsp_tap_1_inch * drillingCosts["BSP_TAP_1_inch"].Cost) +
//                          (bsp_tap_1_5_2_inch * drillingCosts["BSP_TAP_1.5_2_inch"].Cost);
//         }

//         if (holeTypes.includes('GD Hole')) {
//             const gd_total_hole_length = parseFloat(document.querySelector('input[name="gd_total_hole_length"]').value) || 0;
//             gdCostGdMachine = gd_total_hole_length * drillingCosts["GD_TOTAL_HOLE_LENGTH"].Cost;
//             const gd_total_hole_length_dro_radial_drilling = parseFloat(document.querySelector('input[name="gd_total_hole_length_dro_radial_drilling"]').value) || 0;
//             gdCostDroRadialDrilling = gd_total_hole_length_dro_radial_drilling * drillingCosts["GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING"].Cost;
//         }

//         if (holeTypes.includes('Spot Face')) {
//             const spot_face = parseFloat(document.querySelector('input[name="spot_face"]').value) || 0;
//             spotFaceCost = spot_face * drillingCosts["Spot_face"].Cost;
//         }

//         if (holeTypes.includes('H7 Hole')) {
//             const h7_4_5 = parseFloat(document.querySelector('input[name="4_5_h7"]').value) || 0;
//             const h7_6_8 = parseFloat(document.querySelector('input[name="6_8_h7"]').value) || 0;
//             const h7_10_14 = parseFloat(document.querySelector('input[name="10_14_h7"]').value) || 0;
//             const h7_15_18 = parseFloat(document.querySelector('input[name="15_18_h7"]').value) || 0;
//             const h7_20_25 = parseFloat(document.querySelector('input[name="20_25_h7"]').value) || 0;
//             const h7_25_30 = parseFloat(document.querySelector('input[name="25_30_h7"]').value) || 0;
//             h7HoleCost = (h7_4_5 * drillingCosts["4_5_H7"].Cost) +
//                          (h7_6_8 * drillingCosts["6_8_H7"].Cost) +
//                          (h7_10_14 * drillingCosts["10_14_H7"].Cost) +
//                          (h7_15_18 * drillingCosts["15_18_H7"].Cost) +
//                          (h7_20_25 * drillingCosts["20_25_H7"].Cost) +
//                          (h7_25_30 * drillingCosts["25_30_H7"].Cost);
//         }
//     }

//     if (operations.includes("Grinding") && type === "Pri" && length >= 250 && width >= 250) {
//         sg = length * width * fmPerSqmm;
//     }

//     if (operations.includes("Heat Treatment") && htRequired) {
//         ht = rmw * htKg;
//     }

//     if (operations.includes("Coating") && length > 0 && width > 0 && coatingType) {
//         const areaCm2 = (length / 10) * (width / 10);
//         blackeningCost = coatingType === "Blackening" ? fwcam * coatingCosts["Blackening"].Cost : 0;
//         enpCost = coatingType === "ENP" ? fwcam * coatingCosts["ENP"].Cost : 0;
//         flashChromeCost = coatingType === "Flash Chrome" ? areaCm2 * coatingCosts["Flash Chrome"].Cost : 0;
//         pcCost = coatingType === "PC" ? fwcam * coatingCosts["PC"].Cost : 0;
//         zincBlueCost = coatingType === "Zinc Blue" ? fwcam * coatingCosts["Zinc Blue"].Cost : 0;
//     }

//     if (operations.includes("Radial Drilling")) {
//         radialDrilling = parseFloat(document.querySelector('input[name="radial_drilling"]').value) || 0;
//         radialDrilling = radialDrilling * drillingCosts["Radial Drilling"].Cost;
//     }

//     if (operations.includes("Gun Drilling")) {
//         gunDrilling = parseFloat(document.querySelector('input[name="gun_drilling"]').value) || 0;
//         gunDrilling = gunDrilling * drillingCosts["Gun Drilling"].Cost;
//     }

//     const coatingSum = blackeningCost + enpCost + flashChromeCost + pcCost + zincBlueCost;
//     const total = (
//         engraving + sgl + h7HoleCost + ht + gdCostDroRadialDrilling +
//         gdCostGdMachine + bspTapCost + cBoreCost + tapHoleCost + freeHoleCost +
//         spotFaceCost + fmL + fmSideCost + fm + rmc + vmc + turning + cg + wireCutSp +
//         cncTurning + jg + sparking + coatingSum + radialDrilling + gunDrilling + miscellaneous + sg
//     );

//     const withProfit = total * (1 + (profitPercent / 100));

//     const rmwCalcField = document.querySelector('input[name="rmw_calc"]');
//     const rmwField = document.querySelector('input[name="rmw"]');
//     const rmcField = document.querySelector('input[name="rmc"]');
//     const fmField = document.querySelector('input[name="fm"]');
//     const fmSideCostField = document.querySelector('input[name="fm_side_cost"]');
//     const fmLField = document.querySelector('input[name="fm_l"]');
//     const freeHoleCostField = document.querySelector('input[name="free_hole_cost"]');
//     const tapHoleCostField = document.querySelector('input[name="tap_hole_cost"]');
//     const cBoreCostField = document.querySelector('input[name="c_bore_cost"]');
//     const bspTapCostField = document.querySelector('input[name="bsp_tap_cost"]');
//     const gdCostGdMachineField = document.querySelector('input[name="gd_cost_gd_machine"]');
//     const gdCostDroRadialDrillingField = document.querySelector('input[name="gd_cost_dro_radial_drilling"]');
//     const h7HoleCostField = document.querySelector('input[name="h7_hole_cost"]');
//     const sgField = document.querySelector('input[name="sg"]');
//     const sglField = document.querySelector('input[name="sgl"]');
//     const htField = document.querySelector('input[name="ht"]');
//     const blackeningField = document.querySelector('input[name="blackening"]');
//     const enpField = document.querySelector('input[name="enp"]');
//     const flashChromeField = document.querySelector('input[name="flash_chrome"]');
//     const pcField = document.querySelector('input[name="pc"]');
//     const zincBlueField = document.querySelector('input[name="zinc_blue"]');
//     const vmcField = document.querySelector('input[name="vmc"]');
//     const turningField = document.querySelector('input[name="turning"]');
//     const cgField = document.querySelector('input[name="cg"]');
//     const wireCutSpField = document.querySelector('input[name="wire_cut_sp"]');
//     const cncTurningField = document.querySelector('input[name="cnc_turning"]');
//     const jgField = document.querySelector('input[name="jg"]');
//     const sparkingField = document.querySelector('input[name="sparking"]');
//     const engravingField = document.querySelector('input[name="engraving"]');
//     const radialDrillingField = document.querySelector('input[name="radial_drilling"]');
//     const gunDrillingField = document.querySelector('input[name="gun_drilling"]');
//     const totalField = document.querySelector('input[name="total"]');
//     const withProfitField = document.querySelector('input[name="with_profit"]');

//     rmwCalcField.value = rmwCalc > 0 ? rmwCalc.toFixed(2) : '';
//     rmwField.value = rmw > 0 ? rmw.toFixed(2) : '';
//     rmcField.value = rmc > 0 ? rmc.toFixed(2) : '';
//     fmField.value = fm > 0 ? fm.toFixed(2) : (operations.includes("Milling") ? fmField.value : '');
//     fmSideCostField.value = fmSideCost > 0 ? fmSideCost.toFixed(2) : '';
//     fmLField.value = fmL > 0 ? fmL.toFixed(2) : (operations.includes("Milling") ? fmLField.value : '');
//     freeHoleCostField.value = freeHoleCost > 0 ? freeHoleCost.toFixed(2) : '';
//     tapHoleCostField.value = tapHoleCost > 0 ? tapHoleCost.toFixed(2) : '';
//     cBoreCostField.value = cBoreCost > 0 ? cBoreCost.toFixed(2) : '';
//     bspTapCostField.value = bspTapCost > 0 ? bspTapCost.toFixed(2) : '';
//     gdCostGdMachineField.value = gdCostGdMachine > 0 ? gdCostGdMachine.toFixed(2) : '';
//     gdCostDroRadialDrillingField.value = gdCostDroRadialDrilling > 0 ? gdCostDroRadialDrilling.toFixed(2) : '';
//     h7HoleCostField.value = h7HoleCost > 0 ? h7HoleCost.toFixed(2) : '';
//     sgField.value = sg > 0 ? sg.toFixed(2) : (operations.includes("Grinding") ? sgField.value : '');
//     sglField.value = sgl > 0 ? sgl.toFixed(2) : (operations.includes("Grinding") ? sglField.value : '');
//     htField.value = ht > 0 ? ht.toFixed(2) : '';
//     blackeningField.value = blackeningCost > 0 ? blackeningCost.toFixed(2) : '';
//     enpField.value = enpCost > 0 ? enpCost.toFixed(2) : '';
//     flashChromeField.value = flashChromeCost > 0 ? flashChromeCost.toFixed(2) : '';
//     pcField.value = pcCost > 0 ? pcCost.toFixed(2) : '';
//     zincBlueField.value = zincBlueCost > 0 ? zincBlueCost.toFixed(2) : '';
//     vmcField.value = vmc > 0 ? vmc.toFixed(2) : (operations.includes("VMC") ? vmcField.value : '');
//     turningField.value = turning > 0 ? turning.toFixed(2) : (operations.includes("Turning") ? turningField.value : '');
//     cgField.value = cg > 0 ? cg.toFixed(2) : (operations.includes("CG") ? cgField.value : '');
//     wireCutSpField.value = wireCutSp > 0 ? wireCutSp.toFixed(2) : (operations.includes("Wire Cut") ? wireCutSpField.value : '');
//     cncTurningField.value = cncTurning > 0 ? cncTurning.toFixed(2) : (operations.includes("CNC Turning") ? cncTurningField.value : '');
//     jgField.value = jg > 0 ? jg.toFixed(2) : (operations.includes("JG") ? jgField.value : '');
//     sparkingField.value = sparking > 0 ? sparking.toFixed(2) : (operations.includes("Sparking") ? sparkingField.value : '');
//     engravingField.value = engraving > 0 ? engraving.toFixed(2) : (operations.includes("Engraving") ? engravingField.value : '');
//     radialDrillingField.value = radialDrilling > 0 ? radialDrilling.toFixed(2) : (operations.includes("Radial Drilling") ? radialDrillingField.value : '');
//     gunDrillingField.value = gunDrilling > 0 ? gunDrilling.toFixed(2) : (operations.includes("Gun Drilling") ? gunDrillingField.value : '');
//     totalField.value = total > 0 ? total.toFixed(2) : '';
//     withProfitField.value = withProfit > 0 ? withProfit.toFixed(2) : '';
// }

// function saveEstimation() {
//     const form = document.getElementById('costForm');
//     const formData = new FormData(form);
//     const estimationData = {};

//     formData.forEach((value, key) => {
//         if (key === 'operation') {
//             if (!estimationData[key]) estimationData[key] = [];
//             estimationData[key].push(value);
//         } else {
//             estimationData[key] = value;
//         }
//     });

//     if (estimationData['operation']) {
//         estimationData['operation'] = estimationData['operation'].join(', ');
//     }

//     savedEstimations.push(estimationData);
// }

// function downloadExcel() {
//     const allHeaders = Array.from(document.getElementById('costForm').elements)
//         .filter(el => el.name && el.name !== 'operation')
//         .map(el => el.name)
//         .concat(['operation'])
//         .filter((v, i, a) => a.indexOf(v) === i);

//     const headers = excelData.headers.length > 0 ? excelData.headers : allHeaders;

//     const estimationRows = savedEstimations.map(estimation => 
//         headers.map(header => estimation[header] || '')
//     );

//     const allRows = [...excelData.rows, ...estimationRows].filter(row => row.some(cell => cell !== undefined && cell !== ''));

//     const wsData = [headers, ...allRows];

//     const ws = XLSX.utils.aoa_to_sheet(wsData);

//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Cost Estimation');

//     XLSX.writeFile(wb, uploadedFileName);
// }

// const holeFields = [
//     'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost', 
//     'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14', 
//     'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26', 
//     'hole_m30', 'hole_m36', 'tap_hole_cost', 'c_bore_m3_m5', 'c_bore_m6_m10', 
//     'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost', 'bsp_tap_1_8_1_4', 
//     'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost', 
//     'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling', 
//     'gd_cost_dro_radial_drilling', 'spot_face'
// ];
// const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
// const fmFields = ['fm', 'fm_side', 'fm_side_cost', 'fm_l'];
// const grindingFields = ['sg', 'sgl'];
// const heatTreatmentFields = ['ht_required', 'ht'];
// const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
// const vmcFields = ['vmc'];
// const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
// const cgFields = ['cg'];
// const turningFields = ['turning'];
// const cncTurningFields = ['cnc_turning'];
// const jgFields = ['jg'];
// const sparkingFields = ['sparking'];
// const engravingFields = ['engraving'];
// const radialDrillingFields = ['radial_drilling'];
// const gunDrillingFields = ['gun_drilling'];

// holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// fmFields.forEach(name => {
//     const field = name === 'fm_side' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// heatTreatmentFields.forEach(name => {
//     const field = name === 'ht_required' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// coatingFields.forEach(name => {
//     const field = name === 'coating_type' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// engravingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// radialDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// gunDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));



















































// const materials = {
//     "MS": {"Density_gm_cc": 7.85, "Cost_per_KG": 80.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "C45": {"Density_gm_cc": 7.85, "Cost_per_KG": 95.0, "FM_per_sqmm": 0.005, "HT_KG": 25.0, "FM_AFTER_HT_per_sqmm": 0.007},
//     "EN24": {"Density_gm_cc": 7.85, "Cost_per_KG": 125.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN354": {"Density_gm_cc": 7.85, "Cost_per_KG": 145.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "20MnCr5": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN47": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN31": {"Density_gm_cc": 7.85, "Cost_per_KG": 100.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN19": {"Density_gm_cc": 7.85, "Cost_per_KG": 75.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS410": {"Density_gm_cc": 7.85, "Cost_per_KG": 220.0, "FM_per_sqmm": 0.008, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-7075": {"Density_gm_cc": 2.73, "Cost_per_KG": 730.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "D2": {"Density_gm_cc": 7.85, "Cost_per_KG": 350.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "OHNS": {"Density_gm_cc": 7.85, "Cost_per_KG": 120.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "DELRIN": {"Density_gm_cc": 1.42, "Cost_per_KG": 550.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "NYLON": {"Density_gm_cc": 1.14, "Cost_per_KG": 500.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "HYLEM": {"Density_gm_cc": 1.95, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "BRASS": {"Density_gm_cc": 8.5, "Cost_per_KG": 600.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "COPPER": {"Density_gm_cc": 8.93, "Cost_per_KG": 700.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CARBIDE": {"Density_gm_cc": 15.0, "Cost_per_KG": 1600.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CASTING": {"Density_gm_cc": 0.0, "Cost_per_KG": 300.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "WELDMENTS": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-6061": {"Density_gm_cc": 2.73, "Cost_per_KG": 455.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS304": {"Density_gm_cc": 7.85, "Cost_per_KG": 245.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0}
// };

// const drillingCosts = {
//     "Hole_4_8": {"Cost": 25},
//     "Hole_9_13": {"Cost": 30},
//     "Hole_15_22": {"Cost": 35},
//     "Hole_M4": {"Cost": 20},
//     "Hole_M5": {"Cost": 25},
//     "Hole_M6": {"Cost": 30},
//     "Hole_M8": {"Cost": 40},
//     "Hole_M10": {"Cost": 50},
//     "Hole_M12": {"Cost": 60},
//     "Hole_M14": {"Cost": 60},
//     "Hole_M16": {"Cost": 70},
//     "Hole_M18": {"Cost": 70},
//     "Hole_M20": {"Cost": 120},
//     "Hole_M22": {"Cost": 120},
//     "Hole_M24": {"Cost": 120},
//     "Hole_M25": {"Cost": 200},
//     "Hole_M26": {"Cost": 200},
//     "Hole_M30": {"Cost": 250},
//     "Hole_M36": {"Cost": 300},
//     "C_bore_M3_M5": {"Cost": 30},
//     "C_bore_M6_M10": {"Cost": 40},
//     "C_bore_M12": {"Cost": 50},
//     "C_bore_M14": {"Cost": 60},
//     "C_bore_M16": {"Cost": 80},
//     "BSP_TAP_1/8_1/4": {"Cost": 45},
//     "BSP_TAP_1/2_3/8": {"Cost": 60},
//     "BSP_TAP_1_inch": {"Cost": 120},
//     "BSP_TAP_1.5_2_inch": {"Cost": 200},
//     "GD_TOTAL_HOLE_LENGTH": {"Cost": 3},
//     "GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING": {"Cost": 2},
//     "4_5_H7": {"Cost": 80},
//     "6_8_H7": {"Cost": 100},
//     "10_14_H7": {"Cost": 120},
//     "15_18_H7": {"Cost": 160},
//     "20_25_H7": {"Cost": 220},
//     "25_30_H7": {"Cost": 280},
//     "Spot_face": {"Cost": 30},
//     "Radial Drilling": {"Cost": 1},
//     "Gun Drilling": {"Cost": 1}    
// };

// const coatingCosts = {
//     "Blackening": {"Cost": 20},
//     "ENP": {"Cost": 180},
//     "Flash Chrome": {"Cost": 0.6},
//     "PC": {"Cost": 20},
//     "Zinc Blue": {"Cost": 30}
// };

// let excelData = { headers: [], rows: [] };
// let uploadedFileName = 'cost_estimation.xlsx';
// let savedEstimations = [];

// document.addEventListener('DOMContentLoaded', () => {
//     const materialSelect = new Choices('#material', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Material',
//     });

//     const typeSelect = new Choices('#type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Type',
//     });

//     const operationSelect = new Choices('#operation', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Operations',
//         removeItemButton: true,
//     });

//     const operationChoices = [
//         { value: 'Milling', label: 'Milling' },
//         { value: 'Drilling', label: 'Drilling' },
//         { value: 'Grinding', label: 'Grinding' },
//         { value: 'Heat Treatment', label: 'Heat Treatment' },
//         { value: 'Coating', label: 'Coating' },
//         { value: 'VMC', label: 'VMC' },
//         { value: 'Wire Cut', label: 'Wire Cut' },
//         { value: 'CG', label: 'CG' },
//         { value: 'Turning', label: 'Turning' },
//         { value: 'CNC Turning', label: 'CNC Turning' },
//         { value: 'JG', label: 'JG' },
//         { value: 'Sparking', label: 'Sparking' },
//         { value: 'Engraving', label: 'Engraving' },
//         { value: 'Radial Drilling', label: 'Radial Drilling' },
//         { value: 'Gun Drilling', label: 'Gun Drilling' }
//     ];
//     operationSelect.setChoices(operationChoices, 'value', 'label', true);

//     const fmSideSelect = new Choices('#fm_side', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select FM Side',
//     });

//     const htRequiredSelect = new Choices('#ht_required', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select HT Required',
//     });

//     const coatingTypeSelect = new Choices('#coating_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Coating Type',
//     });

//     const holeTypeSelect = new Choices('#hole_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Hole Types',
//         removeItemButton: true
//     });

//     if (coatingTypeSelect.getValue(true) === '') {
//         const coatingOptions = Object.keys(coatingCosts).map(coating => ({
//             value: coating,
//             label: coating,
//         }));
//         coatingTypeSelect.setChoices(coatingOptions, 'value', 'label', true);
//     }

//     ['blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'].forEach(name => {
//         document.querySelector(`input[name="${name}"]`).setAttribute('readonly', true);
//     });

//     document.getElementById('excelUpload').addEventListener('change', function(e) {
//         const file = e.target.files[0];
//         if (file) {
//             uploadedFileName = file.name;
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 const data = new Uint8Array(e.target.result);
//                 const workbook = XLSX.read(data, { type: 'array' });
//                 const sheetName = workbook.SheetNames[0];
//                 const worksheet = workbook.Sheets[sheetName];
//                 const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

//                 if (jsonData.length > 0) {
//                     excelData.headers = jsonData[0];
//                     excelData.rows = jsonData.slice(1).filter(row => row.some(cell => cell !== undefined && cell !== ''));
//                 } else {
//                     excelData.headers = [];
//                     excelData.rows = [];
//                 }
//             };
//             reader.readAsArrayBuffer(file);
//         }
//     });

//     document.getElementById('saveButton').addEventListener('click', function() {
//         calculateFields();
//         saveEstimation();
//         alert('Estimation saved!');
//     });

//     document.getElementById('downloadButton').addEventListener('click', function() {
//         if (savedEstimations.length === 0 && excelData.rows.length === 0) {
//             alert('No estimations to download!');
//             return;
//         }
//         downloadExcel();
//     });

//     document.getElementById('clearButton').addEventListener('click', function() {
//         clearForm();
//         alert('Form cleared!');
//     });

//     updateOperationBoxes();

//     const operationFields = [
//         'fm', 'fm_side', 'fm_side_cost', 'fm_l',
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face',
//         '4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost',
//         'sg', 'sgl', 'ht_required', 'ht',
//         'coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue',
//         'vmc', 'wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp', 'cg', 'turning',
//         'cnc_turning', 'jg', 'sparking', 'engraving', 'radial_drilling', 'gun_drilling'
//     ];
//     operationFields.forEach(name => {
//         const selector = name === 'fm_side' || name === 'ht_required' || name === 'coating_type' ?
//             `label:has(#${name})` : `label:has(input[name="${name}"])`;
//         document.querySelector(selector).classList.add('hidden');
//     });
// });

// document.querySelector('#type').addEventListener('change', function() {
//     const type = this.value;
//     const diaField = document.querySelector('label[for="dia"]');
//     const lengthField = document.querySelector('label[for="length"]');
//     const widthField = document.querySelector('label[for="width"]');
//     const thicknessField = document.querySelector('label[for="thickness"]');
//     const rmwstrField = document.querySelector('label[for="rmw_str"]');

//     diaField.classList.add('hidden');
//     lengthField.classList.add('hidden');
//     widthField.classList.add('hidden');
//     thicknessField.classList.add('hidden');
//     rmwstrField.classList.add('hidden');

//     if (type === 'Cyl') {
//         diaField.classList.remove('hidden');
//         lengthField.classList.remove('hidden');
//     } else if (type === 'Pri') {
//         lengthField.classList.remove('hidden');
//         widthField.classList.remove('hidden');
//         thicknessField.classList.remove('hidden');
//     } else if (type === 'Str') {
//         rmwstrField.classList.remove('hidden');
//     }
//     calculateFields();
// });

// document.querySelector('#operation').addEventListener('change', function() {
//     const operations = Array.from(this.selectedOptions).map(option => option.value).filter(op => op !== '');
//     updateOperationBoxes();
//     updateOperationFields(operations);
//     calculateFields();
// });

// document.querySelector('#hole_type').addEventListener('change', function() {
//     updateHoleTypeFields();
//     calculateFields();
// });

// function updateOperationBoxes() {
//     const operationSelect = document.querySelector('#operation');
//     const selectedOperations = Array.from(operationSelect.selectedOptions)
//         .map(option => option.value)
//         .filter(op => op !== '');
//     const container = document.querySelector('#operation-box-container');
//     container.innerHTML = '';

//     selectedOperations.forEach(operation => {
//         const box = document.createElement('div');
//         box.className = 'operation-box';
//         box.textContent = operation;
//         container.appendChild(box);
//     });
// }

// function updateOperationFields(operations) {
//     const fmField = document.querySelector('label:has(input[name="fm"])');
//     const fmSideQField = document.querySelector('label:has(#fm_side)');
//     const fmSideField = document.querySelector('label:has(input[name="fm_side_cost"])');
//     const fmLField = document.querySelector('label:has(input[name="fm_l"])');
//     const engravingField = document.querySelector('label:has(input[name="engraving"])');
//     const radialDrillingField = document.querySelector('label:has(input[name="radial_drilling"])');
//     const gunDrillingField = document.querySelector('label:has(input[name="gun_drilling"])');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
//     const grindingFields = ['sg', 'sgl'];
//     const heatTreatmentFields = ['ht_required', 'ht'];
//     const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
//     const vmcFields = ['vmc'];
//     const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
//     const cgFields = ['cg'];
//     const turningFields = ['turning'];
//     const cncTurningFields = ['cnc_turning'];
//     const jgFields = ['jg'];
//     const sparkingFields = ['sparking'];
//     const radialDrillingFields = ['radial_drilling'];
//     const gunDrillingFields = ['gun_drilling'];
//     const holeTypeField = document.querySelector('label[for="hole_type"]');

//     fmField.classList.add('hidden');
//     fmSideQField.classList.add('hidden');
//     fmSideField.classList.add('hidden');
//     fmLField.classList.add('hidden');
//     engravingField.classList.add('hidden');
//     radialDrillingField.classList.add('hidden');
//     gunDrillingField.classList.add('hidden');
//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     heatTreatmentFields.forEach(name => {
//         const field = name === 'ht_required' ?
//             document.querySelector(`label:has(#${name})`) :
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     coatingFields.forEach(name => {
//         const field = name === 'coating_type' ?
//             document.querySelector(`label:has(#${name})`) :
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     radialDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     gunDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     holeTypeField.classList.add('hidden');

//     operations.forEach(operation => {
//         if (operation === 'Milling') {
//             fmField.classList.remove('hidden');
//             fmSideQField.classList.remove('hidden');
//             fmSideField.classList.remove('hidden');
//             fmLField.classList.remove('hidden');
//         }
//         if (operation === 'Drilling') {
//             holeTypeField.classList.remove('hidden');
//         }
//         if (operation === 'Grinding') {
//             grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Heat Treatment') {
//             heatTreatmentFields.forEach(name => {
//                 const field = name === 'ht_required' ?
//                     document.querySelector(`label:has(#${name})`) :
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//         }
//         if (operation === 'Coating') {
//             coatingFields.forEach(name => {
//                 const field = name === 'coating_type' ?
//                     document.querySelector(`label:has(#${name})`) :
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//             updateCoatingFields();
//         }
//         if (operation === 'VMC') {
//             vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Wire Cut') {
//             wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CG') {
//             cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Turning') {
//             turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CNC Turning') {
//             cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'JG') {
//             jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Sparking') {
//             sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Engraving') {
//             engravingField.classList.remove('hidden');
//         }
//         if (operation === 'Radial Drilling') {
//             radialDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Gun Drilling') {
//             gunDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//     });

//     if (!operations.includes('Drilling')) {
//         const holeTypeSelect = Choices.getInstance('#hole_type');
//         holeTypeSelect.removeActiveItems();
//     }
//     updateHoleTypeFields();
// }

// function updateHoleTypeFields() {
//     const holeTypes = Array.from(document.querySelector('#hole_type').selectedOptions)
//         .map(option => option.value)
//         .filter(type => type !== '');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];

//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));

//     if (Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).includes('Drilling')) {
//         holeTypes.forEach(holeType => {
//             if (holeType === 'Free Hole') {
//                 ['hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'Tap Hole') {
//                 ['hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//                  'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//                  'hole_m30', 'hole_m36', 'tap_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'C Bore') {
//                 ['c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'BSP Tap') {
//                 ['bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'GD Hole') {
//                 ['gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//                  'gd_cost_dro_radial_drilling'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'Spot Face') {
//                 ['spot_face'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'H7 Hole') {
//                 ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//         });
//     }
// }

// document.querySelector('#coating_type').addEventListener('change', function() {
//     updateCoatingFields();
//     calculateFields();
// });

// function updateCoatingFields() {
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value);
//     const coatingType = document.querySelector('#coating_type').value;
//     const blackeningField = document.querySelector('label:has(input[name="blackening"])');
//     const enpField = document.querySelector('label:has(input[name="enp"])');
//     const flashChromeField = document.querySelector('label:has(input[name="flash_chrome"])');
//     const pcField = document.querySelector('label:has(input[name="pc"])');
//     const zincBlueField = document.querySelector('label:has(input[name="zinc_blue"])');

//     blackeningField.classList.add('hidden');
//     enpField.classList.add('hidden');
//     flashChromeField.classList.add('hidden');
//     pcField.classList.add('hidden');
//     zincBlueField.classList.add('hidden');

//     if (operations.includes('Coating')) {
//         if (coatingType === 'Blackening') blackeningField.classList.remove('hidden');
//         if (coatingType === 'ENP') enpField.classList.remove('hidden');
//         if (coatingType === 'Flash Chrome') flashChromeField.classList.remove('hidden');
//         if (coatingType === 'PC') pcField.classList.remove('hidden');
//         if (coatingType === 'Zinc Blue') zincBlueField.classList.remove('hidden');
//     }
// }

// const inputs = document.querySelectorAll(
//     'input[name="dia"], input[name="length"], input[name="width"], input[name="thickness"], input[name="rmw_str"], ' +
//     '#type, #material, #operation, #fm_side, #hole_type, ' +
//     'input[name="hole_4_8"], input[name="hole_9_13"], input[name="hole_15_22"], ' +
//     'input[name="hole_m4"], input[name="hole_m5"], input[name="hole_m6"], input[name="hole_m8"], ' +
//     'input[name="hole_m10"], input[name="hole_m12"], input[name="hole_m14"], input[name="hole_m16"], ' +
//     'input[name="hole_m18"], input[name="hole_m20"], input[name="hole_m22"], input[name="hole_m24"], ' +
//     'input[name="hole_m25"], input[name="hole_m26"], input[name="hole_m30"], input[name="hole_m36"], ' +
//     'input[name="c_bore_m3_m5"], input[name="c_bore_m6_m10"], input[name="c_bore_m12"], ' +
//     'input[name="c_bore_m14"], input[name="c_bore_m16"], ' +
//     'input[name="bsp_tap_1_8_1_4"], input[name="bsp_tap_1_2_3_8"], input[name="bsp_tap_1_inch"], ' +
//     'input[name="bsp_tap_1_5_2_inch"], input[name="gd_total_hole_length"], ' +
//     'input[name="gd_total_hole_length_dro_radial_drilling"], input[name="spot_face"], ' +
//     'input[name="4_5_h7"], input[name="6_8_h7"], input[name="10_14_h7"], ' +
//     'input[name="15_18_h7"], input[name="20_25_h7"], input[name="25_30_h7"], ' +
//     'input[name="sg"], input[name="sgl"], #ht_required, input[name="ht"], ' +
//     'input[name="fwcam"], #coating_type, input[name="blackening"], ' +
//     'input[name="enp"], input[name="flash_chrome"], input[name="pc"], input[name="zinc_blue"], ' +
//     'input[name="vmc"], input[name="turning"], input[name="cg"], input[name="wire_cut_sp"], ' +
//     'input[name="cnc_turning"], input[name="jg"], input[name="sparking"], input[name="fm"], ' +
//     'input[name="engraving"], input[name="radial_drilling"], input[name="gun_drilling"], ' +
//     'input[name="miscellaneous"], input[name="profit_percent"]'
// );
// inputs.forEach(input => input.addEventListener('change', calculateFields));

// function calculateFields() {
//     const type = document.querySelector('#type').value;
//     const material = document.querySelector('#material').value;
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).filter(op => op !== '');
//     const fmSide = document.querySelector('#fm_side').value === "True";
//     const htRequired = document.querySelector('#ht_required').value === "True";
//     const coatingType = document.querySelector('#coating_type').value;
//     const dia = parseFloat(document.querySelector('input[name="dia"]').value) || 0;
//     const length = parseFloat(document.querySelector('input[name="length"]').value) || 0;
//     const width = parseFloat(document.querySelector('input[name="width"]').value) || 0;
//     const thickness = parseFloat(document.querySelector('input[name="thickness"]').value) || 0;
//     const rmwStr = parseFloat(document.querySelector('input[name="rmw_str"]').value) || 0;
//     const fwcam = parseFloat(document.querySelector('input[name="fwcam"]').value) || 0;
//     const profitPercent = parseFloat(document.querySelector('input[name="profit_percent"]').value) || 0;
//     const miscellaneous = parseFloat(document.querySelector('input[name="miscellaneous"]').value) || 0;
//     const density = materials[material]?.Density_gm_cc || 0;
//     const costPerKg = materials[material]?.Cost_per_KG || 0;
//     const fmPerSqmm = materials[material]?.FM_per_sqmm || 0;
//     const fmAfterHtPerSqmm = materials[material]?.FM_AFTER_HT_per_sqmm || 0;
//     const htKg = materials[material]?.HT_KG || 0;
//     let rmwCalc = 0;
//     let rmw = 0;
//     let rmc = 0;
//     let fm = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm"]').value) || 0) : 0;
//     let fmSideCost = 0;
//     let fmL = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm_l"]').value) || 0) : 0;
//     let freeHoleCost = 0;
//     let tapHoleCost = 0;
//     let cBoreCost = 0;
//     let bspTapCost = 0;
//     let gdCostGdMachine = 0;
//     let gdCostDroRadialDrilling = 0;
//     let h7HoleCost = 0;
//     let spotFaceCost = 0;
//     let sg = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sg"]').value) || 0) : 0;
//     let sgl = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sgl"]').value) || 0) : 0;
//     let ht = 0;
//     let blackeningCost = 0;
//     let enpCost = 0;
//     let flashChromeCost = 0;
//     let pcCost = 0;
//     let zincBlueCost = 0;
//     let vmc = operations.includes("VMC") ? (parseFloat(document.querySelector('input[name="vmc"]').value) || 0) : 0;
//     let turning = operations.includes("Turning") ? (parseFloat(document.querySelector('input[name="turning"]').value) || 0) : 0;
//     let cg = operations.includes("CG") ? (parseFloat(document.querySelector('input[name="cg"]').value) || 0) : 0;
//     let wireCutSp = operations.includes("Wire Cut") ? (parseFloat(document.querySelector('input[name="wire_cut_sp"]').value) || 0) : 0;
//     let cncTurning = operations.includes("CNC Turning") ? (parseFloat(document.querySelector('input[name="cnc_turning"]').value) || 0) : 0;
//     let jg = operations.includes("JG") ? (parseFloat(document.querySelector('input[name="jg"]').value) || 0) : 0;
//     let sparking = operations.includes("Sparking") ? (parseFloat(document.querySelector('input[name="sparking"]').value) || 0) : 0;
//     let engraving = operations.includes("Engraving") ? (parseFloat(document.querySelector('input[name="engraving"]').value) || 0) : 0;
//     let radialDrilling = 0;
//     let gunDrilling = 0;

//     if (type === "Pri" && length > 0 && width > 0 && thickness > 0) {
//         rmwCalc = ((length * width * thickness / 1000) * density) / 1000;
//     } else if (type === "Cyl" && dia > 0 && length > 0) {
//         rmwCalc = ((3.14159 * (dia * dia) * length / 4 / 1000) * density) / 1000;
//     }

//     if (type === "Str" && rmwStr > 0) {
//         rmw = rmwStr;
//     } else if (rmwCalc > 0) {
//         rmw = rmwCalc;
//     }

//     if (rmw > 0 && costPerKg > 0) {
//         rmc = rmw * costPerKg;
//     }

//     if (operations.includes("Milling") && type === "Pri" && length >= 250 && width >= 250) {
//         const fmRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fm = length * width * fmRate;
//     }

//     if (operations.includes("Milling") && type === "Pri" && fmSide && length > 0 && width > 0 && thickness > 0) {
//         const fmSideRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fmSideCost = 2 * (length + width) * thickness * fmSideRate;
//     }

//     if (operations.includes("Drilling")) {
//         const holeTypes = Array.from(document.querySelector('#hole_type').selectedOptions)
//             .map(option => option.value)
//             .filter(type => type !== '');

//         if (holeTypes.includes('Free Hole')) {
//             const hole_4_8 = parseFloat(document.querySelector('input[name="hole_4_8"]').value) || 0;
//             const hole_9_13 = parseFloat(document.querySelector('input[name="hole_9_13"]').value) || 0;
//             const hole_15_22 = parseFloat(document.querySelector('input[name="hole_15_22"]').value) || 0;
//             freeHoleCost = (hole_4_8 * drillingCosts["Hole_4_8"].Cost) +
//                            (hole_9_13 * drillingCosts["Hole_9_13"].Cost) +
//                            (hole_15_22 * drillingCosts["Hole_15_22"].Cost);
//         }

//         if (holeTypes.includes('Tap Hole')) {
//             const hole_m4 = parseFloat(document.querySelector('input[name="hole_m4"]').value) || 0;
//             const hole_m5 = parseFloat(document.querySelector('input[name="hole_m5"]').value) || 0;
//             const hole_m6 = parseFloat(document.querySelector('input[name="hole_m6"]').value) || 0;
//             const hole_m8 = parseFloat(document.querySelector('input[name="hole_m8"]').value) || 0;
//             const hole_m10 = parseFloat(document.querySelector('input[name="hole_m10"]').value) || 0;
//             const hole_m12 = parseFloat(document.querySelector('input[name="hole_m12"]').value) || 0;
//             const hole_m14 = parseFloat(document.querySelector('input[name="hole_m14"]').value) || 0;
//             const hole_m16 = parseFloat(document.querySelector('input[name="hole_m16"]').value) || 0;
//             const hole_m18 = parseFloat(document.querySelector('input[name="hole_m18"]').value) || 0;
//             const hole_m20 = parseFloat(document.querySelector('input[name="hole_m20"]').value) || 0;
//             const hole_m22 = parseFloat(document.querySelector('input[name="hole_m22"]').value) || 0;
//             const hole_m24 = parseFloat(document.querySelector('input[name="hole_m24"]').value) || 0;
//             const hole_m25 = parseFloat(document.querySelector('input[name="hole_m25"]').value) || 0;
//             const hole_m26 = parseFloat(document.querySelector('input[name="hole_m26"]').value) || 0;
//             const hole_m30 = parseFloat(document.querySelector('input[name="hole_m30"]').value) || 0;
//             const hole_m36 = parseFloat(document.querySelector('input[name="hole_m36"]').value) || 0;
//             tapHoleCost = (hole_m4 * drillingCosts["Hole_M4"].Cost) +
//                           (hole_m5 * drillingCosts["Hole_M5"].Cost) +
//                           (hole_m6 * drillingCosts["Hole_M6"].Cost) +
//                           (hole_m8 * drillingCosts["Hole_M8"].Cost) +
//                           (hole_m10 * drillingCosts["Hole_M10"].Cost) +
//                           (hole_m12 * drillingCosts["Hole_M12"].Cost) +
//                           (hole_m14 * drillingCosts["Hole_M14"].Cost) +
//                           (hole_m16 * drillingCosts["Hole_M16"].Cost) +
//                           (hole_m18 * drillingCosts["Hole_M18"].Cost) +
//                           (hole_m20 * drillingCosts["Hole_M20"].Cost) +
//                           (hole_m22 * drillingCosts["Hole_M22"].Cost) +
//                           (hole_m24 * drillingCosts["Hole_M24"].Cost) +
//                           (hole_m25 * drillingCosts["Hole_M25"].Cost) +
//                           (hole_m26 * drillingCosts["Hole_M26"].Cost) +
//                           (hole_m30 * drillingCosts["Hole_M30"].Cost) +
//                           (hole_m36 * drillingCosts["Hole_M36"].Cost);
//         }

//         if (holeTypes.includes('C Bore')) {
//             const c_bore_m3_m5 = parseFloat(document.querySelector('input[name="c_bore_m3_m5"]').value) || 0;
//             const c_bore_m6_m10 = parseFloat(document.querySelector('input[name="c_bore_m6_m10"]').value) || 0;
//             const c_bore_m12 = parseFloat(document.querySelector('input[name="c_bore_m12"]').value) || 0;
//             const c_bore_m14 = parseFloat(document.querySelector('input[name="c_bore_m14"]').value) || 0;
//             const c_bore_m16 = parseFloat(document.querySelector('input[name="c_bore_m16"]').value) || 0;
//             cBoreCost = (c_bore_m3_m5 * drillingCosts["C_bore_M3_M5"].Cost) +
//                         (c_bore_m6_m10 * drillingCosts["C_bore_M6_M10"].Cost) +
//                         (c_bore_m12 * drillingCosts["C_bore_M12"].Cost) +
//                         (c_bore_m14 * drillingCosts["C_bore_M14"].Cost) +
//                         (c_bore_m16 * drillingCosts["C_bore_M16"].Cost);
//         }

//         if (holeTypes.includes('BSP Tap')) {
//             const bsp_tap_1_8_1_4 = parseFloat(document.querySelector('input[name="bsp_tap_1_8_1_4"]').value) || 0;
//             const bsp_tap_1_2_3_8 = parseFloat(document.querySelector('input[name="bsp_tap_1_2_3_8"]').value) || 0;
//             const bsp_tap_1_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_inch"]').value) || 0;
//             const bsp_tap_1_5_2_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_5_2_inch"]').value) || 0;
//             bspTapCost = (bsp_tap_1_8_1_4 * drillingCosts["BSP_TAP_1/8_1/4"].Cost) +
//                          (bsp_tap_1_2_3_8 * drillingCosts["BSP_TAP_1/2_3/8"].Cost) +
//                          (bsp_tap_1_inch * drillingCosts["BSP_TAP_1_inch"].Cost) +
//                          (bsp_tap_1_5_2_inch * drillingCosts["BSP_TAP_1.5_2_inch"].Cost);
//         }

//         if (holeTypes.includes('GD Hole')) {
//             const gd_total_hole_length = parseFloat(document.querySelector('input[name="gd_total_hole_length"]').value) || 0;
//             gdCostGdMachine = gd_total_hole_length * drillingCosts["GD_TOTAL_HOLE_LENGTH"].Cost;
//             const gd_total_hole_length_dro_radial_drilling = parseFloat(document.querySelector('input[name="gd_total_hole_length_dro_radial_drilling"]').value) || 0;
//             gdCostDroRadialDrilling = gd_total_hole_length_dro_radial_drilling * drillingCosts["GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING"].Cost;
//         }

//         if (holeTypes.includes('Spot Face')) {
//             const spot_face = parseFloat(document.querySelector('input[name="spot_face"]').value) || 0;
//             spotFaceCost = spot_face * drillingCosts["Spot_face"].Cost;
//         }

//         if (holeTypes.includes('H7 Hole')) {
//             const h7_4_5 = parseFloat(document.querySelector('input[name="4_5_h7"]').value) || 0;
//             const h7_6_8 = parseFloat(document.querySelector('input[name="6_8_h7"]').value) || 0;
//             const h7_10_14 = parseFloat(document.querySelector('input[name="10_14_h7"]').value) || 0;
//             const h7_15_18 = parseFloat(document.querySelector('input[name="15_18_h7"]').value) || 0;
//             const h7_20_25 = parseFloat(document.querySelector('input[name="20_25_h7"]').value) || 0;
//             const h7_25_30 = parseFloat(document.querySelector('input[name="25_30_h7"]').value) || 0;
//             h7HoleCost = (h7_4_5 * drillingCosts["4_5_H7"].Cost) +
//                          (h7_6_8 * drillingCosts["6_8_H7"].Cost) +
//                          (h7_10_14 * drillingCosts["10_14_H7"].Cost) +
//                          (h7_15_18 * drillingCosts["15_18_H7"].Cost) +
//                          (h7_20_25 * drillingCosts["20_25_H7"].Cost) +
//                          (h7_25_30 * drillingCosts["25_30_H7"].Cost);
//         }
//     }

//     if (operations.includes("Grinding") && type === "Pri" && length >= 250 && width >= 250) {
//         sg = length * width * fmPerSqmm;
//     }

//     if (operations.includes("Heat Treatment") && htRequired) {
//         ht = rmw * htKg;
//     }

//     if (operations.includes("Coating") && length > 0 && width > 0 && coatingType) {
//         const areaCm2 = (length / 10) * (width / 10);
//         blackeningCost = coatingType === "Blackening" ? fwcam * coatingCosts["Blackening"].Cost : 0;
//         enpCost = coatingType === "ENP" ? fwcam * coatingCosts["ENP"].Cost : 0;
//         flashChromeCost = coatingType === "Flash Chrome" ? areaCm2 * coatingCosts["Flash Chrome"].Cost : 0;
//         pcCost = coatingType === "PC" ? fwcam * coatingCosts["PC"].Cost : 0;
//         zincBlueCost = coatingType === "Zinc Blue" ? fwcam * coatingCosts["Zinc Blue"].Cost : 0;
//     }

//     if (operations.includes("Radial Drilling")) {
//         radialDrilling = parseFloat(document.querySelector('input[name="radial_drilling"]').value) || 0;
//         radialDrilling = radialDrilling * drillingCosts["Radial Drilling"].Cost;
//     }

//     if (operations.includes("Gun Drilling")) {
//         gunDrilling = parseFloat(document.querySelector('input[name="gun_drilling"]').value) || 0;
//         gunDrilling = gunDrilling * drillingCosts["Gun Drilling"].Cost;
//     }

//     const coatingSum = blackeningCost + enpCost + flashChromeCost + pcCost + zincBlueCost;
//     const total = (
//         engraving + sgl + h7HoleCost + ht + gdCostDroRadialDrilling +
//         gdCostGdMachine + bspTapCost + cBoreCost + tapHoleCost + freeHoleCost +
//         spotFaceCost + fmL + fmSideCost + fm + rmc + vmc + turning + cg + wireCutSp +
//         cncTurning + jg + sparking + coatingSum + radialDrilling + gunDrilling + miscellaneous + sg
//     );

//     const withProfit = total * (1 + (profitPercent / 100));

//     const rmwCalcField = document.querySelector('input[name="rmw_calc"]');
//     const rmwField = document.querySelector('input[name="rmw"]');
//     const rmcField = document.querySelector('input[name="rmc"]');
//     const fmField = document.querySelector('input[name="fm"]');
//     const fmSideCostField = document.querySelector('input[name="fm_side_cost"]');
//     const fmLField = document.querySelector('input[name="fm_l"]');
//     const freeHoleCostField = document.querySelector('input[name="free_hole_cost"]');
//     const tapHoleCostField = document.querySelector('input[name="tap_hole_cost"]');
//     const cBoreCostField = document.querySelector('input[name="c_bore_cost"]');
//     const bspTapCostField = document.querySelector('input[name="bsp_tap_cost"]');
//     const gdCostGdMachineField = document.querySelector('input[name="gd_cost_gd_machine"]');
//     const gdCostDroRadialDrillingField = document.querySelector('input[name="gd_cost_dro_radial_drilling"]');
//     const h7HoleCostField = document.querySelector('input[name="h7_hole_cost"]');
//     const sgField = document.querySelector('input[name="sg"]');
//     const sglField = document.querySelector('input[name="sgl"]');
//     const htField = document.querySelector('input[name="ht"]');
//     const blackeningField = document.querySelector('input[name="blackening"]');
//     const enpField = document.querySelector('input[name="enp"]');
//     const flashChromeField = document.querySelector('input[name="flash_chrome"]');
//     const pcField = document.querySelector('input[name="pc"]');
//     const zincBlueField = document.querySelector('input[name="zinc_blue"]');
//     const vmcField = document.querySelector('input[name="vmc"]');
//     const turningField = document.querySelector('input[name="turning"]');
//     const cgField = document.querySelector('input[name="cg"]');
//     const wireCutSpField = document.querySelector('input[name="wire_cut_sp"]');
//     const cncTurningField = document.querySelector('input[name="cnc_turning"]');
//     const jgField = document.querySelector('input[name="jg"]');
//     const sparkingField = document.querySelector('input[name="sparking"]');
//     const engravingField = document.querySelector('input[name="engraving"]');
//     const radialDrillingField = document.querySelector('input[name="radial_drilling"]');
//     const gunDrillingField = document.querySelector('input[name="gun_drilling"]');
//     const totalField = document.querySelector('input[name="total"]');
//     const withProfitField = document.querySelector('input[name="with_profit"]');

//     rmwCalcField.value = rmwCalc > 0 ? rmwCalc.toFixed(2) : '';
//     rmwField.value = rmw > 0 ? rmw.toFixed(2) : '';
//     rmcField.value = rmc > 0 ? rmc.toFixed(2) : '';
//     fmField.value = fm > 0 ? fm.toFixed(2) : (operations.includes("Milling") ? fmField.value : '');
//     fmSideCostField.value = fmSideCost > 0 ? fmSideCost.toFixed(2) : '';
//     fmLField.value = fmL > 0 ? fmL.toFixed(2) : (operations.includes("Milling") ? fmLField.value : '');
//     freeHoleCostField.value = freeHoleCost > 0 ? freeHoleCost.toFixed(2) : '';
//     tapHoleCostField.value = tapHoleCost > 0 ? tapHoleCost.toFixed(2) : '';
//     cBoreCostField.value = cBoreCost > 0 ? cBoreCost.toFixed(2) : '';
//     bspTapCostField.value = bspTapCost > 0 ? bspTapCost.toFixed(2) : '';
//     gdCostGdMachineField.value = gdCostGdMachine > 0 ? gdCostGdMachine.toFixed(2) : '';
//     gdCostDroRadialDrillingField.value = gdCostDroRadialDrilling > 0 ? gdCostDroRadialDrilling.toFixed(2) : '';
//     h7HoleCostField.value = h7HoleCost > 0 ? h7HoleCost.toFixed(2) : '';
//     sgField.value = sg > 0 ? sg.toFixed(2) : (operations.includes("Grinding") ? sgField.value : '');
//     sglField.value = sgl > 0 ? sgl.toFixed(2) : (operations.includes("Grinding") ? sglField.value : '');
//     htField.value = ht > 0 ? ht.toFixed(2) : '';
//     blackeningField.value = blackeningCost > 0 ? blackeningCost.toFixed(2) : '';
//     enpField.value = enpCost > 0 ? enpCost.toFixed(2) : '';
//     flashChromeField.value = flashChromeCost > 0 ? flashChromeCost.toFixed(2) : '';
//     pcField.value = pcCost > 0 ? pcCost.toFixed(2) : '';
//     zincBlueField.value = zincBlueCost > 0 ? zincBlueCost.toFixed(2) : '';
//     vmcField.value = vmc > 0 ? vmc.toFixed(2) : (operations.includes("VMC") ? vmcField.value : '');
//     turningField.value = turning > 0 ? turning.toFixed(2) : (operations.includes("Turning") ? turningField.value : '');
//     cgField.value = cg > 0 ? cg.toFixed(2) : (operations.includes("CG") ? cgField.value : '');
//     wireCutSpField.value = wireCutSp > 0 ? wireCutSp.toFixed(2) : (operations.includes("Wire Cut") ? wireCutSpField.value : '');
//     cncTurningField.value = cncTurning > 0 ? cncTurning.toFixed(2) : (operations.includes("CNC Turning") ? cncTurningField.value : '');
//     jgField.value = jg > 0 ? jg.toFixed(2) : (operations.includes("JG") ? jgField.value : '');
//     sparkingField.value = sparking > 0 ? sparking.toFixed(2) : (operations.includes("Sparking") ? sparkingField.value : '');
//     engravingField.value = engraving > 0 ? engraving.toFixed(2) : (operations.includes("Engraving") ? engravingField.value : '');
//     radialDrillingField.value = radialDrilling > 0 ? radialDrilling.toFixed(2) : (operations.includes("Radial Drilling") ? radialDrillingField.value : '');
//     gunDrillingField.value = gunDrilling > 0 ? gunDrilling.toFixed(2) : (operations.includes("Gun Drilling") ? gunDrillingField.value : '');
//     totalField.value = total > 0 ? total.toFixed(2) : '';
//     withProfitField.value = withProfit > 0 ? withProfit.toFixed(2) : '';
// }

// function saveEstimation() {
//     const form = document.getElementById('costForm');
//     const formData = new FormData(form);
//     const estimationData = {};

//     formData.forEach((value, key) => {
//         if (key === 'operation') {
//             if (!estimationData[key]) estimationData[key] = [];
//             estimationData[key].push(value);
//         } else {
//             estimationData[key] = value;
//         }
//     });

//     if (estimationData['operation']) {
//         estimationData['operation'] = estimationData['operation'].join(', ');
//     }

//     savedEstimations.push(estimationData);
// }

// function downloadExcel() {
//     const allHeaders = Array.from(document.getElementById('costForm').elements)
//         .filter(el => el.name && el.name !== 'operation')
//         .map(el => el.name)
//         .concat(['operation'])
//         .filter((v, i, a) => a.indexOf(v) === i);

//     const headers = excelData.headers.length > 0 ? excelData.headers : allHeaders;

//     const estimationRows = savedEstimations.map(estimation => 
//         headers.map(header => estimation[header] || '')
//     );

//     const allRows = [...excelData.rows, ...estimationRows].filter(row => row.some(cell => cell !== undefined && cell !== ''));

//     const wsData = [headers, ...allRows];

//     const ws = XLSX.utils.aoa_to_sheet(wsData);

//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Cost Estimation');

//     XLSX.writeFile(wb, uploadedFileName);
// }

// const holeFields = [
//     'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost', 
//     'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14', 
//     'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26', 
//     'hole_m30', 'hole_m36', 'tap_hole_cost', 'c_bore_m3_m5', 'c_bore_m6_m10', 
//     'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost', 'bsp_tap_1_8_1_4', 
//     'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost', 
//     'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling', 
//     'gd_cost_dro_radial_drilling', 'spot_face'
// ];
// const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
// const fmFields = ['fm', 'fm_side', 'fm_side_cost', 'fm_l'];
// const grindingFields = ['sg', 'sgl'];
// const heatTreatmentFields = ['ht_required', 'ht'];
// const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
// const vmcFields = ['vmc'];
// const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
// const cgFields = ['cg'];
// const turningFields = ['turning'];
// const cncTurningFields = ['cnc_turning'];
// const jgFields = ['jg'];
// const sparkingFields = ['sparking'];
// const engravingFields = ['engraving'];
// const radialDrillingFields = ['radial_drilling'];
// const gunDrillingFields = ['gun_drilling'];

// holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// fmFields.forEach(name => {
//     const field = name === 'fm_side' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// heatTreatmentFields.forEach(name => {
//     const field = name === 'ht_required' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// coatingFields.forEach(name => {
//     const field = name === 'coating_type' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// engravingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// radialDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// gunDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));










































// const materials = {
//     "MS": {"Density_gm_cc": 7.85, "Cost_per_KG": 80.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "C45": {"Density_gm_cc": 7.85, "Cost_per_KG": 95.0, "FM_per_sqmm": 0.005, "HT_KG": 25.0, "FM_AFTER_HT_per_sqmm": 0.007},
//     "EN24": {"Density_gm_cc": 7.85, "Cost_per_KG": 125.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN354": {"Density_gm_cc": 7.85, "Cost_per_KG": 145.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "20MnCr5": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN47": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN31": {"Density_gm_cc": 7.85, "Cost_per_KG": 100.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN19": {"Density_gm_cc": 7.85, "Cost_per_KG": 75.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS410": {"Density_gm_cc": 7.85, "Cost_per_KG": 220.0, "FM_per_sqmm": 0.008, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-7075": {"Density_gm_cc": 2.73, "Cost_per_KG": 730.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "D2": {"Density_gm_cc": 7.85, "Cost_per_KG": 350.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "OHNS": {"Density_gm_cc": 7.85, "Cost_per_KG": 120.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "DELRIN": {"Density_gm_cc": 1.42, "Cost_per_KG": 550.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "NYLON": {"Density_gm_cc": 1.14, "Cost_per_KG": 500.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "HYLEM": {"Density_gm_cc": 1.95, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "BRASS": {"Density_gm_cc": 8.5, "Cost_per_KG": 600.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "COPPER": {"Density_gm_cc": 8.93, "Cost_per_KG": 700.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CARBIDE": {"Density_gm_cc": 15.0, "Cost_per_KG": 1600.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CASTING": {"Density_gm_cc": 0.0, "Cost_per_KG": 300.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "WELDMENTS": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-6061": {"Density_gm_cc": 2.73, "Cost_per_KG": 455.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS304": {"Density_gm_cc": 7.85, "Cost_per_KG": 245.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0}
// };

// const drillingCosts = {
//     "Hole_4_8": {"Cost": 25},
//     "Hole_9_13": {"Cost": 30},
//     "Hole_15_22": {"Cost": 35},
//     "Hole_M4": {"Cost": 20},
//     "Hole_M5": {"Cost": 25},
//     "Hole_M6": {"Cost": 30},
//     "Hole_M8": {"Cost": 40},
//     "Hole_M10": {"Cost": 50},
//     "Hole_M12": {"Cost": 60},
//     "Hole_M14": {"Cost": 60},
//     "Hole_M16": {"Cost": 70},
//     "Hole_M18": {"Cost": 70},
//     "Hole_M20": {"Cost": 120},
//     "Hole_M22": {"Cost": 120},
//     "Hole_M24": {"Cost": 120},
//     "Hole_M25": {"Cost": 200},
//     "Hole_M26": {"Cost": 200},
//     "Hole_M30": {"Cost": 250},
//     "Hole_M36": {"Cost": 300},
//     "C_bore_M3_M5": {"Cost": 30},
//     "C_bore_M6_M10": {"Cost": 40},
//     "C_bore_M12": {"Cost": 50},
//     "C_bore_M14": {"Cost": 60},
//     "C_bore_M16": {"Cost": 80},
//     "BSP_TAP_1/8_1/4": {"Cost": 45},
//     "BSP_TAP_1/2_3/8": {"Cost": 60},
//     "BSP_TAP_1_inch": {"Cost": 120},
//     "BSP_TAP_1.5_2_inch": {"Cost": 200},
//     "GD_TOTAL_HOLE_LENGTH": {"Cost": 3},
//     "GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING": {"Cost": 2},
//     "4_5_H7": {"Cost": 80},
//     "6_8_H7": {"Cost": 100},
//     "10_14_H7": {"Cost": 120},
//     "15_18_H7": {"Cost": 160},
//     "20_25_H7": {"Cost": 220},
//     "25_30_H7": {"Cost": 280},
//     "Spot_face": {"Cost": 30},
//     "Radial Drilling": {"Cost": 1},
//     "Gun Drilling": {"Cost": 1}    
// };

// const coatingCosts = {
//     "Blackening": {"Cost": 20},
//     "ENP": {"Cost": 180},
//     "Flash Chrome": {"Cost": 0.6},
//     "PC": {"Cost": 20},
//     "Zinc Blue": {"Cost": 30}
// };

// let excelData = { headers: [], rows: [] };
// let uploadedFileName = 'cost_estimation.xlsx';
// let savedEstimations = [];

// document.addEventListener('DOMContentLoaded', () => {
//     const materialSelect = new Choices('#material', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Material',
//     });

//     const typeSelect = new Choices('#type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Type',
//     });

//     const operationSelect = new Choices('#operation', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Operations',
//         removeItemButton: true,
//     });

//     const operationChoices = [
//         { value: 'Milling', label: 'Milling' },
//         { value: 'Drilling', label: 'Drilling' },
//         { value: 'Grinding', label: 'Grinding' },
//         { value: 'Heat Treatment', label: 'Heat Treatment' },
//         { value: 'Coating', label: 'Coating' },
//         { value: 'VMC', label: 'VMC' },
//         { value: 'Wire Cut', label: 'Wire Cut' },
//         { value: 'CG', label: 'CG' },
//         { value: 'Turning', label: 'Turning' },
//         { value: 'CNC Turning', label: 'CNC Turning' },
//         { value: 'JG', label: 'JG' },
//         { value: 'Sparking', label: 'Sparking' },
//         { value: 'Engraving', label: 'Engraving' },
//         { value: 'Radial Drilling', label: 'Radial Drilling' },
//         { value: 'Gun Drilling', label: 'Gun Drilling' }
//     ];
//     operationSelect.setChoices(operationChoices, 'value', 'label', true);

//     const fmSideSelect = new Choices('#fm_side', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select FM Side',
//     });

//     const htRequiredSelect = new Choices('#ht_required', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select HT Required',
//     });

//     const coatingTypeSelect = new Choices('#coating_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Coating Type',
//     });

//     const holeTypeSelect = new Choices('#hole_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Hole Types',
//         removeItemButton: true
//     });

//     if (coatingTypeSelect.getValue(true) === '') {
//         const coatingOptions = Object.keys(coatingCosts).map(coating => ({
//             value: coating,
//             label: coating,
//         }));
//         coatingTypeSelect.setChoices(coatingOptions, 'value', 'label', true);
//     }

//     ['blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'].forEach(name => {
//         document.querySelector(`input[name="${name}"]`).setAttribute('readonly', true);
//     });

//     document.getElementById('excelUpload').addEventListener('change', function(e) {
//         const file = e.target.files[0];
//         if (file) {
//             uploadedFileName = file.name;
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 const data = new Uint8Array(e.target.result);
//                 const workbook = XLSX.read(data, { type: 'array' });
//                 const sheetName = workbook.SheetNames[0];
//                 const worksheet = workbook.Sheets[sheetName];
//                 const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

//                 if (jsonData.length > 0) {
//                     excelData.headers = jsonData[0];
//                     excelData.rows = jsonData.slice(1).filter(row => row.some(cell => cell !== undefined && cell !== ''));
//                 } else {
//                     excelData.headers = [];
//                     excelData.rows = [];
//                 }
//             };
//             reader.readAsArrayBuffer(file);
//         }
//     });

//     document.getElementById('saveButton').addEventListener('click', function() {
//         calculateFields();
//         saveEstimation();
//         alert('Estimation saved!');
//     });

//     document.getElementById('downloadButton').addEventListener('click', function() {
//         if (savedEstimations.length === 0 && excelData.rows.length === 0) {
//             alert('No estimations to download!');
//             return;
//         }
//         downloadExcel();
//     });

//     document.getElementById('clearButton').addEventListener('click', function() {
//         clearForm();
//         alert('Form cleared!');
//     });

//     updateOperationBoxes();

//     const operationFields = [
//         'fm', 'fm_side', 'fm_side_cost', 'fm_l',
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face',
//         '4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost',
//         'sg', 'sgl', 'ht_required', 'ht',
//         'coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue',
//         'vmc', 'wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp', 'cg', 'turning',
//         'cnc_turning', 'jg', 'sparking', 'engraving', 'radial_drilling', 'gun_drilling'
//     ];
//     operationFields.forEach(name => {
//         const selector = name === 'fm_side' || name === 'ht_required' || name === 'coating_type' ?
//             `label:has(#${name})` : `label:has(input[name="${name}"])`;
//         document.querySelector(selector).classList.add('hidden');
//     });
// });

// document.querySelector('#type').addEventListener('change', function() {
//     const type = this.value;
//     const diaField = document.querySelector('label[for="dia"]');
//     const lengthField = document.querySelector('label[for="length"]');
//     const widthField = document.querySelector('label[for="width"]');
//     const thicknessField = document.querySelector('label[for="thickness"]');
//     const rmwstrField = document.querySelector('label[for="rmw_str"]');

//     diaField.classList.add('hidden');
//     lengthField.classList.add('hidden');
//     widthField.classList.add('hidden');
//     thicknessField.classList.add('hidden');
//     rmwstrField.classList.add('hidden');

//     if (type === 'Cyl') {
//         diaField.classList.remove('hidden');
//         lengthField.classList.remove('hidden');
//     } else if (type === 'Pri') {
//         lengthField.classList.remove('hidden');
//         widthField.classList.remove('hidden');
//         thicknessField.classList.remove('hidden');
//     } else if (type === 'Str') {
//         rmwstrField.classList.remove('hidden');
//     }
//     calculateFields();
// });

// document.querySelector('#operation').addEventListener('change', function() {
//     const operations = Array.from(this.selectedOptions).map(option => option.value).filter(op => op !== '');
//     updateOperationBoxes();
//     updateOperationFields(operations);
//     calculateFields();
// });

// document.querySelector('#hole_type').addEventListener('change', function() {
//     updateHoleTypeFields();
//     calculateFields();
// });

// function updateOperationBoxes() {
//     const operationSelect = document.querySelector('#operation');
//     const selectedOperations = Array.from(operationSelect.selectedOptions)
//         .map(option => option.value)
//         .filter(op => op !== '');
//     const container = document.querySelector('#operation-box-container');
//     container.innerHTML = '';

//     selectedOperations.forEach(operation => {
//         const box = document.createElement('div');
//         box.className = 'operation-box';
//         box.textContent = operation;
//         container.appendChild(box);
//     });
// }

// function updateOperationFields(operations) {
//     const fmField = document.querySelector('label:has(input[name="fm"])');
//     const fmSideQField = document.querySelector('label:has(#fm_side)');
//     const fmSideField = document.querySelector('label:has(input[name="fm_side_cost"])');
//     const fmLField = document.querySelector('label:has(input[name="fm_l"])');
//     const engravingField = document.querySelector('label:has(input[name="engraving"])');
//     const radialDrillingField = document.querySelector('label:has(input[name="radial_drilling"])');
//     const gunDrillingField = document.querySelector('label:has(input[name="gun_drilling"])');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
//     const grindingFields = ['sg', 'sgl'];
//     const heatTreatmentFields = ['ht_required', 'ht'];
//     const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
//     const vmcFields = ['vmc'];
//     const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
//     const cgFields = ['cg'];
//     const turningFields = ['turning'];
//     const cncTurningFields = ['cnc_turning'];
//     const jgFields = ['jg'];
//     const sparkingFields = ['sparking'];
//     const radialDrillingFields = ['radial_drilling'];
//     const gunDrillingFields = ['gun_drilling'];
//     const holeTypeField = document.querySelector('label[for="hole_type"]');

//     fmField.classList.add('hidden');
//     fmSideQField.classList.add('hidden');
//     fmSideField.classList.add('hidden');
//     fmLField.classList.add('hidden');
//     engravingField.classList.add('hidden');
//     radialDrillingField.classList.add('hidden');
//     gunDrillingField.classList.add('hidden');
//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     heatTreatmentFields.forEach(name => {
//         const field = name === 'ht_required' ?
//             document.querySelector(`label:has(#${name})`) :
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     coatingFields.forEach(name => {
//         const field = name === 'coating_type' ?
//             document.querySelector(`label:has(#${name})`) :
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     radialDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     gunDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     holeTypeField.classList.add('hidden');

//     operations.forEach(operation => {
//         if (operation === 'Milling') {
//             fmField.classList.remove('hidden');
//             fmSideQField.classList.remove('hidden');
//             fmSideField.classList.remove('hidden');
//             fmLField.classList.remove('hidden');
//         }
//         if (operation === 'Drilling') {
//             holeTypeField.classList.remove('hidden');
//         }
//         if (operation === 'Grinding') {
//             grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Heat Treatment') {
//             heatTreatmentFields.forEach(name => {
//                 const field = name === 'ht_required' ?
//                     document.querySelector(`label:has(#${name})`) :
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//         }
//         if (operation === 'Coating') {
//             coatingFields.forEach(name => {
//                 const field = name === 'coating_type' ?
//                     document.querySelector(`label:has(#${name})`) :
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//             updateCoatingFields();
//         }
//         if (operation === 'VMC') {
//             vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Wire Cut') {
//             wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CG') {
//             cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Turning') {
//             turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CNC Turning') {
//             cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'JG') {
//             jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Sparking') {
//             sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Engraving') {
//             engravingField.classList.remove('hidden');
//         }
//         if (operation === 'Radial Drilling') {
//             radialDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Gun Drilling') {
//             gunDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//     });

//     if (!operations.includes('Drilling')) {
//         const holeTypeSelect = Choices.getInstance('#hole_type');
//         holeTypeSelect.removeActiveItems();
//     }
//     updateHoleTypeFields();
// }

// function updateHoleTypeFields() {
//     const holeTypes = Array.from(document.querySelector('#hole_type').selectedOptions)
//         .map(option => option.value)
//         .filter(type => type !== '');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];

//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));

//     if (Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).includes('Drilling')) {
//         holeTypes.forEach(holeType => {
//             if (holeType === 'Free Hole') {
//                 ['hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'Tap Hole') {
//                 ['hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//                  'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//                  'hole_m30', 'hole_m36', 'tap_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'C Bore') {
//                 ['c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'BSP Tap') {
//                 ['bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'GD Hole') {
//                 ['gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//                  'gd_cost_dro_radial_drilling'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'Spot Face') {
//                 ['spot_face'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'H7 Hole') {
//                 ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//         });
//     }
// }

// document.querySelector('#coating_type').addEventListener('change', function() {
//     updateCoatingFields();
//     calculateFields();
// });

// function updateCoatingFields() {
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value);
//     const coatingType = document.querySelector('#coating_type').value;
//     const blackeningField = document.querySelector('label:has(input[name="blackening"])');
//     const enpField = document.querySelector('label:has(input[name="enp"])');
//     const flashChromeField = document.querySelector('label:has(input[name="flash_chrome"])');
//     const pcField = document.querySelector('label:has(input[name="pc"])');
//     const zincBlueField = document.querySelector('label:has(input[name="zinc_blue"])');

//     blackeningField.classList.add('hidden');
//     enpField.classList.add('hidden');
//     flashChromeField.classList.add('hidden');
//     pcField.classList.add('hidden');
//     zincBlueField.classList.add('hidden');

//     if (operations.includes('Coating')) {
//         if (coatingType === 'Blackening') blackeningField.classList.remove('hidden');
//         if (coatingType === 'ENP') enpField.classList.remove('hidden');
//         if (coatingType === 'Flash Chrome') flashChromeField.classList.remove('hidden');
//         if (coatingType === 'PC') pcField.classList.remove('hidden');
//         if (coatingType === 'Zinc Blue') zincBlueField.classList.remove('hidden');
//     }
// }

// const inputs = document.querySelectorAll(
//     'input[name="dia"], input[name="length"], input[name="width"], input[name="thickness"], input[name="rmw_str"], ' +
//     '#type, #material, #operation, #fm_side, #hole_type, ' +
//     'input[name="hole_4_8"], input[name="hole_9_13"], input[name="hole_15_22"], ' +
//     'input[name="hole_m4"], input[name="hole_m5"], input[name="hole_m6"], input[name="hole_m8"], ' +
//     'input[name="hole_m10"], input[name="hole_m12"], input[name="hole_m14"], input[name="hole_m16"], ' +
//     'input[name="hole_m18"], input[name="hole_m20"], input[name="hole_m22"], input[name="hole_m24"], ' +
//     'input[name="hole_m25"], input[name="hole_m26"], input[name="hole_m30"], input[name="hole_m36"], ' +
//     'input[name="c_bore_m3_m5"], input[name="c_bore_m6_m10"], input[name="c_bore_m12"], ' +
//     'input[name="c_bore_m14"], input[name="c_bore_m16"], ' +
//     'input[name="bsp_tap_1_8_1_4"], input[name="bsp_tap_1_2_3_8"], input[name="bsp_tap_1_inch"], ' +
//     'input[name="bsp_tap_1_5_2_inch"], input[name="gd_total_hole_length"], ' +
//     'input[name="gd_total_hole_length_dro_radial_drilling"], input[name="spot_face"], ' +
//     'input[name="4_5_h7"], input[name="6_8_h7"], input[name="10_14_h7"], ' +
//     'input[name="15_18_h7"], input[name="20_25_h7"], input[name="25_30_h7"], ' +
//     'input[name="sg"], input[name="sgl"], #ht_required, input[name="ht"], ' +
//     'input[name="fwcam"], #coating_type, input[name="blackening"], ' +
//     'input[name="enp"], input[name="flash_chrome"], input[name="pc"], input[name="zinc_blue"], ' +
//     'input[name="vmc"], input[name="turning"], input[name="cg"], input[name="wire_cut_sp"], ' +
//     'input[name="cnc_turning"], input[name="jg"], input[name="sparking"], input[name="fm"], ' +
//     'input[name="engraving"], input[name="radial_drilling"], input[name="gun_drilling"], ' +
//     'input[name="miscellaneous"], input[name="profit_percent"]'
// );
// inputs.forEach(input => input.addEventListener('change', calculateFields));

// function calculateFields() {
//     const type = document.querySelector('#type').value;
//     const material = document.querySelector('#material').value;
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).filter(op => op !== '');
//     const fmSide = document.querySelector('#fm_side').value === "True";
//     const htRequired = document.querySelector('#ht_required').value === "True";
//     const coatingType = document.querySelector('#coating_type').value;
//     const dia = parseFloat(document.querySelector('input[name="dia"]').value) || 0;
//     const length = parseFloat(document.querySelector('input[name="length"]').value) || 0;
//     const width = parseFloat(document.querySelector('input[name="width"]').value) || 0;
//     const thickness = parseFloat(document.querySelector('input[name="thickness"]').value) || 0;
//     const rmwStr = parseFloat(document.querySelector('input[name="rmw_str"]').value) || 0;
//     const fwcam = parseFloat(document.querySelector('input[name="fwcam"]').value) || 0;
//     const profitPercent = parseFloat(document.querySelector('input[name="profit_percent"]').value) || 0;
//     const miscellaneous = parseFloat(document.querySelector('input[name="miscellaneous"]').value) || 0;
//     const density = materials[material]?.Density_gm_cc || 0;
//     const costPerKg = materials[material]?.Cost_per_KG || 0;
//     const fmPerSqmm = materials[material]?.FM_per_sqmm || 0;
//     const fmAfterHtPerSqmm = materials[material]?.FM_AFTER_HT_per_sqmm || 0;
//     const htKg = materials[material]?.HT_KG || 0;
//     let rmwCalc = 0;
//     let rmw = 0;
//     let rmc = 0;
//     let fm = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm"]').value) || 0) : 0;
//     let fmSideCost = 0;
//     let fmL = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm_l"]').value) || 0) : 0;
//     let freeHoleCost = 0;
//     let tapHoleCost = 0;
//     let cBoreCost = 0;
//     let bspTapCost = 0;
//     let gdCostGdMachine = 0;
//     let gdCostDroRadialDrilling = 0;
//     let h7HoleCost = 0;
//     let spotFaceCost = 0;
//     let sg = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sg"]').value) || 0) : 0;
//     let sgl = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sgl"]').value) || 0) : 0;
//     let ht = 0;
//     let blackeningCost = 0;
//     let enpCost = 0;
//     let flashChromeCost = 0;
//     let pcCost = 0;
//     let zincBlueCost = 0;
//     let vmc = operations.includes("VMC") ? (parseFloat(document.querySelector('input[name="vmc"]').value) || 0) : 0;
//     let turning = operations.includes("Turning") ? (parseFloat(document.querySelector('input[name="turning"]').value) || 0) : 0;
//     let cg = operations.includes("CG") ? (parseFloat(document.querySelector('input[name="cg"]').value) || 0) : 0;
//     let wireCutSp = operations.includes("Wire Cut") ? (parseFloat(document.querySelector('input[name="wire_cut_sp"]').value) || 0) : 0;
//     let cncTurning = operations.includes("CNC Turning") ? (parseFloat(document.querySelector('input[name="cnc_turning"]').value) || 0) : 0;
//     let jg = operations.includes("JG") ? (parseFloat(document.querySelector('input[name="jg"]').value) || 0) : 0;
//     let sparking = operations.includes("Sparking") ? (parseFloat(document.querySelector('input[name="sparking"]').value) || 0) : 0;
//     let engraving = operations.includes("Engraving") ? (parseFloat(document.querySelector('input[name="engraving"]').value) || 0) : 0;
//     let radialDrilling = 0;
//     let gunDrilling = 0;

//     if (type === "Pri" && length > 0 && width > 0 && thickness > 0) {
//         rmwCalc = ((length * width * thickness / 1000) * density) / 1000;
//     } else if (type === "Cyl" && dia > 0 && length > 0) {
//         rmwCalc = ((3.14159 * (dia * dia) * length / 4 / 1000) * density) / 1000;
//     }

//     if (type === "Str" && rmwStr > 0) {
//         rmw = rmwStr;
//     } else if (rmwCalc > 0) {
//         rmw = rmwCalc;
//     }

//     if (rmw > 0 && costPerKg > 0) {
//         rmc = rmw * costPerKg;
//     }

//     if (operations.includes("Milling") && type === "Pri" && length >= 250 && width >= 250) {
//         const fmRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fm = length * width * fmRate;
//     }

//     if (operations.includes("Milling") && type === "Pri" && fmSide && length > 0 && width > 0 && thickness > 0) {
//         const fmSideRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fmSideCost = 2 * (length + width) * thickness * fmSideRate;
//     }

//     if (operations.includes("Drilling")) {
//         const holeTypes = Array.from(document.querySelector('#hole_type').selectedOptions)
//             .map(option => option.value)
//             .filter(type => type !== '');

//         if (holeTypes.includes('Free Hole')) {
//             const hole_4_8 = parseFloat(document.querySelector('input[name="hole_4_8"]').value) || 0;
//             const hole_9_13 = parseFloat(document.querySelector('input[name="hole_9_13"]').value) || 0;
//             const hole_15_22 = parseFloat(document.querySelector('input[name="hole_15_22"]').value) || 0;
//             freeHoleCost = (hole_4_8 * drillingCosts["Hole_4_8"].Cost) +
//                            (hole_9_13 * drillingCosts["Hole_9_13"].Cost) +
//                            (hole_15_22 * drillingCosts["Hole_15_22"].Cost);
//         }

//         if (holeTypes.includes('Tap Hole')) {
//             const hole_m4 = parseFloat(document.querySelector('input[name="hole_m4"]').value) || 0;
//             const hole_m5 = parseFloat(document.querySelector('input[name="hole_m5"]').value) || 0;
//             const hole_m6 = parseFloat(document.querySelector('input[name="hole_m6"]').value) || 0;
//             const hole_m8 = parseFloat(document.querySelector('input[name="hole_m8"]').value) || 0;
//             const hole_m10 = parseFloat(document.querySelector('input[name="hole_m10"]').value) || 0;
//             const hole_m12 = parseFloat(document.querySelector('input[name="hole_m12"]').value) || 0;
//             const hole_m14 = parseFloat(document.querySelector('input[name="hole_m14"]').value) || 0;
//             const hole_m16 = parseFloat(document.querySelector('input[name="hole_m16"]').value) || 0;
//             const hole_m18 = parseFloat(document.querySelector('input[name="hole_m18"]').value) || 0;
//             const hole_m20 = parseFloat(document.querySelector('input[name="hole_m20"]').value) || 0;
//             const hole_m22 = parseFloat(document.querySelector('input[name="hole_m22"]').value) || 0;
//             const hole_m24 = parseFloat(document.querySelector('input[name="hole_m24"]').value) || 0;
//             const hole_m25 = parseFloat(document.querySelector('input[name="hole_m25"]').value) || 0;
//             const hole_m26 = parseFloat(document.querySelector('input[name="hole_m26"]').value) || 0;
//             const hole_m30 = parseFloat(document.querySelector('input[name="hole_m30"]').value) || 0;
//             const hole_m36 = parseFloat(document.querySelector('input[name="hole_m36"]').value) || 0;
//             tapHoleCost = (hole_m4 * drillingCosts["Hole_M4"].Cost) +
//                           (hole_m5 * drillingCosts["Hole_M5"].Cost) +
//                           (hole_m6 * drillingCosts["Hole_M6"].Cost) +
//                           (hole_m8 * drillingCosts["Hole_M8"].Cost) +
//                           (hole_m10 * drillingCosts["Hole_M10"].Cost) +
//                           (hole_m12 * drillingCosts["Hole_M12"].Cost) +
//                           (hole_m14 * drillingCosts["Hole_M14"].Cost) +
//                           (hole_m16 * drillingCosts["Hole_M16"].Cost) +
//                           (hole_m18 * drillingCosts["Hole_M18"].Cost) +
//                           (hole_m20 * drillingCosts["Hole_M20"].Cost) +
//                           (hole_m22 * drillingCosts["Hole_M22"].Cost) +
//                           (hole_m24 * drillingCosts["Hole_M24"].Cost) +
//                           (hole_m25 * drillingCosts["Hole_M25"].Cost) +
//                           (hole_m26 * drillingCosts["Hole_M26"].Cost) +
//                           (hole_m30 * drillingCosts["Hole_M30"].Cost) +
//                           (hole_m36 * drillingCosts["Hole_M36"].Cost);
//         }

//         if (holeTypes.includes('C Bore')) {
//             const c_bore_m3_m5 = parseFloat(document.querySelector('input[name="c_bore_m3_m5"]').value) || 0;
//             const c_bore_m6_m10 = parseFloat(document.querySelector('input[name="c_bore_m6_m10"]').value) || 0;
//             const c_bore_m12 = parseFloat(document.querySelector('input[name="c_bore_m12"]').value) || 0;
//             const c_bore_m14 = parseFloat(document.querySelector('input[name="c_bore_m14"]').value) || 0;
//             const c_bore_m16 = parseFloat(document.querySelector('input[name="c_bore_m16"]').value) || 0;
//             cBoreCost = (c_bore_m3_m5 * drillingCosts["C_bore_M3_M5"].Cost) +
//                         (c_bore_m6_m10 * drillingCosts["C_bore_M6_M10"].Cost) +
//                         (c_bore_m12 * drillingCosts["C_bore_M12"].Cost) +
//                         (c_bore_m14 * drillingCosts["C_bore_M14"].Cost) +
//                         (c_bore_m16 * drillingCosts["C_bore_M16"].Cost);
//         }

//         if (holeTypes.includes('BSP Tap')) {
//             const bsp_tap_1_8_1_4 = parseFloat(document.querySelector('input[name="bsp_tap_1_8_1_4"]').value) || 0;
//             const bsp_tap_1_2_3_8 = parseFloat(document.querySelector('input[name="bsp_tap_1_2_3_8"]').value) || 0;
//             const bsp_tap_1_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_inch"]').value) || 0;
//             const bsp_tap_1_5_2_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_5_2_inch"]').value) || 0;
//             bspTapCost = (bsp_tap_1_8_1_4 * drillingCosts["BSP_TAP_1/8_1/4"].Cost) +
//                          (bsp_tap_1_2_3_8 * drillingCosts["BSP_TAP_1/2_3/8"].Cost) +
//                          (bsp_tap_1_inch * drillingCosts["BSP_TAP_1_inch"].Cost) +
//                          (bsp_tap_1_5_2_inch * drillingCosts["BSP_TAP_1.5_2_inch"].Cost);
//         }

//         if (holeTypes.includes('GD Hole')) {
//             const gd_total_hole_length = parseFloat(document.querySelector('input[name="gd_total_hole_length"]').value) || 0;
//             gdCostGdMachine = gd_total_hole_length * drillingCosts["GD_TOTAL_HOLE_LENGTH"].Cost;
//             const gd_total_hole_length_dro_radial_drilling = parseFloat(document.querySelector('input[name="gd_total_hole_length_dro_radial_drilling"]').value) || 0;
//             gdCostDroRadialDrilling = gd_total_hole_length_dro_radial_drilling * drillingCosts["GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING"].Cost;
//         }

//         if (holeTypes.includes('Spot Face')) {
//             const spot_face = parseFloat(document.querySelector('input[name="spot_face"]').value) || 0;
//             spotFaceCost = spot_face * drillingCosts["Spot_face"].Cost;
//         }

//         if (holeTypes.includes('H7 Hole')) {
//             const h7_4_5 = parseFloat(document.querySelector('input[name="4_5_h7"]').value) || 0;
//             const h7_6_8 = parseFloat(document.querySelector('input[name="6_8_h7"]').value) || 0;
//             const h7_10_14 = parseFloat(document.querySelector('input[name="10_14_h7"]').value) || 0;
//             const h7_15_18 = parseFloat(document.querySelector('input[name="15_18_h7"]').value) || 0;
//             const h7_20_25 = parseFloat(document.querySelector('input[name="20_25_h7"]').value) || 0;
//             const h7_25_30 = parseFloat(document.querySelector('input[name="25_30_h7"]').value) || 0;
//             h7HoleCost = (h7_4_5 * drillingCosts["4_5_H7"].Cost) +
//                          (h7_6_8 * drillingCosts["6_8_H7"].Cost) +
//                          (h7_10_14 * drillingCosts["10_14_H7"].Cost) +
//                          (h7_15_18 * drillingCosts["15_18_H7"].Cost) +
//                          (h7_20_25 * drillingCosts["20_25_H7"].Cost) +
//                          (h7_25_30 * drillingCosts["25_30_H7"].Cost);
//         }
//     }

//     if (operations.includes("Grinding") && type === "Pri" && length >= 250 && width >= 250) {
//         sg = length * width * fmPerSqmm;
//     }

//     if (operations.includes("Heat Treatment") && htRequired) {
//         ht = rmw * htKg;
//     }

//     if (operations.includes("Coating") && length > 0 && width > 0 && coatingType) {
//         const areaCm2 = (length / 10) * (width / 10);
//         blackeningCost = coatingType === "Blackening" ? fwcam * coatingCosts["Blackening"].Cost : 0;
//         enpCost = coatingType === "ENP" ? fwcam * coatingCosts["ENP"].Cost : 0;
//         flashChromeCost = coatingType === "Flash Chrome" ? areaCm2 * coatingCosts["Flash Chrome"].Cost : 0;
//         pcCost = coatingType === "PC" ? fwcam * coatingCosts["PC"].Cost : 0;
//         zincBlueCost = coatingType === "Zinc Blue" ? fwcam * coatingCosts["Zinc Blue"].Cost : 0;
//     }

//     if (operations.includes("Radial Drilling")) {
//         radialDrilling = parseFloat(document.querySelector('input[name="radial_drilling"]').value) || 0;
//         radialDrilling = radialDrilling * drillingCosts["Radial Drilling"].Cost;
//     }

//     if (operations.includes("Gun Drilling")) {
//         gunDrilling = parseFloat(document.querySelector('input[name="gun_drilling"]').value) || 0;
//         gunDrilling = gunDrilling * drillingCosts["Gun Drilling"].Cost;
//     }

//     const coatingSum = blackeningCost + enpCost + flashChromeCost + pcCost + zincBlueCost;
//     const total = (
//         engraving + sgl + h7HoleCost + ht + gdCostDroRadialDrilling +
//         gdCostGdMachine + bspTapCost + cBoreCost + tapHoleCost + freeHoleCost +
//         spotFaceCost + fmL + fmSideCost + fm + rmc + vmc + turning + cg + wireCutSp +
//         cncTurning + jg + sparking + coatingSum + radialDrilling + gunDrilling + miscellaneous + sg
//     );

//     const withProfit = total * (1 + (profitPercent / 100));

//     const rmwCalcField = document.querySelector('input[name="rmw_calc"]');
//     const rmwField = document.querySelector('input[name="rmw"]');
//     const rmcField = document.querySelector('input[name="rmc"]');
//     const fmField = document.querySelector('input[name="fm"]');
//     const fmSideCostField = document.querySelector('input[name="fm_side_cost"]');
//     const fmLField = document.querySelector('input[name="fm_l"]');
//     const freeHoleCostField = document.querySelector('input[name="free_hole_cost"]');
//     const tapHoleCostField = document.querySelector('input[name="tap_hole_cost"]');
//     const cBoreCostField = document.querySelector('input[name="c_bore_cost"]');
//     const bspTapCostField = document.querySelector('input[name="bsp_tap_cost"]');
//     const gdCostGdMachineField = document.querySelector('input[name="gd_cost_gd_machine"]');
//     const gdCostDroRadialDrillingField = document.querySelector('input[name="gd_cost_dro_radial_drilling"]');
//     const h7HoleCostField = document.querySelector('input[name="h7_hole_cost"]');
//     const sgField = document.querySelector('input[name="sg"]');
//     const sglField = document.querySelector('input[name="sgl"]');
//     const htField = document.querySelector('input[name="ht"]');
//     const blackeningField = document.querySelector('input[name="blackening"]');
//     const enpField = document.querySelector('input[name="enp"]');
//     const flashChromeField = document.querySelector('input[name="flash_chrome"]');
//     const pcField = document.querySelector('input[name="pc"]');
//     const zincBlueField = document.querySelector('input[name="zinc_blue"]');
//     const vmcField = document.querySelector('input[name="vmc"]');
//     const turningField = document.querySelector('input[name="turning"]');
//     const cgField = document.querySelector('input[name="cg"]');
//     const wireCutSpField = document.querySelector('input[name="wire_cut_sp"]');
//     const cncTurningField = document.querySelector('input[name="cnc_turning"]');
//     const jgField = document.querySelector('input[name="jg"]');
//     const sparkingField = document.querySelector('input[name="sparking"]');
//     const engravingField = document.querySelector('input[name="engraving"]');
//     const radialDrillingField = document.querySelector('input[name="radial_drilling"]');
//     const gunDrillingField = document.querySelector('input[name="gun_drilling"]');
//     const totalField = document.querySelector('input[name="total"]');
//     const withProfitField = document.querySelector('input[name="with_profit"]');

//     rmwCalcField.value = rmwCalc > 0 ? rmwCalc.toFixed(2) : '';
//     rmwField.value = rmw > 0 ? rmw.toFixed(2) : '';
//     rmcField.value = rmc > 0 ? rmc.toFixed(2) : '';
//     fmField.value = fm > 0 ? fm.toFixed(2) : (operations.includes("Milling") ? fmField.value : '');
//     fmSideCostField.value = fmSideCost > 0 ? fmSideCost.toFixed(2) : '';
//     fmLField.value = fmL > 0 ? fmL.toFixed(2) : (operations.includes("Milling") ? fmLField.value : '');
//     freeHoleCostField.value = freeHoleCost > 0 ? freeHoleCost.toFixed(2) : '';
//     tapHoleCostField.value = tapHoleCost > 0 ? tapHoleCost.toFixed(2) : '';
//     cBoreCostField.value = cBoreCost > 0 ? cBoreCost.toFixed(2) : '';
//     bspTapCostField.value = bspTapCost > 0 ? bspTapCost.toFixed(2) : '';
//     gdCostGdMachineField.value = gdCostGdMachine > 0 ? gdCostGdMachine.toFixed(2) : '';
//     gdCostDroRadialDrillingField.value = gdCostDroRadialDrilling > 0 ? gdCostDroRadialDrilling.toFixed(2) : '';
//     h7HoleCostField.value = h7HoleCost > 0 ? h7HoleCost.toFixed(2) : '';
//     sgField.value = sg > 0 ? sg.toFixed(2) : (operations.includes("Grinding") ? sgField.value : '');
//     sglField.value = sgl > 0 ? sgl.toFixed(2) : (operations.includes("Grinding") ? sglField.value : '');
//     htField.value = ht > 0 ? ht.toFixed(2) : '';
//     blackeningField.value = blackeningCost > 0 ? blackeningCost.toFixed(2) : '';
//     enpField.value = enpCost > 0 ? enpCost.toFixed(2) : '';
//     flashChromeField.value = flashChromeCost > 0 ? flashChromeCost.toFixed(2) : '';
//     pcField.value = pcCost > 0 ? pcCost.toFixed(2) : '';
//     zincBlueField.value = zincBlueCost > 0 ? zincBlueCost.toFixed(2) : '';
//     vmcField.value = vmc > 0 ? vmc.toFixed(2) : (operations.includes("VMC") ? vmcField.value : '');
//     turningField.value = turning > 0 ? turning.toFixed(2) : (operations.includes("Turning") ? turningField.value : '');
//     cgField.value = cg > 0 ? cg.toFixed(2) : (operations.includes("CG") ? cgField.value : '');
//     wireCutSpField.value = wireCutSp > 0 ? wireCutSp.toFixed(2) : (operations.includes("Wire Cut") ? wireCutSpField.value : '');
//     cncTurningField.value = cncTurning > 0 ? cncTurning.toFixed(2) : (operations.includes("CNC Turning") ? cncTurningField.value : '');
//     jgField.value = jg > 0 ? jg.toFixed(2) : (operations.includes("JG") ? jgField.value : '');
//     sparkingField.value = sparking > 0 ? sparking.toFixed(2) : (operations.includes("Sparking") ? sparkingField.value : '');
//     engravingField.value = engraving > 0 ? engraving.toFixed(2) : (operations.includes("Engraving") ? engravingField.value : '');
//     radialDrillingField.value = radialDrilling > 0 ? radialDrilling.toFixed(2) : (operations.includes("Radial Drilling") ? radialDrillingField.value : '');
//     gunDrillingField.value = gunDrilling > 0 ? gunDrilling.toFixed(2) : (operations.includes("Gun Drilling") ? gunDrillingField.value : '');
//     totalField.value = total > 0 ? total.toFixed(2) : '';
//     withProfitField.value = withProfit > 0 ? withProfit.toFixed(2) : '';
// }

// function saveEstimation() {
//     const form = document.getElementById('costForm');
//     const formData = new FormData(form);
//     const estimationData = {};

//     formData.forEach((value, key) => {
//         if (key === 'operation') {
//             if (!estimationData[key]) estimationData[key] = [];
//             estimationData[key].push(value);
//         } else {
//             estimationData[key] = value;
//         }
//     });

//     if (estimationData['operation']) {
//         estimationData['operation'] = estimationData['operation'].join(', ');
//     }

//     savedEstimations.push(estimationData);
// }

// function downloadExcel() {
//     const allHeaders = Array.from(document.getElementById('costForm').elements)
//         .filter(el => el.name && el.name !== 'operation')
//         .map(el => el.name)
//         .concat(['operation'])
//         .filter((v, i, a) => a.indexOf(v) === i);

//     const headers = excelData.headers.length > 0 ? excelData.headers : allHeaders;

//     const estimationRows = savedEstimations.map(estimation => 
//         headers.map(header => estimation[header] || '')
//     );

//     const allRows = [...excelData.rows, ...estimationRows].filter(row => row.some(cell => cell !== undefined && cell !== ''));

//     const wsData = [headers, ...allRows];

//     const ws = XLSX.utils.aoa_to_sheet(wsData);

//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Cost Estimation');

//     XLSX.writeFile(wb, uploadedFileName);
// }

// function clearForm() {
//     const form = document.getElementById('costForm');
//     form.reset(); // Reset all native form inputs

//     // Reset Choices.js select elements
//     const materialSelect = Choices.getInstance('#material');
//     const typeSelect = Choices.getInstance('#type');
//     const operationSelect = Choices.getInstance('#operation');
//     const fmSideSelect = Choices.getInstance('#fm_side');
//     const htRequiredSelect = Choices.getInstance('#ht_required');
//     const coatingTypeSelect = Choices.getInstance('#coating_type');
//     const holeTypeSelect = Choices.getInstance('#hole_type');

//     materialSelect.removeActiveItems();
//     typeSelect.removeActiveItems();
//     operationSelect.removeActiveItems();
//     fmSideSelect.removeActiveItems();
//     htRequiredSelect.removeActiveItems();
//     coatingTypeSelect.removeActiveItems();
//     holeTypeSelect.removeActiveItems();

//     // Clear operation boxes
//     const operationContainer = document.querySelector('#operation-box-container');
//     operationContainer.innerHTML = '';

//     // Hide all conditional fields
//     const operationFields = [
//         'fm', 'fm_side', 'fm_side_cost', 'fm_l',
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face',
//         '4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost',
//         'sg', 'sgl', 'ht_required', 'ht',
//         'coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue',
//         'vmc', 'wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp', 'cg', 'turning',
//         'cnc_turning', 'jg', 'sparking', 'engraving', 'radial_drilling', 'gun_drilling'
//     ];
//     operationFields.forEach(name => {
//         const selector = name === 'fm_side' || name === 'ht_required' || name === 'coating_type' ?
//             `label:has(#${name})` : `label:has(input[name="${name}"])`;
//         document.querySelector(selector).classList.add('hidden');
//     });

//     // Hide type-specific fields
//     const typeFields = ['dia', 'length', 'width', 'thickness', 'rmw_str'];
//     typeFields.forEach(name => {
//         document.querySelector(`label[for="${name}"]`).classList.add('hidden');
//     });

//     // Clear Excel upload
//     const excelUpload = document.getElementById('excelUpload');
//     excelUpload.value = '';
//     excelData = { headers: [], rows: [] };
//     uploadedFileName = 'cost_estimation.xlsx';

//     // Recalculate fields to update any calculated values
//     calculateFields();
// }

// const holeFields = [
//     'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost', 
//     'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14', 
//     'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26', 
//     'hole_m30', 'hole_m36', 'tap_hole_cost', 'c_bore_m3_m5', 'c_bore_m6_m10', 
//     'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost', 'bsp_tap_1_8_1_4', 
//     'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost', 
//     'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling', 
//     'gd_cost_dro_radial_drilling', 'spot_face'
// ];
// const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
// const fmFields = ['fm', 'fm_side', 'fm_side_cost', 'fm_l'];
// const grindingFields = ['sg', 'sgl'];
// const heatTreatmentFields = ['ht_required', 'ht'];
// const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
// const vmcFields = ['vmc'];
// const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
// const cgFields = ['cg'];
// const turningFields = ['turning'];
// const cncTurningFields = ['cnc_turning'];
// const jgFields = ['jg'];
// const sparkingFields = ['sparking'];
// const engravingFields = ['engraving'];
// const radialDrillingFields = ['radial_drilling'];
// const gunDrillingFields = ['gun_drilling'];

// holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// fmFields.forEach(name => {
//     const field = name === 'fm_side' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// heatTreatmentFields.forEach(name => {
//     const field = name === 'ht_required' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// coatingFields.forEach(name => {
//     const field = name === 'coating_type' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// engravingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// radialDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// gunDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));

















































// const materials = {
//     "MS": {"Density_gm_cc": 7.85, "Cost_per_KG": 80.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "C45": {"Density_gm_cc": 7.85, "Cost_per_KG": 95.0, "FM_per_sqmm": 0.005, "HT_KG": 25.0, "FM_AFTER_HT_per_sqmm": 0.007},
//     "EN24": {"Density_gm_cc": 7.85, "Cost_per_KG": 125.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN354": {"Density_gm_cc": 7.85, "Cost_per_KG": 145.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "20MnCr5": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN47": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN31": {"Density_gm_cc": 7.85, "Cost_per_KG": 100.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN19": {"Density_gm_cc": 7.85, "Cost_per_KG": 75.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS410": {"Density_gm_cc": 7.85, "Cost_per_KG": 220.0, "FM_per_sqmm": 0.008, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-7075": {"Density_gm_cc": 2.73, "Cost_per_KG": 730.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "D2": {"Density_gm_cc": 7.85, "Cost_per_KG": 350.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "OHNS": {"Density_gm_cc": 7.85, "Cost_per_KG": 120.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "DELRIN": {"Density_gm_cc": 1.42, "Cost_per_KG": 550.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "NYLON": {"Density_gm_cc": 1.14, "Cost_per_KG": 500.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "HYLEM": {"Density_gm_cc": 1.95, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "BRASS": {"Density_gm_cc": 8.5, "Cost_per_KG": 600.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "COPPER": {"Density_gm_cc": 8.93, "Cost_per_KG": 700.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CARBIDE": {"Density_gm_cc": 15.0, "Cost_per_KG": 1600.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CASTING": {"Density_gm_cc": 0.0, "Cost_per_KG": 300.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "WELDMENTS": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-6061": {"Density_gm_cc": 2.73, "Cost_per_KG": 455.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS304": {"Density_gm_cc": 7.85, "Cost_per_KG": 245.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0}
// };

// const drillingCosts = {
//     "Hole_4_8": {"Cost": 25},
//     "Hole_9_13": {"Cost": 30},
//     "Hole_15_22": {"Cost": 35},
//     "Hole_M4": {"Cost": 20},
//     "Hole_M5": {"Cost": 25},
//     "Hole_M6": {"Cost": 30},
//     "Hole_M8": {"Cost": 40},
//     "Hole_M10": {"Cost": 50},
//     "Hole_M12": {"Cost": 60},
//     "Hole_M14": {"Cost": 60},
//     "Hole_M16": {"Cost": 70},
//     "Hole_M18": {"Cost": 70},
//     "Hole_M20": {"Cost": 120},
//     "Hole_M22": {"Cost": 120},
//     "Hole_M24": {"Cost": 120},
//     "Hole_M25": {"Cost": 200},
//     "Hole_M26": {"Cost": 200},
//     "Hole_M30": {"Cost": 250},
//     "Hole_M36": {"Cost": 300},
//     "C_bore_M3_M5": {"Cost": 30},
//     "C_bore_M6_M10": {"Cost": 40},
//     "C_bore_M12": {"Cost": 50},
//     "C_bore_M14": {"Cost": 60},
//     "C_bore_M16": {"Cost": 80},
//     "BSP_TAP_1/8_1/4": {"Cost": 45},
//     "BSP_TAP_1/2_3/8": {"Cost": 60},
//     "BSP_TAP_1_inch": {"Cost": 120},
//     "BSP_TAP_1.5_2_inch": {"Cost": 200},
//     "GD_TOTAL_HOLE_LENGTH": {"Cost": 3},
//     "GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING": {"Cost": 2},
//     "4_5_H7": {"Cost": 80},
//     "6_8_H7": {"Cost": 100},
//     "10_14_H7": {"Cost": 120},
//     "15_18_H7": {"Cost": 160},
//     "20_25_H7": {"Cost": 220},
//     "25_30_H7": {"Cost": 280},
//     "Spot_face": {"Cost": 30},
//     "Radial Drilling": {"Cost": 1},
//     "Gun Drilling": {"Cost": 1}    
// };

// const coatingCosts = {
//     "Blackening": {"Cost": 20},
//     "ENP": {"Cost": 180},
//     "Flash Chrome": {"Cost": 0.6},
//     "PC": {"Cost": 20},
//     "Zinc Blue": {"Cost": 30}
// };

// let excelData = { headers: [], rows: [] };
// let uploadedFileName = 'cost_estimation.xlsx';
// let savedEstimations = [];

// document.addEventListener('DOMContentLoaded', () => {
//     const materialSelect = new Choices('#material', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Material',
//     });

//     const typeSelect = new Choices('#type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Type',
//     });

//     const operationSelect = new Choices('#operation', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Operations',
//         removeItemButton: true,
//     });

//     const operationChoices = [
//         { value: 'Milling', label: 'Milling' },
//         { value: 'Drilling', label: 'Drilling' },
//         { value: 'Grinding', label: 'Grinding' },
//         { value: 'Heat Treatment', label: 'Heat Treatment' },
//         { value: 'Coating', label: 'Coating' },
//         { value: 'VMC', label: 'VMC' },
//         { value: 'Wire Cut', label: 'Wire Cut' },
//         { value: 'CG', label: 'CG' },
//         { value: 'Turning', label: 'Turning' },
//         { value: 'CNC Turning', label: 'CNC Turning' },
//         { value: 'JG', label: 'JG' },
//         { value: 'Sparking', label: 'Sparking' },
//         { value: 'Engraving', label: 'Engraving' },
//         { value: 'Radial Drilling', label: 'Radial Drilling' },
//         { value: 'Gun Drilling', label: 'Gun Drilling' }
//     ];
//     operationSelect.setChoices(operationChoices, 'value', 'label', true);

//     const fmSideSelect = new Choices('#fm_side', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select FM Side',
//     });

//     const htRequiredSelect = new Choices('#ht_required', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select HT Required',
//     });

//     const coatingTypeSelect = new Choices('#coating_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Coating Type',
//     });

//     const holeTypeSelect = new Choices('#hole_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Hole Types',
//         removeItemButton: true
//     });

//     if (coatingTypeSelect.getValue(true) === '') {
//         const coatingOptions = Object.keys(coatingCosts).map(coating => ({
//             value: coating,
//             label: coating,
//         }));
//         coatingTypeSelect.setChoices(coatingOptions, 'value', 'label', true);
//     }

//     ['blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'].forEach(name => {
//         document.querySelector(`input[name="${name}"]`).setAttribute('readonly', true);
//     });

//     document.getElementById('excelUpload').addEventListener('change', function(e) {
//         const file = e.target.files[0];
//         if (file) {
//             uploadedFileName = file.name;
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 const data = new Uint8Array(e.target.result);
//                 const workbook = XLSX.read(data, { type: 'array' });
//                 const sheetName = workbook.SheetNames[0];
//                 const worksheet = workbook.Sheets[sheetName];
//                 const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

//                 if (jsonData.length > 0) {
//                     excelData.headers = jsonData[0];
//                     excelData.rows = jsonData.slice(1).filter(row => row.some(cell => cell !== undefined && cell !== ''));
//                 } else {
//                     excelData.headers = [];
//                     excelData.rows = [];
//                 }
//             };
//             reader.readAsArrayBuffer(file);
//         }
//     });

//     // Initially hide the clear button
//     document.getElementById('clearButton').classList.add('hidden');

//     document.getElementById('saveButton').addEventListener('click', function() {
//         calculateFields();
//         saveEstimation();
//         alert('Estimation saved!');
//     });

//     document.getElementById('downloadButton').addEventListener('click', function() {
//         if (savedEstimations.length === 0 && excelData.rows.length === 0) {
//             alert('No estimations to download!');
//             return;
//         }
//         downloadExcel();
//     });

//     document.getElementById('clearButton').addEventListener('click', function() {
//         clearForm();
//         alert('Form cleared!');
//     });

//     updateOperationBoxes();

//     const operationFields = [
//         'fm', 'fm_side', 'fm_side_cost', 'fm_l',
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face',
//         '4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost',
//         'sg', 'sgl', 'ht_required', 'ht',
//         'coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue',
//         'vmc', 'wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp', 'cg', 'turning',
//         'cnc_turning', 'jg', 'sparking', 'engraving', 'radial_drilling', 'gun_drilling'
//     ];
//     operationFields.forEach(name => {
//         const selector = name === 'fm_side' || name === 'ht_required' || name === 'coating_type' ?
//             `label:has(#${name})` : `label:has(input[name="${name}"])`;
//         document.querySelector(selector).classList.add('hidden');
//     });
// });

// document.querySelector('#type').addEventListener('change', function() {
//     const type = this.value;
//     const diaField = document.querySelector('label[for="dia"]');
//     const lengthField = document.querySelector('label[for="length"]');
//     const widthField = document.querySelector('label[for="width"]');
//     const thicknessField = document.querySelector('label[for="thickness"]');
//     const rmwstrField = document.querySelector('label[for="rmw_str"]');

//     diaField.classList.add('hidden');
//     lengthField.classList.add('hidden');
//     widthField.classList.add('hidden');
//     thicknessField.classList.add('hidden');
//     rmwstrField.classList.add('hidden');

//     if (type === 'Cyl') {
//         diaField.classList.remove('hidden');
//         lengthField.classList.remove('hidden');
//     } else if (type === 'Pri') {
//         lengthField.classList.remove('hidden');
//         widthField.classList.remove('hidden');
//         thicknessField.classList.remove('hidden');
//     } else if (type === 'Str') {
//         rmwstrField.classList.remove('hidden');
//     }
//     calculateFields();
// });

// document.querySelector('#operation').addEventListener('change', function() {
//     const operations = Array.from(this.selectedOptions).map(option => option.value).filter(op => op !== '');
//     updateOperationBoxes();
//     updateOperationFields(operations);
//     calculateFields();
// });

// document.querySelector('#hole_type').addEventListener('change', function() {
//     updateHoleTypeFields();
//     calculateFields();
// });

// function updateOperationBoxes() {
//     const operationSelect = document.querySelector('#operation');
//     const selectedOperations = Array.from(operationSelect.selectedOptions)
//         .map(option => option.value)
//         .filter(op => op !== '');
//     const container = document.querySelector('#operation-box-container');
//     container.innerHTML = '';

//     selectedOperations.forEach(operation => {
//         const box = document.createElement('div');
//         box.className = 'operation-box';
//         box.textContent = operation;
//         container.appendChild(box);
//     });
// }

// function updateOperationFields(operations) {
//     const fmField = document.querySelector('label:has(input[name="fm"])');
//     const fmSideQField = document.querySelector('label:has(#fm_side)');
//     const fmSideField = document.querySelector('label:has(input[name="fm_side_cost"])');
//     const fmLField = document.querySelector('label:has(input[name="fm_l"])');
//     const engravingField = document.querySelector('label:has(input[name="engraving"])');
//     const radialDrillingField = document.querySelector('label:has(input[name="radial_drilling"])');
//     const gunDrillingField = document.querySelector('label:has(input[name="gun_drilling"])');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
//     const grindingFields = ['sg', 'sgl'];
//     const heatTreatmentFields = ['ht_required', 'ht'];
//     const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
//     const vmcFields = ['vmc'];
//     const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
//     const cgFields = ['cg'];
//     const turningFields = ['turning'];
//     const cncTurningFields = ['cnc_turning'];
//     const jgFields = ['jg'];
//     const sparkingFields = ['sparking'];
//     const radialDrillingFields = ['radial_drilling'];
//     const gunDrillingFields = ['gun_drilling'];
//     const holeTypeField = document.querySelector('label[for="hole_type"]');

//     fmField.classList.add('hidden');
//     fmSideQField.classList.add('hidden');
//     fmSideField.classList.add('hidden');
//     fmLField.classList.add('hidden');
//     engravingField.classList.add('hidden');
//     radialDrillingField.classList.add('hidden');
//     gunDrillingField.classList.add('hidden');
//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     heatTreatmentFields.forEach(name => {
//         const field = name === 'ht_required' ?
//             document.querySelector(`label:has(#${name})`) :
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     coatingFields.forEach(name => {
//         const field = name === 'coating_type' ?
//             document.querySelector(`label:has(#${name})`) :
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     radialDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     gunDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     holeTypeField.classList.add('hidden');

//     operations.forEach(operation => {
//         if (operation === 'Milling') {
//             fmField.classList.remove('hidden');
//             fmSideQField.classList.remove('hidden');
//             fmSideField.classList.remove('hidden');
//             fmLField.classList.remove('hidden');
//         }
//         if (operation === 'Drilling') {
//             holeTypeField.classList.remove('hidden');
//         }
//         if (operation === 'Grinding') {
//             grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Heat Treatment') {
//             heatTreatmentFields.forEach(name => {
//                 const field = name === 'ht_required' ?
//                     document.querySelector(`label:has(#${name})`) :
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//         }
//         if (operation === 'Coating') {
//             coatingFields.forEach(name => {
//                 const field = name === 'coating_type' ?
//                     document.querySelector(`label:has(#${name})`) :
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//             updateCoatingFields();
//         }
//         if (operation === 'VMC') {
//             vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Wire Cut') {
//             wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CG') {
//             cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Turning') {
//             turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CNC Turning') {
//             cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'JG') {
//             jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Sparking') {
//             sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Engraving') {
//             engravingField.classList.remove('hidden');
//         }
//         if (operation === 'Radial Drilling') {
//             radialDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Gun Drilling') {
//             gunDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//     });

//     if (!operations.includes('Drilling')) {
//         const holeTypeSelect = Choices.getInstance('#hole_type');
//         holeTypeSelect.removeActiveItems();
//     }
//     updateHoleTypeFields();
// }

// function updateHoleTypeFields() {
//     const holeTypes = Array.from(document.querySelector('#hole_type').selectedOptions)
//         .map(option => option.value)
//         .filter(type => type !== '');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];

//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));

//     if (Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).includes('Drilling')) {
//         holeTypes.forEach(holeType => {
//             if (holeType === 'Free Hole') {
//                 ['hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'Tap Hole') {
//                 ['hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//                  'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//                  'hole_m30', 'hole_m36', 'tap_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'C Bore') {
//                 ['c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'BSP Tap') {
//                 ['bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'GD Hole') {
//                 ['gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//                  'gd_cost_dro_radial_drilling'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'Spot Face') {
//                 ['spot_face'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'H7 Hole') {
//                 ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//         });
//     }
// }

// document.querySelector('#coating_type').addEventListener('change', function() {
//     updateCoatingFields();
//     calculateFields();
// });

// function updateCoatingFields() {
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value);
//     const coatingType = document.querySelector('#coating_type').value;
//     const blackeningField = document.querySelector('label:has(input[name="blackening"])');
//     const enpField = document.querySelector('label:has(input[name="enp"])');
//     const flashChromeField = document.querySelector('label:has(input[name="flash_chrome"])');
//     const pcField = document.querySelector('label:has(input[name="pc"])');
//     const zincBlueField = document.querySelector('label:has(input[name="zinc_blue"])');

//     blackeningField.classList.add('hidden');
//     enpField.classList.add('hidden');
//     flashChromeField.classList.add('hidden');
//     pcField.classList.add('hidden');
//     zincBlueField.classList.add('hidden');

//     if (operations.includes('Coating')) {
//         if (coatingType === 'Blackening') blackeningField.classList.remove('hidden');
//         if (coatingType === 'ENP') enpField.classList.remove('hidden');
//         if (coatingType === 'Flash Chrome') flashChromeField.classList.remove('hidden');
//         if (coatingType === 'PC') pcField.classList.remove('hidden');
//         if (coatingType === 'Zinc Blue') zincBlueField.classList.remove('hidden');
//     }
// }

// const inputs = document.querySelectorAll(
//     'input[name="dia"], input[name="length"], input[name="width"], input[name="thickness"], input[name="rmw_str"], ' +
//     '#type, #material, #operation, #fm_side, #hole_type, ' +
//     'input[name="hole_4_8"], input[name="hole_9_13"], input[name="hole_15_22"], ' +
//     'input[name="hole_m4"], input[name="hole_m5"], input[name="hole_m6"], input[name="hole_m8"], ' +
//     'input[name="hole_m10"], input[name="hole_m12"], input[name="hole_m14"], input[name="hole_m16"], ' +
//     'input[name="hole_m18"], input[name="hole_m20"], input[name="hole_m22"], input[name="hole_m24"], ' +
//     'input[name="hole_m25"], input[name="hole_m26"], input[name="hole_m30"], input[name="hole_m36"], ' +
//     'input[name="c_bore_m3_m5"], input[name="c_bore_m6_m10"], input[name="c_bore_m12"], ' +
//     'input[name="c_bore_m14"], input[name="c_bore_m16"], ' +
//     'input[name="bsp_tap_1_8_1_4"], input[name="bsp_tap_1_2_3_8"], input[name="bsp_tap_1_inch"], ' +
//     'input[name="bsp_tap_1_5_2_inch"], input[name="gd_total_hole_length"], ' +
//     'input[name="gd_total_hole_length_dro_radial_drilling"], input[name="spot_face"], ' +
//     'input[name="4_5_h7"], input[name="6_8_h7"], input[name="10_14_h7"], ' +
//     'input[name="15_18_h7"], input[name="20_25_h7"], input[name="25_30_h7"], ' +
//     'input[name="sg"], input[name="sgl"], #ht_required, input[name="ht"], ' +
//     'input[name="fwcam"], #coating_type, input[name="blackening"], ' +
//     'input[name="enp"], input[name="flash_chrome"], input[name="pc"], input[name="zinc_blue"], ' +
//     'input[name="vmc"], input[name="turning"], input[name="cg"], input[name="wire_cut_sp"], ' +
//     'input[name="cnc_turning"], input[name="jg"], input[name="sparking"], input[name="fm"], ' +
//     'input[name="engraving"], input[name="radial_drilling"], input[name="gun_drilling"], ' +
//     'input[name="miscellaneous"], input[name="profit_percent"]'
// );
// inputs.forEach(input => input.addEventListener('change', calculateFields));

// function calculateFields() {
//     const type = document.querySelector('#type').value;
//     const material = document.querySelector('#material').value;
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).filter(op => op !== '');
//     const fmSide = document.querySelector('#fm_side').value === "True";
//     const htRequired = document.querySelector('#ht_required').value === "True";
//     const coatingType = document.querySelector('#coating_type').value;
//     const dia = parseFloat(document.querySelector('input[name="dia"]').value) || 0;
//     const length = parseFloat(document.querySelector('input[name="length"]').value) || 0;
//     const width = parseFloat(document.querySelector('input[name="width"]').value) || 0;
//     const thickness = parseFloat(document.querySelector('input[name="thickness"]').value) || 0;
//     const rmwStr = parseFloat(document.querySelector('input[name="rmw_str"]').value) || 0;
//     const fwcam = parseFloat(document.querySelector('input[name="fwcam"]').value) || 0;
//     const profitPercent = parseFloat(document.querySelector('input[name="profit_percent"]').value) || 0;
//     const miscellaneous = parseFloat(document.querySelector('input[name="miscellaneous"]').value) || 0;
//     const density = materials[material]?.Density_gm_cc || 0;
//     const costPerKg = materials[material]?.Cost_per_KG || 0;
//     const fmPerSqmm = materials[material]?.FM_per_sqmm || 0;
//     const fmAfterHtPerSqmm = materials[material]?.FM_AFTER_HT_per_sqmm || 0;
//     const htKg = materials[material]?.HT_KG || 0;
//     let rmwCalc = 0;
//     let rmw = 0;
//     let rmc = 0;
//     let fm = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm"]').value) || 0) : 0;
//     let fmSideCost = 0;
//     let fmL = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm_l"]').value) || 0) : 0;
//     let freeHoleCost = 0;
//     let tapHoleCost = 0;
//     let cBoreCost = 0;
//     let bspTapCost = 0;
//     let gdCostGdMachine = 0;
//     let gdCostDroRadialDrilling = 0;
//     let h7HoleCost = 0;
//     let spotFaceCost = 0;
//     let sg = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sg"]').value) || 0) : 0;
//     let sgl = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sgl"]').value) || 0) : 0;
//     let ht = 0;
//     let blackeningCost = 0;
//     let enpCost = 0;
//     let flashChromeCost = 0;
//     let pcCost = 0;
//     let zincBlueCost = 0;
//     let vmc = operations.includes("VMC") ? (parseFloat(document.querySelector('input[name="vmc"]').value) || 0) : 0;
//     let turning = operations.includes("Turning") ? (parseFloat(document.querySelector('input[name="turning"]').value) || 0) : 0;
//     let cg = operations.includes("CG") ? (parseFloat(document.querySelector('input[name="cg"]').value) || 0) : 0;
//     let wireCutSp = operations.includes("Wire Cut") ? (parseFloat(document.querySelector('input[name="wire_cut_sp"]').value) || 0) : 0;
//     let cncTurning = operations.includes("CNC Turning") ? (parseFloat(document.querySelector('input[name="cnc_turning"]').value) || 0) : 0;
//     let jg = operations.includes("JG") ? (parseFloat(document.querySelector('input[name="jg"]').value) || 0) : 0;
//     let sparking = operations.includes("Sparking") ? (parseFloat(document.querySelector('input[name="sparking"]').value) || 0) : 0;
//     let engraving = operations.includes("Engraving") ? (parseFloat(document.querySelector('input[name="engraving"]').value) || 0) : 0;
//     let radialDrilling = 0;
//     let gunDrilling = 0;

//     if (type === "Pri" && length > 0 && width > 0 && thickness > 0) {
//         rmwCalc = ((length * width * thickness / 1000) * density) / 1000;
//     } else if (type === "Cyl" && dia > 0 && length > 0) {
//         rmwCalc = ((3.14159 * (dia * dia) * length / 4 / 1000) * density) / 1000;
//     }

//     if (type === "Str" && rmwStr > 0) {
//         rmw = rmwStr;
//     } else if (rmwCalc > 0) {
//         rmw = rmwCalc;
//     }

//     if (rmw > 0 && costPerKg > 0) {
//         rmc = rmw * costPerKg;
//     }

//     if (operations.includes("Milling") && type === "Pri" && length >= 250 && width >= 250) {
//         const fmRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fm = length * width * fmRate;
//     }

//     if (operations.includes("Milling") && type === "Pri" && fmSide && length > 0 && width > 0 && thickness > 0) {
//         const fmSideRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fmSideCost = 2 * (length + width) * thickness * fmSideRate;
//     }

//     if (operations.includes("Drilling")) {
//         const holeTypes = Array.from(document.querySelector('#hole_type').selectedOptions)
//             .map(option => option.value)
//             .filter(type => type !== '');

//         if (holeTypes.includes('Free Hole')) {
//             const hole_4_8 = parseFloat(document.querySelector('input[name="hole_4_8"]').value) || 0;
//             const hole_9_13 = parseFloat(document.querySelector('input[name="hole_9_13"]').value) || 0;
//             const hole_15_22 = parseFloat(document.querySelector('input[name="hole_15_22"]').value) || 0;
//             freeHoleCost = (hole_4_8 * drillingCosts["Hole_4_8"].Cost) +
//                            (hole_9_13 * drillingCosts["Hole_9_13"].Cost) +
//                            (hole_15_22 * drillingCosts["Hole_15_22"].Cost);
//         }

//         if (holeTypes.includes('Tap Hole')) {
//             const hole_m4 = parseFloat(document.querySelector('input[name="hole_m4"]').value) || 0;
//             const hole_m5 = parseFloat(document.querySelector('input[name="hole_m5"]').value) || 0;
//             const hole_m6 = parseFloat(document.querySelector('input[name="hole_m6"]').value) || 0;
//             const hole_m8 = parseFloat(document.querySelector('input[name="hole_m8"]').value) || 0;
//             const hole_m10 = parseFloat(document.querySelector('input[name="hole_m10"]').value) || 0;
//             const hole_m12 = parseFloat(document.querySelector('input[name="hole_m12"]').value) || 0;
//             const hole_m14 = parseFloat(document.querySelector('input[name="hole_m14"]').value) || 0;
//             const hole_m16 = parseFloat(document.querySelector('input[name="hole_m16"]').value) || 0;
//             const hole_m18 = parseFloat(document.querySelector('input[name="hole_m18"]').value) || 0;
//             const hole_m20 = parseFloat(document.querySelector('input[name="hole_m20"]').value) || 0;
//             const hole_m22 = parseFloat(document.querySelector('input[name="hole_m22"]').value) || 0;
//             const hole_m24 = parseFloat(document.querySelector('input[name="hole_m24"]').value) || 0;
//             const hole_m25 = parseFloat(document.querySelector('input[name="hole_m25"]').value) || 0;
//             const hole_m26 = parseFloat(document.querySelector('input[name="hole_m26"]').value) || 0;
//             const hole_m30 = parseFloat(document.querySelector('input[name="hole_m30"]').value) || 0;
//             const hole_m36 = parseFloat(document.querySelector('input[name="hole_m36"]').value) || 0;
//             tapHoleCost = (hole_m4 * drillingCosts["Hole_M4"].Cost) +
//                           (hole_m5 * drillingCosts["Hole_M5"].Cost) +
//                           (hole_m6 * drillingCosts["Hole_M6"].Cost) +
//                           (hole_m8 * drillingCosts["Hole_M8"].Cost) +
//                           (hole_m10 * drillingCosts["Hole_M10"].Cost) +
//                           (hole_m12 * drillingCosts["Hole_M12"].Cost) +
//                           (hole_m14 * drillingCosts["Hole_M14"].Cost) +
//                           (hole_m16 * drillingCosts["Hole_M16"].Cost) +
//                           (hole_m18 * drillingCosts["Hole_M18"].Cost) +
//                           (hole_m20 * drillingCosts["Hole_M20"].Cost) +
//                           (hole_m22 * drillingCosts["Hole_M22"].Cost) +
//                           (hole_m24 * drillingCosts["Hole_M24"].Cost) +
//                           (hole_m25 * drillingCosts["Hole_M25"].Cost) +
//                           (hole_m26 * drillingCosts["Hole_M26"].Cost) +
//                           (hole_m30 * drillingCosts["Hole_M30"].Cost) +
//                           (hole_m36 * drillingCosts["Hole_M36"].Cost);
//         }

//         if (holeTypes.includes('C Bore')) {
//             const c_bore_m3_m5 = parseFloat(document.querySelector('input[name="c_bore_m3_m5"]').value) || 0;
//             const c_bore_m6_m10 = parseFloat(document.querySelector('input[name="c_bore_m6_m10"]').value) || 0;
//             const c_bore_m12 = parseFloat(document.querySelector('input[name="c_bore_m12"]').value) || 0;
//             const c_bore_m14 = parseFloat(document.querySelector('input[name="c_bore_m14"]').value) || 0;
//             const c_bore_m16 = parseFloat(document.querySelector('input[name="c_bore_m16"]').value) || 0;
//             cBoreCost = (c_bore_m3_m5 * drillingCosts["C_bore_M3_M5"].Cost) +
//                         (c_bore_m6_m10 * drillingCosts["C_bore_M6_M10"].Cost) +
//                         (c_bore_m12 * drillingCosts["C_bore_M12"].Cost) +
//                         (c_bore_m14 * drillingCosts["C_bore_M14"].Cost) +
//                         (c_bore_m16 * drillingCosts["C_bore_M16"].Cost);
//         }

//         if (holeTypes.includes('BSP Tap')) {
//             const bsp_tap_1_8_1_4 = parseFloat(document.querySelector('input[name="bsp_tap_1_8_1_4"]').value) || 0;
//             const bsp_tap_1_2_3_8 = parseFloat(document.querySelector('input[name="bsp_tap_1_2_3_8"]').value) || 0;
//             const bsp_tap_1_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_inch"]').value) || 0;
//             const bsp_tap_1_5_2_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_5_2_inch"]').value) || 0;
//             bspTapCost = (bsp_tap_1_8_1_4 * drillingCosts["BSP_TAP_1/8_1/4"].Cost) +
//                          (bsp_tap_1_2_3_8 * drillingCosts["BSP_TAP_1/2_3/8"].Cost) +
//                          (bsp_tap_1_inch * drillingCosts["BSP_TAP_1_inch"].Cost) +
//                          (bsp_tap_1_5_2_inch * drillingCosts["BSP_TAP_1.5_2_inch"].Cost);
//         }

//         if (holeTypes.includes('GD Hole')) {
//             const gd_total_hole_length = parseFloat(document.querySelector('input[name="gd_total_hole_length"]').value) || 0;
//             gdCostGdMachine = gd_total_hole_length * drillingCosts["GD_TOTAL_HOLE_LENGTH"].Cost;
//             const gd_total_hole_length_dro_radial_drilling = parseFloat(document.querySelector('input[name="gd_total_hole_length_dro_radial_drilling"]').value) || 0;
//             gdCostDroRadialDrilling = gd_total_hole_length_dro_radial_drilling * drillingCosts["GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING"].Cost;
//         }

//         if (holeTypes.includes('Spot Face')) {
//             const spot_face = parseFloat(document.querySelector('input[name="spot_face"]').value) || 0;
//             spotFaceCost = spot_face * drillingCosts["Spot_face"].Cost;
//         }

//         if (holeTypes.includes('H7 Hole')) {
//             const h7_4_5 = parseFloat(document.querySelector('input[name="4_5_h7"]').value) || 0;
//             const h7_6_8 = parseFloat(document.querySelector('input[name="6_8_h7"]').value) || 0;
//             const h7_10_14 = parseFloat(document.querySelector('input[name="10_14_h7"]').value) || 0;
//             const h7_15_18 = parseFloat(document.querySelector('input[name="15_18_h7"]').value) || 0;
//             const h7_20_25 = parseFloat(document.querySelector('input[name="20_25_h7"]').value) || 0;
//             const h7_25_30 = parseFloat(document.querySelector('input[name="25_30_h7"]').value) || 0;
//             h7HoleCost = (h7_4_5 * drillingCosts["4_5_H7"].Cost) +
//                          (h7_6_8 * drillingCosts["6_8_H7"].Cost) +
//                          (h7_10_14 * drillingCosts["10_14_H7"].Cost) +
//                          (h7_15_18 * drillingCosts["15_18_H7"].Cost) +
//                          (h7_20_25 * drillingCosts["20_25_H7"].Cost) +
//                          (h7_25_30 * drillingCosts["25_30_H7"].Cost);
//         }
//     }

//     if (operations.includes("Grinding") && type === "Pri" && length >= 250 && width >= 250) {
//         sg = length * width * fmPerSqmm;
//     }

//     if (operations.includes("Heat Treatment") && htRequired) {
//         ht = rmw * htKg;
//     }

//     if (operations.includes("Coating") && length > 0 && width > 0 && coatingType) {
//         const areaCm2 = (length / 10) * (width / 10);
//         blackeningCost = coatingType === "Blackening" ? fwcam * coatingCosts["Blackening"].Cost : 0;
//         enpCost = coatingType === "ENP" ? fwcam * coatingCosts["ENP"].Cost : 0;
//         flashChromeCost = coatingType === "Flash Chrome" ? areaCm2 * coatingCosts["Flash Chrome"].Cost : 0;
//         pcCost = coatingType === "PC" ? fwcam * coatingCosts["PC"].Cost : 0;
//         zincBlueCost = coatingType === "Zinc Blue" ? fwcam * coatingCosts["Zinc Blue"].Cost : 0;
//     }

//     if (operations.includes("Radial Drilling")) {
//         radialDrilling = parseFloat(document.querySelector('input[name="radial_drilling"]').value) || 0;
//         radialDrilling = radialDrilling * drillingCosts["Radial Drilling"].Cost;
//     }

//     if (operations.includes("Gun Drilling")) {
//         gunDrilling = parseFloat(document.querySelector('input[name="gun_drilling"]').value) || 0;
//         gunDrilling = gunDrilling * drillingCosts["Gun Drilling"].Cost;
//     }

//     const coatingSum = blackeningCost + enpCost + flashChromeCost + pcCost + zincBlueCost;
//     const total = (
//         engraving + sgl + h7HoleCost + ht + gdCostDroRadialDrilling +
//         gdCostGdMachine + bspTapCost + cBoreCost + tapHoleCost + freeHoleCost +
//         spotFaceCost + fmL + fmSideCost + fm + rmc + vmc + turning + cg + wireCutSp +
//         cncTurning + jg + sparking + coatingSum + radialDrilling + gunDrilling + miscellaneous + sg
//     );

//     const withProfit = total * (1 + (profitPercent / 100));

//     const rmwCalcField = document.querySelector('input[name="rmw_calc"]');
//     const rmwField = document.querySelector('input[name="rmw"]');
//     const rmcField = document.querySelector('input[name="rmc"]');
//     const fmField = document.querySelector('input[name="fm"]');
//     const fmSideCostField = document.querySelector('input[name="fm_side_cost"]');
//     const fmLField = document.querySelector('input[name="fm_l"]');
//     const freeHoleCostField = document.querySelector('input[name="free_hole_cost"]');
//     const tapHoleCostField = document.querySelector('input[name="tap_hole_cost"]');
//     const cBoreCostField = document.querySelector('input[name="c_bore_cost"]');
//     const bspTapCostField = document.querySelector('input[name="bsp_tap_cost"]');
//     const gdCostGdMachineField = document.querySelector('input[name="gd_cost_gd_machine"]');
//     const gdCostDroRadialDrillingField = document.querySelector('input[name="gd_cost_dro_radial_drilling"]');
//     const h7HoleCostField = document.querySelector('input[name="h7_hole_cost"]');
//     const sgField = document.querySelector('input[name="sg"]');
//     const sglField = document.querySelector('input[name="sgl"]');
//     const htField = document.querySelector('input[name="ht"]');
//     const blackeningField = document.querySelector('input[name="blackening"]');
//     const enpField = document.querySelector('input[name="enp"]');
//     const flashChromeField = document.querySelector('input[name="flash_chrome"]');
//     const pcField = document.querySelector('input[name="pc"]');
//     const zincBlueField = document.querySelector('input[name="zinc_blue"]');
//     const vmcField = document.querySelector('input[name="vmc"]');
//     const turningField = document.querySelector('input[name="turning"]');
//     const cgField = document.querySelector('input[name="cg"]');
//     const wireCutSpField = document.querySelector('input[name="wire_cut_sp"]');
//     const cncTurningField = document.querySelector('input[name="cnc_turning"]');
//     const jgField = document.querySelector('input[name="jg"]');
//     const sparkingField = document.querySelector('input[name="sparking"]');
//     const engravingField = document.querySelector('input[name="engraving"]');
//     const radialDrillingField = document.querySelector('input[name="radial_drilling"]');
//     const gunDrillingField = document.querySelector('input[name="gun_drilling"]');
//     const totalField = document.querySelector('input[name="total"]');
//     const withProfitField = document.querySelector('input[name="with_profit"]');

//     rmwCalcField.value = rmwCalc > 0 ? rmwCalc.toFixed(2) : '';
//     rmwField.value = rmw > 0 ? rmw.toFixed(2) : '';
//     rmcField.value = rmc > 0 ? rmc.toFixed(2) : '';
//     fmField.value = fm > 0 ? fm.toFixed(2) : (operations.includes("Milling") ? fmField.value : '');
//     fmSideCostField.value = fmSideCost > 0 ? fmSideCost.toFixed(2) : '';
//     fmLField.value = fmL > 0 ? fmL.toFixed(2) : (operations.includes("Milling") ? fmLField.value : '');
//     freeHoleCostField.value = freeHoleCost > 0 ? freeHoleCost.toFixed(2) : '';
//     tapHoleCostField.value = tapHoleCost > 0 ? tapHoleCost.toFixed(2) : '';
//     cBoreCostField.value = cBoreCost > 0 ? cBoreCost.toFixed(2) : '';
//     bspTapCostField.value = bspTapCost > 0 ? bspTapCost.toFixed(2) : '';
//     gdCostGdMachineField.value = gdCostGdMachine > 0 ? gdCostGdMachine.toFixed(2) : '';
//     gdCostDroRadialDrillingField.value = gdCostDroRadialDrilling > 0 ? gdCostDroRadialDrilling.toFixed(2) : '';
//     h7HoleCostField.value = h7HoleCost > 0 ? h7HoleCost.toFixed(2) : '';
//     sgField.value = sg > 0 ? sg.toFixed(2) : (operations.includes("Grinding") ? sgField.value : '');
//     sglField.value = sgl > 0 ? sgl.toFixed(2) : (operations.includes("Grinding") ? sglField.value : '');
//     htField.value = ht > 0 ? ht.toFixed(2) : '';
//     blackeningField.value = blackeningCost > 0 ? blackeningCost.toFixed(2) : '';
//     enpField.value = enpCost > 0 ? enpCost.toFixed(2) : '';
//     flashChromeField.value = flashChromeCost > 0 ? flashChromeCost.toFixed(2) : '';
//     pcField.value = pcCost > 0 ? pcCost.toFixed(2) : '';
//     zincBlueField.value = zincBlueCost > 0 ? zincBlueCost.toFixed(2) : '';
//     vmcField.value = vmc > 0 ? vmc.toFixed(2) : (operations.includes("VMC") ? vmcField.value : '');
//     turningField.value = turning > 0 ? turning.toFixed(2) : (operations.includes("Turning") ? turningField.value : '');
//     cgField.value = cg > 0 ? cg.toFixed(2) : (operations.includes("CG") ? cgField.value : '');
//     wireCutSpField.value = wireCutSp > 0 ? wireCutSp.toFixed(2) : (operations.includes("Wire Cut") ? wireCutSpField.value : '');
//     cncTurningField.value = cncTurning > 0 ? cncTurning.toFixed(2) : (operations.includes("CNC Turning") ? cncTurningField.value : '');
//     jgField.value = jg > 0 ? jg.toFixed(2) : (operations.includes("JG") ? jgField.value : '');
//     sparkingField.value = sparking > 0 ? sparking.toFixed(2) : (operations.includes("Sparking") ? sparkingField.value : '');
//     engravingField.value = engraving > 0 ? engraving.toFixed(2) : (operations.includes("Engraving") ? engravingField.value : '');
//     radialDrillingField.value = radialDrilling > 0 ? radialDrilling.toFixed(2) : (operations.includes("Radial Drilling") ? radialDrillingField.value : '');
//     gunDrillingField.value = gunDrilling > 0 ? gunDrilling.toFixed(2) : (operations.includes("Gun Drilling") ? gunDrillingField.value : '');
//     totalField.value = total > 0 ? total.toFixed(2) : '';
//     withProfitField.value = withProfit > 0 ? withProfit.toFixed(2) : '';
// }

// function saveEstimation() {
//     const form = document.getElementById('costForm');
//     const formData = new FormData(form);
//     const estimationData = {};

//     formData.forEach((value, key) => {
//         if (key === 'operation') {
//             if (!estimationData[key]) estimationData[key] = [];
//             estimationData[key].push(value);
//         } else {
//             estimationData[key] = value;
//         }
//     });

//     if (estimationData['operation']) {
//         estimationData['operation'] = estimationData['operation'].join(', ');
//     }

//     savedEstimations.push(estimationData);

//     // Show the clear button after saving an estimation
//     document.getElementById('clearButton').classList.remove('hidden');
// }

// function downloadExcel() {
//     const allHeaders = Array.from(document.getElementById('costForm').elements)
//         .filter(el => el.name && el.name !== 'operation')
//         .map(el => el.name)
//         .concat(['operation'])
//         .filter((v, i, a) => a.indexOf(v) === i);

//     const headers = excelData.headers.length > 0 ? excelData.headers : allHeaders;

//     const estimationRows = savedEstimations.map(estimation => 
//         headers.map(header => estimation[header] || '')
//     );

//     const allRows = [...excelData.rows, ...estimationRows].filter(row => row.some(cell => cell !== undefined && cell !== ''));

//     const wsData = [headers, ...allRows];

//     const ws = XLSX.utils.aoa_to_sheet(wsData);

//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Cost Estimation');

//     XLSX.writeFile(wb, uploadedFileName);
// }

// function clearForm() {
//     const form = document.getElementById('costForm');
//     form.reset(); // Reset all native form inputs

//     // Reset Choices.js select elements
//     const materialSelect = Choices.getInstance('#material');
//     const typeSelect = Choices.getInstance('#type');
//     const operationSelect = Choices.getInstance('#operation');
//     const fmSideSelect = Choices.getInstance('#fm_side');
//     const htRequiredSelect = Choices.getInstance('#ht_required');
//     const coatingTypeSelect = Choices.getInstance('#coating_type');
//     const holeTypeSelect = Choices.getInstance('#hole_type');

//     materialSelect.removeActiveItems();
//     typeSelect.removeActiveItems();
//     operationSelect.removeActiveItems();
//     fmSideSelect.removeActiveItems();
//     htRequiredSelect.removeActiveItems();
//     coatingTypeSelect.removeActiveItems();
//     holeTypeSelect.removeActiveItems();

//     // Clear operation boxes
//     const operationContainer = document.querySelector('#operation-box-container');
//     operationContainer.innerHTML = '';

//     // Hide all conditional fields
//     const operationFields = [
//         'fm', 'fm_side', 'fm_side_cost', 'fm_l',
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face',
//         '4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost',
//         'sg', 'sgl', 'ht_required', 'ht',
//         'coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue',
//         'vmc', 'wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp', 'cg', 'turning',
//         'cnc_turning', 'jg', 'sparking', 'engraving', 'radial_drilling', 'gun_drilling'
//     ];
//     operationFields.forEach(name => {
//         const selector = name === 'fm_side' || name === 'ht_required' || name === 'coating_type' ?
//             `label:has(#${name})` : `label:has(input[name="${name}"])`;
//         document.querySelector(selector).classList.add('hidden');
//     });

//     // Hide type-specific fields
//     const typeFields = ['dia', 'length', 'width', 'thickness', 'rmw_str'];
//     typeFields.forEach(name => {
//         document.querySelector(`label[for="${name}"]`).classList.add('hidden');
//     });

//     // Clear Excel upload
//     const excelUpload = document.getElementById('excelUpload');
//     excelUpload.value = '';
//     excelData = { headers: [], rows: [] };
//     uploadedFileName = 'cost_estimation.xlsx';

//     // Hide the clear button after clearing the form
//     document.getElementById('clearButton').classList.add('hidden');

//     // Recalculate fields to update any calculated values
//     calculateFields();
// }

// const holeFields = [
//     'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost', 
//     'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14', 
//     'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26', 
//     'hole_m30', 'hole_m36', 'tap_hole_cost', 'c_bore_m3_m5', 'c_bore_m6_m10', 
//     'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost', 'bsp_tap_1_8_1_4', 
//     'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost', 
//     'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling', 
//     'gd_cost_dro_radial_drilling', 'spot_face'
// ];
// const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
// const fmFields = ['fm', 'fm_side', 'fm_side_cost', 'fm_l'];
// const grindingFields = ['sg', 'sgl'];
// const heatTreatmentFields = ['ht_required', 'ht'];
// const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
// const vmcFields = ['vmc'];
// const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
// const cgFields = ['cg'];
// const turningFields = ['turning'];
// const cncTurningFields = ['cnc_turning'];
// const jgFields = ['jg'];
// const sparkingFields = ['sparking'];
// const engravingFields = ['engraving'];
// const radialDrillingFields = ['radial_drilling'];
// const gunDrillingFields = ['gun_drilling'];

// holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// fmFields.forEach(name => {
//     const field = name === 'fm_side' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// heatTreatmentFields.forEach(name => {
//     const field = name === 'ht_required' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// coatingFields.forEach(name => {
//     const field = name === 'coating_type' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// engravingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// radialDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// gunDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));










































// const materials = {
//     "MS": {"Density_gm_cc": 7.85, "Cost_per_KG": 80.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "C45": {"Density_gm_cc": 7.85, "Cost_per_KG": 95.0, "FM_per_sqmm": 0.005, "HT_KG": 25.0, "FM_AFTER_HT_per_sqmm": 0.007},
//     "EN24": {"Density_gm_cc": 7.85, "Cost_per_KG": 125.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN354": {"Density_gm_cc": 7.85, "Cost_per_KG": 145.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "20MnCr5": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN47": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN31": {"Density_gm_cc": 7.85, "Cost_per_KG": 100.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "EN19": {"Density_gm_cc": 7.85, "Cost_per_KG": 75.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS410": {"Density_gm_cc": 7.85, "Cost_per_KG": 220.0, "FM_per_sqmm": 0.008, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-7075": {"Density_gm_cc": 2.73, "Cost_per_KG": 730.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "D2": {"Density_gm_cc": 7.85, "Cost_per_KG": 350.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "OHNS": {"Density_gm_cc": 7.85, "Cost_per_KG": 120.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "DELRIN": {"Density_gm_cc": 1.42, "Cost_per_KG": 550.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "NYLON": {"Density_gm_cc": 1.14, "Cost_per_KG": 500.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "HYLEM": {"Density_gm_cc": 1.95, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "BRASS": {"Density_gm_cc": 8.5, "Cost_per_KG": 600.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "COPPER": {"Density_gm_cc": 8.93, "Cost_per_KG": 700.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CARBIDE": {"Density_gm_cc": 15.0, "Cost_per_KG": 1600.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "CASTING": {"Density_gm_cc": 0.0, "Cost_per_KG": 300.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "WELDMENTS": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "AL-6061": {"Density_gm_cc": 2.73, "Cost_per_KG": 455.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
//     "SS304": {"Density_gm_cc": 7.85, "Cost_per_KG": 245.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0}
// };

// const drillingCosts = {
//     "Hole_4_8": {"Cost": 25},
//     "Hole_9_13": {"Cost": 30},
//     "Hole_15_22": {"Cost": 35},
//     "Hole_M4": {"Cost": 20},
//     "Hole_M5": {"Cost": 25},
//     "Hole_M6": {"Cost": 30},
//     "Hole_M8": {"Cost": 40},
//     "Hole_M10": {"Cost": 50},
//     "Hole_M12": {"Cost": 60},
//     "Hole_M14": {"Cost": 60},
//     "Hole_M16": {"Cost": 70},
//     "Hole_M18": {"Cost": 70},
//     "Hole_M20": {"Cost": 120},
//     "Hole_M22": {"Cost": 120},
//     "Hole_M24": {"Cost": 120},
//     "Hole_M25": {"Cost": 200},
//     "Hole_M26": {"Cost": 200},
//     "Hole_M30": {"Cost": 250},
//     "Hole_M36": {"Cost": 300},
//     "C_bore_M3_M5": {"Cost": 30},
//     "C_bore_M6_M10": {"Cost": 40},
//     "C_bore_M12": {"Cost": 50},
//     "C_bore_M14": {"Cost": 60},
//     "C_bore_M16": {"Cost": 80},
//     "BSP_TAP_1/8_1/4": {"Cost": 45},
//     "BSP_TAP_1/2_3/8": {"Cost": 60},
//     "BSP_TAP_1_inch": {"Cost": 120},
//     "BSP_TAP_1.5_2_inch": {"Cost": 200},
//     "GD_TOTAL_HOLE_LENGTH": {"Cost": 3},
//     "GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING": {"Cost": 2},
//     "4_5_H7": {"Cost": 80},
//     "6_8_H7": {"Cost": 100},
//     "10_14_H7": {"Cost": 120},
//     "15_18_H7": {"Cost": 160},
//     "20_25_H7": {"Cost": 220},
//     "25_30_H7": {"Cost": 280},
//     "Spot_face": {"Cost": 30},
//     "Radial Drilling": {"Cost": 1},
//     "Gun Drilling": {"Cost": 1}    
// };

// const coatingCosts = {
//     "Blackening": {"Cost": 20},
//     "ENP": {"Cost": 180},
//     "Flash Chrome": {"Cost": 0.6},
//     "PC": {"Cost": 20},
//     "Zinc Blue": {"Cost": 30}
// };

// let excelData = { headers: [], rows: [] };
// let uploadedFileName = 'cost_estimation.xlsx';
// let savedEstimations = [];

// document.addEventListener('DOMContentLoaded', () => {
//     console.log('DOM loaded, initializing form');
//     const materialSelect = new Choices('#material', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Material',
//     });

//     const typeSelect = new Choices('#type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Type',
//     });

//     const operationSelect = new Choices('#operation', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Operations',
//         removeItemButton: true,
//     });

//     const operationChoices = [
//         { value: 'Milling', label: 'Milling' },
//         { value: 'Drilling', label: 'Drilling' },
//         { value: 'Grinding', label: 'Grinding' },
//         { value: 'Heat Treatment', label: 'Heat Treatment' },
//         { value: 'Coating', label: 'Coating' },
//         { value: 'VMC', label: 'VMC' },
//         { value: 'Wire Cut', label: 'Wire Cut' },
//         { value: 'CG', label: 'CG' },
//         { value: 'Turning', label: 'Turning' },
//         { value: 'CNC Turning', label: 'CNC Turning' },
//         { value: 'JG', label: 'JG' },
//         { value: 'Sparking', label: 'Sparking' },
//         { value: 'Engraving', label: 'Engraving' },
//         { value: 'Radial Drilling', label: 'Radial Drilling' },
//         { value: 'Gun Drilling', label: 'Gun Drilling' }
//     ];
//     operationSelect.setChoices(operationChoices, 'value', 'label', true);

//     const fmSideSelect = new Choices('#fm_side', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select FM Side',
//     });

//     const htRequiredSelect = new Choices('#ht_required', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select HT Required',
//     });

//     const coatingTypeSelect = new Choices('#coating_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Coating Type',
//     });

//     const holeTypeSelect = new Choices('#hole_type', {
//         searchEnabled: true,
//         searchChoices: true,
//         itemSelectText: '',
//         placeholder: true,
//         placeholderValue: 'Select Hole Types',
//         removeItemButton: true
//     });

//     if (coatingTypeSelect.getValue(true) === '') {
//         const coatingOptions = Object.keys(coatingCosts).map(coating => ({
//             value: coating,
//             label: coating,
//         }));
//         coatingTypeSelect.setChoices(coatingOptions, 'value', 'label', true);
//     }

//     ['blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'].forEach(name => {
//         document.querySelector(`input[name="${name}"]`).setAttribute('readonly', true);
//     });

//     document.getElementById('excelUpload').addEventListener('change', function(e) {
//         console.log('Excel file uploaded');
//         const file = e.target.files[0];
//         if (file) {
//             uploadedFileName = file.name;
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 const data = new Uint8Array(e.target.result);
//                 const workbook = XLSX.read(data, { type: 'array' });
//                 const sheetName = workbook.SheetNames[0];
//                 const worksheet = workbook.Sheets[sheetName];
//                 const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

//                 if (jsonData.length > 0) {
//                     excelData.headers = jsonData[0];
//                     excelData.rows = jsonData.slice(1).filter(row => row.some(cell => cell !== undefined && cell !== ''));
//                 } else {
//                     excelData.headers = [];
//                     excelData.rows = [];
//                 }
//             };
//             reader.readAsArrayBuffer(file);
//         }
//     });

//     // Initially hide the clear button
//     const clearButton = document.getElementById('clearButton');
//     if (clearButton) {
//         clearButton.classList.add('hidden');
//         console.log('Clear button initially hidden');
//     } else {
//         console.error('Clear button not found');
//     }

//     document.getElementById('saveButton').addEventListener('click', function() {
//         console.log('Save button clicked');
//         calculateFields();
//         saveEstimation();
//         alert('Estimation saved!');
//     });

//     document.getElementById('downloadButton').addEventListener('click', function() {
//         console.log('Download button clicked');
//         if (savedEstimations.length === 0 && excelData.rows.length === 0) {
//             alert('No estimations to download!');
//             return;
//         }
//         downloadExcel();
//     });

//     document.getElementById('clearButton').addEventListener('click', function() {
//         console.log('Clear button clicked');
//         clearForm();
//         alert('Form cleared!');
//     });

//     updateOperationBoxes();

//     const operationFields = [
//         'fm', 'fm_side', 'fm_side_cost', 'fm_l',
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face',
//         '4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost',
//         'sg', 'sgl', 'ht_required', 'ht',
//         'coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue',
//         'vmc', 'wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp', 'cg', 'turning',
//         'cnc_turning', 'jg', 'sparking', 'engraving', 'radial_drilling', 'gun_drilling'
//     ];
//     operationFields.forEach(name => {
//         const selector = name === 'fm_side' || name === 'ht_required' || name === 'coating_type' ?
//             `label:has(#${name})` : `label:has(input[name="${name}"])`;
//         document.querySelector(selector).classList.add('hidden');
//     });
// });

// document.querySelector('#type').addEventListener('change', function() {
//     console.log('Type changed:', this.value);
//     const type = this.value;
//     const diaField = document.querySelector('label[for="dia"]');
//     const lengthField = document.querySelector('label[for="length"]');
//     const widthField = document.querySelector('label[for="width"]');
//     const thicknessField = document.querySelector('label[for="thickness"]');
//     const rmwstrField = document.querySelector('label[for="rmw_str"]');

//     diaField.classList.add('hidden');
//     lengthField.classList.add('hidden');
//     widthField.classList.add('hidden');
//     thicknessField.classList.add('hidden');
//     rmwstrField.classList.add('hidden');

//     if (type === 'Cyl') {
//         diaField.classList.remove('hidden');
//         lengthField.classList.remove('hidden');
//     } else if (type === 'Pri') {
//         lengthField.classList.remove('hidden');
//         widthField.classList.remove('hidden');
//         thicknessField.classList.remove('hidden');
//     } else if (type === 'Str') {
//         rmwstrField.classList.remove('hidden');
//     }
//     calculateFields();
// });

// document.querySelector('#operation').addEventListener('change', function() {
//     console.log('Operation changed:', Array.from(this.selectedOptions).map(option => option.value));
//     const operations = Array.from(this.selectedOptions).map(option => option.value).filter(op => op !== '');
//     updateOperationBoxes();
//     updateOperationFields(operations);
//     calculateFields();
// });

// document.querySelector('#hole_type').addEventListener('change', function() {
//     console.log('Hole type changed:', Array.from(this.selectedOptions).map(option => option.value));
//     updateHoleTypeFields();
//     calculateFields();
// });

// function updateOperationBoxes() {
//     const operationSelect = document.querySelector('#operation');
//     const selectedOperations = Array.from(operationSelect.selectedOptions)
//         .map(option => option.value)
//         .filter(op => op !== '');
//     const container = document.querySelector('#operation-box-container');
//     container.innerHTML = '';

//     selectedOperations.forEach(operation => {
//         const box = document.createElement('div');
//         box.className = 'operation-box';
//         box.textContent = operation;
//         container.appendChild(box);
//     });
// }

// function updateOperationFields(operations) {
//     const fmField = document.querySelector('label:has(input[name="fm"])');
//     const fmSideQField = document.querySelector('label:has(#fm_side)');
//     const fmSideField = document.querySelector('label:has(input[name="fm_side_cost"])');
//     const fmLField = document.querySelector('label:has(input[name="fm_l"])');
//     const engravingField = document.querySelector('label:has(input[name="engraving"])');
//     const radialDrillingField = document.querySelector('label:has(input[name="radial_drilling"])');
//     const gunDrillingField = document.querySelector('label:has(input[name="gun_drilling"])');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
//     const grindingFields = ['sg', 'sgl'];
//     const heatTreatmentFields = ['ht_required', 'ht'];
//     const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
//     const vmcFields = ['vmc'];
//     const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
//     const cgFields = ['cg'];
//     const turningFields = ['turning'];
//     const cncTurningFields = ['cnc_turning'];
//     const jgFields = ['jg'];
//     const sparkingFields = ['sparking'];
//     const radialDrillingFields = ['radial_drilling'];
//     const gunDrillingFields = ['gun_drilling'];
//     const holeTypeField = document.querySelector('label[for="hole_type"]');

//     fmField.classList.add('hidden');
//     fmSideQField.classList.add('hidden');
//     fmSideField.classList.add('hidden');
//     fmLField.classList.add('hidden');
//     engravingField.classList.add('hidden');
//     radialDrillingField.classList.add('hidden');
//     gunDrillingField.classList.add('hidden');
//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     heatTreatmentFields.forEach(name => {
//         const field = name === 'ht_required' ?
//             document.querySelector(`label:has(#${name})`) :
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     coatingFields.forEach(name => {
//         const field = name === 'coating_type' ?
//             document.querySelector(`label:has(#${name})`) :
//             document.querySelector(`label:has(input[name="${name}"])`);
//         field.classList.add('hidden');
//     });
//     vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     radialDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     gunDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     holeTypeField.classList.add('hidden');

//     operations.forEach(operation => {
//         if (operation === 'Milling') {
//             fmField.classList.remove('hidden');
//             fmSideQField.classList.remove('hidden');
//             fmSideField.classList.remove('hidden');
//             fmLField.classList.remove('hidden');
//         }
//         if (operation === 'Drilling') {
//             holeTypeField.classList.remove('hidden');
//         }
//         if (operation === 'Grinding') {
//             grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Heat Treatment') {
//             heatTreatmentFields.forEach(name => {
//                 const field = name === 'ht_required' ?
//                     document.querySelector(`label:has(#${name})`) :
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//         }
//         if (operation === 'Coating') {
//             coatingFields.forEach(name => {
//                 const field = name === 'coating_type' ?
//                     document.querySelector(`label:has(#${name})`) :
//                     document.querySelector(`label:has(input[name="${name}"])`);
//                 field.classList.remove('hidden');
//             });
//             updateCoatingFields();
//         }
//         if (operation === 'VMC') {
//             vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Wire Cut') {
//             wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CG') {
//             cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Turning') {
//             turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'CNC Turning') {
//             cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'JG') {
//             jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Sparking') {
//             sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Engraving') {
//             engravingField.classList.remove('hidden');
//         }
//         if (operation === 'Radial Drilling') {
//             radialDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//         if (operation === 'Gun Drilling') {
//             gunDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//         }
//     });

//     if (!operations.includes('Drilling')) {
//         const holeTypeSelect = Choices.getInstance('#hole_type');
//         holeTypeSelect.removeActiveItems();
//     }
//     updateHoleTypeFields();
// }

// function updateHoleTypeFields() {
//     const holeTypes = Array.from(document.querySelector('#hole_type').selectedOptions)
//         .map(option => option.value)
//         .filter(type => type !== '');
//     const holeFields = [
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face'
//     ];
//     const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];

//     holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
//     h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));

//     if (Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).includes('Drilling')) {
//         holeTypes.forEach(holeType => {
//             if (holeType === 'Free Hole') {
//                 ['hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'Tap Hole') {
//                 ['hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//                  'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//                  'hole_m30', 'hole_m36', 'tap_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'C Bore') {
//                 ['c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'BSP Tap') {
//                 ['bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'GD Hole') {
//                 ['gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//                  'gd_cost_dro_radial_drilling'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'Spot Face') {
//                 ['spot_face'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//             if (holeType === 'H7 Hole') {
//                 ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'].forEach(name =>
//                     document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
//             }
//         });
//     }
// }

// document.querySelector('#coating_type').addEventListener('change', function() {
//     console.log('Coating type changed:', this.value);
//     updateCoatingFields();
//     calculateFields();
// });

// function updateCoatingFields() {
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value);
//     const coatingType = document.querySelector('#coating_type').value;
//     const blackeningField = document.querySelector('label:has(input[name="blackening"])');
//     const enpField = document.querySelector('label:has(input[name="enp"])');
//     const flashChromeField = document.querySelector('label:has(input[name="flash_chrome"])');
//     const pcField = document.querySelector('label:has(input[name="pc"])');
//     const zincBlueField = document.querySelector('label:has(input[name="zinc_blue"])');

//     blackeningField.classList.add('hidden');
//     enpField.classList.add('hidden');
//     flashChromeField.classList.add('hidden');
//     pcField.classList.add('hidden');
//     zincBlueField.classList.add('hidden');

//     if (operations.includes('Coating')) {
//         if (coatingType === 'Blackening') blackeningField.classList.remove('hidden');
//         if (coatingType === 'ENP') enpField.classList.remove('hidden');
//         if (coatingType === 'Flash Chrome') flashChromeField.classList.remove('hidden');
//         if (coatingType === 'PC') pcField.classList.remove('hidden');
//         if (coatingType === 'Zinc Blue') zincBlueField.classList.remove('hidden');
//     }
// }

// const inputs = document.querySelectorAll(
//     'input[name="dia"], input[name="length"], input[name="width"], input[name="thickness"], input[name="rmw_str"], ' +
//     '#type, #material, #operation, #fm_side, #hole_type, ' +
//     'input[name="hole_4_8"], input[name="hole_9_13"], input[name="hole_15_22"], ' +
//     'input[name="hole_m4"], input[name="hole_m5"], input[name="hole_m6"], input[name="hole_m8"], ' +
//     'input[name="hole_m10"], input[name="hole_m12"], input[name="hole_m14"], input[name="hole_m16"], ' +
//     'input[name="hole_m18"], input[name="hole_m20"], input[name="hole_m22"], input[name="hole_m24"], ' +
//     'input[name="hole_m25"], input[name="hole_m26"], input[name="hole_m30"], input[name="hole_m36"], ' +
//     'input[name="c_bore_m3_m5"], input[name="c_bore_m6_m10"], input[name="c_bore_m12"], ' +
//     'input[name="c_bore_m14"], input[name="c_bore_m16"], ' +
//     'input[name="bsp_tap_1_8_1_4"], input[name="bsp_tap_1_2_3_8"], input[name="bsp_tap_1_inch"], ' +
//     'input[name="bsp_tap_1_5_2_inch"], input[name="gd_total_hole_length"], ' +
//     'input[name="gd_total_hole_length_dro_radial_drilling"], input[name="spot_face"], ' +
//     'input[name="4_5_h7"], input[name="6_8_h7"], input[name="10_14_h7"], ' +
//     'input[name="15_18_h7"], input[name="20_25_h7"], input[name="25_30_h7"], ' +
//     'input[name="sg"], input[name="sgl"], #ht_required, input[name="ht"], ' +
//     'input[name="fwcam"], #coating_type, input[name="blackening"], ' +
//     'input[name="enp"], input[name="flash_chrome"], input[name="pc"], input[name="zinc_blue"], ' +
//     'input[name="vmc"], input[name="turning"], input[name="cg"], input[name="wire_cut_sp"], ' +
//     'input[name="cnc_turning"], input[name="jg"], input[name="sparking"], input[name="fm"], ' +
//     'input[name="engraving"], input[name="radial_drilling"], input[name="gun_drilling"], ' +
//     'input[name="miscellaneous"], input[name="profit_percent"]'
// );
// inputs.forEach(input => input.addEventListener('change', () => {
//     console.log(`Input changed: ${input.name || input.id}`);
//     calculateFields();
// }));

// function calculateFields() {
//     const type = document.querySelector('#type').value;
//     const material = document.querySelector('#material').value;
//     const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).filter(op => op !== '');
//     const fmSide = document.querySelector('#fm_side').value === "True";
//     const htRequired = document.querySelector('#ht_required').value === "True";
//     const coatingType = document.querySelector('#coating_type').value;
//     const dia = parseFloat(document.querySelector('input[name="dia"]').value) || 0;
//     const length = parseFloat(document.querySelector('input[name="length"]').value) || 0;
//     const width = parseFloat(document.querySelector('input[name="width"]').value) || 0;
//     const thickness = parseFloat(document.querySelector('input[name="thickness"]').value) || 0;
//     const rmwStr = parseFloat(document.querySelector('input[name="rmw_str"]').value) || 0;
//     const fwcam = parseFloat(document.querySelector('input[name="fwcam"]').value) || 0;
//     const profitPercent = parseFloat(document.querySelector('input[name="profit_percent"]').value) || 0;
//     const miscellaneous = parseFloat(document.querySelector('input[name="miscellaneous"]').value) || 0;
//     const density = materials[material]?.Density_gm_cc || 0;
//     const costPerKg = materials[material]?.Cost_per_KG || 0;
//     const fmPerSqmm = materials[material]?.FM_per_sqmm || 0;
//     const fmAfterHtPerSqmm = materials[material]?.FM_AFTER_HT_per_sqmm || 0;
//     const htKg = materials[material]?.HT_KG || 0;
//     let rmwCalc = 0;
//     let rmw = 0;
//     let rmc = 0;
//     let fm = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm"]').value) || 0) : 0;
//     let fmSideCost = 0;
//     let fmL = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm_l"]').value) || 0) : 0;
//     let freeHoleCost = 0;
//     let tapHoleCost = 0;
//     let cBoreCost = 0;
//     let bspTapCost = 0;
//     let gdCostGdMachine = 0;
//     let gdCostDroRadialDrilling = 0;
//     let h7HoleCost = 0;
//     let spotFaceCost = 0;
//     let sg = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sg"]').value) || 0) : 0;
//     let sgl = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sgl"]').value) || 0) : 0;
//     let ht = 0;
//     let blackeningCost = 0;
//     let enpCost = 0;
//     let flashChromeCost = 0;
//     let pcCost = 0;
//     let zincBlueCost = 0;
//     let vmc = operations.includes("VMC") ? (parseFloat(document.querySelector('input[name="vmc"]').value) || 0) : 0;
//     let turning = operations.includes("Turning") ? (parseFloat(document.querySelector('input[name="turning"]').value) || 0) : 0;
//     let cg = operations.includes("CG") ? (parseFloat(document.querySelector('input[name="cg"]').value) || 0) : 0;
//     let wireCutSp = operations.includes("Wire Cut") ? (parseFloat(document.querySelector('input[name="wire_cut_sp"]').value) || 0) : 0;
//     let cncTurning = operations.includes("CNC Turning") ? (parseFloat(document.querySelector('input[name="cnc_turning"]').value) || 0) : 0;
//     let jg = operations.includes("JG") ? (parseFloat(document.querySelector('input[name="jg"]').value) || 0) : 0;
//     let sparking = operations.includes("Sparking") ? (parseFloat(document.querySelector('input[name="sparking"]').value) || 0) : 0;
//     let engraving = operations.includes("Engraving") ? (parseFloat(document.querySelector('input[name="engraving"]').value) || 0) : 0;
//     let radialDrilling = 0;
//     let gunDrilling = 0;

//     if (type === "Pri" && length > 0 && width > 0 && thickness > 0) {
//         rmwCalc = ((length * width * thickness / 1000) * density) / 1000;
//     } else if (type === "Cyl" && dia > 0 && length > 0) {
//         rmwCalc = ((3.14159 * (dia * dia) * length / 4 / 1000) * density) / 1000;
//     }

//     if (type === "Str" && rmwStr > 0) {
//         rmw = rmwStr;
//     } else if (rmwCalc > 0) {
//         rmw = rmwCalc;
//     }

//     if (rmw > 0 && costPerKg > 0) {
//         rmc = rmw * costPerKg;
//     }

//     if (operations.includes("Milling") && type === "Pri" && length >= 250 && width >= 250) {
//         const fmRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fm = length * width * fmRate;
//     }

//     if (operations.includes("Milling") && type === "Pri" && fmSide && length > 0 && width > 0 && thickness > 0) {
//         const fmSideRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
//         fmSideCost = 2 * (length + width) * thickness * fmSideRate;
//     }

//     if (operations.includes("Drilling")) {
//         const holeTypes = Array.from(document.querySelector('#hole_type').selectedOptions)
//             .map(option => option.value)
//             .filter(type => type !== '');

//         if (holeTypes.includes('Free Hole')) {
//             const hole_4_8 = parseFloat(document.querySelector('input[name="hole_4_8"]').value) || 0;
//             const hole_9_13 = parseFloat(document.querySelector('input[name="hole_9_13"]').value) || 0;
//             const hole_15_22 = parseFloat(document.querySelector('input[name="hole_15_22"]').value) || 0;
//             freeHoleCost = (hole_4_8 * drillingCosts["Hole_4_8"].Cost) +
//                            (hole_9_13 * drillingCosts["Hole_9_13"].Cost) +
//                            (hole_15_22 * drillingCosts["Hole_15_22"].Cost);
//         }

//         if (holeTypes.includes('Tap Hole')) {
//             const hole_m4 = parseFloat(document.querySelector('input[name="hole_m4"]').value) || 0;
//             const hole_m5 = parseFloat(document.querySelector('input[name="hole_m5"]').value) || 0;
//             const hole_m6 = parseFloat(document.querySelector('input[name="hole_m6"]').value) || 0;
//             const hole_m8 = parseFloat(document.querySelector('input[name="hole_m8"]').value) || 0;
//             const hole_m10 = parseFloat(document.querySelector('input[name="hole_m10"]').value) || 0;
//             const hole_m12 = parseFloat(document.querySelector('input[name="hole_m12"]').value) || 0;
//             const hole_m14 = parseFloat(document.querySelector('input[name="hole_m14"]').value) || 0;
//             const hole_m16 = parseFloat(document.querySelector('input[name="hole_m16"]').value) || 0;
//             const hole_m18 = parseFloat(document.querySelector('input[name="hole_m18"]').value) || 0;
//             const hole_m20 = parseFloat(document.querySelector('input[name="hole_m20"]').value) || 0;
//             const hole_m22 = parseFloat(document.querySelector('input[name="hole_m22"]').value) || 0;
//             const hole_m24 = parseFloat(document.querySelector('input[name="hole_m24"]').value) || 0;
//             const hole_m25 = parseFloat(document.querySelector('input[name="hole_m25"]').value) || 0;
//             const hole_m26 = parseFloat(document.querySelector('input[name="hole_m26"]').value) || 0;
//             const hole_m30 = parseFloat(document.querySelector('input[name="hole_m30"]').value) || 0;
//             const hole_m36 = parseFloat(document.querySelector('input[name="hole_m36"]').value) || 0;
//             tapHoleCost = (hole_m4 * drillingCosts["Hole_M4"].Cost) +
//                           (hole_m5 * drillingCosts["Hole_M5"].Cost) +
//                           (hole_m6 * drillingCosts["Hole_M6"].Cost) +
//                           (hole_m8 * drillingCosts["Hole_M8"].Cost) +
//                           (hole_m10 * drillingCosts["Hole_M10"].Cost) +
//                           (hole_m12 * drillingCosts["Hole_M12"].Cost) +
//                           (hole_m14 * drillingCosts["Hole_M14"].Cost) +
//                           (hole_m16 * drillingCosts["Hole_M16"].Cost) +
//                           (hole_m18 * drillingCosts["Hole_M18"].Cost) +
//                           (hole_m20 * drillingCosts["Hole_M20"].Cost) +
//                           (hole_m22 * drillingCosts["Hole_M22"].Cost) +
//                           (hole_m24 * drillingCosts["Hole_M24"].Cost) +
//                           (hole_m25 * drillingCosts["Hole_M25"].Cost) +
//                           (hole_m26 * drillingCosts["Hole_M26"].Cost) +
//                           (hole_m30 * drillingCosts["Hole_M30"].Cost) +
//                           (hole_m36 * drillingCosts["Hole_M36"].Cost);
//         }

//         if (holeTypes.includes('C Bore')) {
//             const c_bore_m3_m5 = parseFloat(document.querySelector('input[name="c_bore_m3_m5"]').value) || 0;
//             const c_bore_m6_m10 = parseFloat(document.querySelector('input[name="c_bore_m6_m10"]').value) || 0;
//             const c_bore_m12 = parseFloat(document.querySelector('input[name="c_bore_m12"]').value) || 0;
//             const c_bore_m14 = parseFloat(document.querySelector('input[name="c_bore_m14"]').value) || 0;
//             const c_bore_m16 = parseFloat(document.querySelector('input[name="c_bore_m16"]').value) || 0;
//             cBoreCost = (c_bore_m3_m5 * drillingCosts["C_bore_M3_M5"].Cost) +
//                         (c_bore_m6_m10 * drillingCosts["C_bore_M6_M10"].Cost) +
//                         (c_bore_m12 * drillingCosts["C_bore_M12"].Cost) +
//                         (c_bore_m14 * drillingCosts["C_bore_M14"].Cost) +
//                         (c_bore_m16 * drillingCosts["C_bore_M16"].Cost);
//         }

//         if (holeTypes.includes('BSP Tap')) {
//             const bsp_tap_1_8_1_4 = parseFloat(document.querySelector('input[name="bsp_tap_1_8_1_4"]').value) || 0;
//             const bsp_tap_1_2_3_8 = parseFloat(document.querySelector('input[name="bsp_tap_1_2_3_8"]').value) || 0;
//             const bsp_tap_1_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_inch"]').value) || 0;
//             const bsp_tap_1_5_2_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_5_2_inch"]').value) || 0;
//             bspTapCost = (bsp_tap_1_8_1_4 * drillingCosts["BSP_TAP_1/8_1/4"].Cost) +
//                          (bsp_tap_1_2_3_8 * drillingCosts["BSP_TAP_1/2_3/8"].Cost) +
//                          (bsp_tap_1_inch * drillingCosts["BSP_TAP_1_inch"].Cost) +
//                          (bsp_tap_1_5_2_inch * drillingCosts["BSP_TAP_1.5_2_inch"].Cost);
//         }

//         if (holeTypes.includes('GD Hole')) {
//             const gd_total_hole_length = parseFloat(document.querySelector('input[name="gd_total_hole_length"]').value) || 0;
//             gdCostGdMachine = gd_total_hole_length * drillingCosts["GD_TOTAL_HOLE_LENGTH"].Cost;
//             const gd_total_hole_length_dro_radial_drilling = parseFloat(document.querySelector('input[name="gd_total_hole_length_dro_radial_drilling"]').value) || 0;
//             gdCostDroRadialDrilling = gd_total_hole_length_dro_radial_drilling * drillingCosts["GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING"].Cost;
//         }

//         if (holeTypes.includes('Spot Face')) {
//             const spot_face = parseFloat(document.querySelector('input[name="spot_face"]').value) || 0;
//             spotFaceCost = spot_face * drillingCosts["Spot_face"].Cost;
//         }

//         if (holeTypes.includes('H7 Hole')) {
//             const h7_4_5 = parseFloat(document.querySelector('input[name="4_5_h7"]').value) || 0;
//             const h7_6_8 = parseFloat(document.querySelector('input[name="6_8_h7"]').value) || 0;
//             const h7_10_14 = parseFloat(document.querySelector('input[name="10_14_h7"]').value) || 0;
//             const h7_15_18 = parseFloat(document.querySelector('input[name="15_18_h7"]').value) || 0;
//             const h7_20_25 = parseFloat(document.querySelector('input[name="20_25_h7"]').value) || 0;
//             const h7_25_30 = parseFloat(document.querySelector('input[name="25_30_h7"]').value) || 0;
//             h7HoleCost = (h7_4_5 * drillingCosts["4_5_H7"].Cost) +
//                          (h7_6_8 * drillingCosts["6_8_H7"].Cost) +
//                          (h7_10_14 * drillingCosts["10_14_H7"].Cost) +
//                          (h7_15_18 * drillingCosts["15_18_H7"].Cost) +
//                          (h7_20_25 * drillingCosts["20_25_H7"].Cost) +
//                          (h7_25_30 * drillingCosts["25_30_H7"].Cost);
//         }
//     }

//     if (operations.includes("Grinding") && type === "Pri" && length >= 250 && width >= 250) {
//         sg = length * width * fmPerSqmm;
//     }

//     if (operations.includes("Heat Treatment") && htRequired) {
//         ht = rmw * htKg;
//     }

//     if (operations.includes("Coating") && length > 0 && width > 0 && coatingType) {
//         const areaCm2 = (length / 10) * (width / 10);
//         blackeningCost = coatingType === "Blackening" ? fwcam * coatingCosts["Blackening"].Cost : 0;
//         enpCost = coatingType === "ENP" ? fwcam * coatingCosts["ENP"].Cost : 0;
//         flashChromeCost = coatingType === "Flash Chrome" ? areaCm2 * coatingCosts["Flash Chrome"].Cost : 0;
//         pcCost = coatingType === "PC" ? fwcam * coatingCosts["PC"].Cost : 0;
//         zincBlueCost = coatingType === "Zinc Blue" ? fwcam * coatingCosts["Zinc Blue"].Cost : 0;
//     }

//     if (operations.includes("Radial Drilling")) {
//         radialDrilling = parseFloat(document.querySelector('input[name="radial_drilling"]').value) || 0;
//         radialDrilling = radialDrilling * drillingCosts["Radial Drilling"].Cost;
//     }

//     if (operations.includes("Gun Drilling")) {
//         gunDrilling = parseFloat(document.querySelector('input[name="gun_drilling"]').value) || 0;
//         gunDrilling = gunDrilling * drillingCosts["Gun Drilling"].Cost;
//     }

//     const coatingSum = blackeningCost + enpCost + flashChromeCost + pcCost + zincBlueCost;
//     const total = (
//         engraving + sgl + h7HoleCost + ht + gdCostDroRadialDrilling +
//         gdCostGdMachine + bspTapCost + cBoreCost + tapHoleCost + freeHoleCost +
//         spotFaceCost + fmL + fmSideCost + fm + rmc + vmc + turning + cg + wireCutSp +
//         cncTurning + jg + sparking + coatingSum + radialDrilling + gunDrilling + miscellaneous + sg
//     );

//     const withProfit = total * (1 + (profitPercent / 100));

//     const rmwCalcField = document.querySelector('input[name="rmw_calc"]');
//     const rmwField = document.querySelector('input[name="rmw"]');
//     const rmcField = document.querySelector('input[name="rmc"]');
//     const fmField = document.querySelector('input[name="fm"]');
//     const fmSideCostField = document.querySelector('input[name="fm_side_cost"]');
//     const fmLField = document.querySelector('input[name="fm_l"]');
//     const freeHoleCostField = document.querySelector('input[name="free_hole_cost"]');
//     const tapHoleCostField = document.querySelector('input[name="tap_hole_cost"]');
//     const cBoreCostField = document.querySelector('input[name="c_bore_cost"]');
//     const bspTapCostField = document.querySelector('input[name="bsp_tap_cost"]');
//     const gdCostGdMachineField = document.querySelector('input[name="gd_cost_gd_machine"]');
//     const gdCostDroRadialDrillingField = document.querySelector('input[name="gd_cost_dro_radial_drilling"]');
//     const h7HoleCostField = document.querySelector('input[name="h7_hole_cost"]');
//     const sgField = document.querySelector('input[name="sg"]');
//     const sglField = document.querySelector('input[name="sgl"]');
//     const htField = document.querySelector('input[name="ht"]');
//     const blackeningField = document.querySelector('input[name="blackening"]');
//     const enpField = document.querySelector('input[name="enp"]');
//     const flashChromeField = document.querySelector('input[name="flash_chrome"]');
//     const pcField = document.querySelector('input[name="pc"]');
//     const zincBlueField = document.querySelector('input[name="zinc_blue"]');
//     const vmcField = document.querySelector('input[name="vmc"]');
//     const turningField = document.querySelector('input[name="turning"]');
//     const cgField = document.querySelector('input[name="cg"]');
//     const wireCutSpField = document.querySelector('input[name="wire_cut_sp"]');
//     const cncTurningField = document.querySelector('input[name="cnc_turning"]');
//     const jgField = document.querySelector('input[name="jg"]');
//     const sparkingField = document.querySelector('input[name="sparking"]');
//     const engravingField = document.querySelector('input[name="engraving"]');
//     const radialDrillingField = document.querySelector('input[name="radial_drilling"]');
//     const gunDrillingField = document.querySelector('input[name="gun_drilling"]');
//     const totalField = document.querySelector('input[name="total"]');
//     const withProfitField = document.querySelector('input[name="with_profit"]');

//     rmwCalcField.value = rmwCalc > 0 ? rmwCalc.toFixed(2) : '';
//     rmwField.value = rmw > 0 ? rmw.toFixed(2) : '';
//     rmcField.value = rmc > 0 ? rmc.toFixed(2) : '';
//     fmField.value = fm > 0 ? fm.toFixed(2) : (operations.includes("Milling") ? fmField.value : '');
//     fmSideCostField.value = fmSideCost > 0 ? fmSideCost.toFixed(2) : '';
//     fmLField.value = fmL > 0 ? fmL.toFixed(2) : (operations.includes("Milling") ? fmLField.value : '');
//     freeHoleCostField.value = freeHoleCost > 0 ? freeHoleCost.toFixed(2) : '';
//     tapHoleCostField.value = tapHoleCost > 0 ? tapHoleCost.toFixed(2) : '';
//     cBoreCostField.value = cBoreCost > 0 ? cBoreCost.toFixed(2) : '';
//     bspTapCostField.value = bspTapCost > 0 ? bspTapCost.toFixed(2) : '';
//     gdCostGdMachineField.value = gdCostGdMachine > 0 ? gdCostGdMachine.toFixed(2) : '';
//     gdCostDroRadialDrillingField.value = gdCostDroRadialDrilling > 0 ? gdCostDroRadialDrilling.toFixed(2) : '';
//     h7HoleCostField.value = h7HoleCost > 0 ? h7HoleCost.toFixed(2) : '';
//     sgField.value = sg > 0 ? sg.toFixed(2) : (operations.includes("Grinding") ? sgField.value : '');
//     sglField.value = sgl > 0 ? sgl.toFixed(2) : (operations.includes("Grinding") ? sglField.value : '');
//     htField.value = ht > 0 ? ht.toFixed(2) : '';
//     blackeningField.value = blackeningCost > 0 ? blackeningCost.toFixed(2) : '';
//     enpField.value = enpCost > 0 ? enpCost.toFixed(2) : '';
//     flashChromeField.value = flashChromeCost > 0 ? flashChromeCost.toFixed(2) : '';
//     pcField.value = pcCost > 0 ? pcCost.toFixed(2) : '';
//     zincBlueField.value = zincBlueCost > 0 ? zincBlueCost.toFixed(2) : '';
//     vmcField.value = vmc > 0 ? vmc.toFixed(2) : (operations.includes("VMC") ? vmcField.value : '');
//     turningField.value = turning > 0 ? turning.toFixed(2) : (operations.includes("Turning") ? turningField.value : '');
//     cgField.value = cg > 0 ? cg.toFixed(2) : (operations.includes("CG") ? cgField.value : '');
//     wireCutSpField.value = wireCutSp > 0 ? wireCutSp.toFixed(2) : (operations.includes("Wire Cut") ? wireCutSpField.value : '');
//     cncTurningField.value = cncTurning > 0 ? cncTurning.toFixed(2) : (operations.includes("CNC Turning") ? cncTurningField.value : '');
//     jgField.value = jg > 0 ? jg.toFixed(2) : (operations.includes("JG") ? jgField.value : '');
//     sparkingField.value = sparking > 0 ? sparking.toFixed(2) : (operations.includes("Sparking") ? sparkingField.value : '');
//     engravingField.value = engraving > 0 ? engraving.toFixed(2) : (operations.includes("Engraving") ? engravingField.value : '');
//     radialDrillingField.value = radialDrilling > 0 ? radialDrilling.toFixed(2) : (operations.includes("Radial Drilling") ? radialDrillingField.value : '');
//     gunDrillingField.value = gunDrilling > 0 ? gunDrilling.toFixed(2) : (operations.includes("Gun Drilling") ? gunDrillingField.value : '');
//     totalField.value = total > 0 ? total.toFixed(2) : '';
//     withProfitField.value = withProfit > 0 ? withProfit.toFixed(2) : '';
// }

// function saveEstimation() {
//     const form = document.getElementById('costForm');
//     const formData = new FormData(form);
//     const estimationData = {};

//     formData.forEach((value, key) => {
//         if (key === 'operation') {
//             if (!estimationData[key]) estimationData[key] = [];
//             estimationData[key].push(value);
//         } else {
//             estimationData[key] = value;
//         }
//     });

//     if (estimationData['operation']) {
//         estimationData['operation'] = estimationData['operation'].join(', ');
//     }

//     savedEstimations.push(estimationData);

//     // Show the clear button after saving an estimation
//     document.getElementById('clearButton').classList.remove('hidden');
// }

// function downloadExcel() {
//     const allHeaders = Array.from(document.getElementById('costForm').elements)
//         .filter(el => el.name && el.name !== 'operation')
//         .map(el => el.name)
//         .concat(['operation'])
//         .filter((v, i, a) => a.indexOf(v) === i);

//     const headers = excelData.headers.length > 0 ? excelData.headers : allHeaders;

//     const estimationRows = savedEstimations.map(estimation => 
//         headers.map(header => estimation[header] || '')
//     );

//     const allRows = [...excelData.rows, ...estimationRows].filter(row => row.some(cell => cell !== undefined && cell !== ''));

//     const wsData = [headers, ...allRows];

//     const ws = XLSX.utils.aoa_to_sheet(wsData);

//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Cost Estimation');

//     XLSX.writeFile(wb, uploadedFileName);
// }

// function clearForm() {
//     const form = document.getElementById('costForm');
//     form.reset(); // Reset all native form inputs

//     // Reset Choices.js select elements
//     const materialSelect = Choices.getInstance('#material');
//     const typeSelect = Choices.getInstance('#type');
//     const operationSelect = Choices.getInstance('#operation');
//     const fmSideSelect = Choices.getInstance('#fm_side');
//     const htRequiredSelect = Choices.getInstance('#ht_required');
//     const coatingTypeSelect = Choices.getInstance('#coating_type');
//     const holeTypeSelect = Choices.getInstance('#hole_type');

//     materialSelect.removeActiveItems();
//     typeSelect.removeActiveItems();
//     operationSelect.removeActiveItems();
//     fmSideSelect.removeActiveItems();
//     htRequiredSelect.removeActiveItems();
//     coatingTypeSelect.removeActiveItems();
//     holeTypeSelect.removeActiveItems();

//     // Clear operation boxes
//     const operationContainer = document.querySelector('#operation-box-container');
//     operationContainer.innerHTML = '';

//     // Hide all conditional fields
//     const operationFields = [
//         'fm', 'fm_side', 'fm_side_cost', 'fm_l',
//         'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
//         'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
//         'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
//         'hole_m30', 'hole_m36', 'tap_hole_cost',
//         'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
//         'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
//         'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
//         'gd_cost_dro_radial_drilling', 'spot_face',
//         '4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost',
//         'sg', 'sgl', 'ht_required', 'ht',
//         'coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue',
//         'vmc', 'wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp', 'cg', 'turning',
//         'cnc_turning', 'jg', 'sparking', 'engraving', 'radial_drilling', 'gun_drilling'
//     ];
//     operationFields.forEach(name => {
//         const selector = name === 'fm_side' || name === 'ht_required' || name === 'coating_type' ?
//             `label:has(#${name})` : `label:has(input[name="${name}"])`;
//         document.querySelector(selector).classList.add('hidden');
//     });

//     // Hide type-specific fields
//     const typeFields = ['dia', 'length', 'width', 'thickness', 'rmw_str'];
//     typeFields.forEach(name => {
//         document.querySelector(`label[for="${name}"]`).classList.add('hidden');
//     });

//     // Clear Excel upload
//     const excelUpload = document.getElementById('excelUpload');
//     excelUpload.value = '';
//     excelData = { headers: [], rows: [] };
//     uploadedFileName = 'cost_estimation.xlsx';

//     // Hide the clear button after clearing the form
//     document.getElementById('clearButton').classList.add('hidden');

//     // Recalculate fields to update any calculated values
//     calculateFields();
// }

// const holeFields = [
//     'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost', 
//     'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14', 
//     'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26', 
//     'hole_m30', 'hole_m36', 'tap_hole_cost', 'c_bore_m3_m5', 'c_bore_m6_m10', 
//     'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost', 'bsp_tap_1_8_1_4', 
//     'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost', 
//     'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling', 
//     'gd_cost_dro_radial_drilling', 'spot_face'
// ];
// const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
// const fmFields = ['fm', 'fm_side', 'fm_side_cost', 'fm_l'];
// const grindingFields = ['sg', 'sgl'];
// const heatTreatmentFields = ['ht_required', 'ht'];
// const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
// const vmcFields = ['vmc'];
// const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
// const cgFields = ['cg'];
// const turningFields = ['turning'];
// const cncTurningFields = ['cnc_turning'];
// const jgFields = ['jg'];
// const sparkingFields = ['sparking'];
// const engravingFields = ['engraving'];
// const radialDrillingFields = ['radial_drilling'];
// const gunDrillingFields = ['gun_drilling'];

// holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// fmFields.forEach(name => {
//     const field = name === 'fm_side' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// heatTreatmentFields.forEach(name => {
//     const field = name === 'ht_required' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// coatingFields.forEach(name => {
//     const field = name === 'coating_type' ? 
//         document.querySelector(`label:has(#${name})`) : 
//         document.querySelector(`label:has(input[name="${name}"])`);
//     field.classList.add('hidden');
// });
// vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// engravingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// radialDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
// gunDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));











































const materials = {
    "MS": {"Density_gm_cc": 7.85, "Cost_per_KG": 80.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "C45": {"Density_gm_cc": 7.85, "Cost_per_KG": 95.0, "FM_per_sqmm": 0.005, "HT_KG": 25.0, "FM_AFTER_HT_per_sqmm": 0.007},
    "EN24": {"Density_gm_cc": 7.85, "Cost_per_KG": 125.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "EN354": {"Density_gm_cc": 7.85, "Cost_per_KG": 145.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "20MnCr5": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "EN47": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "EN31": {"Density_gm_cc": 7.85, "Cost_per_KG": 100.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "EN19": {"Density_gm_cc": 7.85, "Cost_per_KG": 75.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "SS410": {"Density_gm_cc": 7.85, "Cost_per_KG": 220.0, "FM_per_sqmm": 0.008, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "AL-7075": {"Density_gm_cc": 2.73, "Cost_per_KG": 730.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "D2": {"Density_gm_cc": 7.85, "Cost_per_KG": 350.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "OHNS": {"Density_gm_cc": 7.85, "Cost_per_KG": 120.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "DELRIN": {"Density_gm_cc": 1.42, "Cost_per_KG": 550.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "NYLON": {"Density_gm_cc": 1.14, "Cost_per_KG": 500.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "HYLEM": {"Density_gm_cc": 1.95, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "BRASS": {"Density_gm_cc": 8.5, "Cost_per_KG": 600.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "COPPER": {"Density_gm_cc": 8.93, "Cost_per_KG": 700.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "CARBIDE": {"Density_gm_cc": 15.0, "Cost_per_KG": 1600.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "CASTING": {"Density_gm_cc": 0.0, "Cost_per_KG": 300.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "WELDMENTS": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "AL-6061": {"Density_gm_cc": 2.73, "Cost_per_KG": 455.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "SS304": {"Density_gm_cc": 7.85, "Cost_per_KG": 245.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0}
};

const drillingCosts = {
    "Hole_4_8": {"Cost": 25},
    "Hole_9_13": {"Cost": 30},
    "Hole_15_22": {"Cost": 35},
    "Hole_M4": {"Cost": 20},
    "Hole_M5": {"Cost": 25},
    "Hole_M6": {"Cost": 30},
    "Hole_M8": {"Cost": 40},
    "Hole_M10": {"Cost": 50},
    "Hole_M12": {"Cost": 60},
    "Hole_M14": {"Cost": 60},
    "Hole_M16": {"Cost": 70},
    "Hole_M18": {"Cost": 70},
    "Hole_M20": {"Cost": 120},
    "Hole_M22": {"Cost": 120},
    "Hole_M24": {"Cost": 120},
    "Hole_M25": {"Cost": 200},
    "Hole_M26": {"Cost": 200},
    "Hole_M30": {"Cost": 250},
    "Hole_M36": {"Cost": 300},
    "C_bore_M3_M5": {"Cost": 30},
    "C_bore_M6_M10": {"Cost": 40},
    "C_bore_M12": {"Cost": 50},
    "C_bore_M14": {"Cost": 60},
    "C_bore_M16": {"Cost": 80},
    "BSP_TAP_1/8_1/4": {"Cost": 45},
    "BSP_TAP_1/2_3/8": {"Cost": 60},
    "BSP_TAP_1_inch": {"Cost": 120},
    "BSP_TAP_1.5_2_inch": {"Cost": 200},
    "GD_TOTAL_HOLE_LENGTH": {"Cost": 3},
    "GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING": {"Cost": 2},
    "4_5_H7": {"Cost": 80},
    "6_8_H7": {"Cost": 100},
    "10_14_H7": {"Cost": 120},
    "15_18_H7": {"Cost": 160},
    "20_25_H7": {"Cost": 220},
    "25_30_H7": {"Cost": 280},
    "Spot_face": {"Cost": 30},
    "Radial Drilling": {"Cost": 1},
    "Gun Drilling": {"Cost": 1}    
};

const coatingCosts = {
    "Blackening": {"Cost": 20},
    "ENP": {"Cost": 180},
    "Flash Chrome": {"Cost": 0.6},
    "PC": {"Cost": 20},
    "Zinc Blue": {"Cost": 30}
};

let excelData = { headers: [], rows: [] };
let uploadedFileName = 'cost_estimation.xlsx';
let savedEstimations = [];

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing form');
    const materialSelect = new Choices('#material', {
        searchEnabled: true,
        searchChoices: true,
        itemSelectText: '',
        placeholder: true,
        placeholderValue: 'Select Material',
    });

    const typeSelect = new Choices('#type', {
        searchEnabled: true,
        searchChoices: true,
        itemSelectText: '',
        placeholder: true,
        placeholderValue: 'Select Type',
    });

    const operationSelect = new Choices('#operation', {
        searchEnabled: true,
        searchChoices: true,
        itemSelectText: '',
        placeholder: true,
        placeholderValue: 'Select Operations',
        removeItemButton: true,
    });

    const operationChoices = [
        { value: 'Milling', label: 'Milling' },
        { value: 'Drilling', label: 'Drilling' },
        { value: 'Grinding', label: 'Grinding' },
        { value: 'Heat Treatment', label: 'Heat Treatment' },
        { value: 'Coating', label: 'Coating' },
        { value: 'VMC', label: 'VMC' },
        { value: 'Wire Cut', label: 'Wire Cut' },
        { value: 'CG', label: 'CG' },
        { value: 'Turning', label: 'Turning' },
        { value: 'CNC Turning', label: 'CNC Turning' },
        { value: 'JG', label: 'JG' },
        { value: 'Sparking', label: 'Sparking' },
        { value: 'Engraving', label: 'Engraving' },
        { value: 'Radial Drilling', label: 'Radial Drilling' },
        { value: 'Gun Drilling', label: 'Gun Drilling' }
    ];
    operationSelect.setChoices(operationChoices, 'value', 'label', true);

    const fmSideSelect = new Choices('#fm_side', {
        searchEnabled: true,
        searchChoices: true,
        itemSelectText: '',
        placeholder: true,
        placeholderValue: 'Select FM Side',
    });

    const htRequiredSelect = new Choices('#ht_required', {
        searchEnabled: true,
        searchChoices: true,
        itemSelectText: '',
        placeholder: true,
        placeholderValue: 'Select HT Required',
    });

    const coatingTypeSelect = new Choices('#coating_type', {
        searchEnabled: true,
        searchChoices: true,
        itemSelectText: '',
        placeholder: true,
        placeholderValue: 'Select Coating Type',
    });

    const holeTypeSelect = new Choices('#hole_type', {
        searchEnabled: true,
        searchChoices: true,
        itemSelectText: '',
        placeholder: true,
        placeholderValue: 'Select Hole Types',
        removeItemButton: true
    });

    if (coatingTypeSelect.getValue(true) === '') {
        const coatingOptions = Object.keys(coatingCosts).map(coating => ({
            value: coating,
            label: coating,
        }));
        coatingTypeSelect.setChoices(coatingOptions, 'value', 'label', true);
    }

    ['blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'].forEach(name => {
        document.querySelector(`input[name="${name}"]`).setAttribute('readonly', true);
    });

    document.getElementById('excelUpload').addEventListener('change', function(e) {
        console.log('Excel file uploaded');
        const file = e.target.files[0];
        if (file) {
            uploadedFileName = file.name;
            const reader = new FileReader();
            reader.onload = function(e) {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

                if (jsonData.length > 0) {
                    excelData.headers = jsonData[0];
                    excelData.rows = jsonData.slice(1).filter(row => row.some(cell => cell !== undefined && cell !== ''));
                } else {
                    excelData.headers = [];
                    excelData.rows = [];
                }
            };
            reader.readAsArrayBuffer(file);
        }
    });

    // Initially hide the clear button
    const clearButton = document.getElementById('clearButton');
    if (clearButton) {
        clearButton.classList.add('hidden');
        console.log('Clear button initially hidden');
    } else {
        console.error('Clear button not found');
    }

    document.getElementById('saveButton').addEventListener('click', function() {
        console.log('Save button clicked');
        calculateFields();
        saveEstimation();
        alert('Estimation saved!');
    });

    document.getElementById('downloadButton').addEventListener('click', function() {
        console.log('Download button clicked');
        if (savedEstimations.length === 0 && excelData.rows.length === 0) {
            alert('No estimations to download!');
            return;
        }
        downloadExcel();
    });

    document.getElementById('clearButton').addEventListener('click', function() {
        console.log('Clear button clicked');
        clearForm();
        alert('Form cleared!');
    });

    updateOperationBoxes();

    const operationFields = [
        'fm', 'fm_side', 'fm_side_cost', 'fm_l',
        'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
        'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
        'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
        'hole_m30', 'hole_m36', 'tap_hole_cost',
        'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
        'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
        'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
        'gd_cost_dro_radial_drilling', 'spot_face',
        '4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost',
        'sg', 'sgl', 'ht_required', 'ht',
        'coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue',
        'vmc', 'wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp', 'cg', 'turning',
        'cnc_turning', 'jg', 'sparking', 'engraving', 'radial_drilling', 'gun_drilling'
    ];
    operationFields.forEach(name => {
        const selector = name === 'fm_side' || name === 'ht_required' || name === 'coating_type' ?
            `label:has(#${name})` : `label:has(input[name="${name}"])`;
        document.querySelector(selector).classList.add('hidden');
    });
});

document.querySelector('#type').addEventListener('change', function() {
    console.log('Type changed:', this.value);
    const type = this.value;
    const diaField = document.querySelector('label[for="dia"]');
    const lengthField = document.querySelector('label[for="length"]');
    const widthField = document.querySelector('label[for="width"]');
    const thicknessField = document.querySelector('label[for="thickness"]');
    const rmwstrField = document.querySelector('label[for="rmw_str"]');

    diaField.classList.add('hidden');
    lengthField.classList.add('hidden');
    widthField.classList.add('hidden');
    thicknessField.classList.add('hidden');
    rmwstrField.classList.add('hidden');

    if (type === 'Cyl') {
        diaField.classList.remove('hidden');
        lengthField.classList.remove('hidden');
    } else if (type === 'Pri') {
        lengthField.classList.remove('hidden');
        widthField.classList.remove('hidden');
        thicknessField.classList.remove('hidden');
    } else if (type === 'Str') {
        rmwstrField.classList.remove('hidden');
    }
    calculateFields();
});

document.querySelector('#operation').addEventListener('change', function() {
    console.log('Operation changed:', Array.from(this.selectedOptions).map(option => option.value));
    const operations = Array.from(this.selectedOptions).map(option => option.value).filter(op => op !== '');
    updateOperationBoxes();
    updateOperationFields(operations);
    calculateFields();
});

document.querySelector('#hole_type').addEventListener('change', function() {
    console.log('Hole type changed:', Array.from(this.selectedOptions).map(option => option.value));
    updateHoleTypeFields();
    calculateFields();
});

function updateOperationBoxes() {
    const operationSelect = document.querySelector('#operation');
    const selectedOperations = Array.from(operationSelect.selectedOptions)
        .map(option => option.value)
        .filter(op => op !== '');
    const container = document.querySelector('#operation-box-container');
    container.innerHTML = '';

    selectedOperations.forEach(operation => {
        const box = document.createElement('div');
        box.className = 'operation-box';
        box.textContent = operation;
        container.appendChild(box);
    });
}

function updateOperationFields(operations) {
    const fmField = document.querySelector('label:has(input[name="fm"])');
    const fmSideQField = document.querySelector('label:has(#fm_side)');
    const fmSideField = document.querySelector('label:has(input[name="fm_side_cost"])');
    const fmLField = document.querySelector('label:has(input[name="fm_l"])');
    const engravingField = document.querySelector('label:has(input[name="engraving"])');
    const radialDrillingField = document.querySelector('label:has(input[name="radial_drilling"])');
    const gunDrillingField = document.querySelector('label:has(input[name="gun_drilling"])');
    const holeFields = [
        'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
        'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
        'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
        'hole_m30', 'hole_m36', 'tap_hole_cost',
        'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
        'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
        'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
        'gd_cost_dro_radial_drilling', 'spot_face'
    ];
    const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
    const grindingFields = ['sg', 'sgl'];
    const heatTreatmentFields = ['ht_required', 'ht'];
    const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
    const vmcFields = ['vmc'];
    const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
    const cgFields = ['cg'];
    const turningFields = ['turning'];
    const cncTurningFields = ['cnc_turning'];
    const jgFields = ['jg'];
    const sparkingFields = ['sparking'];
    const radialDrillingFields = ['radial_drilling'];
    const gunDrillingFields = ['gun_drilling'];
    const holeTypeField = document.querySelector('label[for="hole_type"]');

    fmField.classList.add('hidden');
    fmSideQField.classList.add('hidden');
    fmSideField.classList.add('hidden');
    fmLField.classList.add('hidden');
    engravingField.classList.add('hidden');
    radialDrillingField.classList.add('hidden');
    gunDrillingField.classList.add('hidden');
    holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
    h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
    grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
    heatTreatmentFields.forEach(name => {
        const field = name === 'ht_required' ?
            document.querySelector(`label:has(#${name})`) :
            document.querySelector(`label:has(input[name="${name}"])`);
        field.classList.add('hidden');
    });
    coatingFields.forEach(name => {
        const field = name === 'coating_type' ?
            document.querySelector(`label:has(#${name})`) :
            document.querySelector(`label:has(input[name="${name}"])`);
        field.classList.add('hidden');
    });
    vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
    wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
    cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
    turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
    cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
    jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
    sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
    radialDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
    gunDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
    holeTypeField.classList.add('hidden');

    operations.forEach(operation => {
        if (operation === 'Milling') {
            fmField.classList.remove('hidden');
            fmSideQField.classList.remove('hidden');
            fmSideField.classList.remove('hidden');
            fmLField.classList.remove('hidden');
        }
        if (operation === 'Drilling') {
            holeTypeField.classList.remove('hidden');
        }
        if (operation === 'Grinding') {
            grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
        }
        if (operation === 'Heat Treatment') {
            heatTreatmentFields.forEach(name => {
                const field = name === 'ht_required' ?
                    document.querySelector(`label:has(#${name})`) :
                    document.querySelector(`label:has(input[name="${name}"])`);
                field.classList.remove('hidden');
            });
        }
        if (operation === 'Coating') {
            coatingFields.forEach(name => {
                const field = name === 'coating_type' ?
                    document.querySelector(`label:has(#${name})`) :
                    document.querySelector(`label:has(input[name="${name}"])`);
                field.classList.remove('hidden');
            });
            updateCoatingFields();
        }
        if (operation === 'VMC') {
            vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
        }
        if (operation === 'Wire Cut') {
            wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
        }
        if (operation === 'CG') {
            cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
        }
        if (operation === 'Turning') {
            turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
        }
        if (operation === 'CNC Turning') {
            cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
        }
        if (operation === 'JG') {
            jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
        }
        if (operation === 'Sparking') {
            sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
        }
        if (operation === 'Engraving') {
            engravingField.classList.remove('hidden');
        }
        if (operation === 'Radial Drilling') {
            radialDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
        }
        if (operation === 'Gun Drilling') {
            gunDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
        }
    });

    if (!operations.includes('Drilling')) {
        const holeTypeSelect = Choices.getInstance('#hole_type');
        holeTypeSelect.removeActiveItems();
    }
    updateHoleTypeFields();
}

function updateHoleTypeFields() {
    const holeTypes = Array.from(document.querySelector('#hole_type').selectedOptions)
        .map(option => option.value)
        .filter(type => type !== '');
    const holeFields = [
        'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
        'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
        'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
        'hole_m30', 'hole_m36', 'tap_hole_cost',
        'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
        'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
        'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
        'gd_cost_dro_radial_drilling', 'spot_face'
    ];
    const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];

    holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
    h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));

    if (Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).includes('Drilling')) {
        holeTypes.forEach(holeType => {
            if (holeType === 'Free Hole') {
                ['hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost'].forEach(name =>
                    document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
            }
            if (holeType === 'Tap Hole') {
                ['hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
                 'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
                 'hole_m30', 'hole_m36', 'tap_hole_cost'].forEach(name =>
                    document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
            }
            if (holeType === 'C Bore') {
                ['c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost'].forEach(name =>
                    document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
            }
            if (holeType === 'BSP Tap') {
                ['bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost'].forEach(name =>
                    document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
            }
            if (holeType === 'GD Hole') {
                ['gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
                 'gd_cost_dro_radial_drilling'].forEach(name =>
                    document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
            }
            if (holeType === 'Spot Face') {
                ['spot_face'].forEach(name =>
                    document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
            }
            if (holeType === 'H7 Hole') {
                ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'].forEach(name =>
                    document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
            }
        });
    }
}

document.querySelector('#coating_type').addEventListener('change', function() {
    console.log('Coating type changed:', this.value);
    updateCoatingFields();
    calculateFields();
});

function updateCoatingFields() {
    const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value);
    const coatingType = document.querySelector('#coating_type').value;
    const blackeningField = document.querySelector('label:has(input[name="blackening"])');
    const enpField = document.querySelector('label:has(input[name="enp"])');
    const flashChromeField = document.querySelector('label:has(input[name="flash_chrome"])');
    const pcField = document.querySelector('label:has(input[name="pc"])');
    const zincBlueField = document.querySelector('label:has(input[name="zinc_blue"])');

    blackeningField.classList.add('hidden');
    enpField.classList.add('hidden');
    flashChromeField.classList.add('hidden');
    pcField.classList.add('hidden');
    zincBlueField.classList.add('hidden');

    if (operations.includes('Coating')) {
        if (coatingType === 'Blackening') blackeningField.classList.remove('hidden');
        if (coatingType === 'ENP') enpField.classList.remove('hidden');
        if (coatingType === 'Flash Chrome') flashChromeField.classList.remove('hidden');
        if (coatingType === 'PC') pcField.classList.remove('hidden');
        if (coatingType === 'Zinc Blue') zincBlueField.classList.remove('hidden');
    }
}

const inputs = document.querySelectorAll(
    'input[name="dia"], input[name="length"], input[name="width"], input[name="thickness"], input[name="rmw_str"], ' +
    '#type, #material, #operation, #fm_side, #hole_type, ' +
    'input[name="hole_4_8"], input[name="hole_9_13"], input[name="hole_15_22"], ' +
    'input[name="hole_m4"], input[name="hole_m5"], input[name="hole_m6"], input[name="hole_m8"], ' +
    'input[name="hole_m10"], input[name="hole_m12"], input[name="hole_m14"], input[name="hole_m16"], ' +
    'input[name="hole_m18"], input[name="hole_m20"], input[name="hole_m22"], input[name="hole_m24"], ' +
    'input[name="hole_m25"], input[name="hole_m26"], input[name="hole_m30"], input[name="hole_m36"], ' +
    'input[name="c_bore_m3_m5"], input[name="c_bore_m6_m10"], input[name="c_bore_m12"], ' +
    'input[name="c_bore_m14"], input[name="c_bore_m16"], ' +
    'input[name="bsp_tap_1_8_1_4"], input[name="bsp_tap_1_2_3_8"], input[name="bsp_tap_1_inch"], ' +
    'input[name="bsp_tap_1_5_2_inch"], input[name="gd_total_hole_length"], ' +
    'input[name="gd_total_hole_length_dro_radial_drilling"], input[name="spot_face"], ' +
    'input[name="4_5_h7"], input[name="6_8_h7"], input[name="10_14_h7"], ' +
    'input[name="15_18_h7"], input[name="20_25_h7"], input[name="25_30_h7"], ' +
    'input[name="sg"], input[name="sgl"], #ht_required, input[name="ht"], ' +
    'input[name="fwcam"], #coating_type, input[name="blackening"], ' +
    'input[name="enp"], input[name="flash_chrome"], input[name="pc"], input[name="zinc_blue"], ' +
    'input[name="vmc"], input[name="turning"], input[name="cg"], input[name="wire_cut_sp"], ' +
    'input[name="cnc_turning"], input[name="jg"], input[name="sparking"], input[name="fm"], ' +
    'input[name="engraving"], input[name="radial_drilling"], input[name="gun_drilling"], ' +
    'input[name="miscellaneous"], input[name="profit_percent"]'
);
inputs.forEach(input => input.addEventListener('change', () => {
    console.log(`Input changed: ${input.name || input.id}`);
    calculateFields();
}));

function calculateFields() {
    const type = document.querySelector('#type').value;
    const material = document.querySelector('#material').value;
    const operations = Array.from(document.querySelector('#operation').selectedOptions).map(option => option.value).filter(op => op !== '');
    const fmSide = document.querySelector('#fm_side').value === "True";
    const htRequired = document.querySelector('#ht_required').value === "True";
    const coatingType = document.querySelector('#coating_type').value;
    const dia = parseFloat(document.querySelector('input[name="dia"]').value) || 0;
    const length = parseFloat(document.querySelector('input[name="length"]').value) || 0;
    const width = parseFloat(document.querySelector('input[name="width"]').value) || 0;
    const thickness = parseFloat(document.querySelector('input[name="thickness"]').value) || 0;
    const rmwStr = parseFloat(document.querySelector('input[name="rmw_str"]').value) || 0;
    const fwcam = parseFloat(document.querySelector('input[name="fwcam"]').value) || 0;
    const profitPercent = parseFloat(document.querySelector('input[name="profit_percent"]').value) || 0;
    const miscellaneous = parseFloat(document.querySelector('input[name="miscellaneous"]').value) || 0;
    const density = materials[material]?.Density_gm_cc || 0;
    const costPerKg = materials[material]?.Cost_per_KG || 0;
    const fmPerSqmm = materials[material]?.FM_per_sqmm || 0;
    const fmAfterHtPerSqmm = materials[material]?.FM_AFTER_HT_per_sqmm || 0;
    const htKg = materials[material]?.HT_KG || 0;
    let rmwCalc = 0;
    let rmw = 0;
    let rmc = 0;
    let fm = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm"]').value) || 0) : 0;
    let fmSideCost = 0;
    let fmL = operations.includes("Milling") ? (parseFloat(document.querySelector('input[name="fm_l"]').value) || 0) : 0;
    let freeHoleCost = 0;
    let tapHoleCost = 0;
    let cBoreCost = 0;
    let bspTapCost = 0;
    let gdCostGdMachine = 0;
    let gdCostDroRadialDrilling = 0;
    let h7HoleCost = 0;
    let spotFaceCost = 0;
    let sg = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sg"]').value) || 0) : 0;
    let sgl = operations.includes("Grinding") ? (parseFloat(document.querySelector('input[name="sgl"]').value) || 0) : 0;
    let ht = 0;
    let blackeningCost = 0;
    let enpCost = 0;
    let flashChromeCost = 0;
    let pcCost = 0;
    let zincBlueCost = 0;
    let vmc = operations.includes("VMC") ? (parseFloat(document.querySelector('input[name="vmc"]').value) || 0) : 0;
    let turning = operations.includes("Turning") ? (parseFloat(document.querySelector('input[name="turning"]').value) || 0) : 0;
    let cg = operations.includes("CG") ? (parseFloat(document.querySelector('input[name="cg"]').value) || 0) : 0;
    let wireCutSp = operations.includes("Wire Cut") ? (parseFloat(document.querySelector('input[name="wire_cut_sp"]').value) || 0) : 0;
    let cncTurning = operations.includes("CNC Turning") ? (parseFloat(document.querySelector('input[name="cnc_turning"]').value) || 0) : 0;
    let jg = operations.includes("JG") ? (parseFloat(document.querySelector('input[name="jg"]').value) || 0) : 0;
    let sparking = operations.includes("Sparking") ? (parseFloat(document.querySelector('input[name="sparking"]').value) || 0) : 0;
    let engraving = operations.includes("Engraving") ? (parseFloat(document.querySelector('input[name="engraving"]').value) || 0) : 0;
    let radialDrilling = 0;
    let gunDrilling = 0;

    if (type === "Pri" && length > 0 && width > 0 && thickness > 0) {
        rmwCalc = ((length * width * thickness / 1000) * density) / 1000;
    } else if (type === "Cyl" && dia > 0 && length > 0) {
        rmwCalc = ((3.14159 * (dia * dia) * length / 4 / 1000) * density) / 1000;
    }

    if (type === "Str" && rmwStr > 0) {
        rmw = rmwStr;
    } else if (rmwCalc > 0) {
        rmw = rmwCalc;
    }

    if (rmw > 0 && costPerKg > 0) {
        rmc = rmw * costPerKg;
    }

    if (operations.includes("Milling") && type === "Pri" && length >= 250 && width >= 250) {
        const fmRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
        fm = length * width * fmRate;
    }

    if (operations.includes("Milling") && type === "Pri" && fmSide && length > 0 && width > 0 && thickness > 0) {
        const fmSideRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
        fmSideCost = 2 * (length + width) * thickness * fmSideRate;
    }

    if (operations.includes("Drilling")) {
        const holeTypes = Array.from(document.querySelector('#hole_type').selectedOptions)
            .map(option => option.value)
            .filter(type => type !== '');

        if (holeTypes.includes('Free Hole')) {
            const hole_4_8 = parseFloat(document.querySelector('input[name="hole_4_8"]').value) || 0;
            const hole_9_13 = parseFloat(document.querySelector('input[name="hole_9_13"]').value) || 0;
            const hole_15_22 = parseFloat(document.querySelector('input[name="hole_15_22"]').value) || 0;
            freeHoleCost = (hole_4_8 * drillingCosts["Hole_4_8"].Cost) +
                           (hole_9_13 * drillingCosts["Hole_9_13"].Cost) +
                           (hole_15_22 * drillingCosts["Hole_15_22"].Cost);
        }

        if (holeTypes.includes('Tap Hole')) {
            const hole_m4 = parseFloat(document.querySelector('input[name="hole_m4"]').value) || 0;
            const hole_m5 = parseFloat(document.querySelector('input[name="hole_m5"]').value) || 0;
            const hole_m6 = parseFloat(document.querySelector('input[name="hole_m6"]').value) || 0;
            const hole_m8 = parseFloat(document.querySelector('input[name="hole_m8"]').value) || 0;
            const hole_m10 = parseFloat(document.querySelector('input[name="hole_m10"]').value) || 0;
            const hole_m12 = parseFloat(document.querySelector('input[name="hole_m12"]').value) || 0;
            const hole_m14 = parseFloat(document.querySelector('input[name="hole_m14"]').value) || 0;
            const hole_m16 = parseFloat(document.querySelector('input[name="hole_m16"]').value) || 0;
            const hole_m18 = parseFloat(document.querySelector('input[name="hole_m18"]').value) || 0;
            const hole_m20 = parseFloat(document.querySelector('input[name="hole_m20"]').value) || 0;
            const hole_m22 = parseFloat(document.querySelector('input[name="hole_m22"]').value) || 0;
            const hole_m24 = parseFloat(document.querySelector('input[name="hole_m24"]').value) || 0;
            const hole_m25 = parseFloat(document.querySelector('input[name="hole_m25"]').value) || 0;
            const hole_m26 = parseFloat(document.querySelector('input[name="hole_m26"]').value) || 0;
            const hole_m30 = parseFloat(document.querySelector('input[name="hole_m30"]').value) || 0;
            const hole_m36 = parseFloat(document.querySelector('input[name="hole_m36"]').value) || 0;
            tapHoleCost = (hole_m4 * drillingCosts["Hole_M4"].Cost) +
                          (hole_m5 * drillingCosts["Hole_M5"].Cost) +
                          (hole_m6 * drillingCosts["Hole_M6"].Cost) +
                          (hole_m8 * drillingCosts["Hole_M8"].Cost) +
                          (hole_m10 * drillingCosts["Hole_M10"].Cost) +
                          (hole_m12 * drillingCosts["Hole_M12"].Cost) +
                          (hole_m14 * drillingCosts["Hole_M14"].Cost) +
                          (hole_m16 * drillingCosts["Hole_M16"].Cost) +
                          (hole_m18 * drillingCosts["Hole_M18"].Cost) +
                          (hole_m20 * drillingCosts["Hole_M20"].Cost) +
                          (hole_m22 * drillingCosts["Hole_M22"].Cost) +
                          (hole_m24 * drillingCosts["Hole_M24"].Cost) +
                          (hole_m25 * drillingCosts["Hole_M25"].Cost) +
                          (hole_m26 * drillingCosts["Hole_M26"].Cost) +
                          (hole_m30 * drillingCosts["Hole_M30"].Cost) +
                          (hole_m36 * drillingCosts["Hole_M36"].Cost);
        }

        if (holeTypes.includes('C Bore')) {
            const c_bore_m3_m5 = parseFloat(document.querySelector('input[name="c_bore_m3_m5"]').value) || 0;
            const c_bore_m6_m10 = parseFloat(document.querySelector('input[name="c_bore_m6_m10"]').value) || 0;
            const c_bore_m12 = parseFloat(document.querySelector('input[name="c_bore_m12"]').value) || 0;
            const c_bore_m14 = parseFloat(document.querySelector('input[name="c_bore_m14"]').value) || 0;
            const c_bore_m16 = parseFloat(document.querySelector('input[name="c_bore_m16"]').value) || 0;
            cBoreCost = (c_bore_m3_m5 * drillingCosts["C_bore_M3_M5"].Cost) +
                        (c_bore_m6_m10 * drillingCosts["C_bore_M6_M10"].Cost) +
                        (c_bore_m12 * drillingCosts["C_bore_M12"].Cost) +
                        (c_bore_m14 * drillingCosts["C_bore_M14"].Cost) +
                        (c_bore_m16 * drillingCosts["C_bore_M16"].Cost);
        }

        if (holeTypes.includes('BSP Tap')) {
            const bsp_tap_1_8_1_4 = parseFloat(document.querySelector('input[name="bsp_tap_1_8_1_4"]').value) || 0;
            const bsp_tap_1_2_3_8 = parseFloat(document.querySelector('input[name="bsp_tap_1_2_3_8"]').value) || 0;
            const bsp_tap_1_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_inch"]').value) || 0;
            const bsp_tap_1_5_2_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_5_2_inch"]').value) || 0;
            bspTapCost = (bsp_tap_1_8_1_4 * drillingCosts["BSP_TAP_1/8_1/4"].Cost) +
                         (bsp_tap_1_2_3_8 * drillingCosts["BSP_TAP_1/2_3/8"].Cost) +
                         (bsp_tap_1_inch * drillingCosts["BSP_TAP_1_inch"].Cost) +
                         (bsp_tap_1_5_2_inch * drillingCosts["BSP_TAP_1.5_2_inch"].Cost);
        }

        if (holeTypes.includes('GD Hole')) {
            const gd_total_hole_length = parseFloat(document.querySelector('input[name="gd_total_hole_length"]').value) || 0;
            gdCostGdMachine = gd_total_hole_length * drillingCosts["GD_TOTAL_HOLE_LENGTH"].Cost;
            const gd_total_hole_length_dro_radial_drilling = parseFloat(document.querySelector('input[name="gd_total_hole_length_dro_radial_drilling"]').value) || 0;
            gdCostDroRadialDrilling = gd_total_hole_length_dro_radial_drilling * drillingCosts["GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING"].Cost;
        }

        if (holeTypes.includes('Spot Face')) {
            const spot_face = parseFloat(document.querySelector('input[name="spot_face"]').value) || 0;
            spotFaceCost = spot_face * drillingCosts["Spot_face"].Cost;
        }

        if (holeTypes.includes('H7 Hole')) {
            const h7_4_5 = parseFloat(document.querySelector('input[name="4_5_h7"]').value) || 0;
            const h7_6_8 = parseFloat(document.querySelector('input[name="6_8_h7"]').value) || 0;
            const h7_10_14 = parseFloat(document.querySelector('input[name="10_14_h7"]').value) || 0;
            const h7_15_18 = parseFloat(document.querySelector('input[name="15_18_h7"]').value) || 0;
            const h7_20_25 = parseFloat(document.querySelector('input[name="20_25_h7"]').value) || 0;
            const h7_25_30 = parseFloat(document.querySelector('input[name="25_30_h7"]').value) || 0;
            h7HoleCost = (h7_4_5 * drillingCosts["4_5_H7"].Cost) +
                         (h7_6_8 * drillingCosts["6_8_H7"].Cost) +
                         (h7_10_14 * drillingCosts["10_14_H7"].Cost) +
                         (h7_15_18 * drillingCosts["15_18_H7"].Cost) +
                         (h7_20_25 * drillingCosts["20_25_H7"].Cost) +
                         (h7_25_30 * drillingCosts["25_30_H7"].Cost);
        }
    }

    if (operations.includes("Grinding") && type === "Pri" && length >= 250 && width >= 250) {
        sg = length * width * fmPerSqmm;
    }

    if (operations.includes("Heat Treatment") && htRequired) {
        ht = rmw * htKg;
    }

    if (operations.includes("Coating") && length > 0 && width > 0 && coatingType) {
        const areaCm2 = (length / 10) * (width / 10);
        blackeningCost = coatingType === "Blackening" ? fwcam * coatingCosts["Blackening"].Cost : 0;
        enpCost = coatingType === "ENP" ? fwcam * coatingCosts["ENP"].Cost : 0;
        flashChromeCost = coatingType === "Flash Chrome" ? areaCm2 * coatingCosts["Flash Chrome"].Cost : 0;
        pcCost = coatingType === "PC" ? fwcam * coatingCosts["PC"].Cost : 0;
        zincBlueCost = coatingType === "Zinc Blue" ? fwcam * coatingCosts["Zinc Blue"].Cost : 0;
    }

    if (operations.includes("Radial Drilling")) {
        radialDrilling = parseFloat(document.querySelector('input[name="radial_drilling"]').value) || 0;
        radialDrilling = radialDrilling * drillingCosts["Radial Drilling"].Cost;
    }

    if (operations.includes("Gun Drilling")) {
        gunDrilling = parseFloat(document.querySelector('input[name="gun_drilling"]').value) || 0;
        gunDrilling = gunDrilling * drillingCosts["Gun Drilling"].Cost;
    }

    const coatingSum = blackeningCost + enpCost + flashChromeCost + pcCost + zincBlueCost;
    const total = (
        engraving + sgl + h7HoleCost + ht + gdCostDroRadialDrilling +
        gdCostGdMachine + bspTapCost + cBoreCost + tapHoleCost + freeHoleCost +
        spotFaceCost + fmL + fmSideCost + fm + rmc + vmc + turning + cg + wireCutSp +
        cncTurning + jg + sparking + coatingSum + radialDrilling + gunDrilling + miscellaneous + sg
    );

    const withProfit = total * (1 + (profitPercent / 100));

    const rmwCalcField = document.querySelector('input[name="rmw_calc"]');
    const rmwField = document.querySelector('input[name="rmw"]');
    const rmcField = document.querySelector('input[name="rmc"]');
    const fmField = document.querySelector('input[name="fm"]');
    const fmSideCostField = document.querySelector('input[name="fm_side_cost"]');
    const fmLField = document.querySelector('input[name="fm_l"]');
    const freeHoleCostField = document.querySelector('input[name="free_hole_cost"]');
    const tapHoleCostField = document.querySelector('input[name="tap_hole_cost"]');
    const cBoreCostField = document.querySelector('input[name="c_bore_cost"]');
    const bspTapCostField = document.querySelector('input[name="bsp_tap_cost"]');
    const gdCostGdMachineField = document.querySelector('input[name="gd_cost_gd_machine"]');
    const gdCostDroRadialDrillingField = document.querySelector('input[name="gd_cost_dro_radial_drilling"]');
    const h7HoleCostField = document.querySelector('input[name="h7_hole_cost"]');
    const sgField = document.querySelector('input[name="sg"]');
    const sglField = document.querySelector('input[name="sgl"]');
    const htField = document.querySelector('input[name="ht"]');
    const blackeningField = document.querySelector('input[name="blackening"]');
    const enpField = document.querySelector('input[name="enp"]');
    const flashChromeField = document.querySelector('input[name="flash_chrome"]');
    const pcField = document.querySelector('input[name="pc"]');
    const zincBlueField = document.querySelector('input[name="zinc_blue"]');
    const vmcField = document.querySelector('input[name="vmc"]');
    const turningField = document.querySelector('input[name="turning"]');
    const cgField = document.querySelector('input[name="cg"]');
    const wireCutSpField = document.querySelector('input[name="wire_cut_sp"]');
    const cncTurningField = document.querySelector('input[name="cnc_turning"]');
    const jgField = document.querySelector('input[name="jg"]');
    const sparkingField = document.querySelector('input[name="sparking"]');
    const engravingField = document.querySelector('input[name="engraving"]');
    const radialDrillingField = document.querySelector('input[name="radial_drilling"]');
    const gunDrillingField = document.querySelector('input[name="gun_drilling"]');
    const totalField = document.querySelector('input[name="total"]');
    const withProfitField = document.querySelector('input[name="with_profit"]');

    rmwCalcField.value = rmwCalc > 0 ? rmwCalc.toFixed(2) : '';
    rmwField.value = rmw > 0 ? rmw.toFixed(2) : '';
    rmcField.value = rmc > 0 ? rmc.toFixed(2) : '';
    fmField.value = fm > 0 ? fm.toFixed(2) : (operations.includes("Milling") ? fmField.value : '');
    fmSideCostField.value = fmSideCost > 0 ? fmSideCost.toFixed(2) : '';
    fmLField.value = fmL > 0 ? fmL.toFixed(2) : (operations.includes("Milling") ? fmLField.value : '');
    freeHoleCostField.value = freeHoleCost > 0 ? freeHoleCost.toFixed(2) : '';
    tapHoleCostField.value = tapHoleCost > 0 ? tapHoleCost.toFixed(2) : '';
    cBoreCostField.value = cBoreCost > 0 ? cBoreCost.toFixed(2) : '';
    bspTapCostField.value = bspTapCost > 0 ? bspTapCost.toFixed(2) : '';
    gdCostGdMachineField.value = gdCostGdMachine > 0 ? gdCostGdMachine.toFixed(2) : '';
    gdCostDroRadialDrillingField.value = gdCostDroRadialDrilling > 0 ? gdCostDroRadialDrilling.toFixed(2) : '';
    h7HoleCostField.value = h7HoleCost > 0 ? h7HoleCost.toFixed(2) : '';
    sgField.value = sg > 0 ? sg.toFixed(2) : (operations.includes("Grinding") ? sgField.value : '');
    sglField.value = sgl > 0 ? sgl.toFixed(2) : (operations.includes("Grinding") ? sglField.value : '');
    htField.value = ht > 0 ? ht.toFixed(2) : '';
    blackeningField.value = blackeningCost > 0 ? blackeningCost.toFixed(2) : '';
    enpField.value = enpCost > 0 ? enpCost.toFixed(2) : '';
    flashChromeField.value = flashChromeCost > 0 ? flashChromeCost.toFixed(2) : '';
    pcField.value = pcCost > 0 ? pcCost.toFixed(2) : '';
    zincBlueField.value = zincBlueCost > 0 ? zincBlueCost.toFixed(2) : '';
    vmcField.value = vmc > 0 ? vmc.toFixed(2) : (operations.includes("VMC") ? vmcField.value : '');
    turningField.value = turning > 0 ? turning.toFixed(2) : (operations.includes("Turning") ? turningField.value : '');
    cgField.value = cg > 0 ? cg.toFixed(2) : (operations.includes("CG") ? cgField.value : '');
    wireCutSpField.value = wireCutSp > 0 ? wireCutSp.toFixed(2) : (operations.includes("Wire Cut") ? wireCutSpField.value : '');
    cncTurningField.value = cncTurning > 0 ? cncTurning.toFixed(2) : (operations.includes("CNC Turning") ? cncTurningField.value : '');
    jgField.value = jg > 0 ? jg.toFixed(2) : (operations.includes("JG") ? jgField.value : '');
    sparkingField.value = sparking > 0 ? sparking.toFixed(2) : (operations.includes("Sparking") ? sparkingField.value : '');
    engravingField.value = engraving > 0 ? engraving.toFixed(2) : (operations.includes("Engraving") ? engravingField.value : '');
    radialDrillingField.value = radialDrilling > 0 ? radialDrilling.toFixed(2) : (operations.includes("Radial Drilling") ? radialDrillingField.value : '');
    gunDrillingField.value = gunDrilling > 0 ? gunDrilling.toFixed(2) : (operations.includes("Gun Drilling") ? gunDrillingField.value : '');
    totalField.value = total > 0 ? total.toFixed(2) : '';
    withProfitField.value = withProfit > 0 ? withProfit.toFixed(2) : '';
}

function saveEstimation() {
    const form = document.getElementById('costForm');
    const formData = new FormData(form);
    const estimationData = {};

    formData.forEach((value, key) => {
        if (key === 'operation' || key === 'hole_type') {
            if (!estimationData[key]) estimationData[key] = [];
            estimationData[key].push(value);
        } else {
            estimationData[key] = value;
        }
    });

    if (estimationData['operation']) {
        estimationData['operation'] = estimationData['operation'].join(', ');
    }
    if (estimationData['hole_type']) {
        estimationData['hole_type'] = estimationData['hole_type'].join(', ');
    }

    savedEstimations.push(estimationData);

    // Show the clear button after saving an estimation
    document.getElementById('clearButton').classList.remove('hidden');
}

function downloadExcel() {
    const allHeaders = Array.from(document.getElementById('costForm').elements)
        .filter(el => el.name && el.name !== 'operation' && el.name !== 'hole_type')
        .map(el => el.name)
        .concat(['operation', 'hole_type'])
        .filter((v, i, a) => a.indexOf(v) === i);

    const headers = excelData.headers.length > 0 ? excelData.headers : allHeaders;

    const estimationRows = savedEstimations.map(estimation => 
        headers.map(header => estimation[header] || '')
    );

    const allRows = [...excelData.rows, ...estimationRows].filter(row => row.some(cell => cell !== undefined && cell !== ''));

    const wsData = [headers, ...allRows];

    const ws = XLSX.utils.aoa_to_sheet(wsData);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Cost Estimation');

    XLSX.writeFile(wb, uploadedFileName);
}

function clearForm() {
    const form = document.getElementById('costForm');
    form.reset(); // Reset all native form inputs

    // Reset Choices.js select elements
    const materialSelect = Choices.getInstance('#material');
    const typeSelect = Choices.getInstance('#type');
    const operationSelect = Choices.getInstance('#operation');
    const fmSideSelect = Choices.getInstance('#fm_side');
    const htRequiredSelect = Choices.getInstance('#ht_required');
    const coatingTypeSelect = Choices.getInstance('#coating_type');
    const holeTypeSelect = Choices.getInstance('#hole_type');

    materialSelect.removeActiveItems();
    typeSelect.removeActiveItems();
    operationSelect.removeActiveItems();
    fmSideSelect.removeActiveItems();
    htRequiredSelect.removeActiveItems();
    coatingTypeSelect.removeActiveItems();
    holeTypeSelect.removeActiveItems();

    // Clear operation boxes
    const operationContainer = document.querySelector('#operation-box-container');
    operationContainer.innerHTML = '';

    // Hide all conditional fields
    const operationFields = [
        'fm', 'fm_side', 'fm_side_cost', 'fm_l',
        'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost',
        'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14',
        'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26',
        'hole_m30', 'hole_m36', 'tap_hole_cost',
        'c_bore_m3_m5', 'c_bore_m6_m10', 'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost',
        'bsp_tap_1_8_1_4', 'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost',
        'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling',
        'gd_cost_dro_radial_drilling', 'spot_face',
        '4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost',
        'sg', 'sgl', 'ht_required', 'ht',
        'coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue',
        'vmc', 'wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp', 'cg', 'turning',
        'cnc_turning', 'jg', 'sparking', 'engraving', 'radial_drilling', 'gun_drilling'
    ];
    operationFields.forEach(name => {
        const selector = name === 'fm_side' || name === 'ht_required' || name === 'coating_type' ?
            `label:has(#${name})` : `label:has(input[name="${name}"])`;
        document.querySelector(selector).classList.add('hidden');
    });

    // Hide type-specific fields
    const typeFields = ['dia', 'length', 'width', 'thickness', 'rmw_str'];
    typeFields.forEach(name => {
        document.querySelector(`label[for="${name}"]`).classList.add('hidden');
    });

    // Clear Excel upload
    const excelUpload = document.getElementById('excelUpload');
    excelUpload.value = '';
    excelData = { headers: [], rows: [] };
    uploadedFileName = 'cost_estimation.xlsx';

    // Hide the clear button after clearing the form
    document.getElementById('clearButton').classList.add('hidden');

    // Recalculate fields to update any calculated values
    calculateFields();
}

const holeFields = [
    'hole_4_8', 'hole_9_13', 'hole_15_22', 'free_hole_cost', 
    'hole_m4', 'hole_m5', 'hole_m6', 'hole_m8', 'hole_m10', 'hole_m12', 'hole_m14', 
    'hole_m16', 'hole_m18', 'hole_m20', 'hole_m22', 'hole_m24', 'hole_m25', 'hole_m26', 
    'hole_m30', 'hole_m36', 'tap_hole_cost', 'c_bore_m3_m5', 'c_bore_m6_m10', 
    'c_bore_m12', 'c_bore_m14', 'c_bore_m16', 'c_bore_cost', 'bsp_tap_1_8_1_4', 
    'bsp_tap_1_2_3_8', 'bsp_tap_1_inch', 'bsp_tap_1_5_2_inch', 'bsp_tap_cost', 
    'gd_total_hole_length', 'gd_cost_gd_machine', 'gd_total_hole_length_dro_radial_drilling', 
    'gd_cost_dro_radial_drilling', 'spot_face'
];
const h7Fields = ['4_5_h7', '6_8_h7', '10_14_h7', '15_18_h7', '20_25_h7', '25_30_h7', 'h7_hole_cost'];
const fmFields = ['fm', 'fm_side', 'fm_side_cost', 'fm_l'];
const grindingFields = ['sg', 'sgl'];
const heatTreatmentFields = ['ht_required', 'ht'];
const coatingFields = ['coating_type', 'blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'];
const vmcFields = ['vmc'];
const wireCutFields = ['wire_cut_sp', 'wire_cut_dp', 'wire_cut_tp'];
const cgFields = ['cg'];
const turningFields = ['turning'];
const cncTurningFields = ['cnc_turning'];
const jgFields = ['jg'];
const sparkingFields = ['sparking'];
const engravingFields = ['engraving'];
const radialDrillingFields = ['radial_drilling'];
const gunDrillingFields = ['gun_drilling'];

holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
fmFields.forEach(name => {
    const field = name === 'fm_side' ? 
        document.querySelector(`label:has(#${name})`) : 
        document.querySelector(`label:has(input[name="${name}"])`);
    field.classList.add('hidden');
});
grindingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
heatTreatmentFields.forEach(name => {
    const field = name === 'ht_required' ? 
        document.querySelector(`label:has(#${name})`) : 
        document.querySelector(`label:has(input[name="${name}"])`);
    field.classList.add('hidden');
});
coatingFields.forEach(name => {
    const field = name === 'coating_type' ? 
        document.querySelector(`label:has(#${name})`) : 
        document.querySelector(`label:has(input[name="${name}"])`);
    field.classList.add('hidden');
});
vmcFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
wireCutFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
cgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
turningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
cncTurningFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
jgFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
sparkingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
engravingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
radialDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));
gunDrillingFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.add('hidden'));