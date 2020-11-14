function Login() {
    if (firebase.auth().currentUser) {
        firebase.auth().signOut()
    }

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            swal.fire({
                icon: "success",
                title: "Login realizado com sucesso",
            }).then(() => {
                setTimeout(() => {
                    window.location.replace('index.html')
                }, 1000)
            })
        })
        .catch((error) => {
            const errorCode = error.code
            switch (errorCode) {
                case "auth/wrong-password":
                    swal.fire({
                        icon: "error",
                        title: "Senha inválida",
                    })
                    break
                case "auth/invalid-email":
                    swal.fire({
                        icon: "error",
                        title: "Email inválido",
                    })
                    break
                case "auth/user-not-found":
                    swal.fire({
                        icon: "error",
                        title: "Usuário não encontrado",
                    })
                    break
                default:
                    swal.fire({
                        icon: "error",
                        title: error.message,
                    })
            }
        })
}