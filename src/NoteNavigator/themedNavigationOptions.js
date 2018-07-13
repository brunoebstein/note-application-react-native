export const themedNavigationOptions = options => ({
  screenProps: { theme },
}) => ({
  headerStyle: { backgroundColor: theme.main.bgColor },
  headerTintColor: theme.main.fgColor,
  ...options,
});
