import { FORM, TBL } from "./global.js";
import { saveLS } from "./storage.js";
import { cfpAvg } from "./average.js";

let table;

const renderTblHeading = () => {
    TBL.innerHTML = "";
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "Number of People", "Home Size", "Diet Type", "Diet Convenience", "Footprint", "Actions"];
    headingTextArr.forEach(text => {
        const th = document.createElement("th"); 
        th.textContent = text;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table;
}

const onUpdate = (index, data) => {
    data.splice(index, 1);
    saveLS(data);
    renderTbl(data);
}

const renderTblBtn = (...x) => {
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    btnDel.addEventListener('click', e => {
        onUpdate(x[1], x[2]);
    });
    btnEdit.addEventListener("click", e =>{
        FORM[1].value = x[0].first;
        FORM[2].value = x[0].last;
        FORM[3].value = x[0].houseMembers;
        FORM[4].value = x[0].houseSize;
        FORM[5].value = x[0].dietType;
        FORM[6].value = x[0].dietConvenience;
        onUpdate(x[1], x[2]);
    })
    return td;
}

const renderTblBody = (data) => {
    const tbody = document.createElement("tbody");
    data.forEach((obj, index) => {
        console.log(index);
        const tr = document.createElement("tr"); 
        const keys = ["first", "houseMembers", "houseSize", "dietType", "dietConvenience", "total"]
            keys.forEach(key => {
                const td = document.createElement("td");
                td.textContent = obj[key];
                tr.appendChild(td);
            })
        const td = renderTblBtn(obj, index, data);
        tr.appendChild(td);
        tbody.appendChild(tr);
    });
    return tbody;
}

const renderTbl = data => {
    TBL.innerHTML = "";
    if (data.length !== 0) {
        const table = renderTblHeading();
        const tbody = renderTblBody(data);
        table.appendChild(tbody);
        TBL.appendChild(table);
        addRow("tbody");
    }
}

const addRow = () => {
    let tableRef = TBL.querySelector("table");
    let newRow = tableRef.insertRow(-1);
    let newCell = newRow.insertCell(0);
    newCell.colSpan = 7;
    let newText = document.createTextNode(
      `Average Carbon Footprint: ${cfpAvg()}`
    );
    newCell.appendChild(newText);
  };

export {renderTbl};

// I don't really have questions about modules. It's pretty simple and very helpful as it can serve as a "branch" from the main javascript to clean up code