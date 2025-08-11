const inputName = document.getElementById('name')
const inputPassword = document.getElementById('password')
const sentBtn = document.getElementById('sentBtn')


let accauntStydent = [
        {
        stydentId: 1110,
        stydentPassword: 2021,
        stydentName: 'xamidulla',
        stydentGroup: 'NF2074',
        stydentGrading: 2,
        teachName: 'Shifu',
        stydentCoin: 845,
        stydentEnergy: 5345

    },
    {
        stydentId: 1107,
        stydentPassword: 2017,
        stydentName: 'figmachi🧟‍♀️',
        stydentGroup: 'NF2074',
         stydentGrading: 3,
        teachName: 'Shifu',
        stydentCoin: 845,
        stydentEnergy: 5345

    },

]
sentBtn.addEventListener('click', () => {
    const userId = Number(inputName.value); // Raqamga aylantirdik
    const userPassword = Number(inputPassword.value);

    const foundStudent = accauntStydent.find(student =>
        student.stydentId === userId && student.stydentPassword === userPassword
    );

    if (foundStudent) {
        alert('Siz: ' + foundStudent.stydentName);
        window.location.href = "home.html"
        localStorage.setItem("student" ,JSON.stringify(foundStudent))
        
    } else {
        alert('Login yoki parol noto‘g‘ri!');
    }
});

