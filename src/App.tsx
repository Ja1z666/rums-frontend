import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { Register } from "./pages/register";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<>404</>} />
				<Route path="/" element={<>main</>} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
