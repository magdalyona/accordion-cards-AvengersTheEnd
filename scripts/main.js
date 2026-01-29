const initOptions = () => {
    
    const optionsContainer = document.querySelector('.options');

    const option = document.querySelectorAll(".option");

    optionsContainer.style.setProperty('--total-options', option.length);

    optionsContainer.addEventListener('click', (event) => {

        const clickedOption = event.target.closest('.option')
        if (!clickedOption || clickedOption.classList.contains('active')) return 

        option.forEach((option) => {
            option.classList.remove('active')
        })

        clickedOption.classList.add('active')

    });

}

document.addEventListener('DOMContentLoaded', initOptions);