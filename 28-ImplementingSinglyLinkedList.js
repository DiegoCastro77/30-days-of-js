class Patient {
    constructor(name, age, bedNumber) {
        this.name = name;
        this.age = age;
        this.bedNumber = bedNumber;
        this.next = null;
    }
}

class PatientList {
    constructor(totalBeds) {
        this.totalBeds = totalBeds;
        this.head = null;
        this.availableBeds = totalBeds;
    }

    addPatient(name, age) {
        if (this.availableBeds === 0) {
            throw new Error("No hay camas disponibles");
        }

        const newPatient = new Patient(name, age, this.totalBeds - this.availableBeds + 1);

        if (!this.head) {
            this.head = newPatient;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newPatient;
        }

        this.availableBeds--;
    }

    removePatient(name) {
        let current = this.head;
        let previous = null;

        while (current !== null) {
            if (current.name === name) {
                if (previous === null) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.availableBeds++;
                return;
            }
            previous = current;
            current = current.next;
        }

        throw new Error("Paciente no encontrado");
    }

    getPatient(name) {
        let current = this.head;
        while (current !== null) {
            if (current.name === name) {
                return {
                    name: current.name,
                    age: current.age,
                    bedNumber: current.bedNumber
                };
            }
            current = current.next;
        }

        throw new Error("Paciente no encontrado");
    }

    getPatientList() {
        const patientList = [];
        let current = this.head;
        while (current !== null) {
            patientList.push({
                name: current.name,
                age: current.age,
                bedNumber: current.bedNumber
            });
            current = current.next;
        }
        return patientList;
    }

    getAvailableBeds() {
        return this.availableBeds;
    }
}

const list1 = new PatientList(3);
list1.addPatient("Paciente 1", 20);
list1.addPatient("Paciente 2", 30);

console.log(list1.getPatientList());

const list2 = new PatientList(3);
list2.addPatient("Paciente 1", 20);
list2.addPatient("Paciente 2", 30);

console.log(list2.getPatient("Paciente 1"));

const list3 = new PatientList(3);
list3.addPatient("Paciente 1", 20);
list3.addPatient("Paciente 2", 30);
list3.removePatient("Paciente 1");

console.log(list3.getPatientList());
