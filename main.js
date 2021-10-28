// Eliana Rodrigues, P1 WD2, FBAUP, x.10.2021

// IMPORTANTE: Esta página só funciona em mobile no Google Chrome.
// Para que funcione é necessária a ativação da seguinte flag no google chrome relativa ao ambient light sensor: "chrome://flags/#enable-generic-sensor-extra-classes"

console.log("estou a funcionar");

// TRANSPARENCY
// AMBIENT LIGHT SENSOR (basedo em: https://variablefonts.dev/posts/light-sensor-demo/)
let text = document.querySelector("h1");

text.addEventListener("input", function () {
  this.setAttribute("data-text", this.innerText);
});

// Valor mínimo e máximo de weight da fonte selecionada
const minAxisValue = 900;
const maxAxisValue = 100;

// Valor mínimo e máximo selecionados para o nível de luminosidade
const minEventValue = 0;
const maxEventValue = 1000;

text.style.setProperty("--axis", 100);

// Verifica se o ambient light sensor está a funcionar
if ("AmbientLightSensor" in window) {
  const sensor = new AmbientLightSensor();
  sensor.onreading = () => {
    fluidAxisVariation(
      minAxisValue,
      maxAxisValue,
      minEventValue,
      maxEventValue,
      sensor.illuminance,
      "--axis",
      text
    );

    // console.log('Current light level:', sensor.illuminance);
  };
  // Caso não haja acesso ao ambient light sensor
  sensor.onerror = (event) => {
    console.log(event.error.ghname, event.error.message);
    // Display mensagem de erro se o ecrã tiver menos de 768px de width (mobile)
    window.addEventListener("resize", function () {
      if (window.matchMedia("(max-width: 768px)").matches) {
        document.querySelector("#erro").style.display = "block";
      }
    });
  };
  sensor.start();
}

// Fluid Axis Variation Event
function fluidAxisVariation(
  minimumAxisValue,
  maximumAxisValue,
  minimumEventValue,
  maximumEventValue,
  eventValue,
  axisCustomPropertyName,
  element
) {
  const minAxisValue = minimumAxisValue;
  const maxAxisValue = maximumAxisValue;
  const minEventValue = minimumEventValue;
  const maxEventValue = maximumEventValue;
  const currentEventValue = eventValue;

  const eventPercent =
    (currentEventValue - minEventValue) / (maxEventValue - minEventValue);
  const fontAxisScale =
    eventPercent * (minAxisValue - maxAxisValue) + maxAxisValue;

  const newAxisValue =
    currentEventValue > maxEventValue
      ? minAxisValue
      : currentEventValue < minEventValue
      ? maxAxisValue
      : fontAxisScale;

  element.style.setProperty(axisCustomPropertyName, newAxisValue);
}

//---------------------------------------------------------------------------------------------------

// BOTÕES MUDAR DE PÁGINA

// Verifica se o 1º botão "->" foi clicado
let btnt = document.querySelector("#btn-t");
btnt.addEventListener("click", mudaPagina);

function mudaPagina() {
  console.log("o botão foi clicado");
  // Apagar elementos da TRANSPARENCY
  document.querySelector("#erro").style.display = "none";
  document.querySelector("#aviso").style.display = "none";
  document.querySelector(".transparency").style.display = "none";
  // Adicionar elementos da PRIVACY
  document.querySelector(".privacy").style.display = "flex";
  // Muda o título do documento
  document.title = "Privacy";
}

// Verifica se o 2º botão "->" foi clicado
let btnp = document.querySelector("#btn-p");
btnp.addEventListener("click", mudaPagina2);

function mudaPagina2() {
  console.log("o botão foi clicado");
  // Apagar elementos da PRIVACY
  document.querySelector(".privacy").style.display = "none";
  // Adicionar elementos da TRANSPARENCY
  document.querySelector(".transparency").style.display = "flex";
  // Muda o título do documento
  document.title = "Transparency";
}

//---------------------------------------------------------------------------------------------------

// PRIVACY

// MULTIPLICAR PALAVRAS ONCLICK

// let i = 0;
// let double = document.querySelector("#privacy");
// double.addEventListener("click", duplicate);

// function duplicate() {

//   // CLONAR PALAVRAS

//   // console.log("duplicar palavras");
//   // clone = double.cloneNode(true);
//   // double.appendChild(clone);
//   //clone.id = "duplic" + ++i;

// INPUT BOX (baseado em: http://jsfiddle.net/6eTcD/2/)

let form = document.querySelector("form");
form.addEventListener("submit", textForm);

function textForm(e) {
  //O preventDefault cancela o evento, ou seja, previne que o botão 'submit' submeta o formulário
  e.preventDefault();

  //Descobre quais são as dimensões da janela atual
  let fullWidth = window.innerWidth;
  let fullHeight = window.innerHeight;

  let word = this.querySelector("input[type='text']").value;

  let elem = document.createElement("div");
  elem.textContent = word;
  elem.style.position = "absolute";
  // Gerar um número aleatório entre dois valores: Math.random () * (max - min) + min;
  elem.style.fontSize = Math.round(Math.random() * (120 - 50) + 50) + "px";
  elem.style.fontFamily =
    "GridlitePEVFTRIAL-All, Courier New, Courier, monospace";
  elem.style.fontWeight = 200;
  elem.style.fontVariationSettings = '"ESHP" 3, "BACK" 1';
  elem.style.cursor = "default";
  // Posições random
  elem.style.left =
    Math.round(Math.random() * (fullWidth - 50 - 25) + 25) + "px";
  elem.style.top =
    Math.round(Math.random() * (fullHeight - 50 - 25) + 25) + "px";
  document.body.appendChild(elem);

  // Giroscópio
  // Verifica se o dispositivo tem acesso ao giroscópio
  if (window.DeviceOrientationEvent) {
    window.addEventListener(
      "deviceorientation",
      function (event) {
        // beta: front back motion
        let frontToBack = event.beta;

        handleOrientationEvent(frontToBack);
      },
      true
    );
  }

  let handleOrientationEvent = function () {
    elem.style.fontVariationSettings = '"ESHP" 1, "BACK" 190';
    elem.style.transition = "all 3s";
  };

  // Efeito em hover com a fonte variável
  elem.addEventListener("mouseover", efeitoHover);
  function efeitoHover() {
    elem.style.fontVariationSettings = '"ESHP" 1, "BACK" 190';
    elem.style.transition = "all 3s";
  }

  // elem.addEventListener("mouseout", efeitoHoverOut);
  // function efeitoHoverOut() {
  //   elem.style.fontWeight = 200;
  //   elem.style.transition = "all 2s";
  // }
}

// function randomizeText() {
//   randomWeight = Math.random() * (900 - 100) + 100;
//   elem.style.fontWeight = randomWeight;
// }
// setInterval(randomizeText, 1000);
