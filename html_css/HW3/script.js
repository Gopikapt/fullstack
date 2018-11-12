/*function Read()
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
}*/

function Stud()
{
    var name=document.getElementById("getname").value;
    console.log(name);
    var rno=document.getElementById("getrno").value;
    console.log(rno);
    var sem=document.getElementById("getsem").value;
    console.log(sem);
    var clg=document.getElementById("getclg").value;
    console.log(clg);
    document.getElementById("nm").innerHTML=name;
    document.getElementById("rno").innerHTML=rno;
    document.getElementById("sem").innerHTML=sem;
    document.getElementById("clg").innerHTML=clg;
    var s1=document.getElementById("getsub1").value;
    console.log(s1);
    var s1m=document.getElementById("getm1").value;
    console.log(s1m);
    var s1t=document.getElementById("gett1").value
    console.log(s1t);
    var s2=document.getElementById("getsub2").value;
    console.log(s2);
    var s2m=document.getElementById("getm2").value;
    console.log(s2m);
    var s2t=document.getElementById("gett2").value
    console.log(s2t);
    var s3=document.getElementById("getsub3").value;
    console.log(s3);
    var s3m=document.getElementById("getm3").value;
    console.log(s3m);
    var s3t=document.getElementById("gett3").value
    console.log(s3t);
    var s4=document.getElementById("getsub4").value;
    console.log(s4);
    var s4m=document.getElementById("getm4").value;
    console.log(s4m);
    var s4t=document.getElementById("gett4").value;
    console.log(s4t);
    document.getElementById("Sub1").innerHTML=s1;
    document.getElementById("Sub2").innerHTML=s2;
    document.getElementById("Sub3").innerHTML=s3;
    document.getElementById("Sub4").innerHTML=s4;
    document.getElementById("M1").innerHTML=s1m;
    document.getElementById("T1").innerHTML=s1t;
    document.getElementById("M2").innerHTML=s2m;
    document.getElementById("T2").innerHTML=s2t;
    document.getElementById("M3").innerHTML=s3m;
    document.getElementById("T3").innerHTML=s3t;
    document.getElementById("M4").innerHTML=s4m;
    document.getElementById("T4").innerHTML=s4t;
var g1=(s1m*100)/s1t;
document.getElementById("G1").innerHTML=g1;
var g2=(s2m*100)/s2t;
document.getElementById("G2").innerHTML=g2;
var g3=(s3m*100)/s3t;
document.getElementById("G3").innerHTML=g3;
var g4=(s4m*100)/s4t;
document.getElementById("G4").innerHTML=g4;
if (g1>95)
{document.getElementById("G1").innerHTML="S";
}
else if((g1<=95)&&(g1>=90)){
    var a1=document.getElementById("G1").innerHTML="A+";}
else if((g1<=90)&&(g1>=85)){
    var a1=document.getElementById("G1").innerHTML="A";}
else if((g1<=85)&&(g1>=80)){
    var a1=document.getElementById("G1").innerHTML="B+";}
else if((g1<=80)&&(g1>=75)){
    var a1=document.getElementById("G1").innerHTML="B";}
else if((g1<=75)&&(g1>=70)){
    var a1=document.getElementById("G1").innerHTML="C+";}
else if((g1<=70)&&(g1>=65)){
    var a1=document.getElementById("G1").innerHTML="C";}
else if((g1<=65)&&(g1>=60)){
    var a1=document.getElementById("G1").innerHTML="D+";}
else if((g1<=60)&&(g1>=55)){
    var a1=document.getElementById("G1").innerHTML="D";}
else if(g1<55){
    var a1=document.getElementById("G1").innerHTML="F";
}
if (g2>95)
{var a2=document.getElementById("G2").innerHTML="S";
}
else if((g2<=95)&&(g2>=90)){
    var a2=document.getElementById("G2").innerHTML="A+";}
else if((g2<=90)&&(g2>=85)){
    var a2=document.getElementById("G2").innerHTML="A";}
else if((g2<=85)&&(g2>=80)){
    var a2=document.getElementById("G2").innerHTML="B+";}
else if((g2<=80)&&(g2>=75)){
    var a2=document.getElementById("G2").innerHTML="B";}
else if((g2<=75)&&(g2>=70)){
    var a2=document.getElementById("G2").innerHTML="C+";}
else if((g2<=70)&&(g2>=65)){
    var a2=document.getElementById("G2").innerHTML="C";}
else if((g2<=65)&&(g2>=60)){
    var a2=document.getElementById("G2").innerHTML="D+";}
else if((g2<=60)&&(g2>=55)){
    var a2=document.getElementById("G2").innerHTML="D";}
else if(g2<55){
    var a2=document.getElementById("G2").innerHTML="F";
}
if (g3>95)
{var a3=document.getElementById("G3").innerHTML="S";
}
else if((g3<=95)&&(g3>=90)){
    var a3=document.getElementById("G3").innerHTML="A+";}
else if((g3<=90)&&(g3>=85)){
    var a3=document.getElementById("G3").innerHTML="A";}
else if((g3<=85)&&(g3>=80)){
    var a3=document.getElementById("G3").innerHTML="B+";}
else if((g3<=80)&&(g3>=75)){
    var a3=document.getElementById("G3").innerHTML="B";}
else if((g3<=75)&&(g3>=70)){
    var a3=document.getElementById("G3").innerHTML="C+";}
else if((g3<=70)&&(g3>=65)){
    var a3=document.getElementById("G3").innerHTML="C";}
else if((g3<=65)&&(g3>=60)){
    var a3=document.getElementById("G3").innerHTML="D+";}
else if((g3<=60)&&(g3>=55)){
    var a3=document.getElementById("G3").innerHTML="D";}
else if(g3<55){
    var a3=document.getElementById("G3").innerHTML="F";
}
if (g4>95)
{var a4=document.getElementById("G4").innerHTML="S";
}
else if((g4<=95)&&(g4>=90)){
    var a4=document.getElementById("G4").innerHTML="A+";}
else if((g4<=90)&&(g4>=85)){
    var a4=document.getElementById("G4").innerHTML="A";}
else if((g4<=85)&&(g4>=80)){
    var a4=document.getElementById("G4").innerHTML="B+";}
else if((g4<=80)&&(g4>=75)){
    var a4=document.getElementById("G4").innerHTML="B";}
else if((g4<=75)&&(g4>=70)){
    var a4=document.getElementById("G4").innerHTML="C+";}
else if((g4<=70)&&(g4>=65)){
    var a4=document.getElementById("G4").innerHTML="C";}
else if((g4<=65)&&(g4>=60)){
    var a4=document.getElementById("G4").innerHTML="D+";}
else if((g4<=60)&&(g4>=55)){
    var a4=document.getElementById("G4").innerHTML="D";}
else if(g4<55){
    var a4=document.getElementById("G4").innerHTML="F";
}
if((a1=="F")||(a2=="F")||(a3=="F")||(a4=="F"))
{
    document.getElementById("G").innerHTML="Failed";   
}
else{
    document.getElementById("G").innerHTML="Passed";
}
}