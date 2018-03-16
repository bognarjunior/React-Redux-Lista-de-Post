import React, { Component } from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from 'react-native-router-flux'

import { fetchPosts } from "./../actions";
import ListItem from "./ListItem";

export class List extends Component {
  componentDidMount() {
    //Chama action creator para pegar os dados da lista
    this.props.fetchPosts();
  }
  onItemPress = (id) => {
    //Mudad e scena para postDetail
    console.log('id', id)
    Actions.postDetail({ postID: id })
  }
  render() {
    const { posts } = this.props;

    if (!posts) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }

    const postItems = posts.map(post => (
      <ListItem key={post.id} item={post} onItemPress={this.onItemPress} />
    ));

    return <ScrollView>{postItems}</ScrollView>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts.all };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchPosts }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
