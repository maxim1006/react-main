(function () {
    window.minimui = {
        createFragment(id, selector) {
            loadMetadata(id).then(metadata => {
                loadScript(metadata.js, () => {
                    const element = document.querySelector(selector)
                    minimui.fragmentCreators[id].create(element);
                    // setTimeout(() => {
                    //     minimui.fragmentCreators[id].create(element);
                    // }, 1000);
                });
            });
        },

        fragmentCreators: {},
        registerFragment(id, fragmentCreator) {
            minimui.fragmentCreators[id] = fragmentCreator;
        }
    }

    function loadMetadata(id) {
        return fetch(`//localhost:5001/fragmentMetadata?id=${id}`, {headers: {'Content-Type': 'application/json'}})
            .then(response => response.json())
            .catch(e => console.error("Fail to load fragment metadata", e));
    }

    function loadScript(url, callback) {
        const script = document.createElement('script');
        script.onload = () => callback();
        script.onerror = e => console.error("Fail to load fragments resource", e);
        script.src = url;
        document.head.appendChild(script);
    }
}());
