let listLicensePlateInHN = [];
const listLicensePlates = ["29P1-124123", "30L9-63568", "17B3-29013", "33H2-21231"];
function checkLicensePlateInHN (licensePlateNeedCheck){
    const beginLicensePlateInHN = ['29', '30', '31', '32', '33', '40'];
    for (const value of beginLicensePlateInHN) {
        if (licensePlateNeedCheck.startsWith(value)) {
            return true;
        }
    }
    return false;
}
for (const value of listLicensePlates) {
    if (checkLicensePlateInHN(value)) {
        listLicensePlateInHN.push(value);
    }
}
console.log(`Các biển số thuộc Hà Nội: ${listLicensePlateInHN} `);
