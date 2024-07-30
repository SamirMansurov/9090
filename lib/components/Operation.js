export function transaction(item, array) {

    const trBody = document.createElement('tr');
    
    const id = document.createElement('td');
    id.classList.add('td');
    id.textContent = '121212'; 
    
    const VisaCard = document.createElement('td');
    VisaCard.classList.add('td');
    VisaCard.textContent = 'VISA';
    
    const cat = document.createElement('td');
    cat.classList.add('td');
    cat.textContent = 'Автомобиль';
    
    const total = document.createElement('td');
    total.classList.add('td');
    total.textContent = '414,000,000';
    
    const w = document.createElement('td');
    w.classList.add('td');
    w.textContent = '4 дня назад';


    trBody.append(id, VisaCard, cat, total, w);

    return trBody;
}