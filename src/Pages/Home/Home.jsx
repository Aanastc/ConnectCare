import "./Home.css"
import Logo from "../../assets/icons/Logo.svg"

export function Home() {
    return (
        <main>
            <header>
                <div className="p-6">
                    <div>
                        <img src={Logo} alt="Logo" />
                    </div>
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Sobre</a>
                        </li>
                        <li>
                            <a href="">Serviços</a>
                        </li>
                    </ul>
                </div>
            </header>
        </main>

    )
}