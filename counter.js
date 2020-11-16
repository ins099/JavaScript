if(!localStorage.getItem('counter')){
    localStorage.setItem('counter', 0);
}
function count(){
    let counter = localStorage.getItem('counter');
    counter++;
    alert(counter);
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter',counter)

    if (counter % 10 == 0){
        alert(`counter reaches ${counter}`)
    }
}

document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('button').onclick = count;
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    setInterval(count, 10000);
});


//                                            Working With Form

document.addEventListener('DOMContentLoaded',function(){
        
    function printname(){
        const name = document.querySelector('#name').value;
        alert(`Hello, ${name}`)};
    
    document.querySelector('form').onsubmit= printname;
});


//                                          Changing CSS with JS (1)
document.addEventListener('DOMContentLoaded',function(){

    document.querySelector('#red').onclick = function(){
        document.querySelector('h1').style.color = 'red';
    }
    document.querySelector('#blue').onclick = function(){
        document.querySelector('h1').style.color = 'blue';
    }
    document.querySelector('#green').onclick = function(){
        document.querySelector('h1').style.color = 'green';
    }
});

//                                          Changing CSS with JS (2)

document.addEventListener('DOMContentLoaded',function(){

    document.querySelectorAll('button').forEach(function(button){
        button.onclick = function(){
            document.querySelector('#hello').style.color = button.dataset.color;
        };
    });

});

//                                          Changing CSS with JS using Dropdown (3)

document.addEventListener('DOMContentLoaded',function(){

    document.querySelector('select').onchange=function(){
            document.querySelector('#hello').style.color = this.value;
    };

});