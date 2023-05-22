import { HOME_PATH } from "../config/config_home";

// 마커 html
export function generateMarkerHtml(name) {
  return `
        <div>
          <div class="w-14 h-14 flex items-center justify-center rounded-full bg-primary-500 shadow-xl">
            <img class="w-10" src="${HOME_PATH}/img/market.png" />
          </div>
        </div>
      `;
}

// 마커 html
export function generateMyPositionMarkerHtml() {
  return `
        <div>
        <img class="w-14" src="${HOME_PATH}/img/myposition.png" />
        </div>
      `;
}

// 마커 클릭 html
export function generateClickedMarkerHtml() {
  return `
  <div>
  <div class="w-14 h-14 flex items-center justify-center rounded-full bg-primary-200 shadow-xl">
    <img class="w-10" src="${HOME_PATH}/img/market.png" />
  </div>
</div>
      `;
}
