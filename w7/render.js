const TBL = document.getElementById("tab-data");

let table;

function renderTblHeading() {
    if (typeof table === "undefined") { // this is so that a new heading will only be added if there isn't an existing table already
        table = document.createElement("table");
        const thead = document.createElement("thead");
        const tr = document.createElement("tr");
        const headingTextArr = ["Name", "Household", "Housesize", "Footprint", "Actions"];
        headingTextArr.forEach(function(text){
        const th = document.createElement("th"); 
        th.textContent = text;
        tr.appendChild(th);
        });
        thead.appendChild(tr);
        table.appendChild(thead);
    }
    return table;
}

function renderTbl(data) {
    const table = renderTblHeading("table");
    let tbody = table.querySelector('tbody'); 
    if (!tbody) { // this is to make a tbody if there isn't one already, so it doesn't add another tbody again to the table if there's one already
        tbody = document.createElement("tbody");
        table.appendChild(tbody);
    }
    tbody.innerHTML = ""; // this is to clear out the tbody so the next time the user submits, the previous info doesn't show up again
    data.forEach(function(info) { // to make a row for each cfpData object array
        const tr = document.createElement("tr");
        const bodyTextArr = [info.firstName, info.myPeople, info.mySize, info.myTotal]; 
        bodyTextArr.forEach(function(text) { // to add a td for each item in the bodyTextArr
            const td = document.createElement("td");
            td.textContent = text;
            tr.appendChild(td);
        });
        const td = document.createElement("td");
        const btnEdit = document.createElement("button");
        const btnDel = document.createElement("button");
        btnEdit.textContent = "Edit";
        btnDel.textContent = "Del";
        td.appendChild(btnEdit);
        td.appendChild(btnDel);
        tr.appendChild(td);
        tbody.appendChild(tr);
    });
    TBL.appendChild(table);
}

export {renderTbl};

// I don't really have questions about modules. It's pretty simple and very helpful as it can serve as a "branch" from the main javascript to clean up code