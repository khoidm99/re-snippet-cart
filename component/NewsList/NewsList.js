import News from "./News/News";
import { observer, inject } from "mobx-react";
export default inject("NewsStore")(
  observer(function NewsList() {
    return <News />;
  })
);
