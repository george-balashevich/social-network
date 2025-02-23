import { showTab, hideTabs } from './utils/tabs.js';
import { profileTabsHandler } from './utils/profilesTabHandler.js';
hideTabs('.content-tab');
showTab('.content-tab');
profileTabsHandler('.profile-list-link', '.content-tab');
