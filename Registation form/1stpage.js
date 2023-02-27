/*let fname,lname,d-type,m-type,y-type,s-email,f-1st-name,f-l-name,m-!1st-name,m-l-name;*/


let fname,lname,dtype,mtype,ytype,semail,ffname,flname,mfname,mlname,male,female,other,nation,address,city,country,Tnumber1,Tnumber2,but;

fname=document.getElementById("fname").value;
lname=document.getElementById("lname").value;
localStorage.setItem("fname",fname);
localStorage.setItem("lname",lname);

dtype=document.getElementById("dtype").value;
mtype=document.getElementById("mtype").value;
ytype=document.getElementById("ytype").value;
localStorage.setItem("dtype",dtype);
localStorage.setItem("mtype",mtype);
localStorage.setItem("ytype",ytype);

semail=document.getElementById("semail").value;
localStorage.setItem("semail",semail);

ffname=document.getElementById("ffname").value;
flname=document.getElementById("flname").value;
localStorage.setItem("ffname",ffname);
localStorage.setItem("flname",flname);

mfname=document.getElementById("mfname").value;
mlname=document.getElementById("mlname").value;
localStorage.setItem("mfname",mfname);
localStorage.setItem("mlname",mlname);

male=document.getElementById("male").value;
localStorage.setItem("male",male);

female=document.getElementById("female").value;
localStorage.setItem("female",female);

other=document.getElementById("other").value;
localStorage.setItem("other",other);

nation=document.getElementById("nation").value;
localStorage.setItem("nation",nation);

address=document.getElementById("address").value;
localStorage.setItem("address",address);

city=document.getElementById("city").value;
localStorage.setItem("city",city);


country=document.getElementById("country").value;
localStorage.setItem("country",country);


Tnumber1=document.getElementById("Tnumber1").value;
localStorage.setItem("Tnumber1",Tnumber1);

Tnumber2=document.getElementById("Tnumber2").value;
localStorage.setItem("Tnumber2",Tnumber2);





