const task3Element = document.getElementById('task-3');

function notify1() {
    alert('no input')
}

function notify2(name) {
    alert(name)
}

function notify3(name1, name2, name3) {
    return name1 + name2 + name3
}

// notify1()
// notify2('rayaan')

alert(notify3('hesen','reyen','omer'))

task3Element.addEventListener('click',notify1)