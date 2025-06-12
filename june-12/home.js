    const dummyData = [
      { id: 1, name: 'Sandhya', email: 'sandhya@gmail.com' },
      { id: 2, name: 'Anand', email: 'Anand@gmail.com' },
      { id: 3, name: 'taylor', email: 'taylor@gmail.com' }
    ];
    function showLoading() {
  document.getElementById('loading').style.display = 'block';
}

function hideLoading() {
  document.getElementById('loading').style.display = 'none';
}


    function FunCallback(callback,errorCallback) {
      setTimeout(() => {
        const shouldFail = Math.random() < 0.3; 
        if (shouldFail) {
          errorCallback('Failed to fetch users (Callback)');
        } else {
          callback(dummyData);
        }
      }, 1000);
    }

    function FunPromise() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const shouldFail = Math.random() < 0.3;
          if (shouldFail) {
            reject('Failed to fetch users (Promise/Async)');
          } else {
            resolve(dummyData);
          }
        }, 1000);
      });
    }

    //callback
    function getUsersWithCallback() {
        showLoading();
  FunCallback((users) => {
    hideLoading();
    displayUsers('Callback', users);
  }, (err) => {
    hideLoading();
    alert(err);
  });
    }

    //promise
    function getUsersWithPromise() {
  showLoading();
  FunPromise()
    .then((users) => {
      hideLoading();
      displayUsers('Promise', users);
    })
    .catch((err) => {
      hideLoading();
      alert(err);
    });
    }

    //async/await
async function getUsersWithAsyncAwait() {
  showLoading();
  try {
    const users = await FunPromise();
    displayUsers('Async/Await', users);
  } catch (err) {
    alert(err);
  } finally {
    hideLoading();
  }
}

    function displayUsers(method, users) {
      const output = document.getElementById('user-output');
      output.innerHTML = `<h3>Loaded with ${method}</h3><ul>` + 
        users.map(user => `<li>Name: ${user.name} email: ${user.email}</li>`).join('') +
        `</ul>`;
    }
