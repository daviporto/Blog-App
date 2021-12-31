import { AppThunk } from "..";
import { setJWT, withAuthentication } from "../../api/HttpApi";
import { getSession, Register, SingIn, saveSession, logOut } from "../../api/UserApi";
import { clearStack, goto } from "../../navigation";
import { Routes } from "../../navigation/Routes";
import {setLoading } from "./actions";
import {setUser} from '../user/actions'



