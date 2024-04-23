import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { EmptyState, Infobox, SearchInput, VideoCard } from "../../components";
import { getUserPosts, searchPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import { useLocalSearchParams } from "expo-router";
import { useGlobalContext } from "../../context/GlobalProvider";
import { icons } from "../../constants";

const Profile = () => {
  const [user, setUser, setIsLoggedIn] = useGlobalContext();
  const { data: posts } = useAppwrite(() => getUserPosts(user.$id));

  console.log(posts)

  const logout = () => {};
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard title={item.title}
        thumbnail={item.thumbnail}
        video={item.video}
        creator={item.creator.username}
        avatar={item.creator.avatar} />}
        ListHeaderComponent={() => (
          <View className="w-full justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity
              className="w-full items-end mb-10"
              onPress={logout}
            >
              <Image
                source={icons.logout}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </TouchableOpacity>

            <View className="w-16 h-16 border border-secondary rounded-lg justify-center items-center">
              <Image
                source={{ uri: user?.avatar }}
                className="w-[90%] h-[90%] rounded-lg"
                resizeMode="cover"
              />

              <Infobox
                title={user?.username}
                containerStyles="mt-5"
                titleStyle="text-lg"
              />
              <View className="mt-5 flex-row">
                <Infobox
                  title={posts. length || 0}
                  subtitle="Posts"
                  containerStyles="mr-10"
                  titleStyle="text-xl"
                />
                <Infobox
                  title="1.2k"
                  subtitle="Followers"
                  titleStyle="text-xl"
                />
              </View>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos found for this search query"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
