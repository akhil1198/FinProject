import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "@/scenes/navbar/"
import Dashboard from "@/scenes/dashboard/"
// import Predictions from "@/scenes/predictions"

function App() {

	const theme = useMemo(() => createTheme(themeSettings), [])

	return (
		<div className="app">
			<BrowserRouter>
				{/* theme provider helps send the material ui theme we configured */}
				<ThemeProvider theme={theme}>
					{/* removes all the styling on the browser and reset css setting to default that material ui has set.  */}
					<CssBaseline />
					{/* rem is the most recommended way to set padding */}
					<Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
						<Navbar />
						<Routes>
							<Route path="/" element={<Dashboard />} />
							{/* <Route path="/predictions" element={<Predictions />} /> */}
						</Routes>
					</Box>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	)
}

export default App
