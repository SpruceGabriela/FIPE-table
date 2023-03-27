import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
		*,
		*::before,
		*::after {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			outline: none;
		}
		html {
			font-size: 87.5%;
		}
		body {
			color: black;
			-webkit-font-smoothing: antialiased;
		}
		body,
		input,
		textarea,
		select,
		button {
			font-family: 'Roboto', sans-serif;
			font-size: 1rem;
			font-weight: 400;
		}
		button {
			border: none;
			cursor: pointer;
		}
		@media (min-width: 769px) {
			html {
				font-size: 100%;
			}
		}
`

export default GlobalStyle
