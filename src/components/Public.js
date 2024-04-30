import { Link } from "react-router-dom"

const Public = () => {

    const content = (
        <section className="public">
            <header>
                <h1>Welcome to Food Store!</h1>
            </header>
            <main>
                <p>Provide all the things you need.</p>
                <p>&nbsp;</p>
                <address>
                    LihiShop<br />
                    847/48/7, kp2<br />
                    Biên Hòa, Đồng Nai<br />
                </address>
            </main>
            <footer >
                <Link to="/login">Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public