import { HOME_PATH } from "../config/config_home";

// 마커 html
export function generateMarkerHtml(name) {
  return `
        <div class="marker_img">
          <img src="${HOME_PATH}/img/circle.png" />
          <span>${name}</span>
        </div>
      `;
}

// 마커 클릭 html
export function generateClickedMarkerHtml(name) {
  return `
        <div class="marker_img">
          <img src="${HOME_PATH}/img/clicked.png" />
          <span>${name}</span>
        </div>
      `;
}

export const marketIcon = `<img width="100" height="100" src="https://img.icons8.com/stickers/100/000000/stall.png" alt="stall"/>`

export const marketIcon2 = `<img width="100" height="100" src="https://img.icons8.com/stickers/100/000000/stall.png" alt="stall"/>`