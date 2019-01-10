// @flow

export function fetchData(url: string, success: () => void, dataLoaded: (data: any) => void, error: () => void) {
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
        .then((data) =>  { if (dataLoaded) { dataLoaded(data); }})
        .catch(() => { if (error) { error(); }});
}