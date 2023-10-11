document.addEventListener("DOMContentLoaded", () => {
    const allBorder = document.getElementById('all');
    const all_val = document.getElementById('all-val');
    const code = document.getElementById('code');
    const container = document.querySelector('.container');
    const btnCopy = document.querySelector('#btnCopy');

    var all_radius = 10;
    var coding;

    function allBordersUpdate() {
        all_radius = allBorder.value;
        all_val.innerText = all_radius+"px";

        coding = `border-radius: ${all_radius}px;`;

        code.value=coding;
        container.style.cssText=coding;
    }

    function updateCode(){
        //
    }

    allBorder.addEventListener("mousemove", allBordersUpdate);
    allBorder.addEventListener("change", allBordersUpdate);

    btnCopy.addEventListener('click', ()=>{
        document.querySelector('textarea').select();
        document.execCommand('copy');
        alert('text copied');
    });

    allBordersUpdate();
});