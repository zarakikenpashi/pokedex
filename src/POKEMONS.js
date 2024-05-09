
import bulbizarre from './assets/bulbizarre.png';
import herbizarre from './assets/herbizarre.png';
import florizarre  from './assets/florizarre.png';
import salameche from './assets/salameche.png';
import reptincel  from './assets/reptincel.png';
import dracaufeu from './assets/dracaufeu.png';
import carapuce  from './assets/carapuce.png';
import carabaffe from './assets/carabaffe.png';
import tortank from './assets/tortank.png';
import chenipan from './assets/chenipan.png';
import chrysacier from './assets/chrysacier.png';
import papilusion from './assets/papilusion.png';

const POKEMONS = [
  {
    id:1,
    name: "Bulbizarre",
    image: bulbizarre,
    category: [
        {
            name: "Plante",
            color: "#9bcc50",
        },
        {
            name: "Poisson",
            color: "#b97fc9",
        },
    ],
    faiblesse: [
        {
            name: "Feu",
            color: "#fd7d24",
        },
        {
            name: "Glace",
            color: "#51c4e7",
        },
        {
            name: "Vol",
            color: "#3dc7ef",
        },
                {
            name: "Psy",
            color: "#f366b9",
        },
    ],
    description: "Au début de sa vie, il se nourrit des nutriments accumulés dans la graine sur son dos. Cela lui permet de grandir."
  },
  {
      id: 2,
      name: "Herbizarre",
      image: herbizarre,
      category: [
          {
              name: "Plante",
              color: "#9bcc50",
          },
          {
              name: "Poisson",
              color: "#b97fc9",
          },
      ],
      faiblesse: [
        {
            name: "Feu",
            color: "#fd7d24",
        },
        {
            name: "Glace",
            color: "#51c4e7",
        },
        {
            name: "Vol",
            color: "#3dc7ef",
        },
                {
            name: "Psy",
            color: "#f366b9",
        },
    ],
    description: "Plus il s’expose au soleil, plus il emmagasine d’énergie, ce qui permet au bourgeon sur son dos de se développer."
  },

  {
      id: 3,
      name: "Florizarre",
      image: florizarre ,
      category: [
          {
              name: "Plante",
              color: "#9bcc50",
          },
          {
              name: "Poisson",
              color: "#b97fc9",
          },
      ],
        faiblesse: [
        {
            name: "Feu",
            color: "#fd7d24",
        },
        {
            name: "Glace",
            color: "#51c4e7",
        },
        {
            name: "Vol",
            color: "#3dc7ef",
        },
                {
            name: "Psy",
            color: "#f366b9",
        },
    ],
    description: "Ce Pokémon est capable de transformer la lumière du soleil en énergie. Il est donc encore plus fort en été."
  },

  {
      id: 4,
      name: "Salamèche",
      image: salameche  ,
      category: [
          {
              name: "Feu",
              color: "#fd7d24",
          }
      ],
        faiblesse: [
        {
            name: "Eau",
            color: "#4592c4",
        },
        {
            name: "Sol",
            color: "#f7de3f",
        },
        {
            name: "Roche",
            color: "#a38c21",
        }
    ],
    description: "La flamme au bout de sa queue représente sa vitalité. Quand Salamèche n’est pas au meilleur de sa forme, elle faiblit."
  },

  {
    id: 5,
      name: "Reptincel",
      image: reptincel,
      category: [
          {
              name: "Feu",
              color: "#fd7d24",
          }
      ],
        faiblesse: [
        {
            name: "Eau",
            color: "#4592c4",
        },
        {
            name: "Sol",
            color: "#f7de3f",
        },
        {
            name: "Roche",
            color: "#a38c21",
        }
    ],
    description: "En agitant sa queue enflammée, il peut élever la température ambiante de manière exponentielle et ainsi tourmenter ses adversaires."
  },

  {
    id: 6,
      name: "Dracaufeu",
      image: dracaufeu,
      category: [
          {
              name: "Feu",
              color: "#fd7d24",
          },
          {
              name: "Vol",
              color: "#3dc7ef",
          }
      ],
        faiblesse: [
        {
            name: "Eau",
            color: "#4592c4",
        },
        {
            name: "Sol",
            color: "#f7de3f",
        },
        {
            name: "Roche",
            color: "#a38c21",
        }
    ],
    description: "Quand Dracaufeu s’énerve réellement, la flamme au bout de sa queue devient bleue."
  },

  
  {id: 7,
      name: "Carapuce",
      image: carapuce,
      category: [
          {
              name: "Eau",
              color: "#4592c4",
          }
      ],
    faiblesse: [
        {
            name: "Plante",
            color: "#9bcc50",
        },
        {
            name: "Electrick",
            color: "#eed535",
        }
    ],
    description: "Ce Pokémon crache une écume redoutable. Après sa naissance, son dos gonfle et durcit pour former une carapace."
  },

  {
    id: 8,
      name: "Carabaffe",
      image: carabaffe,
      category: [
          {
              name: "Eau",
              color: "#4592c4",
          }
      ],
    faiblesse: [
        {
            name: "Plante",
            color: "#9bcc50",
        },
        {
            name: "Electrick",
            color: "#eed535",
        }
    ],
    description: "Sa longue queue touffue est un symbole de longévité. Les personnes âgées apprécient donc particulièrement ce Pokémon."
  },

  {
    id: 9,
      name: "Tortank",
      image: tortank,
      category: [
          {
              name: "Eau",
              color: "#4592c4",
          }
      ],
    faiblesse: [
        {
            name: "Plante",
            color: "#9bcc50",
        },
        {
            name: "Electrick",
            color: "#eed535",
        }
    ],
    description:"Il augmente délibérément sa masse corporelle pour contrer le recul de ses puissants jets d’eau."
  },


  {
    id: 10,
      name: "Chenipan",
      image: chenipan,
      category: [
          {
              name: "Insecte",
              color: "#729f3f",
          }
      ],
    faiblesse: [
        {
            name: "Feu",
            color: "#fd7d24",
        },
        {
            name: "Vol",
            color: "#3dc7ef",
        },
        {
            name: "Roche",
            color: "#a38c21",
        }
    ],
    description: "Pour se protéger, il émet par ses antennes une odeur nauséabonde qui fait fuir ses ennemis."
  },

  {
    id: 11,
      name: "Chrysacier",
      image: chrysacier,
      category: [
          {
              name: "Insecte",
              color: "#729f3f",
          }
      ],
    faiblesse: [
        {
            name: "Feu",
            color: "#fd7d24",
        },
        {
            name: "Vol",
            color: "#3dc7ef",
        },
        {
            name: "Roche",
            color: "#a38c21",
        }
    ],
    description: "En attendant sa prochaine évolution, il ne peut que durcir sa carapace et rester immobile pour éviter de se faire attaquer."
  },

  {
    id: 12,
      name: "Papilusion",
      image: papilusion,
      category: [
          {
              name: "Insecte",
              color: "#729f3f",
          },
          {
              name: "Vol",
              color: "#3dc7ef",
          }
      ],
    faiblesse: [
        {
            name: "Feu",
            color: "#fd7d24",
        },
        {
            name: "Vol",
            color: "#3dc7ef",
        },
        {
            name: "Roche",
            color: "#a38c21",
        }
    ],
    description: "Ce Pokémon raffole du nectar des fleurs. Il est capable de dénicher des champs fleuris même s’ils n’ont qu’une quantité infime de pollen."
  },
]

export default POKEMONS