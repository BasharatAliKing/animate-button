var hotel=document.getElementById("hotel");
      var bd=document.getElementById("bd");
      var forms =document.getElementById("forms");
      var data=document.getElementById("Data");
     var submit=document.getElementById("submit");
      data.remove();
       
      submit.addEventListener("click",clickfunc);

      function clickfunc(e){
        e.preventDefault();
        var name=document.getElementById("name").value;
        var id=document.getElementById("id").value;
        var date=document.getElementById("date").value;
        var person=document.getElementById("person").value;
        var days=document.getElementById("days").value;
        var advamount=document.getElementById("amount").value;
        var suiteroom=document.getElementById("suite-room");
        var deluxroom=document.getElementById("delux-room");
        var ac=document.getElementById("ac");
        var locker=document.getElementById("locker");
       
        forms.remove();
        bd.appendChild(data);
        //console.log(name);
        document.getElementById("paste-name").innerHTML=name;
        document.getElementById("paste-id").innerHTML=id;
        document.getElementById("paste-date").innerHTML=date;
        document.getElementById("paste-person").innerHTML=person;
        document.getElementById("paste-days").innerHTML=days;
        document.getElementById("advance-amount").innerHTML=advamount;
       
       
        if(person>2){
          var per=1000*(person-2);
          console.log(per);
          if(deluxroom.checked){
            if(ac.checked){
              document.getElementById("paste-deluxprice").innerHTML=`Delux room total Amount : ${2500*days} `;
             document.getElementById("paste-amenitie").innerHTML="Amenities: A/C";
            // document.getElementById("incrementaftertwo").innerHTML=per;
             document.getElementById("total-amount").innerHTML=(2500*days+1000+per);
             var totalamount=(2500*days+1000+per)-advamount;
              document.getElementById("paste-amount").innerHTML=totalamount;
            }else if(locker.checked){
              document.getElementById("paste-deluxprice").innerHTML=`Delux room total Amount : ${2500*days} `;
             document.getElementById("paste-amenitie").innerHTML="Amenities: Locker";
            // document.getElementById("incrementaftertwo").innerHTML=per;
             document.getElementById("total-amount").innerHTML=(2500*days+300+per);
             var totalamount=(2500*days+300+per)-advamount;
              document.getElementById("paste-amount").innerHTML=totalamount;
            }
            else if((ac.checked )&& (locker.checked)){
              document.getElementById("paste-deluxprice").innerHTML=`Delux room total Amount : ${2500*days} `;
             document.getElementById("paste-amenitie").innerHTML="Amenities: A/C & Locker";
            // document.getElementById("incrementaftertwo").innerHTML=per;
             document.getElementById("total-amount").innerHTML=(2500*days+1300+per);
             var totalamount=(2500*days+1300+per)-advamount;
              document.getElementById("paste-amount").innerHTML=totalamount;
            }
            else{
              document.getElementById("paste-deluxprice").innerHTML=`Delux room total Amount : ${2500*days} `;
             document.getElementById("paste-amenitie").innerHTML="Amenities: You don't Select Amenitie.";
            // document.getElementById("incrementaftertwo").innerHTML=per;
             document.getElementById("total-amount").innerHTML=(2500*days+per);
             var totalamount=(2500*days+per)-advamount;
              document.getElementById("paste-amount").innerHTML=totalamount;
            }
            }
            // Suite room starts here...
            else if(suiteroom.checked){
            if(ac.checked){
             document.getElementById("paste-deluxprice").innerHTML=`Suite room total Amount: ${4000*days}`;
             document.getElementById("paste-amenitie").innerHTML="Amenties: A/C";
            // document.getElementById("incrementaftertwo").innerHTML=per;
             document.getElementById("total-amount").innerHTML=((4000*days)+1000+per);
             var totalamount=(4000*days+1000+per)-advamount;
              document.getElementById("paste-amount").innerHTML=totalamount;
            }else if(locker.checked){
              document.getElementById("paste-deluxprice").innerHTML=`Suite room total Amount: ${4000*days}`;
             document.getElementById("paste-amenitie").innerHTML="Amenities: Locker";
            // document.getElementById("incrementaftertwo").innerHTML=per;
             document.getElementById("total-amount").innerHTML=(4000*days+300+per);
             var totalamount=(4000*days+300+per)-advamount;
              document.getElementById("paste-amount").innerHTML=totalamount;
            }
            else if((ac.checked ) && (locker.checked)){
              document.getElementById("paste-deluxprice").innerHTML=`Suite room total Amount: ${4000*days}`;
             document.getElementById("paste-amenitie").innerHTML="Amenities: A/C & Locker";
            // document.getElementById("incrementaftertwo").innerHTML=per;
             document.getElementById("total-amount").innerHTML=(4000*days+1300+per);
             var totalamount=(4000*days+1300+per)-advamount;
              document.getElementById("paste-amount").innerHTML=totalamount;
            }
            else{
              document.getElementById("paste-deluxprice").innerHTML=`Suite room total Amount: ${4000*days}`;
             document.getElementById("paste-amenitie").innerHTML="Amenities: You don't select Amentie.";
            // document.getElementById("incrementaftertwo").innerHTML=per;
             document.getElementById("total-amount").innerHTML=(4000*days+per);
             var totalamount=(4000*days+per)-advamount;
              document.getElementById("paste-amount").innerHTML=totalamount;
            }
            }
            else{
             document.getElementById("paste-deluxprice").innerHTML="Please Select Room You Want!"
             document.getElementById("total-amount").innerHTML=0;
             var totalamount=0;
              document.getElementById("paste-amount").innerHTML=totalamount;
            }
        }
        else{
         
          if(deluxroom.checked){
            if(ac.checked){
             document.getElementById("paste-deluxprice").innerHTML=`Delux room price : ${2500*days} `;
             document.getElementById("paste-amenitie").innerHTML="Amenities: A/C";
             document.getElementById("total-amount").innerHTML=(2500*days+1000);
             var totalamount=(2500*days+1000)-advamount;
              document.getElementById("paste-amount").innerHTML=totalamount;
            }else if(locker.checked){
              document.getElementById("paste-deluxprice").innerHTML=`Delux room price : ${2500*days} `;
             document.getElementById("paste-amenitie").innerHTML="Amenities: Locker";
             document.getElementById("total-amount").innerHTML=(2500*days+300);
             var totalamount=(2500*days)+300-advamount;
              document.getElementById("paste-amount").innerHTML=totalamount;
            }
            else if((ac.checked )&& (locker.checked)){
              document.getElementById("paste-deluxprice").innerHTML=`Delux room price : ${2500*days} `;
             document.getElementById("paste-amenitie").innerHTML="Amenities: A/C & Locker";
             document.getElementById("total-amount").innerHTML=(2500+1300);
             var totalamount=(2500)+1300-advamount;
              document.getElementById("paste-amount").innerHTML=totalamount;
            }
            else{
            document.getElementById("paste-deluxprice").innerHTML=`Delux room price : ${2500*days} `;
             document.getElementById("paste-amenitie").innerHTML="You Don't Select Amenitie!";
             document.getElementById("total-amount").innerHTML=(2500);
             var totalamount=(2500)-advamount;
              document.getElementById("paste-amount").innerHTML=totalamount;
            }
            }
            // Suite room starts here...
            else if(suiteroom.checked){
            if(ac.checked){
              document.getElementById("paste-deluxprice").innerHTML=`Suite room total Amount: ${4000*days}`;
             document.getElementById("paste-amenitie").innerHTML="Amenities: A/C";
             document.getElementById("total-amount").innerHTML=(4000*days+1000);
             var totalamount=(4000*days)+1000-advamount;
              document.getElementById("paste-amount").innerHTML=totalamount;
            }else if(locker.checked){
              document.getElementById("paste-deluxprice").innerHTML=`Suite room total Amount: ${4000*days}`;
             document.getElementById("paste-amenitie").innerHTML="Locker: Locker";
             document.getElementById("total-amount").innerHTML=(4000*days+300);
             var totalamount=(4000*days)+300-advamount;
              document.getElementById("paste-amount").innerHTML=totalamount;
            }
            else if((ac.checked ) && (locker.checked)){
              document.getElementById("paste-deluxprice").innerHTML=`Suite room total Amount: ${4000*days}`;
             document.getElementById("paste-amenitie").innerHTML="Amenities: A/C & Locker";
             document.getElementById("total-amount").innerHTML=(4000*days+1300);
             var totalamount=(4000*days)+1300-advamount;
              document.getElementById("paste-amount").innerHTML=totalamount;
            }
            else{
              document.getElementById("paste-deluxprice").innerHTML=`Suite room total Amount: ${4000*days}`;
             document.getElementById("paste-amenitie").innerHTML="Amenities: You don't select Amenite.";
             document.getElementById("total-amount").innerHTML=(4000*days);
             var totalamount=(4000*days)-advamount;
              document.getElementById("paste-amount").innerHTML=totalamount;
            }
            }
            else{
             document.getElementById("paste-deluxprice").innerHTML="Please Select Room You Want!"
             document.getElementById("total-amount").innerHTML=0;
             var totalamount=0;
              document.getElementById("paste-amount").innerHTML=totalamount;
            }
        }
        
         
      
    }