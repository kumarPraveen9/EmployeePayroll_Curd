$(document).ready(function () {

  $.ajax({
    url: "http://localhost:3000/employees",
    type: "GET",

    success: function (result) {
      console.log(result);
      var innerHTML = "";
      let notesArray = result;
      console.log(notesArray);

      for (const note of notesArray) {
        console.log(note.id);
        var empStartDate = new Date(empStartDate);
        //  $('#img').attr('src', 'http://www.site.com/' + $(this).val() + '.jpg');<img src="../assets/ + ${note.profile} + .png" >
        //  'assets/images/{{wonder.id}}.jpg'
        innerHTML += `<tr class="UserDataRow">
                            <td class="ProfilePicColomn"><img src='${note.profile}' ></td>
                            <td class="UserDataText NameColomn wtt">${note.firstName}</td>
                            <td class="UserDataText GenderColomn">${note.Gender}</td>
                            <td class="DepartmentColomn">${note.department}</td>
                            <td class="UserDataText SalaryColomn">${note.Salary}</td>
                            <td class="UserDataText StartDateColomn">${note.StartDate}</td>
                            <td class="ActionsColomn"><img width="30" height="30" id="${note.id}" src="../assets/delete.png" alt="delete" onclick="remove(this)">&nbsp&nbsp
                            <img width="30" height="30" id="${note.id}" src="../assets/edit.png" alt="edit" onclick="update(this)"></td>
                            
                            </tr>`;
      }
      $("#employeeList").append(innerHTML);


    },
    error: function (error) {
      console.log(`Error ${error}`);
    },


  });
});

function remove(ctl) {
  let id = $(ctl).attr('id');
  $.ajax({

    url: 'http://localhost:3000/employees/' + id,
    method: 'DELETE',
    success: function () {
      alert('record has been deleted');
      $(ctl).parents("tr").remove();
    },
    error: function (error) {
      console.log(`Error ${error}`);
    },
  });
}


function update(ctl) {
  let id = $(ctl).attr('id');
  localStorage.setItem("id", id);
  window.location.href = "../pages/edit.html";
}


// function filterjson() {

//   var inr="";
//   inr=`<input type="text" id="txtEmployeeinput" onkeyup="filter_json();" value="one" />`
//   $("#Searchinput").append(inr);
// }

function filterjson() {
  $.ajax({
    url: "http://localhost:3000/employees",
    type: "GET",

    success: function (result) {
      console.log(result);
      var innerHTML = "";
      var dt = result;
      console.log(dt);
     
     
      var returnedData  = $.grep(dt, function (element,i) {
       
        return element.firstName.toLowerCase().indexOf($("#Searchinput").val().toLowerCase()) > -1 ;
      });

      console.log(returnedData);

      
    //  var outputstr = "<table style='border:solid 1px #000; border-collapse:collapse;' border='1' cellpadding='5'><thead><th>Brand</th><th>Gender</th></thead>";
    for (const note of returnedData ) {
        innerHTML += `<tr class="UserDataRow">
        <td class="ProfilePicColomn"><img src='${note.profile}' ></td>
        <td class="UserDataText NameColomn wtt">${note.firstName}</td>
        <td class="UserDataText GenderColomn">${note.Gender}</td>
        <td class="DepartmentColomn">${note.department}</td>
        <td class="UserDataText SalaryColomn">${note.Salary}</td>
        <td class="UserDataText StartDateColomn">${note.StartDate}</td>
        <td class="ActionsColomn"><img width="30" height="30" id="${note.id}" src="../assets/delete.png" alt="delete" onclick="remove(this)">&nbsp&nbsp
        <img width="30" height="30" id="${note.id}" src="../assets/edit.png" alt="edit" onclick="update(this)"></td>
        
        </tr>`;
      }
      console.log(innerHTML);
      $("#employeeList").html(innerHTML);

    },
    error: function (error) {
      console.log(`Error ${error}`);
    },


  });
}

