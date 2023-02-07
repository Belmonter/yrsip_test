export const variables = {
	// Минимальная ширина страницы
	minWidth: 375,
	// Ширина полотна (макета)
	maxWidth: 1440,
	// Ширина ограничивающего контейнера (0 = нет ограничения)
	maxWidthContainer: 1300,
	// Общий отступ у контейнера
	// (30 = по 15px слева и справа, 0 = нет отступа)
	containerPadding: 30,
};

export const rem = (px) => `${px / 16}rem`;
export const em = (px, current = 16) => `${px / current}em`;

export const theme = {
	// Шрифт по умолчанию
	fontFamily: 'Inter',
	// Указываем шрифт по умолчанию в REM
	fontSize: rem(16),
	// Основные цвета
	mainColor: '#092326',
	// Ширина срабатывания первого брейкпоинта
	containerWidth: variables.maxWidthContainer + variables.containerPadding,
};



