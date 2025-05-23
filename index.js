/**
 * @format
 */
import TrackPlayer from 'react-native-track-player';
import { AppRegistry } from "react-native";
import App from "./Practice01/src/AppPro";
import App2 from "../ReactNative/Practice02/src/Practice02";
import App3 from "./Practice03/src/practice03";
import App4 from "./Practice04/src/practice04";
import App5 from "./Practice05/src/practice05";
import App6 from "./Practice06/src/practice06";
import App7 from "../ReactNative/Practice07/src/practice07";
import App8 from "./MusicApp/src/practice08";
import Navigations from "./Navigations/src/Navigations";
import { name as appName } from "./app.json";
import {playbackService} from './musicPlayerService'

AppRegistry.registerComponent(appName, () => Navigations);
TrackPlayer.registerPlaybackService(() => playbackService);