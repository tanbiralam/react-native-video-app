<!-- <Video
          source={{ uri: video }}
          className="mt-3 h-60 w-full rounded-xl"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }

            if (status.error) {
              Alert.alert("Video unavailable please try again later.");
              setPlay(false);
            }
          }}
        /> -->