import { UserCard } from './components/Usercard.js'
import { TableRow } from './components/Usertable.js'
import { tableData } from './db/table.js'
import { userData } from './db/user.js'

const container = document.querySelector('.container')

function reload() {
    container.innerHTML = ''

    if (userData) {
        const userCard = UserCard(userData.name, userData.age)
        container.append(userCard)
    }

    const table = document.createElement('table')
    table.className = 'table'

    const headerRow = document.createElement('tr');
    ['ID', 'Name', 'Score'].forEach(headerText => {
        const headerCell = document.createElement('th')
        headerCell.textContent = headerText
        headerRow.append(headerCell)
    })
    table.append(headerRow)

    tableData.forEach(rowData => {
        const row = TableRow(rowData.id, rowData.name, rowData.score)
        table.append(row)
    })

    container.append(table)
}

reload()


