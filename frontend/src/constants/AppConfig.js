/**
 * App Config File
 */
const AppConfig = {
    appLogo: require('../assets/img/site-logo.png'),          // App Logo
    appUrl: 'http://reactify.theironnetwork.org',             // App Url
    brandName: 'Reactify',                                    // Brand Name
    navCollapsed: false,                                      // Sidebar collapse
    darkMode: false,                                          // Dark Mode
    boxLayout: false,                                         // Box Layout
    rtlLayout: false,                                         // RTL Layout
    miniSidebar: false,                                       // Mini Sidebar
    sidebarActiveFilter: 'dark',                              // Select Sidebar Color You can Choose following color 'primary', 'blue', 'warning', 'info', 'danger','success','purple'
    enableSidebarBackgroundImage: true,                       // Enable Sidebar Background Image
    sidebarImage: require('../assets/img/sidebar-1.jpg'),     // Select sidebar image
    locale: {
        languageId: 'english',
        locale: 'en',
        name: 'English',
        icon: 'en',
    },
    enableUserTour: false,                                      // Enable / Disable User Tour
    copyRightText: 'Reactify © 2018 All Rights Reserved.',      // Copy Right Text
    // light theme colors
    themeColors: {
        'primary': '#722ED1',
        'secondary': '#096DD9',
        'info': '#13C2C2',
        'success': '#389E0D',
        'warning': '#FAAD14',
        'danger': '#CF1322',

        'default': '#657786',
        'purple': '#6f42c1',

        'yellow': '#D46B08',
        'white': '#FFFFFF',
        'dark': '#000000',
        'greyLighten': '#DFE3E8',
        'grey': '#9FA5AB'
    },
    // dark theme colors
    darkThemeColors: {
        darkBgColor: '#424242'
    }
}

export default AppConfig;
