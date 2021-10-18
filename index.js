function Calculation() {
    var input = document.getElementById("Date").value;  

    if (input==0){
        document.getElementById('Invalid').style.display = "block";
    }else {   
    var userinput = new Date (input);
    let formatted_date1 = (userinput.getMonth() + 1) + "/" + userinput.getDate() + "/" + userinput.getFullYear();  
    var DOB = new Date(formatted_date1);

    var current_datetime = new Date ()
    let formatted_date2 = (current_datetime.getMonth() + 1) + "/" + current_datetime.getDate() + "/" + current_datetime.getFullYear();
    var TD = new Date(formatted_date2);

    var oneday = 1000 * 60 * 60 * 24;
    var totalDays =Math.round(Math.abs(TD - DOB) / oneday ); 

    var Years = totalDays /  365.242;
    var YearsInt = Math.floor(Years);
    

    var Months = ( Years - YearsInt) * 12;
    var MonthsInt = Math.floor(Months);

    var Days = (Months - MonthsInt) *365.242/12 + 1;
    var DaysInt = Math.floor(Days)

    var TotalHours = totalDays * 24;
    var TotalMins = TotalHours * 60;


    function Next_birthday(){
        
        var Next_birthday =  ((YearsInt+1) * 365.242)-(totalDays);
        var Next_birthdayInt = Math.floor(Next_birthday)
        return Next_birthdayInt
        
    }

    document.getElementById('year').innerHTML =YearsInt + "  Years";  
    document.getElementById('Month').innerHTML =MonthsInt + "   Months";
    document.getElementById('days').innerHTML =DaysInt + "  Days"; 
    document.getElementById('ResultTag').innerHTML = "Result";
    document.getElementById('Invalid').style.display = "none";
    document.getElementById('year').style.display = "block";
    document.getElementById('Month').style.display = "block";
    document.getElementById('days').style.display = "block";
    document.getElementById('NextBirth').innerHTML = Next_birthday();
    document.getElementById('TotalDays').innerHTML = totalDays;
    document.getElementById("TotalHours").innerHTML = TotalHours;
    document.getElementById('TotalMins').innerHTML = TotalMins;


    }
    
   
    
}   

function Loading() {
    document.getElementById("overlay").style.display = "block";
    setTimeout(appeardiv,1000);
    function appeardiv() {
              document.getElementById('overlay').style.display= "none";
          }
  }