const nameInput=document.querySelector("#nameInput"),dobInput=document.querySelector("#dobInput"),dodInput=document.querySelector("#deathInput"),isAlive=document.querySelector("#isAlive"),styleInput=document.querySelector("#styleInput"),addBtn=document.querySelector("#addBtn"),helpBtn=document.querySelector("#helpBtn"),saveBtn=document.querySelector("#saveBtn"),noStyleSave=document.querySelector("#noStyleSave"),openMenu=document.querySelector("#openMenu"),treeContainer=document.querySelector("#treeContainer"),namePattern=/(\D{1,}\s)/gim,splashScreen=document.querySelector("#splash-screen"),splashLogo=document.querySelector("#splashLogo"),textSplash=document.querySelector("#splash-screen-logotext"),buttonSplash=document.querySelector("#splash-button"),footerSplash=document.querySelector("footer");$("document").ready(function(){setTimeout(()=>{$(splashLogo).css("opacity",1),$(textSplash).css("opacity",1),setTimeout(()=>{$(buttonSplash).css("opacity",1)},1e3),setTimeout(()=>{$(footerSplash).css("opacity",1)},1200)},800)}),buttonSplash.addEventListener("click",()=>{splashScreen.classList.add("slideLeft"),splashLogo.classList.add("rotateLeft")}),$(addBtn).click(function(){let t=[],e=new Date(dobInput.value).toLocaleDateString("es-ES"),n=new Date(deathInput.value).toLocaleDateString("es-ES"),a=document.createElement("DIV"),o=document.createElement("DIV");if($(o).attr("id","deleteBtn").append('<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t\t\t\t\tviewBox="0 0 15 15" style="enable-background:new 0 0 15 15;" xml:space="preserve">\n\t\t\t\t\t<style type="text/css"> .st0{fill:#DB4C2A;}\t.st1{fill:#FFFFFF;}\t</style>\n\t\t\t\t\t<path class="st0" d="M7.5,0C3.4,0,0,3.4,0,7.5C0,11.6,3.4,15,7.5,15S15,11.6,15,7.5C15,3.4,11.6,0,7.5,0z M9.9,8.9\n\t\t\t\t\tc0.3,0.3,0.3,0.7,0,1c-0.3,0.3-0.7,0.3-1,0L7.5,8.5L6.1,9.9c-0.3,0.3-0.7,0.3-1,0c-0.3-0.3-0.3-0.7,0-1l1.4-1.4L5.1,6.1\n\t\t\t\t\tc-0.2-0.3-0.2-0.7,0-1c0.3-0.3,0.7-0.3,1,0l1.4,1.4l1.4-1.4c0.3-0.3,0.7-0.3,1,0c0.3,0.3,0.3,0.7,0,1L8.5,7.5L9.9,8.9z"/>\n\t\t\t\t\t<path class="st1" d="M9.9,8.9c0.3,0.3,0.3,0.7,0,1c-0.3,0.3-0.7,0.3-1,0L7.5,8.5L6.1,9.9c-0.3,0.3-0.7,0.3-1,0c-0.3-0.3-0.3-0.7,0-1\n\t\t\t\t\tl1.4-1.4L5.1,6.1c-0.2-0.3-0.2-0.7,0-1c0.3-0.3,0.7-0.3,1,0l1.4,1.4l1.4-1.4c0.3-0.3,0.7-0.3,1,0c0.3,0.3,0.3,0.7,0,1L8.5,7.5\n\t\t\t\t\tL9.9,8.9z"/>\n\t\t\t\t\t</svg>').click(function(){$(a).remove()}),$(a).addClass("person draggable").append(o),""===$(nameInput).val())return 1===$("#mainContainer").find("div").length?($("#mainContainer").append('\n\t\t\t<div class="input-error">Por favor indicar el nombre correctamente.</div>'),void setTimeout(()=>{$(".input-error").fadeOut(300,function(){$(this).remove()})},3e3)):void 0;if(""===$(dobInput).val())return 1===$("#mainContainer").find("div").length?($("#mainContainer").append('\n\t\t\t<div class="input-error ">Por favor indicar una fecha.</div>'),void setTimeout(()=>{$(".input-error").fadeOut(300,function(){$(this).remove()})},3e3)):void 0;if(t.push(nameInput.value,isAlive.value,e,n),"Azul"===$(styleInput).val()?$(a).addClass("azul"):"Rosa"===$(styleInput).val()?$(a).addClass("rosa"):$(a).addClass("verde"),"Si"===$(isAlive).val())$(a).append(`\n\t\t\t<p><b>${t[0]}</b></p>\n\t\t\t<p>¿Está vivo? <b>${t[1]}</b></p>\n\t\t\t<p>Fecha de nacimiento: <b>${t[2]}</b></p>\n\t\t`);else{if(""===$(dodInput).val())return $("#mainContainer").append('\n\t\t\t<div class="input-error ">Por favor indicar una fecha.</div>'),void setTimeout(()=>{$(".input-error").fadeOut(300,function(){$(this).remove()})},3e3);$(a).append(`\n\t\t\t<p><b>${t[0]}</b></p>\n\t\t\t<p>¿Está vivo? <b>${t[1]}</b></p>\n\t\t\t<p>Fecha de nacimiento: <b>${t[2]}</b></p>\n\t\t\t<p>Fecha de defunción: <b>${t[3]}</b></p>\n\t\t`)}$(treeContainer).append(a),$(".draggable").draggable({scroll:!1,snap:!0,appendTo:"treeContainer"}),$(deathInput).val(""),$(dobInput).val(""),$(isAlive).val("Si"),$(nameInput).val("")}),$(helpBtn).click(function(){1===$("#mainContainer").find("div").length&&($("#mainContainer").append('\n\t\t<div class="help-container alert">\n\t\t\t<ol>\n\t\t\t\t<li>Ingresar nombre de la persona.</li>\n\t\t\t\t<li>Seleccionar estilo deseado.</li>\n\t\t\t\t<li>Indicar si esta vivo o no.</li>\n\t\t\t\t<li>Indicar sus respectivas fechas.</li>\n\t\t\t\t<li>Presionar el botón <span><b>Agregar</b></span>.</li>\n\t\t\t</ol>\n\t\t\t<p>Los elementos son arrastrables, ordená el arból a tu gusto.</p>\n\t\t\t<p>Si te equivocaste con algun dato, borrá el elemento y agregalo nuevamente.</p>\n\t\t\t<p>Para guardar su árbol en una imagen, colocar los elementos dentro del recuadro y presionar el botón <span><b>Guardar Árbol</b></span></p>\n\t\t\t\n\t\t\t<button id="cerrarAyuda">Cerrar</button>\n\t\t</div>\n\t'),$("#cerrarAyuda").click(function(){$(".help-container").remove()}))}),$(saveBtn).click(function(){$(deleteBtn).hide();const t=document.querySelector(".capture");html2canvas(t).then(t=>(t.style.display="none",document.body.appendChild(t),t)).then(t=>{const e=t.toDataURL("image/png").replace("image/png","image/octet-stream"),n=document.createElement("a");n.setAttribute("download","mi-arbol.png"),n.setAttribute("href",e),n.click(),t.remove()}),$(deleteBtn).show()}),$(openMenu).click(()=>{$("aside").css("left","0")}),$(closeMenu).click(()=>{$("aside").css("left","-400px")});