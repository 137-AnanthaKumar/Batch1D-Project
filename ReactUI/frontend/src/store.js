import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {
  adminSignInReducer,
  adminAddCustReducer,
  CustomerListReducer,
  TransactionListReducer,
} from "./reducers/adminReducers/adminReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  CustSignInReducer,
  CustChangePassReducer,
  CustRegisterReducer,
  CustChangeEmailReducer,
  CustChangeMobReducer,
  TransactionHistoryReducer,
  CustFundTransReducer,
} from "./reducers/customerReducers/CustReducer";

// combined reducers
const reducers = combineReducers({
  adminSignIn: adminSignInReducer,
  adminAddCust: adminAddCustReducer,
  adminTransactionList: TransactionListReducer,
  CustSignIn: CustSignInReducer,
  CustMobChange: CustChangeMobReducer,
  CustPassChange: CustChangePassReducer,
  CustEmailChange: CustChangeEmailReducer,
  CustList: CustomerListReducer,
  CustRegisterStore: CustRegisterReducer,
  CustTransHistory: TransactionHistoryReducer,
  FundTrans: CustFundTransReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export default store;
