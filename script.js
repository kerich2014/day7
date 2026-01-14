function getId(){
        const items = document.querySelectorAll('.todo')
        if(items.length > 0) 
            return items.length+1
        else
            return 1
    }

function getText(){
    const input = document.getElementById('inputText')
    return input.value
}

function deleteDeal(id){
    const deleteItem = document.getElementById(id)
    deleteItem.remove()
}

function deleteInputValue(){
    const input = document.getElementById('inputText')
    input.value = ''
}

function addDeal(deal){
    if (deal == ""){
        alert('Введите название напоминания')
    }
    else{
        const parent = document.getElementById('todoContainer')
        const child = document.createElement('div')
        const childDeleteButton = document.createElement('button')
        child.classList.add('todo')
        child.id = `div-${getId()}`
        child.textContent = deal
        parent.append(child)
        childDeleteButton.classList.add('deleteButton')
        childDeleteButton.id = `button-${getId()-1}`
        childDeleteButton.textContent = 'Удалить'
        childDeleteButton.addEventListener('click', function(){
            let id = this.id
            let lastChar = id[id.length-1]
            id =  `div-${lastChar}`
            deleteDeal(id)
        })
        child.append(childDeleteButton)
        deleteInputValue()
    }
}