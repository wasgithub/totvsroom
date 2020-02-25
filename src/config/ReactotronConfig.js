import Reactotron from 'reactotron-react-native';

const ReactotronConfig = () => {
    console.tron = Reactotron
    .configure()
    .useReactNative()
    .connect()
}

export default ReactotronConfig;
