export function card(item) {
    const map = document.createElement('div')
    const name_map = document.createElement('p')
    const now = document.createElement('p')
    map.classList.add('card')
    name_map.classList.add('name_card')
    now.classList.add('currently')
    name_map.innerHTML = 'VISA'
    now.innerHTML = 'rub'
    
    map.append(name_map,now)

    return map
}