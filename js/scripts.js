// addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('form'),
        submitButton = document.getElementById('submit-btn')
        // inputs = document.querySelectorAll('input')

    let timeout = null

    let errors = {
        nickName: true,
        email: true,
        password: true
    }

    let mailformatRegex = /^[^@]+@\w+(\.\w+)+\w$/



    document.querySelectorAll('.form-box').forEach(box => {
        const boxInput = box.querySelector('input')

        boxInput.addEventListener('keydown', () => {
            clearTimeout(timeout)

            timeout = setTimeout(() => {
                console.log(`Input: ${boxInput.name} Value:`, boxInput.value)
                validation(box, boxInput)
            }, 300)
        })
    })

    const validation = (box, boxInput) => {
        // if (boxInput.name === 'nickName') {
        //     if (boxInput.value === '') {
        //         showError(true, box, boxInput)
        //     } else {
        //         showError(false, box, boxInput)
        //     }
        // }

        if (boxInput.value === '') {
            showError(true, box, boxInput)
        } else {
            showError(false, box, boxInput)
        }

        if (boxInput.name === 'email') {
            // if (boxInput.value === '') {
            //     showError(true, box, boxInput)
            // } else {
            //     showError(false, box, boxInput)
            // }

            if (!boxInput.value.match(mailformatRegex)) {
                showError(true, box, boxInput)
            } else {
                showError(false, box, boxInput)
            }
        }

        if (boxInput.name === 'password') {
            if (boxInput.value.length <= 6) {
                showError(true, box, boxInput)
            } else {
                showError(false, box, boxInput)
            }
        }

        submitController()
    }

    const showError = (check, box, boxInput) => {
        if (check) {
            box.classList.remove('form-success')
            box.classList.add('form-error')
            errors[boxInput.name] = true
        } else {
            box.classList.add('form-success')
            box.classList.remove('form-error')
            errors[boxInput.name] = false
        }
    }

    const submitController = () => {
        console.log('submitController es', errors)
        if (errors.nickName || errors.email || errors.password) {
            submitButton.toggleAttribute('disabled', true)
        } else {
            submitButton.toggleAttribute('disabled', false)
        }
    }

    form.addEventListener('submit', e => {
        e.preventDefault()

        // e.target es el formulario cuando se hace clik en submit.
        const formData = new FormData(e.target)

        // Mostrando los datos del formulario por consola.
        console.log([...formData])

        // Otro método
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`)
        }

    })



    // inputs.forEach(input => {
    //     input.addEventListener('keyup', () => {
    //         console.log(`Input: ${input.name} Value:`, input.value)
    //     })
    // })




// })