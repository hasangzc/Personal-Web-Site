const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controlls')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content')



function PageTransitions(){
    // Button click activa class
    for (let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            const currentBtn = document.querySelector('.active-btn');
            if (currentBtn) currentBtn.classList.remove('active-btn');
            this.classList.add('active-btn');
        }) 
    }
    // Section Active class
    allSections.addEventListener('click', (e)=>{
        const id = e.target.dataset.id;
        if(id){
            // Remove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add("active")

            // Hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active')
        }
    })
}

PageTransitions()

    