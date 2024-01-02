"use client";

import Receipt from "@/components/Result/Receipt";
import Cart from "@/components/Result/Cart";
import { trackDataQueryKey } from "@/utils/queryKey";
import { queryClient } from "@/utils/Provider";
import { TopAlbum, TopTrack } from "@/components/Result/type";

export default function Result() {
  const cachedData: { topAlbum: TopAlbum[]; topTrack: TopTrack[] } | undefined =
    queryClient.getQueryData(trackDataQueryKey);

  if (!cachedData) return;

  return (
    <>
      <Cart albums={cachedData.topAlbum} />
      <Receipt track={cachedData} />
    </>
  );
}
