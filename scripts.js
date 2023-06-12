let buttons = document.querySelectorAll('.btn');
let tableData = document.getElementsByTagName('table');
let listItems = document.querySelectorAll('ul');

function showContent(data){
    for (table of tableData){
        if (table.classList == 'education' && data == 'Education'){
            table.classList.remove('education');
            table.classList.add('eduActive');
        }else if (table.classList == 'eduActive' && data == 'Education'){
            table.classList.remove('eduActive');
            table.classList.add('education');
        }

        if (table.classList == 'work' && data == 'Work Experience'){
            table.classList.remove('work');
            table.classList.add('workActive');
        }else if (table.classList == 'workActive' && data == 'Work Experience'){
            table.classList.remove('workActive');
            table.classList.add('work');
        }

        if (table.classList == 'skills' && data == 'Skills'){
            table.classList.remove('skills');
            table.classList.add('skillsActive');
        }else if (table.classList == 'skillsActive' && data == 'Skills'){
            table.classList.remove('skillsActive');
            table.classList.add('skills');
        }

        if (table.classList == 'lang' && data == 'Language'){
            table.classList.remove('lang');
            table.classList.add('langActive');
        }else if (table.classList == 'langActive' && data == 'Language'){
            table.classList.remove('langActive');
            table.classList.add('lang');
        }
    
    }
}

function listContent(data){
    for (list of listItems){
        if (list.classList == 'interest' && data == 'Interests'){
            list.classList.remove('interest');
            list.classList.add('intActive')
        }else if (list.classList == 'intActive' && data == 'Interests'){
            list.classList.remove('intActive');
            list.classList.add('interest')
        }

        if (list.classList == 'hobbies' && data == 'Hobbies'){
            list.classList.remove('hobbies');
            list.classList.add('hobActive')
        }else if (list.classList == 'hobActive' && data == 'Hobbies'){
            list.classList.remove('hobActive');
            list.classList.add('hobbies')
        }
    }
}

buttons.forEach(item => {
    let h1Data = item.innerText;
    if (h1Data == 'Education'){
        item.addEventListener('click', () => {
            showContent(h1Data);
        });
    }else if (h1Data == 'Skills'){
        item.addEventListener('click', () => {
            showContent(h1Data);
        });
    }else if (h1Data == 'Work Experience'){
        item.addEventListener('click', () => {
            showContent(h1Data);
        });
    }
    else if (h1Data == 'Language'){
        item.addEventListener('click', () => {
            showContent(h1Data);
        });
    }else if (h1Data == 'Interests'){
        item.addEventListener('click', ()=> {
            listContent(h1Data);
        });
    }else if (h1Data == 'Hobbies'){
        item.addEventListener('click', ()=> {
            listContent(h1Data);
        });
    }
})



