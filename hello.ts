function transformLinkUri(uri: string) {
    let regex = /^(?![:/\\])[\w./\\]+$/;
    if (regex.test(uri)) {
        return formatUrl + uri;
    } else {
        return uri;
    }
};
