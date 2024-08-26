
let heroiLvl = 1;
let NomeHeroi = "DROP Assassino de Noob" + "!";
let completeMissao = 0; // MISSÕES REALIZADAS PELO JOGADOR
completeMissao++;
let LevelXP = 0;
let rank = "Ferro"; // PRIMEIRO NÍVEL
let PontosXP = 0; // VERIFICANDO O RANK ATUAL DO HEROI COM BASE NO XP ATUAL

function MissaoRealizadas() {
  PontosXP += 100;
  completeMissao++;

  console.log("Você completou uma Missão! \n", "XP + 100" + "\n");
}  
  if (PontosXP <= 1000) {
    rank = "FERRO";
  } else if (PontosXP >= 1001 && PontosXP <= 2000) {
    rank = "BRONZE";
  } else if (PontosXP >= 2001 && PontosXP <= 5000) {
    rank = "PRATA";
  } else if (PontosXP >= 5001 && PontosXP <= 7000) {
    rank = "OURO";
  } else if (PontosXP >= 7001 && PontosXP <= 8000) {
    rank = "PLATINA";
  } else if (PontosXP >= 8001 && PontosXP <= 9000) {
    rank = "ASCENDENTE";
  } else if (PontosXP >= 9001 && PontosXP <= 10000) {
    rank = "IMORTAL";
  } else if (PontosXP >= 10001 && PontosXP <= 11000) {
    rank = "RADIANTE";
  }

// SIMULAÇÃO CASO O HERÓI TENHA REALIZADO AS MISSÕES E ACUMULADO PONTOS DE XP
for (let i = 1; i <= 1; i++) {
    console.log("Missao realizadas: " +  completeMissao);
    MissaoRealizadas();
  
    let CalculoXP = PontosXP - LevelXP;
  
    while (CalculoXP >= 0) {
      heroiLvl++;
      console.log(
        "PARABÉNS, " + NomeHeroi,
        "VOCÊ SUBIU DE NÍVEL! \n",
        "NOVO NÍVEL: " + heroiLvl + "\n"
      );
      LevelXP += 1000
      CalculoXP = PontosXP - LevelXP;
      MissaoRealizadas();
    }
  }
  LevelXP = LevelXP - PontosXP
  console.log(
    "SEU SALDO ATUAL DE XP É DE: " + PontosXP + "\n",
    "E FALTAM " + LevelXP + " PONTOS DE XP PARA ALCANÇAR O PRÓXIMO NÍVEL" +
    "\n" +
    "(RANK ATUAL: " + rank + ")"
  );