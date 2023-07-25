/* 

[readystate]

0: uninitialized
1: loading
2: loaded
3: interactive
4: complete

*/

/* callback --------------------------------------------- */

/* function xhr(method, url, onSuccess, onFail, body, headers) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;
    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response));
      } else {
        onFail('실패');
      }
    }
  });

  xhr.send(JSON.stringify(body));
}

xhr(
  'POST',
  'https://jsonplaceholder.typicode.com/users',
  (result) => {
    console.log(result);
  },
  (err) => {
    console.log(err);
  },
  {
    name: 'tiger',
    age: 32,
  },
  {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
);
 */

function xhr(options) {
  // method, url, onSuccess, onFail, body, headers

  const {
    method = 'GET',
    url = '',
    onSuccess = null,
    onFail = null,
    body = null,
    headers = {
      'Content-Type': 'application.json',
      'Access-Control-Allow-Origin': '*',
    },
  } = options;

  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;
    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response));
      } else {
        onFail('실패');
      }
    }
  });

  xhr.send(JSON.stringify(body));
}

// method, url, onSuccess, onFail, body, headers
xhr({
  url: 'https://jsonplaceholder.typicode.com/users',
  onSuccess: () => {},
  onFail: () => {},
  body: {
    name: 'tiger',
  },
});

/* 
'POST',
'https://jsonplaceholder.typicode.com/users',
(result) => {
  console.log(result);
},
(err) => {
  console.log(err);
},
{
  name: 'tiger',
  age: 32,
},
{
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
} */
