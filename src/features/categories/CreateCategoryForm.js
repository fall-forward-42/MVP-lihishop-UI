import { useEffect, useState } from "react";
import { useCreateCategoriesMutation } from "./categoriesApiSlice";

const CreateCategoryForm = () => {
  const [category, setCategory] = useState({ name: "", description: "" });
  const [createCategoryMutation, { isLoading }] = useCreateCategoriesMutation();
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);


  useEffect(() => {
    setErrMsg("");
  }, [category]);

  const handleSubmit = async () => {
    try {
      const cateData = await createCategoryMutation({
        name: category.name,
        description: category.description,
      }).unwrap();
      console.log(cateData);
      setCategory("");
      setSuccess(true)
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing information");
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Create Failed");
      }
    }

    //createCategoryMutation.mutate(category)
  };

  const handleChange = (e) => {
    e.preventDefault();
    setCategory({ ...category, [e.target.name]: e.target.value });
  };



  return isLoading ? <h1>Loading...</h1> : (
    <section className="create-category">
      <h1>Create Category</h1>
      {success && <p>Category created successfully!</p>}
      {errMsg !== '' && <p>Error: {errMsg}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={category.name}
          onChange={handleChange}
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={category.description}
          onChange={handleChange}
        />

        <button type="submit">Create</button>
      </form>
    </section>
  );
};

export default CreateCategoryForm;
