import bindAll from 'lodash.bindall';
import React from 'react';
import ReactDOM from 'react-dom';
import PaintEditor from '..';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/combine-reducers';
import {intlInitialState, IntlProvider} from './reducers/intl.js';
import styles from './playground.css';
// scratch-render-fonts is a playground-only dep. Fonts are expected to be imported
// as a peer dependency, otherwise there will be two copies of them.
import {FONTS} from 'scratch-render-fonts';

const appTarget = document.createElement('div');
appTarget.setAttribute('class', styles.playgroundContainer);
document.body.appendChild(appTarget);
const store = createStore(
    reducer,
    intlInitialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const svgString = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50.96868" height="91.9345" viewBox="0,0,50.96868,91.9345">
    <g transform="translate(-214.51587,-134.03275)">
        <g stroke-miterlimit="10">
            <g>
                <path d="M242.96417,225.71725c2.677,-6.5778 6.802,-4.6181 6.802,-4.6181c4.3025,1.5599 7.0625,4.6181 7.0625,4.6181h-13.8645" fill="#e3a066" fill-rule="nonzero" stroke="none" stroke-width="1"/>
                <path d="M249.51617,221.00605c4.3025,1.5595 7.3125,4.7112 7.3125,4.7112h-14.125" fill="none" fill-rule="evenodd" stroke="#8d6a4a" stroke-width="0.5"/>
                <path d="M238.51617,225.71725c3.0835,-3.1421 8.1245,-3.7278 8.1245,-3.7278c4.3025,1.56 5.74,3.7278 5.74,3.7278h-13.8645" fill="#e3a066" fill-rule="nonzero" stroke="none" stroke-width="1"/>
                <path d="M246.64067,221.98945c4.3025,1.56 5.74,3.7278 5.74,3.7278h-14.125" fill="none" fill-rule="evenodd" stroke="#8d6a4a" stroke-width="0.5"/>
                <path d="M247.81817,137.73905c3.4375,3.8017 -0.5625,8.4208 -0.5625,8.4208c0,0 -1.405,2.7962 0.3855,3.5995c0.0245,13.3782 -0.625,41.1381 -0.625,41.6046c0,0.6702 1.5,27.9856 1.6455,28.5095c0.2415,0.8682 1.1045,1.655 1.1045,1.655c-1.354,-0.1679 -2.4375,-1.4876 -2.4375,-1.4876c0.3335,1.1729 1.521,1.9481 1.521,1.9481c-1.021,-0.1232 -2.042,-0.0453 -2.5005,-0.0422c-0.4165,0.0015 -5.7495,1.3402 -7.833,3.7705h-12.5835c-0.25,0 -10.833,-11.1436 -11.1665,-24.2986c-0.3335,-13.155 3.263,-25.8284 6,-31.7058c3.1775,-6.8251 8.4895,-19.775 8.8645,-21.3149c0.375,-1.5393 0.014,-7.7999 2.4205,-10.9108c1.672,-2.1617 4.944,-3.2044 7.111,-3.2044c2.1665,0 6.747,1.3448 8.656,3.4563" fill="#3e5766" fill-rule="nonzero" stroke="none" stroke-width="1"/>
                <path d="M248.22247,150.48605c0,0 2.0955,2.843 3.6895,6.2314c3.5,7.7501 5.75,19.2506 4.504,33.0139c-1.149,12.6945 -2.233,20.8413 -5.9425,27.3024c-0.5085,0.8858 1.4595,2.0225 1.4595,2.0225c-0.8335,0 -1.9395,0.1021 -1.9395,0.1021c0.083,1.0476 1.8145,1.3639 1.8145,1.3639c-2.396,1.1733 -3.1045,-0.4907 -3.1045,-0.4907c0.396,0.9743 0.9545,1.479 0.9545,1.479c-0.667,0.0418 -2.3295,-1.4694 -2.3295,-1.4694c0,1.1311 1.521,1.948 1.521,1.948c-9.9065,0.0644 -14.5835,-12.0238 -13.8335,-15.459c0.75,-3.4351 7.667,-36.6999 8.112,-44.073c0.4445,-7.3736 5.0945,-11.9711 5.0945,-11.9711" fill="#fbf8ea" fill-rule="nonzero" stroke="none" stroke-width="1"/>
                <path d="M243.29737,160.36815c0.3336,-9.3066 4.3435,-10.6087 4.3435,-10.6087l1.661,2.2432c-3.1544,0.4087 -6.0084,8.4786 -6.0045,8.3655" fill="#f0c579" fill-rule="nonzero" stroke="none" stroke-width="1"/>
                <path d="M246.80787,147.37465c0,0 -0.45,0.9859 0.125,1.5922c0.7155,0.7541 11.6175,11.9529 9.5836,39.4645c-1.6671,22.539 -5.4056,27.1153 -5.8266,28.0424c-0.2804,0.6168 -0.7669,1.5765 1.243,2.582c0,0 -1.2404,0.1548 -1.9395,0.1026c0,0 0.4711,0.9446 1.8145,1.3639c0,0 -0.6664,0.9074 -2.9164,0.2373" fill="none" fill-rule="evenodd" stroke="#d1c1b5" stroke-width="0.5"/>
                <path d="M248.66187,219.87345c0.1875,0.8813 1.104,1.655 1.104,1.655c-1.354,-0.1679 -2.4375,-1.4876 -2.4375,-1.4876c0.3335,1.1729 1.521,1.9481 1.521,1.9481c-1.021,-0.1232 -2.042,-0.0453 -2.5,-0.0422c-0.4165,0.0015 -5.75,1.3402 -7.8334,3.7705h-12.5831c-0.25,0 -10.8335,-11.1436 -11.167,-24.2986c-0.3329,-13.155 3.2636,-25.8284 6,-31.7058c3.1781,-6.8251 8.4895,-19.775 8.8645,-21.3149c0.375,-1.5393 0.0145,-7.7999 2.4205,-10.9108c1.6726,-2.1617 4.9445,-3.2044 7.111,-3.2044c2.1666,0 6.823,1.278 8.6566,3.4563" fill="none" fill-rule="evenodd" stroke="#2e374a" stroke-width="0.5"/>
            </g>
            <g>
                <path d="M244.19317,145.71995c-0.098,0.0141 4.2355,-2.4267 4.5625,-4.3989c0.25,-1.5082 -1.375,-3.1738 -0.9375,-3.582c0.2915,-0.2725 0.943,1.1774 2.219,1.8224c1.3655,0.6908 3.281,1.6967 6.437,2.1366c3.1565,0.4399 5.8755,1.2885 7.0315,2.5137c1.1565,1.2256 1.75,2.5765 1.75,2.5765c0,0 -1.4685,-2.294 -10.219,-1.4137c-6.7185,0.3454 -7.229,1.3614 -8.229,2.0004c-1,0.6384 0.198,-2.0632 -2.6145,-1.655" fill="#e3a066" fill-rule="nonzero" stroke="none" stroke-width="1"/>
                <path d="M246.44317,145.49995c0,0 0.2795,-0.0975 0.776,-0.2272c0.2495,-0.0618 0.5525,-0.1367 0.9,-0.2232c0.1745,-0.0407 0.3605,-0.084 0.556,-0.1297c0.1965,-0.0427 0.4075,-0.0548 0.6245,-0.09c1.7425,-0.2373 4.078,-0.4866 6.427,-0.5254c1.1745,-0.0206 2.351,0.0096 3.451,0.1086c0.5505,0.0493 1.0805,0.1212 1.5815,0.2011c0.5005,0.089 0.971,0.1921 1.401,0.3077c0.2115,0.0704 0.423,0.1106 0.6115,0.19c0.185,0.0855 0.361,0.1669 0.526,0.2428c0.3215,0.174 0.598,0.3243 0.809,0.4792c0.2205,0.1372 0.368,0.281 0.4735,0.3695c0.104,0.0905 0.16,0.1382 0.16,0.1382c0,0 -0.0635,-0.0372 -0.1825,-0.1071c-0.1185,-0.0699 -0.2875,-0.1764 -0.521,-0.2785c-0.2245,-0.1176 -0.516,-0.2217 -0.8455,-0.3393c-0.338,-0.1001 -0.7185,-0.1996 -1.13,-0.3313c-0.417,-0.1121 -0.875,-0.2127 -1.3645,-0.2992c-0.491,-0.0784 -1.011,-0.1488 -1.5525,-0.1975c-1.0835,-0.0976 -2.247,-0.1272 -3.4105,-0.1071c-2.3285,0.0382 -4.6515,0.286 -6.383,0.5223c-0.4305,0.0764 -0.831,0.1071 -1.187,0.1297c-0.355,0.0312 -0.6645,0.0589 -0.9195,0.0815c-0.255,0.0246 -0.4555,0.0442 -0.5925,0.0578c-0.1345,0.0131 -0.2085,0.0271 -0.2085,0.0271" fill="#8d6a4a" fill-rule="nonzero" stroke="none" stroke-width="1"/>
                <path d="M244.19317,145.71995c-0.098,0.0141 4.2355,-2.4267 4.5625,-4.3989c0.25,-1.5082 -1.375,-3.1738 -0.9375,-3.582c0.2915,-0.2725 0.943,1.1774 2.219,1.8224c1.3655,0.6908 3.281,1.6967 6.437,2.1366c3.1565,0.4399 5.8755,1.2885 7.0315,2.5137c1.1565,1.2256 1.75,2.5765 1.75,2.5765c0,0 -1.4685,-2.294 -10.219,-1.4137c-6.7185,0.3454 -7.229,1.3614 -8.229,2.0004c-1,0.6384 0.198,-2.0632 -2.6145,-1.655z" fill="none" fill-rule="evenodd" stroke="#8d6a4a" stroke-width="0.5"/>
            </g>
            <g>
                <path d="M240.75567,139.99005c0.078,-0.6596 1.0315,-1.2568 2.5,-1.194c1.953,0.1569 2.257,1.1467 2.25,1.5394c-0.0085,0.4756 -0.1385,1.1628 -2.373,1.1628c-1.9085,0 -2.447,-0.9155 -2.377,-1.5082" fill="#e2e3e4" fill-rule="nonzero" stroke="none" stroke-width="1"/>
                <path d="M243.52127,141.47815c0,0 -0.7654,-0.4711 -0.6095,-1.3669c0.1561,-0.8929 1.073,-1.09 1.4186,-1.0583c0.3454,0.0312 0.623,0.3273 0.623,0.3273c0,0 0.74,0.558 0.5525,1.1708c-0.1875,0.6129 -1.1145,0.8859 -1.1145,0.8859c0,0 -0.7466,0.104 -0.8701,0.0412" fill="#2e374a" fill-rule="nonzero" stroke="none" stroke-width="1"/>
                <path d="M240.75567,140.03275c0.078,-0.6596 1.0315,-1.2568 2.5,-1.194c1.953,0.1569 2.257,1.1468 2.25,1.5394c-0.0085,0.4756 -0.1385,1.1628 -2.373,1.1628c-1.9085,0 -2.447,-0.9155 -2.377,-1.5082z" fill="none" fill-rule="evenodd" stroke="#2e374a" stroke-width="0.5"/>
            </g>
            <g>
                <path d="M240.74987,167.14885c1.4006,5.7815 1.3495,17.5957 -0.817,27.9017c-2.1664,10.306 -12.0835,21.1147 -12.8335,20.612c-0.75,-0.5027 -0.5,-1.5916 -0.3335,-4.8594c0.167,-3.2678 -1.1665,-7.2062 -2.1664,-9.0492c-1,-1.843 -0.5836,-6.0328 -0.5836,-6.0328c0,0 3.7356,-22.1061 4.507,-25.0054c0.993,-3.7343 3.7325,-5.0751 3.7325,-5.0751" fill="#3e5766" fill-rule="nonzero" stroke="none" stroke-width="1"/>
                <path d="M240.74987,167.14885c1.4006,5.7815 1.3495,17.5957 -0.817,27.9017c-2.1664,10.306 -12.0835,21.1147 -12.8335,20.612c-0.75,-0.5027 -0.5,-1.5916 -0.3335,-4.8594c0.167,-3.2678 -1.1665,-7.2062 -2.1664,-9.0492c-1,-1.843 -0.5836,-6.0328 -0.5836,-6.0328c0,0 3.7356,-22.1061 4.507,-25.0054c0.993,-3.7343 3.7325,-5.0751 3.7325,-5.0751" fill="none" fill-rule="evenodd" stroke="#2e374a" stroke-width="0.5"/>
            </g>
        </g>
    </g>
</svg>`;
class Playground extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'downloadImage',
            'handleUpdateName',
            'handleUpdateImage',
            'onUploadImage'
        ]);
        // Append ?dir=rtl to URL to get RTL layout
        const match = location.search.match(/dir=([^&]+)/);
        const rtl = match && match[1] == 'rtl';
        this.id = 0;
        this.state = {
            name: 'penguin',
            rotationCenterX: 25.48413426585367,
            rotationCenterY: 45.967250000000035,
            imageFormat: 'svg', // 'svg', 'png', or 'jpg'
            image: svgString, // svg string or data URI
            imageId: this.id, // If this changes, the paint editor will reload
            rtl: rtl,
        };
        this.reusableCanvas = document.createElement('canvas');
    }
    handleUpdateName (name) {
        this.setState({name});
    }
    handleUpdateImage (isVector, image, rotationCenterX, rotationCenterY) {
        this.setState({
            imageFormat: isVector ? 'svg' : 'png'
        });
        if (!isVector) {
            console.log(`Image width: ${image.width}    Image height: ${image.height}`);
        }
        console.log(`rotationCenterX: ${rotationCenterX}    rotationCenterY: ${rotationCenterY}`);
        if (isVector) {
            this.setState({image, rotationCenterX, rotationCenterY});
        } else { // is Bitmap
            // image parameter has type ImageData
            // paint editor takes dataURI as input
            this.reusableCanvas.width = image.width;
            this.reusableCanvas.height = image.height;
            const context = this.reusableCanvas.getContext('2d', { willReadFrequently: true });
            context.putImageData(image, 0, 0);
            this.setState({
                image: this.reusableCanvas.toDataURL('image/png'),
                rotationCenterX: rotationCenterX,
                rotationCenterY: rotationCenterY
            });
        }
    }
    downloadImage () {
        const downloadLink = document.createElement('a');
        document.body.appendChild(downloadLink);

        const format = this.state.imageFormat;
        let data = this.state.image;
        if (format === 'png' || format === 'jpg') {
            data = this.b64toByteArray(data);
        } else {
            data = [data];
        }
        const blob = new Blob(data, {type: format});
        const filename = `${this.state.name}.${format}`;
        if ('download' in HTMLAnchorElement.prototype) {
            const url = window.URL.createObjectURL(blob);
            downloadLink.href = url;
            downloadLink.download = filename;
            downloadLink.type = blob.type;
            downloadLink.click();
            window.URL.revokeObjectURL(url);
        } else {
            // iOS Safari, open a new page and set href to data-uri
            let popup = window.open('', '_blank');
            const reader = new FileReader();
            reader.onloadend = function () {
                popup.location.href = reader.result;
                popup = null;
            };
            reader.readAsDataURL(blob);
        }
        document.body.removeChild(downloadLink);
    }
    b64toByteArray (b64Data, sliceSize=512) {
        // Remove header
        b64Data = b64Data.substring(b64Data.indexOf('base64,') + 7);

        const byteCharacters = atob(b64Data);
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);

            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }

      return byteArrays;
    }
    uploadImage() {
        document.getElementById(styles.fileInput).click();
    }
    onUploadImage(event) {
        var file = event.target.files[0];
        var type = file.type === 'image/svg+xml' ? 'svg' :
            file.type === 'image/png' ? 'png' :
            file.type === 'image/jpg' ? 'jpg' :
            file.type === 'image/jpeg' ? 'jpg' :
            null;

        var reader = new FileReader();
        if (type === 'svg') {
            reader.readAsText(file,'UTF-8');
        } else if (type === 'png' || type === 'jpg'){
            reader.readAsDataURL(file);
        } else {
            alert("Couldn't read file type: " + file.type);
        }

        const that = this;
        reader.onload = readerEvent => {
            var content = readerEvent.target.result; // this is the content!

            that.setState({
                image: content,
                name: file.name.split('.').slice(0, -1).join('.'),
                imageId: ++that.id,
                imageFormat: type,
                rotationCenterX: undefined,
                rotationCenterY: undefined,
            });
       }
    }
    render () {
        return (
            <div className={styles.wrapper}>
                <PaintEditor
                    {...this.state}
                    onUpdateName={this.handleUpdateName}
                    onUpdateImage={this.handleUpdateImage}
                />
                <button className={styles.playgroundButton}  onClick={this.uploadImage}>Upload</button>
                <input id={styles.fileInput} type="file" name="name" onChange={this.onUploadImage} />
                <button className={styles.playgroundButton} onClick={this.downloadImage}>Download</button>
            </div>
        );
    }

}
ReactDOM.render((
    <Provider store={store}>
        <IntlProvider>
            <Playground />
        </IntlProvider>
    </Provider>
), appTarget);
