

    let rand = document.getElementById("rand");
    let dollar = document.getElementById("dollar");
    let pound = document.getElementById("pound");
    let euro = document.getElementById("euro");
    let swiss = document.getElementById("swiss");
    let Bahraini = document.getElementById("Bahraini");
    let Kuwaiti = document.getElementById("Kuwaiti");
    let Australian = document.getElementById("Australian");
    let Canadian = document.getElementById("Canadian");
    let Jordanian = document.getElementById("Jordanian");

    let count = 0


    function increment() {
        count += 1
        rand.value = count
    }

    function randToOthers(val){
    dollar.value = val *18;
    pound.value = val /23;
    euro.value = val / 20;
    swiss.value = val / 20;
    Bahraini.value = val / 50;
    Kuwaiti.value = val / 25;
    Australian.value = val / 12;
    Canadian.value = val / 14;
    Jordanian.value = val / 26;
    }

    function dollarToOthers(val){
        rand.value = val *18;
    pound.value = val /23;
    euro.value = val / 20;
    swiss.value = val / 20;
    Bahraini.value = val / 50;
    Kuwaiti.value = val / 25;
    Australian.value = val / 12;
    Canadian.value = val / 14;
    Jordanian.value = val / 26;
    }

    function poundToOthers(val){
        dollar.value = val /18;
        rand.value = val /18;
    euro.value = val / 20;
    swiss.value = val / 20;
    Bahraini.value = val / 50;
    Kuwaiti.value = val / 25;
    Australian.value = val / 12;
    Canadian.value = val / 14;
    Jordanian.value = val / 26;
    }

    function euroToOthers(val){
        dollar.value = val /18;
    pound.value = val /23;
    rand.value = val /18;
    swiss.value = val / 20;
    Bahraini.value = val / 50;
    Kuwaiti.value = val / 25;
    Australian.value = val / 12;
    Canadian.value = val / 14;
    Jordanian.value = val / 26;
    }

    function swissToOthers(val){
        dollar.value = val /18;
    pound.value = val /23;
    euro.value = val / 20;
    rand.value = val /18;
    Bahraini.value = val / 50;
    Kuwaiti.value = val / 25;
    Australian.value = val / 12;
    Canadian.value = val / 14;
    Jordanian.value = val / 26;
    }

    function BahrainiToOthers(val){
        dollar.value = val /18;
    pound.value = val /23;
    euro.value = val / 20;
    swiss.value = val / 20;
    rand.value = val /18;
    Kuwaiti.value = val / 25;
    Australian.value = val / 12;
    Canadian.value = val / 14;
    Jordanian.value = val / 26;
    }

    function KuwaitiToOthers(val){
        dollar.value = val /18;
    pound.value = val /23;
    euro.value = val / 20;
    swiss.value = val / 20;
    Bahraini.value = val / 50;
    rand.value = val /18;
    Australian.value = val / 12;
    Canadian.value = val / 14;
    Jordanian.value = val / 26;
    }

    function AustralianToOthers(val){
        dollar.value = val /18;
    pound.value = val /23;
    euro.value = val / 20;
    swiss.value = val / 20;
    Bahraini.value = val / 50;
    Kuwaiti.value = val / 25;
    rand.value = val /18;
    Canadian.value = val / 14;
    Jordanian.value = val / 26;
    }

    function CanadianToOthers(val){
        dollar.value = val /18;
    pound.value = val /23;
    euro.value = val / 20;
    swiss.value = val / 20;
    Bahraini.value = val / 50;
    Kuwaiti.value = val / 25;
    Australian.value = val / 12;
    rand.value = val /18;
    Jordanian.value = val / 26;
    }

    function JordanianToOthers(val){
        dollar.value = val /18;
    pound.value = val /23;
    euro.value = val / 20;
    swiss.value = val / 20;
    Bahraini.value = val / 50;
    Kuwaiti.value = val / 25;
    Australian.value = val / 12;
    Canadian.value = val / 14;
    rand.value = val /18;
    }


    function converterToOthers(convertFrom, value){
        switch(convertFrom){
            case "rand" : randToOthers(parseFloat(value)); break;
            case "dollar" : dollarToOthers(parseFloat(value)); break;
            case "pound" : poundToOthers(parseFloat(value)); break;
            case "euro" : euroToOthers(parseFloat(value)); break;
            case "swiss" : swissToOthers(parseFloat(value)); break;
            case "Bahraini" : BahrainiToOthers(parseFloat(value)); break;
            case "Kuwaiti" : KuwaitiToOthers(parseFloat(value)); break;
            case "Australian" : AustralianToOthers(parseFloat(value)); break;
            case "Canadian" : CanadianToOthers(parseFloat(value)); break;
            case "Jordanian" : JordanianToOthers(parseFloat(value)); break;
            }
        }


