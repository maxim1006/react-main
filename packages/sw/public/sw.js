// хранилище - открывается по ключу (любая строка)
const CacheKey = 'cache-v1';

const initCache = () => {
    // подключаемся к хранилищу и кешируем файлы
    return caches.open(CacheKey).then(
        cache => {
            return cache.addAll(['./index.html', './page1.html', './page2.html']);
        },
        error => {
            console.log(error);
        },
    );
};

const tryNetwork = (req, timeout) => {
    console.log(req);
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(reject, timeout);
        fetch(req).then(res => {
            clearTimeout(timeoutId);
            // клонируем респонс от запроса
            const responseClone = res.clone();
            // кешируем в хранилище
            caches.open(CacheKey).then(cache => {
                cache.put(req, responseClone);
            });
            resolve(res);
            // Reject also if network fetch rejects.
        }, reject);
    });
};

const getFromCache = req => {
    console.log('network is off so getting from cache...');
    return caches.open(CacheKey).then(cache => {
        return cache.match(req).then(result => {
            return result || Promise.reject('no-match');
        });
    });
};

// self — это объект Service Worker в JavaScript
// в install можем загрузить и закешировать необходимые файлы, вызовется первым
self.addEventListener('install', e => {
    console.log('Installed');
    e.waitUntil(initCache());
});

// обычно используется для очистки ранее загрузенных данных
self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(
                // удаляем все хранилища которые не соответствуют ключу
                keyList.map(key => {
                    if (key !== CacheKey) {
                        return caches.delete(key);
                    }
                }),
            );
        }),
    );
});

// когда браузер пытается загрузить любой ресурс - вызовется это событие
self.addEventListener('fetch', e => {
    console.log('Try network and store result or get data from cache');
    // Try network and if it fails, go for the cached copy.
    e.respondWith(tryNetwork(e.request, 400).catch(() => getFromCache(e.request)));
});
