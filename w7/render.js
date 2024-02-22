const TBL = document.getElementById("tab-data");

function renderTblHeading() {
    const table = document.createElement("table");
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
    return table;
}

function renderTbl(data){
    const table = renderTblHeading("table");
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    const bodyTextArr = ["Francis", 4, "Medium", 15];
    bodyTextArr.forEach(function(text){
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
    table.appendChild(tbody);
    TBL.appendChild(table);
}

export {renderTbl};

// I don't really have questions about modules. It's pretty simple and very helpful as it can serve as a "branch" from the main javascript to clean up code