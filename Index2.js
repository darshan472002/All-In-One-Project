
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
      crossorigin="anonymous"
    
    
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js"
      integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk"
      crossorigin="anonymous"
   

      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js"
      integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK"
      crossorigin="anonymous"
  


      function getAndUpdate() {
        console.log("Updating List...");
        tit = document.getElementById("title").value;
        desc = document.getElementById("description").value;
        if (localStorage.getItem("itemsJSON") == null) {
          itemJSONArray = [];
          itemJSONArray.push([tit, desc]);
          localStorage.setItem("itemsJSON", JSON.stringify(itemJSONArray));
        } 
        else {
          itemJSONArray = localStorage.getItem("itemsJSON");
          itemJSONArray = JSON.parse(itemJSONArray);
          itemJSONArray.push([tit, desc]);
          localStorage.setItem("itemsJSON", JSON.stringify(itemJSONArray));
        }
        update();
      }
      function update() { 
        if (localStorage.getItem("itemsJSON") == null) {
          itemJSONArray = [];
          localStorage.setItem("itemsJSON", JSON.stringify(itemJSONArray));
        } 
        else {
          itemJSONArray = localStorage.getItem("itemsJSON");
          itemJSONArray = JSON.parse(itemJSONArray);
        }
        // Populate the table
        let tableBody = document.getElementById("tableBody");
        let str = "";
        itemJSONArray.forEach((element, index) => {
          str += `
            <tr>
              <th scope="row">${index + 1}</th>
              <td>${element[0]}</td>
              <td>${element[1]}</td>
              <td><button class="btn btn-sn btn-primary" onclick= "deleted(${index})">Delete</button></td>
            </tr>`;
        });
        tableBody.innerHTML = str;
      }
      add = document.getElementById("add");
      add.addEventListener("click", getAndUpdate);
      update();
      function deleted(itemIndex) {
        console.log("Delete", itemIndex);
        itemJSONArray = localStorage.getItem("itemsJSON");
        itemJSONArray = JSON.parse(itemJSONArray);
        // Delete itemIndex element from the array
        itemJSONArray.splice(itemIndex, 1);
        localStorage.setItem("itemsJSON", JSON.stringify(itemJSONArray));
        update();
      }
      function clearstorage(){
        if (confirm('Do you areally want to clear'))
        console.log('Clearing the Storage');
        localStorage.clear();
        update();
      }
