alert('this is a joke pls dont get offended')

const btn = document.querySelector('#hero');

function press(){
    var sourceOfPicture = "https://static.jojowiki.com/images/a/a1/latest/20191208112759/Josuke_DU_Infobox_Manga.png";
    var img = document.getElementById('bigpic');
    img.src = sourceOfPicture.replace('90x90', '225x225');
    img.style.display = "block";
    document.getElementById('bigpic').style.display='block';
}

btn.onclick = press();

const butn = document.getElementById('villain');

function press2(){
    let sourceOfPicture2 = "Yoshikage_Kira.png";
    var img2 = document.getElementById('smallpic');
    img2.src = sourceOfPicture2.replace('90x90', '225x225');
    img2.style.display = "block";
    document.getElementById('smallpic').style.display='block';
}

butn.onclick = press2();



