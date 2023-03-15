let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
function increment()
{
    count += 1
    countEl.innerHTML = count
}

function save()
{
    let entry = count + " - "
    saveEl.innerHTML += entry 
    countEl.innerHTML = 0
    count = 0
}

function reset()
{
    saveEl.innerHTML = "Previous counts: "
}
function decrement()
{
    count-=1
    countEl.innerHTML = count
}