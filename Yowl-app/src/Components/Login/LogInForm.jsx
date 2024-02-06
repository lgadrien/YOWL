import React, { useEffect } from "react";

function LogInForm () {

  function handleCallbackResponse (response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: "487203499998-ldr8lbadrf3bauvb0d39d752d5n1388l.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen mt-auto">
      <div id="signInDiv"></div>
      <div className="flex items-center mt-4">En vous inscrivant vous acceptez nos<a href="/CGU" className="text-blue-500 font-bold ml-1"> Conditions Générales d'Utilisations</a></div>
    </div>
  );
}

export default LogInForm;
