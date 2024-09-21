function getColor(){
    

    // Seleciona todas as li, o botão, a imagem e o content-image para aplicar o ::before
    const colorOptions = document.querySelectorAll('.content-text ul li');
    const button = document.querySelector('.content-box button');
    const contentImage = document.querySelector('.content-image');
    const image = document.querySelector('.content-image img');
    

    // Objeto com as imagens correspondentes a cada cor
    const imagesByColor = {
        gray: 'assets/images/iphone-gray.png',
        black: 'assets/images/iphone-black.png',
        gold: 'assets/images/iphone-gold.png',
        blue: 'assets/images/iphone-blue.png',
        pink: 'assets/images/iphone-pink.png'
    };

    // Adiciona um evento de clique para cada li
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Pega a cor de fundo da li clicada
            const bgColor = window.getComputedStyle(option).backgroundColor;

            // Aplica essa cor ao botão
            button.style.backgroundColor = bgColor;

            // Aplica essa cor ao ::before da .content-image
            contentImage.style.setProperty('--before-bg', bgColor);  // Atualiza uma variável CSS para o ::before

            // Identifica a classe da li clicada (gray, black, red, etc.)
            const colorClass = [...option.classList].find(c => imagesByColor[c]);

            // Troca a imagem com base na cor clicada
            if (colorClass) {
             image.src = imagesByColor[colorClass];
            }
        });
    });
}



function darkmode() {
  const body = document.body;
  const modalHeader = document.querySelector('.modal-header');
  const modalContent = document.querySelector('.modal-body');
  const btnDark = document.querySelector('.btn-darkmode')

  body.classList.toggle('dark-mode');
  btnDark.classList.toggle('dark-mode')
  modalHeader.classList.toggle('dark-mode'); // Adiciona ou remove a classe do cabeçalho
  modalContent.classList.toggle('dark-mode');
}
 




