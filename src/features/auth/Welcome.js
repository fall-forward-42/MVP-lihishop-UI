import { useSelector } from "react-redux"
import { selectCurrentUser, selectCurrentToken } from "./authSlice"
import { Link } from "react-router-dom"
import CategoriesList from "../categories/CategoriesList"
import CreateCategoryForm from "../categories/CreateCategoryForm"

const Welcome = () => {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)

    const welcome = user ? `Welcome ${user}!` : 'Welcome!'
    const tokenAbbr = `${token.slice(0, 9)}...`

    const content = (
        <section className="welcome">
            <h1>{welcome}</h1>
            <p>Token: {tokenAbbr}</p>
            <p><Link to="/single">User Information</Link></p>
            <p><Link to="/userslist">Go to the Users List</Link></p>
            <CategoriesList></CategoriesList>
            <CreateCategoryForm></CreateCategoryForm>
        </section>
    )

    return content
}
export default Welcome