  
  
  
      document.querySelector("form").addEventListener("submit",login)
      var login=JSON.parse(localStorage.getItem("userInfo"))||[];
    
      
      function login(event){
        event.preventDefault();
        var email=document.querySelector("#email").value
        var password=document.querySelector("#password").value
         
          if(login.length>0){
              for(i=0;i<login.length;i++){
              console.log(login[i].email,email,login[i].password,password)
              if(login[i].email==email && login[i].password==password){
                  alert("Login Successfully Done");
                  window.location.href="index.html"
                  break;
              }else{
                  if((login.length-1)==i){
                      alert("Check your email or password before register");
                  }
              }
          }
          }else{
              alert("Check your email or password before register");
          }
  
      }