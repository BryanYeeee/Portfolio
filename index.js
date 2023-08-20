import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"
import App from "./src/App"

ReactDOM.createRoot(document.getElementById("root")).render(
        <HashRouter>
                <App />
        </HashRouter>
)