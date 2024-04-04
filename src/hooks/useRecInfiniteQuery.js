import { useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

//api
import { GetRecommendUser, GetRecommend } from "../apis/main";

const useRecInfiniteQuery = () => {
  const {
    data,
    isLoading,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["getNewRecommend"],
    queryFn: ({ pageParam = 1 }) => {
      console.log(pageParam);
      return GetRecommendUser(pageParam);
    },
    getNextPageParam: (lastPage) =>
      lastPage.page !== lastPage.totalPage ? lastPage.page + 1 : undefined,
    suspense: true,
    staleTime: 90 * 1000,

    retry: 0,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const lyrics = useMemo(() => {
    const lyricsData = data?.pages
      ? data.pages.flatMap((page) => page.data)
      : [];

    return lyricsData;
  }, [data]);

  return {
    lyrics,
    isLoading,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  };
};

export default useRecInfiniteQuery;
