const calcy = () => {
    let wd = document.getElementById('wd').value;
    let maths = document.getElementById('maths').value;
    let comp = document.getElementById('comp').value;
    let phy = document.getElementById('phy').value;
    let grades = '';

    let totalGrades = parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy);

    let perc = (totalGrades / 400) * 100;

    if (perc <= 100 && perc >= 80) {
        grades = 'A1';
    }

    else if (perc <= 79 && perc >= 70) {
        grades = 'A';
    }

    else if (perc <= 69 && perc >= 60) {
        grades = 'B';
    }

    else if (perc <= 59 && perc >= 50) {
        grades = 'C';
    }

    else if (perc <= 49 && perc >= 40) {
        grades = 'D';
    }

    else {
        grades = 'Fail';
    }

document.getElementById('showData').innerHTML = `Out Of 400 Your Total Is ${totalGrades} And Percentage Is ${perc}%. <br/> <p style='font-size:20px'>Your Grades Is ${grades}.</p>`
} 