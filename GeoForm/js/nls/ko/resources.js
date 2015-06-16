﻿define({
  root: ({
    map: {
      error: "맵을 생성할 수 없음"
    },
    onlineStatus: {
      offline: "현재 오프라인으로 작업 중입니다. 양식을 제출하면 서버에 연결할 수 있을 때까지 로컬에 저장됩니다.",
      reconnecting: "다시 연결 중&hellip;",
      pending: "보류 중인 편집 ${total}개는 네트워크가 다시 구축되었을 때 제출됩니다."
    },
    configure: {
      mapdlg: {
        items: {
          organizationLabel: "내 기관",
          onlineLabel: "ArcGIS Online",
          contentLabel: "내 콘텐츠",
          favoritesLabel: "내 즐겨찾기"
        },
        title: "웹 맵 선택",
        searchTitle: "검색",
        ok: "확인",
        cancel: "취소",
        placeholder: "검색어 입력"
      },
      groupdlg: {
        items: {
          organizationLabel: "내 기관",
          onlineLabel: "ArcGIS Online",
          contentLabel: "내 콘텐츠",
          favoritesLabel: "내 즐겨찾기"
        },
        title: "그룹 선택",
        searchTitle: "검색",
        ok: "확인",
        cancel: "취소",
        placeholder: "검색어 입력"
      },
      sharedlg: {
        items: {},
        mailtoLinkDescription: "GeoForm으로 가는 링크입니다."
      }
    },
    user: {
      all: "한_All__빠",
      mgrs: "MGRS",
      usng: "USNG",
      utm: "UTM",
      utm_northing: "Northing",
      utm_easting: "Easting",
      utm_zone_number: "영역(Zone) 번호",
      selectLayerTabText: "${formSection} 양식 선택",
      geoFormGeneralTabText: "${formSection} 정보 입력",
      locationInformationText: "${formSection} 위치 선택",
      submitInformationText: "${formSection} 양식 작성",
      submitInstructions: "이 정보를 맵에 추가하세요.",
      myLocationText: "현재 위치",
      locationDescriptionForMoreThanOneOption: "맵을 클릭하거나 눌러서 다음 옵션 중 하나를 사용하여 이 항목에 대한 위치를 지정하세요.",
      locationDescriptionForOneOption: "맵을 클릭하거나 눌러서 다음 옵션을 사용하여 이 항목에 대한 위치를 지정하세요.",
      locationDescriptionForNoOption: "맵을 클릭하거나 눌러서 이 항목에 대한 위치를 지정하세요.",
      addressText: "검색",
      geographic: "위도/경도",
      locationTabText: "위치",
      locationPopupTitle: "위치",
      submitButtonText: "항목 제출",
      submitButtonTextLoading: "제출 중&hellip;",
      formValidationMessageAlertText: "다음 필드가 필요합니다.",
      selectLocation: "제출의 위치를 선택하세요.",
      emptylatitudeAlertMessage: "${openLink}위도${closeLink} 좌표를 입력하세요.",
      emptylongitudeAlertMessage: "${openLink}경도${closeLink} 좌표를 입력하세요.",
      shareUserTitleMessage: "참여해주셔서 감사합니다!",
      entrySubmitted: "항목이 맵에 제출되었습니다.",
      shareThisForm: "이 양식 공유",
      shareUserTextMessage: "다음 옵션을 사용하여 다른 사람들에게 참여을 요청합니다.",
      addAttachmentFailedMessage: "레이어에 첨부를 추가할 수 없음",
      addFeatureFailedMessage: "레이어에 피처를 추가할 수 없음",
      noLayerConfiguredMessage: "편집 가능한 피처 레이어를 불러오거나 찾는 동안 오류가 발생했습니다. 양식을 보이게 하거나 제출 수집을 시작하려면 편집 가능한 피처 레이어를 웹 맵에 추가합니다.",
      placeholderLatitude: "위도(Y)",
      placeholderLongitude: "경도(X)",
      latitude: "위도",
      longitude: "경도",
      findMyLocation: "내 위치 찾기",
      finding: "찾는 중&hellip;",
      backToTop: "맨 위로 이동",
      addressSearchText: "제출 내역이 여기에 나타납니다. 핀을 끌어서 위치를 수정할 수 있습니다.",
      shareModalFormText: "양식 링크",
      close: "닫기",
      locationNotFound: "위치를 찾을 수 없습니다.",
      setLocation: "위치 설정",
      find: "주소 또는 장소 찾기",
      attachment: "첨부",
      toggleDropdown: "드롭다운 전환",
      invalidString: "한_Please enter a valid value_________빠.",
      invalidSmallNumber: "한_Please enter a valid ${openStrong}integer${closeStrong} value between -32768 and 32767___________________________빠.",
      invalidNumber: "-2147483648~2147483647의 유효한 ${openStrong}정수${closeStrong} 값을 입력하세요.",
      invalidFloat: "유효한 ${openStrong}부동 소수점${closeStrong} 값을 입력하세요.",
      invalidDouble: "유효한 ${openStrong}Double${closeStrong} 값을 입력하세요.",
      invalidLatLong: "유효한 위도 및 경도 좌표를 입력하세요.",
      invalidUTM: "유효한 UTM 좌표를 입력하세요.",
      invalidUSNG: "유효한 USNG 좌표를 입력하세요.",
      invalidMGRS: "유효한 MGRS 좌표를 입력하세요.",
      geoformTitleText: "GeoForm",
      domainDefaultText: "선택&hellip;",
      applyEditsFailedMessage: "죄송합니다. 항목을 제출할 수 없습니다. 다시 시도하세요.",
      requiredFields: "한_The following field is required. Please provide a valid entry____________________빠.",
      requiredField: "(필수)",
      error: "오류",
      textRangeHintMessage: "${openStrong}힌트:${closeStrong} 최소값 ${minValue} 및 최대값 ${maxValue}",
      dateRangeHintMessage: "${openStrong}힌트:${closeStrong} 최소 날짜 ${minValue} 및 최대 날짜 ${maxValue}",
      remainingCharactersHintMessage: "${value}자 남음",
      mapFullScreen: "전체 화면",
      mapRestore: "복원",
      filterSelectEmptyText: "선택",
      invalidLayerMessage: "양식 레이어가 없습니다. 응용프로그램을 구성하고 레이어를 설정하세요.",
      selectedLayerText: "모두",
      fileUploadStatus: "파일 업로드 상태",
      uploadingBadge: "&nbsp;업로드 중&hellip;",
      successBadge: "&nbsp;업로드됨",
      retryBadge: "다시 시도",
      errorBadge: "업로드 오류&nbsp;&nbsp;&nbsp;",
      fileTooLargeError: "파일이 너무 커서 첨부할 수 없음",
      exceededFileCountError: "한_Exceeded maximum number of attachments allowed_______________빠",
      selectFileTitle: "파일 선택",
      btnSelectFileText: "한_Select File____빠",
      btnViewSubmissions: "제출 내역 보기"
    },
    builder: {
      gettingStarted: "한_Getting Started______빠",
      dateSettings: "한_Date Settings_____빠",
      hiddenDateField: "한_Hide this date field_______빠",
      preventPastDates: "한_Prevent past dates______빠",
      preventFutureDates: "한_Prevent future dates_______빠",
      useCurrentDate: "한_Set this field with the current date and time_______________빠",
      configure: "한_Configure____빠",
      configureField: "한_Configure Field '${fieldName}'__________빠",
      invalidUser: "죄송합니다. 이 항목을 볼 수 있는 권한이 없습니다.",
      invalidWebmapSelectionAlert: "선택한 웹 맵에 사용할 수 있는 유효한 레이어가 없습니다. 계속하려면 웹 맵에 편집 가능한 피처 레이어를 추가하세요.",
      invalidWebmapSelectionAlert2: "자세한 내용은 ${openLink}피처 서비스란 무엇입니까?${closeLink}를 참조하세요.",
      selectFieldsText: "필드에서 선택",
      selectThemeText: "테마에서 선택",
      setViewerText: "한_Configure Viewer______빠",
      introText: "한_Start___빠",
      webmapText: "웹 맵",
      layerText: "레이어",
      detailsText: "세부정보",
      fieldsText: "필드",
      styleText: "스타일",
      viewerText: "한_Viewer___빠",
      optionText: "옵션",
      previewText: "미리 보기",
      publishText: "발행",
      optionsApplicationText: "옵션",
      titleText: "빌더",
      descriptionText: "GeoForm은 ${link1}피처 서비스${closeLink}의 데이터를 양식을 기반으로 편집하는 구성 설정 템플릿입니다. 사용자는 이 응용프로그램을 사용하여 ${link2}웹 맵${closeLink} 및 편집 가능한 피처 서비스의 기능을 활용하면서 맵의 팝업 대신 양식을 통해 데이터를 입력할 수 있습니다. GeoForm을 사용자 정의하고 배포하려면 다음 단계를 따릅니다.",
      btnPreviousText: "이전",
      btnNextText: "다음",
      webmapTabTitleText: "웹 맵 선택",
      viewWebmap: "웹 맵 보기",
      webmapDetailsText: "선택한 웹 맵은 ${webMapTitleLink}${webMapTitle}${closeLink}입니다. 다른 웹 맵을 선택하려면 '웹 맵 선택' 버튼을 클릭하세요.",
      btnSelectWebmapText: "웹 맵 선택",
      btnSelectWebmapTextLoading: "불러오는 중&hellip;",
      layerTabTitleText: "한_Select Editable Layer(s)________빠",
      selectLayerLabelText: "레이어",
      selectLayerDefaultOptionText: "레이어 선택",
      enableBasemapToggle: "한_Show Basemap Toggle_______빠",
      enableBasemapToggleDescription: "한_You can configure the GeoForm to Show/Hide the Basemap Toggle___________________빠",
      defaultBasemap: "베이스맵 전환",
      secondaryBasemap: "기본 베이스맵",
      detailsTabTitleText: "양식 세부정보",
      detailTitleLabelText: "제목",
      detailLogoLabelText: "로고 이미지",
      descriptionLabelText: "양식 지침 및 세부정보",
      fieldDescriptionLabelText: "도움말 텍스트(선택 사항)",
      fieldDescriptionHelpText: "한_Provide a short description or instructions for this field___________________빠.",
      fieldHintHelpText: "한_Placeholder text for the field__________빠.",
      fieldTabFieldHeaderText: "필드",
      fieldTabLabelHeaderText: "레이블",
      fieldTabDisplayTypeHeaderText: "다른 이름으로 보기",
      fieldTabOrderColumnText: "순서",
      fieldTabVisibleColumnText: "활성화됨",
      displayFieldText: "필드 보기",
      selectMenuOption: "메뉴 선택",
      selectRadioOption: "라디오 버튼",
      selectTextOption: "텍스트",
      selectDateOption: "날짜 선택기",
      selectRangeOption: "터치 회전자",
      selectCheckboxOption: "체크박스",
      selectMailOption: "이메일",
      selectUrlOption: "URL",
      selectTextAreaOption: "텍스트 영역",
      previewApplicationText: "응용프로그램 미리 보기",
      saveApplicationText: "응용프로그램 저장",
      saveText: "저장",
      toggleNavigationText: "탐색 전환",
      formPlaceholderText: "내 양식",
      shareBuilderInProgressTitleMessage: "GeoForm 발행",
      shareBuilderProgressBarMessage: "잠시만 기다려 주세요.&hellip;",
      shareBuilderTitleMessage: "항목을 저장했습니다.",
      shareBuilderTextMessage: "다른 사용자와 공유하여 정보 수집을 시작할 수 있습니다.",
      shareModalFormText: "양식 링크",
      shareBuilderSuccess: "GeoForm이 업데이트되어 발행되었습니다.",
      geoformTitleText: "GeoForm",
      layerTabText: "한_This is the layer(s) that the GeoForm will be built from. The layer must be a feature service that is enabled for editing with sharing permissions appropriate for your audience. If all layers are selected, the form will allow a user to choose which form layer to submit to___________________________________________________________________________________빠.",
      detailsTabText: "제목을 사용자 정의하고, 사용자 정의 로고를 추가하고, GeoForm 사용자에게 짧은 설명을 제공하려면 아래의 양식 세부정보 상자를 사용합니다. 이 설명에 다른 리소스, 연락처 정보에 대한 링크를 추가하고, GeoForm으로 수집한 모든 데이터를 포함하는 웹 매핑 응용프로그램으로 안내할 수도 있습니다.",
      fieldsTabText: "여기에서 GeoForm 사용자에게 보여질 필드를 선택하고, 나타날 레이블을 편집하고, 데이터 입력을 돕는 짧은 설명을 추가할 수 있습니다.",
      styleTabText: "기본 설정에 따라 아래의 테마를 사용하여 GeoForm 스타일을 설정합니다.",
      viewerTabText: "한_Set options for viewing submissions collected from the GeoForm____________________빠.",
      publishTabText: "GeoForm 사용자 정의를 완료한 경우 응용프로그램을 저장하고 사용자와 공유합니다. 언제든지 이 빌더로 돌아와 피드백을 기반으로 사용자 정의를 계속할 수 있습니다.",
      headerSizeLabel: "머리글 크기",
      smallHeader: "작은 머리글 사용",
      bigHeader: "큰 머리글 사용",
      pushpinText: "고정 핀",
      doneButtonText: "저장 후 종료",
      fieldTabPlaceHolderHeaderText: "힌트(옵션)",
      enableAttachmentLabelText: "${openStrong}첨부 활성화${closeStrong}",
      enableAttachmentLabelHint: "여기에서 첨부 활성화/비활성화 설정할 수 있습니다.",
      attachmentIsRequiredLabelText: "${openStrong}첨부 필요${closeStrong}",
      attachmentIsRequiredLabelHint: "필요한 경우 사용자는 첨부 입력을 요청할 수 있습니다.",
      attachmentLabelText: "첨부 버튼 레이블",
      attachmentLabelHint: "이 텍스트는 첨부 버튼 옆에 나타납니다. 이 공간을 사용하여 사용자가 첨부할 항목(사진, 비디오, 문서 등), 요청할 파일 형식(.jpeg, .png, .docx, .pdf 등) 및 추가 지침을 설명할 수 있습니다.",
      attachmentDescription: "첨부 설명",
      attachmentHint: "필요한 경우 여기에서 추가 첨부 지침을 제공할 수 있습니다.",
      jumbotronDescription: "양식에 크거나 작은 머리글을 사용합니다. 큰 머리글을 사용하면 응용프로그램의 목적을 정의할 수 있지만 화면에서 더 많은 공간을 차지합니다.",
      shareGeoformText: "한_Social media sharing buttons_________빠",
      shareDescription: "한_Social media buttons allow your audience to easily share your GeoForm once they have made a submission________________________________빠",
      defaultMapExtent: "기본 맵 범위",
      defaultMapExtentDescription: "제출한 후에 맵은 웹 맵에서 기본 범위로 재설정됩니다. 이 설정은 언제든지 비활성화할 수 있습니다.",
      pushpinOptionsDescription: "맵 고정 핀의 다양한 색상에서 선택합니다. 색상은 사용자가 맵에 제출할 수 있도록 맵 심볼과 달라야 합니다.",
      selectLocationText: "다음으로 위치 선택",
      myLocationText: "내 위치",
      searchText: "검색",
      coordinatesText: "위도 및 경도 좌표",
      usng: "USNG 좌표",
      mgrs: "MGRS 좌표",
      utm: "UTM 좌표",
      selectLocationSDescription: "이러한 방법을 사용하여 위치를 선택할 수 있습니다.",
      dragTooltipText: "나타내려는 곳으로 필드 드래그",
      showHideLayerText: "레이어 보기",
      showHideLayerHelpText: "한_You can configure the GeoForm to Show/Hide Layer. This option only applies to a single layer setup_______________________________빠.",
      labelHelpMessage: "레이블",
      placeHolderHintMessage: "힌트 텍스트",
      placeHolderHelpMessage: "도움말 텍스트",
      selectTextOptionValue: "필터 선택",
      disableLogo: "로고 비활성화",
      disableLogoDescription: "양식 머리글에서 GeoForm을 로그 보기/숨김으로 구성할 수 있습니다.",
      locateOnLoadText: "불러올 때 위치",
      locateOnLoadDescription: "페이지를 불러올 때 GeoForm이 현재 위치를 사용하도록 구성할 수 있습니다.",
      selectLayerFieldTabText: "레이어 선택",
      allLayerSelectOptionText: "한_All Layers____빠",
      disableViewer: "뷰어 비활성화",
      disableViewerDescription: "한_You can configure the GeoForm to disable/enable the viewer__________________빠",
      displayFieldHintText: "한_Selected display field will be shown in the viewer as a title___________________빠"
    },
    viewer: {
      geocoderCancelText: "취소",
      viewMapTabText: "맵",
      sortHeaderText: "정렬 기준:",
      geocoderPlaceholderText: "우편 번호, 도시 등",
      noSearchResult: "결과를 찾을 수 없음",
      recordsTabTooltip: "제출 내역 보기",
      legendTabTooltip: "범례",
      aboutUsTabTooltip: "한_About Us___빠",
      mapTabTooltip: "맵",
      btnDescendingText: "내림차순",
      btnAscendingText: "오름차순",
      geometryUnavailableErrorMessage: "한_Erorr finding the geometry of the feature_____________빠",
      infoPopupOffErrorMessage: "한_No information to display_________빠",
      btnLoadMoreText: "추가로 불러오기",
      unavailableTitleText: "제목 없음",
      unavailableConfigMessage: "구성을 불러올 수 없음",
      share: "한_Share___빠",
      viewReportsTabText: "한_Reports___빠",
      viewLegendTabText: "범례",
      viewAboutusTabText: "정보",
      btnSubmitReportText: "보고서 제출",
      appLoadingFailedMessage: "한_There was an error loading the viewer____________빠"
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