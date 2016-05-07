﻿define({
	root: ({
		viewer: {
			common: {
				close: "Zavřít"
			},
			loading: {
				long: "Příběh se inicializuje",
				long2: "Děkujeme za strpení",
				failButton: "Znovu načíst příběh"
			},
			signin: {
				title: "Je vyžadováno ověření",
				explainViewer: "Pro přístup k příběhu se přihlaste pomocí účtu na %PORTAL_LINK%.",
				explainBuilder: "Chcete-li příběh nakonfigurovat, přihlaste se pomocí účtu na %PORTAL_LINK%."
			},
			errors: {
				boxTitle: "Došlo k chybě",
				invalidConfig: "Neplatná konfigurace",
				invalidConfigNoApp: "V souboru index.html není zadán identifikátor aplikace pro webové mapování.",
				invalidConfigNoAppDev: "V parametrech adresy URL nebyl zadán identifikátor webové mapovací aplikace (?appid=). V režimu vývoje je konfigurace ID aplikace v souboru index.html ignorována.",
				unspecifiedConfigOwner: "Nebyl nakonfigurován autorizovaný vlastník.",
				invalidConfigOwner: "Vlastník příběhu není autorizován.",
				createMap: "Nelze vytvořit mapu",
				invalidApp: "%TPL_NAME% neexistuje nebo není dostupný.",
				appLoadingFail: "Něco se pokazilo, %TPL_NAME% se nenahrál správně.",
				notConfiguredDesktop: "Příběh zatím není nakonfigurován.",
				notConfiguredMobile: "Nástroj pro tvorbu %TPL_NAME% není v této velikosti zobrazení podporován. Pokud je to možné, zvětšete velikost prohlížeče nebo příběh vytvořte na zařízení s větší obrazovkou.",
				notConfiguredMobile2: "Aby bylo možné použít nástroj pro tvorbu %TPL_NAME%, otočte své zařízení na šířku.",
				notAuthorized: "Nejste oprávněni přistupovat k tomuto příběhu",
				notAuthorizedBuilder: "Nejste oprávněni používat nástroj pro tvorbu %TPL_NAME%",
				noBuilderIE: "Nástroj pro tvorbu není podporován v aplikaci Internet Explorer ve verzi nižší než %VERSION%. %UPGRADE%",
				noViewerIE: "Tento příběh není podporován v prohlížeči Internet Explorer ve verzi nižší než %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Aktualizujte prohlížeč</a>.",
				mapLoadingFail: "Něco se pokazilo, mapa se nenahrála správně.",
				signOut: "Odhlásit"
			},
			mobileInfo: {
				legend: "Legenda",
				description: "Popis",
				lblLegendMobileError: "Legenda bohužel není k dispozici. Načtěte příběh znovu.",
				lblLegendMobileErrorExplain: "Legenda nebude k dispozici v případě, že je po načtení příběhu zařízení v režimu na výšku."
			},
			mobileFooter: {
				swipeInvite: "Procházejte příběhem potáhnutím prstem",
				lblNext: "Další",
				lblEnd: "Dosáhli jste konce příběhu"
			},
			headerFromCommon: {
				storymapsText: "Mapa s příběhem",
				builderButton: "Upravit",
				facebookTooltip: "Sdílet na Facebooku",
				twitterTooltip: "Sdílet na Twitteru",
				bitlyTooltip: "Získat krátký odkaz",
				templateTitle: "Zadejte název šablony",
				templateSubtitle: "Zadejte podnadpis šablony",
				share: "Sdílení",
				checking: "Probíhá kontrola obsahu vašeho příběhu",
				fix: "Opravte problémy ve svém příběhu",
				noerrors: "Nebyly nalezeny žádné problémy",
				tooltipAutoplayDisabled: "Není k dispozici v režimu automatického přehrávání.",
				notshared: "Příběh není sdílen"
			},
			overviewFromCommon: {
				title: "Mapa přehledu"
			},
			legendFromCommon: {
				title: "Legenda"
			},
			shareFromCommon: {
				copy: "Kopírovat",
				copied: "Zkopírováno",
				open: "Otevřít",
				embed: "Vložit do webové stránky",
				embedExplain: "Chcete-li příběh vložit do webové stránky, použijte následující kód HTML.",
				size: "Velikost (šířka/výška):",
				autoplayLabel: "Režim automatického přehrávání",
				autoplayExplain1: "Režim automatického přehrávání bude příběhem procházet v pravidelných intervalech. Ideální pro použití na výstavních stáncích nebo veřejných monitorech, buďte si však vědomi toho, že v některých případech to může znesnadnit čtení příběhu. Tato funkce není podporována na malých obrazovkách.",
				autoplayExplain2: "Je-li tento režim aktivní, budou k dispozici ovládací prvky ke spuštění/pozastavení přehrávání příběhu a k nastavení rychlosti procházení.",
				linksupdated: "Odkazy aktualizovány!"
			},
			locatorFromCommon: {
				error: "Umístění není k dispozici"
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
	"hr": 1, 
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
	"sr": 1,
	"sv": 1,
	"th": 1,
	"tr": 1,
	"vi": 1,
	"zh-cn": 1,
	"zh-hk": 1, 
	"zh-tw": 1 
});