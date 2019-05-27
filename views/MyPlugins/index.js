import React, { Component } from "react";
import { FlatList } from "react-native";
import { View, Text,Alert, Button, StyleSheet } from "react-native";
import FontIcon from "react-native-vector-icons/FontAwesome";

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
    // this.GetData = this.GetData.bind(this);
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
          {
            id: "1",
            title: "FlatList",
            text: "FlatList的基本用法",
            routeName: "BaseFlatList"
          },
          // { id: "2", title: "FlatList", text: "FlatList的下拉刷新" }
        ],
        loaded: true
      });
    }, 1500);
  }
  RenderItem({ item }) {
    return (
      <View style={styles.ListItem}>
        <Text>{item.id}</Text>
        <Text>{item.title}</Text>
        <Text>{item.text}</Text>
        <FontIcon
          name="angle-right"
          size={25}
          style={{ color: "#6a51ae" }}
        />
      </View>
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
    height: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#efefef",
    marginBottom: 10,
    borderRadius: 3
  }
});
