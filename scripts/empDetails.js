$(document).ready(function(){
        
        $.ajax({
            url:"http://localhost:3000/employees",
            type:"GET",
          
            success:function(result){
              console.log(result);
              var innerHTML="";
              let notesArray=result;
              console.log(notesArray);

              for(const note of notesArray){
                console.log(note.id);

              //  $('#img').attr('src', 'http://www.site.com/' + $(this).val() + '.jpg');<img src="../assets/ + ${note.profile} + .png" >
            //  'assets/images/{{wonder.id}}.jpg'
                innerHTML+=`<tr>
                            <td><img src='${note.profile}' ></td>
                            <td>${note.firstName}</td>
                            <td>${note.Gender}</td>
                            <td>${note.department}</td>
                            <td>${note.Salary}</td>
                            <td>${note.StartDate}</td>
                            <td><img width="40" height="50" id="${note.id}" src="../assets/delete.png" alt="delete" onclick="remove(this)">&nbsp&nbsp
                            <img width="40" height="50" id="${note.id}" src="../assets/edit.png" alt="edit" onclick="update(this)"></td>
                            
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
      
      url: 'http://localhost:3000/employees/'+id,
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


function update(ctl){
  let id = $(ctl).attr('id');
  localStorage.setItem("id",id);
  window.location.href="../pages/edit.html";
}