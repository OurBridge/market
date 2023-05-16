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

// 마커 클릭 html
export function generateClickedMarkerHtml(name) {
  return `
  <div>
  <div>
    <div class="bg-white border border-prigray-400">
      <span>${name}</span>
    </div>
  </div>
  <div class="w-14 h-14 flex items-center justify-center rounded-full bg-primary-200 shadow-xl">
    <img class="w-10" src="${HOME_PATH}/img/market.png" />
  </div>
</div>
      `;
}