const getColor = () =>{

    const randnumber = Math.floor(Math.random() * 16777215);
    const randcode = "#"+ randnumber.toString(16);
    document.body.style.backgroundColor = randcode;
    document.getElementById("color-code").innerText= randcode;

    
    

}

document.getElementById("btn").addEventListener("click",getColor)



getColor();
