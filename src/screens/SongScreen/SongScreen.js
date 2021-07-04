import React, { useState, useEffect } from "react";
import { View, Image, ActivityIndicator } from "react-native";
// import Sound from "react-native-sound";

import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../../reducers";

import {
  PlayList,
  PlayHeader,
  PlayBrowser,
  PlaySlider,
  PlayInformation,
} from "./components";

import { getObject, setObject } from "../../helper/AsyncStorage";

const getAudioTimeString = (seconds) => {
  const m = parseInt((seconds % (60 * 60)) / 60);
  const s = parseInt(seconds % 60);

  return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
};

const LINK_SOUND =
  "https://data25.chiasenhac.com/download2/2174/0/2173778-f967e564/128/Sai%20Gon%20Hom%20Nay%20Mua%20-%20JSOL_%20Hoang%20Duyen.mp3";

export const SongScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { isLoading, songs, favoriteSongs } = useSelector(
    (state) => state.song
  );

  const [typeList, setTypeList] = useState("all");
  const [songList, setSongList] = useState([]);
  const [song, setSong] = useState(null);
  const [positionSong, setPositionSong] = useState(0);

  const [sliderEditing, setSliderEditing] = useState(false);
  const [playState, setPlayState] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const [playSeconds, setPlaySeconds] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoop, setIsLoop] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const [isFavoriteSong, setIsFavoriteSong] = useState(false);
  const [isShowListSong, setIsShowListSong] = useState(false);
  const [playSecondsString, setPlaySecondsString] = useState(false);
  const [durationString, setDurationString] = useState(false);

  // const [sound, setSound] = useState();

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
    const { song, position, typeList } = route.params;
    setSong(song);
    setTypeList(typeList);
    setPositionSong(position);

    const checkSong = async () => {
      const list = await getObject("favorite");
      const isExist = list.find((e) => e.title == song.title);
      setIsFavoriteSong(!!isExist);
    };

    checkSong();
    return () => {
      setIsShowListSong(false);
    };
  }, [route]);

  useEffect(() => {
    if (songs.length) {
      setSongList(typeList == "all" ? songs : favoriteSongs);
    }
  }, [songs, typeList]);

  useEffect(() => {
    const playSecondsString = getAudioTimeString(playSeconds);
    const durationString = getAudioTimeString(duration);

    setPlaySecondsString(playSecondsString);
    setDurationString(durationString);
  }, [songs, playSeconds, duration]);

  if (isLoading || !song) {
    return (
      <View
        style={{
          backgroundColor: "black",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <ActivityIndicator animating={true} />
      </View>
    );
  } else {
    return (
      <View
        numberOfLines={2}
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "black",
          paddingHorizontal: 4,
          paddingTop: 40,
        }}
      >
        <PlayHeader
          isShowListSong={isShowListSong}
          backHome={async () => {
            await dispatch(fetchSongs());
            navigation.goBack();
          }}
          openListSong={() => setIsShowListSong(!isShowListSong)}
        />

        <PlayList
          isShowListSong={isShowListSong}
          songs={songList}
          selectSong={(e) => {
            console.log("song index: ", e);
          }}
        />

        <View style={{ display: isShowListSong ? "none" : "flex", flex: 1 }}>
          <Image
            source={{ uri: song.img }}
            style={{
              width: "100%",
              height: "100%",
              marginBottom: 15,
              alignSelf: "center",
            }}
          />
        </View>

        <View style={{ margin: 10 }}>
          <PlayInformation
            nameSong={song.title}
            isFavoriteSong={isFavoriteSong}
            handleChangeFavoriteSong={async () => {
              let status = !isFavoriteSong;
              setIsFavoriteSong(status);

              let list = await getObject("favorite");
              list = list ? list : [];

              if (status) {
                list.push(song);
              } else {
                list = list.filter((e) => e.title != song.title);
              }

              await setObject("favorite", list);
            }}
          />

          <PlaySlider
            playSeconds={playSeconds}
            duration={duration}
            playSecondsString={playSecondsString}
            durationString={durationString}
            handleOnValueChange={() => {
              console.log("onValueChange");
            }}
            handleOnSlidingStart={() => {
              console.log("onSlidingStart");
            }}
            handleOnSlidingComplete={() => {
              console.log("onSlidingComplete");
            }}
          />

          <PlayBrowser
            isLoop={isLoop}
            isPlaying={isPlaying}
            isRandom={isRandom}
            handleLoopSong={() => setIsLoop(!isLoop)}
            handleRandomSong={() => setIsRandom(!isRandom)}
            handlePlaySong={() => setIsPlaying(!isPlaying)}
            handleNextSong={() => {
              console.log("nextSong");
            }}
            handlePreviousSong={() => {
              console.log("previousSong");
            }}
          />
        </View>
      </View>
    );
  }
};
