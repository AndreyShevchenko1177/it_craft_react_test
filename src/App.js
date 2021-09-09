import './App.scss';
import history from "./history";
import { Provider, connect } from "react-redux";
import {
  // BrowserRouter as Router, // https://stackoverflow.com/questions/42701129/how-to-push-to-history-in-react-router-v4
  Router,
  Route,
  Link,
  Switch,
  NavLink,
  Redirect,
} from "react-router-dom";

import {PageNotes, Page404, PageAbout} from './pages'




const store = 'store'


function App() {
  return (
    // <Provider store={store}>
            <Router history={history}>
                    <Switch>
                        <Route path="/notes" component={PageNotes} exact />
                        <Route path="/about" component={PageAbout} exact />
                        {/* <Route path="/" component={PageLogin} exact />
                        <Route path="/main/" component={CPageMain} exact />
                        <Route path="/main/:_chatId" component={CPageMain} exact />
                        <Route path="/newchat/:_chatId" component={CPageNewChat} exact /> */}

                        <Route component={Page404} exact /> 
                    </Switch>

            </Router>
        // </Provider>
  );
}

export default App;
