###manifest.json 
`short_name`: the name taken when added to the home screen and situated amongst your other apps
`name`: the name shown in the ‘add to home screen prompt’. short_name is used if not set.
`icons`: your app icons (logo) in varying sizes for maximum compatibility with different sized devices.
`start_url`: initial navigation path. The location in your app that you would like your users to start when they open it.
`display`: used to customize the browser view display for different app experiences. standalone will give it the native feel. (Options: standalone, fullscreen, minimal-ui & browser)
`theme_color`: browser toolbar color (Recommendation: the theme_color should match the meta theme color specified in your document head)
`background_color`: splash screen color when app is starting up.

Addistional:
"orientation": "landscape" // for games
"scope": "/maps/" // directory considered as part of your app
