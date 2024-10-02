"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";
import { setPoint } from "@/lib/features/pointSlice";

export default function StoreProvider({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(setPoint(index));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
