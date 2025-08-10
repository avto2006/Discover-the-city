const inp1 = document.getElementById('inp1');
const inp2 = document.getElementById('inp2');
const btn = document.getElementById('btn1');
const root = document.getElementById('root');

document.getElementById('btn').addEventListener('click', function() {
     const inp1 = document.getElementById('inp1').value.trim();
     const inp2 = document.getElementById('inp2').value.trim();

     if(inp1 && inp2) {

     } else {
        document.getElementById('root').textContent = "გთოვთ შეიყვანოთ ორივე ქალაქი"
     }
})