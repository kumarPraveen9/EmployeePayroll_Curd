$(document).ready(function(){
    let id=localStorage.getItem("id");
    console.log(id);
    
    $.ajax({
        url:"http://localhost:3000/employees/"+id,
        type:"GET",
        success:function(response)
        {
            console.log(response);
            $('#name').val()=response.firstName;
            $('input[name="prof"]:checked').val()=response.profile;
            $('input[name="gender"]:checked').val()=response.Gender;
            var selectedValues = $('input[name="department"]:checked').map( function () { 
                return $(this).val(); 
            }).get().join(', ');
            selectedValues=response.department;
            $('#salary').val()=response.Salary;

            $('#day').val()=response.empStartDate.day;
            $('#month').val()=response.empStartDate.month;
            $('#year').val()=response.empStartDate.year;
           $('#notes').val()=response.Notes;
            
        },
    });
    
    });
    
    function updateData()
    {
        let id=localStorage.getItem("id");
        console.log(id);
        var selectedValues = $('input[name="department"]:checked').map( function () { 
            return $(this).val(); 
        }).get().join(', ');
        
         var day = $('#day').val();
         var month = $('#month').val();
         var year = $('#year').val();
         var empStartDate = new Date(year,month,day);
        let dta={
               
            firstName:$('#name').val(),      
            profile:"../assets/"+$('input[name="prof"]:checked').val()+".png",  //radio
            Gender: $('input[name="gender"]:checked').val(),   //radio
            department:selectedValues,
            Salary:$('#salary').val(),   //seclect option
            StartDate:empStartDate,    //select option
            Notes:$('#notes').val()   //text area

        };
        console.log(id);
        $.ajax({
            url:"http://localhost:3000/employees/" + id,
                type:"PUT",
                data:dta,
                success:function(response){
                  console.log(response);
                  window.location.href="../pages/empDetails.html";
                  
                },
        });
    }