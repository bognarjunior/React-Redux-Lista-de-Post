import React, { Component } from "react";
import { Router, Scene, Stack } from "react-native-router-flux";
import List from "./../components/List";
import PostDetail from "./../components/PostDetail";

const RouterComponent = () => {
  return (
    <Router
      sceneStyle={{
        flex: 1,
        justifyContent: "center",
        margin: 20,
        backgroundColor: "#FFFFFF"
      }}
    >
      <Stack key="root">
        <Scene key="list" component={List} title="Lista de Posts" initial />
        <Scene key="postDetail" component={PostDetail} title="Post" />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
