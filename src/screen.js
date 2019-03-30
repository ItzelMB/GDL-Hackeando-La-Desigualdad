document.getElementById("btn-selectionA").addEventListener("click", showScreenA);
function showScreenA() {
   showAnswer = document.getElementById("content")
  let template = String.raw`
     <h3>Todas las personas que vivimos en este mundo somos diferentes, somos únicos y, sin embargo, todos somos iguales porque tenemos los mismos derechos. Pero... ¿Por qué es tan dificil entender a las mujeres? Si alguna vez t e encontraste en una situación en la que al tratar con una mujer</h3>
    <h3>Esta app te ayudara a tener una mejor relación con las mujeres.</h3>
    `;
  showAnswer.innerHTML = template;
}

document.getElementById("btn-selectionB").addEventListener("click", showScreenB);
 function showScreenB() {
    showAnswer = document.getElementById("content")
  let template = String.raw`
     <h3>Estas por buen camino pero aún hay cosas que podrias considerar </h3>
     <h2>¿Te animas a descubrir más?</h2>
    `;
  showAnswer.innerHTML = template;
};

document.getElementById("btn-selectionC").addEventListener("click", showScreenc);
  function showScreenc() {
      ocultar();
    showAnswer = document.getElementById("content")
    let loginTemplate = String.raw`
    <form>
      <div>
        <label for="email">Nombre</label>
        <input type="text" class="form-control" name="name" id="name" />
      </div>
      <div>
        <label for="password">Contraseña</label>
        <input type="password" class="form-control" name="password" id="password" />
      </div>
      <div>
        <input type="button" value="Iniciar sesión" onclick="profile()" />
        <input type="button" value="Registrar" onclick= />
      </div>
    </form>
  `;
   showAnswer.innerHTML = loginTemplate;
};



function profile() {
document.getElementById("intro").style.display = "none";
document.getElementById("content").style.display = "none";
let nameUser = document.getElementById("name").value;
 showProfile = document.getElementById("profile")
    let userTemplate = String.raw `
    <header id="header">
    <h3 id= "name-profile">${nameUser}</h3>
    <h1>hola</h1>
    <span>
          <!--icono twitter-->
          <a href="http://www.twitter.com" target="_blank">
          <i class="far fa-medal fa-3x"></i>
          </a>
        </span>

        <span>
          <!--icono whatsapp-->
          <a href="https://web.whatsapp.com/" target="_blank">
          <i class="far fa-alarm-clock fa-4x"></i>
          </a>
        </span>

    </header>
      `
  showProfile.innerHTML = userTemplate;
} 

