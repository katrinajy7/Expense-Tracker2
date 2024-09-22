export const selectUser = state => state.user.user;
export const SelectUserCurrency = state => state.user.user.currency;
export const selectTotal = state => state.user.transactionsTotal
export const selectLoading = state => state.user.loading;
export const selectError = state => state.user.error;
