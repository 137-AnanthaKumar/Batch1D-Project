import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {
  adminSignInReducer,
  adminAddCustReducer,
  CustomerListReducer,
  TransactionListReducer,
  NewListReducer,
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
  CustBillPayReducer,
  CustProfileReducer,

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
  NewList:  NewListReducer,
  CustRegisterStore: CustRegisterReducer,
  CustTransHistory: TransactionHistoryReducer,
  FundTrans: CustFundTransReducer,
  BillPay:CustBillPayReducer,
  CustProfile:CustProfileReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export default store;
