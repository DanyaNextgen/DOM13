function UserCard(name, age) {
    const card = document.createElement('div')
    card.className = 'card'
  
    const title = document.createElement('h2')
    title.textContent = name
  
    const ageInfo = document.createElement('p')
    ageInfo.textContent = `Age: ${age}`
  
    card.appendChild(title)
    card.appendChild(ageInfo)
  
    return card
}

export { UserCard }