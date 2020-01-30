import { DefaultTheme } from 'react-native-paper';
import colors from "../colors"


const paperTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        ...colors
    },
};

export default paperTheme;