var dt={
    "employees": [
      {
        "firstName": "Haryy",
        "profile": "../assets/Ellipse2.png",
        "Gender": "Female",
        "department": "Sales, Finance",
        "Salary": "40000",
        "StartDate": "1 Jan 2021",
        "Notes": "dvnkjmvnjxc,m",
        "id": 7
      },
      {
        "firstName": "Vinod",
        "profile": "../assets/Ellipse3.png",
        "Gender": "Male",
        "department": "HR, Sales",
        "Salary": "30000",
        "StartDate": "13 Jul 2017",
        "Notes": "vnmcv cx ,c ,cb ,",
        "id": 8
      }]};

      
   var res = $.grep(dt.employees, function (n, i) {
    return n.firstName.toLowerCase().indexOf($("#txtbrandinput").val().toLowerCase()) > -1;
});
var outputstr = "<table style='border:solid 1px #000; border-collapse:collapse;' border='1' cellpadding='5'><thead><th>Brand</th><th>Item</th></thead>";
$.each(res, function (i, n) {
    outputstr += "<tr><td>" + n.Brand + "</td><td>" + n.Item + "</td></tr>";
});
outputstr += "</table>";
$("#res").html(outputstr);


