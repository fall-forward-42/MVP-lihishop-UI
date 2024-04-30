import Loading from "../../components/animation/Loading";
import { useGetCategoriesQuery } from "./categoriesApiSlice"
const CategoriesList = () => {
    const {
        data: categories,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetCategoriesQuery()

    let content;
    if (isLoading) {
        content = <Loading></Loading>;
    } 
    else if (isError) {
        content = <p>{JSON.stringify(error)}</p>;
    }
    
    else if (isSuccess) {
        content = (
            <section className="categories">
                <h1>Categories List</h1>
                <ul>
                {categories.map(category => (
                        <li  key={category.id_cate}>
                        <h2>{category.name}</h2>
                        <p>{category.description}</p>
                    </li>
                ))}
            </ul>
            </section>
        )
    } 

    return content
}
export default CategoriesList