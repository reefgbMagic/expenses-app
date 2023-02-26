const dateFormatter = (dateToFormat) => {
    let enteredDate, day, month, year, formattedDate, formattedDateObj;
    enteredDate = new Date(dateToFormat);

    day = enteredDate.getDate();
    month = enteredDate.getMonth() >= 10 ? enteredDate.getMonth() : `0${enteredDate.getMonth() + 1}`;
    year = enteredDate.getFullYear();
    formattedDate = `${year}-${month}-${day}`
    return formattedDate;
}
export default dateFormatter;