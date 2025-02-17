### отладчик
chrome://inspect#devices

### "some 'text' search"
найти ровно по словам

### site:site_name request_string
ex.: site:javascript.info window

### -what_to_exclude
ex.: javascript -jquery

### after:year before:year
ex.: javascript.info after:2020

### year..year
ex.: react 2019..2020

### (A | B) C
dom reference (angular|react)vue

### *
whildcard
ex.: site:*.javascript.info - www

### filetype:pdf
ex.: cracking the coding interview filetype:pdf

### related:related_to_site
ex.: related:javascript.info

### cache:cache_for_site_in_google
ex.: cache:grinz.ru

### открыть хром без cors
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
