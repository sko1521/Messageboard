import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, savePost, deletePost } from './Actions/PostActions';
import { Field, reduxForm, reset } from 'redux-form';
import './Styles/App.css';
import _ from 'lodash';

class App extends Component {
  componentWillMount() {
    this.props.getPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, (post, key) => {
      return (
        <div className="card post" key={key}>
          <div className="card-block">
          <h3 className="card-title">
            {post.title}
          </h3>
          <p className="card-text">
            {post.body}
          </p>
            <button className="btn btn-danger float-right" onClick={() => this.props.deletePost(key)}>Delete</button>
          </div>
        </div>
      );
    });
  }

  renderField(field) {
    return (
      <input type="text" placeholder={`Enter a ${field.label}...`} {...field.input} className={field.class}/>
    );
  }

  onSubmit(values) {
    this.props.savePost(values).then(this.props.dispatch(reset('NewPost')));
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container-main">
        <div className="getpst">
          {this.renderPosts()}
        </div>
        <div className="myPosts">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="footerForm pst-form">
            <Field
              name="title"
              component={this.renderField}
              label="title"
              class="pst-fields"
              />
            <Field
              name="body"
              component={this.renderField}
              label="description"
              class="pst-fields desc-bd"
            />
            <button type="submit" className="btn sbt-btn">Post</button>
          </form>
        </div>
      </div>
    );
  }
}

let form = reduxForm({
  form: 'NewPost'
})(App);

form = connect(state => ({
    posts: state.posts
  }), { savePost, getPosts, deletePost }
)(form);

export default form;
