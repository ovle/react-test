
export function fetchData(url, success, dataLoaded, error) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            if (success) {
                success();
            }

            return response;
        })
        .then((response) => response.json())
        .then((items) =>  { if (dataLoaded) { dataLoaded(items); }})
        .catch(() => { if (error) { error(); }});
}