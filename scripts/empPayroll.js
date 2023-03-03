const NAME_REGEX = /^[A-Z]{1}[a-zA-Z]{2,}$/;

function onFormSubmit()
{
    
    
    var text =document.RegForm.Name.value;
    var prof =document.RegForm.profile.value;
    var gender =document.RegForm.gender.value;
    var notes =document.RegForm.Notes.value;
                           
   
    if (text==""||NAME_REGEX.test(text)==false) {
        window.alert("Please enter your name properly.");
        document.getElementById("name").focus();
       
        return false;
    }
   
    if (prof=="") {
        window.alert("select atleast one profile.");
        return false;
    }
    if (gender=="") {
        window.alert("select atleast one gender.");
        return false;
    }
    
    var e = document.getElementById("salary");
    var strUser = e.options[e.selectedIndex].value;
    if (strUser == -1) {
        window.alert("Give Salary amount.");
        return false;
    }
    if (notes=="") {
        window.alert("Enter some note.");
        document.getElementById("notes").focus();
        return false;
    }
    var department = [];
    var checkboxes = document.getElementsByName("department");
    for(var i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            // Populate department array with selected values
            department.push(checkboxes[i].value);
        }
    } 
    var dataPreview = "You've entered the following details: \n" +"{\n"+
                          "Name: " + text + "\n" +
                          "Profile: " + prof + "\n" +
                          "Gender: " + gender + "\n" +
                          "Salary: " + strUser + "\n" +
                          "notes: " + notes + "\n";
                          
        if(department.length) {
            dataPreview += "departments: " + department.join(", ")+"\n}";
        }
        alert(dataPreview);
    return true;
}


  
   
   

   
        $("#submitButton").click(function() {
            var selectedValues = $('input[name="department"]:checked').map( function () { 
                return $(this).val(); 
            }).get().join(', ');
            
             var day = $('#day').val();
             var month = $('#month').val();
             var year = $('#year').val();
            // var empStartDate = new Date(year,month,day);
           
        let dta={
            firstName:$('#name').val(),      
            profile:"../assets/"+$('input[name="prof"]:checked').val()+".png",  //radio
            Gender: $('input[name="gender"]:checked').val(),   //radio
            department:selectedValues,
            Salary:$('#salary').val(),   //seclect option
            StartDate:day+' '+month+' '+year,    //select option
            Notes:$('#notes').val()   //text area

        };

        console.log(dta);
        $.ajax({
            url:"http://localhost:3000/employees",
            type:"POST",
            data:dta,
            success:function(result){
              console.log(result);
              window.location.href='../pages/empDetails.html';
            },
        });
    });

