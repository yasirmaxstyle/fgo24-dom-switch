//draggable by user event
const step = document.getElementById('step')

const draggable = document.querySelectorAll('.draggable')
const coffee = document.getElementById('coffee')
const tea = document.getElementById('tea')

let dragged
draggable.forEach(e => {
    e.addEventListener('drag', () => {
        console.log('dragged')
    })
    e.addEventListener('dragstart', (event) => {
        dragged = event.target
    })
})

const glasstea = document.getElementById('glass-tea')
const glasscoffee = document.getElementById('glass-coffee')
const temp = document.getElementById('temp')

const targets = document.querySelectorAll('.drop-target')
targets.forEach(target => {
    target.addEventListener('dragover', (event) => {
        event.preventDefault()
    }, false)


    target.addEventListener('drop', (event) => {
        event.preventDefault()

        if (event.target === temp && dragged === tea) {
            event.target.appendChild(dragged)
            step.textContent = 'Next, move COFFEE to a Tea Glass'
        }
        if (event.target === glasstea && dragged === coffee) {
            event.target.appendChild(dragged)
            step.textContent = 'Last, move TEA to a Coffee Glass'
        }
        if (event.target === glasscoffee && dragged === tea) {
            event.target.appendChild(dragged)
            step.textContent = 'Congratulations, you have switched TEA and COFFEE'
        }
        if (glasscoffee.children[0] === tea) {
            draggable.forEach(e => {
                e.setAttribute('draggable', false)
                e.classList.remove('draggable')
            })
        }
    })
})
