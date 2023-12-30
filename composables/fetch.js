// let url = 'http://localhost:3001/';
// const url = 'http://192.168.43.105:8000/';
const url = 'https://hiveapi.emeterr.com/api/v1'

export const apiClient = async (route, method, body) => {
  try {
    console.log(body);
    if (body) {
      const response = await fetch(`${url}${route}`, {
        method: method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        body: JSON.stringify(body),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      });
      return response;
    } else {
      const response = await fetch(`${url}${route}`, {
        method: method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      });
      return response;
    }
  } catch (err) {
    return err;
  }
};

function FetchApi() {
  this.url = "https://hiveapi.emeterr.com/api/v1"
  // this.url = "http://127.0.0.1:8000/api/v1"
  // this.url = "http://192.168.239.156:8000/api/v1"
  this.get = async (route, headers = {}) => {
    console.log(headers)
    try {
      const response = await fetch(`${this.url}${route}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
          "Authorization": headers.Authorization,
          "Accept": "application/json"
        },

        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      });
      return response;

    } catch (err) {
      return err;
    }
  }
  this.post = async (route, body = {}, headers = {}) => {
    console.log(body)
    try {
      const response = await fetch(`${this.url}${route}`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(body),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          ...headers
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      });
      return response;

    } catch (err) {
      return err;
    }
  }
  this.patch = async (route, body = {}, headers = {}) => {
    try {
      const response = await fetch(`${this.url}${route}`, {
        method: 'PATCH',
        mode: 'no-cors',
        cache: 'no-cache',
        body: JSON.stringify(body),
        credentials: 'include',
        headers: {
          'Accept': 'Application/json',
          'authorization': headers?.Authorization
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      });
      return response;

    } catch (err) {
      return err;
    }
  },
    this.delete = async (route, headers = {}) => {
      try {
        const response = await fetch(`${this.url}${route}`, {
          method: 'DELETE',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            'Accept': 'Application/json',
            'authorization': headers?.Authorization
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
        });
        return response;

      } catch (err) {
        return err;
      }
    }
}

export const UseFetch = new FetchApi()