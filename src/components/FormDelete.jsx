import { Button, Form } from 'antd';
import axios from 'axios';


const FormDelete = props => {
    const hendelFormSubmit = () => {
        return axios.delete(`https://jsonplaceholder.typicode.com/posts/${props.articleId}`)
            .then(() => props.setState({
                articles: props.articles.filter(article => article.id !== props.articleId ),
            }))
    }
    return (
        <Form onSubmitCapture={hendelFormSubmit}>
            <Form.Item >
                <Button danger htmlType='submit'>Delete post</Button>
            </Form.Item>
        </Form >

    );
};
export default FormDelete;