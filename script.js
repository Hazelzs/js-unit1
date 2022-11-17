const brithdayinfo = (bd) => {
    let cdate = new Date();
    let currentDate = cdate.getTime();
    let dtow = ("sunday" + 'Monday' + 'Tuesday' + 'Wedsneday' + 'Thrusday' + 'Friday' + 'Saturday');
    let bornDate = bd.getDay();
    let bdyT = new Date(bd.getFullYear(cdate.getFullYear()));
    let bdytms = bdyT.getTime();
    alert('you were born on a' + dtow(bornDate));
}
brithdayinfo(new Date(prompt('when is your brithday?')))