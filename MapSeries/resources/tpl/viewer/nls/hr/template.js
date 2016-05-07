﻿define({
	root: ({
		viewer: {
			common: {
				close: "Zatvori"
			},
			loading: {
				long: "Priča se pokreće",
				long2: "Hvala vam na čekanju",
				failButton: "Ponovno učitaj ovu priču"
			},
			signin: {
				title: "Potrebna je provjera autentičnosti",
				explainViewer: "Prijavite se računom za %PORTAL_LINK% da biste pristupili priči.",
				explainBuilder: "Prijavite se računom za %PORTAL_LINK% da biste konfigurirali priču."
			},
			errors: {
				boxTitle: "Došlo je do pogreške",
				invalidConfig: "Nevaljana konfiguracija",
				invalidConfigNoApp: "Identifikator aplikacije za web-kartiranje nije određen u index.html.",
				invalidConfigNoAppDev: "Identifikator aplikacije za web-kartiranje nije određen u parametrima URL-a (?appid=). U načinu rada razvoja ignorira se konfiguracija za appid u index.html.",
				unspecifiedConfigOwner: "Ovlašteni vlasnik nije konfiguriran.",
				invalidConfigOwner: "Vlasnik priče nema ovlasti.",
				createMap: "Nije moguće stvoriti kartu",
				invalidApp: "Predložak %TPL_NAME% ne postoji ili nije dostupan.",
				appLoadingFail: "Nešto nije u redu, predložak %TPL_NAME% nije se točno učitao.",
				notConfiguredDesktop: "Priča još nije konfigurirana.",
				notConfiguredMobile: "Sastavljač predloška %TPL_NAME% nije podržan u ovoj veličini prikaza. Ako je moguće, promijenite veličinu preglednika da biste pristupili sastavljaču ili izradite priču na uređaju s većim zaslonom.",
				notConfiguredMobile2: "Zakrenite uređaj u vodoravno usmjerenje kako biste upotrijebili sastavljač %TPL_NAME%.",
				notAuthorized: "Niste ovlašteni za pristup ovoj priči",
				notAuthorizedBuilder: "Niste ovlašteni za upotrebu sastavljača %TPL_NAME%.",
				noBuilderIE: "Sastavljač nije podržan u ranijim verzijama preglednika Internet Explorer prije verzije %VERSION%. %UPGRADE%",
				noViewerIE: "Priča nije podržana u ranijim verzijama preglednika Internet Explorer prije verzije %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href=\'http://browsehappy.com/\' target=\'_blank\'>Ažurirajte svoj preglednik</a>.",
				mapLoadingFail: "Nešto nije u redu, karta se nije točno učitala.",
				signOut: "Odjava"
			},
			mobileInfo: {
				legend: "Legenda",
				description: "Opis",
				lblLegendMobileError: "Nažalost, legenda nije dostupna. Ponovno učitajte priču.",
				lblLegendMobileErrorExplain: "Legenda nije dostupna kada se uređaj zakrene u okomiti način nakon učitavanja priče."
			},
			mobileFooter: {
				swipeInvite: "Upotrijebite klizač za navigaciju pričom",
				lblNext: "Sljedeće",
				lblEnd: "Došli ste do kraja priče"
			},
			headerFromCommon: {
				storymapsText: "Karta s pričom",
				builderButton: "Uredi",
				facebookTooltip: "Podijeli na Facebooku",
				twitterTooltip: "Podijeli na Twitteru",
				bitlyTooltip: "Preuzmite kratku poveznicu",
				templateTitle: "Postavi naslov predloška",
				templateSubtitle: "Postavi podnaslov predloška",
				share: "Podijeli",
				checking: "Provjeravanje sadržaja priče",
				fix: "Popravi probleme u priči",
				noerrors: "Nema otkrivenih problema",
				tooltipAutoplayDisabled: "Ovo nije dostupno u načinu automatske reprodukcije",
				notshared: "Priča nije podijeljena"
			},
			overviewFromCommon: {
				title: "Pregledna karta"
			},
			legendFromCommon: {
				title: "Legenda"
			},
			shareFromCommon: {
				copy: "Kopiraj",
				copied: "Kopirano",
				open: "Otvori",
				embed: "Ugradi u web-stranicu",
				embedExplain: "Upotrijebite sljedeći HTML kod da biste ugradili priču u web-stranicu.",
				size: "Veličina (širina/visina):",
				autoplayLabel: "Način automatske reprodukcije",
				autoplayExplain1: "Način automatske reprodukcije napredovat će kroz vašu priču u redovitim intervalima. To je idealno za kiosk ili javno prikazani zaslon, no budite svjesni da će se u drugim situacijama priča možda teže čitati. Ova značajka nije podržana na malim zaslonima.",
				autoplayExplain2: "Kada je ovaj način rada aktivan, postoje kontrole za reprodukciju/pauziranje priče i podešavanje brzine navigacije.",
				linksupdated: "Poveznice ažurirane!"
			},
			locatorFromCommon: {
				error: "Lokacija nije dostupna"
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