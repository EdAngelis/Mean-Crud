export class Employees {
    constructor(_id="", name="", position="", office="", salary=0){
        this._id = _id;
        this.name = name;
        this.position = position;
        this.office = office;
        this.salary = salary;

    }
    _id: String
    name: String
    position: String
    office: string
    salary: Number
}
