function Calculation() {
    var input = document.getElementById("Date").value;  
    var userinput = new Date (input);
    let formatted_date1 = (userinput.getMonth() + 1) + "/" + userinput.getDate() + "/" + userinput.getFullYear();  
    var DOB = new Date(formatted_date1);

    var current_datetime = new Date ()
    let formatted_date2 = (current_datetime.getMonth() + 1) + "/" + current_datetime.getDate() + "/" + current_datetime.getFullYear();
    var TD = new Date(formatted_date2);

    var oneday = 1000 * 60 * 60 * 24;
    var totalDays =Math.round(Math.abs(TD - DOB) / oneday ); 
    console.log(totalDays)

    var Years = totalDays /  365.242;
    var YearsInt = Math.floor(Years);
    

    var Months = ( Years - YearsInt) * 12;
    var MonthsInt = Math.floor(Months);

    var Days = (Months - MonthsInt) *365.242/12;
    var DaysInt = Math.floor(Days)

   
    document.getElementById('year').innerHTML =YearsInt + "  Years";  
    document.getElementById('Month').innerHTML =MonthsInt + "   Months";
    document.getElementById('days').innerHTML =DaysInt + "  Days"; 
    document.getElementById('Summary').innerHTML ="This Feature will be avilable on Next update!";

 
}


