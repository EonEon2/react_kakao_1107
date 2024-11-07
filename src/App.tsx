import {useEffect} from "react";


function App() {


    async function requestPermission() {
        //requesting permission using Notification API
        const permission = await Notification.requestPermission();


        if (permission === "granted") {

            alert("Notification granted!");

        } else if (permission === "denied") {
            //notifications are blocked
            alert("You denied for the notification");
        }
    }


    useEffect(() => {
        requestPermission();
    }, []);




  return (
    <>
      <h1>---</h1>
    </>
  )
}

export default App
