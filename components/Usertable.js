function TableRow(id, name, score) {
    const row = document.createElement('tr')
  
    const idCell = document.createElement('td')
    idCell.textContent = id
  
    const nameCell = document.createElement('td')
    nameCell.textContent = name

    const scoreCell = document.createElement('td')
    scoreCell.textContent = score
  
    row.appendChild(idCell)
    row.appendChild(nameCell)
    row.appendChild(scoreCell)
  
    return row
}

export { TableRow }