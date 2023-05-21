/**
 *
 * @param {string} query - the query parameter
 * @returns  HTML input query template.
 */
const createQueryTemplate = (query = "") =>
  `<input type="text" name="query" value="${query}" placeholder="search query...">`;
const insertQueryTemplate = (template) =>
  document.querySelector(".query-container").insertAdjacentHTML("beforeend", template);

const buildQueryArray = () => {
  var queries = [];

  saveOptions(queries);
};

// Saves options to chrome.storage
const saveOptions = (queries) => {
  chrome.storage.sync.set(
    {
      queries: queries,
    },
    () => {
      // Update status to let user know options were saved.
      const status = document.getElementById("status");
      status.textContent = "Options saved.";
      setTimeout(() => {
        status.textContent = "";
      }, 750);
    }
  );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
  chrome.storage.sync.get(
    {
      queries: [],
    },
    (items) => {
      buildOptionsDisplay(items.queries);
    }
  );
};

/**
 * Builds up the query options from local storage on initial page load.
 * @param {array} queries - the query parameters.
 */
const buildOptionsDisplay = (queries) => {
  // for each query parameter, create and append the HTML element.
  queries.forEach((query) => {
    let template = createQueryTemplate(query);
    insertQueryTemplate(template);
  });
};

/**
 * Event Listener for adding a query.
 */
document.querySelector(".add-query").addEventListener("click", () => {
    let template = createQueryTemplate();
    insertQueryTemplate(template);
});

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("save").addEventListener("click", saveOptions);
