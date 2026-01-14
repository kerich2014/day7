function getId(){
        const items = document.querySelectorAll('.todo')
        if(items.length > 0) 
            return items.length+1
        else
            return 1
    }

function addDeal(deal){
    const parent = document.getElementById('todoContainer')
    const child = document.createElement('div')
    child.classList.add('todo')
    child.id = getId()
    child.textContent='fuwebfuew'
    parent.append(child)
}