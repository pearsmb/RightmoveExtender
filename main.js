/**
 * Collection of obfuscated HTML classnames used by rightmove.co.uk.
 */
const classNames = {
  /**
   * Target icon class.
   */
  icon: "_33FcKz0Izh9IdGj_vDDgmK",
  /**
   * Target <ul> parent classname.
   */
  ul: "_2f-e_tRT-PqO8w8MBRckcn",
  /**
   * Distance container classname.
   */
  distElements: "Hx6myckw6FR-gq2-nskGM",
  /**
   * Distance span container classname.
   */
  location: "cGDiWU3FlTjqSs-F1LwK4",
  /**
   * Location span classname.
   */
  distance: "_1ZY603T1ryTT3dMgGkM7Lg",
  /**
   * Distance span classname.
   */
  spanContainer: "mlEuHXZpfrrzJtwlRmwBe",
};

const createDistanceElementTemplate = (name, distance, imgSrc) =>
  `<li>
    <div class="${classNames.icon}">
        <svg role="img" data-testid="svg-nationalrail" aria-hidden="true"><use xlink:href="#nationalrail"></use></svg>
    </div>
    <div class="${classNames.distElements}">
        <div class="${classNames.spanContainer}">
            <span class="${classNames.location}">${name}</span>
            <span class="${classNames.distance}">${distance} miles</span>
        </div>
    </div>
  </li>`;

/**
 * Entry point for the application.
 */
const init = () => {
  const ul = document.getElementsByClassName(classNames.ul)[0];

  // If no matches, return early.
  if (ul.length === 0) return;


  // Fetch the tokens then perform the search.
  chrome.storage.sync.get({ queries: [] }, (items) => {
    executeQuerySearch(items.queries, ul);
  });


  
};

/**
 * Executes the queries.
 * @param {array} queries - list of queries to search for.
 */
const executeQuerySearch = (queries, ul) => {

  // define the HTML elements to be appended.
  let elements = [];
  // Creates the template for each query.
  queries.forEach((query) => {
    elements.push(createDistanceElementTemplate(query, round(getRandomArbitrary(0, 7)), ""));
  });

  // Appends the query template.
  elements.forEach((x) => ul.insertAdjacentHTML("beforeend", x));
};

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
}

const round = (num) => {
  return Math.round(num * 10) / 10;
}

init();
