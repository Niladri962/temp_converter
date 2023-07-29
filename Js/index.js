var cel=document.getElementById("Celcius");
            var fah=document.getElementById("Fahrenheit");
            var kel=document.getElementById("Kelvin");
            function computeTemp(){
                const currentvalue= +event.target.value;
                switch(event.target.name){
                    case "Celcius":
                        kel.value= currentvalue + 273.15;
                        fah.value= (currentvalue* 1.8) + 32;
                        break;
                    case "Fahrenheit":
                        cel.value= (currentvalue-32) * 0.56;
                        kel.value= (currentvalue-32) * 0.56 + 273.15;
                        break;
                    case "Kelvin":
                        cel.value= currentvalue- 273.15;
                        fah.value= (currentvalue- 273.15) * 1.8 + 273.15;
                        break;
                    default:
                        break;
                }
            }