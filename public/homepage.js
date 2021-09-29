const logoutEl = document.getElementById('logout');

const handleLogout = async (event) => {
    try {
        fetch('/api/users/logout', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        .then((res) => res.json())
        .then((result) => {
            alert(`you've been logged out`)
        });
    }
}