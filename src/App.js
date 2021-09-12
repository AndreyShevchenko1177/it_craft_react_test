import './App.scss';
import history from "./history";

import {Provider } from "react-redux";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import {PageNotes, Page404, PageAbout, PageLogin} from './pages';
import { store } from "./Store";







function App() {



  return (<>
    <Provider store={store}>
    <div className='appWrapper'>
        <Router history={history}>
          <Switch>
           <Redirect exact from="/" to="/login" />
            <Route path="/login" component={PageLogin} exact />
            <Route path="/notes" component={PageNotes} exact />
            <Route path="/about" component={PageAbout} exact />
            {/*           <Route path="/main/" component={CPageMain} exact />
                        <Route path="/main/:_chatId" component={CPageMain} exact />
                        <Route path="/newchat/:_chatId" component={CPageNewChat} exact /> */}

          <Route component={Page404} exact />
        </Switch>

      </Router>
    </div>
    </Provider>
  </>
  );
}

export default App;
