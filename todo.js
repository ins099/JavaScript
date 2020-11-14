document.addEventListener('DOMContentLoaded',function(){

    document.querySelector('#submit').disabled = true;

    document.querySelector('#task').onkeyup = function(){

        if (document.querySelector('#task').value.length>0){
            document.querySelector('#submit').disabled = false;
        } else {
            document.querySelector('#submit').disabled = true;
        }
        
    }

    document.querySelector('form').onsubmit = () => {

        const taskitem = document.querySelector('#task').value;
        console.log(taskitem);

        const li = document.createElement('li');
        li.innerHTML = taskitem;

        document.querySelector('#tasks').append(li)

        document.querySelector('#task').value = ''
        document.querySelector('#submit').disabled = true;


        //stop from submitting
        return false
    };
});