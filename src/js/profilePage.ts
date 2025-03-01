import { showTab, hideTabs } from './utils/tabs'
import { profileTabsHandler } from './utils/profilesTabHandler'
import { setProfileInfo } from './utils/setProfileInfo'
import { loadTabs } from './utils/loadTabs'
import "../css/style.css"
import "../css/profilePage.css"

document.addEventListener("DOMContentLoaded", () => {
  hideTabs('.content-tab')
  showTab('.content-tab')
  profileTabsHandler('.profile-list-link', '.content-tab')
  setProfileInfo('.user-info-block')
  loadTabs('.posts')
})
