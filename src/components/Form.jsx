import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';


const CustomForm = props => {
  const [state, setState] = useState({
    title: '',
    content: '',
  })
  const clearForm = () => {
    setState({
      title: '',
      content: '',
    })
  }
  const hendelFormSubmit = (values, requestType) => {
    const title = values.target.elements.title.value
    const content = values.target.elements.content.value
    switch (requestType) {
      case 'post':
        return axios.post('https://jsonplaceholder.typicode.com/posts', {
          title: title,
          body: content,
        })
          .then((response) => props.setState({
            articles: [
              response.data,
              ...props.articles
            ]
          }))
          .then(clearForm)
      case 'put':
        return axios.put(`https://jsonplaceholder.typicode.com/posts/${props.articleId}`, {
          title: title,
          body: content,
        })
          .then((response) => props.setState({
            article: {
              title: response.data.title,
              body: response.data.body,
            }
          }))
          .then(clearForm)
        default:
          return
    }
  }
  return (
    <Form onSubmitCapture={values => hendelFormSubmit(values, props.requestType)}>
      <Form.Item label="Title" >
        <Input placeholder="Put a title here" name='title' required value={state.title} onChange={event => {
          setState({
            title: event.target.value,
            content: state.content,
          })
        }} />
      </Form.Item>
      <Form.Item label="Content" >
        <TextArea rows={4} name='content' required value={state.content} onChange={event => {
          setState({
            title: state.title,
            content: event.target.value,
          })
        }} />
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType='submit'>Submit</Button>
      </Form.Item>
    </Form >
    
  );
};
export default CustomForm;