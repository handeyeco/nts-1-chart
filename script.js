const listMount = document.getElementById("list-mount");
const searchInput = document.getElementById("search-input");
const filterCount = document.getElementById("filter-count");

function filterList(search = "") {
  return controls
    .filter((control) =>
      JSON.stringify(control).toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));
}

function renderList(search) {
  const filtered = filterList(search);

  if (filtered.length === 0) {
    filterCount.innerHTML = `(Showing 0 of ${controls.length} parameters)`;
    listMount.innerHTML = `<p class="nothing-found">Nothing found for that search.</p>`;
    return;
  }

  let nextHTML = "";
  filtered.forEach((c) => {
    const desc = c.desc ? `<p class="list-entry__desc">${c.desc}</p>` : "";

    const values = c.values
      ? `<p class="list-entry__values"><b>Values:</b> ${c.values}</p>`
      : "";

    const cc = c.cc
      ? `<p class="list-entry__cc"><b>MIDI CC:</b> ${c.cc}</p>`
      : "";

    nextHTML += `
        <div class="list-entry">
            <h2 class="list-entry__header">${c.name}</h2>
            ${desc + values}
            <p class="list-entry__location"><b>Location:</b> ${c.location}</p>
            ${cc}
        </div>
    `;
  });

  if (filtered.length === controls.length) {
    filterCount.innerHTML = "";
  } else {
    filterCount.innerHTML = `(Showing ${filtered.length} of ${controls.length} parameters)`;
  }

  listMount.innerHTML = nextHTML;
}

searchInput.addEventListener("input", (e) => renderList(e.target.value));

renderList("");
