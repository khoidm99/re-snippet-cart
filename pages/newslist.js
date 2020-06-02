import Head from "next/head";
//mobx
import { observer, inject } from "mobx-react";
import NewsList from "../component/NewsList/NewsList";
import Header from "./../component/Header/Header";

export default inject("NewsStore")(
  observer(function News() {
    return (
      <div className="container">
        <Head>
          <title>Tin Tức Mới Nhất</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header>
          <Header />
        </header>

        <NewsList />

        <div></div>
      </div>
    );
  })
);
