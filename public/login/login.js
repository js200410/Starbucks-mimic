
      const login = async () => {
        const userName = document.getElementById("username").value
        const password = document.getElementById("password").value
        const response = await fetch("/api/login",{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify({userName , password})
        })
        const data = await response.json();
        if(response.ok){
          localStorage.setItem("token",data.token);
          alert("you are successfully logged in")
          showOrderBtn()
        }
        else{
          alert("login failed : " + data.message)
        }
      }
      const showOrderBtn = () => {
        document.getElementById("login-form").style.display="none";
        document.getElementById("order-form").style.display="grid";
        document.getElementsByTagName("footer")[0].style.display="grid";
        document.getElementsByTagName("body")[0].classList.remove("grid");
        document.getElementsByTagName("footer")[0].classList.add("grid");
      }
      const byPass = () => {
        alert("Are you willimg to continue as a Guest!")
        showOrderBtn()
        return true
      }
      const isGuest = () =>{ 
          if (localStorage.getItem("token") || byPass()) {
        document.getElementById("order-section-btn").disabled = false;
    } else {
        alert("Login first or continue as a Guest Member");
    }
}
     
    document.getElementById("order-section-btn").onclick =isGuest
