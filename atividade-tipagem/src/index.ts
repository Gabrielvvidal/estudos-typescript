const spaceships: any[] = []

function createSpaceship() {
  const spaceshipName = prompt("Crie um nome para a nave: ") || "Nave desconhecida"

  const spaceshipPilot = prompt("Insira o nome do piloto da nave: ") || "Piloto desconhecido"

  const spaceshipCrewLimit = Number(prompt("Insira a quantidade máxima de tripulação permitida na nave: ")) || 5

  const newSpaceship = {
    name: spaceshipName,
    pilot: spaceshipPilot,
    crewLimit: spaceshipCrewLimit,
    crew: [],
    inMission: false
  }

  spaceships.push(newSpaceship)

  console.log(spaceships)

  return
}

let menu: boolean = true
let option: number = 0

do{
  option = Number(prompt(
    "Qual opção você deseja? Digite o número da opção.\n\n" +
    "1- Cadastrar uma nave\n" +
    "2- Cadastrar tripulação\n" +
    "3- Enviar uma nave para missão\n" +
    "4- Consultar naves cadastradas\n" +
    "5- Sair\n\n"
  ))

  switch (option) {
    case 1:
      createSpaceship()
      break;
    
    case 5:
      const verificacao = confirm("Deseja realmente sair?")

      if (verificacao === false) {
        option = 0
      }
      break;
    default:
      alert("Selecione uma opção válida!!!")
      break;
  }
} while (option < 5)