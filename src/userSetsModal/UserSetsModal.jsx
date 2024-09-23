import React, { userRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectLoading, selectUser } from '../../../redux/user/selectors';
import {
    changeAvatarThunk,
    deleteAvatarThunk,
    updateUserInfoThunk,
  } from '../../../redux/user/operations';
  import { CirclesWithBar } from 'react-loader-spinner';

  import Symbols from 'images/svg/Symbols';
  import {
    GrayButton,
    StyledBtnWrap,
    StyledInputName,
    StyledInputUpd,
    StyledLabelUpd,
    StyledLoader,
    StyledSaveBtn,
    StyledSelect,
    StyledSvgWrap,
    StyledTitle,
    StyledWrap,
  } from '../../transactionForm/userSetsModal/UserSetsModal.styled';