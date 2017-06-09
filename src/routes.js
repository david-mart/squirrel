import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./components/App";
import Chat from "./components/chat";
import Photos from "./components/photos";
import NotFoundPage from "./components/NotFoundPage";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Chat} />
    <Route path="/photos" component={Photos} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
