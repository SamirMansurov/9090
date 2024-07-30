export function header(item) {
    const header = document.createElement('header');
    header.classList.add('header');

    const headerBox = document.createElement('div');
    headerBox.classList.add('header_box');
    header.append(headerBox);

    const left = document.createElement('nav');
    left.classList.add('left');

    const right = document.createElement('nav');
    right.classList.add('right');

    const textMain = document.createElement('a');
    textMain.classList.add('header_text');
    textMain.textContent = 'Главная';

    const textCard = document.createElement('a');
    textCard.classList.add('header_text');
    textCard.textContent = 'Мои кошельки';

    const textTransaction = document.createElement('a');
    textTransaction.classList.add('header_text');
    textTransaction.textContent = 'Мои транзакции';

    const textMail = document.createElement('a');
    textMail.classList.add('header_text');
    textMail.textContent = 'alexadams@google.com';

    const headerImg = document.createElement('a');
    headerImg.classList.add('header_img');

    const exitImg = document.createElement('img');
    exitImg.src = '/exit.svg';
    headerImg.append(exitImg);

  
    left.append(textMain, textCard, textTransaction);
    right.append(textMail, headerImg);
    headerBox.append(left, right);

    return header;
}