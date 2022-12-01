// linkTarget: _self, _blank
export function openLink(linkTarget: string, href: string) {
    if (linkTarget) {
        window.open(href, linkTarget);
    } else {
        window.location.href = href;
    }
}
