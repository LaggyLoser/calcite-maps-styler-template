﻿define({
  root: ({
    map: {
      error: "Kan ikke opprette kart"
    },
    onlineStatus: {
      offline: "Du jobber nå frakoblet. Svar på skjemaene blir lagret lokalt til det kan opprettes en forbindelse til serveren.",
      reconnecting: "Kobler til på nytt&hellip;",
      pending: "${total} ventende redigering(er) blir sendt inn når nettverkstilkoblingen gjenopprettes."
    },
    configure: {
      mapdlg: {
        items: {
          organizationLabel: "Min organisasjon",
          onlineLabel: "ArcGIS Online",
          contentLabel: "Mitt innhold",
          favoritesLabel: "Mine favoritter"
        },
        title: "Velg webkart",
        searchTitle: "Søk",
        ok: "Ok",
        cancel: "Avbryt",
        placeholder: "Angi søkeord"
      },
      groupdlg: {
        items: {
          organizationLabel: "Min organisasjon",
          onlineLabel: "ArcGIS Online",
          contentLabel: "Mitt innhold",
          favoritesLabel: "Mine favoritter"
        },
        title: "Velg gruppe",
        searchTitle: "Søk",
        ok: "Ok",
        cancel: "Avbryt",
        placeholder: "Angi søkeord"
      },
      sharedlg: {
        items: {},
        mailtoLinkDescription: "Her er en kobling til en GeoForm"
      }
    },
    user: {
      all: "å_All__ø",
      mgrs: "MGRS",
      usng: "USNG",
      utm: "UTM",
      utm_northing: "Northing",
      utm_easting: "Easting",
      utm_zone_number: "Sonenummer",
      selectLayerTabText: "${formSection} Velg skjema",
      geoFormGeneralTabText: "${formSection} Skriv inn informasjon",
      locationInformationText: "${formSection} Velg lokasjon",
      submitInformationText: "${formSection} Fullfør skjemaet",
      submitInstructions: "Legg til denne informasjonen i kartet.",
      myLocationText: "Gjeldende lokasjon",
      locationDescriptionForMoreThanOneOption: "Angi lokasjonen for denne oppføringen ved å klikke/trykke på kartet, eller ved å bruke ett av følgende alternativer.",
      locationDescriptionForOneOption: "Angi lokasjonen for denne oppføringen ved å klikke/trykke på kartet eller ved å bruke følgende alternativ.",
      locationDescriptionForNoOption: "Angi lokasjonen for denne oppføringen ved å klikke/trykke på kartet.",
      addressText: "Søk",
      geographic: "Bredde/lengde",
      locationTabText: "Lokasjon",
      locationPopupTitle: "Lokasjon",
      submitButtonText: "Send inn oppføring",
      submitButtonTextLoading: "Sender inn&hellip;",
      formValidationMessageAlertText: "Følgende felter må fylles ut:",
      selectLocation: "Velg en lokasjon for det du sender inn.",
      emptylatitudeAlertMessage: "Angi et ${openLink}breddegrad${closeLink}skoordinat.",
      emptylongitudeAlertMessage: "Angi et ${openLink}lengdegrad${closeLink}skoordinat.",
      shareUserTitleMessage: "Takk for bidraget!",
      entrySubmitted: "Oppføringen er sendt til kartet.",
      shareThisForm: "Del dette skjemaet",
      shareUserTextMessage: "Be andre om å bidra ved hjelp av følgende alternativer.",
      addAttachmentFailedMessage: "Kan ikke legge til vedlegg i laget",
      addFeatureFailedMessage: "Kan ikke legge til geoobjekt i laget",
      noLayerConfiguredMessage: "Det oppstod en feil under innlasting av eller søk etter et redigerbart geoobjektslag. Du må legge til et redigerbart geoobjektslag i webkartet for å kunne vise skjemaet og begynne å samle inn innsendte skjemaer.",
      placeholderLatitude: "Breddegrad (Y)",
      placeholderLongitude: "Lengdegrad (X)",
      latitude: "Breddegrad",
      longitude: "Lengdegrad",
      findMyLocation: "Finn meg",
      finding: "Lokaliserer&hellip;",
      backToTop: "Tilbake til toppen",
      addressSearchText: "Innsendelsen vil vises her. Du kan dra nålen for å korrigere lokasjonen.",
      shareModalFormText: "Skjemakobling",
      close: "Lukk",
      locationNotFound: "Finner ikke lokasjonen.",
      setLocation: "Angi lokasjon",
      find: "Finn adresse eller sted",
      attachment: "Vedlegg",
      toggleDropdown: "Aktiver/deaktiver rullegardinliste",
      invalidString: "å_Please enter a valid value_________ø.",
      invalidSmallNumber: "å_Please enter a valid ${openStrong}integer${closeStrong} value between -32768 and 32767___________________________ø.",
      invalidNumber: "Angi en gyldig ${openStrong}heltall${closeStrong}sverdi mellom -32768 og 32767.",
      invalidFloat: "Angi en gyldig ${openStrong}flytende punkt${closeStrong}-verdi.",
      invalidDouble: "Angi en gyldig ${openStrong}double${closeStrong}-verdi.",
      invalidLatLong: "Angi gyldige breddegrads- og lengdegradskoordinater.",
      invalidUTM: "Angi gyldige UTM-koordinater.",
      invalidUSNG: "Angi gyldige USNG-koordinater.",
      invalidMGRS: "Angi gyldige MGRS-koordinater.",
      geoformTitleText: "GeoForm",
      domainDefaultText: "Velg&hellip;",
      applyEditsFailedMessage: "Beklager, vi kunne ikke sende inn. Prøv på nytt.",
      requiredFields: "å_The following field is required. Please provide a valid entry____________________ø.",
      requiredField: "(obligatorisk)",
      error: "Feil",
      textRangeHintMessage: "${openStrong}Hint:${closeStrong} Minimumsverdi ${minValue} og maksimumsverdi ${maxValue}",
      dateRangeHintMessage: "${openStrong}Hint:${closeStrong} Laveste dato ${minValue} og høyeste dato ${maxValue}",
      remainingCharactersHintMessage: "${value} tegn gjenstår",
      mapFullScreen: "Full skjerm",
      mapRestore: "Gjenopprett",
      filterSelectEmptyText: "Velg",
      invalidLayerMessage: "Skjemalaget finnes ikke. Konfigurer programmet og angi laget.",
      selectedLayerText: "Alle",
      fileUploadStatus: "Status for filopplasting",
      uploadingBadge: "&nbsp;Laster opp&hellip;",
      successBadge: "&nbsp;Lastet opp",
      retryBadge: "Prøv på nytt",
      errorBadge: "Feil under opplasting&nbsp;&nbsp;&nbsp;",
      fileTooLargeError: "Filen er for stor til å legges ved",
      exceededFileCountError: "å_Exceeded maximum number of attachments allowed_______________ø",
      selectFileTitle: "Velg en fil",
      btnSelectFileText: "å_Select File____ø",
      btnViewSubmissions: "Vis innsendelser"
    },
    builder: {
      gettingStarted: "å_Getting Started______ø",
      dateSettings: "å_Date Settings_____ø",
      hiddenDateField: "å_Hide this date field_______ø",
      preventPastDates: "å_Prevent past dates______ø",
      preventFutureDates: "å_Prevent future dates_______ø",
      useCurrentDate: "å_Set this field with the current date and time_______________ø",
      configure: "å_Configure____ø",
      configureField: "å_Configure Field '${fieldName}'__________ø",
      invalidUser: "Beklager, med du har ikke tillatelse til å vise dette elementet.",
      invalidWebmapSelectionAlert: "Det valgte webkartet inneholder ingen gyldige webkart du kan bruke. Legg till et redigerbart geoobjektslag i webkartet for å fortsette.",
      invalidWebmapSelectionAlert2: "Se ${openLink}Hva er en geoobjektstjeneste?${closeLink} hvis du vil ha mer informasjon.",
      selectFieldsText: "Velg fra felter",
      selectThemeText: "Velg tema for skjema",
      setViewerText: "å_Configure Viewer______ø",
      introText: "å_Start___ø",
      webmapText: "Webkart",
      layerText: "Lag",
      detailsText: "Detaljer",
      fieldsText: "Felter",
      styleText: "Stil",
      viewerText: "å_Viewer___ø",
      optionText: "Alternativer",
      previewText: "Forhåndsvisning",
      publishText: "Mangfoldiggjør",
      optionsApplicationText: "Alternativer",
      titleText: "Byggeverktøy",
      descriptionText: "GeoForm er en konfigurerbar mal for skjemabasert dataredigering av en ${link1}geoobjektstjeneste${closeLink}. Med dette programmet kan brukerne angi data via et skjema i stedet for kartets popup og samtidig dra nytte av mulighetene som ${link2}webkartet${closeLink} og redigerbare geoobjektstjenester gir. Bruk fremgangsmåten nedenfor for å tilpasse og distribuere GeoForm.",
      btnPreviousText: "Forrige",
      btnNextText: "Neste",
      webmapTabTitleText: "Velg et webkart",
      viewWebmap: "Se webkart",
      webmapDetailsText: "Det valgte webkartet er ${webMapTitleLink}${webMapTitle}${closeLink}. Hvis du vil velge et annet webkart, klikker du på Velg webkart-knappen.",
      btnSelectWebmapText: "Velg webkart",
      btnSelectWebmapTextLoading: "Laster inn&hellip;",
      layerTabTitleText: "å_Select Editable Layer(s)________ø",
      selectLayerLabelText: "Lag",
      selectLayerDefaultOptionText: "Velg lag",
      enableBasemapToggle: "å_Show Basemap Toggle_______ø",
      enableBasemapToggleDescription: "å_You can configure the GeoForm to Show/Hide the Basemap Toggle___________________ø",
      defaultBasemap: "På/av-knapp for bakgrunnskart",
      secondaryBasemap: "Standard bakgrunnskart",
      detailsTabTitleText: "Skjemadetaljer",
      detailTitleLabelText: "Tittel",
      detailLogoLabelText: "Logobilde",
      descriptionLabelText: "Skjemainstruksjoner og -detaljer",
      fieldDescriptionLabelText: "Hjelpetekst (valgfritt)",
      fieldDescriptionHelpText: "å_Provide a short description or instructions for this field___________________ø.",
      fieldHintHelpText: "å_Placeholder text for the field__________ø.",
      fieldTabFieldHeaderText: "Felt",
      fieldTabLabelHeaderText: "Etikett",
      fieldTabDisplayTypeHeaderText: "Vis som",
      fieldTabOrderColumnText: "Rekkefølge",
      fieldTabVisibleColumnText: "Aktivert",
      displayFieldText: "Visningsfelt",
      selectMenuOption: "Velg meny",
      selectRadioOption: "Alternativknapp",
      selectTextOption: "Tekst",
      selectDateOption: "Datovelger",
      selectRangeOption: "Touch-Spinner",
      selectCheckboxOption: "Avmerkingsboks",
      selectMailOption: "E-post",
      selectUrlOption: "URL",
      selectTextAreaOption: "Tekstområde",
      previewApplicationText: "Forhåndsvis applikasjon",
      saveApplicationText: "Lagre applikasjon",
      saveText: "Lagre",
      toggleNavigationText: "Veksle navigasjon",
      formPlaceholderText: "Mitt skjema",
      shareBuilderInProgressTitleMessage: "Publisere GeoForm",
      shareBuilderProgressBarMessage: "Vent litt&hellip;",
      shareBuilderTitleMessage: "Elementet er lagret",
      shareBuilderTextMessage: "Du kan begynne å samle informasjon ved å dele med andre",
      shareModalFormText: "Skjemakobling",
      shareBuilderSuccess: "Ditt GeoForm er oppdatert og publisert.",
      geoformTitleText: "GeoForm",
      layerTabText: "å_This is the layer(s) that the GeoForm will be built from. The layer must be a feature service that is enabled for editing with sharing permissions appropriate for your audience. If all layers are selected, the form will allow a user to choose which form layer to submit to___________________________________________________________________________________ø.",
      detailsTabText: "Bruk Skjemadetaljer-boksene nedenfor for å tilpasse tittelen, legge til en egen logo og gi en kort beskrivelse for GeoForm-publikumet ditt. I beskrivelsen kan du legge til koblinger til andre ressurser, kontaktopplysninger, og til og med sende publikumet ditt til et webkartprogram med alle dataene som er samlet inn med GeoForm.",
      fieldsTabText: "Her kan du velge hvilke felter som skal være synlige for GeoForm-publikummet ditt, redigere merkene de får se og legge til en kort beskrivelse for hjelpe til med datainnskrivingen.",
      styleTabText: "Utform GeoForm med temaene nedenfor etter egne preferanser.",
      viewerTabText: "å_Set options for viewing submissions collected from the GeoForm____________________ø.",
      publishTabText: "Hvis du er ferdig med å tilpasse GeoForm, lagrer du programmet og begynner delingen med publikum. Du kan alltid gå tilbake til dette byggeverktøyet og gjøre flere tilpasninger basert på tilbakemeldinger.",
      headerSizeLabel: "Overskriftsstørrelse",
      smallHeader: "Bruk liten overskrift",
      bigHeader: "Bruk stor overskrift",
      pushpinText: "Kartnål",
      doneButtonText: "Lagre og avslutt",
      fieldTabPlaceHolderHeaderText: "Hint (valgfritt)",
      enableAttachmentLabelText: "${openStrong}Aktiver vedlegg${closeStrong}",
      enableAttachmentLabelHint: "Du kan aktivere/deaktivere vedleggene her",
      attachmentIsRequiredLabelText: "${openStrong}Vedlegg kreves${closeStrong}",
      attachmentIsRequiredLabelHint: "Om nødvendig kan du kreve et vedlegg av brukerne.",
      attachmentLabelText: "Påskrift for vedleggsknapp",
      attachmentLabelHint: "Denne teksten vises ved siden av vedleggsknappen. Du kan bruke dette området til å beskrive hva du vil at publikum skal legge ved (bilde, video, dokument osv.), hvilket filformat det må være i (JPEG, PNG, DOCX, PDF osv.), og eventuelle tilleggsinstruksjoner.",
      attachmentDescription: "Beskrivelse av vedlegg",
      attachmentHint: "Du kan om nødvendig angi flere instruksjoner for vedlegg her.",
      jumbotronDescription: "Bruk en stor eller liten overskrift for skjemaet. En stor overskrift kan bidra til å definere formålet med programmet, men tar mer plass på skjermen.",
      shareGeoformText: "å_Social media sharing buttons_________ø",
      shareDescription: "å_Social media buttons allow your audience to easily share your GeoForm once they have made a submission________________________________ø",
      defaultMapExtent: "Standard kartutstrekning",
      defaultMapExtentDescription: "Kartet tilbakestilles til standardutstrekningen i webkartet etter innsending. Dette kan deaktiveres når som helst.",
      pushpinOptionsDescription: "Velg blant en lang rekke farger for kartnålen. Fargen bør være annerledes enn fargen på symbolene på kartet, slik at det blir enklere for brukerne å sette innsendingene på kartet.",
      selectLocationText: "Velg lokasjon etter",
      myLocationText: "Min lokasjon",
      searchText: "Søk",
      coordinatesText: "Breddegrads- og lengdegradskoordinater",
      usng: "USNG-koordinater",
      mgrs: "MGRS-koordinater",
      utm: "UTM-koordinater",
      selectLocationSDescription: "La brukere velge en lokasjon ved hjelp av disse metodene.",
      dragTooltipText: "Dra feltet dit du vil at det skal vises",
      showHideLayerText: "Vis lag",
      showHideLayerHelpText: "å_You can configure the GeoForm to Show/Hide Layer. This option only applies to a single layer setup_______________________________ø.",
      labelHelpMessage: "Etikett",
      placeHolderHintMessage: "Hinttekst",
      placeHolderHelpMessage: "Hjelpetekst",
      selectTextOptionValue: "Filtervalg",
      disableLogo: "Deaktiver logo",
      disableLogoDescription: "Du kan konfigurere GeoForm slik at logoen vises/skjules i toppteksten på skjemaet",
      locateOnLoadText: "Finn ved innlasting",
      locateOnLoadDescription: "Du kan konfigurere at GeoForm skal bruke gjeldende lokasjon når siden lastes inn",
      selectLayerFieldTabText: "Velg lag",
      allLayerSelectOptionText: "å_All Layers____ø",
      disableViewer: "Deaktiver visningsprogram",
      disableViewerDescription: "å_You can configure the GeoForm to disable/enable the viewer__________________ø",
      displayFieldHintText: "å_Selected display field will be shown in the viewer as a title___________________ø"
    },
    viewer: {
      geocoderCancelText: "Avbryt",
      viewMapTabText: "Kart",
      sortHeaderText: "Sorter etter:",
      geocoderPlaceholderText: "Postnummer, by, osv.",
      noSearchResult: "Fant ingen resultater",
      recordsTabTooltip: "Vis innsendelser",
      legendTabTooltip: "Tegnforklaring",
      aboutUsTabTooltip: "å_About Us___ø",
      mapTabTooltip: "Kart",
      btnDescendingText: "Synkende",
      btnAscendingText: "Stigende",
      geometryUnavailableErrorMessage: "å_Erorr finding the geometry of the feature_____________ø",
      infoPopupOffErrorMessage: "å_No information to display_________ø",
      btnLoadMoreText: "Last inn mer",
      unavailableTitleText: "Uten navn",
      unavailableConfigMessage: "Kan ikke laste inn konfigurasjon",
      share: "å_Share___ø",
      viewReportsTabText: "å_Reports___ø",
      viewLegendTabText: "Tegnforklaring",
      viewAboutusTabText: "Om",
      btnSubmitReportText: "Send en rapport",
      appLoadingFailedMessage: "å_There was an error loading the viewer____________ø"
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