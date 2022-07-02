$(document).ready(() => {
    // $("input#answer").css("display", "none")
    $("#answer").hide();
    $("form").on("submit", (e) => {
        e.preventDefault();
        $("input#answer").css("display", "inline-block")
        let decimalNumber = $("input#decimal").val();
        decimalNumber = parseInt(decimalNumber)
        console.log(decimalNumber)
        let array = []
        let onesArray = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
        let tensArray = ["", "X", "XX", "XXX", "XV", "V", "VX", "VXX", "VXXX", "XC"]
        let hundredsArray = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
        array.push(onesArray);
        array.push(tensArray);
        array.push(hundredsArray);
        let result = "";
        let index = 0;
        while (decimalNumber) {
            console.log("index", index, "decnum", decimalNumber)
            result = array[index][decimalNumber % 10] + result;
            index++;
            decimalNumber = ~~(decimalNumber / 10);
            console.log(result);
        }
        console.log(result);
        $("#answer").val(result)
    });
    $("form").on("reset", () => {
        $("input#decimal").text('')
        $("input#answer").hide();
    });
});