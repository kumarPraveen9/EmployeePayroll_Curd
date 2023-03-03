$(document).ready(function () {
    let id = localStorage.getItem("id");
    console.log(id);

    $.ajax({
        url: "http://localhost:3000/employees/" + id,
        type: "GET",
        success: function (response) {
            console.log(response);
            console.log(response.profile);
           // ../assets/Ellipse1.png

           var name = response.profile;
           var toRemove = '../assets/';
           var gorge = name.replace(toRemove,'');
           var Npath = gorge.replace('.png','');
           console.log(Npath);

            document.getElementById("name").value = response.firstName;
            $('input[name="prof"][value="'+ Npath+'"]').prop('checked',true);
               
            $('input[name="gender"][value="'+ response.Gender+'"]').prop('checked',true);
            $('input[name="department"]').each(function(){
                $(this).prop('checked',response.department.includes($(this).val()));
            });
            document.getElementById("salary").value = response.Salary;
            document.getElementById("notes").value = response.Notes;
            var empStartDate = new Date(response.StartDate);
            
            $('#day').val(empStartDate.getDate());
            $('#year').val(empStartDate.getFullYear());
            console.log("=============="+empStartDate.getMonth());
            $('#month').val(empStartDate.getMonth());

           
            
            // document.getElementById("day").value = response.StartDate;
            // document.getElementById("month").value = response.empStartDate.getMonth();
             //document.getElementById("year").value = response.empStartDate.getYear();
            


            document.querySelector("input[type='radio'][name=prof]:checked").value = response.profile;
            document.querySelector("input[type='radio'][name=gender]:checked").value = response.Gender;
            var selectedValues = $('input[name="department"]:checked').map(function () {
                return $(this).val();
            }).get().join(', ');
            selectedValues = response.department;
           

            
            

        },
    });

});

function updateData() {
    let id = localStorage.getItem("id");
    console.log(id);
    var selectedValues = $('input[name="department"]:checked').map(function () {
        return $(this).val();
    }).get().join(', ');

    var day = $('#day').val();
    var month = $('#month').val();

    if(month==0)
    month='Jan';
    else if(month==1)
    month='Feb';
    else if(month==2)
    month='Mar';
    else if(month==3)
    month='Apr';
    else if(month==4)
    month='May';
    else if(month==5)
    month='Jun';
    else if(month==6)
    month='Jul';
    else if(month==7)
    month='Aug';
    else if(month==8)
    month='Sep';
    else if(month==9)
    month='Oct';
    else if(month==10)
    month='Nov';
    else if(month==11)
    month='Dec';

    
    var year = $('#year').val();
    //var empStartDate = new Date(year, month, day);
    let dta = {

        firstName: $('#name').val(),
        profile: "../assets/" + $('input[name="prof"]:checked').val() + ".png",  //radio
        Gender: $('input[name="gender"]:checked').val(),   //radio
        department: selectedValues,
        Salary: $('#salary').val(),   //seclect option
        StartDate: day+' '+month+' '+year,    //select option
        Notes: $('#notes').val()   //text area

    };
    console.log(id);
    $.ajax({
        url: "http://localhost:3000/employees/" + id,
        type: "PUT",
        data: dta,
        success: function (response) {
            console.log(response);
            window.location.href = "../pages/empDetails.html";

        },
    });
}

