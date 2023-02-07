import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import App from './components/App/App';
import { store } from './redux/store';
import { GlobalStyle } from './styledComponents/GlobalStyle';
import { theme } from './styledComponents/Theme';

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
			<GlobalStyle />
		</ThemeProvider>
	</Provider>,
	document.getElementById('root')
);
