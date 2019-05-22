import React, { Component } from "react";
import { FlatList } from "react-native";
import { View, Text, Button, StyleSheet } from "react-native";

export default class MyPluginsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [
        { title: "FlatList", text: "FlatList滚动列表的使用" },
        { title: "FlatList", text: "FlatList滚动列表的使用" }
      ],
      loaded: false
    };
    this.GetData = this.GetData.bind(this);
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: "插件"
    };
  };
  componentDidMount() {
    this.GetData();
  }
  //获取数据
  GetData() {
    setTimeout(() => {
      this.setState({
        listData: [
          { id: "1", title: "FlatList", text: "FlatList滚动列表的使用" },
          { id: "2", title: "FlatList", text: "FlatList滚动列表的使用" },
          { id: "3", title: "FlatList", text: "FlatList滚动列表的使用" },
          { id: "4", title: "FlatList", text: "FlatList滚动列表的使用" },
          { id: "5", title: "FlatList", text: "FlatList滚动列表的使用" },
          { id: "6", title: "FlatList", text: "FlatList滚动列表的使用" },
          { id: "7", title: "FlatList", text: "FlatList滚动列表的使用" },
          { id: "8", title: "FlatList", text: "FlatList滚动列表的使用" },
          { id: "9", title: "FlatList", text: "FlatList滚动列表的使用" },
          { id: "10", title: "FlatList", text: "FlatList滚动列表的使用" },
          { id: "11", title: "FlatList", text: "FlatList滚动列表的使用" },
          { id: "12", title: "FlatList", text: "FlatList滚动列表的使用" },
          { id: "13", title: "FlatList", text: "FlatList滚动列表的使用" },
          { id: "14", title: "FlatList", text: "FlatList滚动列表的使用" },
          { id: "15", title: "FlatList", text: "FlatList滚动列表的使用" }
        ],
        loaded: true
      });
    }, 1500);
  }
  RenderItem({ item }) {
    return (
      <Text style={styles.ListItem}>
        {item.title}:{item.text}
      </Text>
    );
  }

  //加载组件
  renderLoadingView() {
    return (
      <View style={styles.Container}>
        <Text>加载中...</Text>
      </View>
    );
  }
  render() {
    const { navigate } = this.props.navigation;
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <FlatList
        style={styles.ListWrap}
        data={this.state.listData}
        keyExtractor={item => item.id}
        renderItem={this.RenderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center"
  },
  ListWrap: {
    padding: 10,
    width: "100%"
  },
  ListItem: {
    height: 80,
    width: "100%",
    backgroundColor: "#ddd",
    textAlign: "center",
    textAlignVertical: "center",
    lineHeight: 80,
    marginBottom: 10,
    borderRadius: 3
  }
});
