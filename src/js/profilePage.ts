import {showTab, hideTabs} from './utils/tabs'
import {profileTabsHandler} from './utils/profilesTabHandler'
import "../css/style.css"
import "../css/profilePage.css"

hideTabs('.content-tab')
showTab('.content-tab')
profileTabsHandler('.profile-list-link', '.content-tab')