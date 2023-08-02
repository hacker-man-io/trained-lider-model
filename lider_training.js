let model_training = [
  {
    input:
      " Jakie rodzaje tłumaczeń oferuje Państwa biuro tłumaczeń? Czy są to tłumaczenia pisemne, przysięgłe czy zwykłe?"
  },
  {
    input:
      "W ilu językach świadczycie usługi tłumaczeniowe i czy możecie wymienić kilka z nich?"
  },
  {
    input:
      "Jaki jest średni czas realizacji tłumaczenia i czy różni się w zależności od stopnia trudności tekstu?"
  },
  {
    input:
      "Czy możecie opowiedzieć o swojej specjalizacji w tłumaczeniach dowodów rejestracyjnych pojazdów sprowadzonych, dokumentów z odpraw celnych oraz dokumentów zakupu?"
  },
  {
    input:
      "Czy wykonujecie na życzenie tłumaczenia specjalistyczne, takie jak tłumaczenia techniczne i medyczne?"
  },
  {
    input:
      "Czy wasi tłumacze posiadają świadectwa lub certyfikaty w konkretnych językach i czy mają szerokie doświadczenie w swoich dziedzinach?"
  },
  {
    input:
      "Czy moglibyście udzielić więcej informacji na temat procesu zamówienia tłumaczenia i jak dokumenty są dostarczane klientom?"
  },
  {
    input:
      "Czy wasze tłumaczenia są zgodne z branżowymi standardami, a czy posiadacie środki kontroli jakości, aby zapewnić dokładne i niezawodne tłumaczenia?"
  },
  {
    input:
      "W jaki sposób traktujecie poufne lub wrażliwe informacje podane w tłumaczonych dokumentach?"
  },

  {
    input:
      "Co wyróżnia Państwa biuro tłumaczeń spośród innych, a czy posiadacie jakieś referencje lub opinie klientów, które podkreślają jakość Państwa usług?"
  }
];

let model_trainingg = [
  {
    input:
      " Jakie rodzaje tłumaczeń oferuje Państwa biuro tłumaczeń? Czy są to tłumaczenia pisemne, przysięgłe czy zwykłe?",
    output: `Jako biuro tłumaczeń z wieloletnim doświadczeniem wykonujemy tłumaczenia pisemne, przysięgłe i zwykłe. Oferujemy tłumaczenia w 21 językach :
Angielski
Niemiecki
Włoski
Francuski
Niderlandzki
Szwedzki
Słowacki
Ukraiński
Hiszpański
Duński
Norweski
Słoweński
Węgierski
Czeski
Litewski
Rumuński
Łotewski
Grecki
Portugalski
Bułgarski
Fiński
Średni czas realizacji tłumaczenia trwa około dwóch do pięciu dni roboczych w zależności od stopnia trudności tłumaczenia. Specjalizujemy się w tłumaczeniach dowodów rejestracyjnych od pojazdów sprowadzonych , dokumentów z odpraw celnych jak i dokumentów zakupu. Wykonujemy również na zlecenie tłumaczenia techniczne oraz medyczne.`
  }
];

const output = `Jako biuro tłumaczeń z wieloletnim doświadczeniem wykonujemy tłumaczenia pisemne, przysięgłe i zwykłe. Oferujemy tłumaczenia w 21 językach :
Angielski
Niemiecki
Włoski
Francuski
Niderlandzki
Szwedzki
Słowacki
Ukraiński
Hiszpański
Duński
Norweski
Słoweński
Węgierski
Czeski
Litewski
Rumuński
Łotewski
Grecki
Portugalski
Bułgarski
Fiński
Średni czas realizacji tłumaczenia trwa około dwóch do pięciu dni roboczych w zależności od stopnia trudności tłumaczenia. Specjalizujemy się w tłumaczeniach dowodów rejestracyjnych od pojazdów sprowadzonych , dokumentów z odpraw celnych jak i dokumentów zakupu. Wykonujemy również na zlecenie tłumaczenia techniczne oraz medyczne. `;
let i = 0;
for (const key in model_training) {
  model_training[key]["output"] = output;

  //   model_training[i].output = output;
}

console.log("new data");
// console.log(model_training);

module.exports = model_trainingg;
