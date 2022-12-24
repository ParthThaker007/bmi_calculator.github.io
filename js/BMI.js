function calculation() {
    var a = parseFloat(document.getElementById("weight").value);
    var b = parseFloat(document.getElementById("height").value);
    var gender = document.getElementById("gender").value;
    var age = parseInt(document.getElementById("age").value);


    if (gender == "Male") {
        if (age > 18) {
            bmi = a / ((b / 100) ** 2);
            ans = bmi.toFixed(3);
            document.getElementById("val1").innerHTML =
                "YOUR BMI IS" + ans;
            document.getElementById("vm2").innerHTML="Idle:"+"19 to 24.8"    
            if (ans < 18.9) {
                document.getElementById("bmi").innerHTML = "YOU ARE UNDER WEIGHT";
            }
            if (ans >= 18.9 && ans < 24.9) {
                document.getElementById("bmi").innerHTML = "YOU ARE HEALTHY";
            }
            if (ans >= 24.9 && ans < 29.9) {
                document.getElementById("bmi").innerHTML = "YOU ARE OVER WEIGHT";
            }
            if (ans > 30.0) {
                document.getElementById("bmi").innerHTML = "<a href='https://www.google.com'>YOU ARE OBESE</a>";
            }
        }
        if (age < 8 && age > 0) {
            bmi = a / ((b / 100) ** 2);
            ans = bmi.toFixed(3);
            document.getElementById("val1").innerHTML = "YOUR CHILD'S BMI IS  " + ans;
            document.getElementById("vm2").innerHTML="Idle:"+"15 to 18" 
            if (ans < 15) {
                document.getElementById("bmi").innerHTML = "YOUR CHILD IS UNDER WEIGHT";
            }
            if (ans >= 15 && ans < 18.2) {
                document.getElementById("bmi").innerHTML = "YOUR CHILD IS HEALTHY";
            }
            if (ans >= 18.2 && ans < 19.4) {
                document.getElementById("bmi").innerHTML = "YOUE CHILD IS OVER WEIGHT";
            }
            if (ans > 19.4) {
                document.getElementById("bmi").innerHTML = "YOUR CHILD IS OBESE";
            }

        }
        if (age < 18 && age >= 8) {
            bmi = a / ((b / 100) ** 2);
            ans = bmi.toFixed(3);
            document.getElementById("val1").innerHTML = "YOUR BMI IS  " + ans;
            document.getElementById("vm2").innerHTML="Idle:"+"16.4 to 22.9" 
            if (ans < 16.4) {
                document.getElementById("bmi").innerHTML = "YOU ARE UNDER WEIGHT";
            }
            if (ans >= 16.4 && ans < 22.9) {
                document.getElementById("bmi").innerHTML = "YOU ARE HEALTHY";
            }
            if (ans >= 22.9 && ans < 25.4) {
                document.getElementById("bmi").innerHTML = "YOU ARE OVER WEIGHT";
            }
            if (ans > 25.4) {
                document.getElementById("bmi").innerHTML = "YOU ARE OBESE";
            }

        }

    }


    if (gender == "Female") {
        if (age > 18) {
            bmi = a / ((b / 100) ** 2);
            ans = bmi.toFixed(3);
            document.getElementById("val1").innerHTML = "YOUR BMI IS  " + ans;
            document.getElementById("vm2").innerHTML="Idle:"+"18.4 to 24.3" 
            if (ans < 18.4) {
                document.getElementById("bmi").innerHTML = "YOU ARE UNDER WEIGHT";
            }
            if (ans >= 18.4 && ans < 24.3) {
                document.getElementById("bmi").innerHTML = "YOU ARE HEALTHY";
            }
            if (ans >= 24.3 && ans <= 29.5) {
                document.getElementById("bmi").innerHTML = "YOU ARE OVER WEIGHT";
            }
            if (ans > 29.5) {
                document.getElementById("bmi").innerHTML = "YOU ARE OBESE";
            }
        }
        if (age < 8 && age > 0) {
            bmi = a / ((b / 100) ** 2);
            ans = bmi.toFixed(3);
            document.getElementById("val1").innerHTML = "YOUR CHILD'S BMI IS  " + ans;
            document.getElementById("vm2").innerHTML="Idle:"+"15 to 18.2" 
            if (ans < 15) {
                document.getElementById("bmi").innerHTML = "YOUR CHILD IS UNDER WEIGHT";
            }
            if (ans >= 15 && ans < 18.2) {
                document.getElementById("bmi").innerHTML = "YOUR CHILD IS HEALTHY";
            }
            if (ans >= 18.2 && ans < 19.4) {
                document.getElementById("bmi").innerHTML = "YOUE CHILD IS OVER WEIGHT";
            }
            if (ans > 19.4) {
                document.getElementById("bmi").innerHTML = "YOUR CHILD IS OBESE";
            }

        }
        if (age < 18 && age >= 8) {
            bmi = a / ((b / 100) ** 2);
            ans = bmi.toFixed(3);
            document.getElementById("val1").innerHTML = "YOUR BMI IS  " + ans;
            document.getElementById("vm2").innerHTML="Idle:"+"16.4 to 22.8" 
            if (ans < 16.4) {
                document.getElementById("bmi").innerHTML = "YOU ARE UNDER WEIGHT";
            }
            if (ans >= 16.4 && ans < 22.9) {
                document.getElementById("bmi").innerHTML = "YOU ARE HEALTHY";
            }
            if (ans >= 22.9 && ans < 25.4) {
                document.getElementById("bmi").innerHTML = "YOU ARE OVER WEIGHT";
            }
            if (ans > 25.4) {
                document.getElementById("bmi").innerHTML = "YOU ARE OBESE";
            }

        }


    }



}