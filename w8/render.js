const TBL = document.getElementById("tab-data");

let table;

function renderTblHeading() {
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

function renderTblBtn (index, data) {
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    btnDel.addEventListener('click', function(e) {
        console.log("Hello from inside the delete button");
        console.log(e);
        data.splice(index, 1);
        renderTbl(data);
    });
    btnEdit.addEventListener("click", function(e){
        const rowData = data[index];
        document.getElementById("firstname").value = rowData.firstName;
        document.getElementById("lastname").value = rowData.lastName;
        document.getElementById("numberofpeople").value = rowData.myPeople; 
        document.getElementById("typeofhome").value = rowData.mySize; 
        data.splice(index, 1);
        renderTbl(data);
    })
    return td;
}

function renderTblBody(data) {  
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
        const td = renderTblBtn(index, data);
        tr.appendChild(td);
        tbody.appendChild(tr);
    });
    return tbody;
}

function renderTbl(data) {
    const table = renderTblHeading();
    const tbody = renderTblBody(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
    if (tbody.children.length === 0) {
        table.remove();
    }
}

export {renderTbl};

// I don't really have questions about modules. It's pretty simple and very helpful as it can serve as a "branch" from the main javascript to clean up code