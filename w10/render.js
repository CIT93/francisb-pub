import { FORM, TBL } from "./global.js";
import { saveLS } from "./storage.js";

let table;

const renderTblHeading = function() {
    TBL.innerHTML = "";
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "Number of People", "Home Size", "Footprint", "Actions"];
    headingTextArr.forEach(function(text){
        const th = document.createElement("th"); 
        th.textContent = text;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table;
}

const onUpdate = function(index, data) {
    data.splice(index, 1);
    saveLS(data);
    renderTbl(data);
}

const renderTblBtn = function(obj, index, data) {
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    btnDel.addEventListener('click', function(e) {
        onUpdate(index, data);
    });
    btnEdit.addEventListener("click", function(e){
        FORM[1].value = obj.firstName;
        FORM[2].value = obj.lastName;
        FORM[3].value = obj.myPeople;
        FORM[4].value = obj.mySize;
        onUpdate(index, data);
    })
    return td;
}

const renderTblBody = function(data) {  
    const tbody = document.createElement("tbody");
    data.forEach(function(obj, index) {
        console.log(index);
        const tr = document.createElement("tr"); 
        for(const [key, value] of Object.entries(obj)){
            console.log(`key ${key} value ${value}`);
            if (key !== "lastName" && key !== "myPTS" && key !== "mySCR") {
                const td = document.createElement("td");
                td.textContent = value;
                tr.appendChild(td);
            }
        }
        const td = renderTblBtn(obj, index, data);
        tr.appendChild(td);
        tbody.appendChild(tr);
    });
    return tbody;
}

const renderTbl = function(data) {
    TBL.innerHTML = "";
    if (data.length !== 0) {
        const table = renderTblHeading();
        const tbody = renderTblBody(data);
        table.appendChild(tbody);
        TBL.appendChild(table);
    }
}

export {renderTbl};

// I don't really have questions about modules. It's pretty simple and very helpful as it can serve as a "branch" from the main javascript to clean up code