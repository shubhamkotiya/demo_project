 $(document).ready(function(){
  $("#userDataTable").hide();
  var nametxt,etxt,ptxt,cptxt ;
  $("#dummy").click(function(){
    $(".login").hide();
    $(".signup").hide();
    $("#userDataTable").show() ;
    $(".userDetails").hide();
    $("#userPost").hide();
  });

  $("#signup").click(function(){
    $(".login").hide();
    $(".signup").show();
    $("#userData").hide();
    $(".userDetails").hide();
    $("#userPost").hide();
  });

  $("#login").click(function(){
    $(".signup").hide();
    $(".login").show();
    $("#userDataTable").hide() ;
    $(".userDetails").hide();
    $("#userPost").hide();
  });
  var userLog=[];
  var userDataObj = {};
     ;
  $("#signupform").submit(function(){
    
    nametxt= $("#namebox").val();
    etxt= $("#emailbox").val();
    ptxt= $("#passwordbox").val();
    cptxt= $("#cpasswordbox").val();
   
    userDataObj['name1'] = nametxt;
    userDataObj['etxt1'] = etxt;
    userDataObj['ptxt1'] = ptxt;
    userDataObj['cptxt1'] = cptxt;
    userLog.push(userDataObj);

    var pswlen=ptxt.length ;
    if(pswlen<0){
    alert("characters count must be atleat 4");
    return false;
    }
    else{
    if(ptxt!==cptxt){
   alert("passsword not matched");
    return false;
    }
    else{
    var i;
    var num=false,character=false ;
    for(i=0; i<pswlen; ++i)
    {
    var n=ptxt.charAt(i)
    if(n>=0 && n<=9 && num==false){
    num=true ;
    //console.log("num= "+n+" "+num);
    }
    if((n>='A' && n<='Z')||(n>='a' && n<='z') && character==false){
    character=true ; //console.log("char= "+n+" "+character);
    }
    if(num== true && character==true)
    break ;
    }
    if(num==false){
     alert("password must contain digit");
     return false;
    }
    else if(character==false){
     alert("password must contain letter");
    return false;
    }
    else{
    alert("REGISTERD");
    $(".signup").hide();
    $("#userDataTable").show() ;
    var markup = "<tr><td>"+nametxt+"</td><td>" + etxt + "</td><td>" + ptxt+ "</td></tr>";
    $("table tbody").append(markup);
    }
    }
    }
    return false;
  });  
  $("#log").click(function(){
    var emaillog=$("#emaillog").val();
    var password=$("#passlog").val();
//emaillog==etxt && password==ptxt
    var loop=0 ;
    for(var i=0; i<userLog.length; i++){
      if(userLog[i].etxt1==emaillog && userLog[i].ptxt1==password){
        alert("SUCCESFULLY LOGGED IN");
        $("#signIn").hide();
        $(".login").hide();
        $("#user_name").text(emaillog);
        $(".userDetails").show();
        $("#userPost").hide();
        $("#n1").text(nametxt);
        $("#n2").text(emaillog);
        break;
      }
      loop++ ;
  }
  console.log(loop);
  if(loop==userLog.length){
    alert("wrong input");
  }
  return false ;
  });
 
  $("#post").click(function(){
    var data1= $("#textArea").val();

    data2 = $("#usertxt").html();
    $("#usertxt").html(data2+"<br />"+data1);
    $("#userPost").show();
  });
 });