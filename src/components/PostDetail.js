import React, { Component } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { fetchPost } from "./../actions";

export class PostDetail extends Component {
  componentDidMount = () => {
    console.log("postID", this.props.postID);
    this.props.fetchPost(this.props.postID);
  };

  render() {
    const { post } = this.props;

    if (!post) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }

    const { title, body } = post;

    return (
      <View>
        <Text style={style.titleStyle}>{title}</Text>
        <Text style={style.bodyStyle}>{body}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold"
  },
  bodyStyle: {
    fontSize: 16
  }
});

const mapStateToProps = state => {
  return { post: state.posts.selected };
};

export default connect(mapStateToProps, { fetchPost })(PostDetail);
