import { useEffect, useState } from "react";
import Article from "../components/Article"
import axios from "axios";
import CustomForm from "../components/Form";


const ArticleListView = () => {
    const [state, setState] = useState({
        articles: [],
    })
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setState({
                articles: response.data
            }))
    }, [])
    return (
        <div>
            <h1>Create an article</h1>
            <CustomForm requestType='post' setState={setState} articles={state.articles} />
            <Article data={state.articles} setState={setState} />
        </div>
    )
}

export default ArticleListView;