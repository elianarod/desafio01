// Instruções
alert(
  "Lê com atenção e responde atentamente. A tua vida depende disso. Boa sorte, vais precisar."
);

// Botão try again dá refresh na página
function myFunction() {
  location.reload();
}

// Definir variável
let nome = prompt("Por favor insere o teu nome para iniciar o jogo.");

// Início da história
alert(
  "É uma sexta à noite após um longo dia de trabalho fora da cidade. Decides passar a noite num motel situado numa zona remota nos subúrbios da cidade. Chegando à recepção, o funcionário dá-te a chave do teu quarto mas alerta-te que o quarto que se situa ao lado do teu, que não tem número na porta, está fora dos limites. O dia foi longo e estás cansado por isso diriges-te imediatamente à cama sem pensar no assunto. São agora 3:30 da manhã e acordas com um sussurro vindo do quarto ao lado: *" +
    nome +
    "* *" +
    nome +
    "*. Qual é o teu próximo passo?"
);

let ronda1 = prompt(
  "A. Devia estar a sonhar, vou voltar a dormir.\nB. Vou investigar a origem do som.\nC. Vou bater na parede até que o barulho pare.",
  "a, b ou c"
);

// Verifica a resposta da ronda 1
if (ronda1 == "a") {
  alert(
    "Uh oh... Enquanto dormias foste assassinado e esquartejado. Tenta novamente."
  ),
    location.reload(forceReload);
} else if (ronda1 == "b") {
  alert(
    "Diriges-te à porta sem número. Com certeza está trancada e por isso nem a tentas abrir. Encostas a orelha na madeira gélida da porta e percebes que o barulho vem do seu interior. Dobras-te e olhas pelo buraco da fechadura. Examinas o quarto de um canto ao outro e deparas-te com uma figura feminina imóvel com uma pele extremamente pálida junto da parede do fundo. Ficas a observar confuso durante algum tempo até que a figura se vira bruscamente na tua direção. Tu saltas para trás."
  );
} else if (ronda1 == "c") {
  alert(
    "Booooh... O barulho não parou e ficou cada vez mais alto até se tornar ensurdecedor e arrebentar com os teus tímpanos. Tenta novamente."
  ),
    location.reload(forceReload);
} else {
  alert("Resposta incorreta. Tenta novamente."), location.reload(forceReload);
}

let ronda2 = prompt(
  "A. Vou voltar ao meu quarto.\nB. Vou bater à porta.\nC. Vou correr o mais rápido possível.",
  "a, b ou c"
);

// Verifica a resposta da ronda 2
if (ronda2 == "a") {
  alert(
    "Depois do susto decides regressar ao teu quarto e dormir o resto da noite de modo a organizares os teus pensamentos. No dia seguinte, regressas à porta e olhas através da fechadura. Desta vez, tudo o que vês é vermelhidão. Pensas que talvez os habitantes do quarto, por saberem que tinham sido espiados, tenham bloqueado a fechadura com algo vermelho. A curiosidade é mais forte que tu e diriges-te à recepção à procura de mais informações sobre o misterioso quarto sem número."
  );
} else if (ronda2 == "b") {
  alert(
    "Ups... A curiosidade matou o gato. A tua alma foi sugada e o teu corpo ingerido de uma só vez. Tenta novamente."
  ),
    location.reload(forceReload);
} else if (ronda2 == "c") {
  alert(
    "AHHHH... Tropeças num degrau e cais 4 andares para a tua morte. Tenta novamente."
  ),
    location.reload(forceReload);
} else {
  alert("Resposta incorreta. Tenta novamente."), location.reload(forceReload);
}

let ronda3 = prompt(
  "'Espreitou pelo buraco da fechadura?' - Pergunta o recepcionista entre um suspiro.\nA. Sim.\nB. Não.",
  "a ou b"
);

// Verifica a resposta da ronda 3
if (ronda3 == "a") {
  alert(
    "'Tudo bem, vou-lhe contar o que aconteceu nesse quarto há cerca de uma década.' continua o recepcionista. 'Um casal suicidou-se durante a sua lua de mel. Mas este casal não era vulgar - tinham uma pele muito branca e uns olhos vermelhos vivos.'"
  ),
    (document.body.style.backgroundColor = "#d10006"); // Muda a cor do background para vermelho
  // Altera o título HTML
  document.querySelector("h1").innerText = "Fim.";
} else if (ronda3 == "b") {
  alert(
    "Hmmmm... Mais depressa se apanha um mentiroso do que um coxo. O recepcionista viu-te pelo sistema de vigilância a espreitar hoje de manhã. Tenta novamente."
  ),
    location.reload(forceReload);
} else {
  alert("Resposta incorreta. Tenta novamente."), location.reload(forceReload);
}
