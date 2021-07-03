import React, { useState, useLayoutEffect, useEffect } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  Alert,
  BackHandler,
  FlatList,
} from "react-native";
// import Sound from "react-native-sound";
import { Icon } from "react-native-elements";
import Slider from "@react-native-community/slider";

import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../../reducers";

export const SongScreen = ({ navigation, route }) => {
  const [song, setSong] = useState(null);
  const { isLoading, songs } = useSelector((state) => state.song);

  // const [sliderEditing, setSliderEditing] = useState(false);
  // const [playState, setPlayState] = useState("paused");
  // const [playSeconds, setPlaySeconds] = useState(0);
  // const [duration, setDuration] = useState(0);
  // const [loop, setLoop] = useState(false);
  // const [random, setRandom] = useState(false);
  // const [isFavoriteSong, setIsFavoriteSong] = useState(false);
  // const [hasImage, setHasImage] = useState(false);

  useEffect(() => {
    const fetching = async () => {
      try {
        await dispatch(fetchSongs());
      } catch (err) {
        alert(err);
      }
    };
    fetching();
  }, []);

  useEffect(() => {
    const { song, position } = route.params;
    setSong(song);
  }, [route]);

  // const backTo = () => {
  //   navigation.goBack();
  // };

  const backHome = () => {
    console.log("backHome");
    // navigation.navigate("Home");
  };

  const handleFavoriteSong = () => {
    console.log("handleFavoriteSong");
  };

  const transferImg = () => {
    // this.setState({
    //   img: !hasImage,
    // });
    console.log("transferImg");
  };

  const selectSong = async (index) => {
    console.log("selectSong");
    // await this.sound.setCurrentTime(0);
    // await this.sound.pause();
    // await this.setState({
    //   index: index,
    //   playState: "playing",
    //   playSeconds: 0,
    // });
    // await this.play();
  };

  const playLoop = () => {
    console.log("playLoop");

    // this.setState({
    //   loop: !this.state.loop
    // });
  };

  const onSliderEditStart = () => {
    console.log("🚀 ~ onSliderEditStart");
    // this.sliderEditing = true;
  };

  const onSliderEditEnd = () => {
    console.log("🚀 ~ onSliderEditEnd");
    // this.sliderEditing = false;
  };

  const onSliderEditing = (value) => {
    console.log("🚀 ~ onSliderEditing");
    // if (this.sound) {
    //   this.sound.setCurrentTime(value);
    //   this.setState({ playSeconds: value });
    // }
  };

  const backPlay = async () => {
    console.log("🚀 ~ backPlay");
    // await this.calculate(-1);
    // this.play();
  };

  const pause = () => {
    console.log("🚀 ~ pause");

    // if (this.sound) {
    //   this.sound.pause();
    // }
    // this.sound.getCurrentTime((secs, isPlaying) => {
    //   this.sound.setCurrentTime(secs);
    //   this.setState({ playSeconds: secs });
    // });
    // this.setState({ playState: 'paused' });
  };

  const play = async () => {
    console.log("🚀 ~ play");
    // console.log(this.state.index)
    // this.sound = new Sound(
    //   this.props.movies[this.state.index].href,
    //   '',
    //   error => {
    //     if (error || !this.sound.getDuration()) {
    //       // console.log('failed to load the sound', error);
    //       // Alert.alert('Notice', 'audio file error. (Error code : 1)');
    //       this.setState({ playState: 'paused' });
    //     } else {
    //       this.sound.setCurrentTime(this.state.playSeconds);
    //       if (this.state.playSeconds == this.state.duration) {
    //         this.sound.play(this.playComplete);
    //       }
    //       this.setState({
    //         playState: 'playing',
    //         duration: this.sound.getDuration(),
    //       });
    //       this.sound.play(this.playComplete);
    //     }
    //   },
    // );
  };

  const nextPlay = async () => {
    console.log("🚀 ~ nextPlay");
    // await this.calculate(1);
    // this.play();
  };

  const playComplete = (success) => {
    console.log("🚀 ~ playComplete");
    // if (this.sound) {
    //   if (success) {
    //     if (this.state.loop) {
    //       this.play();
    //     } else {
    //       if (this.state.random) {
    //         const length = this.props.movies.length;
    //         const randomNumber = Math.floor(Math.random() * length);
    //         console.log("random number: ", randomNumber);
    //         this.setState({ index: randomNumber });
    //         this.play();
    //       } else {
    //         if (this.state.index < this.props.movies.length - 1) {
    //           this.setState({
    //             index: this.state.index + 1,
    //           });
    //           this.play();
    //         } else {
    //           this.setState({
    //             index: 0,
    //           });
    //           //this.play();
    //         }
    //       }
    //     }
    //   }

    //   this.setState({ playState: 'paused', playSeconds: 0 });
    //   this.sound.setCurrentTime(0);
    // }
  };

  return (
    <Text>abc</Text>
    // <View
    //   numberOfLines={2}
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     backgroundColor: "black",
    //     paddingHorizontal: 10,
    //   }}
    // >
    //   <View
    //     style={{
    //       flexDirection: "row",
    //       justifyContent: "space-between",
    //       marginVertical: 15,
    //       marginHorizontal: 10,
    //     }}
    //   >
    //     <TouchableOpacity onPress={() => backHome()}>
    //       <Icon
    //         name="chevron-left"
    //         size={20}
    //         color="#e12f81"
    //         type="font-awesome-5"
    //       />
    //     </TouchableOpacity>
    //     <TouchableOpacity>
    //       <Icon
    //         name="library-music"
    //         size={30}
    //         color="#e12f81"
    //         type="FontAwesome"
    //       />
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={() => transferImg()}>
    //       <Icon
    //         name={!hasImage ? "clipboard-list" : "images"}
    //         size={20}
    //         color="#e12f81"
    //         type="font-awesome-5"
    //       />
    //     </TouchableOpacity>
    //   </View>

    //   <View style={{ display: !hasImage ? "none" : "flex", flex: 1 }}>
    //     <FlatList
    //       data={songs}
    //       keyExtractor={(item) => item.href}
    //       renderItem={({ item, index }) => (
    //         <TouchableOpacity onPress={() => selectSong(index)}>
    //           <View style={{ flexDirection: "row", margin: 9 }}>
    //             <Image
    //               source={{ uri: item.img }}
    //               style={{ width: 60, height: 60 }}
    //             />
    //             <Text
    //               numberOfLines={2}
    //               style={{
    //                 paddingHorizontal: 9,
    //                 flex: 3,
    //                 color: "white",
    //               }}
    //             >
    //               {item.title.slice(4)}
    //             </Text>
    //             <Icon
    //               name="play-circle-outline"
    //               size={30}
    //               color="#517fa4"
    //               type="FontAwesome"
    //             />
    //           </View>
    //           <View
    //             style={{ flex: 1, height: 1, backgroundColor: "grey" }}
    //           ></View>
    //         </TouchableOpacity>
    //       )}
    //     />
    //   </View>
    //   <View style={{ display: hasImage ? "none" : "flex", flex: 1 }}>
    //     <Image
    //       source={{ uri: song.img }}
    //       style={{
    //         width: "100%",
    //         height: "100%",
    //         marginBottom: 15,
    //         alignSelf: "center",
    //       }}
    //     />
    //   </View>
    //   <View style={{ margin: 10 }}>
    //     <View
    //       style={{
    //         flexDirection: "row",
    //         justifyContent: "space-between",
    //         marginVertical: 15,
    //         marginHorizontal: 10,
    //       }}
    //     >
    //       <TouchableOpacity onPress={() => playLoop()}>
    //         <Icon
    //           name="loop"
    //           size={20}
    //           color={loop ? "#e12f81" : "white"}
    //           type="simple-line-icon"
    //         />
    //       </TouchableOpacity>
    //       <Text style={{ color: "white", alignSelf: "center", fontSize: 15 }}>
    //         {song.title.slice(4)}
    //       </Text>
    //       <TouchableOpacity onPress={() => playRandom()}>
    //         <Icon
    //           name="random"
    //           size={20}
    //           color={random ? "#e12f81" : "white"}
    //           type="font-awesome"
    //         />
    //       </TouchableOpacity>
    //     </View>
    //     <View
    //       style={{
    //         marginVertical: 15,
    //         marginHorizontal: 15,
    //         flexDirection: "row",
    //       }}
    //     >
    //       <Text style={{ color: "white", alignSelf: "center" }}>
    //         {currentTimeString}
    //       </Text>
    //       <Slider
    //         minimumValue={0}
    //         maximumValue={duration}
    //         minimumTrackTintColor="#FFFFFF"
    //         maximumTrackTintColor="#000000"
    //         onValueChange={onSliderEditing}
    //         onSlidingStart={onSliderEditStart}
    //         onSlidingComplete={onSliderEditEnd}
    //         value={playSeconds}
    //         style={{
    //           flex: 1,
    //           alignSelf: "center",
    //           marginHorizontal: Platform.select({ ios: 5 }),
    //           width: 200,
    //           height: 40,
    //         }}
    //       />
    //       <Text style={{ color: "white", alignSelf: "center" }}>
    //         {durationString}
    //       </Text>
    //     </View>
    //     <View
    //       style={{
    //         flexDirection: "row",
    //         justifyContent: "center",
    //         marginVertical: 15,
    //       }}
    //     >
    //       <TouchableOpacity onPress={() => backPlay()}>
    //         <Icon
    //           name="step-backward"
    //           size={30}
    //           color="white"
    //           type="font-awesome-5"
    //         />
    //       </TouchableOpacity>
    //       {playState == "playing" && (
    //         <TouchableOpacity
    //           onPress={() => pause()}
    //           style={{ marginHorizontal: 60 }}
    //         >
    //           <Icon name="pause" size={30} color="white" type="AntDesign" />
    //         </TouchableOpacity>
    //       )}
    //       {playState == "paused" && (
    //         <TouchableOpacity
    //           onPress={() => play()}
    //           style={{ marginHorizontal: 60 }}
    //         >
    //           <Icon name="play" size={30} color="white" type="font-awesome-5" />
    //         </TouchableOpacity>
    //       )}
    //       <TouchableOpacity onPress={() => nextPlay()}>
    //         <Icon
    //           name="step-forward"
    //           size={30}
    //           color="white"
    //           type="font-awesome-5"
    //         />
    //       </TouchableOpacity>
    //       <View
    //         style={{
    //           flexDirection: "row",
    //           justifyContent: "center",
    //           marginVertical: 15,
    //         }}
    //       ></View>
    //       <TouchableOpacity onPress={() => handleFavoriteSong()}>
    //         <Icon
    //           name="heart"
    //           size={20}
    //           color={isFavoriteSong ? "red" : "white"}
    //           type="font-awesome-5"
    //         ></Icon>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    // </View>
  );
};
