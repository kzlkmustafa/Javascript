function Employee(name,salary) {
    if(!(this instanceof Employee)){
        return new Employee(name,salary);
    }
        this.name = name;
        this.salary = salary;
}

Employee.prototype.calculateSalary =  function(){
    var month = new Date().getMonth()+1;
    var tax = 0;
    var total = this.salary*month;

    if(total<=20000){
        tax = total*0.2
    }else if(total>20000 && total<=30000){
        tax = total * 0.25;
    }else{
        tax = total * 0.3;
    }
    return {
        tax : tax,
        total : total,
        paid : total-tax
    }
}


var emp1 = Employee('mehmet',6000);
var emp1_salary = emp1.calculateSalary();

console.log(`${emp1.name} isimli personel toplam ${emp1_salary.tax} 
vergi kesintisi ile ${emp1_salary.paid} maaş almıştır`);


var emp2 = Employee('can', 7000);
var emp2_salary = emp2.calculateSalary();

console.log(`${emp2.name} isimli personel toplam ${emp2_salary.tax} 
vergi kesintisi ile ${emp2_salary.paid} maaş almıştır`);

