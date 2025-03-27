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

// // Initialize Choices.js for each dropdown
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
//         removeItemButton: false // We'll handle display separately
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

//     // Calculate FM_Side (no operation condition)
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
//         engraving + blackeningCost + sgl + h7HoleCost + ht + gdCostDroRadialDrilling + 
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

// // Initialize Choices.js for each dropdown
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

//     // Initial call to update operation boxes
//     updateOperationBoxes();

//     // Handle form submission
//     document.getElementById('costForm').addEventListener('submit', function(e) {
//         e.preventDefault(); // Prevent default form submission
//         calculateFields(); // Ensure latest calculations
//         generateExcel(); // Generate and download Excel
//         // Optionally, submit to server: this.submit();
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
//         engraving + blackeningCost + sgl + h7HoleCost + ht + gdCostDroRadialDrilling + 
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

// // Function to generate and download Excel
// function generateExcel() {
//     const form = document.getElementById('costForm');
//     const formData = new FormData(form);
//     const data = {};

//     // Collect all form field values
//     formData.forEach((value, key) => {
//         if (key === 'operation') {
//             // Handle multiple selections for operation
//             if (!data[key]) data[key] = [];
//             data[key].push(value);
//         } else {
//             data[key] = value;
//         }
//     });

//     // Convert operation array to comma-separated string
//     if (data['operation']) {
//         data['operation'] = data['operation'].join(', ');
//     }

//     // Create worksheet data: one row with field names and one row with values
//     const wsData = [
//         Object.keys(data), // Headers (field names)
//         Object.values(data) // Values
//     ];

//     // Create worksheet
//     const ws = XLSX.utils.aoa_to_sheet(wsData);

//     // Create workbook and add worksheet
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Cost Estimation');

