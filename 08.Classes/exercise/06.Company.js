class Company {
    constructor() {
        this.departaments = {}
    }
    addEmployee(name, salary, position, department) {
        if (salary <= 0 || !name || !position || !department){
            throw new Error("Invalid input!")
        }
        if (this.departaments[department] === undefined) {
            this.departaments[department] = []
        }
        this.departaments[department].push({"name": name, "salary": salary, "position": position})
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }
    bestDepartment() {
        let bestSalary = 0
        let bestDepartment
        for (let dep in this.departaments) {
            let currentSalary = 0
            for (let emp of this.departaments[dep]) {
                currentSalary += emp["salary"]
            }
            if (currentSalary / dep.length > bestSalary) {
                bestSalary = currentSalary / this.departaments[dep].length
                bestDepartment = dep
            }
        }
        let resultDepartment = this.departaments[bestDepartment].sort((a, b) => {
            if ( a.salary === b.salary){
                return a.name.localeCompare(b.name)
            } return  b.salary - a.salary
        })
        let result = `Best Department is: ${bestDepartment}\nAverage salary: ${bestSalary.toFixed(2)}\n`
        for (let e = 0; e < resultDepartment.length; e++) {
            result += `${resultDepartment[e]["name"]} ${resultDepartment[e]["salary"]} ${resultDepartment[e]["position"]}\n`
        }
        return result.trim()
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
