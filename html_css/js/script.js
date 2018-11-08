function Read()
{
    var name= document.getElementById("getname").value;
    console.log(name);
    var rno=document.getElementById("getrno").value;
    console.log(rno);
    var admn=document.getElementById("getadmn").value;
    console.log(admn);
    var age=document.getElementById("getage").value;
    console.log(age);
    if(age>=18)
    {
      alert("Eligible");
        console.log("Eligible");
    }
    else{
    console.log("Not eligible");
    alert("Not eligible");
    }
}
