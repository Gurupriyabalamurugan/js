<!DOCTYPE html>
<head>
    <title>
        Messages
    </title>
</head>
    <body>
        <button id="btn">Click Me</button>

    <script>
        document.getElementById("btn").addEventListener("click",function(){
            alert("Button clicked!");
            let name=prompt("Enter your name:");
            let confirmMsg=confirm("Do you want to continue?");
            if(confirmMsg){
                alert("Welcome "+name);
            } 
            else{
                alert("Action cancelled");
            }
        });
    </script>
    </body>
</html>
