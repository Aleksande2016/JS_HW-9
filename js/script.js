const List = function () {
    let arrList = [];

    this.init = function() {
        let mainElement = document.querySelector('.list')
        if(!mainElement) return;

        mainElement.innerHTML = `
        <div class="list_main">
            <h1>Cписок дел</h1>
            <input type="text" id="task" placeholder="Введите  задачу..." name="task">
            <button class="addTask">Добавить</button>
            <button class="deleteAllTask">Удалить весь список</button>
        </div>
        <div class="list_content"></div>`

        let addTaskBtn = document.querySelector('.addTask')
            inputTask = document.querySelector('#task')

        addTaskBtn.addEventListener('click', (elemnt) => {

            if(inputTask.value.trim() == '') return; // ?????????
            this.addList(inputTask.value)

            inputTask.value = ''   
        })
       
        this.show()
    }

    this.addList = function(task){
        arrList.push({ task })

        this.show()
    }



// ================================================


    this.edit = function (id) { // (6)
        let idNumber = id
        arrList = arrList.filter((_, index) => index = idNumber)
        console.log(arrList)
        this.show()
    }

//=======================================================








    this.delete = function (id) { // (7)
        let idNumber = +id
        arrList = arrList.filter((_, index) => index != idNumber)
        this.show()
    }

    this.deleteAll = function () { // (8)
        
        arrList = []
        this.show()
    }

    this.show = function(){
        let content = document.querySelector('.list_content')
            list1 = '';

            arrList.forEach((task, index) => { // !!!!!!!! Длинное слово в задачах - вылазит за поля
                list1 += `<li><input class="choose" type="checkbox" >
                <span id="index">Задача: ${task.task}</span <br>
                <button class="edit_btn" id="${index}">Редактировать</button>
                <button class="delete_btn" id="${index}">Удалить</button>
                </li>`
            })

            content.innerHTML = list1 ? `<ul>${list1}</ul>` : `<h2>Список пуст</h2>`



//======================================================================

            let editBtns = document.querySelectorAll('.edit_btn')
            editBtns.forEach((editBtn) => {
                editBtn.addEventListener('click', (event) => {
                    this.edit(alert(event)) // (6)
                    console.log(arrList)
                })
            })

//=======================================================================





            let deleteBtns = document.querySelectorAll('.delete_btn')
            deleteBtns.forEach((deleteBtn) => {
                deleteBtn.addEventListener('click', (event) => {
                    this.delete(event.target.id) // (7)
                })
            })

            let deleteAll = document.querySelectorAll('.deleteAllTask')
            deleteAll.forEach((deleteBtn) => {
                deleteBtn.addEventListener('click', (event) => {
                    this.deleteAll(event.target) // (8)
                })
            })

        return arrList
    }

}

window.addEventListener('load', function() {
    const list = new List()
    list.init()
})