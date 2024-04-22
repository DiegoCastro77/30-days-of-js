function validateForm(formData, registeredUsers) {

    const requiredFields = ['name', 'lastname', 'email', 'password'];
    const missingFields = [];
    requiredFields.forEach(field => {
        if (!(field in formData)) {
            missingFields.push(field);
        }
    });
    if (missingFields.length > 0) {
        throw new Error(`Faltan los siguientes campos requeridos: ${missingFields.join(', ')}`);
    }

    const existingEmail = registeredUsers.find(user => user.email === formData.email);
    if (existingEmail) {
        throw new Error(`El email ${formData.email} ya está en uso.`);
    }

    const newUser = {
        name: formData.name,
        lastname: formData.lastname,
        email: formData.email
    };
    registeredUsers.push(newUser);

    return `Tu registro fue exitoso ${formData.name} ${formData.lastname}`;
}

const formData = {
    name: "Juan",
    lastname: "Perez",
    email: "pedro@example.com",
    password: "123456"
};

const registeredUsers = [
    { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
    { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
];

try {
    const result = validateForm(formData, registeredUsers);
    console.log(result);
} catch (error) {
    console.error(error.message);
}
