const iconClassName = "_33FcKz0Izh9IdGj_vDDgmK";
const ulClassName = "_2f-e_tRT-PqO8w8MBRckcn";
const distanceElementsClassName = "Hx6myckw6FR-gq2-nskGM";
const locationClassName = "cGDiWU3FlTjqSs-F1LwK4";
const distanceClassName = "_1ZY603T1ryTT3dMgGkM7Lg";
const spanContainerClassName = "mlEuHXZpfrrzJtwlRmwBe";


const createDistanceElementTemplate = (name, distance, imgSrc) => 
    `<li>
        <div class="${iconClassName}">
            <svg role="img" data-testid="svg-nationalrail" aria-hidden="true"><use xlink:href="#nationalrail"></use></svg>
        </div>
        <div class="${distanceElementsClassName}">
            <div class="${spanContainerClassName}">
                <span class="${locationClassName}">${name}</span>
                <span class="${distanceClassName}">${distance} miles</span>
            </div>
        </div>
    </li>`;

const init = () => {
  
  const ul = document.getElementsByClassName(ulClassName)[0];

  // If no matches, return early.
  if (ul.length === 0) return;


  let testElements = [
    createDistanceElementTemplate("Eloons Gaystation", "0.3", ""),
    createDistanceElementTemplate("Denbigh Lidl", "0.5", ""),
    createDistanceElementTemplate("Pet Shop", "0.1", ""),
    createDistanceElementTemplate("Rhyl", "2.9", ""),
  ];

  testElements.forEach(x => ul.insertAdjacentHTML("beforeend", x))
};

init();








// import {default as classes} from "RightmoveClassNames.js";

// const createDistanceElementTemplate = (name, distance, imgSrc) => 
//     `<li>
//         <div class="${classes.icon}">
//             <svg role="img" data-testid="svg-nationalrail" aria-hidden="true"><use xlink:href="#nationalrail"></use></svg>
//         </div>
//         <div class="${classes.distContainer}">
//             <div class="${classes.spanContainer}">
//                 <span class="${classes.locSpan}">${name}</span>
//                 <span class="${classes.distSpan}">${distance} miles</span>
//             </div>
//         </div>
//     </li>`;

// const init = () => {
  
//   const ul = document.getElementsByClassName(classes.ul)[0];

//   // If no matches, return early.
//   if (ul.length === 0) return;


//   let testElements = [
//     createDistanceElementTemplate("Eloons Gaystation", "0.3", ""),
//     createDistanceElementTemplate("Denbigh Lidl", "0.5", ""),
//     createDistanceElementTemplate("Pet Shop", "0.1", ""),
//     createDistanceElementTemplate("Rhyl", "2.9", ""),
//   ];

//   testElements.forEach(x => ul.insertAdjacentHTML("beforeend", x))
// };

// init();






