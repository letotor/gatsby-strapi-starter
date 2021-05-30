module.exports = {
  authorName: "Victor de Germain",
  authorAvatar: "../images/avatar.jpg",
  cv: "../upload/cv/eni/cv-vdg.pdf",
  siteTitle: "Victor de GERMAIN ",
  subTitle: "Développeur JAVA EE & front-end en devenir",
  siteDescription: `Developpeur avec forte appétence reactJS`,
  keyWords: ["gatsbyjs", "react", "curriculum"],
  twitterUsername: "_",
  githubUsername: "letotor",
  authorDescription: `Passionné et curieux des nouvelles technologies, j'ai travaillé plusieurs années en tant que développeur java back en autodidacte. J’ai commencé mes débuts en 2007 en R&D dans l’analyse et la mise en place d’algorithmes spécifiques dans le traitement d’images biomédicales. J’ai acquis, par cette expérience, des notions sur le langage JAVA. 
  Apres un détour en tant qu'installateur thermique et sanitaire, j'ai la volonté, aujourd'hui, de revenir vers le développement et tout particulièrement coté front-end. J’ai un intérêt prononcé pour les stacks gravitant autour du JavaScript`,

  authorDescriptionMore: `En effet depuis quelques années, le développement coté front est en plein bousculement avec l'avènement des générateurs de sites statiques tel que gatsby, les cms headless avec le \`frenchy\` strapi et la consommation des apis. Il s'agit de LA JAMSTACK. Elle permet de concevoir une nouvelle façon de développer, plus simple, plus performante et d'une grande scalabilité. C'est sur cet écosystème passionnant que mes efforts se dirigent naturellement. Le design n'est pas en reste aussi. Il prend une part de plus en plus prépondérante dans la conception d'un site web et améliore aussi l'expérience utilisateur (design UX/UI). L'outil Figma permet de concevoir des maquettes visuelles efficaces et collaboratives. Le métier de développeur est donc en pleine mutation avec différentes spécialisations et fonctions. Il faut donc sans cesse faire de la veille... ce qui ne me déplaît pas, bien au contraire ! C'est dans ce sens que j'évolue et j'apprends constamment. Maintenant je souhaite mettre à profit et consolider mes compétences pour réintégrer le monde de l’entreprise et ainsi devenir développeur web specialisé front-end `,

  company: {
    description: `OpenClassrooms et sa formation en alternance de qualité sauront répondre à mes objectifs professionnels et seront les éléments déclencheurs pour ma réussite professionnelle et ma remise à niveau. Mon profil et parcours atypique, dans le secteur privé et public, ma pugnacité et ma curiosité permettront de me réaliser pour devenir un développeur front-end opérationnel.`,
    color: `#4b3aa9`,
  },
  background_color: "#ffffff",
  theme_color: "#25303B",
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch

  contact: {
    prenom: "Victor",
    nom: "de GERMAIN",
    adresse: "1 Plaisance, 44260 Lavau sur loire",
    email: "v.degermain@gmail.com",
    tel: "06 16 80 17 46",
  },

  skills: [
    {
      flag: 1,
      name: "JAVA 8",
      level: 70,
    },
    {
      flag: 1,
      name: "HTML 5",
      level: 70,
    },
    {
      flag: 1,
      name: "CSS 3 - bootstrap",
      level: 50,
    },
    {
      flag: 1,
      name: "JavaScript ES6",
      level: 40,
    },

    {
      flag: 2,
      name: "IDE eclipse - vscode",
      level: 90,
    },
    {
      flag: 2,
      name: "windows, linux - shell, bash",
      level: 40,
    },
    {
      flag: 2,
      name: "cms wordpress",
      level: 70,
    },
    {
      flag: 2,
      name: "Figma (ui design)",
      level: 40,
    },

    {
      flag: 3,
      name: "Rigueur",
      level: 80,
    },
    {
      flag: 3,
      name: "Autonomie - autodidacte",
      level: 90,
    },
    {
      flag: 3,
      name: "Travail en équipe",
      level: 70,
    },
    {
      flag: 3,
      name: "Communiquant",
      level: 50,
    },

    /* more skills here */
  ],

  jobs: [
    /* more jobs here */

    {
      title: "Développeur-integrateur site creaculture ",
      visible: true,
      pageBreak: false,
      occupation: ``,
      company: ``,
      where: ``,
      begin: {
        month: "Mars",
        year: "2021",
      },
      end: {
        month: "",
        year: "Maintenant",
      },
      duration: "",
      description: `Creaculture est un site e-commerce avec une partie blog également. Ce site propose la vente de légumes bio, des produits locaux et bien être mais aussi des formations en ligne téléchargeables après paiement.`,
      task: [
        ` Recueil des besoins client.`,
        ` Déploiement et maintenance chez hebergeur.`,
        ` Mise en place d'environnement dev, pre-prod et prod.`,
        ` Gestion de differentes branches sous git.`,
        ` Intégration de differents plugins.`,
        ` Configuration de stripe et woocomerce.`,
        ` Utilisation des Hooks add et filter.`,
        ` SEO - Réferencement avec google search console.`,
        ` Intégration et création de la newsletter.`,
        ` Redefinition visuelle de l'interface backend wordpress.`,
        ` Création de l'identité visuelle de l'entreprise.`,
        ` Customisation du thème principal et création d'un thème enfant.`,
        ` Création du catalogue des fiches produits et formations.`,
        ` Suivi et gestion des tickets sous JIRA.`,
      ],
      method: `Kanban`,
      keywords: [
        `Wordpress 5.7`,
        `Figma`,
        `SendinBlue`,
        `GitHub`,
        `Jira`,
        `CSS`,
        `AOS`,
        `Php`,
        `Laragon`,
        `Vscode`,
      ],
    },

    {
      title: "Développeur Java backend ",
      visible: true,
      pageBreak: false,
      occupation: ``,
      company: `Hercule pro `,
      where: `sautron, Nantes`,
      begin: {
        month: "Mars",
        year: "2019",
      },
      end: {
        month: "",
        year: "6 mois",
      },
      duration: "",
      description: `Editeur dans la menuiserie. Application web pour la réalisation du chiffrage et des devis pour les artisans.
                    Mise à disposition d'un large choix de bibliothèques pour la gestion des catalogues fournisseurs.`,
      task: [
        ` Maintenance corrective.`,
        `Développement de batch java pour la gestion de catalogue.`,
        ` Mise à jour et conversion pour la gestion catalogue (DBISAM - mariadb)`,
        ` Intégration de service de devis externe (api rest).`,
        ` Intégration des données des différents fournisseurs dans la fullweb V5`,
      ],
      method: `Kanban`,
      keywords: [
        `JAVA 8`,
        `Delphi`,
        `Embarcadero`,
        `Eclipse`,
        `API Rest`,
        `Postman`,
        `JFX`,
      ],
    },

    {
      title: "Installateur en thermique et sanitaire ",
      visible: true,
      pageBreak: false,
      occupation: ``,
      company: `Interim & mairie de Saint-Nazaire`,
      where: ``,
      begin: {
        month: "",
        year: "2017",
      },
      end: {
        month: "",
        year: "2019",
      },
      duration: "",
      description: `Divers missions pour l'installation de reseau d'eau et pose d'équipements sanitaires.`,
      task: [
        ` Agent de maintenance currative et preventive pour la ville de Saint-Nazaire.`,
        ` Intervention dans toutes les structures publiques (écoles, bibliothèques etc...).`,
      ],
      method: ``,
      keywords: [],
    },

    {
      title: "Développeur Java backend ",
      visible: false,
      pageBreak: false,
      occupation: ``,
      company: `Steria - Sopra`,
      where: `St Herblain, Nantes`,
      begin: {
        month: "",
        year: "2013",
      },
      end: {
        month: "",
        year: "2015",
      },
      duration: "",
      description: `Au sein du centre de service je suis intervenu sur différents projets :`,
      task: [
        ` Projet SIMAT (armée de terre ). Refonte du SI pour la gestion du matériel terrestre de l'armée de terre. Développements, tests unitaires, livraisons, chiffrage, correction de bugs.`,
        ` Travaux transverses. Mise en place de mock service ( SOAPUI) dans le cadre de la phase de développement du projet SIMAT.`,
      ],
      method: `Kanban`,
      keywords: [
        `JAVA 8`,
        `JSF (easyForm)`,
        `Hibernate`,
        `maven`,
        `jenkins`,
        `tomcat`,
        `JAXB`,
        `eclipse`,
        `JAXB`,
        `gitlab`,
        `Junit`,
      ],
    },

    {
      title: "Développeur junior java backend ",
      visible: true,
      pageBreak: false,
      occupation: ``,
      company: `ADP-GSI France`,
      where: `carquefou, Nantes`,
      begin: {
        month: "",
        year: "2011",
      },
      end: {
        month: "",
        year: "8 mois",
      },
      duration: "",
      description: `En prestation chez ADP, leader mondial des services pour la gestion de la paie et des ressources humaines, j’ai intégré l'équipe service client puis l'équipe projet pour le développement de l'IHM GXPLINK. Mes missions :`,
      task: [
        ` Analyses et corrections d’anomalies.`,
        ` Evolution de l'IHM (jsp).`,
        ` Recette des applications.`,
        ` Service client (support utilisateur).`,
      ],
      method: `Cycle en V`,
      keywords: [
        `JAVA 6`,
        `Jsp`,
        `Servlet`,
        `Taglib`,
        `javascript`,
        `Gougar`,
        `SVNsubversion`,
        `Mainframe`,
        `glassfish`,
        `eclipse`,
      ],
    },

    {
      title: "Ingénieur R&D , porteur de projet Télévasc ",
      visible: true,
      pageBreak: false,
      occupation: ``,
      company: `CHU d'Angers - CNRS 6214`,
      where: ``,
      begin: {
        month: "",
        year: "2007",
      },
      end: {
        month: "",
        year: "2011",
      },
      duration: "",
      description: `La Plateforme Télévasc a pour objectif de promouvoir et mettre à disposition des professionnels de la santé et de la recherche, des logiciels d’analyse basés sur la technologie JAVA pour l’étude des signaux physiologiques et des images echo-Doppler. Mes missions :
                    Porteur/ valorisation/ gestion du projet Télévasc.`,
      task: [
        ` Développement d’applets sous eclipse.`,
        ` Développement d’algorithmes en analyse d’images et traitement de signal.`,
        ` Webmaster des sites internet Télévasc et du master M2R sous Joomla.`,
        ` Recueil des données dans le cadre d’études multicentriques.`,
        `  Responsable des stagiaires.`,
      ],
      method: `Cycle en V`,
      keywords: [
        `JAVA 6`,
        `Itext`,
        `JasperReport`,
        `Eclipse`,
        `Joomla`,
        `Matlab`,
        `GantProject`,
      ],
    },

    {
      title: "Ingénieur apprenti R&D ",
      visible: true,
      pageBreak: false,
      occupation: ``,
      company: `CHU d'Angers`,
      where: ``,
      begin: {
        month: "",
        year: "2006",
      },
      end: {
        month: "",
        year: "",
      },
      duration: "6 mois",
      description: `Etude et réalisation d'une interface graphique sous MATLAB pour la quantification du diamètre artériel.`,
      task: [],
      method: `Gant project`,
      keywords: [`Matlab`],
    },
  ],

  formations: [
    {
      title: "Titre professionnel Installateur en thermique et sanitaire",
      visible: true,
      pageBreak: false,
      year: "2016",
      lieu: "AFPA Saint herblain - Nantes",
      description: "",
    },
    {
      title: "Lauréat et prix special du jury(Télévasc)",
      visible: true,
      pageBreak: false,
      year: "2007",
      lieu: "Angers technopole",
      description: "",
    },
    {
      title: "Master Ingénierie en optoélectronique, Signal et Imagerie",
      visible: true,
      pageBreak: false,
      year: "2006",
      lieu: "Université d'Angers",
      description: "",
    },
    {
      title: "Maitrise physique et application",
      visible: true,
      pageBreak: false,
      year: "2005",
      lieu: "Université d'Angers",
      description: "",
    },
    {
      title: "Baccalauréat scientifique spécalité physique - chimie",
      visible: true,
      pageBreak: false,
      year: "2000",
      lieu: "Lycée Joachim du bellay - Angers",
      description: "",
    },
  ],

  hobbies: [
    {
      title: "Veille technologique",
      year: "",
      description: "",
      keywords: [
        `cms headless`,
        `strapi`,
        `reactJS`,
        `bootstrap`,
        ` styleComponent`,
        `design UX / UI`,
        `figma`,
        `wordpress`,
        `docker`,
        `graphQl`,
        `mongoDb`,
        `PASS heroku / netlify`,
        `nocode(zapier, webuilder)`,
      ],
    },
    {
      title: "Permaculture",
      year: "",
      where: "",
      description: `Gestion et administrateur d'un groupe facebook de 800 personnes. L'objectif est de faire connaitre et échanger les differentes techniques sur la permaculture.`,
      keywords: [],
    },
    {
      title: "Association les lutins du sillon",
      year: "",
      description: `Bénévole pour l'association de la halte garderie de savenay`,
      keywords: [],
    },
    {
      title: "Instruments de musique",
      year: "",
      where: "",
      description: `Pratique quotidienne de la batterie.
                    Pratique hebdomadaire du piano ( improvisation style jazz) , après dix années de conservatoire regional.
                    Intêret également pour la MAO et la hifi.`,
      keywords: [],
    },
    {
      title: "Méditation",
      year: "",
      description: `Pratique depuis plus de 6 mois de la méditation via podcasts youtube et petit bambou.
                      Intêret sur le developpement personnel.`,
      keywords: [],
    },
  ],

  portifolio: [
    {
      image: "/images/gatsby-starter-cv.png",
      description: "Gatsby starter CV template",
      url: "https:/www.gatsby-starter-cv/",
    },
    {
      image: "/images/gatsby-starter-cv.png",
      description: "Gatsby starter CV template",
      url: "https:/www.gatsby-starter-cv/",
    },

    /* more portifolio items here */
  ],
  social: {
    facebook: {
      enable: true,
      url: "https://facebook.com/VGWebcreation",
    },
    twitter: {
      enable: false,
      url: "https://twitter.com/",
    },
    linkedin: {
      enable: true,
      url: "https://www.linkedin.com/in/vdegermain/",
    },
    github: {
      enable: true,
      url: "https://github.com/letotor",
    },
    email: {
      enable: true,
      url: "v.degermain@gmail.com",
    },
  },

  siteUrl: "https://www/gatsbystarter-cv",
  pathPrefix: "/gatsby-starter-cv", // Note: it must *not* have a trailing slash.
  siteCover: "/images/cover.jpeg",
  googleAnalyticsId: "UA-000000000-1",

  display: "minimal-ui",
  icon: "src/assets/gatsby-icon.png",
  headerLinks: [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Portifolio",
      url: "/portifolio",
    },
  ],
}