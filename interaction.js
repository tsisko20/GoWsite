function showFilter(){
    var x = document.getElementById("filter");
    if(x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function ubaci(salica){
    var x = document.getElementById("kosarica");
    x.style.display = "block";
    var y = Number(x.innerHTML);
    x.innerHTML = y+1;
    var text = document.getElementById("ubaciPredmet");
    var textContent;



        if(text.textContent.trim() == ""){
            rep = 1;
            text.textContent = "Proizvod \"" + salica + "\" dodan u košaricu. x" + rep;
        }
            
        else
        {
            textContent =text.textContent.trim();
        var razdvojeno = textContent.split("\"");
        console.log(razdvojeno[1]);
        if(razdvojeno[1] == salica)
        {
            textContent =text.textContent.trim();
            var rep = Number(textContent[textContent.length-1]) +1; 
           text.textContent = "Proizvod \"" + salica + "\" dodan u košaricu. x" + rep;
        }
        else 
        {rep=1;
        text.textContent = "Proizvod \"" + salica + "\" dodan u košaricu. x" + rep;}
            
            
            
        }
        
        
        
    if(text.style.display === "none"){
        text.style.display = "block";
    }
    
    setTimeout(sakrij, 5000);
    function sakrij(){
        text.style.display = "none";
        text.innerHTML = "";
    }

}

function add1(){
    var x = document.getElementById("drveneSalice");
    var a = document.getElementById("cijena1");
    var b = document.getElementById("ukupnaCijena1");
    var y = Number(x.innerHTML);
    var c = Number(a.innerHTML);
    var d = Number(b.innerHTML);
    var y = Number(x.innerHTML);
    x.innerHTML = y+1;
    b.innerHTML =d+c;

}
function subtract1(){
    var x = document.getElementById("drveneSalice");
    var a = document.getElementById("cijena1");
    var b = document.getElementById("ukupnaCijena1");
    var y = Number(x.innerHTML);
    var c = Number(a.innerHTML);
    var d = Number(b.innerHTML);
    if(y != 0){
    x.innerHTML = y-1;
    b.innerHTML =d-c;
    }

}

function otvoriPlacanje(){
    window.open("placanjeIgre.html", "_self");
}
    
function sakrijTekst(){
    var x = document.getElementById("tekst");
    x.style.display=none;
}

    
        

    
