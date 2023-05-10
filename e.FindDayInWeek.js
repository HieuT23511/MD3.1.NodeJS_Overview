let arrayDayInWeek = ["chủ nhật", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy"];

function findDayOfTheWeek(date) {
    let dateObject = new Date(Date.parse(date))
    console.log(`Ngày ${date} là: ${arrayDayInWeek[dateObject.getDay()]}`)
}
findDayOfTheWeek(`05/10/2023`);


