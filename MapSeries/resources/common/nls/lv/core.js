﻿define({
	root: ({
		commonCore: {
			common: {
				add: "Pievienot",
				edit: "Rediģēt",
				save: "Saglabāt",
				next: "Nākamais",
				cancel: "Atcelt",
				back: "Atpakaļ",
				apply: "Lietot",
				close: "Aizvērt",
				open: "Atvērt",
				start: "Starts",
				loading: "Ielādē",
				disabledAdmin: "Šo elementu ir atspējojis administrators",
				width: "Platums",
				height: "Augstums"
			},
			inlineFieldEdit: {
				editMe: "Rediģē mani!"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME% veidotājs",
				buttonSaving: "Saglabāšana",
				buttonSaved: "Saglabāts",
				buttonShare: "Kopīgot",
				buttonSettings: "Iestatījumi",
				buttonHelp: "Palīdzība",
				buttonPreview: "Skatīt tiešraidē",
				tooltipFirstSave: "Tas nav pieejams pirms saglabāšanas.",
				tooltipNotShared: "Tas nav pieejams pirms kopīgošanas.",
				noPendingChange: "Nav neizpildītu izmaiņu",
				unSavedChangePlural: "Gaida izmaiņas",
				closeWithPendingChange: "Vai tiešām vēlaties apstiprināt šo darbību? Jūsu veiktās izmaiņas tiks zaudētas.",
				saveError: "Saglabāt neizdevās, lūdzu, mēģiniet vēlreiz",
				shareStatus1: "Lietotne vēl nav saglabāta",
				shareStatus2: "Lietotne tiek publiski koplietota",
				shareStatus3: "Lietotne tiek koplietota organizācijā",
				shareStatus4: "Lietotne netiek koplietota"
			},
			saveError: {
				title: "Saglabājot aplikāciju, radās kļūda",
				err1Div1: "Aplikāciju nevar saglabāt, jo jums jau ir cita vienība ar tādu pašu nosaukumu (skatiet savu <a class='linkagolroot' target='_blank'>satura mapi</a>).",
				err1Div2: "Lūdzu, modificējiet savas aplikācijas nosaukumu un saglabājiet to.",
				btnOk: "Rediģēt aplikācijas nosaukumu"
			},
			share: {
				firstSaveTitle: "Lietotne veiksmīgi saglabāta",
				firstSaveHeader: "Jūsu aplikācija tagad  ir saglabāta portālā %PORTAL%, bet vēl nav kopīgota.",
				firstSavePreview: "Priekšskatījums",
				firstSaveShare: "Kopīgot",
				firstSaveA1: "Ja vēl neesat izmantojis %PORTAL% vai vēlaties izveidot īsinājumikonu, lai piekļūtu veidotāja saskarnei, varat saglabāt šādu saiti: %LINK1%",
				firstSaveA1bis: "Aplikāciju varat atrast arī savā <a href='%LINK2%' target='_blank'>%PORTAL% satura mapē</a>.",
				shareTitle: "Koplietot jūsu aplikāciju",
				sharePrivateHeader: "Jūsu aplikācija nav koplietota. Vai vēlaties to koplietot?",
				sharePrivateBtn1: "Koplietot publiski",
				sharePrivateBtn2: "Kopīgot ar manu organizāciju",
				sharePrivateWarning: "%WITH% koplietošana ir atspējota, jo jūs neesat <a href='%LINK%' target='_blank'>web kartes</a> īpašnieks.",
				sharePrivateWarningWith1: "publiski",
				sharePrivateWarningWith2: "publiski un organizācijā",
				sharePrivateProgress: "Notiek kopīgošana...",
				sharePrivateErr: "Kopīgošana neizdevās, mēģiniet vēlreiz vai",
				sharePrivateOk: "Kopīgošana veiksmīgi atjaunināta, ielādē...",
				shareHeader1: "Jūsu aplikācijai var <strong>piekļūt publiski</strong>.",
				shareHeader2: "Jūsu aplikācijai var piekļūt jūsu organizācijas dalībnieki (nepieciešama pieteikšanās).",
				shareLinkCopy: "Kopēt",
				shareLinkCopied: "Kopēts",
				shareQ0: "Kā iegult aplikāciju web lapā?",
				shareQ1Opt1: "Kā saglabāt aplikāciju privātu?",
				shareQ1Opt2: "Kā saglabāt aplikāciju privātu vai koplietot to publiski?",
				shareA1: "Izmantojiet %SHAREIMG% <a href='%LINK1%' target='_blank'>aplikācijas vienību lapā</a>.",
				shareQ2bis: "Kā pāriet atpakaļ uz veidotāja saskarni?",
				shareA2div1: "Saglabājiet un atkārtoti izmantojiet saiti %LINK1% vai izmantojiet <a href='%LINK2%' target='_blank'>aplikācijas vienības lapu</a>.",
				shareA2div2: "Ja jūs kā aplikācijas īpašnieks pierakstāties portālā %PORTAL%, aplikācijā būs iekļauta poga, lai atvērtu veidotāju:",				
				shareQ3: "Kur tiek glabāti dati?",
				shareA3: "%TPL_NAME% dati un konfigurācija tiek glabāti <a href='%LINK2%' target='_blank'>šajā tīmekļa aplikācijas elementā</a>. Ja izmantojāt Flickr, Picasa, Facebook vai YouTube importēšanu, jūsu attēli un video nav dublēti portālā %PORTAL%."
			},
			settings: {
				header: "Iestatījumi",
				tabError: "Lūdzu, pārbaudiet visas cilnes, vai nav kļūdu"
			},
			settingsLayout: {
				title: "Izkārtojums",
				explain: "Kādu izkārtojumu vēlaties izmantot?",
				explainInit: "Varat mainīt izkārtojumu jebkurā laikā iestatījumu dialoglodziņā.",
				viewExample: "Skatiet piemēru tiešraidē"
			},
			settingsTheme: {
				title: "Tēma"
			},
			settingsHeader: {
				title: "Galvene",
				logoEsri: "Esri logotips",
				logoNone: "Nav logotipa",
				logoCustom: "Pielāgots logotips",
				logoCustomPlaceholder: "URL (maks. 250x50 pikseļi)",
				logoCustomTargetPlaceholder: "Klikšķis caur saiti",
				logoSocialExplain: "Pielāgojiet galvenes saiti.",
				logoSocialText: "Teksts",
				logoSocialLink: "Saite",
				lblSmallHeader: "Lietot kompaktu galveni (bez apakšvirsraksta)"
			},
			header: {
				title: "Rediģējiet sava %TPL_NAME% nosaukumu",
				subtitle: "Rediģējiet sava %TPL_NAME% apakšnosaukumu"
			}
		}
	}),
	"ar": 1,
	"cs": 1,
	"da": 1,
	"de": 1,
	"el": 1,
	"es": 1,
	"et": 1,
	"fi": 1,
	"fr": 1,
	"he": 1,
	"it": 1,
	"ja": 1,
	"ko": 1,
	"lt": 1,
	"lv": 1,
	"nl": 1,
	"nb": 1,
	"pl": 1,
	"pt-br": 1,
	"pt-pt": 1,
	"ro": 1,
	"ru": 1,
	"sv": 1,
	"th": 1,
	"tr": 1,
	"vi": 1,
	"zh-cn": 1,
	"zh-hk": 1, 
	"zh-tw": 1 
});
