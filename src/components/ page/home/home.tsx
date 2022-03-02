import { observer } from "mobx-react";
import { Text } from "native-base";
import React, { useEffect } from "react";
import { useDynamicRequest } from "../../../hooks/useDynamicRequest";
import { api } from "../../../http/api";
import { Video } from "../../../model/video";
import { SearchStore } from "../../../store/search";
import { CustomView } from "../../atom/custom-view/custom-view";
import { Header } from "../../organism/header/header";

export const Home = observer(({ search }: SearchStore) => {
  const { query } = search;

  const { loading, success, data, tryAgain } = useDynamicRequest(
    api.getYoutubeVideos,
    query
  );

  useEffect(() => {
    tryAgain();
  }, [query]);

  return (
    <CustomView>
      <Header />
      <>
        {loading && <Text>Loading...</Text>}
        {!loading &&
          success &&
          data.items.map((video: Video) => <Text>{video.snippet.title}</Text>)}
      </>
    </CustomView>
  );
});
