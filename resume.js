let resume = document.getElementById('resume');
let buttons = resume.getElementsByClassName('btn');

buttons.array.forEach(element => {
    let education = resume.querySelector('.education');
    if (element.innerText == 'Education'){
        element.addEventListener('click', ()=>{
            education.classList.remove('education');
            education.classList.add('eduActive');
        });
    }else {
        element.addEventListener('click', ()=>{
            education.classList.remove('eduActive');
            education.classList.add('education');
        })
    }
});