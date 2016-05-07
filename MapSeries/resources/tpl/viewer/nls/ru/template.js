﻿define({
	root: ({
		viewer: {
			common: {
				close: "Закрыть"
			},
			loading: {
				long: "История инициализируется.",
				long2: "Спасибо за ожидание",
				failButton: "Перезагрузить историю"
			},
			signin: {
				title: "Необходима авторизация",
				explainViewer: "Выполните вход под учетной записью на %PORTAL_LINK%, чтобы получить доступ к истории.",
				explainBuilder: "Выполните вход под учетной записью на %PORTAL_LINK%, чтобы настроить историю."
			},
			errors: {
				boxTitle: "Произошла ошибка",
				invalidConfig: "Некорректная настройка",
				invalidConfigNoApp: "Идентификатор картографического веб-приложения не указан в index.html.",
				invalidConfigNoAppDev: "Нет идентификатора Web Mapping Application, указанного в параметрах URL (?appid= или ?webmap=). В режиме разработки конфигурация appid в index.html игнорируются.",
				unspecifiedConfigOwner: "Авторизованный владелец не настроен.",
				invalidConfigOwner: "Владелец истории не авторизован.",
				createMap: "Не удалось создать карту",
				invalidApp: "%TPL_NAME% не существует или недоступен.",
				appLoadingFail: "Произошла ошибка, %TPL_NAME% загружено некорректно.",
				notConfiguredDesktop: "История пока не настроена.",
				notConfiguredMobile: "Конструктор %TPL_NAME% не поддерживается на экранах такого размера. Если можете, измените размер браузера, чтобы получить доступ к конструктору, либо создайте свою историю на другом устройстве с большим монитором.",
				notConfiguredMobile2: "Чтобы использовать конструктор %TPL_NAME%, поверните своё устройство в альбомную ориентацию.",
				notAuthorized: "Вы не авторизованы для доступа к истории.",
				notAuthorizedBuilder: "Вы не авторизованы для использования конструктора %TPL_NAME%.",
				noBuilderIE: "Конструктор не поддерживается в Internet Explorer версии до %VERSION%. %UPGRADE%",
				noViewerIE: "Эта история не поддерживается в Internet Explorer версии до %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Пожалуйста, обновите браузер</a>.",
				mapLoadingFail: "Произошла ошибка, карта загрузилась некорректно.",
				signOut: "Выйти"
			},
			mobileInfo: {
				legend: "Легенда",
				description: "Описание",
				lblLegendMobileError: "Легенда недоступна. Перезагрузите историю.",
				lblLegendMobileErrorExplain: "Легенда недоступна, если устройство было повернуто в положение Книжной страницы после того, как история была загружена."
			},
			mobileFooter: {
				swipeInvite: "Перелистните, чтобы просмотреть историю",
				lblNext: "Следующий",
				lblEnd: "Вы дошли до конца истории"
			},
			headerFromCommon: {
				storymapsText: "История на карте",
				builderButton: "Редактировать",
				facebookTooltip: "Разместить в Facebook",
				twitterTooltip: "Разместить в Twitter",
				bitlyTooltip: "Получить краткую ссылку",
				templateTitle: "Настроить заголовок шаблона",
				templateSubtitle: "Настроить подзаголовок шаблона",
				share: "Общий доступ",
				checking: "Проверка ресурсов истории",
				fix: "Исправить ошибки в истории",
				noerrors: "Ошибок не обнаружено",
				tooltipAutoplayDisabled: "Недоступно в режиме автовоспроизведения",
				notshared: "История не в общем доступе"
			},
			overviewFromCommon: {
				title: "Обзорная карта"
			},
			legendFromCommon: {
				title: "Легенда"
			},
			shareFromCommon: {
				copy: "Скопировать",
				copied: "Скопировано",
				open: "Открыть",
				embed: "Встроить в веб-страницу",
				embedExplain: "Используйте следующий HTML-код для встраивания истории на веб-страницу.",
				size: "Размер (ширина/высота):",
				autoplayLabel: "Режим автовоспроизведения",
				autoplayExplain1: "Режим автовоспроизведения будет проходить в вашей истории на указанном интервале. Это идеально подходит для информационных киосков или мониторов для публичного обозрения, но имейте в виду, что в некоторых случаях вашу историю будет тяжело читать. Эта возможность не поддерживается на маленьких мониторах.",
				autoplayExplain2: "Когда активен данный режим, там есть элементы управления для включения/остановки воспроизведения истории и установки скорости перемещения.",
				linksupdated: "Ссылки обновлены!"
			},
			locatorFromCommon: {
				error: "Местоположение недоступно"
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