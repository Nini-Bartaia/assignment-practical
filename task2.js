function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        const postTableBody = document.getElementById('post-table-body');

        posts.forEach(post => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${post.userId}</td>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>
          `;
          postTableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }

  fetchPosts();