//     // Generate Excel file and trigger download
//     const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
//     XLSX.writeFile(wb, `cost_estimation_${timestamp}.xlsx`);
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
// Material densities and costs
const materials = {
    "MS": {"Density_gm_cc": 7.85, "Cost_per_KG": 80.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "C45": {"Density_gm_cc": 7.85, "Cost_per_KG": 95.0, "FM_per_sqmm": 0.005, "HT_KG": 25.0, "FM_AFTER_HT_per_sqmm": 0.007},
    "EN24": {"Density_gm_cc": 7.85, "Cost_per_KG": 125.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "EN354": {"Density_gm_cc": 7.85, "Cost_per_KG": 145.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "20MnCr5": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 50.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "EN47": {"Density_gm_cc": 7.85, "Cost_per_KG": 140.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "EN31": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "EN19": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 30.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "SS410": {"Density_gm_cc": 7.85, "Cost_per_KG": 220.0, "FM_per_sqmm": 0.008, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "AL-7075": {"Density_gm_cc": 2.73, "Cost_per_KG": 730.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "D2": {"Density_gm_cc": 7.85, "Cost_per_KG": 350.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "OHNS": {"Density_gm_cc": 7.85, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 80.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "DELRIN": {"Density_gm_cc": 1.42, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "NYLON": {"Density_gm_cc": 1.14, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "HYLEM": {"Density_gm_cc": 1.95, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "BRASS": {"Density_gm_cc": 8.5, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "COPPER": {"Density_gm_cc": 8.93, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "CARBIDE": {"Density_gm_cc": 15.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.005, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "CASTING": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "WELDMENTS": {"Density_gm_cc": 0.0, "Cost_per_KG": 0.0, "FM_per_sqmm": 0.0, "HT_KG": 3.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "AL-6061": {"Density_gm_cc": 2.73, "Cost_per_KG": 455.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0},
    "SS304": {"Density_gm_cc": 7.85, "Cost_per_KG": 245.0, "FM_per_sqmm": 0.0, "HT_KG": 0.0, "FM_AFTER_HT_per_sqmm": 0.0}
};

// Drilling costs
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
    "Spot_face": {"Cost": 30}
};

// Coating costs
const coatingCosts = {
    "Blackening": {"Cost": 20},
    "ENP": {"Cost": 180},
    "Flash Chrome": {"Cost": 0.6},
    "PC": {"Cost": 20},
    "Zinc Blue": {"Cost": 30}
};

// Store Excel data in memory
let excelData = { headers: [], rows: [] };
let uploadedFileName = 'cost_estimation.xlsx'; // Default filename if no file uploaded

// Initialize Choices.js and handle Excel upload
document.addEventListener('DOMContentLoaded', () => {
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
        removeItemButton: false
    });

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

    // Populate coating_type dynamically
    if (coatingTypeSelect.getValue(true) === '') {
        const coatingOptions = Object.keys(coatingCosts).map(coating => ({
            value: coating,
            label: coating,
        }));
        coatingTypeSelect.setChoices(coatingOptions, 'value', 'label', true);
    }

    // Make coating cost fields readonly
    ['blackening', 'enp', 'flash_chrome', 'pc', 'zinc_blue'].forEach(name => {
        document.querySelector(`input[name="${name}"]`).setAttribute('readonly', true);
    });

    // Handle Excel file upload
    document.getElementById('excelUpload').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            uploadedFileName = file.name; // Use uploaded file's name for download
            const reader = new FileReader();
            reader.onload = function(e) {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

                if (jsonData.length > 0) {
                    excelData.headers = jsonData[0]; // First row as headers
                    excelData.rows = jsonData.slice(1); // Remaining rows as data
                } else {
                    excelData.headers = []; // Blank sheet
                    excelData.rows = [];
                }
            };
            reader.readAsArrayBuffer(file);
        }
    });

    // Handle form submission
    document.getElementById('costForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        calculateFields(); // Ensure latest calculations
        updateExcel(); // Update and download Excel
    });

    // Initial call to update operation boxes
    updateOperationBoxes();
});

// Show/hide fields based on type selection
document.querySelector('#type').addEventListener('change', function() {
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

// Show/hide fields based on operation selection
document.querySelector('#operation').addEventListener('change', function() {
    const operations = Array.from(this.selectedOptions).map(option => option.value).filter(op => op !== '');
    updateOperationBoxes();
    updateOperationFields(operations);
    calculateFields();
});

// Function to update operation boxes
function updateOperationBoxes() {
    const operationSelect = document.querySelector('#operation');
    const selectedOperations = Array.from(operationSelect.selectedOptions)
        .map(option => option.value)
        .filter(op => op !== '');
    const container = document.querySelector('#operation-box-container');
    container.innerHTML = ''; // Clear existing boxes

    selectedOperations.forEach(operation => {
        const box = document.createElement('div');
        box.className = 'operation-box';
        box.textContent = operation;
        container.appendChild(box);
    });
}

// Function to update fields based on selected operations
function updateOperationFields(operations) {
    const fmField = document.querySelector('label:has(input[name="fm"])');
    const fmSideQField = document.querySelector('label:has(#fm_side)');
    const fmSideField = document.querySelector('label:has(input[name="fm_side_cost"])');
    const fmLField = document.querySelector('label:has(input[name="fm_l"])');
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

    // Hide all operation-related fields initially
    fmField.classList.add('hidden');
    fmSideQField.classList.add('hidden');
    fmSideField.classList.add('hidden');
    fmLField.classList.add('hidden');
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

    // Show fields based on selected operations
    operations.forEach(operation => {
        if (operation === 'Milling') {
            fmField.classList.remove('hidden');
            fmSideQField.classList.remove('hidden');
            fmSideField.classList.remove('hidden');
            fmLField.classList.remove('hidden');
        }
        if (operation === 'Drilling') {
            holeFields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
            h7Fields.forEach(name => document.querySelector(`label:has(input[name="${name}"])`).classList.remove('hidden'));
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
    });
}

// Show/hide coating-specific fields based on coating_type selection
document.querySelector('#coating_type').addEventListener('change', function() {
    updateCoatingFields();
    calculateFields();
});

// Function to handle coating field visibility
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

// Auto-calculate fields when inputs change
const inputs = document.querySelectorAll(
    'input[name="dia"], input[name="length"], input[name="width"], input[name="thickness"], input[name="rmw_str"], ' +
    '#type, #material, #operation, #fm_side, ' +
    'input[name="hole_4_8"], input[name="hole_9_13"], input[name="hole_15_22"], ' +
    'input[name="hole_m4"], input[name="hole_m5"], input[name="hole_m6"], input[name="hole_m8"], ' +
    'input[name="hole_m10"], input[name="hole_m12"], input[name="hole_m14"], input[name="hole_m16"], ' +
    'input[name="hole_m18"], input[name="hole_m20"], input[name="hole_m22"], input[name="hole_m24"], ' +
    'input[name="hole_m25"], input[name="hole_m26"], input[name="hole_m30"], input[name="hole_m36"], ' +
    'input[name="c_bore_m3_m5"], input[name="c_bore_m6_m10"], input[name="c_bore_m12"], ' +
    'input[name="c_bore_m14"], input[name="c_bore_m16"], ' +
    'input[name="bsp_tap_1_8_1_4"], input[name="bsp_tap_1_2_3_8"], input[name="bsp_tap_1_inch"], ' +
    'input[name="bsp_tap_1_5_2_inch"], input[name="gd_total_hole_length"], ' +
    'input[name="gd_total_hole_length_dro_radial_drilling"], ' +
    'input[name="4_5_h7"], input[name="6_8_h7"], input[name="10_14_h7"], ' +
    'input[name="15_18_h7"], input[name="20_25_h7"], input[name="25_30_h7"], ' +
    'input[name="sg"], input[name="sgl"], #ht_required, input[name="ht"], ' +
    'input[name="fwcam"], #coating_type, input[name="blackening"], ' +
    'input[name="enp"], input[name="flash_chrome"], input[name="pc"], input[name="zinc_blue"], ' +
    'input[name="vmc"], input[name="turning"], input[name="cg"], input[name="wire_cut_sp"], ' +
    'input[name="cnc_turning"], input[name="jg"], input[name="sparking"], input[name="fm"], ' +
    'input[name="profit_percent"]'
);
inputs.forEach(input => input.addEventListener('change', calculateFields));

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
    const density = materials[material]?.Density_gm_cc || 0;
    const costPerKg = materials[material]?.Cost_per_KG || 0;
    const fmPerSqmm = materials[material]?.FM_per_sqmm || 0;
    const fmAfterHtPerSqmm = materials[material]?.FM_AFTER_HT_per_sqmm || 0;
    const htKg = materials[material]?.HT_KG || 0;
    let rmwCalc = 0;
    let rmw = 0;
    let rmc = 0;
    let fm = parseFloat(document.querySelector('input[name="fm"]').value) || 0;
    let fmSideCost = 0;
    let fmL = parseFloat(document.querySelector('input[name="fm_l"]').value) || 0;
    let freeHoleCost = 0;
    let tapHoleCost = 0;
    let cBoreCost = 0;
    let bspTapCost = 0;
    let gdCostGdMachine = 0;
    let gdCostDroRadialDrilling = 0;
    let h7HoleCost = 0;
    let sg = parseFloat(document.querySelector('input[name="sg"]').value) || 0;
    let sgl = parseFloat(document.querySelector('input[name="sgl"]').value) || 0;
    let ht = 0;
    let blackeningCost = 0;
    let enpCost = 0;
    let flashChromeCost = 0;
    let pcCost = 0;
    let zincBlueCost = 0;
    let vmc = parseFloat(document.querySelector('input[name="vmc"]').value) || 0;
    let turning = parseFloat(document.querySelector('input[name="turning"]').value) || 0;
    let cg = parseFloat(document.querySelector('input[name="cg"]').value) || 0;
    let wireCutSp = parseFloat(document.querySelector('input[name="wire_cut_sp"]').value) || 0;
    let cncTurning = parseFloat(document.querySelector('input[name="cnc_turning"]').value) || 0;
    let engraving = parseFloat(document.querySelector('input[name="engraving"]').value) || 0;

    // Calculate RMW_Calc
    if (type === "Pri" && length > 0 && width > 0 && thickness > 0) {
        rmwCalc = ((length * width * thickness / 1000) * density) / 1000;
    } else if (type === "Cyl" && dia > 0 && length > 0) {
        rmwCalc = ((3.14159 * (dia * dia) * length / 4 / 1000) * density) / 1000;
    }

    // Calculate RMW
    if (type === "Str" && rmwStr > 0) {
        rmw = rmwStr;
    } else if (rmwCalc > 0) {
        rmw = rmwCalc;
    }

    // Calculate RMC
    if (rmw > 0 && costPerKg > 0) {
        rmc = rmw * costPerKg;
    }

    // Calculate FM only when Milling is selected
    if (operations.includes("Milling") && type === "Pri" && length >= 250 && width >= 250) {
        const fmRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
        fm = length * width * fmRate;
    }

    // Calculate FM_Side
    if (type === "Pri" && fmSide && length > 0 && width > 0 && thickness > 0) {
        const fmSideRate = (htRequired && htKg > 0 && fmAfterHtPerSqmm > 0) ? fmAfterHtPerSqmm : fmPerSqmm;
        fmSideCost = 2 * (length + width) * thickness * fmSideRate;
    }

    // Calculate Free_hole_cost
    const hole_4_8 = parseFloat(document.querySelector('input[name="hole_4_8"]').value) || 0;
    const hole_9_13 = parseFloat(document.querySelector('input[name="hole_9_13"]').value) || 0;
    const hole_15_22 = parseFloat(document.querySelector('input[name="hole_15_22"]').value) || 0;
    freeHoleCost = (hole_4_8 * drillingCosts["Hole_4_8"].Cost) +
                   (hole_9_13 * drillingCosts["Hole_9_13"].Cost) +
                   (hole_15_22 * drillingCosts["Hole_15_22"].Cost);

    // Calculate Tap_hole_cost
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

    // Calculate C_Bore_Cost
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

    // Calculate BSP_TAP_COST
    const bsp_tap_1_8_1_4 = parseFloat(document.querySelector('input[name="bsp_tap_1_8_1_4"]').value) || 0;
    const bsp_tap_1_2_3_8 = parseFloat(document.querySelector('input[name="bsp_tap_1_2_3_8"]').value) || 0;
    const bsp_tap_1_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_inch"]').value) || 0;
    const bsp_tap_1_5_2_inch = parseFloat(document.querySelector('input[name="bsp_tap_1_5_2_inch"]').value) || 0;
    bspTapCost = (bsp_tap_1_8_1_4 * drillingCosts["BSP_TAP_1/8_1/4"].Cost) +
                 (bsp_tap_1_2_3_8 * drillingCosts["BSP_TAP_1/2_3/8"].Cost) +
                 (bsp_tap_1_inch * drillingCosts["BSP_TAP_1_inch"].Cost) +
                 (bsp_tap_1_5_2_inch * drillingCosts["BSP_TAP_1.5_2_inch"].Cost);

    // Calculate GD_COST_GD_MACHINE
    const gd_total_hole_length = parseFloat(document.querySelector('input[name="gd_total_hole_length"]').value) || 0;
    gdCostGdMachine = gd_total_hole_length * drillingCosts["GD_TOTAL_HOLE_LENGTH"].Cost;

    // Calculate GD_COST_DRO_RADIAL DRILLING
    const gd_total_hole_length_dro_radial_drilling = parseFloat(document.querySelector('input[name="gd_total_hole_length_dro_radial_drilling"]').value) || 0;
    gdCostDroRadialDrilling = gd_total_hole_length_dro_radial_drilling * drillingCosts["GD_TOTAL_HOLE_LENGTH_DRO_RADIAL DRILLING"].Cost;

    // Calculate H7_HOLE_COST
    const h7_4_5 = parseFloat(document.querySelector('input[name="4_5_h7"]').value) || 0;
    const h7_6_8 = parseFloat(document.querySelector('input[name="6_8_h7"]').value) || 0;
    const h7_10_14 = parseFloat(document.querySelector('input[name="10_14_h7"]').value) || 0;
    const h7_15_18 = parseFloat(document.querySelector('input[name="15_18_h7"]').value) || 0;
    const h7_20_25 = parseFloat(document.querySelector('input[name="20_25_h7"]').value) || 0;
    const h7_25_30 = parseFloat(document.querySelector('input[name="25_30_h7"]').value) || 0;
    h7HoleCost = (h7_4_5 * drillingCosts["4_5_H7"].Cost) +
                 (h7_6_8 * drillingCosts["6_8_H7"].Cost) +
                 (h7_10_14 * drillingCosts["10_14_H7"].Cost) +
                 (h7_15_18 * drillingCosts["10_14_H7"].Cost) +
                 (h7_20_25 * drillingCosts["20_25_H7"].Cost) +
                 (h7_25_30 * drillingCosts["25_30_H7"].Cost);

    // Calculate SG only when Grinding is selected
    if (operations.includes("Grinding") && type === "Pri" && length >= 250 && width >= 250) {
        sg = length * width * fmPerSqmm;
    }

    // Calculate HT
    if (operations.includes("Heat Treatment") && htRequired) {
        ht = rmw * htKg;
    }

    // Calculate Coating Costs
    if (operations.includes("Coating") && length > 0 && width > 0 && coatingType) {
        const areaCm2 = (length / 10) * (width / 10);
        blackeningCost = coatingType === "Blackening" ? fwcam * coatingCosts["Blackening"].Cost : 0;
        enpCost = coatingType === "ENP" ? fwcam * coatingCosts["ENP"].Cost : 0;
        flashChromeCost = coatingType === "Flash Chrome" ? areaCm2 * coatingCosts["Flash Chrome"].Cost : 0;
        pcCost = coatingType === "PC" ? fwcam * coatingCosts["PC"].Cost : 0;
        zincBlueCost = coatingType === "Zinc Blue" ? fwcam * coatingCosts["Zinc Blue"].Cost : 0;
    }

    // Calculate Total
    const coatingSum = blackeningCost + enpCost + flashChromeCost + pcCost + zincBlueCost;
    const total = (
        engraving + blackeningCost + sgl + h7HoleCost + ht + gdCostDroRadialDrilling + 
        gdCostGdMachine + bspTapCost + cBoreCost + tapHoleCost + freeHoleCost + 
        fmL + fmSideCost + fm + rmc + vmc + turning + cg + wireCutSp + cncTurning + 
        coatingSum
    );

    // Calculate With Profit
    const withProfit = total * (1 + (profitPercent / 100));

    // Update fields
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
    const totalField = document.querySelector('input[name="total"]');
    const withProfitField = document.querySelector('input[name="with_profit"]');

    rmwCalcField.value = rmwCalc > 0 ? rmwCalc.toFixed(2) : '';
    rmwField.value = rmw > 0 ? rmw.toFixed(2) : '';
    rmcField.value = rmc > 0 ? rmc.toFixed(2) : '';
    fmField.value = fm > 0 ? fm.toFixed(2) : fmField.value;
    fmSideCostField.value = fmSideCost > 0 ? fmSideCost.toFixed(2) : '';
    fmLField.value = fmL > 0 ? fmL.toFixed(2) : fmLField.value;
    freeHoleCostField.value = freeHoleCost > 0 ? freeHoleCost.toFixed(2) : '';
    tapHoleCostField.value = tapHoleCost > 0 ? tapHoleCost.toFixed(2) : '';
    cBoreCostField.value = cBoreCost > 0 ? cBoreCost.toFixed(2) : '';
    bspTapCostField.value = bspTapCost > 0 ? bspTapCost.toFixed(2) : '';
    gdCostGdMachineField.value = gdCostGdMachine > 0 ? gdCostGdMachine.toFixed(2) : '';
    gdCostDroRadialDrillingField.value = gdCostDroRadialDrilling > 0 ? gdCostDroRadialDrilling.toFixed(2) : '';
    h7HoleCostField.value = h7HoleCost > 0 ? h7HoleCost.toFixed(2) : '';
    sgField.value = sg > 0 ? sg.toFixed(2) : sgField.value;
    sglField.value = sgl > 0 ? sgl.toFixed(2) : sglField.value;
    htField.value = ht > 0 ? ht.toFixed(2) : '';
    blackeningField.value = blackeningCost > 0 ? blackeningCost.toFixed(2) : '';
    enpField.value = enpCost > 0 ? enpCost.toFixed(2) : '';
    flashChromeField.value = flashChromeCost > 0 ? flashChromeCost.toFixed(2) : '';
    pcField.value = pcCost > 0 ? pcCost.toFixed(2) : '';
    zincBlueField.value = zincBlueCost > 0 ? zincBlueCost.toFixed(2) : '';
    vmcField.value = vmc > 0 ? vmc.toFixed(2) : vmcField.value;
    turningField.value = turning > 0 ? turning.toFixed(2) : turningField.value;
    cgField.value = cg > 0 ? cg.toFixed(2) : cgField.value;
    wireCutSpField.value = wireCutSp > 0 ? wireCutSp.toFixed(2) : wireCutSpField.value;
    cncTurningField.value = cncTurning > 0 ? cncTurning.toFixed(2) : cncTurningField.value;
    totalField.value = total > 0 ? total.toFixed(2) : '';
    withProfitField.value = withProfit > 0 ? withProfit.toFixed(2) : '';
}

// Function to update and download Excel
function updateExcel() {
    const form = document.getElementById('costForm');
    const formData = new FormData(form);
    const newRowData = {};

    // Collect all form field values
    formData.forEach((value, key) => {
        if (key === 'operation') {
            // Handle multiple selections for operation
            if (!newRowData[key]) newRowData[key] = [];
            newRowData[key].push(value);
        } else {
            newRowData[key] = value;
        }
    });

    // Convert operation array to comma-separated string
    if (newRowData['operation']) {
        newRowData['operation'] = newRowData['operation'].join(', ');
    }

    // Define all possible headers (form field names)
    const allHeaders = Array.from(form.elements)
        .filter(el => el.name && el.name !== 'operation') // Exclude empty names and handle operation separately
        .map(el => el.name)
        .concat(['operation'])
        .filter((v, i, a) => a.indexOf(v) === i); // Remove duplicates

    // If no headers exist (blank sheet), use form field names
    if (excelData.headers.length === 0) {
        excelData.headers = allHeaders;
    }

    // Ensure new row matches header order, filling missing fields with empty strings
    const newRow = excelData.headers.map(header => newRowData[header] || '');

    // Append the new row to existing data
    excelData.rows.push(newRow);

    // Create worksheet data: headers + rows
    const wsData = [excelData.headers, ...excelData.rows];

    // Create worksheet
    const ws = XLSX.utils.aoa_to_sheet(wsData);

    // Create workbook and add worksheet
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Cost Estimation');

    // Download the updated file
    XLSX.writeFile(wb, uploadedFileName);
}

// Initially hide fields on page load
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