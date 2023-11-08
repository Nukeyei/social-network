import { Card} from "antd"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CustomForm from "../components/Form";


const ArticleDetaileView = () => {
    const [state, setState] = useState({
        article: {},
    })
    const articleId = useParams().id
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${articleId}`)
            .then(response => setState({
                article: response.data
            }))
    }, [])
    return (
        <div>
            <h1>Update an article</h1>
            <CustomForm requestType='put' setState={setState} article={state.article} articleId = {articleId} />
            <Card title={state.article.title}>
                <p>{state.article.body}</p>
            </Card>
        </div>
    )
}

export default ArticleDetaileView