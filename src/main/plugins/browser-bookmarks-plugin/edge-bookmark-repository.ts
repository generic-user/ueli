import { Browser } from "./browser";
import { IconType } from "../../../common/icon/icon-type";
import { Icon } from "../../../common/icon/icon";
import { GoogleChromeBookmarkRepository } from "./google-chrome-bookmark-repository";

export class EdgeBookmarkRepository extends GoogleChromeBookmarkRepository {
    public browser = Browser.Edge;
    public defaultIcon: Icon = {
        parameter: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Layer_1" width="256px" height="256px" viewBox="0 0 256 256"><defs><style>.cls-1{fill:url(#linear-gradient);}.cls-2{opacity:0.35;fill:url(#radial-gradient);}.cls-2,.cls-4{isolation:isolate;}.cls-3{fill:url(#linear-gradient-2);}.cls-4{opacity:0.41;fill:url(#radial-gradient-2);}.cls-5{fill:url(#radial-gradient-3);}.cls-6{fill:url(#radial-gradient-4);}</style><linearGradient id="linear-gradient" x1="63.33" y1="84.03" x2="241.67" y2="84.03" gradientTransform="matrix(1, 0, 0, -1, 0, 266)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0c59a4"/><stop offset="1" stop-color="#114a8b"/></linearGradient><radialGradient id="radial-gradient" cx="161.83" cy="68.91" r="95.38" gradientTransform="matrix(1, 0, 0, -0.95, 0, 248.84)" gradientUnits="userSpaceOnUse"><stop offset="0.72" stop-opacity="0"/><stop offset="0.95" stop-opacity="0.53"/><stop offset="1"/></radialGradient><linearGradient id="linear-gradient-2" x1="157.35" y1="161.39" x2="45.96" y2="40.06" gradientTransform="matrix(1, 0, 0, -1, 0, 266)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1b9de2"/><stop offset="0.16" stop-color="#1595df"/><stop offset="0.67" stop-color="#0680d7"/><stop offset="1" stop-color="#0078d4"/></linearGradient><radialGradient id="radial-gradient-2" cx="-340.29" cy="62.99" r="143.24" gradientTransform="matrix(0.15, -0.99, -0.8, -0.12, 176.64, -125.4)" gradientUnits="userSpaceOnUse"><stop offset="0.76" stop-opacity="0"/><stop offset="0.95" stop-opacity="0.5"/><stop offset="1"/></radialGradient><radialGradient id="radial-gradient-3" cx="113.37" cy="570.21" r="202.43" gradientTransform="matrix(-0.04, 1, 2.13, 0.08, -1179.54, -106.69)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#35c1f1"/><stop offset="0.11" stop-color="#34c1ed"/><stop offset="0.23" stop-color="#2fc2df"/><stop offset="0.31" stop-color="#2bc3d2"/><stop offset="0.67" stop-color="#36c752"/></radialGradient><radialGradient id="radial-gradient-4" cx="376.52" cy="567.97" r="97.34" gradientTransform="matrix(0.28, 0.96, 0.78, -0.23, -303.76, -148.5)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#66eb6e"/><stop offset="1" stop-color="#66eb6e" stop-opacity="0"/></radialGradient></defs><title>Edge_Logo_265x265</title><path class="cls-1" d="M235.68,195.46a93.73,93.73,0,0,1-10.54,4.71,101.87,101.87,0,0,1-35.9,6.46c-47.32,0-88.54-32.55-88.54-74.32A31.48,31.48,0,0,1,117.13,105c-42.8,1.8-53.8,46.4-53.8,72.53,0,73.88,68.09,81.37,82.76,81.37,7.91,0,19.84-2.3,27-4.56l1.31-.44A128.34,128.34,0,0,0,241,201.1,4,4,0,0,0,235.68,195.46Z" transform="translate(-4.63 -4.92)"/><path class="cls-2" d="M235.68,195.46a93.73,93.73,0,0,1-10.54,4.71,101.87,101.87,0,0,1-35.9,6.46c-47.32,0-88.54-32.55-88.54-74.32A31.48,31.48,0,0,1,117.13,105c-42.8,1.8-53.8,46.4-53.8,72.53,0,73.88,68.09,81.37,82.76,81.37,7.91,0,19.84-2.3,27-4.56l1.31-.44A128.34,128.34,0,0,0,241,201.1,4,4,0,0,0,235.68,195.46Z" transform="translate(-4.63 -4.92)"/><path class="cls-3" d="M110.34,246.34A79.2,79.2,0,0,1,87.6,225,80.72,80.72,0,0,1,117.13,105c3.12-1.47,8.45-4.13,15.54-4a32.35,32.35,0,0,1,25.69,13,31.88,31.88,0,0,1,6.36,18.66c0-.21,24.46-79.6-80-79.6-43.9,0-80,41.66-80,78.21a130.15,130.15,0,0,0,12.11,56,128,128,0,0,0,156.38,67.11,75.55,75.55,0,0,1-62.78-8Z" transform="translate(-4.63 -4.92)"/><path class="cls-4" d="M110.34,246.34A79.2,79.2,0,0,1,87.6,225,80.72,80.72,0,0,1,117.13,105c3.12-1.47,8.45-4.13,15.54-4a32.35,32.35,0,0,1,25.69,13,31.88,31.88,0,0,1,6.36,18.66c0-.21,24.46-79.6-80-79.6-43.9,0-80,41.66-80,78.21a130.15,130.15,0,0,0,12.11,56,128,128,0,0,0,156.38,67.11,75.55,75.55,0,0,1-62.78-8Z" transform="translate(-4.63 -4.92)"/><path class="cls-5" d="M156.94,153.78c-.81,1.05-3.3,2.5-3.3,5.66,0,2.61,1.7,5.12,4.72,7.23,14.38,10,41.49,8.68,41.56,8.68A59.56,59.56,0,0,0,230.19,167a61.38,61.38,0,0,0,30.43-52.88c.26-22.41-8-37.31-11.34-43.91C228.09,28.76,182.35,4.92,132.61,4.92a128,128,0,0,0-128,126.2c.48-36.54,36.8-66.05,80-66.05,3.5,0,23.46.34,42,10.07,16.34,8.58,24.9,18.94,30.85,29.21,6.18,10.67,7.28,24.15,7.28,29.52S162,147.2,156.94,153.78Z" transform="translate(-4.63 -4.92)"/><path class="cls-6" d="M156.94,153.78c-.81,1.05-3.3,2.5-3.3,5.66,0,2.61,1.7,5.12,4.72,7.23,14.38,10,41.49,8.68,41.56,8.68A59.56,59.56,0,0,0,230.19,167a61.38,61.38,0,0,0,30.43-52.88c.26-22.41-8-37.31-11.34-43.91C228.09,28.76,182.35,4.92,132.61,4.92a128,128,0,0,0-128,126.2c.48-36.54,36.8-66.05,80-66.05,3.5,0,23.46.34,42,10.07,16.34,8.58,24.9,18.94,30.85,29.21,6.18,10.67,7.28,24.15,7.28,29.52S162,147.2,156.94,153.78Z" transform="translate(-4.63 -4.92)"/></svg>`,
        type: IconType.SVG,
    };
}
