import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectIsLoggedIn } from "redux/auth/selectors";
import { TotalIncome } from 'shared'