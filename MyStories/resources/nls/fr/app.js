﻿define({
	root: ({
		header: {
			start: "début",
			searchStories: "Explorez vos récits...",
			filter: "Filtre",
			sort: "Tri",
			sortColon: "Trier :",
			numResults: "Résultats : {{NUM_RESULTS}}",
			sortBy: "Trier par",
			dateModified: "Date de modification",
			title: "Titre",
			type: "Type",
			views: "Vues",
			errors: "Erreurs",
			filterBy: "Filtrer par",
			filterItems: "Filtrer les éléments",
			apps: "Applications",
			sharing: "Partage",
			clearAll: "Effacer tout",
			clearSearch: "Efface les critères de recherche",
			logOut: "Se déconnecter",
			mainQuote: "Raconter une histoire est le moyen le plus efficace pour proposer des idées dans le monde actuel.",
			quoteSource: "Robert McKee",
			checkYourStories: "Vérifier les récits",
			createStory: "Créer un récit",
			totalStories: "Nombre total de récits cartographiques : {{NUM_STORIES}}",
			noIssues: "Tout va bien",
			userStories: "Récits cartographiques appartenant à {{USER_NAME}}",
			headerDisabledTooltip: "Veuillez patienter pendant que la magie opère...",
			notOnTouch: "Non disponible sur les périphériques tactiles",
		},
		deleteModal: {
			title: "Confirmer la suppression",
			warningText: "Etes-vous sûr de vouloir supprimer ce récit ? Vous ne pourrez pas le récupérer.",
			deleteText: "Supprimer",
			cancel: "Annuler"
		},
		loading: {
			loadingText: "Chargement de vos récits..."
		},
		cantFindStories: {
			whereAreStories: "Votre récit n\'apparaît pas ?",
			notSeeExplanation: "Mes récits répertorie uniquement les cartes de narration hébergées dans ArcGIS et créées avec les applications {{STORY_MAP_TOUR}}, {{JOURNAL}}, {{MAP_SERIES}} et {{SWIPE_SPYGLASS}}. Consultez notre {{FAQ}} pour plus d\'informations.",
			faq: "FAQ",
			followingStoriesToUpdate: "Les récits suivants, créés avec des versions antérieures de nos applications, doivent être mis à jour pour être répertoriés dans Mes récits cartographiques :",
			gettingStories: "Recherche de récits créés avec des versions antérieures de nos applications qui doivent être mis à jour...",
			title: "Titre",
			typeOfStoryMap: "Type",
			lastModified: "Dernière modification",
			allUpToDate: "Aucun récit créé avec des versions antérieures de nos applications ne doit être mis à jour.",
			updateAll: "Tout mettre à jour",
			errorScanningForStories: "Une erreur s\'est produite lors de la recherche de vos récits.",
			close: "Fermer",
			updates: "Mise à jour",
			updatingNumberOfNumber: "Mise à jour de {{CURRENT_NUMBER}} sur {{TOTAL}}",
			updatingNumberOfNumberAlt: "Mise à jour de {{CURRENT_NUMBER}} / {{TOTAL}}",
			updateSucceeded: "Mise à jour réussie",
			reloadingStories: "Rechargement de vos récits cartographiques...",
			errorUpdatingStories: "Une erreur s\'est produite lors de la mise à jour de vos récits.",
			partialUpdateMessage: "Nombre de récits mis à jour : {{NUM_UPDATED}}"
		},
		signIn: {
			signInTitle: "Se connecter à Story Maps",
			signInTo: "Connectez-vous via votre compte ArcGIS Online pour :",
			explanationOne: "Créez des Story Maps captivantes pour partager vos récits cartographiques.",
			explanationTwo: "Utilisez vos cartes et les données d\'ArcGIS Online dans vos Story Maps.",
			explanationThree: "Gérez vos Story Maps et vérifiez le statut de leur contenu.",
			dontHaveAccount: "Vous ne possédez pas de compte ArcGIS Online ? Créez un :",
			publicAccount: "compte public gratuit à usage non commercial",
			orgAccount: "Abonnement à une version d’évaluation gratuite d’ArcGIS",
			timeExpired: "Votre connexion a expiré. Reconnectez-vous pour reprendre là où vous vous êtes arrêté.",
			apiDidntLoad: "Impossible de charger certains éléments. Essayez d\'actualiser la page.",
			needAccount: "Vous avez besoin d\'un compte ?",
			letsGo: "Allons-y !"
		},
		sharingLevel: {
			publicMessage: "Publique",
			privateMessage: "Privée",
			organization: "Organisation",
			changedSharing: "Niveau de partage modifié.",
			unableToChange: "Modification impossible du niveau de partage.",
			partOfMap: "Cet élément se trouve dans une carte. Pour modifier son niveau de partage, vous devez modifier le niveau de partage de la carte.",
			storyPublicContentOrg: "Votre récit est public. Son contenu ne peut être partagé qu\'avec votre organisation.",
			storyPublicContentPrivate: "Votre récit est public. Son contenu ne peut pas être privé.",
			mapOrg: "En partageant votre carte avec votre organisation, vous allez corrompre votre récit",
			layerOrg: "En partageant votre couche avec votre organisation, vous allez corrompre votre récit",
			mapPrivate: "En rendant votre carte privée, vous allez corrompre votre récit",
			layerPrivate: "En rendant votre couche privée, vous allez corrompre votre récit"
		},
		collectionList: {
			advocacy: "Défense et sensibilisation",
			architecture: "Architecture et design",
			conservation: "Conservation et durabilité",
			culture: "Culture",
			destinations: "Destination et tourisme",
			disasters: "Catastrophes et reconstruction",
			economy: "Economie et développement",
			entertainment: "Divertissement",
			history: "Historique",
			infrastructure: "Infrastructure",
			marketing: "Marketing",
			nature: "Nature et environnement",
			news: "Actualités et événements",
			oceans: "Océans",
			parks: "Parcs et loisirs",
			people: "Population et société",
			planning: "Planification et analyse",
			publicArt: "Art public",
			science: "Science et technologie",
			sport: "Sport",
			travelogues: "Carnets de voyage"
		},
		types: {
			custom: "Personnalisé",
			notSpecified: "Type non spécifié"
		},
		storyMap: {
			shared: "Partagé",
			saveFailed: "Erreur lors de l’enregistrement",
			numViews: "Vues : {{NUM_VIEWS}}",
			editStory: "Mettre à jour le récit",
			viewLive: "Afficher le récit",
			preview: "Aperçu",
			deleteButton: "Supprimer",
			modified: "Modifié {{DATE}}",
			summary: "Résumé",
			loading: "Chargement en cours...",
			collapse: "réduire",
			close: "fermer",
			hide: "masquer",
			notAvailableWhenBroken: "Votre récit présente les erreurs suivantes",
			cantBeDeleted: "Ce récit est protégé contre les suppressions. Consultez sa page d\'élément dans ArcGIS pour désactiver cette protection.",
			shareDialog: {
				title: "Partagez votre récit avec le monde entier !",
				notPublicWarning: "Votre récit est partagé avec votre organisation. Seuls les membres de votre organisation pourront le consulter.",
				embedStory: "Intégrer votre récit",
				shortLink: "Lien court",
				hideHeaderBar: "Masquer la barre d\'en-tête",
				copied: "Copié",
				small: "petite",
				medium: "moyenne",
				large: "grande",
				custom: "personnaliser",
				widthAbbreviation: "o",
				heightAbbreviation: "h",
				emptyDimension: "Saisissez une dimension.",
				seeExample: "Prévisualiser votre intégration dans un site Web",
				removeHeader: "Masquer l\'en-tête de l’application"
			},
			maps: {
				unableRetrieveTitle: "Impossible de récupérer les cartes",
				unableRetrieveDescription: "Nous n\'avons pas pu récupérer les cartes de cette Story Map."
			},
			images: {
				unableRetrieveTitle: "Impossible de récupérer les images",
				unableRetrieveDescription: "Nous n\'avons pas pu récupérer les images de cette Story Map."
			},
			tags: {
				tags: "Balises",
				collectionTags: "Sujet",
				selectASubject: "Sélectionner un objet",
				save: "Enregistrer",
				saved: "Enregistré",
				errorSaving: "Erreur lors de l’enregistrement",
				tagTip: "Astuce : les balises permettent aux autres de retrouver votre récit. Plus les balises sont pertinentes, plus votre travail sera visible."
			},
			submitToGallery: {
				gallerySubmission: "Bibliothèque de Story Maps",
				canSubmitIf: "Vous pouvez placer votre récit dans la bibliothèque s\'il contient les éléments suivants :",
				hasOwnImage: "Miniature personnalisée",
				chosenSubject: "Un objet et quelques balises",
				chosenSubjectAlt: "Un {{SUBJECT}} et quelques balises",
				storyMapTopicSubject: "objet",
				sharedPublicly: "Partagé publiquement",
				noBrokenContent: "Aucune erreur",
				nominateToGallery: "Placer dans la bibliothèque",
				comingSoon: "Disponible prochainement !",
				submitted: "Envoyé",
				errorSubmitting: "Erreur lors de la soumission",
				ourGallery: "Bibliothèque de Story Maps",
				galleryTip: "{{THE_GALLERY}} est un ensemble organisé de Story Maps qui met en avant certains des meilleurs exemples. Si votre récit est sélectionné, il sera ajouté dans les 10 jours suivant sa soumission. Vu le nombre important de récits proposés, nous ne pouvons garantir que votre récit sera ajouté."
			},
			placeholders: {
				noSummary: "Aucun résumé. Cliquez pour en ajouter un."
			},
			errors: {
				cantDeleteStory: "Impossible de supprimer le récit.",
				unableToFind: "Contenu introuvable",
				unableToRetrieve: "Nous n\'avons pas pu récupérer le contenu de cette Story Map."
			},
			socialSharing: {
				availableWhenPublic: "Cette option sera disponible lorsque votre récit sera public"
			},
			dialog: {
				back: "Retour",
				close: "Fermer",
				cancel: "Annuler"
			},
			imagePicker: {
				changeDefault: "Changer l\'image par défaut",
				changeImage: "Modifier la miniature",
				uploadImage: "Télécharger la miniature",
				chooseImage: "Choisir une miniature",
				chooseAnImage: "Choisir une image",
				notInIEVersion: "Cette fonctionnalité n\'est pas disponible dans Internet Explorer {{VERSION_NUMBER}}.",
				or: "Ou",
				uploadAnImage: "Télécharger une image",
				supportedFileTypes: "Prend en charge les formats .png, .jpg, .gif",
				imageSizeMessage: "Votre image doit présenter une largeur et une hauteur minimales de 286 et 190 pixels, respectivement.",
				minimumDimensions: "Minimum : 286 x 190 px",
				imagesLoading: "Chargement des images...",
				noImages: "Ce récit ne contient pas d\'image",
				errorLoading: "Impossible de récupérer les images de ce récit",
				clickBelowTip: "Cliquez sur le bouton ci-dessous pour télécharger une image",
				dragAndDrop: "A l\'aide de la méthode glisser-déplacer",
				cropImage: "Rogner l\'image",
				saveImage: "Enregistrer l\'image",
				save: "Enregistrer",
				savingImage: "Enregistrement de votre image...",
				saved: "Enregistrement terminé !",
				errorSaving: "Impossible d’enregistrer votre image.",
				skipAndCrop: "Sauter l\'étape et rogner l\'image pour moi",
				wrongFormat: "Ce type de fichier n\'est pas pris en charge.",
				noCropWarning: "Cette image ne peut pas être rognée, mais vous pouvez toujours l\'enregistrer en tant que miniature de votre récit avec ses dimensions d\'origine ({{WIDTH_PIXELS}} x {{HEIGHT_PIXELS}} px)."
			}
		},
		content: {
			media: {
				maps: "Cartes",
				images: "Images",
				videos: "Vidéos",
				webpages: "Pages Web",
				tags: "Balises",
				gallery: "Bibliothèque"
			},
			headers: {
				status: "Statut",
				source: "Source",
				name: "Nom",
				shared: "Partagé"
			},
			component: {
				mapTour: "Nombre de points",
				bullet: "Puce",
				tab: "Tabulation",
				accordion: "Section",
				mapJournal: "Section"
			},
			titleType: {
				mapTour: "Désignation",
				mapJournal: "URL",
				mapSeries: "URL"
			},
			actions: {
				viewMap: "Afficher la carte",
				editMap: "Modifier la carte",
				fix: "Localisation",
				viewLayer: "Afficher la couche"
			},
			contentType: {
				mainStage: "action de grande scène",
				sidePanel: "Description"
			},
			notification: {
				refreshExplanation: "Revérifiez votre récit",
				checking: "Vérification...",
				foundSomeIssues: "Nous avons détecté des problèmes",
				noIssuesFound: "Aucun problème détecté",
				storyPublic: "Votre récit est désormais public",
				storyOrg: "Votre récit est désormais partagé avec votre organisation",
				storyPrivate: "Votre récit est désormais privé",
				mapPublic: "Votre carte est désormais publique",
				mapOrg: "Votre carte est désormais partagée avec votre organisation",
				mapPrivate: "Votre carte est désormais privée",
				layerPublic: "Votre couche est désormais publique",
				layerOrg: "Votre couche est désormais partagée avec votre organisation",
				layerPrivate: "Votre couche est désormais privée",
				contentPublic: "Votre contenu est désormais public",
				contentOrg: "Votre contenu est désormais partagé avec votre organisation",
				contentPrivate: "Votre contenu est désormais privé",
				storyAndContentPublic: "Votre récit et son contenu sont désormais publics",
				storyAndContentOrg: "Votre récit et son contenu sont désormais partagés avec votre organisation",
				storyAndContentPrivate: "Votre récit et son contenu sont désormais privés",
				shareBulkPrompt: "Souhaitez-vous partager le contenu de votre récit en conséquence ?",
				layersPublic: "Certaines couches ont également été partagées publiquement",
				layersOrg: "Certaines couches ont également été partagées avec votre organisation",
				layersPrivate: "Certaines couches ont également été rendues privées",
				mapsPublic: "Certaines cartes ont également été partagées publiquement",
				mapsOrg: "Certaines cartes ont également été partagées avec votre organisation",
				mapsPrivate: "Certaines cartes ont également été rendues privées",
				layersAndMapsPublic: "Certaines cartes et couches ont également été partagées publiquement",
				layersAndMapsOrg: "Certaines cartes et couches ont également été partagées avec votre organisation",
				layersAndMapsPrivate: "Certaines cartes et couches ont également été rendues privées",
				yes: "Oui",
				no: "Non",
				premiumPublicSuccess: "Vos contenus premium sont maintenant accessibles au public.",
				subscriptionPublicSuccess: "Les contenus liés à votre abonnement sont maintenant accessibles au public."
			},
			errors: {
				publicDisabled: "Le partage public a été désactivé par un administrateur",
				orgDisabled: "Le partage avec votre organisation a été désactivé par un administrateur",
				noMapName: "Impossible de récupérer le nom de la carte",
				notPublic: "NON PUBLIC",
				inaccessible: "INACCESSIBLE",
				deleted: "SUPPRIME",
				cantAccessVideo: "Impossible d\'accéder à la vidéo",
				noStoriesFound: "Nous n\'avons trouvé aucune Story Map dans votre contenu.",
				cantShowStories: "Impossible d\'afficher vos Story Maps. Réessayez ultérieurement.",
				consolationSearch: "Aucun récit n’a été trouvé.",
				notCompatibleWithBrowser : "Mes récits cartographiques ne sont pas pris en charge dans les versions d\'Internet Explorer antérieures à la version {{VERSION_NUMBER}}.",
				pleaseUpdateBrowser: "Mettez à jour votre navigateur.",
				searchTip: "Essayez de simplifier légèrement.",
				consolationNoStories: "Bienvenue dans Mes récits!",
				noStoriesTip: "Pour créer votre première Story Map, consultez la page Applications.",
				letsGo: "Allons-y !",
				cantChangeSharingLevel: "Modification impossible du niveau de partage",
				cantChangeSharingLevels: "Modification impossible des niveaux de partage",
				errorUpdatingTitle: "Erreur lors de la mise à jour du titre",
				errorUpdatingSummary: "Erreur lors de la mise à jour du résumé",
				noEmptyTitle: "Un titre doit être spécifié",
				cantUpdatePremiumContent: "Impossible de mettre à jour les contenus premium",
				cantUpdateSubscriptionContent: "Impossible de mettre à jour les contenus liés à votre abonnement",
				createFirstStory: "Créer mon premier récit"
			},
			tooltipErrors: {
				mapHasBeenDeleted: "La carte a été supprimée",
				layerHasBeenDeleted: "La couche a été supprimée",
				mapIsInaccessible: "La carte est inaccessible",
				layerIsInaccessible: "La couche est inaccessible",
				mapNotYoursNotAccessible: "La carte appartient à un autre utilisateur et n\'est pas accessible",
				layerServiceOkItemNot: "La couche a été ajoutée en tant qu\'élément supprimé ou inaccessible",
				layerNotYoursNotAccessible: "La couche appartient à un autre utilisateur et n\'est pas accessible",
				mapOthersSharedBelowLevel: "La carte ne vous appartient pas et n\'est pas publique",
				layerOthersSharedBelowLevel: "La couche ne vous appartient pas et n\'est pas publique",
				noMapNoDetails: "Sans les détails de la carte, nous ne pouvons vous donner aucune information sur les couches",
				mapIsPrivate: "La carte est privée",
				mapIsOrg: "La carte est uniquement partagée avec votre organisation",
				layerIsPrivate: "La couche est privée",
				layerIsOrg: "La couche est uniquement partagée avec votre organisation",
				imageInaccessible: "Cette image est inaccessible",
				videoInaccessible: "Cette vidéo est inaccessible",
				webpageInaccessible: "Cette page Web est inaccessible",
				layerSecureService: "La couche est un service sécurisé",
				mapSecureService: "La carte est un service sécurisé",
				layerConsumesCredits: "La couche est un contenu premium qui utilise des crédits",
				layerSubscriptionContent: "La couche est un contenu lié à l\'abonnement",
				mapConsumesCredits: "La carte est un contenu premium qui utilise des crédits",
				mapSubscriptionContent: "La carte est un contenu lié à l\'abonnement"
			},
			tooltipWarnings: {
				cantScanThisTypeAlt: "Nous ne sommes pas en mesure de vérifier ce type de couche",
				cantScanThisType: "Nous ne pouvons pas vérifier le type de la couche",
				webpageNotScanned: "La recherche d\'erreurs n\'a pas lieu sur les pages Web",
				ignoredIssue: "Vous avez ignoré une erreur sur cette couche. Rechargez la page et consultez à nouveau ce récit pour visualiser l\'erreur",
				ignoredIssueBuilder: "Vous avez ignoré une erreur sur cette couche. Rechargez le générateur pour consulter à nouveau cette erreur"
			},
			scanningErrors: {
				deletedMap: "Contenu supprimé",
				inaccessibleMap: "Contenu de la carte inaccessible",
				notYoursNotAccessible: "Le contenu ne vous appartient pas et n\'est pas public",
				serviceOkItemNot: "Couches opérationnelles mais éléments inaccessibles",
				someContentNotPublic: "Le contenu n\'est pas partagé avec le public",
				someContentPrivate: "Contenu privé",
				othersSharedBelowLevel: "Le contenu ne vous appartient pas et n\'est pas public",
				premiumContent: "Contenu premium",
				subscriptionContent: "Contenu disponible avec l\'abonnement",
				secureService: "Services sécurisés",
				inaccessibleImage: "Images inaccessibles",
				inaccessibleVideo: "Vidéos inaccessibles",
				inaccessibleWebpage: "Pages Web inaccessibles"
			},
			scanningErrorTips: {
				deletedMapTip: "Astuce : modifiez votre carte Web et supprimez le contenu endommagé, ou supprimez la carte Web de votre récit.",
				inaccessibleMapTip: "Astuce : modifiez votre carte Web et supprimez le contenu endommagé, ou supprimez la carte Web de votre récit.",
				notYoursNotAccessibleTip: "Astuce : modifiez votre carte Web et supprimez la couche, ou supprimez la carte Web de votre récit.",
				serviceOkItemNotTip: "Les couches ont été ajoutées en tant qu\'éléments inaccessibles ou supprimés. Les couches sont opérationnelles, mais cela peut affecter votre carte (fenêtres contextuelles, symbologie).",
				ignore: "Ignorer",
				fix: "Localisation",
				clickToShareOrg: "Cliquez sur le bouton pour partager la totalité de ce contenu avec votre organisation ou modifiez chaque élément manuellement en cliquant sur les boutons permettant de les partager.",
				clickToSharePublic: "Cliquez sur le bouton pour partager la totalité de ce contenu avec le public ou modifiez chaque élément manuellement en cliquant sur les boutons permettant de les partager.",
				shareOrg: "Partager avec votre organisation",
				sharePublicly: "Partager publiquement",
				othersSharedBelowLevelTip: "Astuce : une partie du contenu de votre récit cartographique appartient à {{USER_NAME}} et les utilisateurs qui consultent votre récit risquent de ne pas le voir.",
				secureServiceTip: "Astuce : supprimez le service sécurisé de votre récit ou suivez la procédure décrite {{HERE}}.",
				blogArticle: "ici",
				premiumContentTip: "Votre récit contient des contenus premium qui utiliseront des {{CREDITS}} lorsqu\'il sera mis à la disposition du public. Mettez votre récit à la disposition du public et continuez, ou supprimez les couches de votre récit.",
				premiumContentPublicTip: "Votre récit contient des contenus premium qui utiliseront des {{CREDITS}} lorsqu\'il sera accessible publiquement. Confirmez votre souhait de rendre ces couches publiques ou supprimez-les de votre récit.",
				subscriptionContentTip: "Votre récit contient des contenus liés à l\'abonnement qui ne sont pas accessibles au public par défaut. Confirmez que vous souhaitez rendre ces couches disponibles (aucun crédit ne sera utilisé) ou supprimez-les de votre récit.",
				credits: "crédits",
				makePublic: "Rendre public",
				confirm: "Confirmer",
				inaccessibleImageTip: "Astuce : ajoutez l\'image manquante ou supprimez la référence correspondante.",
				inaccessibleVideoTip: "Astuce : ajoutez la vidéo manquante ou supprimez la référence correspondante.",
				inaccessibleWebpageTip: "Astuce : ajoutez la page Web manquante ou supprimez la référence correspondante."
			},
			removeLayer: {
				title: "Résoudre le problème des couches",
				layersWithIssue: "Couches présentant ce problème : {{NUM_WITH_ISSUE}}",
				issueExplanation: "La couche {{LAYER_NAME}} a été ajoutée en tant qu\'élément inaccessible ou supprimé. La couche est opérationnelle, mais cela peut affecter votre carte (fenêtres contextuelles, symbologie). Il n\'est pas possible de déterminer si l\'élément était important pour votre récit.",
				issueSolution: "Pour résoudre le problème, vous pouvez mettre à jour votre carte, supprimer la couche et ajouter de nouveau la couche à la carte à l\'aide de l\'URL suivante :",
				editMap: "Mettre à jour votre carte",
				clickBelowWhenDone: "Une fois la mise à jour terminée, cliquez sur le bouton ci-dessous :",
				rescanAndClose: "Renumériser et fermer"
			},
			info: {
				ownedBy: "Cet élément appartient à {{USER_NAME}}",
				unknownUser: "un autre utilisateur",
				untitledSection: "(Section sans titre)",
				introRecord: "Introduction"
			},
			layers: {
				layersHeader: "Couches",
				noLayers: "(Aucune couche)",
				basemapParens: "(fond de carte)"
			},
			images: {
				thumbnails: "Miniatures",
				thumbnail: "Miniature",
				thumbnailParens: "(miniature)"
			},
			general: {
				noTitle: "(aucun titre)",
				loading: "Chargement en cours..."
			}
		},
		infographics: {
			mapJournal: {
				firstTitle: "Section",
				secondTitle: "style",
				secondValueA: "volet latéral",
				secondValueB: "volet flottant",
				thirdTitle: "cartes"
			},
			mapTour: {
				firstTitle: "des points de la visite",
				secondTitle: "style",
				secondValueA: "intégré",
				secondValueB: "à trois volets",
				thirdTitle: "fond de carte",
				thirdValueLoading: "Chargement en cours...",
				thirdValueUnknown: "Inconnu"
			},
			mapSeries: {
				firstTitleA: "puces",
				firstTitleB: "Section",
				firstTitleC: "onglets",
				secondTitle: "style",
				secondValueA: "à puce",
				secondValueB: "accordéon latéral",
				secondValueC: "à onglets",
				thirdTitle: "cartes"
			},
			swipeSpyglass: {
				firstTitle: "points d\'intérêt",
				secondTitle: "style",
				secondValueA: "balayage",
				secondValueB: "longue-vue",
				thirdTitle: "cartes"
			},
			crowdsource: {
				firstTitle: "contributions",
				secondTitle: "style",
				secondValueA: "volet latéral",
				secondValueB: "empilé",
				thirdTitle: "fond de carte",
				thirdValueLoading: "Chargement en cours...",
				thirdValueUnknown: "Inconnu"
			}
		},
		progress: {
			checkingStories: "Vérification de vos récits à la recherche d\'erreurs...",
			stop: "Arrêt",
			exit: "Quitter",
			dismiss: "Annuler",
			done: "Terminé.",
			noStoriesWithIssuesLower: "Aucune erreur détectée !",
			storiesErrorFree: "Vos récits ne présentent aucune erreur",
			scanAllError: "Analyse impossible : nous n\'avons pas pu récupérer un ou plusieurs récits vous appartenant",
			scanProgress: "{{NUM_SCANNED}} sur {{NUM_TOTAL}}",
			scanStopped: "Récits cartographiques analysés : {{NUM_SCANNED}}, Récits cartographiques présentant des erreurs : {{ISSUE_STORIES}}",
			storiesWithIssues: "Récits cartographiques présentant des erreurs : {{NUM_STORIES}}"
		},
		newStories: {
			newStoriesFound: "Il semblerait que vous ayez créé un nouveau récit.",
			includeStories: "Actualiser les récits",
			notWhileScanning: "Cette fonctionnalité sera disponible une fois la vérification terminée"
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
