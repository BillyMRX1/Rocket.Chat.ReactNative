export const STATUS_COLORS: any = {
	online: '#2de0a5',
	busy: '#f5455c',
	away: '#ffd21f',
	offline: '#cbced1',
	loading: '#9ea2a8',
	disabled: '#F38C39'
};

export const SWITCH_TRACK_COLOR = {
	false: '#f5455c',
	true: '#2de0a5'
};

const mentions = {
	unreadColor: '#6C727A',
	tunreadColor: '#1d74f5',
	mentionMeColor: '#F5455C',
	mentionGroupColor: '#F38C39',
	mentionOtherColor: '#F3BE08'
};

const callButtons = {
	cancelCallButton: '#F5455C',
	acceptCallButton: '#158D65'
};

export const colors = {
	light: {
		backgroundColor: '#ffffff',
		focusedBackground: '#ffffff',
		chatComponentBackground: '#f3f4f5',
		auxiliaryBackground: '#efeff4',
		bannerBackground: '#f1f2f4',
		titleText: '#0d0e12',
		bodyText: '#2f343d',
		backdropColor: '#000000',
		dangerColor: '#f5455c',
		successColor: '#2de0a5',
		borderColor: '#e1e5e8',
		controlText: '#54585e',
		auxiliaryText: '#9ca2a8',
		infoText: '#6d6d72',
		tintColor: '#1d74f5',
		tintActive: '#549df9',
		tintDisabled: '#88B4F5',
		auxiliaryTintColor: '#6C727A',
		actionTintColor: '#1d74f5',
		separatorColor: '#cbcbcc',
		navbarBackground: '#ffffff',
		headerBorder: '#B2B2B2',
		headerBackground: '#EEEFF1',
		headerSecondaryBackground: '#ffffff',
		headerTintColor: '#6C727A',
		headerTitleColor: '#0C0D0F',
		headerSecondaryText: '#1d74f5',
		toastBackground: '#0C0D0F',
		videoBackground: '#1f2329',
		favoriteBackground: '#ffbb00',
		hideBackground: '#54585e',
		messageboxBackground: '#ffffff',
		searchboxBackground: '#E6E6E7',
		buttonBackground: '#414852',
		buttonText: '#ffffff',
		passcodeBackground: '#EEEFF1',
		passcodeButtonActive: '#E4E7EA',
		editAndUploadButtonAvatar: '#E4E7EA',
		passcodeLockIcon: '#6C727A',
		passcodePrimary: '#2F343D',
		passcodeSecondary: '#6C727A',
		passcodeDotEmpty: '#CBCED1',
		passcodeDotFull: '#6C727A',
		previewBackground: '#1F2329',
		previewTintColor: '#f9f9f9',
		backdropOpacity: 0.3,
		attachmentLoadingOpacity: 0.7,
		collapsibleQuoteBorder: '#CBCED1',
		collapsibleChevron: '#6C727A',
		cancelButton: '#E4E7EA',
		conferenceCallBorder: '#F2F3F5',
		conferenceCallBackground: '#F7F8FA',
		conferenceCallOngoingPhoneBackground: '#C0F6E4',
		conferenceCallIncomingPhoneBackground: '#D1EBFE',
		conferenceCallEndedPhoneBackground: '#E4E7EA',
		conferenceCallOngoingPhoneIcon: '#158D65',
		conferenceCallIncomingPhoneIcon: '#095AD2',
		conferenceCallEndedPhoneIcon: '#6C727A',
		conferenceCallPlusUsersButton: '#E4E7EA',
		conferenceCallPlusUsersText: '#6C727A',
		conferenceCallCallBackButton: '#EEEFF1',
		conferenceCallCallBackText: '#1F2329',
		conferenceCallDisabledIcon: '#6C727A',
		conferenceCallEnabledIcon: '#FFFFFF',
		conferenceCallEnabledIconBackground: '#156FF5',
		conferenceCallPhotoBackground: '#E4E7EA',
		textInputSecondaryBackground: '#E4E7EA',
		dotBg: '#a9cbff',
		dotActiveBg: '#1d74f5',
		gray300: '#5f656e',
		gray100: '#CBCED1',
		n900: '#1F2329',
		...mentions,
		...callButtons
	},
	dark: {
		backgroundColor: '#030b1b',
		focusedBackground: '#0b182c',
		chatComponentBackground: '#192132',
		auxiliaryBackground: '#07101e',
		bannerBackground: '#0e1f38',
		titleText: '#f9f9f9',
		bodyText: '#cbced1',
		backdropColor: '#000000',
		dangerColor: '#f5455c',
		successColor: '#2de0a5',
		borderColor: '#0f213d',
		controlText: '#dadde6',
		auxiliaryText: '#9297a2',
		infoText: '#6D6D72',
		tintColor: '#1d74f5',
		tintActive: '#549df9',
		tintDisabled: '#88B4F5',
		auxiliaryTintColor: '#f9f9f9',
		actionTintColor: '#1d74f5',
		separatorColor: '#2b2b2d',
		navbarBackground: '#0b182c',
		headerBorder: '#2F3A4B',
		headerBackground: '#0b182c',
		headerSecondaryBackground: '#0b182c',
		headerTintColor: '#f9f9f9',
		headerTitleColor: '#f9f9f9',
		headerSecondaryText: '#9297a2',
		toastBackground: '#0C0D0F',
		videoBackground: '#1f2329',
		favoriteBackground: '#ffbb00',
		hideBackground: '#54585e',
		messageboxBackground: '#0b182c',
		searchboxBackground: '#192d4d',
		buttonBackground: '#414852',
		buttonText: '#ffffff',
		passcodeBackground: '#030C1B',
		passcodeButtonActive: '#0B182C',
		editAndUploadButtonAvatar: '#0B182C',
		passcodeLockIcon: '#6C727A',
		passcodePrimary: '#FFFFFF',
		passcodeSecondary: '#CBCED1',
		passcodeDotEmpty: '#CBCED1',
		passcodeDotFull: '#6C727A',
		previewBackground: '#030b1b',
		previewTintColor: '#f9f9f9',
		backdropOpacity: 0.9,
		attachmentLoadingOpacity: 0.3,
		collapsibleQuoteBorder: '#CBCED1',
		collapsibleChevron: '#6C727A',
		cancelButton: '#E4E7EA',
		conferenceCallBorder: '#1F2329',
		conferenceCallBackground: '#1F2329',
		conferenceCallOngoingPhoneBackground: '#106D4F',
		conferenceCallIncomingPhoneBackground: '#D1EBFE',
		conferenceCallEndedPhoneBackground: '#6C727A',
		conferenceCallOngoingPhoneIcon: '#F7F8FA',
		conferenceCallIncomingPhoneIcon: '#095AD2',
		conferenceCallEndedPhoneIcon: '#F7F8FA',
		conferenceCallPlusUsersButton: '#2F343D',
		conferenceCallPlusUsersText: '#9EA2A8',
		conferenceCallCallBackButton: '#E4E7EA',
		conferenceCallCallBackText: '#FFFFFF',
		conferenceCallDisabledIcon: '#6C727A',
		conferenceCallEnabledIcon: '#FFFFFF',
		conferenceCallEnabledIconBackground: '#156FF5',
		conferenceCallPhotoBackground: '#E4E7EA',
		textInputSecondaryBackground: '#030b1b',
		dotBg: '#a9cbff',
		dotActiveBg: '#1d74f5',
		gray300: '#5f656e',
		gray100: '#CBCED1',
		n900: '#FFFFFF',
		...mentions,
		...callButtons
	},
	black: {
		backgroundColor: '#000000',
		focusedBackground: '#0d0d0d',
		chatComponentBackground: '#16181a',
		auxiliaryBackground: '#080808',
		bannerBackground: '#1f2329',
		titleText: '#f9f9f9',
		bodyText: '#cbced1',
		backdropColor: '#000000',
		dangerColor: '#f5455c',
		successColor: '#2de0a5',
		borderColor: '#1f2329',
		controlText: '#dadde6',
		auxiliaryText: '#b2b8c6',
		infoText: '#6d6d72',
		tintColor: '#1e9bfe',
		tintActive: '#76b7fc',
		tintDisabled: '#88B4F5', // TODO: Evaluate this with design team
		auxiliaryTintColor: '#f9f9f9',
		actionTintColor: '#1e9bfe',
		separatorColor: '#272728',
		navbarBackground: '#0d0d0d',
		headerBorder: '#323232',
		headerBackground: '#0d0d0d',
		headerSecondaryBackground: '#0d0d0d',
		headerTintColor: '#f9f9f9',
		headerTitleColor: '#f9f9f9',
		headerSecondaryText: '#b2b8c6',
		toastBackground: '#0C0D0F',
		videoBackground: '#1f2329',
		favoriteBackground: '#ffbb00',
		hideBackground: '#54585e',
		messageboxBackground: '#0d0d0d',
		searchboxBackground: '#1f1f1f',
		buttonBackground: '#414852',
		buttonText: '#ffffff',
		passcodeBackground: '#000000',
		passcodeButtonActive: '#0E0D0D',
		editAndUploadButtonAvatar: '#0E0D0D',
		passcodeLockIcon: '#6C727A',
		passcodePrimary: '#FFFFFF',
		passcodeSecondary: '#CBCED1',
		passcodeDotEmpty: '#CBCED1',
		passcodeDotFull: '#6C727A',
		previewBackground: '#000000',
		previewTintColor: '#f9f9f9',
		backdropOpacity: 0.9,
		attachmentLoadingOpacity: 0.3,
		collapsibleQuoteBorder: '#CBCED1',
		collapsibleChevron: '#6C727A',
		cancelButton: '#E4E7EA',
		conferenceCallBorder: '#1F2329',
		conferenceCallBackground: '#1F2329',
		conferenceCallOngoingPhoneBackground: '#106D4F',
		conferenceCallIncomingPhoneBackground: '#D1EBFE',
		conferenceCallEndedPhoneBackground: '#6C727A',
		conferenceCallOngoingPhoneIcon: '#F7F8FA',
		conferenceCallIncomingPhoneIcon: '#095AD2',
		conferenceCallEndedPhoneIcon: '#F7F8FA',
		conferenceCallPlusUsersButton: '#2F343D',
		conferenceCallPlusUsersText: '#9EA2A8',
		conferenceCallCallBackButton: '#E4E7EA',
		conferenceCallCallBackText: '#FFFFFF',
		conferenceCallDisabledIcon: '#6C727A',
		conferenceCallEnabledIcon: '#FFFFFF',
		conferenceCallEnabledIconBackground: '#156FF5',
		conferenceCallPhotoBackground: '#E4E7EA',
		textInputSecondaryBackground: '#000000',
		dotBg: '#a9cbff',
		dotActiveBg: '#1d74f5',
		gray300: '#5f656e',
		gray100: '#CBCED1',
		n900: '#FFFFFF',
		...mentions,
		...callButtons
	}
};

export const themes = colors;
