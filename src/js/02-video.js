import vimeoPlayer from "@vimeo/player";
import lodashThrottle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new vimeoPlayer(iframe);

player.on('timeupdate', lodashThrottle((event) => {localStorage.setItem('videoplayer-current-time', JSON.stringify(event.seconds))}, 1000));

const saveData = localStorage.getItem('videoplayer-current-time');
const parseData = JSON.parse(saveData);
player.setCurrentTime(parseData || 0);
